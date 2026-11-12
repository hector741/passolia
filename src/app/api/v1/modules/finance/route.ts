import { connection } from "next/server";

import { getAppEnv } from "@/server/env";
import { readFeatureFlags } from "@/server/flags";
import { gatedModuleResult } from "@/server/module-gate";

export async function GET(request: Request) {
  await connection();
  const requestId = crypto.randomUUID();
  getAppEnv();
  const flags = readFeatureFlags(process.env);
  const url = new URL(request.url);
  const result = gatedModuleResult({
    enabledOnServer: flags.finance,
    clientClaimsEnabled: url.searchParams.get("enabled") === "true",
    requestId,
  });

  return Response.json(result.body, {
    status: result.status,
    headers: { "Cache-Control": "no-store" },
  });
}
