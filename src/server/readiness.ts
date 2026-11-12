import { apiError, type ApiErrorBody } from "@/server/errors";

export type ReadinessResult = {
  status: number;
  body:
    | {
        data: {
          ready: true;
          checks: { database: "not_configured" | "local_configured" };
        };
        meta: Record<string, never>;
      }
    | ApiErrorBody;
};

export function readinessResult(input: {
  authorization: string | null;
  workerSecret: string | undefined;
  databaseConfigured: boolean;
  requestId: string;
}): ReadinessResult {
  if (!input.workerSecret) {
    return {
      status: 503,
      body: apiError("integration_not_configured", input.requestId),
    };
  }

  const expected = `Bearer ${input.workerSecret}`;
  if (input.authorization !== expected) {
    return {
      status: 401,
      body: apiError("unauthenticated", input.requestId),
    };
  }

  return {
    status: 200,
    body: {
      data: {
        ready: true,
        checks: {
          database: input.databaseConfigured
            ? "local_configured"
            : "not_configured",
        },
      },
      meta: {},
    },
  };
}
