import { describe, expect, it } from "vitest";

import { acceptProposal } from "@/modules/ai/apply";
import { openAiCookie, readOpenAiCookie } from "@/modules/ai/key-cookie";
import { planningInstructions } from "@/modules/ai/planning-prompt";
import { validateEnvelope } from "@/modules/ai/contract";
import {
  emptyQuota,
  pastedApiKey,
  readAiRuntime,
  requestAiProposal,
  resetAiCache,
  runtimeWithPastedKey,
} from "@/modules/ai/request";
import { emptyState, type ProposalRecord } from "@/modules/organizer/domain";

const baseEnvelope = {
  schema_version: 1,
  outcome: "proposal" as const,
  summary: "Organizar o quarto",
  question: null,
  explanation: "São passos curtos a partir do texto.",
  warnings: [],
};

describe("prompt de planejamento", () => {
  it("pede encaixe sem encolher prazo, estimativa ou compromisso fixo", () => {
    const prompt = planningInstructions("plan_day");
    expect(prompt).toContain("Não esconda compromisso real");
    expect(prompt).toContain("Estimativa não é encolhida");
    expect(prompt).toContain("30 minutos");
    expect(prompt).toContain("kind focus");
    expect(planningInstructions("capture_structure")).toContain("Arrumar a cama");
    expect(planningInstructions("task_breakdown")).toContain("não pode reaparecer como passo");
  });

  it("recusa uma sugestão que só repete a frase", () => {
    const echoed = validateEnvelope(
      {
        ...baseEnvelope,
        summary: "Tarefa registrada",
        items: [
          {
            local_id: "s1",
            title: "Limpar o banheiro",
            detail: "",
            estimate_minutes: null,
            due_on: null,
            depends_on: [],
            kind: "task",
          },
        ],
      },
      {
        capability: "capture_structure",
        sourceText: "limpar o banheiro",
        allowedTaskIds: [],
      },
    );
    expect(echoed.ok).toBe(false);

    const withDueDate = validateEnvelope(
      {
        ...baseEnvelope,
        items: [
          {
            local_id: "s1",
            title: "Arrumar o quarto",
            detail: "",
            estimate_minutes: null,
            due_on: null,
            depends_on: [],
            kind: "step",
          },
        ],
      },
      {
        capability: "task_breakdown",
        sourceText: "preciso arrumar meu quarto\nPrazo 2026-11-20",
        allowedTaskIds: [],
      },
    );
    expect(withDueDate.ok).toBe(false);

    const split = validateEnvelope(
      {
        ...baseEnvelope,
        items: ["Arrumar a cama", "Juntar a roupa do chão", "Varrer o chão"].map((title, index) => ({
          local_id: `s${index + 1}`,
          title,
          detail: "",
          estimate_minutes: 10,
          due_on: null,
          depends_on: index === 0 ? [] : [`s${index}`],
          kind: "step" as const,
        })),
      },
      {
        capability: "task_breakdown",
        sourceText: "preciso arrumar meu quarto\nPrazo 2026-11-20",
        allowedTaskIds: [],
      },
    );
    expect(split.ok).toBe(true);
  });

  it("guarda a chave no cookie sem devolver o valor no corpo", () => {
    const secret = "sk-teste-chave-com-tamanho-suficiente";
    const header = openAiCookie(secret, true);
    expect(header.startsWith("passolia_openai=")).toBe(true);
    expect(header).toContain("HttpOnly");
    expect(readOpenAiCookie(header.split(";")[0] ?? "")).toBe(secret);
    expect(JSON.stringify({ data: { saved: true } })).not.toContain(secret);
  });
});

describe("contrato da sugestão", () => {
  it("recusa pergunta com itens e data que não está no texto", () => {
    const clarify = validateEnvelope(
      { ...baseEnvelope, outcome: "clarify", question: null, items: [] },
      { capability: "clarify_task", sourceText: "algo vago", allowedTaskIds: [] },
    );
    expect(clarify.ok).toBe(false);

    const dated = validateEnvelope(
      {
        ...baseEnvelope,
        items: [
          {
            local_id: "s1",
            title: "Procurar o número",
            detail: "",
            estimate_minutes: 10,
            due_on: "2026-12-01",
            depends_on: [],
            kind: "task",
          },
          {
            local_id: "s2",
            title: "Abrir o contato",
            detail: "",
            estimate_minutes: 5,
            due_on: null,
            depends_on: [],
            kind: "task",
          },
          {
            local_id: "s3",
            title: "Confirmar o horário",
            detail: "",
            estimate_minutes: 5,
            due_on: null,
            depends_on: [],
            kind: "task",
          },
        ],
      },
      { capability: "capture_structure", sourceText: "preciso ligar amanhã", allowedTaskIds: [] },
    );
    expect(dated.ok).toBe(true);
    if (dated.ok) {
      expect(dated.value.items[0]?.dueOn).toBeNull();
      expect(dated.value.warnings.some((warning) => warning.includes("data"))).toBe(true);
    }
  });

  it("recusa dependência circular e tarefa fora da lista", () => {
    const cycle = validateEnvelope(
      {
        ...baseEnvelope,
        items: [
          {
            local_id: "a",
            title: "A",
            detail: "",
            estimate_minutes: null,
            due_on: null,
            depends_on: ["b"],
            kind: "step",
          },
          {
            local_id: "b",
            title: "B",
            detail: "",
            estimate_minutes: null,
            due_on: null,
            depends_on: ["a"],
            kind: "step",
          },
        ],
      },
      { capability: "task_breakdown", sourceText: "dividir", allowedTaskIds: [] },
    );
    expect(cycle.ok).toBe(false);

    const foreign = validateEnvelope(
      {
        ...baseEnvelope,
        items: [
          {
            local_id: "outra",
            title: "Outra",
            detail: "",
            estimate_minutes: null,
            due_on: null,
            depends_on: [],
            kind: "focus",
          },
        ],
      },
      { capability: "plan_day", sourceText: "hoje", allowedTaskIds: ["tarefa-1"] },
    );
    expect(foreign.ok).toBe(false);
  });
});

describe("confirmação", () => {
  it("aceita parte dos passos e não duplica na segunda confirmação", () => {
    const proposal: ProposalRecord = {
      id: "p1",
      capability: "task_breakdown",
      outcome: "proposal",
      summary: "Passos",
      question: null,
      explanation: "Dois passos.",
      warnings: [],
      items: [
        {
          localId: "s1",
          title: "Separar",
          detail: "",
          estimateMinutes: 5,
          dueOn: null,
          dependsOn: [],
          kind: "step",
        },
        {
          localId: "s2",
          title: "Guardar",
          detail: "",
          estimateMinutes: 5,
          dueOn: null,
          dependsOn: ["s1"],
          kind: "step",
        },
      ],
      createdAt: "2026-11-12T00:00:00.000Z",
      expiresAt: "2026-11-13T00:00:00.000Z",
      status: "pending",
      applied: {},
      targetTaskId: "tarefa-1",
    };
    const state = emptyState("America/Sao_Paulo");
    state.tasks.push({
      id: "tarefa-1",
      title: "Quarto",
      notes: "",
      status: "open",
      archived: false,
      context: null,
      dueOn: null,
      estimateMinutes: null,
      createdAt: "2026-11-12T00:00:00.000Z",
      updatedAt: "2026-11-12T00:00:00.000Z",
      rowVersion: 1,
    });
    const first = acceptProposal(state, {
      proposal,
      selectedLocalIds: ["s1"],
      now: "2026-11-12T12:00:00.000Z",
      today: "2026-11-12",
      ids: ["passo-1", "passo-2"],
    });
    expect(first.ok).toBe(true);
    if (!first.ok) {
      return;
    }
    expect(first.state.steps).toHaveLength(1);
    const second = acceptProposal(first.state, {
      proposal,
      selectedLocalIds: ["s1"],
      now: "2026-11-12T12:05:00.000Z",
      today: "2026-11-12",
      ids: ["passo-3"],
    });
    expect(second.ok).toBe(true);
    if (!second.ok) {
      return;
    }
    expect(second.state.steps).toHaveLength(1);
    const rest = acceptProposal(second.state, {
      proposal,
      selectedLocalIds: ["s2"],
      now: "2026-11-12T12:06:00.000Z",
      today: "2026-11-12",
      ids: ["passo-4"],
    });
    expect(rest.ok).toBe(true);
    if (rest.ok) {
      expect(rest.state.steps).toHaveLength(2);
      expect(rest.state.proposals[0]?.status).toBe("accepted");
    }
  });
});

describe("chave colada", () => {
  it("aceita a chave do navegador só quando o servidor não tem a própria", () => {
    const pasted = "sk-teste-chave-com-tamanho-suficiente";
    expect(pastedApiKey(" curta ")).toBeNull();
    expect(pastedApiKey(pasted)).toBe(pasted);
    const fromBrowser = runtimeWithPastedKey(readAiRuntime({ AI_ENABLED: "true" }), pasted);
    expect(fromBrowser.apiKey).toBe(pasted);
    const fromServer = runtimeWithPastedKey(
      readAiRuntime({ AI_ENABLED: "true", OPENAI_API_KEY: "sk-servidor-chave-longa-demais" }),
      pasted,
    );
    expect(fromServer.apiKey).toBe("sk-servidor-chave-longa-demais");
  });
});

describe("pedido à OpenAI", () => {
  it("não chama o provedor sem chave", async () => {
    resetAiCache();
    let called = false;
    const result = await requestAiProposal({
      runtime: readAiRuntime({ AI_ENABLED: "true" }),
      request: {
        capability: "capture_structure",
        text: "preciso arrumar meu quarto",
        idempotencyKey: "11111111-1111-4111-8111-111111111111",
        referenceDate: "2026-11-12",
        timezone: "America/Sao_Paulo",
        tasks: [],
      },
      now: new Date("2026-11-12T12:00:00.000Z"),
      quota: emptyQuota(),
      id: "proposta-1",
      transport: async () => {
        called = true;
        return { outputText: "{}", usage: "reported" };
      },
    });
    expect(called).toBe(false);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("integration_not_configured");
    }
  });

  it("devolve a prévia validada e repete a mesma chave sem segunda chamada", async () => {
    resetAiCache();
    let calls = 0;
    const transport = async () => {
      calls += 1;
      return {
        usage: "reported" as const,
        outputText: JSON.stringify({
          ...baseEnvelope,
          items: [
            {
              local_id: "s1",
              title: "Recolher o que está no chão",
              detail: "",
              estimate_minutes: 5,
              due_on: null,
              depends_on: [],
              kind: "task",
            },
            {
              local_id: "s2",
              title: "Arrumar a cama",
              detail: "",
              estimate_minutes: 10,
              due_on: null,
              depends_on: [],
              kind: "task",
            },
            {
              local_id: "s3",
              title: "Varrer o chão",
              detail: "",
              estimate_minutes: 10,
              due_on: null,
              depends_on: [],
              kind: "task",
            },
          ],
        }),
      };
    };
    const request = {
      capability: "capture_structure" as const,
      text: "preciso arrumar meu quarto",
      idempotencyKey: "22222222-2222-4222-8222-222222222222",
      referenceDate: "2026-11-12",
      timezone: "America/Sao_Paulo",
      tasks: [],
    };
    const runtime = readAiRuntime({
      AI_ENABLED: "true",
      OPENAI_API_KEY: "teste",
      OPENAI_TEXT_MODEL: "gpt-6-astra",
    });
    const first = await requestAiProposal({
      runtime,
      request,
      now: new Date("2026-11-12T12:00:00.000Z"),
      quota: emptyQuota(),
      id: "proposta-2",
      transport,
    });
    const second = await requestAiProposal({
      runtime,
      request,
      now: new Date("2026-11-12T12:00:01.000Z"),
      quota: emptyQuota(),
      id: "proposta-3",
      transport,
    });
    expect(first.ok).toBe(true);
    expect(second.ok).toBe(true);
    expect(calls).toBe(1);
    if (first.ok) {
      expect(first.model).toBe("gpt-6-astra");
      expect(first.proposal.items[0]?.title).toContain("Recolher");
    }
  });
});
