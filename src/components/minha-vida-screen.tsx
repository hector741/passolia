"use client";

import Link from "next/link";

import { contexts, type ContextKey } from "@/modules/organizer/domain";
import { useStore } from "@/modules/organizer/store";

const labels: Record<ContextKey, string> = {
  pessoal: "Pessoal",
  casa: "Casa",
  trabalho: "Trabalho",
  estudos: "Estudos",
};

export function MinhaVidaScreen() {
  const store = useStore();
  const state = store.state;
  if (!store.ready || !state) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Minha vida</h1>
        <p className="text-sm text-muted">
          Estas áreas usam as tarefas que você marcou com um contexto.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {contexts.map((context) => {
          const count = state.tasks.filter(
            (task) => task.context === context && !task.archived && task.status !== "done",
          ).length;
          return (
            <li key={context}>
              <Link
                href={`/planejar?contexto=${context}`}
                className="flex min-h-24 flex-col justify-center rounded-[16px] bg-surface px-4 py-3"
              >
                <span className="font-semibold">{labels[context]}</span>
                <span className="text-sm text-muted">
                  {count === 1 ? "1 tarefa aberta" : `${count} tarefas abertas`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-muted">
        Dinheiro, relações e vestuário ainda não têm módulo próprio. O que você guardar como
        tarefa continua em Planejar.
      </p>
    </main>
  );
}
