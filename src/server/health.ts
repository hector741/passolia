export type HealthBody = {
  data: { status: "ok" };
  meta: Record<string, never>;
};

export function publicHealthBody(): HealthBody {
  return { data: { status: "ok" }, meta: {} };
}
