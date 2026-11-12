import { Suspense } from "react";

import { PlanejarScreen } from "@/components/planejar-screen";

export default function PlanejarPage() {
  return (
    <Suspense fallback={<p>Abrindo o planejamento…</p>}>
      <PlanejarScreen />
    </Suspense>
  );
}
