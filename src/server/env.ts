import "server-only";

import { parseAppEnv, type AppEnv } from "@/server/app-env";

export function getAppEnv(): AppEnv {
  const parsed = parseAppEnv(process.env);
  if (!parsed.ok) {
    throw new Error(parsed.message);
  }
  return parsed.env;
}
