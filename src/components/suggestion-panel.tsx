"use client";

import { useState } from "react";

import { loadOpenAiKey } from "@/modules/ai/browser-key";
import type { AiCapability } from "@/modules/ai/contract";
import { civilDate, type ProposalItemRecord, type ProposalRecord } from "@/modules/organizer/domain";
import { useStore } from "@/modules/organizer/store";

type TaskContext = {
  id: string;
  title: string;
  dueOn: string | null;
  estimateMinutes: number | null;
  status: "open" | "in_progress" | "done" | "canceled";
};

type Option = { capability: AiCapability; label: string };

export function SuggestionPanel(props: {
  options: Option[];
  text: string;
  timezone: string;
  targetTaskId?: string | null;
  tasks?: TaskContext[];
}) {
  const store = useStore();
  const [capability, setCapability] = useState<AiCapability>(props.options[0].capability);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProposalRecord | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  function updateItem(localId: string, patch: Partial<ProposalItemRecord>) {
    setDraft((current) =>
      current
        ? {
            ...current,
            items: current.items.map((item) => (item.localId === localId ? { ...item, ...patch } : item)),
          }
        : current,
    );
  }

  async function ask() {
    const today = civilDate(props.timezone, new Date());
    if (!props.text.trim()) {
      setNote("Escreva o texto antes de pedir a sugestão.");
      return;
    }
    setBusy(true);
    setNote(null);
    try {
      const apiKey = await loadOpenAiKey();
      const headers: Record<string, string> = { "content-type": "application/json" };
      if (apiKey) {
        headers["x-passolia-openai-key"] = apiKey;
      }
      const response = await fetch("/api/v1/ai/proposals", {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify({
          capability,
          text: props.text,
          idempotencyKey: crypto.randomUUID(),
          targetTaskId: props.targetTaskId ?? null,
          referenceDate: today,
          timezone: props.timezone,
          tasks: props.tasks ?? [],
          memory:
            store.state?.preferences.aiMemoryEnabled === true ? store.state.preferences.aiMemory : [],
        }),
      });
      const body = (await response.json()) as {
        message?: string;
        errors?: { detail?: string };
        data?: ProposalRecord & { targetTaskId: string | null };
      };
      if (!response.ok || !body.data) {
        setDraft(null);
        setNote(body.errors?.detail ?? body.message ?? "Não foi possível pedir a sugestão.");
        return;
      }
      const proposal: ProposalRecord = {
        id: body.data.id,
        capability: body.data.capability,
        outcome: body.data.outcome,
        summary: body.data.summary,
        question: body.data.question,
        explanation: body.data.explanation,
        warnings: body.data.warnings,
        items: body.data.items,
        createdAt: body.data.createdAt,
        expiresAt: body.data.expiresAt,
        status: "pending",
        applied: {},
        targetTaskId: body.data.targetTaskId,
      };
      setDraft(proposal);
      setSelected(proposal.items.map((item) => item.localId));
    } catch {
      setNote("Não foi possível falar com o servidor.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-[16px] border border-line bg-surface p-4">
      <h3 className="font-semibold">Sugestão da OpenAI</h3>
      <p className="mt-1 text-sm text-muted">
        Isto é uma prévia. Nada é salvo antes de você confirmar. Dá para fazer o mesmo à mão.
      </p>
      {props.options.length > 1 ? (
        <label className="mt-3 grid gap-2 text-sm" htmlFor={`funcao-${props.targetTaskId ?? "geral"}`}>
          Função
          <select
            id={`funcao-${props.targetTaskId ?? "geral"}`}
            value={capability}
            onChange={(event) => setCapability(event.target.value as AiCapability)}
            className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
          >
            {props.options.map((option) => (
              <option key={option.capability} value={option.capability}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <p className="mt-3 text-sm">{props.options[0].label}</p>
      )}
      <button
        type="button"
        className="mt-3 h-11 rounded-[10px] bg-action px-4 text-action-text disabled:opacity-60"
        disabled={busy || !props.text.trim()}
        onClick={() => void ask()}
      >
        {busy ? "Preparando uma sugestão…" : "Pedir sugestão"}
      </button>
      {note ? <p className="mt-3 text-sm">{note}</p> : null}
      {draft ? (
        <div className="mt-4 flex flex-col gap-3">
          <p>{draft.summary}</p>
          {draft.explanation ? <p className="text-sm text-muted">{draft.explanation}</p> : null}
          {draft.question ? <p className="text-sm">Pergunta: {draft.question}</p> : null}
          {draft.warnings.length > 0 ? (
            <ul className="list-disc pl-5 text-sm">
              {draft.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          ) : null}
          {draft.items.map((item) => (
            <label key={item.localId} className="grid gap-2 text-sm">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(item.localId)}
                  onChange={() =>
                    setSelected((current) =>
                      current.includes(item.localId)
                        ? current.filter((id) => id !== item.localId)
                        : [...current, item.localId],
                    )
                  }
                />
                Confirmar este item
              </span>
              <input
                value={item.title}
                onChange={(event) => updateItem(item.localId, { title: event.target.value })}
                className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
              />
            </label>
          ))}
          <div className="flex flex-wrap gap-2">
            {draft.items.length > 0 ? (
              <button
                type="button"
                className="h-11 rounded-[10px] bg-action px-4 text-action-text"
                onClick={() => {
                  store.acceptProposal(draft, selected, civilDate(props.timezone, new Date()));
                  setNote("A confirmação foi pedida. Se algo impedir, a mensagem aparece no topo.");
                  setDraft(null);
                }}
              >
                Confirmar selecionados
              </button>
            ) : null}
            <button
              type="button"
              className="h-11 rounded-[10px] border border-line px-4"
              onClick={() => setDraft(null)}
            >
              Recusar
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
