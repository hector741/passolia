export const errorCodes = [
  "unauthenticated",
  "forbidden",
  "validation",
  "version_conflict",
  "proposal_expired",
  "usage_limit",
  "integration_not_configured",
  "temporary_unavailable",
  "unsupported",
  "feature_disabled",
] as const;

export type ErrorCode = (typeof errorCodes)[number];

const messages: Record<ErrorCode, string> = {
  unauthenticated: "É preciso entrar para continuar.",
  forbidden: "Esta ação não está disponível.",
  validation: "Algum campo precisa de correção.",
  version_conflict:
    "Este item mudou em outro lugar. Atualize a tela antes de salvar de novo.",
  proposal_expired: "Esta sugestão expirou. Peça uma nova antes de confirmar.",
  usage_limit: "O limite de uso foi atingido. Dá para continuar manualmente.",
  integration_not_configured:
    "Esta integração ainda não está configurada neste ambiente.",
  temporary_unavailable:
    "O serviço está indisponível agora. Tente de novo em instantes.",
  unsupported: "Esta operação ainda não está disponível.",
  feature_disabled: "Este módulo não está disponível.",
};

export type FieldErrors = Record<string, string>;

export type ApiErrorBody = {
  code: ErrorCode;
  message: string;
  request_id: string;
  errors?: FieldErrors;
};

export function apiError(
  code: ErrorCode,
  requestId: string,
  fieldErrors?: FieldErrors,
): ApiErrorBody {
  const body: ApiErrorBody = {
    code,
    message: messages[code],
    request_id: requestId,
  };
  if (fieldErrors && Object.keys(fieldErrors).length > 0) {
    body.errors = fieldErrors;
  }
  return body;
}

export function statusForError(code: ErrorCode): number {
  switch (code) {
    case "unauthenticated":
      return 401;
    case "forbidden":
    case "feature_disabled":
      return 403;
    case "validation":
      return 422;
    case "version_conflict":
    case "proposal_expired":
      return 409;
    case "usage_limit":
      return 429;
    case "integration_not_configured":
    case "temporary_unavailable":
      return 503;
    case "unsupported":
      return 501;
    default:
      return 500;
  }
}
