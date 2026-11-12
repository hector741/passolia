import { limits } from "@/server/limits";
import {
  modelInstructions,
  modelPayload,
  proposalJsonSchema,
  validateEnvelope,
  type AiRequest,
  type ValidatedProposal,
} from "@/modules/ai/contract";

export const defaultTextModel = "gpt-6-astra";

export type AiRuntime = {
  enabled: boolean;
  apiKey: string | null;
  model: string;
};

export function readAiRuntime(source: Record<string, string | undefined>): AiRuntime {
  const model = source.OPENAI_TEXT_MODEL?.trim();
  const apiKey = source.OPENAI_API_KEY?.trim();
  return {
    enabled: source.AI_ENABLED === "true",
    apiKey: apiKey ? apiKey : null,
    model: model || defaultTextModel,
  };
}

export function pastedApiKey(header: string | null): string | null {
  if (!header) {
    return null;
  }
  const value = header.trim();
  if (value.length < 20 || value.length > 500 || /\s/.test(value)) {
    return null;
  }
  return value;
}

export function runtimeWithPastedKey(runtime: AiRuntime, header: string | null): AiRuntime {
  if (runtime.apiKey) {
    return runtime;
  }
  const pasted = pastedApiKey(header);
  if (!pasted) {
    return runtime;
  }
  return { ...runtime, apiKey: pasted };
}

export type AiQuota = {
  minuteWindow: number;
  minuteCount: number;
  day: string;
  dayCount: number;
  inflight: boolean;
};

export function emptyQuota(): AiQuota {
  return { minuteWindow: 0, minuteCount: 0, day: "", dayCount: 0, inflight: false };
}

export function reserveQuota(
  quota: AiQuota,
  now: Date,
): { ok: true } | { ok: false; reason: "minute" | "day" | "inflight" } {
  const window = Math.floor(now.getTime() / 60_000);
  const day = now.toISOString().slice(0, 10);
  if (quota.minuteWindow !== window) {
    quota.minuteWindow = window;
    quota.minuteCount = 0;
  }
  if (quota.day !== day) {
    quota.day = day;
    quota.dayCount = 0;
  }
  if (quota.inflight) {
    return { ok: false, reason: "inflight" };
  }
  if (quota.minuteCount >= limits.aiRequestsPerMinute) {
    return { ok: false, reason: "minute" };
  }
  if (quota.dayCount >= 40) {
    return { ok: false, reason: "day" };
  }
  quota.inflight = true;
  quota.minuteCount += 1;
  quota.dayCount += 1;
  return { ok: true };
}

export function releaseQuota(quota: AiQuota) {
  quota.inflight = false;
}

export type AiTransport = (input: {
  model: string;
  apiKey: string;
  instructions: string;
  payload: string;
  schema: typeof proposalJsonSchema;
  signal: AbortSignal;
}) => Promise<{ outputText: string; usage: "reported" | "unknown" }>;

export type AiFailure = {
  ok: false;
  code: "feature_disabled" | "integration_not_configured" | "usage_limit" | "validation" | "temporary_unavailable";
  detail: string;
};

export type AiSuccess = {
  ok: true;
  id: string;
  capability: AiRequest["capability"];
  proposal: ValidatedProposal;
  createdAt: string;
  expiresAt: string;
  model: string;
  usage: "reported" | "unknown";
  targetTaskId: string | null;
};

const cache = new Map<string, { fingerprint: string; success: AiSuccess }>();

export function resetAiCache() {
  cache.clear();
}

function parseOutput(text: string): unknown {
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

export async function requestAiProposal(
  input: {
    runtime: AiRuntime;
    request: AiRequest;
    now: Date;
    quota: AiQuota;
    transport: AiTransport;
    id: string;
  },
): Promise<AiSuccess | AiFailure> {
  if (!input.runtime.enabled) {
    return {
      ok: false,
      code: "feature_disabled",
      detail: "Ligue AI_ENABLED=true no servidor. Sem isso, o caminho manual continua.",
    };
  }
  if (!input.runtime.apiKey) {
    return {
      ok: false,
      code: "integration_not_configured",
      detail: "Falta OPENAI_API_KEY no servidor. A chave não vai para o navegador.",
    };
  }
  const fingerprint = `${input.request.capability}:${input.request.text}`;
  const cached = cache.get(input.request.idempotencyKey);
  if (cached?.fingerprint === fingerprint) {
    return cached.success;
  }
  if (cached) {
    return { ok: false, code: "validation", detail: "Esta chave já foi usada em outro pedido." };
  }
  const reserved = reserveQuota(input.quota, input.now);
  if (!reserved.ok) {
    const detail =
      reserved.reason === "inflight"
        ? "Já existe uma sugestão em geração. Espere ela terminar."
        : "O limite de sugestões foi atingido. Dá para continuar manualmente.";
    return { ok: false, code: "usage_limit", detail };
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25_000);
    const allowedTaskIds = input.request.tasks.map((task) => task.id);
    let usage: "reported" | "unknown" = "unknown";
    let validated: ReturnType<typeof validateEnvelope> = {
      ok: false,
      message: "A resposta não seguiu o formato combinado.",
    };
    let instructions = modelInstructions(input.request.capability);
    const payload = modelPayload(input.request);
    try {
      for (let attempt = 0; attempt < 2 && !validated.ok; attempt += 1) {
        const response = await input.transport({
          model: input.runtime.model,
          apiKey: input.runtime.apiKey,
          instructions,
          payload,
          schema: proposalJsonSchema,
          signal: controller.signal,
        });
        usage = response.usage === "reported" ? "reported" : usage;
        const raw = parseOutput(response.outputText);
        validated = validateEnvelope(raw, {
          capability: input.request.capability,
          sourceText: input.request.text,
          allowedTaskIds,
        });
        if (!validated.ok) {
          instructions = `${modelInstructions(input.request.capability)} A tentativa anterior foi recusada: ${validated.message}`;
        }
      }
    } catch (error) {
      const aborted = error instanceof Error && error.name === "AbortError";
      if (aborted) {
        return {
          ok: false,
          code: "temporary_unavailable",
          detail: "A OpenAI não respondeu a tempo. Nada foi alterado.",
        };
      }
      const status = typeof error === "object" && error && "status" in error ? Number(error.status) : 0;
      if (status === 429) {
        return {
          ok: false,
          code: "usage_limit",
          detail: "A OpenAI pediu espera. Nada foi alterado.",
        };
      }
      return {
        ok: false,
        code: "temporary_unavailable",
        detail: "A OpenAI não completou esta sugestão. Nada foi alterado.",
      };
    } finally {
      clearTimeout(timer);
    }
    if (!validated.ok) {
      return { ok: false, code: "validation", detail: validated.message };
    }
    const createdAt = input.now.toISOString();
    const expires = new Date(input.now.getTime() + limits.proposalHours * 60 * 60 * 1000);
    const success: AiSuccess = {
      ok: true,
      id: input.id,
      capability: input.request.capability,
      proposal: validated.value,
      createdAt,
      expiresAt: expires.toISOString(),
      model: input.runtime.model,
      usage,
      targetTaskId: input.request.targetTaskId ?? null,
    };
    cache.set(input.request.idempotencyKey, { fingerprint, success });
    return success;
  } finally {
    releaseQuota(input.quota);
  }
}
