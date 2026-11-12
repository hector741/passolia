import { apiError, type ApiErrorBody } from "@/server/errors";

export type ModuleGateResult = {
  status: number;
  body: ApiErrorBody;
};

export function gatedModuleResult(input: {
  enabledOnServer: boolean;
  clientClaimsEnabled: boolean;
  requestId: string;
}): ModuleGateResult {
  void input.clientClaimsEnabled;

  if (!input.enabledOnServer) {
    return {
      status: 403,
      body: apiError("feature_disabled", input.requestId),
    };
  }

  return {
    status: 501,
    body: apiError("unsupported", input.requestId),
  };
}
