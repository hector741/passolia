import { connection } from "next/server";

import { publicHealthBody } from "@/server/health";

export async function GET() {
  await connection();
  return Response.json(publicHealthBody(), {
    headers: { "Cache-Control": "no-store" },
  });
}
