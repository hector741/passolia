import { z } from "zod";

import { planningInstructions } from "@/modules/ai/planning-prompt";
import { limits } from "@/server/limits";

export const aiCapabilities = [
  "capture_structure",
  "task_breakdown",
  "clarify_task",
  "explain_priority",
  "plan_day",
  "minimal_routine",
  "start_support",
  "review_return",
  "simplify_instructions",
  "propose_preferences",
] as const;

export type AiCapability = (typeof aiCapabilities)[number];

export const aiItemKinds = [
  "task",
  "step",
  "routine_step",
  "focus",
  "preference",
  "note",
] as const;

export type AiItemKind = (typeof aiItemKinds)[number];

const capabilityRules: Record<AiCapability, { max: number; kinds: AiItemKind[] }> = {
  capture_structure: { max: 8, kinds: ["task"] },
  task_breakdown: { max: 8, kinds: ["step"] },
  clarify_task: { max: 1, kinds: ["task"] },
  explain_priority: { max: 7, kinds: ["focus"] },
  plan_day: { max: 7, kinds: ["focus"] },
  minimal_routine: { max: 8, kinds: ["routine_step"] },
  start_support: { max: 2, kinds: ["task", "step"] },
  review_return: { max: 8, kinds: ["note"] },
  simplify_instructions: { max: 1, kinds: ["note"] },
  propose_preferences: { max: 3, kinds: ["preference"] },
};

export const proposalJsonSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    schema_version: { type: "integer", enum: [1] },
    outcome: { type: "string", enum: ["proposal", "clarify", "out_of_scope"] },
    summary: { type: "string" },
    question: { type: ["string", "null"] },
    explanation: { type: "string" },
    warnings: { type: "array", items: { type: "string" } },
    items: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          local_id: { type: "string" },
          title: { type: "string" },
          detail: { type: "string" },
          estimate_minutes: { type: ["integer", "null"] },
          due_on: { type: ["string", "null"] },
          depends_on: { type: "array", items: { type: "string" } },
          kind: { type: "string", enum: [...aiItemKinds] },
        },
        required: [
          "local_id",
          "title",
          "detail",
          "estimate_minutes",
          "due_on",
          "depends_on",
          "kind",
        ],
      },
    },
  },
  required: [
    "schema_version",
    "outcome",
    "summary",
    "question",
    "explanation",
    "warnings",
    "items",
  ],
} as const;

const envelopeSchema = z.object({
  schema_version: z.literal(1),
  outcome: z.enum(["proposal", "clarify", "out_of_scope"]),
  summary: z.string(),
  question: z.string().nullable(),
  explanation: z.string(),
  warnings: z.array(z.string()),
  items: z.array(
    z.object({
      local_id: z.string(),
      title: z.string(),
      detail: z.string(),
      estimate_minutes: z.number().int().nullable(),
      due_on: z.string().nullable(),
      depends_on: z.array(z.string()),
      kind: z.enum(aiItemKinds),
    }),
  ),
});

export type AiEnvelope = z.infer<typeof envelopeSchema>;

export type AiContextTask = {
  id: string;
  title: string;
  dueOn: string | null;
  estimateMinutes: number | null;
  status: "open" | "in_progress" | "done" | "canceled";
};

export type ValidatedProposal = {
  outcome: AiEnvelope["outcome"];
  summary: string;
  question: string | null;
  explanation: string;
  warnings: string[];
  items: {
    localId: string;
    title: string;
    detail: string;
    estimateMinutes: number | null;
    dueOn: string | null;
    dependsOn: string[];
    kind: AiItemKind;
  }[];
};

function clip(value: string, max: number): string {
  return value.trim().slice(0, max);
}

function compactText(value: string): string {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/^(preciso|quero|tenho que|vou|favor|por favor)\s+/, "")
    .replace(/\b(o|a|os|as|um|uma|de|da|do|das|dos|meu|minha|meus|minhas|seu|sua|para|pra|no|na|em|que|comecar|comece)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceLines(sourceText: string): string[] {
  return sourceText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line && !/^prazo\s+\d{4}-\d{2}-\d{2}$/i.test(line));
}

function sameAction(title: string, source: string): boolean {
  const left = compactText(title);
  const right = compactText(source);
  if (!left || !right) {
    return false;
  }
  if (left === right) {
    return true;
  }
  const leftover = (longer: string, shorter: string) => {
    if (!longer.includes(shorter)) {
      return false;
    }
    return longer.replace(shorter, " ").trim().split(/\s+/).filter(Boolean).length <= 2;
  };
  return leftover(left, right) || leftover(right, left);
}

function repeatsTask(
  items: { title: string }[],
  sourceText: string,
  capability: AiCapability,
): string | null {
  const lines = sourceLines(sourceText);
  const task = lines[0] ?? sourceText;
  const echoed = items.some(
    (item) => sameAction(item.title, task) || lines.some((line) => sameAction(item.title, line)),
  );
  if (echoed) {
    return "A sugestão repetiu a tarefa inteira. Para arrumar um quarto, os títulos têm de ser partes como arrumar a cama, juntar a roupa e varrer. Nenhum título pode ser a frase original.";
  }
  const splits = capability === "capture_structure" || capability === "task_breakdown";
  if (splits && items.length < 3) {
    return "Divida em pelo menos três ações menores do mesmo pedido. Um título só, igual à tarefa, não serve.";
  }
  return null;
}

function hasCycle(items: { localId: string; dependsOn: string[] }[]): boolean {
  const color = new Map<string, number>();
  const byId = new Map(items.map((item) => [item.localId, item]));
  const visit = (id: string): boolean => {
    const state = color.get(id) ?? 0;
    if (state === 1) {
      return true;
    }
    if (state === 2) {
      return false;
    }
    color.set(id, 1);
    for (const next of byId.get(id)?.dependsOn ?? []) {
      if (visit(next)) {
        return true;
      }
    }
    color.set(id, 2);
    return false;
  };
  return items.some((item) => visit(item.localId));
}

export function validateEnvelope(
  raw: unknown,
  input: { capability: AiCapability; sourceText: string; allowedTaskIds: string[] },
): { ok: true; value: ValidatedProposal } | { ok: false; message: string } {
  const parsed = envelopeSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, message: "A resposta não seguiu o formato combinado." };
  }
  const rule = capabilityRules[input.capability];
  const data = parsed.data;
  if (data.items.length > rule.max) {
    return { ok: false, message: "A sugestão trouxe itens demais." };
  }
  if (data.outcome !== "proposal" && data.items.length > 0) {
    return { ok: false, message: "Pergunta ou recusa não pode trazer itens para salvar." };
  }
  if (data.outcome === "clarify" && !data.question?.trim()) {
    return { ok: false, message: "Faltou a pergunta de esclarecimento." };
  }
  const ids = new Set<string>();
  const items: ValidatedProposal["items"] = [];
  for (const item of data.items) {
    const localId = item.local_id.trim();
    if (!/^[A-Za-z0-9_-]{1,40}$/.test(localId) || ids.has(localId)) {
      return { ok: false, message: "Um item veio com identificador inválido." };
    }
    ids.add(localId);
    if (!rule.kinds.includes(item.kind)) {
      return { ok: false, message: "Um item veio com um tipo que esta função não aceita." };
    }
    if ((item.kind === "focus" || input.capability === "explain_priority" || input.capability === "plan_day") && !input.allowedTaskIds.includes(localId)) {
      return { ok: false, message: "A sugestão citou uma tarefa que não está nesta lista." };
    }
    if (item.kind === "preference" && !["focus_limit", "available_minutes", "memory"].includes(item.title.trim())) {
      return { ok: false, message: "A preferência sugerida não é uma opção deste aplicativo." };
    }
    const title = clip(item.title, limits.titleCharacters);
    if (!title) {
      return { ok: false, message: "Um item veio sem título." };
    }
    let dueOn = item.due_on;
    if (dueOn && !/^\d{4}-\d{2}-\d{2}$/.test(dueOn)) {
      return { ok: false, message: "Uma data veio incompleta." };
    }
    if (dueOn && !input.sourceText.includes(dueOn)) {
      dueOn = null;
    }
    const estimate = item.estimate_minutes;
    if (estimate !== null && (estimate < 1 || estimate > 240)) {
      return { ok: false, message: "Uma estimativa ficou fora da faixa de 1 a 240 minutos." };
    }
    for (const dependency of item.depends_on) {
      if (!ids.has(dependency) && !data.items.some((candidate) => candidate.local_id === dependency)) {
        return { ok: false, message: "Um passo depende de outro que não está na sugestão." };
      }
    }
    items.push({
      localId,
      title,
      detail: clip(item.detail, 500),
      estimateMinutes: estimate,
      dueOn,
      dependsOn: item.depends_on,
      kind: item.kind,
    });
  }
  if (hasCycle(items)) {
    return { ok: false, message: "Os passos formam uma dependência circular." };
  }
  if (
    data.outcome === "proposal" &&
    (input.capability === "capture_structure" ||
      input.capability === "task_breakdown" ||
      input.capability === "start_support")
  ) {
    const echo = repeatsTask(items, input.sourceText, input.capability);
    if (echo) {
      return { ok: false, message: echo };
    }
  }
  const warnings = data.warnings.slice(0, 6).map((warning) => clip(warning, 240)).filter(Boolean);
  if (items.some((item) => item.dueOn === null) && data.items.some((item) => item.due_on && !input.sourceText.includes(item.due_on))) {
    warnings.push("Uma data foi retirada porque não estava no texto.");
  }
  return {
    ok: true,
    value: {
      outcome: data.outcome,
      summary: clip(data.summary, 400),
      question: data.question ? clip(data.question, 300) : null,
      explanation: clip(data.explanation, 600),
      warnings,
      items,
    },
  };
}

export const aiRequestSchema = z.object({
  capability: z.enum(aiCapabilities),
  text: z.string().trim().min(1).max(limits.captureCharacters),
  idempotencyKey: z.string().uuid(),
  targetTaskId: z.string().max(80).nullable().optional(),
  referenceDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  timezone: z.string().trim().min(1).max(80),
  tasks: z
    .array(
      z.object({
        id: z.string().max(80),
        title: z.string().max(limits.titleCharacters),
        dueOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
        estimateMinutes: z.number().int().min(1).max(240).nullable(),
        status: z.enum(["open", "in_progress", "done", "canceled"]),
      }),
    )
    .max(30),
  memory: z.array(z.string().max(200)).max(20).optional(),
});

export type AiRequest = z.infer<typeof aiRequestSchema>;

export function modelInstructions(capability: AiCapability): string {
  return planningInstructions(capability);
}

export function modelPayload(input: AiRequest): string {
  const tasks = input.tasks.slice(0, 30).map((task) => ({
    id: task.id,
    title: task.title,
    dueOn: task.dueOn,
    estimateMinutes: task.estimateMinutes,
    status: task.status,
  }));
  return JSON.stringify({
    capability: input.capability,
    referenceDate: input.referenceDate,
    timezone: input.timezone,
    targetTaskId: input.targetTaskId ?? null,
    memory: input.memory ?? [],
    tasks,
    text: input.text.slice(0, limits.captureCharacters),
  });
}
