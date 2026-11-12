import "server-only";

import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";

const globalStore = globalThis as { __passoliaOpenAiKey?: string };
const filePath = path.join(process.cwd(), "data", "openai-key");

export function storedOpenAiKey(): string | null {
  const memory = globalStore.__passoliaOpenAiKey?.trim();
  if (memory) {
    return memory;
  }
  try {
    const file = readFileSync(filePath, "utf8").trim();
    if (file.length < 20 || file.length > 500 || /\s/.test(file)) {
      return null;
    }
    globalStore.__passoliaOpenAiKey = file;
    return file;
  } catch {
    return null;
  }
}

export function rememberOpenAiKey(value: string): void {
  globalStore.__passoliaOpenAiKey = value;
  try {
    mkdirSync(path.dirname(filePath), { recursive: true });
    writeFileSync(filePath, value, { encoding: "utf8", mode: 0o600 });
  } catch {
    // Na Vercel o disco some entre invocações. O cookie deste navegador continua valendo.
  }
}

export function forgetOpenAiKey(): void {
  delete globalStore.__passoliaOpenAiKey;
  try {
    rmSync(filePath, { force: true });
  } catch {
    // Sem arquivo para apagar.
  }
}
