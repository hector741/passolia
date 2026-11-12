import { connection } from "next/server";

import { getAppEnv } from "@/server/env";
import { readinessResult } from "@/server/readiness";

export async function GET(request: Request) {
  await connection();
  const requestId = crypto.randomUUID();
  const env = getAppEnv();
  const result = readinessResult({
    authorization: request.headers.get("authorization"),
    workerSecret: env.WORKER_AUTH_SECRET,
    databaseConfigured: Boolean(env.NEXT_PUBLIC_SUPABASE_URL),
    requestId,
  });

  return Response.json(result.body, {
    status: result.status,
    headers: { "Cache-Control": "private, no-store" },
  });
}
