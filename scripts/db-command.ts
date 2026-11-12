import { spawnSync } from "node:child_process";
import path from "node:path";

import { assessDatabaseTarget } from "../src/server/database-target.ts";
import { loadEnvFile } from "./load-local-env.ts";

export function commandExists(command: string): boolean {
  const checker = process.platform === "win32" ? "where.exe" : "which";
  const result = spawnSync(checker, [command], { stdio: "ignore" });
  return result.status === 0;
}

export function refuseUnsafeDatabase(): { url: string } {
  const fileEnv = loadEnvFile(path.join(process.cwd(), ".env.local"));
  const appEnv = process.env.APP_ENV ?? fileEnv.APP_ENV ?? "development";
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? fileEnv.NEXT_PUBLIC_SUPABASE_URL;
  const assessment = assessDatabaseTarget({ appEnv, supabaseUrl });

  if (!assessment.allowed) {
    console.error(assessment.reason);
    process.exit(1);
  }

  if (!commandExists("docker") || !commandExists("supabase")) {
    console.error(
      "NÃO EXECUTADO: Docker ou Supabase CLI ausente. Nenhuma migração foi aplicada.",
    );
    process.exit(2);
  }

  return { url: assessment.url };
}
