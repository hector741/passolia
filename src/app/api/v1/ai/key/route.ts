import { connection } from "next/server";

import { clearOpenAiCookie, openAiCookie, readOpenAiCookie } from "@/modules/ai/key-cookie";
import { pastedApiKey } from "@/modules/ai/request";
import { apiError } from "@/server/errors";
import { forgetOpenAiKey, rememberOpenAiKey, storedOpenAiKey } from "@/server/openai-key-file";

function secureCookie(): boolean {
  return process.env.APP_ENV === "production" || process.env.VERCEL === "1";
}

export async function GET(request: Request) {
  await connection();
  const cookie = readOpenAiCookie(request.headers.get("cookie"));
  const saved = Boolean(cookie || storedOpenAiKey());
  return Response.json(
    { data: { saved }, meta: {} },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  await connection();
  const requestId = crypto.randomUUID();
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(apiError("validation", requestId, { body: "Envie JSON." }), {
      status: 422,
    });
  }
  const key = pastedApiKey(
    body && typeof body === "object" && "key" in body && typeof body.key === "string" ? body.key : null,
  );
  if (!key) {
    return Response.json(
      apiError("validation", requestId, { key: "Cole a chave inteira, sem espaços." }),
      { status: 422 },
    );
  }
  rememberOpenAiKey(key);
  return Response.json(
    { data: { saved: true }, meta: {} },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": openAiCookie(key, secureCookie()),
      },
    },
  );
}

export async function DELETE(request: Request) {
  await connection();
  void request;
  forgetOpenAiKey();
  return Response.json(
    { data: { saved: false }, meta: {} },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": clearOpenAiCookie(secureCookie()),
      },
    },
  );
}
