"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SuggestionPanel } from "@/components/suggestion-panel";
import { contexts, type ContextKey, type Frequency } from "@/modules/organizer/domain";
import { useStore } from "@/modules/organizer/store";

const contextLabel: Record<ContextKey, string> = {
  pessoal: "Pessoal",
  casa: "Casa",
  trabalho: "Trabalho",
  estudos: "Estudos",
};

export function PlanejarScreen() {
  const store = useStore();
  const params = useSearchParams();
  const contextFilter = params.get("contexto");
  const state = store.state;
  const [title, setTitle] = useState("");
  const [dueOn, setDueOn] = useState("");
  const [estimate, setEstimate] = useState("");
  const [context, setContext] = useState<ContextKey | "">("");
  const [stepDrafts, setStepDrafts] = useState<Record<string, string>>({});
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("09:00");
  const [eventEnd, setEventEnd] = useState("10:00");
  const [allDay, setAllDay] = useState(false);
  const [fixed, setFixed] = useState(true);
  const [frequency, setFrequency] = useState<Frequency | "once">("once");

  const tasks = useMemo(() => {
    if (!state) {
      return [];
    }
    return state.tasks.filter((task) => {
      if (task.archived) {
        return false;
      }
      if (contextFilter && task.context !== contextFilter) {
        return false;
      }
      return true;
    });
  }, [contextFilter, state]);

  if (!store.ready || !state) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  const inbox = state.captures.filter((item) => item.status === "inbox");
  const upcoming = state.events
    .filter((event) => event.status === "scheduled")
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    .slice(0, 30);

  return (
    <main className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Planejar</h1>
        <p className="text-sm text-muted">Caixa, tarefas e agenda. Nada disso depende da IA.</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Caixa de entrada</h2>
        {inbox.length === 0 ? (
          <p className="text-sm text-muted">A caixa está vazia.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {inbox.map((capture) => (
              <li key={capture.id} className="rounded-[16px] bg-surface p-4">
                <p>{capture.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="h-11 rounded-[10px] bg-action px-4 text-action-text"
                    onClick={() => store.convert(capture.id)}
                  >
                    Virar tarefa
                  </button>
                  <button
                    type="button"
                    className="h-11 rounded-[10px] border border-line px-4"
                    onClick={() => store.archiveInbox(capture.id)}
                  >
                    Arquivar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Nova tarefa</h2>
        <form
          className="mt-3 grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            store.saveTask({
              id: crypto.randomUUID(),
              title,
              notes: "",
              context: context || null,
              dueOn: dueOn || null,
              estimateMinutes: estimate ? Number(estimate) : null,
              expectedVersion: null,
            });
            setTitle("");
            setDueOn("");
            setEstimate("");
          }}
        >
          <label htmlFor="titulo" className="text-sm font-medium">
            Título
          </label>
          <input
            id="titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          />
          <label htmlFor="prazo" className="text-sm font-medium">
            Prazo, se houver
          </label>
          <input
            id="prazo"
            type="date"
            value={dueOn}
            onChange={(event) => setDueOn(event.target.value)}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          />
          <label htmlFor="estimativa" className="text-sm font-medium">
            Estimativa em minutos
          </label>
          <input
            id="estimativa"
            type="number"
            min={1}
            value={estimate}
            onChange={(event) => setEstimate(event.target.value)}
            className="h-11 w-32 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          />
          <label htmlFor="contexto" className="text-sm font-medium">
            Contexto
          </label>
          <select
            id="contexto"
            value={context}
            onChange={(event) => setContext(event.target.value as ContextKey | "")}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          >
            <option value="">Sem contexto</option>
            {contexts.map((item) => (
              <option key={item} value={item}>
                {contextLabel[item]}
              </option>
            ))}
          </select>
          <button type="submit" className="h-11 rounded-[10px] bg-action px-4 text-action-text">
            Criar tarefa
          </button>
        </form>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Tarefas</h2>
        {tasks.length === 0 ? (
          <p className="text-sm text-muted">Nenhuma tarefa neste filtro.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {tasks.map((task) => {
              const steps = state.steps
                .filter((step) => step.taskId === task.id)
                .sort((a, b) => a.position - b.position);
              return (
                <li key={task.id} className="rounded-[16px] bg-surface p-4">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted">
                    {task.status === "open"
                      ? "Aberta"
                      : task.status === "in_progress"
                        ? "Em andamento"
                        : task.status === "done"
                          ? "Concluída"
                          : "Cancelada"}
                    {task.dueOn ? ` · prazo ${task.dueOn.split("-").reverse().join("/")}` : ""}
                    {task.context ? ` · ${contextLabel[task.context]}` : ""}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {task.status !== "done" ? (
                      <button
                        type="button"
                        className="h-11 rounded-[10px] bg-action px-4 text-action-text"
                        onClick={() => store.setTaskStatus(task.id, "done")}
                      >
                        Concluir
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="h-11 rounded-[10px] border border-line px-4"
                        onClick={() => store.setTaskStatus(task.id, "open")}
                      >
                        Reabrir
                      </button>
                    )}
                    <button
                      type="button"
                      className="h-11 rounded-[10px] border border-line px-4"
                      onClick={() => store.setArchived(task.id, true)}
                    >
                      Arquivar
                    </button>
                    {task.status !== "done" && task.status !== "canceled" ? (
                      <Link
                        href={`/foco?tarefa=${task.id}`}
                        className="inline-flex h-11 items-center rounded-[10px] border border-line px-4"
                      >
                        Começar
                      </Link>
                    ) : null}
                  </div>
                  <div className="mt-3">
                    <SuggestionPanel
                      options={[
                        { capability: "task_breakdown", label: "Dividir em passos" },
                        { capability: "clarify_task", label: "Esclarecer" },
                        { capability: "simplify_instructions", label: "Encurtar o texto" },
                        { capability: "start_support", label: "Um começo menor" },
                      ]}
                      text={[task.title, task.notes, task.dueOn ? `Prazo ${task.dueOn}` : ""]
                        .filter(Boolean)
                        .join("\n")}
                      timezone={state.preferences.timezone}
                      targetTaskId={task.id}
                      tasks={[
                        {
                          id: task.id,
                          title: task.title,
                          dueOn: task.dueOn,
                          estimateMinutes: task.estimateMinutes,
                          status: task.status,
                        },
                      ]}
                    />
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {steps.map((step) => (
                      <li key={step.id} className="flex flex-wrap items-center gap-2 text-sm">
                        <span>
                          {step.title}
                          {step.status === "skipped"
                            ? " · pulado"
                            : step.status === "done"
                              ? " · feito"
                              : ""}
                        </span>
                        <button type="button" className="h-11 px-2 underline" onClick={() => store.setStepStatus(step.id, "done")}>
                          Feito
                        </button>
                        <button type="button" className="h-11 px-2 underline" onClick={() => store.setStepStatus(step.id, "skipped")}>
                          Pular
                        </button>
                        <button type="button" className="h-11 px-2 underline" onClick={() => store.moveStep(step.id, "up")}>
                          Subir
                        </button>
                        <button type="button" className="h-11 px-2 underline" onClick={() => store.moveStep(step.id, "down")}>
                          Descer
                        </button>
                      </li>
                    ))}
                  </ul>
                  <form
                    className="mt-3 flex flex-wrap gap-2"
                    onSubmit={(event) => {
                      event.preventDefault();
                      store.addStep(task.id, stepDrafts[task.id] ?? "");
                      setStepDrafts((current) => ({ ...current, [task.id]: "" }));
                    }}
                  >
                    <label className="sr-only" htmlFor={`passo-${task.id}`}>
                      Novo passo
                    </label>
                    <input
                      id={`passo-${task.id}`}
                      value={stepDrafts[task.id] ?? ""}
                      onChange={(event) =>
                        setStepDrafts((current) => ({ ...current, [task.id]: event.target.value }))
                      }
                      className="h-11 min-w-48 flex-1 rounded-[10px] border border-[var(--control)] bg-background px-3"
                      placeholder="Novo passo"
                    />
                    <button type="submit" className="h-11 rounded-[10px] border border-line px-4">
                      Adicionar passo
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Agenda</h2>
        <form
          className="mt-3 grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            if (!eventDate) {
              return;
            }
            if (frequency === "once") {
              store.saveEvent({
                id: crypto.randomUUID(),
                title: eventTitle,
                startsAt: allDay ? `${eventDate}T00:00:00` : `${eventDate}T${eventTime}:00`,
                endsAt: allDay ? `${eventDate}T23:59:00` : `${eventDate}T${eventEnd}:00`,
                allDay,
                fixed,
              });
            } else {
              store.addSeries({
                title: eventTitle,
                frequency,
                weekday: frequency === "weekly" ? new Date(`${eventDate}T12:00:00`).getDay() : null,
                intentDay: frequency === "monthly" ? Number(eventDate.slice(8, 10)) : null,
                time: allDay ? null : eventTime,
                allDay,
                fixed,
                startsOn: eventDate,
              });
            }
            setEventTitle("");
          }}
        >
          <label htmlFor="evento" className="text-sm font-medium">
            Compromisso
          </label>
          <input
            id="evento"
            value={eventTitle}
            onChange={(event) => setEventTitle(event.target.value)}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          />
          <label htmlFor="data-evento" className="text-sm font-medium">
            Data
          </label>
          <input
            id="data-evento"
            type="date"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
            required
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          />
          <div className="flex flex-wrap gap-3">
            <label className="flex min-h-11 items-center gap-2">
              <input type="checkbox" checked={allDay} onChange={(event) => setAllDay(event.target.checked)} />
              Dia inteiro
            </label>
            <label className="flex min-h-11 items-center gap-2">
              <input type="checkbox" checked={fixed} onChange={(event) => setFixed(event.target.checked)} />
              Horário fixo
            </label>
          </div>
          {allDay ? null : (
            <div className="flex gap-3">
              <label className="text-sm">
                Início
                <input
                  type="time"
                  value={eventTime}
                  onChange={(event) => setEventTime(event.target.value)}
                  className="mt-1 block h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
                />
              </label>
              <label className="text-sm">
                Fim
                <input
                  type="time"
                  value={eventEnd}
                  onChange={(event) => setEventEnd(event.target.value)}
                  className="mt-1 block h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
                />
              </label>
            </div>
          )}
          <label htmlFor="repeticao" className="text-sm font-medium">
            Repetição
          </label>
          <select
            id="repeticao"
            value={frequency}
            onChange={(event) => setFrequency(event.target.value as Frequency | "once")}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          >
            <option value="once">Só esta data</option>
            <option value="daily">Diária</option>
            <option value="weekly">Semanal, neste dia da semana</option>
            <option value="monthly">Mensal, neste dia do mês</option>
          </select>
          <button type="submit" className="h-11 rounded-[10px] bg-action px-4 text-action-text">
            Salvar compromisso
          </button>
        </form>
        <ul className="mt-4 flex flex-col gap-2">
          {upcoming.map((event) => (
            <li key={event.id} className="rounded-[16px] bg-surface px-4 py-3">
              <p className="font-medium">
                {event.title}
                {event.fixed ? " · fixo" : ""}
                {event.seriesId ? " · série" : ""}
              </p>
              <p className="text-sm text-muted">
                {event.startsAt.slice(0, 10).split("-").reverse().join("/")}
                {event.allDay ? " · dia inteiro" : ` · ${event.startsAt.slice(11, 16)}`}
              </p>
              <button
                type="button"
                className="mt-2 h-11 underline"
                onClick={() => store.setEventStatus(event.id, "completed")}
              >
                Concluir só esta ocorrência
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
