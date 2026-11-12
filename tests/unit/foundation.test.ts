import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { assertNoPublicSecretNames, parseAppEnv } from "@/server/app-env";
import { assessDatabaseTarget } from "@/server/database-target";
import { apiError, errorCodes } from "@/server/errors";
import { readFeatureFlags } from "@/server/flags";
import { publicHealthBody } from "@/server/health";
import { limits } from "@/server/limits";
import { gatedModuleResult } from "@/server/module-gate";
import { readinessResult } from "@/server/readiness";

describe("ambiente", () => {
  it("aceita desenvolvimento sem segredos e não revela valores", () => {
    const parsed = parseAppEnv({});
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) {
      return;
    }
    expect(parsed.env.APP_ENV).toBe("development");
    expect(parsed.env.APP_URL).toBe("http://localhost:3000");
    expect(parsed.env.AI_ENABLED).toBe("false");
  });

  it("recusa produção incompleta sem imprimir segredo", () => {
    const parsed = parseAppEnv({
      APP_ENV: "production",
      APP_URL: "https://passolia.example",
      SUPABASE_SECRET_KEY: "nao-mostrar-este-valor",
    });
    expect(parsed.ok).toBe(false);
    if (parsed.ok) {
      return;
    }
    expect(parsed.message).toContain("Em produção faltam variáveis");
    expect(parsed.message).not.toContain("nao-mostrar-este-valor");
  });

  it("rejeita nome público de segredo", () => {
    expect(
      assertNoPublicSecretNames(["NEXT_PUBLIC_SUPABASE_SECRET_KEY"]),
    ).toMatch(/não pode carregar segredo/);
    expect(
      assertNoPublicSecretNames(["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"]),
    ).toBeNull();
  });
});

describe("banco local", () => {
  it("recusa produção e URL remota", () => {
    expect(
      assessDatabaseTarget({
        appEnv: "production",
        supabaseUrl: "http://127.0.0.1:54321",
      }).allowed,
    ).toBe(false);

    const remote = assessDatabaseTarget({
      appEnv: "development",
      supabaseUrl: "https://abcd.supabase.co",
    });
    expect(remote.allowed).toBe(false);
    expect(remote.reason).toContain("não será enviado");
  });

  it("aceita o endereço local padrão", () => {
    const local = assessDatabaseTarget({
      appEnv: "development",
      supabaseUrl: undefined,
    });
    expect(local.allowed).toBe(true);
    expect(local.url).toBe("http://127.0.0.1:54321");
  });
});

describe("flags e erros", () => {
  it("só liga módulo com o valor true no servidor", () => {
    const flags = readFeatureFlags({
      FEATURE_FINANCE: "yes",
      FEATURE_BILLING: "true",
    });
    expect(flags.finance).toBe(false);
    expect(flags.billing).toBe(true);
    expect(flags.experiments).toBe(false);
  });

  it("ignora o pedido do cliente para abrir um módulo desligado", () => {
    const denied = gatedModuleResult({
      enabledOnServer: false,
      clientClaimsEnabled: true,
      requestId: "req-1",
    });
    expect(denied.status).toBe(403);
    expect(denied.body.code).toBe("feature_disabled");
    expect(denied.body.message).toMatch(/não está disponível/);
  });

  it("com a flag ligada ainda não finge que o módulo existe", () => {
    const pending = gatedModuleResult({
      enabledOnServer: true,
      clientClaimsEnabled: false,
      requestId: "req-2",
    });
    expect(pending.status).toBe(501);
    expect(pending.body.code).toBe("unsupported");
  });

  it("mantém o contrato de erro em português", () => {
    const body = apiError("validation", "req-3", { title: "Informe um título." });
    expect(errorCodes).toContain(body.code);
    expect(body.request_id).toBe("req-3");
    expect(body.errors?.title).toBe("Informe um título.");
    expect(JSON.stringify(body)).not.toMatch(/stack|secret|select /i);
  });
});

describe("saúde e prontidão", () => {
  it("não inclui versão, tabela ou segredo no health público", () => {
    const body = publicHealthBody();
    expect(body).toEqual({ data: { status: "ok" }, meta: {} });
    expect(JSON.stringify(body)).not.toMatch(/secret|postgres|supabase/i);
  });

  it("exige segredo do worker e não devolve o valor", () => {
    const missing = readinessResult({
      authorization: null,
      workerSecret: undefined,
      databaseConfigured: false,
      requestId: "req-4",
    });
    expect(missing.status).toBe(503);

    const denied = readinessResult({
      authorization: "Bearer outro",
      workerSecret: "segredo-local-de-teste",
      databaseConfigured: false,
      requestId: "req-5",
    });
    expect(denied.status).toBe(401);
    expect(JSON.stringify(denied.body)).not.toContain("segredo-local-de-teste");

    const ready = readinessResult({
      authorization: "Bearer segredo-local-de-teste",
      workerSecret: "segredo-local-de-teste",
      databaseConfigured: false,
      requestId: "req-6",
    });
    expect(ready.status).toBe(200);
    expect(JSON.stringify(ready.body)).not.toContain("segredo-local-de-teste");
  });
});

describe("limites e exemplo de ambiente", () => {
  it("centraliza o limite de título", () => {
    expect(limits.titleCharacters).toBe(200);
    expect(limits.pageSizeMax).toBe(100);
  });

  it("o exemplo versionado não traz segredo preenchido", () => {
    const example = readFileSync(
      path.join(process.cwd(), ".env.example"),
      "utf8",
    );
    expect(example).not.toMatch(/sk-|service_role|eyJ/);
    expect(example).toContain("APP_ENV=development");
    expect(example).toContain("http://127.0.0.1:54321");
    const publicSecret = example
      .split("\n")
      .filter((line) => line.startsWith("NEXT_PUBLIC_"))
      .filter((line) => /SECRET|SERVICE_ROLE|OPENAI|WORKER_AUTH/i.test(line));
    expect(publicSecret).toEqual([]);
  });
});
