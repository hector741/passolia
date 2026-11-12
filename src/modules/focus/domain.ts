import {
  setStepStatus,
  setTaskStatus,
  type OrganizerState,
  type Result,
} from "@/modules/organizer/domain";

export const focusGapMs = 30 * 60 * 1000;

export type FocusStatus = "ready" | "running" | "paused" | "needs_review" | "ended";
export type TimingMode = "timed" | "untimed";
export type TimerDisplay = "countdown" | "elapsed" | "hidden";
export type FocusResult = "step_done" | "task_done" | "partial" | "save_for_later" | "stopped";

export type FocusSession = {
  id: string;
  taskId: string;
  stepId: string | null;
  objective: string;
  originalObjective: string;
  status: FocusStatus;
  timingMode: TimingMode;
  timerDisplay: TimerDisplay;
  plannedMinutes: number | null;
  budgetElapsed: boolean;
  accumulatedMs: number;
  segmentStartedAt: string | null;
  uncertainSince: string | null;
  startedAt: string;
  endedAt: string | null;
  result: FocusResult | null;
  returnNote: string | null;
  rowVersion: number;
};

export type FocusNote = {
  id: string;
  sessionId: string;
  text: string;
  createdAt: string;
};

function fail(message: string): Result<FocusSession> {
  return { ok: false, message };
}

function deltaMs(from: string, to: string): number {
  const value = Date.parse(to) - Date.parse(from);
  return Number.isFinite(value) ? value : 0;
}

export function activityMs(session: FocusSession, now: string): number {
  if (session.status !== "running" || !session.segmentStartedAt) {
    return session.accumulatedMs;
  }
  const delta = deltaMs(session.segmentStartedAt, now);
  if (delta < 0 || delta > focusGapMs) {
    return session.accumulatedMs;
  }
  return session.accumulatedMs + delta;
}

function withBudget(session: FocusSession, now: string): FocusSession {
  if (session.timingMode !== "timed" || session.plannedMinutes == null) {
    return session;
  }
  const elapsed = activityMs(session, now);
  if (elapsed >= session.plannedMinutes * 60_000) {
    return { ...session, budgetElapsed: true };
  }
  return session;
}

function replaceSession(state: OrganizerState, session: FocusSession): OrganizerState {
  const exists = state.focusSessions.some((item) => item.id === session.id);
  return {
    ...state,
    focusSessions: exists
      ? state.focusSessions.map((item) => (item.id === session.id ? session : item))
      : [session, ...state.focusSessions],
  };
}

function closeOpenSegment(session: FocusSession, now: string): FocusSession {
  if (session.status !== "running" || !session.segmentStartedAt) {
    return session;
  }
  const delta = deltaMs(session.segmentStartedAt, now);
  if (delta < 0 || delta > focusGapMs) {
    return {
      ...session,
      status: "needs_review",
      segmentStartedAt: null,
      uncertainSince: session.segmentStartedAt,
      rowVersion: session.rowVersion + 1,
    };
  }
  return withBudget(
    {
      ...session,
      accumulatedMs: session.accumulatedMs + delta,
      segmentStartedAt: null,
      rowVersion: session.rowVersion + 1,
    },
    now,
  );
}

export function startFocus(
  state: OrganizerState,
  input: {
    id: string;
    taskId: string;
    stepId: string | null;
    objective: string;
    timingMode: TimingMode;
    plannedMinutes: number | null;
    now: string;
    idempotencyKey: string;
  },
): Result<FocusSession> {
  const previous = state.idempotency[input.idempotencyKey];
  if (previous) {
    const existing = state.focusSessions.find((item) => item.id === previous);
    if (!existing) {
      return fail("A sessão anterior não foi encontrada.");
    }
    return { ok: true, state, value: existing };
  }
  const task = state.tasks.find((item) => item.id === input.taskId && !item.archived);
  if (!task || task.status === "canceled") {
    return fail("Essa tarefa não está disponível para começar.");
  }
  const same = state.focusSessions.find(
    (item) =>
      item.taskId === task.id &&
      (item.status === "running" || item.status === "paused" || item.status === "needs_review"),
  );
  if (same) {
    return { ok: true, state, value: same };
  }
  const other = state.focusSessions.find((item) => item.status === "running");
  if (other) {
    return fail("Já existe uma sessão em andamento. Pause essa antes de começar outra.");
  }
  const step = input.stepId ? state.steps.find((item) => item.id === input.stepId && item.taskId === task.id) : undefined;
  const objective = input.objective.trim() || step?.title || task.title;
  const planned = input.timingMode === "untimed" ? null : input.plannedMinutes;
  if (input.timingMode === "timed" && (planned == null || planned < 1 || planned > 240)) {
    return fail("Escolha uma duração entre 1 e 240 minutos, ou comece sem contagem.");
  }
  const session: FocusSession = {
    id: input.id,
    taskId: task.id,
    stepId: step?.id ?? null,
    objective: objective.slice(0, 200),
    originalObjective: objective.slice(0, 200),
    status: "running",
    timingMode: input.timingMode,
    timerDisplay: input.timingMode === "untimed" ? "hidden" : "countdown",
    plannedMinutes: planned,
    budgetElapsed: false,
    accumulatedMs: 0,
    segmentStartedAt: input.now,
    uncertainSince: null,
    startedAt: input.now,
    endedAt: null,
    result: null,
    returnNote: null,
    rowVersion: 1,
  };
  let next = replaceSession(state, session);
  next = {
    ...next,
    idempotency: { ...next.idempotency, [input.idempotencyKey]: session.id },
  };
  if (task.status === "open") {
    const started = setTaskStatus(next, { taskId: task.id, status: "in_progress", now: input.now });
    if (!started.ok) {
      return started;
    }
    next = started.state;
  }
  return { ok: true, state: next, value: session };
}

export function observeFocus(
  state: OrganizerState,
  input: { sessionId: string; now: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session) {
    return fail("Sessão não encontrada.");
  }
  if (session.status !== "running" || !session.segmentStartedAt) {
    return { ok: true, state, value: session };
  }
  const delta = deltaMs(session.segmentStartedAt, input.now);
  if (delta < 0 || delta > focusGapMs) {
    const review: FocusSession = {
      ...session,
      status: "needs_review",
      segmentStartedAt: null,
      uncertainSince: session.segmentStartedAt,
      rowVersion: session.rowVersion + 1,
    };
    return { ok: true, state: replaceSession(state, review), value: review };
  }
  const marked = withBudget(session, input.now);
  if (marked.budgetElapsed === session.budgetElapsed) {
    return { ok: true, state, value: session };
  }
  const next = { ...marked, rowVersion: session.rowVersion + 1 };
  return { ok: true, state: replaceSession(state, next), value: next };
}

export function pauseFocus(
  state: OrganizerState,
  input: { sessionId: string; now: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Essa sessão não pode ser pausada.");
  }
  if (session.status === "paused" || session.status === "needs_review") {
    return { ok: true, state, value: session };
  }
  const closed = closeOpenSegment(session, input.now);
  const paused: FocusSession =
    closed.status === "needs_review" ? closed : { ...closed, status: "paused" };
  return { ok: true, state: replaceSession(state, paused), value: paused };
}

export function setReturnNote(
  state: OrganizerState,
  input: { sessionId: string; note: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Essa sessão não aceita mais uma pista.");
  }
  const next = { ...session, returnNote: input.note.trim().slice(0, 500), rowVersion: session.rowVersion + 1 };
  return { ok: true, state: replaceSession(state, next), value: next };
}

export function resolveReview(
  state: OrganizerState,
  input: { sessionId: string; addMinutes: number | null; now: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status !== "needs_review") {
    return fail("Não há tempo incerto para revisar.");
  }
  let accumulated = session.accumulatedMs;
  if (input.addMinutes != null) {
    if (input.addMinutes < 0 || input.addMinutes > 240) {
      return fail("Informe uma duração entre 0 e 240 minutos, ou deixe desconhecida.");
    }
    accumulated += input.addMinutes * 60_000;
  }
  const next: FocusSession = {
    ...session,
    status: "paused",
    accumulatedMs: accumulated,
    uncertainSince: null,
    segmentStartedAt: null,
    rowVersion: session.rowVersion + 1,
  };
  return { ok: true, state: replaceSession(state, next), value: next };
}

export function resumeFocus(
  state: OrganizerState,
  input: { sessionId: string; now: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Uma sessão encerrada não reabre. Comece outra.");
  }
  if (session.status === "needs_review") {
    return fail("Revise o tempo em aberto antes de continuar.");
  }
  if (session.status === "running") {
    return { ok: true, state, value: session };
  }
  const other = state.focusSessions.find((item) => item.status === "running");
  if (other) {
    return fail("Já existe uma sessão em andamento.");
  }
  const next: FocusSession = {
    ...session,
    status: "running",
    segmentStartedAt: input.now,
    rowVersion: session.rowVersion + 1,
  };
  return { ok: true, state: replaceSession(state, next), value: next };
}

export function setTimerDisplay(
  state: OrganizerState,
  input: { sessionId: string; timerDisplay: TimerDisplay },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Sessão não encontrada.");
  }
  const next = { ...session, timerDisplay: input.timerDisplay, rowVersion: session.rowVersion + 1 };
  return { ok: true, state: replaceSession(state, next), value: next };
}

export function reduceFocus(
  state: OrganizerState,
  input: { sessionId: string; objective: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Essa sessão não pode ser reduzida.");
  }
  const objective = input.objective.trim();
  if (!objective) {
    return fail("Escreva o passo menor.");
  }
  const task = state.tasks.find((item) => item.id === session.taskId);
  const next: FocusSession = {
    ...session,
    objective: objective.slice(0, 200),
    rowVersion: session.rowVersion + 1,
  };
  const replaced = replaceSession(state, next);
  if (task) {
    const preserved = replaced.tasks.find((item) => item.id === task.id);
    if (preserved && (preserved.dueOn !== task.dueOn || preserved.title !== task.title)) {
      return fail("A redução não pode alterar a tarefa.");
    }
  }
  return { ok: true, state: replaced, value: next };
}

export function addFocusNote(
  state: OrganizerState,
  input: { id: string; sessionId: string; text: string; now: string; idempotencyKey: string },
): Result<FocusSession> {
  const previous = state.idempotency[input.idempotencyKey];
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session || session.status === "ended") {
    return fail("Anote durante a sessão, antes de encerrar.");
  }
  if (previous) {
    return { ok: true, state, value: session };
  }
  const text = input.text.trim();
  if (!text) {
    return fail("Escreva a anotação.");
  }
  const note: FocusNote = {
    id: input.id,
    sessionId: session.id,
    text: text.slice(0, 2000),
    createdAt: input.now,
  };
  return {
    ok: true,
    value: session,
    state: {
      ...state,
      focusNotes: [note, ...state.focusNotes],
      idempotency: { ...state.idempotency, [input.idempotencyKey]: note.id },
    },
  };
}

export function endFocus(
  state: OrganizerState,
  input: { sessionId: string; result: FocusResult; now: string },
): Result<FocusSession> {
  const session = state.focusSessions.find((item) => item.id === input.sessionId);
  if (!session) {
    return fail("Sessão não encontrada.");
  }
  if (session.status === "ended") {
    return { ok: true, state, value: session };
  }
  const closed = session.status === "running" ? closeOpenSegment(session, input.now) : session;
  const ended: FocusSession = {
    ...closed,
    status: "ended",
    segmentStartedAt: null,
    endedAt: input.now,
    result: input.result,
    rowVersion: closed.rowVersion + 1,
  };
  let next = replaceSession(state, ended);
  if (input.result === "step_done" && ended.stepId) {
    const step = setStepStatus(next, { stepId: ended.stepId, status: "done" });
    if (!step.ok) {
      return { ok: false, message: step.message };
    }
    next = step.state;
  }
  if (input.result === "task_done") {
    const task = setTaskStatus(next, { taskId: ended.taskId, status: "done", now: input.now });
    if (!task.ok) {
      return task;
    }
    next = task.state;
  }
  const stored = next.focusSessions.find((item) => item.id === ended.id) ?? ended;
  return { ok: true, state: next, value: stored };
}
