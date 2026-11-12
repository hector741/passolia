import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const example = path.join(root, ".env.example");
const local = path.join(root, ".env.local");

function commandExists(command: string): boolean {
  const checker = process.platform === "win32" ? "where.exe" : "which";
  const result = spawnSync(checker, [command], { stdio: "ignore" });
  return result.status === 0;
}

console.log(`Node ${process.version}`);
console.log("pnpm esperado: 11.13.1");

if (!existsSync(example)) {
  console.error("Falta .env.example. A preparação local parou.");
  process.exit(1);
}

if (existsSync(local)) {
  console.log(".env.local já existe e foi preservado.");
} else {
  copyFileSync(example, local);
  console.log(".env.local criado a partir do exemplo, sem segredos preenchidos.");
}

if (commandExists("docker")) {
  console.log("Docker: encontrado.");
} else {
  console.log(
    "BLOQUEADO: Docker não está instalado. O Supabase local não sobe nesta máquina.",
  );
}

if (commandExists("supabase")) {
  console.log("Supabase CLI: encontrada no PATH.");
} else {
  console.log(
    "BLOQUEADO: Supabase CLI não está no PATH. Migração local fica pendente até Docker e CLI.",
  );
}

console.log("Preparação da aplicação web concluída. Nenhum valor de ambiente foi impresso.");
