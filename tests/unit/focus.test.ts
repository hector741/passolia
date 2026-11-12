import { describe, expect, it } from "vitest";

import {
  activityMs,
  addFocusNote,
  endFocus,
  focusGapMs,
  observeFocus,
  pauseFocus,
  reduceFocus,
  resolveReview,
  resumeFocus,
  setTimerDisplay,
  startFocus,
} from "@/modules/focus/domain";
import { emptyState, saveTask } from "@/modules/organizer/domain";

function taskState() {
  const saved = saveTask(emptyState("America/Sao_Paulo"), {
    id: "tarefa-1",
    title: "Limpar o banheiro",
    notes: "",
    context: "casa",
    dueOn: "2026-11-20",
    estimateMinutes: 40,
    now: "2026-11-12T10:00:00.000Z",
    expectedVersion: null,
  });
  if (!saved.ok) {
    throw new Error(saved.message);
  }
  return saved.state;
}

describe("ciclo manual de foco", () => {
  it("começa sem concluir a tarefa e não duplica a sessão", () => {
    const started = startFocus(taskState(), {
      id: "sessao-1",
      taskId: "tarefa-1",
      stepId: null,
      objective: "",
      timingMode: "untimed",
      plannedMinutes: null,
      now: "2026-11-12T10:01:00.000Z",
      idempotencyKey: "chave-1",
    });
    expect(started.ok).toBe(true);
    if (!started.ok) {
      return;
    }
    expect(started.value.objective).toBe("Limpar o banheiro");
    expect(started.state.tasks[0]?.status).toBe("in_progress");
    const again = startFocus(started.state, {
      id: "sessao-2",
      taskId: "tarefa-1",
      stepId: null,
      objective: "outro",
      timingMode: "timed",
      plannedMinutes: 5,
      now: "2026-11-12T10:02:00.000Z",
      idempotencyKey: "chave-1",
    });
    expect(again.ok).toBe(true);
    if (again.ok) {
      expect(again.state.focusSessions).toHaveLength(1);
      expect(again.value.id).toBe("sessao-1");
    }
  });

  it("pausa sem nota e sem somar o intervalo parado", () => {
    const started = startFocus(taskState(), {
      id: "sessao-1",
      taskId: "tarefa-1",
      stepId: null,
      objective: "Limpar a pia",
      timingMode: "timed",
      plannedMinutes: 5,
      now: "2026-11-12T10:00:00.000Z",
      idempotencyKey: "chave-2",
    });
    if (!started.ok) {
      throw new Error(started.message);
    }
    const paused = pauseFocus(started.state, {
      sessionId: "sessao-1",
      now: "2026-11-12T10:02:00.000Z",
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) {
      return;
    }
    expect(paused.value.returnNote).toBeNull();
    expect(paused.value.accumulatedMs).toBe(120_000);
    const resumed = resumeFocus(paused.state, {
      sessionId: "sessao-1",
      now: "2026-11-12T10:20:00.000Z",
    });
    expect(resumed.ok).toBe(true);
    if (resumed.ok) {
      expect(activityMs(resumed.value, "2026-11-12T10:21:00.000Z")).toBe(180_000);
    }
  });

  it("não conclui quando o tempo escolhido acaba e encerrar parcial mantém a tarefa", () => {
    const started = startFocus(taskState(), {
      id: "sessao-1",
      taskId: "tarefa-1",
      stepId: null,
      objective: "Limpar a pia",
      timingMode: "timed",
      plannedMinutes: 5,
      now: "2026-11-12T10:00:00.000Z",
      idempotencyKey: "chave-3",
    });
    if (!started.ok) {
      throw new Error(started.message);
    }
    const seen = observeFocus(started.state, {
      sessionId: "sessao-1",
      now: "2026-11-12T10:05:00.000Z",
    });
    expect(seen.ok).toBe(true);
    if (!seen.ok) {
      return;
    }
    expect(seen.value.status).toBe("running");
    expect(seen.value.budgetElapsed).toBe(true);
    expect(seen.state.tasks[0]?.status).toBe("in_progress");
    const hidden = setTimerDisplay(seen.state, { sessionId: "sessao-1", timerDisplay: "hidden" });
    expect(hidden.ok).toBe(true);
    if (hidden.ok) {
      expect(hidden.value.accumulatedMs).toBe(0);
      expect(hidden.value.segmentStartedAt).toBe("2026-11-12T10:00:00.000Z");
    }
    const ended = endFocus(seen.state, {
      sessionId: "sessao-1",
      result: "partial",
      now: "2026-11-12T10:06:00.000Z",
    });
    expect(ended.ok).toBe(true);
    if (ended.ok) {
      expect(ended.value.status).toBe("ended");
      expect(ended.state.tasks[0]?.status).toBe("in_progress");
      expect(ended.state.tasks[0]?.dueOn).toBe("2026-11-20");
    }
  });

  it("lacuna longa pede revisão e não inventa horas de trabalho", () => {
    const started = startFocus(taskState(), {
      id: "sessao-1",
      taskId: "tarefa-1",
      stepId: null,
      objective: "Limpar a pia",
      timingMode: "untimed",
      plannedMinutes: null,
      now: "2026-11-12T10:00:00.000Z",
      idempotencyKey: "chave-4",
    });
    if (!started.ok) {
      throw new Error(started.message);
    }
    const later = new Date(Date.parse("2026-11-12T10:00:00.000Z") + focusGapMs + 1000).toISOString();
    const review = observeFocus(started.state, { sessionId: "sessao-1", now: later });
    expect(review.ok).toBe(true);
    if (!review.ok) {
      return;
    }
    expect(review.value.status).toBe("needs_review");
    expect(review.value.accumulatedMs).toBe(0);
    const backwards = observeFocus(started.state, {
      sessionId: "sessao-1",
      now: "2026-11-12T09:00:00.000Z",
    });
    expect(backwards.ok).toBe(true);
    if (backwards.ok) {
      expect(backwards.value.status).toBe("needs_review");
      expect(backwards.value.accumulatedMs).toBe(0);
    }
    const kept = resolveReview(review.state, {
      sessionId: "sessao-1",
      addMinutes: null,
      now: later,
    });
    expect(kept.ok).toBe(true);
    if (kept.ok) {
      expect(kept.value.accumulatedMs).toBe(0);
      expect(kept.value.status).toBe("paused");
    }
  });

  it("reduz o passo sem mudar prazo e a anotação não vira tarefa", () => {
    const started = startFocus(taskState(), {
      id: "sessao-1",
      taskId: "tarefa-1",
      stepId: null,
      objective: "Limpar o banheiro inteiro",
      timingMode: "untimed",
      plannedMinutes: null,
      now: "2026-11-12T10:00:00.000Z",
      idempotencyKey: "chave-5",
    });
    if (!started.ok) {
      throw new Error(started.message);
    }
    const reduced = reduceFocus(started.state, {
      sessionId: "sessao-1",
      objective: "Limpar só a pia",
    });
    expect(reduced.ok).toBe(true);
    if (!reduced.ok) {
      return;
    }
    expect(reduced.value.objective).toBe("Limpar só a pia");
    expect(reduced.value.originalObjective).toBe("Limpar o banheiro inteiro");
    expect(reduced.state.tasks[0]?.title).toBe("Limpar o banheiro");
    expect(reduced.state.tasks[0]?.dueOn).toBe("2026-11-20");
    const noted = addFocusNote(reduced.state, {
      id: "nota-1",
      sessionId: "sessao-1",
      text: "buscar o pano",
      now: "2026-11-12T10:03:00.000Z",
      idempotencyKey: "nota-chave",
    });
    expect(noted.ok).toBe(true);
    if (noted.ok) {
      expect(noted.state.focusNotes).toHaveLength(1);
      expect(noted.state.tasks).toHaveLength(1);
      const repeat = addFocusNote(noted.state, {
        id: "nota-2",
        sessionId: "sessao-1",
        text: "buscar o pano",
        now: "2026-11-12T10:03:01.000Z",
        idempotencyKey: "nota-chave",
      });
      expect(repeat.ok).toBe(true);
      if (repeat.ok) {
        expect(repeat.state.focusNotes).toHaveLength(1);
      }
    }
  });
});
