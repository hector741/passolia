"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { activityMs, type FocusResult, type TimerDisplay } from "@/modules/focus/domain";
import { useStore } from "@/modules/organizer/store";

function clock(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function FocoScreen() {
  const store = useStore();
  const params = useSearchParams();
  const taskId = params.get("tarefa");
  const state = store.state;
  const [now, setNow] = useState<string | null>(null);
  const [objective, setObjective] = useState("");
  const [minutes, setMinutes] = useState("");
  const [untimed, setUntimed] = useState(false);
  const [note, setNote] = useState("");
  const [distraction, setDistraction] = useState("");
  const [reviewMinutes, setReviewMinutes] = useState("");
  const [readyKey, setReadyKey] = useState<string | null>(null);
  const runningId = useRef<string | null>(null);
  const storeRef = useRef(store);

  useEffect(() => {
    const tick = () => {
      const stamp = new Date().toISOString();
      setNow(stamp);
      const id = runningId.current;
      if (id) {
        storeRef.current.observeFocus(id, stamp);
      }
    };
    const first = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, []);

  const session = state?.focusSessions.find(
    (item) => item.status !== "ended" && (taskId ? item.taskId === taskId : item.status === "running"),
  );
  const active =
    session ??
    state?.focusSessions.find(
      (item) => item.status === "running" || item.status === "paused" || item.status === "needs_review",
    );
  const task = state?.tasks.find((item) => item.id === (active?.taskId ?? taskId));

  useEffect(() => {
    storeRef.current = store;
    runningId.current = active?.status === "running" ? active.id : null;
  }, [active, store]);

  if (!store.ready || !state || !now) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  if (!task) {
    return (
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Foco</h1>
        <p>Escolha uma tarefa em Hoje ou Planejar e toque em Começar.</p>
        <Link href="/hoje" className="inline-flex h-11 items-center text-sm underline">
          Voltar para Hoje
        </Link>
      </main>
    );
  }

  const pendingStep = state.steps
    .filter((step) => step.taskId === task.id && step.status === "pending")
    .sort((a, b) => a.position - b.position)[0];
  const shown = active && active.status === "running" ? activityMs(active, now) : active?.accumulatedMs ?? 0;
  const remaining =
    active?.timingMode === "timed" && active.plannedMinutes != null
      ? active.plannedMinutes * 60_000 - shown
      : null;

  function begin() {
    const key = readyKey ?? crypto.randomUUID();
    if (!readyKey) {
      setReadyKey(key);
    }
    store.startFocus({
      taskId: task!.id,
      stepId: pendingStep?.id ?? null,
      objective: objective || pendingStep?.title || task!.title,
      timingMode: untimed ? "untimed" : "timed",
      plannedMinutes: untimed ? null : Number(minutes || state!.preferences.sessionMinutes || 5),
      idempotencyKey: key,
    });
  }

  function finish(result: FocusResult) {
    if (!active) {
      return;
    }
    store.endFocus(active.id, result);
  }

  return (
    <main className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted">{task.title}</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {active ? active.objective : pendingStep?.title ?? task.title}
        </h1>
        {active && active.objective !== active.originalObjective ? (
          <p className="text-sm text-muted">Pedido original: {active.originalObjective}</p>
        ) : null}
      </div>

      {!active ? (
        <section className="flex flex-col gap-3">
          <label className="grid gap-2" htmlFor="acao">
            Próxima ação
            <input
              id="acao"
              value={objective}
              placeholder={pendingStep?.title ?? task.title}
              onChange={(event) => setObjective(event.target.value)}
              className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
            />
          </label>
          <label className="flex min-h-11 items-center gap-3">
            <input type="checkbox" checked={untimed} onChange={(event) => setUntimed(event.target.checked)} />
            Sem contagem
          </label>
          {untimed ? null : (
            <label className="grid gap-2" htmlFor="minutos">
              Minutos desta vez
              <input
                id="minutos"
                type="number"
                min={1}
                max={240}
                value={minutes}
                placeholder={String(state.preferences.sessionMinutes || 5)}
                onChange={(event) => setMinutes(event.target.value)}
                className="h-11 w-28 rounded-[10px] border border-[var(--control)] bg-surface px-3"
              />
            </label>
          )}
          <button type="button" className="h-11 rounded-[10px] bg-action px-4 text-action-text" onClick={begin}>
            Começar
          </button>
          <p className="text-sm text-muted">Dá para começar sem sugestão e sem preencher mais nada.</p>
        </section>
      ) : (
        <section className="flex flex-col gap-4">
          {active.status === "needs_review" ? (
            <div className="rounded-[16px] bg-surface p-4">
              <p>A sessão ficou aberta. Quer ajustar o tempo ou continuar sem registrar essa duração?</p>
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <label className="grid gap-1 text-sm" htmlFor="revisao">
                  Minutos que você reconhece
                  <input
                    id="revisao"
                    type="number"
                    min={0}
                    max={240}
                    value={reviewMinutes}
                    onChange={(event) => setReviewMinutes(event.target.value)}
                    className="h-11 w-28 rounded-[10px] border border-[var(--control)] bg-surface px-3"
                  />
                </label>
                <button
                  type="button"
                  className="h-11 rounded-[10px] border border-line px-4"
                  onClick={() => {
                    const minutes = Number(reviewMinutes);
                    if (reviewMinutes.trim() === "" || !Number.isFinite(minutes)) {
                      return;
                    }
                    store.resolveFocusReview(active.id, minutes);
                  }}
                >
                  Registrar
                </button>
                <button
                  type="button"
                  className="h-11 rounded-[10px] bg-action px-4 text-action-text"
                  onClick={() => store.resolveFocusReview(active.id, null)}
                >
                  Deixar desconhecido
                </button>
              </div>
            </div>
          ) : null}
          {active.budgetElapsed && active.status === "running" ? (
            <p>O tempo que você escolheu terminou. A tarefa continua aberta.</p>
          ) : null}
          {active.timerDisplay !== "hidden" && active.timingMode === "timed" ? (
            <p className="text-3xl font-semibold" aria-live="off">
              {active.timerDisplay === "countdown" && remaining != null ? clock(remaining) : clock(shown)}
            </p>
          ) : (
            <p className="text-sm text-muted">Sem números nesta tela. O progresso continua salvo.</p>
          )}
          {active.returnNote ? <p>Pista: {active.returnNote}</p> : null}
          <div className="flex flex-wrap gap-2">
            {active.status === "running" ? (
              <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => store.pauseFocus(active.id)}>
                Pausar
              </button>
            ) : active.status === "paused" ? (
              <button type="button" className="h-11 rounded-[10px] bg-action px-4 text-action-text" onClick={() => store.resumeFocus(active.id)}>
                Retomar
              </button>
            ) : null}
            <button
              type="button"
              className="h-11 rounded-[10px] border border-line px-4"
              onClick={() =>
                store.setFocusDisplay(
                  active.id,
                  active.timerDisplay === "hidden" ? "countdown" : ("hidden" as TimerDisplay),
                )
              }
            >
              {active.timerDisplay === "hidden" ? "Mostrar tempo" : "Ocultar tempo"}
            </button>
          </div>
          {active.status === "paused" ? (
            <label className="grid gap-2" htmlFor="pista">
              Quer deixar uma pista para voltar?
              <input
                id="pista"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
              />
              <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => store.setFocusNote(active.id, note)}>
                Guardar pista
              </button>
            </label>
          ) : null}
          <label className="grid gap-2" htmlFor="menor">
            Reduzir este passo
            <input
              id="menor"
              key={active.objective}
              defaultValue={active.objective}
              onBlur={(event) => {
                if (event.target.value.trim() && event.target.value.trim() !== active.objective) {
                  store.reduceFocus(active.id, event.target.value);
                }
              }}
              className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
            />
          </label>
          <form
            className="grid gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              store.addFocusNote(active.id, distraction, crypto.randomUUID());
              setDistraction("");
            }}
          >
            <label htmlFor="anotar">Anotar algo</label>
            <input
              id="anotar"
              value={distraction}
              onChange={(event) => setDistraction(event.target.value)}
              className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
            />
            <button type="submit" className="h-11 rounded-[10px] border border-line px-4">
              Salvar anotação
            </button>
            {state.focusNotes.some((item) => item.sessionId === active.id) ? (
              <p className="text-sm">Anotado. Você pode olhar depois.</p>
            ) : null}
          </form>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="h-11 rounded-[10px] bg-action px-4 text-action-text" onClick={() => finish("step_done")}>
              Concluí este passo
            </button>
            <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => finish("partial")}>
              Avancei um pouco
            </button>
            <button type="button" className="h-11 rounded-[10px] border border-line px-4" onClick={() => finish("save_for_later")}>
              Fica para depois
            </button>
          </div>
          <p className="text-sm text-muted">Encerrar a sessão não conclui a tarefa inteira.</p>
        </section>
      )}
      <Link href="/hoje" className="text-sm underline">
        Voltar para Hoje
      </Link>
    </main>
  );
}
