import { limits } from "@/server/limits";

export const contexts = ["pessoal", "casa", "trabalho", "estudos"] as const;
export type ContextKey = (typeof contexts)[number];

export type TaskStatus = "open" | "in_progress" | "done" | "canceled";
export type StepStatus = "pending" | "done" | "skipped";
export type CaptureStatus = "inbox" | "converted" | "archived";
export type EventStatus = "scheduled" | "completed" | "canceled" | "missed";
export type RunStatus = "running" | "paused" | "completed" | "abandoned";
export type Frequency = "daily" | "weekly" | "monthly";

export type Capture = {
  id: string;
  text: string;
  status: CaptureStatus;
  taskId: string | null;
  createdAt: string;
  updatedAt: string;
  rowVersion: number;
};

export type Task = {
  id: string;
  title: string;
  notes: string;
  status: TaskStatus;
  archived: boolean;
  context: ContextKey | null;
  dueOn: string | null;
  estimateMinutes: number | null;
  createdAt: string;
  updatedAt: string;
  rowVersion: number;
};

export type Step = {
  id: string;
  taskId: string;
  title: string;
  status: StepStatus;
  position: number;
  rowVersion: number;
};

export type Series = {
  id: string;
  title: string;
  frequency: Frequency;
  interval: number;
  intentDay: number | null;
  weekday: number | null;
  time: string | null;
  durationMinutes: number;
  allDay: boolean;
  fixed: boolean;
  startsOn: string;
  timezone: string;
  rowVersion: number;
};

export type AgendaEvent = {
  id: string;
  seriesId: string | null;
  occurrenceKey: string | null;
  detached: boolean;
  title: string;
  startsAt: string;
  endsAt: string;
  allDay: boolean;
  fixed: boolean;
  timezone: string;
  status: EventStatus;
  rowVersion: number;
};

export type Routine = {
  id: string;
  title: string;
  archived: boolean;
  rowVersion: number;
};

export type RoutineStep = {
  id: string;
  routineId: string;
  title: string;
  position: number;
  estimateMinutes: number | null;
};

export type RoutineRun = {
  id: string;
  routineId: string;
  templateVersion: number;
  status: RunStatus;
  accumulatedMs: number;
  resumedAt: string | null;
  startedAt: string;
  rowVersion: number;
};

export type RunStep = {
  id: string;
  runId: string;
  title: string;
  position: number;
  status: StepStatus;
  estimateMinutes: number | null;
};

export type DayPlan = {
  date: string;
  focusTaskIds: string[];
  availableMinutes: number;
};

export type Preferences = {
  timezone: string;
  theme: "light" | "dark" | "system";
  textScale: "md" | "lg";
  availableMinutes: number;
  focusLimit: number;
  lastActivityAt: string | null;
  returnDismissedOn: string | null;
  aiMemoryEnabled: boolean;
  aiMemory: string[];
  sessionMinutes: number;
};

export type OrganizerState = {
  captures: Capture[];
  tasks: Task[];
  steps: Step[];
  series: Series[];
  events: AgendaEvent[];
  routines: Routine[];
  routineSteps: RoutineStep[];
  runs: RoutineRun[];
  runSteps: RunStep[];
  plans: DayPlan[];
  proposals: ProposalRecord[];
  focusSessions: import("@/modules/focus/domain").FocusSession[];
  focusNotes: import("@/modules/focus/domain").FocusNote[];
  preferences: Preferences;
  idempotency: Record<string, string>;
};

export type ProposalRecord = {
  id: string;
  capability: string;
  outcome: "proposal" | "clarify" | "out_of_scope";
  summary: string;
  question: string | null;
  explanation: string;
  warnings: string[];
  items: ProposalItemRecord[];
  createdAt: string;
  expiresAt: string;
  status: "pending" | "partial" | "accepted" | "rejected";
  applied: Record<string, string>;
  targetTaskId: string | null;
};

export type ProposalItemRecord = {
  localId: string;
  title: string;
  detail: string;
  estimateMinutes: number | null;
  dueOn: string | null;
  dependsOn: string[];
  kind: "task" | "step" | "routine_step" | "focus" | "preference" | "note";
};

export type Ok<T> = { ok: true; state: OrganizerState; value: T };
export type Err = { ok: false; message: string };
export type Result<T> = Ok<T> | Err;

const focusDefault = 3;

export function emptyState(timezone: string): OrganizerState {
  return {
    captures: [],
    tasks: [],
    steps: [],
    series: [],
    events: [],
    routines: [],
    routineSteps: [],
    runs: [],
    runSteps: [],
    plans: [],
    proposals: [],
    focusSessions: [],
    focusNotes: [],
    preferences: {
      timezone,
      theme: "system",
      textScale: "md",
      availableMinutes: 6 * 60,
      focusLimit: focusDefault,
      lastActivityAt: null,
      returnDismissedOn: null,
      aiMemoryEnabled: false,
      aiMemory: [],
      sessionMinutes: 5,
    },
    idempotency: {},
  };
}

export function civilDate(timeZone: string, now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addCivilDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  utc.setUTCDate(utc.getUTCDate() + days);
  return utc.toISOString().slice(0, 10);
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function monthlyDay(year: number, month: number, intentDay: number): number {
  return Math.min(intentDay, daysInMonth(year, month));
}

function touch(state: OrganizerState, now: string): OrganizerState {
  return {
    ...state,
    preferences: { ...state.preferences, lastActivityAt: now },
  };
}

function fail(message: string): Err {
  return { ok: false, message };
}

export function captureText(
  state: OrganizerState,
  input: { id: string; text: string; now: string; idempotencyKey: string },
): Result<Capture> {
  const previous = state.idempotency[input.idempotencyKey];
  if (previous) {
    const existing = state.captures.find((item) => item.id === previous);
    if (!existing) {
      return fail("A captura anterior não foi encontrada.");
    }
    return { ok: true, state, value: existing };
  }
  const text = input.text.trim();
  if (!text) {
    return fail("Escreva algo para guardar.");
  }
  if (text.length > limits.captureCharacters) {
    return fail("O texto passou do limite. Encurte e guarde de novo.");
  }
  const capture: Capture = {
    id: input.id,
    text,
    status: "inbox",
    taskId: null,
    createdAt: input.now,
    updatedAt: input.now,
    rowVersion: 1,
  };
  return {
    ok: true,
    value: capture,
    state: touch(
      {
        ...state,
        captures: [capture, ...state.captures],
        idempotency: { ...state.idempotency, [input.idempotencyKey]: capture.id },
      },
      input.now,
    ),
  };
}

export function convertCapture(
  state: OrganizerState,
  input: { captureId: string; taskId: string; now: string },
): Result<Task> {
  const capture = state.captures.find((item) => item.id === input.captureId);
  if (!capture) {
    return fail("Essa captura não está mais na caixa.");
  }
  if (capture.taskId) {
    const existing = state.tasks.find((item) => item.id === capture.taskId);
    if (!existing) {
      return fail("A tarefa vinculada não foi encontrada.");
    }
    return { ok: true, state, value: existing };
  }
  const title = capture.text.slice(0, limits.titleCharacters);
  const task: Task = {
    id: input.taskId,
    title,
    notes: capture.text.length > title.length ? capture.text : "",
    status: "open",
    archived: false,
    context: null,
    dueOn: null,
    estimateMinutes: null,
    createdAt: input.now,
    updatedAt: input.now,
    rowVersion: 1,
  };
  return {
    ok: true,
    value: task,
    state: touch(
      {
        ...state,
        tasks: [task, ...state.tasks],
        captures: state.captures.map((item) =>
          item.id === capture.id
            ? {
                ...item,
                status: "converted",
                taskId: task.id,
                updatedAt: input.now,
                rowVersion: item.rowVersion + 1,
              }
            : item,
        ),
      },
      input.now,
    ),
  };
}

export function saveTask(
  state: OrganizerState,
  input: {
    id: string;
    title: string;
    notes: string;
    context: ContextKey | null;
    dueOn: string | null;
    estimateMinutes: number | null;
    now: string;
    expectedVersion: number | null;
  },
): Result<Task> {
  const title = input.title.trim();
  if (!title) {
    return fail("A tarefa precisa de um título.");
  }
  if (title.length > limits.titleCharacters) {
    return fail("O título passou de 200 caracteres.");
  }
  if (input.notes.length > limits.manualDescriptionCharacters) {
    return fail("A descrição passou do limite.");
  }
  if (input.dueOn && !/^\d{4}-\d{2}-\d{2}$/.test(input.dueOn)) {
    return fail("A data precisa estar completa.");
  }
  const current = state.tasks.find((item) => item.id === input.id);
  if (current && input.expectedVersion !== current.rowVersion) {
    return fail("Esta tarefa mudou. Atualize a tela antes de salvar de novo.");
  }
  const next: Task = {
    id: input.id,
    title,
    notes: input.notes.trim(),
    status: current?.status ?? "open",
    archived: current?.archived ?? false,
    context: input.context,
    dueOn: input.dueOn,
    estimateMinutes: input.estimateMinutes,
    createdAt: current?.createdAt ?? input.now,
    updatedAt: input.now,
    rowVersion: (current?.rowVersion ?? 0) + 1,
  };
  const tasks = current
    ? state.tasks.map((item) => (item.id === next.id ? next : item))
    : [next, ...state.tasks];
  return { ok: true, value: next, state: touch({ ...state, tasks }, input.now) };
}

export function setTaskStatus(
  state: OrganizerState,
  input: { taskId: string; status: TaskStatus; now: string },
): Result<Task> {
  const task = state.tasks.find((item) => item.id === input.taskId);
  if (!task) {
    return fail("Tarefa não encontrada.");
  }
  const next = {
    ...task,
    status: input.status,
    updatedAt: input.now,
    rowVersion: task.rowVersion + 1,
  };
  return {
    ok: true,
    value: next,
    state: touch(
      {
        ...state,
        tasks: state.tasks.map((item) => (item.id === next.id ? next : item)),
      },
      input.now,
    ),
  };
}

export function setArchived(
  state: OrganizerState,
  input: { taskId: string; archived: boolean; now: string },
): Result<Task> {
  const task = state.tasks.find((item) => item.id === input.taskId);
  if (!task) {
    return fail("Tarefa não encontrada.");
  }
  const next = {
    ...task,
    archived: input.archived,
    updatedAt: input.now,
    rowVersion: task.rowVersion + 1,
  };
  return {
    ok: true,
    value: next,
    state: touch(
      {
        ...state,
        tasks: state.tasks.map((item) => (item.id === next.id ? next : item)),
      },
      input.now,
    ),
  };
}

export function addStep(
  state: OrganizerState,
  input: { id: string; taskId: string; title: string },
): Result<Step> {
  const task = state.tasks.find((item) => item.id === input.taskId);
  if (!task) {
    return fail("Tarefa não encontrada.");
  }
  const title = input.title.trim();
  if (!title) {
    return fail("O passo precisa de um texto.");
  }
  const siblings = state.steps.filter((item) => item.taskId === input.taskId);
  if (siblings.length >= limits.batchSteps) {
    return fail("Esta tarefa já tem o máximo de passos.");
  }
  const step: Step = {
    id: input.id,
    taskId: input.taskId,
    title: title.slice(0, limits.titleCharacters),
    status: "pending",
    position: siblings.length,
    rowVersion: 1,
  };
  return { ok: true, value: step, state: { ...state, steps: [...state.steps, step] } };
}

export function setStepStatus(
  state: OrganizerState,
  input: { stepId: string; status: StepStatus },
): Result<Step> {
  const step = state.steps.find((item) => item.id === input.stepId);
  if (!step) {
    return fail("Passo não encontrado.");
  }
  const next = { ...step, status: input.status, rowVersion: step.rowVersion + 1 };
  return {
    ok: true,
    value: next,
    state: {
      ...state,
      steps: state.steps.map((item) => (item.id === next.id ? next : item)),
    },
  };
}

export function moveStep(
  state: OrganizerState,
  input: { stepId: string; direction: "up" | "down" },
): Result<Step[]> {
  const step = state.steps.find((item) => item.id === input.stepId);
  if (!step) {
    return fail("Passo não encontrado.");
  }
  const siblings = state.steps
    .filter((item) => item.taskId === step.taskId)
    .sort((a, b) => a.position - b.position);
  const index = siblings.findIndex((item) => item.id === step.id);
  const target = input.direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= siblings.length) {
    return { ok: true, state, value: siblings };
  }
  const reordered = siblings.slice();
  const [item] = reordered.splice(index, 1);
  reordered.splice(target, 0, item);
  const positioned = reordered.map((entry, position) => ({
    ...entry,
    position,
    rowVersion: entry.rowVersion + 1,
  }));
  const ids = new Set(positioned.map((entry) => entry.id));
  return {
    ok: true,
    value: positioned,
    state: {
      ...state,
      steps: [...state.steps.filter((entry) => !ids.has(entry.id)), ...positioned],
    },
  };
}

export function occurrenceDates(input: {
  frequency: Frequency;
  interval: number;
  startsOn: string;
  intentDay: number | null;
  weekday: number | null;
  until: string;
}): string[] {
  const interval = Math.max(1, input.interval);
  const dates: string[] = [];
  if (input.frequency === "monthly") {
    const intent = input.intentDay ?? Number(input.startsOn.slice(8, 10));
    let year = Number(input.startsOn.slice(0, 4));
    let month = Number(input.startsOn.slice(5, 7));
    for (let guard = 0; guard < 24; guard += 1) {
      const day = monthlyDay(year, month, intent);
      const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (iso > input.until) {
        break;
      }
      if (iso >= input.startsOn) {
        dates.push(iso);
      }
      month += interval;
      while (month > 12) {
        month -= 12;
        year += 1;
      }
    }
    return dates;
  }
  const step = input.frequency === "weekly" ? 7 * interval : interval;
  let cursor = input.startsOn;
  if (input.frequency === "weekly" && input.weekday !== null) {
    const start = new Date(`${input.startsOn}T12:00:00Z`);
    const delta = (input.weekday - start.getUTCDay() + 7) % 7;
    cursor = addCivilDays(input.startsOn, delta);
  }
  for (let guard = 0; guard < 120 && cursor <= input.until; guard += 1) {
    dates.push(cursor);
    cursor = addCivilDays(cursor, step);
  }
  return dates;
}

function eventTimes(date: string, time: string | null, duration: number, allDay: boolean) {
  if (allDay || !time) {
    return { startsAt: `${date}T00:00:00`, endsAt: `${date}T23:59:00` };
  }
  const [hour, minute] = time.split(":").map(Number);
  const start = new Date(`${date}T${time}:00`);
  const end = new Date(start.getTime() + duration * 60_000);
  const endClock = `${String(end.getHours()).padStart(2, "0")}:${String(end.getMinutes()).padStart(2, "0")}`;
  return {
    startsAt: `${date}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`,
    endsAt: `${date}T${endClock}:00`,
  };
}

export function materializeSeries(
  state: OrganizerState,
  input: { series: Series; until: string; ids: string[] },
): Result<AgendaEvent[]> {
  const dates = occurrenceDates({
    frequency: input.series.frequency,
    interval: input.series.interval,
    startsOn: input.series.startsOn,
    intentDay: input.series.intentDay,
    weekday: input.series.weekday,
    until: input.until,
  });
  const created: AgendaEvent[] = [];
  let nextEvents = state.events;
  dates.forEach((date, index) => {
    const occurrenceKey = `${input.series.id}:${date}`;
    if (nextEvents.some((item) => item.occurrenceKey === occurrenceKey)) {
      return;
    }
    const id = input.ids[index];
    if (!id) {
      return;
    }
    const times = eventTimes(
      date,
      input.series.time,
      input.series.durationMinutes,
      input.series.allDay,
    );
    const event: AgendaEvent = {
      id,
      seriesId: input.series.id,
      occurrenceKey,
      detached: false,
      title: input.series.title,
      ...times,
      allDay: input.series.allDay,
      fixed: input.series.fixed,
      timezone: input.series.timezone,
      status: "scheduled",
      rowVersion: 1,
    };
    created.push(event);
    nextEvents = [...nextEvents, event];
  });
  const series = state.series.some((item) => item.id === input.series.id)
    ? state.series
    : [...state.series, input.series];
  return {
    ok: true,
    value: created,
    state: { ...state, series, events: nextEvents },
  };
}

export function saveSingleEvent(
  state: OrganizerState,
  input: {
    id: string;
    title: string;
    startsAt: string;
    endsAt: string;
    allDay: boolean;
    fixed: boolean;
    timezone: string;
    now: string;
  },
): Result<AgendaEvent> {
  const title = input.title.trim();
  if (!title) {
    return fail("O compromisso precisa de um título.");
  }
  if (input.endsAt < input.startsAt) {
    return fail("O fim precisa ser depois do início.");
  }
  const current = state.events.find((item) => item.id === input.id);
  const next: AgendaEvent = {
    id: input.id,
    seriesId: current?.seriesId ?? null,
    occurrenceKey: current?.occurrenceKey ?? null,
    detached: current?.seriesId ? true : false,
    title: title.slice(0, limits.titleCharacters),
    startsAt: input.startsAt,
    endsAt: input.endsAt,
    allDay: input.allDay,
    fixed: input.fixed,
    timezone: input.timezone,
    status: current?.status ?? "scheduled",
    rowVersion: (current?.rowVersion ?? 0) + 1,
  };
  const events = current
    ? state.events.map((item) => (item.id === next.id ? next : item))
    : [...state.events, next];
  return { ok: true, value: next, state: touch({ ...state, events }, input.now) };
}

export function setEventStatus(
  state: OrganizerState,
  input: { eventId: string; status: EventStatus; now: string },
): Result<AgendaEvent> {
  const event = state.events.find((item) => item.id === input.eventId);
  if (!event) {
    return fail("Compromisso não encontrado.");
  }
  const next = { ...event, status: input.status, rowVersion: event.rowVersion + 1 };
  return {
    ok: true,
    value: next,
    state: touch(
      {
        ...state,
        events: state.events.map((item) => (item.id === next.id ? next : item)),
      },
      input.now,
    ),
  };
}

export function saveRoutine(
  state: OrganizerState,
  input: { id: string; title: string; steps: { id: string; title: string }[] },
): Result<Routine> {
  const title = input.title.trim();
  if (!title) {
    return fail("A rotina precisa de um nome.");
  }
  const cleaned = input.steps
    .map((step) => ({ ...step, title: step.title.trim() }))
    .filter((step) => step.title);
  if (cleaned.length === 0) {
    return fail("Inclua pelo menos um passo.");
  }
  const current = state.routines.find((item) => item.id === input.id);
  const routine: Routine = {
    id: input.id,
    title: title.slice(0, limits.titleCharacters),
    archived: false,
    rowVersion: (current?.rowVersion ?? 0) + 1,
  };
  const routineSteps: RoutineStep[] = cleaned.map((step, position) => ({
    id: step.id,
    routineId: routine.id,
    title: step.title.slice(0, limits.titleCharacters),
    position,
    estimateMinutes: null,
  }));
  return {
    ok: true,
    value: routine,
    state: {
      ...state,
      routines: current
        ? state.routines.map((item) => (item.id === routine.id ? routine : item))
        : [...state.routines, routine],
      routineSteps: [
        ...state.routineSteps.filter((item) => item.routineId !== routine.id),
        ...routineSteps,
      ],
    },
  };
}

export function startRoutine(
  state: OrganizerState,
  input: { routineId: string; runId: string; stepIds: string[]; now: string },
): Result<RoutineRun> {
  const routine = state.routines.find((item) => item.id === input.routineId);
  if (!routine) {
    return fail("Rotina não encontrada.");
  }
  const active = state.runs.find(
    (item) => item.routineId === routine.id && (item.status === "running" || item.status === "paused"),
  );
  if (active) {
    return { ok: true, state, value: active };
  }
  const template = state.routineSteps
    .filter((item) => item.routineId === routine.id)
    .sort((a, b) => a.position - b.position);
  const run: RoutineRun = {
    id: input.runId,
    routineId: routine.id,
    templateVersion: routine.rowVersion,
    status: "running",
    accumulatedMs: 0,
    resumedAt: input.now,
    startedAt: input.now,
    rowVersion: 1,
  };
  const runSteps: RunStep[] = template.map((step, index) => ({
    id: input.stepIds[index] ?? `${run.id}-${index}`,
    runId: run.id,
    title: step.title,
    position: step.position,
    status: "pending",
    estimateMinutes: step.estimateMinutes,
  }));
  return {
    ok: true,
    value: run,
    state: touch(
      { ...state, runs: [...state.runs, run], runSteps: [...state.runSteps, ...runSteps] },
      input.now,
    ),
  };
}

export function elapsedMs(run: RoutineRun, now: string): number {
  const extra =
    run.status === "running" && run.resumedAt
      ? Math.max(0, new Date(now).getTime() - new Date(run.resumedAt).getTime())
      : 0;
  return run.accumulatedMs + extra;
}

export function setRunStatus(
  state: OrganizerState,
  input: { runId: string; status: RunStatus; now: string },
): Result<RoutineRun> {
  const run = state.runs.find((item) => item.id === input.runId);
  if (!run) {
    return fail("Execução não encontrada.");
  }
  let accumulatedMs = run.accumulatedMs;
  let resumedAt = run.resumedAt;
  if (input.status === "paused" || input.status === "completed" || input.status === "abandoned") {
    accumulatedMs = elapsedMs(run, input.now);
    resumedAt = null;
  }
  if (input.status === "running") {
    resumedAt = input.now;
  }
  const next = {
    ...run,
    status: input.status,
    accumulatedMs,
    resumedAt,
    rowVersion: run.rowVersion + 1,
  };
  return {
    ok: true,
    value: next,
    state: {
      ...state,
      runs: state.runs.map((item) => (item.id === next.id ? next : item)),
    },
  };
}

export function setRunStepStatus(
  state: OrganizerState,
  input: { stepId: string; status: StepStatus },
): Result<RunStep> {
  const step = state.runSteps.find((item) => item.id === input.stepId);
  if (!step) {
    return fail("Passo da rotina não encontrado.");
  }
  const next = { ...step, status: input.status };
  return {
    ok: true,
    value: next,
    state: {
      ...state,
      runSteps: state.runSteps.map((item) => (item.id === next.id ? next : item)),
    },
  };
}

export function setFocuses(
  state: OrganizerState,
  input: { date: string; taskIds: string[]; availableMinutes: number },
): Result<DayPlan> {
  const limit = state.preferences.focusLimit;
  const unique = input.taskIds.filter((id, index) => input.taskIds.indexOf(id) === index);
  if (unique.length > limit) {
    return fail(`Escolha no máximo ${limit} focos.`);
  }
  const known = new Set(state.tasks.map((item) => item.id));
  if (unique.some((id) => !known.has(id))) {
    return fail("Um dos focos não existe mais.");
  }
  const plan: DayPlan = {
    date: input.date,
    focusTaskIds: unique,
    availableMinutes: Math.max(0, input.availableMinutes),
  };
  const plans = state.plans.some((item) => item.date === plan.date)
    ? state.plans.map((item) => (item.date === plan.date ? plan : item))
    : [...state.plans, plan];
  return {
    ok: true,
    value: plan,
    state: {
      ...state,
      plans,
      preferences: { ...state.preferences, availableMinutes: plan.availableMinutes },
    },
  };
}

export function dayFit(input: {
  availableMinutes: number;
  fixedMinutes: number;
  items: { id: string; title: string; estimateMinutes: number }[];
}): { fitted: string[]; overflow: { id: string; title: string }[] } {
  let remaining = input.availableMinutes - input.fixedMinutes;
  const fitted: string[] = [];
  const overflow: { id: string; title: string }[] = [];
  for (const item of input.items) {
    if (item.estimateMinutes <= remaining) {
      fitted.push(item.id);
      remaining -= item.estimateMinutes;
    } else {
      overflow.push({ id: item.id, title: item.title });
    }
  }
  return { fitted, overflow };
}

export function needsReturnReview(state: OrganizerState, today: string): boolean {
  const last = state.preferences.lastActivityAt;
  if (!last) {
    return false;
  }
  const lastDay = last.slice(0, 10);
  if (state.preferences.returnDismissedOn === today) {
    return false;
  }
  return addCivilDays(lastDay, 7) <= today;
}

export function dismissReturn(state: OrganizerState, today: string): OrganizerState {
  return {
    ...state,
    preferences: { ...state.preferences, returnDismissedOn: today },
  };
}

export function archiveCapture(
  state: OrganizerState,
  input: { captureId: string; now: string },
): Result<Capture> {
  const capture = state.captures.find((item) => item.id === input.captureId);
  if (!capture) {
    return fail("Essa captura não está mais na caixa.");
  }
  const next: Capture = {
    ...capture,
    status: "archived",
    updatedAt: input.now,
    rowVersion: capture.rowVersion + 1,
  };
  return {
    ok: true,
    value: next,
    state: touch(
      {
        ...state,
        captures: state.captures.map((item) => (item.id === next.id ? next : item)),
      },
      input.now,
    ),
  };
}

export function updatePreferences(
  state: OrganizerState,
  patch: Partial<
    Pick<Preferences, "timezone" | "theme" | "textScale" | "focusLimit" | "aiMemoryEnabled">
  >,
): OrganizerState {
  return { ...state, preferences: { ...state.preferences, ...patch } };
}

export function clearAiMemory(state: OrganizerState): OrganizerState {
  return { ...state, preferences: { ...state.preferences, aiMemory: [] } };
}

export function hydrateOrganizer(saved: OrganizerState, timezone: string): OrganizerState {
  const fresh = emptyState(saved.preferences?.timezone || timezone);
  return {
    ...fresh,
    ...saved,
    captures: Array.isArray(saved.captures) ? saved.captures : [],
    tasks: Array.isArray(saved.tasks) ? saved.tasks : [],
    steps: Array.isArray(saved.steps) ? saved.steps : [],
    series: Array.isArray(saved.series) ? saved.series : [],
    events: Array.isArray(saved.events) ? saved.events : [],
    routines: Array.isArray(saved.routines) ? saved.routines : [],
    routineSteps: Array.isArray(saved.routineSteps) ? saved.routineSteps : [],
    runs: Array.isArray(saved.runs) ? saved.runs : [],
    runSteps: Array.isArray(saved.runSteps) ? saved.runSteps : [],
    plans: Array.isArray(saved.plans) ? saved.plans : [],
    proposals: Array.isArray(saved.proposals) ? saved.proposals : [],
    focusSessions: Array.isArray(saved.focusSessions) ? saved.focusSessions : [],
    focusNotes: Array.isArray(saved.focusNotes) ? saved.focusNotes : [],
    idempotency: saved.idempotency ?? {},
    preferences: {
      ...fresh.preferences,
      ...saved.preferences,
      aiMemory: Array.isArray(saved.preferences?.aiMemory) ? saved.preferences.aiMemory : [],
      aiMemoryEnabled: saved.preferences?.aiMemoryEnabled === true,
      sessionMinutes:
        typeof saved.preferences?.sessionMinutes === "number" ? saved.preferences.sessionMinutes : 5,
    },
  };
}
