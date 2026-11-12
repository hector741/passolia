import { z } from "zod";

export const appEnvironments = [
  "development",
  "test",
  "staging",
  "production",
] as const;

export type AppEnvironment = (typeof appEnvironments)[number];

const emptyToUndefined = (value: unknown) => {
  if (typeof value !== "string") {
    return value;
  }
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
};

const optionalText = z.preprocess(
  emptyToUndefined,
  z.string().min(1).optional(),
);

const optionalUrl = z.preprocess(
  emptyToUndefined,
  z.string().url().optional(),
);

export const appEnvSchema = z.object({
  APP_ENV: z.enum(appEnvironments).default("development"),
  APP_URL: z.preprocess(
    emptyToUndefined,
    z.string().url().default("http://localhost:3000"),
  ),
  NEXT_PUBLIC_SUPABASE_URL: optionalUrl,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: optionalText,
  SUPABASE_SECRET_KEY: optionalText,
  OPENAI_API_KEY: optionalText,
  OPENAI_TEXT_MODEL: optionalText,
  AI_ENABLED: z.preprocess(
    emptyToUndefined,
    z.enum(["true", "false"]).default("false"),
  ),
  WORKER_AUTH_SECRET: optionalText,
});

export type AppEnv = z.infer<typeof appEnvSchema>;

export type EnvParseResult =
  | { ok: true; env: AppEnv }
  | { ok: false; message: string };

const productionRequired = [
  "APP_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_SECRET_KEY",
  "WORKER_AUTH_SECRET",
] as const;

export function parseAppEnv(
  source: Record<string, string | undefined>,
): EnvParseResult {
  const parsed = appEnvSchema.safeParse(source);
  if (!parsed.success) {
    return {
      ok: false,
      message:
        "A configuração do ambiente é inválida. Confira os nomes em .env.example. Os valores não são exibidos.",
    };
  }

  if (parsed.data.APP_ENV === "production") {
    const missing: string[] = productionRequired.filter((name) => {
      const value = source[name];
      return typeof value !== "string" || value.trim() === "";
    });
    if (parsed.data.AI_ENABLED === "true" && !parsed.data.OPENAI_API_KEY) {
      missing.push("OPENAI_API_KEY");
    }
    if (missing.length > 0) {
      return {
        ok: false,
        message: `Em produção faltam variáveis obrigatórias: ${missing.join(", ")}.`,
      };
    }
  }

  return { ok: true, env: parsed.data };
}

export function assertNoPublicSecretNames(
  keys: readonly string[],
): string | null {
  const forbidden = keys.filter(
    (key) =>
      key.startsWith("NEXT_PUBLIC_") &&
      /SECRET|SERVICE_ROLE|OPENAI|WORKER_AUTH|PRIVATE/i.test(key),
  );
  if (forbidden.length === 0) {
    return null;
  }
  return `Variável pública não pode carregar segredo: ${forbidden.join(", ")}.`;
}
