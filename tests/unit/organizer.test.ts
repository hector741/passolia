import { describe, expect, it } from "vitest";

import {
  addStep,
  captureText,
  convertCapture,
  dayFit,
  elapsedMs,
  emptyState,
  materializeSeries,
  monthlyDay,
  occurrenceDates,
  saveTask,
  setRunStatus,
  setStepStatus,
  setTaskStatus,
  startRoutine,
  saveRoutine,
  type Series,
} from "@/modules/organizer/domain";

const now = "2026-11-12T12:00:00.000Z";

describe("captura e tarefas", () => {
  it("guarda sem categoria e não duplica a mesma chave", () => {
    const first = captureText(emptyState("America/Sao_Paulo"), {
      id: "c1",
      text: "  comprar pão  ",
      now,
      idempotencyKey: "k1",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) {
      return;
    }
    const second = captureText(first.state, {
      id: "c2",
      text: "outro",
      now,
      idempotencyKey: "k1",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) {
      return;
    }
    expect(second.value.id).toBe("c1");
    expect(second.state.captures).toHaveLength(1);
  });

  it("converte a captura uma vez", () => {
    const captured = captureText(emptyState("America/Sao_Paulo"), {
      id: "c1",
      text: "preciso arrumar meu quarto",
      now,
      idempotencyKey: "k1",
    });
    if (!captured.ok) {
      throw new Error(captured.message);
    }
    const converted = convertCapture(captured.state, {
      captureId: "c1",
      taskId: "t1",
      now,
    });
    if (!converted.ok) {
      throw new Error(converted.message);
    }
    const again = convertCapture(converted.state, {
      captureId: "c1",
      taskId: "t2",
      now,
    });
    if (!again.ok) {
      throw new Error(again.message);
    }
    expect(again.value.id).toBe("t1");
    expect(again.state.tasks).toHaveLength(1);
  });

  it("pular um passo não conclui a tarefa", () => {
    const saved = saveTask(emptyState("America/Sao_Paulo"), {
      id: "t1",
      title: "Arrumar o quarto",
      notes: "",
      context: "casa",
      dueOn: null,
      estimateMinutes: 30,
      now,
      expectedVersion: null,
    });
    if (!saved.ok) {
      throw new Error(saved.message);
    }
    const stepped = addStep(saved.state, {
      id: "s1",
      taskId: "t1",
      title: "Arrumar a cama",
    });
    if (!stepped.ok) {
      throw new Error(stepped.message);
    }
    const skipped = setStepStatus(stepped.state, { stepId: "s1", status: "skipped" });
    if (!skipped.ok) {
      throw new Error(skipped.message);
    }
    expect(skipped.value.status).toBe("skipped");
    expect(skipped.state.tasks[0]?.status).toBe("open");
    const done = setTaskStatus(skipped.state, {
      taskId: "t1",
      status: "done",
      now,
    });
    if (!done.ok) {
      throw new Error(done.message);
    }
    expect(done.value.status).toBe("done");
  });

  it("recusa título vazio e conflito de versão", () => {
    const saved = saveTask(emptyState("America/Sao_Paulo"), {
      id: "t1",
      title: "Ligar",
      notes: "",
      context: null,
      dueOn: null,
      estimateMinutes: null,
      now,
      expectedVersion: null,
    });
    if (!saved.ok) {
      throw new Error(saved.message);
    }
    const empty = saveTask(saved.state, {
      id: "t2",
      title: "   ",
      notes: "",
      context: null,
      dueOn: null,
      estimateMinutes: null,
      now,
      expectedVersion: null,
    });
    expect(empty.ok).toBe(false);
    const conflict = saveTask(saved.state, {
      id: "t1",
      title: "Ligar de novo",
      notes: "",
      context: null,
      dueOn: null,
      estimateMinutes: null,
      now,
      expectedVersion: 0,
    });
    expect(conflict.ok).toBe(false);
  });
});

describe("agenda", () => {
  it("ajusta o dia 31 ao último dia do mês e recupera março", () => {
    expect(monthlyDay(2026, 2, 31)).toBe(28);
    expect(monthlyDay(2028, 2, 31)).toBe(29);
    expect(monthlyDay(2026, 3, 31)).toBe(31);
    const dates = occurrenceDates({
      frequency: "monthly",
      interval: 1,
      startsOn: "2026-01-31",
      intentDay: 31,
      weekday: null,
      until: "2026-03-31",
    });
    expect(dates).toEqual(["2026-01-31", "2026-02-28", "2026-03-31"]);
  });

  it("gerar a série duas vezes não duplica a ocorrência", () => {
    const series: Series = {
      id: "ser1",
      title: "Reunião",
      frequency: "weekly",
      interval: 1,
      intentDay: null,
      weekday: 1,
      time: "09:00",
      durationMinutes: 30,
      allDay: false,
      fixed: true,
      startsOn: "2026-11-09",
      timezone: "America/Sao_Paulo",
      rowVersion: 1,
    };
    const first = materializeSeries(emptyState("America/Sao_Paulo"), {
      series,
      until: "2026-11-16",
      ids: ["e1", "e2", "e3"],
    });
    if (!first.ok) {
      throw new Error(first.message);
    }
    const second = materializeSeries(first.state, {
      series,
      until: "2026-11-16",
      ids: ["e9", "e8"],
    });
    if (!second.ok) {
      throw new Error(second.message);
    }
    expect(second.value).toHaveLength(0);
    expect(second.state.events).toHaveLength(first.state.events.length);
  });
});

describe("hoje e rotina", () => {
  it("mostra o que não cabe sem encolher a estimativa", () => {
    const result = dayFit({
      availableMinutes: 360,
      fixedMinutes: 0,
      items: [
        { id: "a", title: "A", estimateMinutes: 180 },
        { id: "b", title: "B", estimateMinutes: 240 },
      ],
    });
    expect(result.fitted).toEqual(["a"]);
    expect(result.overflow.map((item) => item.id)).toEqual(["b"]);
  });

  it("pausa o cronômetro pela diferença de horário e mantém o snapshot", () => {
    const created = saveRoutine(emptyState("America/Sao_Paulo"), {
      id: "r1",
      title: "Manhã",
      steps: [
        { id: "a", title: "Água" },
        { id: "b", title: "Cama" },
      ],
    });
    if (!created.ok) {
      throw new Error(created.message);
    }
    const started = startRoutine(created.state, {
      routineId: "r1",
      runId: "run1",
      stepIds: ["rs1", "rs2"],
      now: "2026-11-12T10:00:00.000Z",
    });
    if (!started.ok) {
      throw new Error(started.message);
    }
    const changed = saveRoutine(started.state, {
      id: "r1",
      title: "Manhã nova",
      steps: [{ id: "c", title: "Alongar" }],
    });
    if (!changed.ok) {
      throw new Error(changed.message);
    }
    expect(changed.state.runSteps.map((step) => step.title)).toEqual(["Água", "Cama"]);
    const paused = setRunStatus(changed.state, {
      runId: "run1",
      status: "paused",
      now: "2026-11-12T10:05:00.000Z",
    });
    if (!paused.ok) {
      throw new Error(paused.message);
    }
    expect(elapsedMs(paused.value, "2026-11-12T10:20:00.000Z")).toBe(5 * 60_000);
  });
});
