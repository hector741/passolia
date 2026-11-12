import { Suspense } from "react";

import { FocoScreen } from "@/components/foco-screen";

export default function FocoPage() {
  return (
    <Suspense fallback={<p>Abrindo o foco…</p>}>
      <FocoScreen />
    </Suspense>
  );
}
