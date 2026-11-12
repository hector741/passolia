import {
  addStep,
  saveRoutine,
  saveTask,
  setFocuses,
  updatePreferences,
  type OrganizerState,
  type ProposalRecord,
  type Result,
} from "@/modules/organizer/domain";

function fail(message: string): Result<string[]> {
  return { ok: false, message };
}

function upsert(state: OrganizerState, proposal: ProposalRecord): OrganizerState {
  const current = state.proposals.find((item) => item.id === proposal.id);
  const next = current
    ? { ...proposal, applied: current.applied, status: current.status }
    : proposal;
  const proposals = current
    ? state.proposals.map((item) => (item.id === next.id ? next : item))
    : [next, ...state.proposals].slice(0, 20);
  return { ...state, proposals };
}

export function acceptProposal(
  state: OrganizerState,
  input: {
    proposal: ProposalRecord;
    selectedLocalIds: string[];
    now: string;
    today: string;
    ids: string[];
  },
): Result<string[]> {
  if (input.now > input.proposal.expiresAt) {
    return fail("Esta sugestão expirou. Peça uma nova antes de confirmar.");
  }
  let next = upsert(state, {
    ...input.proposal,
    status: "pending",
    applied: state.proposals.find((item) => item.id === input.proposal.id)?.applied ?? {},
  });
  const stored = next.proposals.find((item) => item.id === input.proposal.id);
  if (!stored || stored.status === "rejected") {
    return fail("Esta sugestão foi recusada. Peça outra.");
  }
  const selected = new Set(input.selectedLocalIds);
  const chosen = stored.items.filter((item) => selected.has(item.localId));
  if (chosen.length === 0 && stored.items.length > 0) {
    return fail("Selecione ao menos um item para confirmar.");
  }
  for (const item of chosen) {
    const missing = item.dependsOn.filter((dependency) => !selected.has(dependency) && !stored.applied[dependency]);
    if (missing.length > 0) {
      return fail("Um item depende de outro que não foi selecionado.");
    }
  }
  const applied = { ...stored.applied };
  const created: string[] = [];
  let cursor = 0;
  const takeId = () => {
    const id = input.ids[cursor];
    cursor += 1;
    if (!id) {
      return null;
    }
    return id;
  };

  const routineSteps = chosen.filter((item) => item.kind === "routine_step");
  if (routineSteps.length > 0) {
    const pending = routineSteps.filter((item) => !applied[item.localId]);
    if (pending.length > 0) {
      const routineId = takeId();
      const stepIds = pending.map(() => takeId());
      if (!routineId || stepIds.some((id) => !id)) {
        return fail("Não consegui reservar identificadores para a rotina.");
      }
      const saved = saveRoutine(next, {
        id: routineId,
        title: stored.summary || pending[0].title,
        steps: pending.map((item, index) => ({ id: stepIds[index] as string, title: item.title })),
      });
      if (!saved.ok) {
        return saved;
      }
      next = saved.state;
      pending.forEach((item, index) => {
        applied[item.localId] = stepIds[index] as string;
        created.push(stepIds[index] as string);
      });
    } else {
      created.push(...routineSteps.map((item) => applied[item.localId]));
    }
  }

  const focusIds = chosen.filter((item) => item.kind === "focus").map((item) => item.localId);
  if (focusIds.length > 0) {
    const currentPlan = next.plans.find((plan) => plan.date === input.today);
    const saved = setFocuses(next, {
      date: input.today,
      taskIds: focusIds,
      availableMinutes: currentPlan?.availableMinutes ?? next.preferences.availableMinutes,
    });
    if (!saved.ok) {
      return saved;
    }
    next = saved.state;
    for (const id of focusIds) {
      if (!applied[id]) {
        applied[id] = id;
        created.push(id);
      }
    }
  }

  for (const item of chosen) {
    if (applied[item.localId] && item.kind !== "focus" && item.kind !== "routine_step") {
      created.push(applied[item.localId]);
      continue;
    }
    if (item.kind === "focus" || item.kind === "routine_step") {
      continue;
    }
    if (item.kind === "task" || (item.kind === "step" && !stored.targetTaskId)) {
      const id = takeId();
      if (!id) {
        return fail("Não consegui reservar um identificador.");
      }
      const saved = saveTask(next, {
        id,
        title: item.title,
        notes: item.detail,
        context: null,
        dueOn: item.dueOn,
        estimateMinutes: item.estimateMinutes,
        now: input.now,
        expectedVersion: null,
      });
      if (!saved.ok) {
        return saved;
      }
      next = saved.state;
      if (item.kind === "step") {
        const step = addStep(next, { id: takeId() ?? `${id}-passo`, taskId: id, title: item.title });
        if (!step.ok) {
          return step;
        }
        next = step.state;
      }
      applied[item.localId] = id;
      created.push(id);
      continue;
    }
    if (item.kind === "step" && stored.targetTaskId) {
      const id = takeId();
      if (!id) {
        return fail("Não consegui reservar um identificador.");
      }
      const saved = addStep(next, { id, taskId: stored.targetTaskId, title: item.title });
      if (!saved.ok) {
        return saved;
      }
      next = saved.state;
      applied[item.localId] = id;
      created.push(id);
      continue;
    }
    if (item.kind === "note" && stored.targetTaskId) {
      const task = next.tasks.find((entry) => entry.id === stored.targetTaskId);
      if (!task) {
        return fail("A tarefa desta sugestão não está mais aqui.");
      }
      const saved = saveTask(next, {
        id: task.id,
        title: task.title,
        notes: item.detail || item.title,
        context: task.context,
        dueOn: task.dueOn,
        estimateMinutes: task.estimateMinutes,
        now: input.now,
        expectedVersion: task.rowVersion,
      });
      if (!saved.ok) {
        return saved;
      }
      next = saved.state;
      applied[item.localId] = task.id;
      created.push(task.id);
      continue;
    }
    if (item.kind === "note") {
      applied[item.localId] = "nota";
      continue;
    }
    if (item.kind === "preference") {
      if (item.title === "memory") {
        if (!next.preferences.aiMemoryEnabled) {
          return fail("A memória está desligada. Ligue em Preferências para guardar esta frase.");
        }
        const phrase = item.detail.trim().slice(0, 200);
        if (!next.preferences.aiMemory.includes(phrase)) {
          next = {
            ...next,
            preferences: {
              ...next.preferences,
              aiMemory: [...next.preferences.aiMemory, phrase].slice(-20),
            },
          };
        }
        applied[item.localId] = "memory";
        continue;
      }
      if (item.title === "focus_limit") {
        const value = Number(item.detail);
        if (!Number.isInteger(value) || value < 1 || value > 7) {
          return fail("O limite de focos precisa ficar entre 1 e 7.");
        }
        next = updatePreferences(next, { focusLimit: value });
        applied[item.localId] = "focus_limit";
        continue;
      }
      if (item.title === "available_minutes") {
        const value = Number(item.detail);
        if (!Number.isInteger(value) || value < 0 || value > 24 * 60) {
          return fail("As horas disponíveis ficaram fora do intervalo.");
        }
        const plan = next.plans.find((entry) => entry.date === input.today);
        const saved = setFocuses(next, {
          date: input.today,
          taskIds: plan?.focusTaskIds ?? [],
          availableMinutes: value,
        });
        if (!saved.ok) {
          return saved;
        }
        next = saved.state;
        applied[item.localId] = "available_minutes";
      }
    }
  }

  const actionable = stored.items.filter((item) => item.kind !== "note" || stored.targetTaskId);
  const allDone = stored.items.every((item) => applied[item.localId]);
  const status = stored.items.length === 0 || allDone ? "accepted" : "partial";
  if (actionable.length === 0 && stored.outcome === "proposal" && chosen.length === 0) {
    return fail("Selecione ao menos um item para confirmar.");
  }
  return {
    ok: true,
    value: created,
    state: {
      ...next,
      proposals: next.proposals.map((item) =>
        item.id === stored.id ? { ...item, applied, status } : item,
      ),
    },
  };
}
