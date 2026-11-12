import { connection } from "next/server";

import { aiCapabilities, aiRequestSchema } from "@/modules/ai/contract";
import { readOpenAiCookie } from "@/modules/ai/key-cookie";
import {
  emptyQuota,
  readAiRuntime,
  requestAiProposal,
  runtimeWithPastedKey,
  type AiQuota,
} from "@/modules/ai/request";
import { apiError, statusForError } from "@/server/errors";
import { openAiTransport } from "@/server/openai-transport";
import { storedOpenAiKey } from "@/server/openai-key-file";

const quota: AiQuota = emptyQuota();

export async function GET(request: Request) {
  await connection();
  const runtime = readAiRuntime(process.env);
  const saved = Boolean(
    runtime.apiKey || readOpenAiCookie(request.headers.get("cookie")) || storedOpenAiKey(),
  );
  return Response.json(
    {
      data: {
        provider: "openai",
        enabled: runtime.enabled,
        configured: saved,
        model: runtime.model,
        capabilities: aiCapabilities,
      },
      meta: {},
    },
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
  const parsed = aiRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      apiError("validation", requestId, { body: "O pedido de sugestão está incompleto." }),
      { status: 422 },
    );
  }
  const result = await requestAiProposal({
    runtime: runtimeWithPastedKey(
      readAiRuntime(process.env),
      request.headers.get("x-passolia-openai-key") ??
        readOpenAiCookie(request.headers.get("cookie")) ??
        storedOpenAiKey(),
    ),
    request: parsed.data,
    now: new Date(),
    quota,
    transport: openAiTransport,
    id: crypto.randomUUID(),
  });
  if (!result.ok) {
    return Response.json(apiError(result.code, requestId, { detail: result.detail }), {
      status: statusForError(result.code),
    });
  }
  return Response.json(
    {
      data: {
        id: result.id,
        capability: result.capability,
        outcome: result.proposal.outcome,
        summary: result.proposal.summary,
        question: result.proposal.question,
        explanation: result.proposal.explanation,
        warnings: result.proposal.warnings,
        items: result.proposal.items,
        createdAt: result.createdAt,
        expiresAt: result.expiresAt,
        model: result.model,
        usage: result.usage,
        targetTaskId: result.targetTaskId,
      },
      meta: {},
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
