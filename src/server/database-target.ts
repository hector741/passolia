export type DatabaseAssessment = {
  allowed: boolean;
  url: string;
  reason: string;
};

const localHosts = new Set(["127.0.0.1", "localhost", "::1"]);

export function assessDatabaseTarget(input: {
  appEnv: string | undefined;
  supabaseUrl: string | undefined;
}): DatabaseAssessment {
  const url = input.supabaseUrl?.trim() || "http://127.0.0.1:54321";

  if (input.appEnv === "production") {
    return {
      allowed: false,
      url,
      reason: "Comandos de banco recusam o ambiente de produção.",
    };
  }

  let hostname = "";
  try {
    hostname = new URL(url).hostname;
  } catch {
    return {
      allowed: false,
      url,
      reason: "A URL do banco é inválida. O comando não foi enviado.",
    };
  }

  if (!localHosts.has(hostname)) {
    return {
      allowed: false,
      url,
      reason:
        "A URL configurada não é um Supabase local. O comando não será enviado a um projeto remoto.",
    };
  }

  return {
    allowed: true,
    url,
    reason: "Alvo local aceito para migração ou seed.",
  };
}
