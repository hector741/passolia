"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  civilDate,
  dayFit,
  needsReturnReview,
} from "@/modules/organizer/domain";
import { SuggestionPanel } from "@/components/suggestion-panel";
import { useStore } from "@/modules/organizer/store";

function minutesBetween(start: string, end: string): number {
  const diff = new Date(end).getTime() - new Date(start).getTime();
  if (!Number.isFinite(diff) || diff <= 0) {
    return 0;
  }
  return Math.round(diff / 60000);
}

export function HojeScreen() {
  const store = useStore();
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [now, setNow] = useState<Date | null>(null);
  const state = store.state;

  useEffect(() => {
    const timer = window.setTimeout(() => setNow(new Date()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const today = state && now ? civilDate(state.preferences.timezone, now) : "";
  const plan = state?.plans.find((item) => item.date === today);
  const available = plan?.availableMinutes ?? state?.preferences.availableMinutes ?? 360;

  const view = useMemo(() => {
    if (!state) {
      return null;
    }
    const openTasks = state.tasks.filter((task) => !task.archived && task.status !== "done" && task.status !== "canceled");
    const events = state.events
      .filter((event) => event.status === "scheduled" && event.startsAt.slice(0, 10) === today)
      .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
    const fixedMinutes = events
      .filter((event) => event.fixed && !event.allDay)
      .reduce((sum, event) => sum + minutesBetween(event.startsAt, event.endsAt), 0);
    const focusIds = plan?.focusTaskIds ?? [];
    const ordered = [
      ...openTasks.filter((task) => focusIds.includes(task.id)),
      ...openTasks.filter((task) => !focusIds.includes(task.id)),
    ];
    const fit = dayFit({
      availableMinutes: available,
      fixedMinutes,
      items: ordered.map((task) => ({
        id: task.id,
        title: task.title,
        estimateMinutes: task.estimateMinutes ?? 30,
      })),
    });
    const next = ordered[0];
    const nextStep = next
      ? state.steps
          .filter((step) => step.taskId === next.id && step.status === "pending")
          .sort((a, b) => a.position - b.position)[0]
      : undefined;
    const overdue = openTasks.filter((task) => task.dueOn && task.dueOn < today);
    return { openTasks, events, fit, next, nextStep, overdue, fixedMinutes };
  }, [available, plan?.focusTaskIds, state, today]);

  if (!store.ready || !state || !now || !view) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  const review = needsReturnReview(state, today);

  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Hoje</h1>
        <p className="text-sm text-muted">
          Salvo neste navegador. A sugestão da OpenAI só entra na lista depois da confirmação.
        </p>
      </div>

      {review ? (
        <section className="rounded-[16px] border border-line bg-surface p-4">
          <h2 className="text-lg font-semibold">Quer rever o que ficou para trás?</h2>
          <p className="mt-1 text-sm text-muted">
            Nada será apagado. Compromissos e prazos continuam na lista.
          </p>
          {view.overdue.length > 0 ? (
            <ul className="mt-3 list-disc pl-5 text-sm">
              {view.overdue.map((task) => (
                <li key={task.id}>
                  {task.title} · prazo {task.dueOn?.split("-").reverse().join("/")}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm">Não há prazo vencido. Você pode só capturar algo novo.</p>
          )}
          <button
            type="button"
            className="mt-3 h-11 rounded-[10px] bg-action px-4 text-action-text"
            onClick={() => store.dismissReturn(today)}
          >
            Continuar daqui
          </button>
          <div className="mt-3">
            <SuggestionPanel
              options={[{ capability: "review_return", label: "Triagem do que ficou, sem apagar prazos" }]}
              text={
                view.overdue.length > 0
                  ? view.overdue.map((task) => `${task.title} · prazo ${task.dueOn}`).join("\n")
                  : "Não há prazo vencido. A pessoa voltou depois de um tempo."
              }
              timezone={state.preferences.timezone}
              tasks={view.overdue.map((task) => ({
                id: task.id,
                title: task.title,
                dueOn: task.dueOn,
                estimateMinutes: task.estimateMinutes,
                status: task.status,
              }))}
            />
          </div>
        </section>
      ) : null}

      <form
        className="flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          const idempotencyKey = key || crypto.randomUUID();
          if (!key) {
            setKey(idempotencyKey);
          }
          store.capture(text, idempotencyKey);
          setText("");
          setKey("");
        }}
      >
        <label htmlFor="captura" className="font-medium">
          O que você quer guardar?
        </label>
        <textarea
          id="captura"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={3}
          className="rounded-[10px] border border-[var(--control)] bg-surface px-3 py-2"
          placeholder="Sem categoria e sem data obrigatória"
        />
        <button type="submit" className="h-11 rounded-[10px] bg-action px-4 text-action-text">
          Guardar
        </button>
        <SuggestionPanel
          options={[{ capability: "capture_structure", label: "Organizar este texto em itens" }]}
          text={text}
          timezone={state.preferences.timezone}
        />
      </form>

      {state.captures.some((item) => item.status === "inbox") ? (
        <section>
          <h2 className="text-lg font-semibold">Caixa</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {state.captures
              .filter((item) => item.status === "inbox")
              .map((capture) => (
                <li key={capture.id} className="rounded-[16px] bg-surface p-4">
                  <p>{capture.text}</p>
                  <button
                    type="button"
                    className="mt-3 h-11 rounded-[10px] bg-action px-4 text-action-text"
                    onClick={() => store.convert(capture.id)}
                  >
                    Virar tarefa
                  </button>
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-[16px] bg-surface p-4">
        <h2 className="text-lg font-semibold">Próxima ação</h2>
        {view.next ? (
          <div className="mt-2 flex flex-col gap-2">
            <p>{view.nextStep ? view.nextStep.title : view.next.title}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="h-11 rounded-[10px] bg-action px-4 text-action-text"
                onClick={() =>
                  view.nextStep
                    ? store.setStepStatus(view.nextStep.id, "done")
                    : store.setTaskStatus(view.next.id, "done")
                }
              >
                Concluir
              </button>
              <Link
                href={`/foco?tarefa=${view.next.id}`}
                className="inline-flex h-11 items-center rounded-[10px] border border-line px-4"
              >
                Começar
              </Link>
            </div>
            <div className="mt-3">
              <SuggestionPanel
                options={[{ capability: "start_support", label: "Sugerir um começo menor" }]}
                text={view.nextStep ? view.nextStep.title : view.next.title}
                timezone={state.preferences.timezone}
                targetTaskId={view.next.id}
                tasks={[
                  {
                    id: view.next.id,
                    title: view.next.title,
                    dueOn: view.next.dueOn,
                    estimateMinutes: view.next.estimateMinutes,
                    status: view.next.status,
                  },
                ]}
              />
            </div>
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted">Nada em aberto. Uma captura já serve.</p>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Compromissos de hoje</h2>
        {view.events.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Nenhum compromisso neste dia.</p>
        ) : (
          <ul className="mt-2 flex flex-col gap-2">
            {view.events.map((event) => (
              <li key={event.id} className="rounded-[16px] bg-surface px-4 py-3">
                <p className="font-medium">
                  {event.title}
                  {event.fixed ? " · fixo" : ""}
                </p>
                <p className="text-sm text-muted">
                  {event.allDay ? "Dia inteiro" : event.startsAt.slice(11, 16)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Focos</h2>
        <label htmlFor="horas" className="text-sm">
          Horas disponíveis hoje
        </label>
        <input
          id="horas"
          type="number"
          min={0}
          max={24}
          value={Math.round(available / 60)}
          onChange={(event) =>
            store.setFocuses(
              today,
              plan?.focusTaskIds ?? [],
              Number(event.target.value) * 60,
            )
          }
          className="h-11 w-28 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        />
        <ul className="flex flex-col gap-2">
          {view.openTasks.map((task) => {
            const selected = plan?.focusTaskIds.includes(task.id) ?? false;
            return (
              <li key={task.id}>
                <label className="flex min-h-11 items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => {
                      const current = plan?.focusTaskIds ?? [];
                      const next = selected
                        ? current.filter((id) => id !== task.id)
                        : [...current, task.id];
                      store.setFocuses(today, next, available);
                    }}
                  />
                  <span>
                    {task.title}
                    {task.estimateMinutes ? ` · ${task.estimateMinutes} min` : " · sem estimativa, conto 30 min"}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        <SuggestionPanel
          options={[
            { capability: "plan_day", label: "Sugerir o que cabe no tempo" },
            { capability: "explain_priority", label: "Explicar uma ordem" },
          ]}
          text={[
            `Data de referência: ${today}.`,
            `Limite de focos: ${state.preferences.focusLimit}.`,
            `Minutos disponíveis: ${available}.`,
            `Minutos já ocupados por compromisso fixo: ${view.fixedMinutes}.`,
            "Tarefa sem estimativa conta 30 minutos. Não reduza estimativas.",
            ...view.openTasks.map(
              (task) =>
                `${task.id} · ${task.title} · ${task.estimateMinutes ?? "sem estimativa, contar 30"} min · prazo ${task.dueOn ?? "nenhum"}`,
            ),
          ].join("\n")}
          timezone={state.preferences.timezone}
          tasks={view.openTasks.map((task) => ({
            id: task.id,
            title: task.title,
            dueOn: task.dueOn,
            estimateMinutes: task.estimateMinutes,
            status: task.status,
          }))}
        />
        {view.fit.overflow.length > 0 ? (
          <div className="rounded-[16px] bg-surface p-4">
            <h3 className="font-semibold">Isto não cabe no tempo informado</h3>
            <ul className="mt-2 list-disc pl-5">
              {view.fit.overflow.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-muted">
              Os compromissos fixos continuam na agenda. As estimativas não foram encolhidas.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
