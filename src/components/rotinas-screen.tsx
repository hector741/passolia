"use client";

import { useEffect, useState } from "react";

import { SuggestionPanel } from "@/components/suggestion-panel";
import { elapsedMs } from "@/modules/organizer/domain";
import { useStore } from "@/modules/organizer/store";

function clock(ms: number): string {
  const total = Math.floor(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function RotinasScreen() {
  const store = useStore();
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("Beber água\nArrumar a cama");
  const [now, setNow] = useState<string | null>(null);
  const state = store.state;

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date().toISOString()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!store.ready || !state) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  const active = state.runs.find((run) => run.status === "running" || run.status === "paused");
  const activeSteps = active
    ? state.runSteps.filter((step) => step.runId === active.id).sort((a, b) => a.position - b.position)
    : [];
  const pending = activeSteps.some((step) => step.status === "pending");

  return (
    <main className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Rotinas</h1>
        <p className="text-sm text-muted">
          Começar copia os passos. Mudar o modelo não altera uma execução já iniciada. O cronômetro não depende da sugestão.
        </p>
      </div>
      <SuggestionPanel
        options={[{ capability: "minimal_routine", label: "Propor uma rotina menor para revisar" }]}
        text={[title, steps].filter(Boolean).join("\n")}
        timezone={state.preferences.timezone}
      />

      <form
        className="grid gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          store.saveRoutine(
            title,
            steps.split("\n"),
          );
          setTitle("");
        }}
      >
        <label htmlFor="rotina" className="font-medium">
          Nome
        </label>
        <input
          id="rotina"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        />
        <label htmlFor="passos-rotina" className="font-medium">
          Passos, um por linha
        </label>
        <textarea
          id="passos-rotina"
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
          rows={4}
          className="rounded-[10px] border border-[var(--control)] bg-surface px-3 py-2"
        />
        <button type="submit" className="h-11 rounded-[10px] bg-action px-4 text-action-text">
          Salvar rotina
        </button>
      </form>

      <ul className="flex flex-col gap-2">
        {state.routines.filter((routine) => !routine.archived).map((routine) => (
          <li key={routine.id} className="flex items-center justify-between gap-3 rounded-[16px] bg-surface px-4 py-3">
            <span>{routine.title}</span>
            <button
              type="button"
              className="h-11 rounded-[10px] border border-line px-4"
              onClick={() => store.startRoutine(routine.id)}
            >
              Começar
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <section className="rounded-[16px] bg-surface p-4" aria-live="polite">
          <h2 className="text-lg font-semibold">Execução</h2>
          <p className="mt-1 text-2xl tabular-nums">{now ? clock(elapsedMs(active, now)) : "00:00"}</p>
          <p className="text-sm text-muted">
            {active.status === "paused" ? "Pausada. O tempo não avança." : "Em andamento."}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {active.status === "running" ? (
              <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => store.setRunStatus(active.id, "paused")}>
                Pausar
              </button>
            ) : (
              <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => store.setRunStatus(active.id, "running")}>
                Continuar
              </button>
            )}
            <button
              type="button"
              className="h-11 rounded-[10px] bg-action px-4 text-action-text"
              onClick={() => {
                if (pending && !window.confirm("Ainda há passos pendentes. Abandonar esta execução?")) {
                  return;
                }
                store.setRunStatus(active.id, pending ? "abandoned" : "completed");
              }}
            >
              Encerrar
            </button>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {activeSteps.map((step) => (
              <li key={step.id} className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  {step.title}
                  {step.status === "skipped" ? " · pulado, não conta como feito" : ""}
                  {step.status === "done" ? " · feito" : ""}
                </span>
                <span className="flex gap-2">
                  <button type="button" className="h-11 underline" onClick={() => store.setRunStep(step.id, "done")}>
                    Feito
                  </button>
                  <button type="button" className="h-11 underline" onClick={() => store.setRunStep(step.id, "skipped")}>
                    Pular
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
