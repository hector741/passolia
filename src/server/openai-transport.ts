import "server-only";

import type { AiTransport } from "@/modules/ai/request";

export const openAiTransport: AiTransport = async (input) => {
  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey: input.apiKey, timeout: 25_000 });
  try {
    const response = await client.responses.create(
      {
        model: input.model,
        store: false,
        instructions: input.instructions,
        input: input.payload,
        text: {
          format: {
            type: "json_schema",
            name: "passolia_proposal",
            strict: true,
            schema: input.schema,
          },
        },
      },
      { signal: input.signal },
    );
    return {
      outputText: response.output_text,
      usage: response.usage ? "reported" : "unknown",
    };
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const wrapped = new Error("A OpenAI recusou a chamada.");
      wrapped.name = error.name;
      Object.assign(wrapped, { status: error.status ?? 0 });
      throw wrapped;
    }
    throw error;
  }
};
