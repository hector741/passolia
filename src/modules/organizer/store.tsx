"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { loadOrganizer, saveOrganizer } from "@/modules/organizer/browser-db";
import { acceptProposal } from "@/modules/ai/apply";
import {
  addFocusNote,
  endFocus,
  observeFocus,
  pauseFocus,
  reduceFocus,
  resolveReview,
  resumeFocus,
  setReturnNote,
  setTimerDisplay,
  startFocus,
  type FocusResult,
  type TimerDisplay,
  type TimingMode,
} from "@/modules/focus/domain";
import {
  addStep,
  archiveCapture,
  captureText,
  clearAiMemory,
  convertCapture,
  dismissReturn,
  materializeSeries,
  saveRoutine,
  saveSingleEvent,
  saveTask,
  setArchived,
  setEventStatus,
  setFocuses,
  setRunStatus,
  setRunStepStatus,
  setStepStatus,
  setTaskStatus,
  startRoutine,
  updatePreferences,
  moveStep,
  type ContextKey,
  type EventStatus,
  type Frequency,
  type OrganizerState,
  type Preferences,
  type ProposalRecord,
  type Result,
  type RunStatus,
  type StepStatus,
  type TaskStatus,
} from "@/modules/organizer/domain";

type StoreValue = {
  state: OrganizerState | null;
  ready: boolean;
  message: string | null;
  clearMessage: () => void;
  report: (message: string) => void;
  capture: (text: string, idempotencyKey: string) => void;
  convert: (captureId: string) => void;
  archiveInbox: (captureId: string) => void;
  saveTask: (input: {
    id: string;
    title: string;
    notes: string;
    context: ContextKey | null;
    dueOn: string | null;
    estimateMinutes: number | null;
    expectedVersion: number | null;
  }) => void;
  setTaskStatus: (taskId: string, status: TaskStatus) => void;
  setArchived: (taskId: string, archived: boolean) => void;
  addStep: (taskId: string, title: string) => void;
  setStepStatus: (stepId: string, status: StepStatus) => void;
  moveStep: (stepId: string, direction: "up" | "down") => void;
  saveEvent: (input: {
    id: string;
    title: string;
    startsAt: string;
    endsAt: string;
    allDay: boolean;
    fixed: boolean;
  }) => void;
  setEventStatus: (eventId: string, status: EventStatus) => void;
  addSeries: (input: {
    title: string;
    frequency: Frequency;
    weekday: number | null;
    intentDay: number | null;
    time: string | null;
    allDay: boolean;
    fixed: boolean;
    startsOn: string;
  }) => void;
  saveRoutine: (title: string, steps: string[]) => void;
  startRoutine: (routineId: string) => void;
  setRunStatus: (runId: string, status: RunStatus) => void;
  setRunStep: (stepId: string, status: StepStatus) => void;
  setFocuses: (date: string, taskIds: string[], availableMinutes: number) => void;
  patchPreferences: (
    patch: Partial<
      Pick<Preferences, "timezone" | "theme" | "textScale" | "focusLimit" | "aiMemoryEnabled">
    >,
  ) => void;
  clearAiMemory: () => void;
  acceptProposal: (proposal: ProposalRecord, selectedLocalIds: string[], today: string) => void;
  startFocus: (input: {
    taskId: string;
    stepId: string | null;
    objective: string;
    timingMode: TimingMode;
    plannedMinutes: number | null;
    idempotencyKey: string;
  }) => void;
  observeFocus: (sessionId: string, now: string) => void;
  pauseFocus: (sessionId: string) => void;
  resumeFocus: (sessionId: string) => void;
  resolveFocusReview: (sessionId: string, addMinutes: number | null) => void;
  setFocusNote: (sessionId: string, note: string) => void;
  setFocusDisplay: (sessionId: string, timerDisplay: TimerDisplay) => void;
  reduceFocus: (sessionId: string, objective: string) => void;
  addFocusNote: (sessionId: string, text: string, idempotencyKey: string) => void;
  endFocus: (sessionId: string, result: FocusResult) => void;
  dismissReturn: (today: string) => void;
  replaceState: (next: OrganizerState) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

function nid(): string {
  return crypto.randomUUID();
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OrganizerState | null>(null);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const stateRef = useRef<OrganizerState | null>(null);
  const queue = useRef(Promise.resolve());

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Sao_Paulo";
    loadOrganizer(timezone)
      .then((loaded) => {
        stateRef.current = loaded;
        setState(loaded);
        setReady(true);
      })
      .catch(() => {
        setMessage("Não foi possível abrir os dados deste navegador.");
        setReady(true);
      });
  }, []);

  function apply(change: (current: OrganizerState) => Result<unknown> | OrganizerState) {
    queue.current = queue.current.then(async () => {
      const current = stateRef.current;
      if (!current) {
        return;
      }
      const result = change(current);
      const next = "ok" in result ? (result.ok ? result.state : null) : result;
      if ("ok" in result && !result.ok) {
        setMessage(result.message);
        return;
      }
      if (!next || next === current) {
        return;
      }
      stateRef.current = next;
      setState(next);
      setMessage(null);
      try {
        await saveOrganizer(next);
      } catch {
        setMessage("Não consegui gravar neste navegador. O texto continua na tela.");
      }
    });
  }

  const api = useMemo<StoreValue>(
    () => ({
      state,
      ready,
      message,
      clearMessage: () => setMessage(null),
      report: (text) => setMessage(text),
      capture: (text, idempotencyKey) =>
        apply((current) =>
          captureText(current, { id: nid(), text, now: new Date().toISOString(), idempotencyKey }),
        ),
      convert: (captureId) =>
        apply((current) =>
          convertCapture(current, {
            captureId,
            taskId: nid(),
            now: new Date().toISOString(),
          }),
        ),
      archiveInbox: (captureId) =>
        apply((current) =>
          archiveCapture(current, { captureId, now: new Date().toISOString() }),
        ),
      saveTask: (input) =>
        apply((current) => saveTask(current, { ...input, now: new Date().toISOString() })),
      setTaskStatus: (taskId, status) =>
        apply((current) =>
          setTaskStatus(current, { taskId, status, now: new Date().toISOString() }),
        ),
      setArchived: (taskId, archived) =>
        apply((current) =>
          setArchived(current, { taskId, archived, now: new Date().toISOString() }),
        ),
      addStep: (taskId, title) => apply((current) => addStep(current, { id: nid(), taskId, title })),
      setStepStatus: (stepId, status) =>
        apply((current) => setStepStatus(current, { stepId, status })),
      moveStep: (stepId, direction) =>
        apply((current) => moveStep(current, { stepId, direction })),
      saveEvent: (input) =>
        apply((current) =>
          saveSingleEvent(current, {
            ...input,
            timezone: current.preferences.timezone,
            now: new Date().toISOString(),
          }),
        ),
      setEventStatus: (eventId, status) =>
        apply((current) =>
          setEventStatus(current, { eventId, status, now: new Date().toISOString() }),
        ),
      addSeries: (input) =>
        apply((current) => {
          const series = {
            id: nid(),
            title: input.title.trim(),
            frequency: input.frequency,
            interval: 1,
            intentDay: input.intentDay,
            weekday: input.weekday,
            time: input.time,
            durationMinutes: 60,
            allDay: input.allDay,
            fixed: input.fixed,
            startsOn: input.startsOn,
            timezone: current.preferences.timezone,
            rowVersion: 1,
          };
          const untilDate = new Date();
          untilDate.setDate(untilDate.getDate() + 60);
          const until = untilDate.toISOString().slice(0, 10);
          return materializeSeries(current, {
            series,
            until,
            ids: Array.from({ length: 80 }, () => nid()),
          });
        }),
      saveRoutine: (title, steps) =>
        apply((current) =>
          saveRoutine(current, {
            id: nid(),
            title,
            steps: steps.map((step) => ({ id: nid(), title: step })),
          }),
        ),
      startRoutine: (routineId) =>
        apply((current) =>
          startRoutine(current, {
            routineId,
            runId: nid(),
            stepIds: Array.from({ length: 40 }, () => nid()),
            now: new Date().toISOString(),
          }),
        ),
      setRunStatus: (runId, status) =>
        apply((current) =>
          setRunStatus(current, { runId, status, now: new Date().toISOString() }),
        ),
      setRunStep: (stepId, status) =>
        apply((current) => setRunStepStatus(current, { stepId, status })),
      setFocuses: (date, taskIds, availableMinutes) =>
        apply((current) => setFocuses(current, { date, taskIds, availableMinutes })),
      patchPreferences: (patch) => apply((current) => updatePreferences(current, patch)),
      clearAiMemory: () => apply((current) => clearAiMemory(current)),
      acceptProposal: (proposal, selectedLocalIds, today) =>
        apply((current) =>
          acceptProposal(current, {
            proposal,
            selectedLocalIds,
            now: new Date().toISOString(),
            today,
            ids: Array.from({ length: 24 }, () => nid()),
          }),
        ),
      startFocus: (input) =>
        apply((current) =>
          startFocus(current, { ...input, id: nid(), now: new Date().toISOString() }),
        ),
      observeFocus: (sessionId, now) =>
        apply((current) => observeFocus(current, { sessionId, now })),
      pauseFocus: (sessionId) =>
        apply((current) => pauseFocus(current, { sessionId, now: new Date().toISOString() })),
      resumeFocus: (sessionId) =>
        apply((current) => resumeFocus(current, { sessionId, now: new Date().toISOString() })),
      resolveFocusReview: (sessionId, addMinutes) =>
        apply((current) =>
          resolveReview(current, { sessionId, addMinutes, now: new Date().toISOString() }),
        ),
      setFocusNote: (sessionId, note) =>
        apply((current) => setReturnNote(current, { sessionId, note })),
      setFocusDisplay: (sessionId, timerDisplay) =>
        apply((current) => setTimerDisplay(current, { sessionId, timerDisplay })),
      reduceFocus: (sessionId, objective) =>
        apply((current) => reduceFocus(current, { sessionId, objective })),
      addFocusNote: (sessionId, text, idempotencyKey) =>
        apply((current) =>
          addFocusNote(current, {
            id: nid(),
            sessionId,
            text,
            now: new Date().toISOString(),
            idempotencyKey,
          }),
        ),
      endFocus: (sessionId, result) =>
        apply((current) => endFocus(current, { sessionId, result, now: new Date().toISOString() })),
      dismissReturn: (today) => apply((current) => dismissReturn(current, today)),
      replaceState: (next) => apply(() => next),
    }),
    [message, ready, state],
  );

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const value = useContext(StoreContext);
  if (!value) {
    throw new Error("O armazenamento da Passólia não está disponível.");
  }
  return value;
}
