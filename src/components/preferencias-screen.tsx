"use client";

import { useEffect, useState } from "react";

import { SuggestionPanel } from "@/components/suggestion-panel";
import { clearOpenAiKey, loadOpenAiKey, saveOpenAiKey } from "@/modules/ai/browser-key";
import { useStore } from "@/modules/organizer/store";
import { emptyState, type OrganizerState } from "@/modules/organizer/domain";

function isState(value: unknown): value is OrganizerState {
  if (!value || typeof value !== "object") {
    return false;
  }
  const record = value as OrganizerState;
  return Array.isArray(record.tasks) && Array.isArray(record.captures) && Boolean(record.preferences);
}

function OpenAiStatus() {
  const [text, setText] = useState("Consultando a configuração da OpenAI…");
  useEffect(() => {
    fetch("/api/v1/ai/proposals")
      .then((response) => response.json())
      .then((body: { data?: { enabled?: boolean; configured?: boolean; model?: string } }) => {
        const data = body.data;
        if (!data) {
          setText("Não foi possível ler a configuração da OpenAI.");
          return;
        }
        if (data.enabled && data.configured) {
          setText(`Chave salva. Modelo ${data.model}. Ela não aparece de novo na tela nem entra na exportação.`);
          return;
        }
        if (!data.configured) {
          setText(`Modelo ${data.model}. Cole a chave e guarde. Ela permanece neste navegador.`);
          return;
        }
        setText("A chave está no servidor, mas AI_ENABLED não está true.");
      })
      .catch(() => setText("Não foi possível ler a configuração da OpenAI."));
  }, []);
  return <p className="mt-2 text-sm">{text}</p>;
}

function OpenAiKeyField() {
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    loadOpenAiKey()
      .then((value) => setSaved(Boolean(value)))
      .catch(() => setNote("Não foi possível ler a chave deste navegador."));
  }, []);

  return (
    <div className="mt-3 grid gap-2">
      <label className="grid gap-2 text-sm" htmlFor="openai-key">
        Chave da OpenAI
        <input
          id="openai-key"
          type="password"
          autoComplete="off"
          spellCheck={false}
          value={draft}
          placeholder={saved ? "Já há uma chave neste navegador" : "Cole a chave aqui"}
          onChange={(event) => setDraft(event.target.value)}
          className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        />
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="h-11 rounded-[10px] bg-action px-4 text-action-text"
          onClick={() => {
            const key = draft;
            saveOpenAiKey(key)
              .then(() =>
                fetch("/api/v1/ai/key", {
                  method: "POST",
                  credentials: "same-origin",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ key }),
                }),
              )
              .then((response) => {
                if (!response.ok) {
                  throw new Error("recusada");
                }
                setDraft("");
                setSaved(true);
                setNote("Chave salva. Ela continua depois de atualizar a página.");
              })
              .catch(() => setNote("Cole a chave inteira, sem espaços."));
          }}
        >
          Guardar chave
        </button>
        {saved ? (
          <button
            type="button"
            className="h-11 rounded-[10px] border border-line px-4"
            onClick={() => {
              clearOpenAiKey()
                .then(() => fetch("/api/v1/ai/key", { method: "DELETE", credentials: "same-origin" }))
                .then(() => {
                  setSaved(false);
                  setDraft("");
                  setNote("Chave apagada deste navegador.");
                })
                .catch(() => setNote("Não foi possível apagar a chave."));
            }}
          >
            Apagar chave
          </button>
        ) : null}
      </div>
      {note ? <p className="text-sm">{note}</p> : null}
    </div>
  );
}

export function PreferenciasScreen() {
  const store = useStore();
  const [preferenceNote, setPreferenceNote] = useState("");
  const state = store.state;
  if (!store.ready || !state) {
    return <p>Abrindo o que está salvo neste navegador…</p>;
  }

  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Preferências</h1>
        <p className="text-sm text-muted">Os dados desta versão ficam neste navegador.</p>
      </div>
      <label className="grid gap-2" htmlFor="tema">
        Tema
        <select
          id="tema"
          value={state.preferences.theme}
          onChange={(event) =>
            store.patchPreferences({
              theme: event.target.value as "light" | "dark" | "system",
            })
          }
          className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        >
          <option value="system">Como o aparelho</option>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </label>
      <label className="grid gap-2" htmlFor="texto">
        Tamanho do texto
        <select
          id="texto"
          value={state.preferences.textScale}
          onChange={(event) =>
            store.patchPreferences({ textScale: event.target.value as "md" | "lg" })
          }
          className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        >
          <option value="md">16 px</option>
          <option value="lg">18 px</option>
        </select>
      </label>
      <label className="grid gap-2" htmlFor="fuso">
        Fuso
        <input
          id="fuso"
          value={state.preferences.timezone}
          onChange={(event) => store.patchPreferences({ timezone: event.target.value })}
          className="h-11 rounded-[10px] border border-[var(--control)] bg-surface px-3"
        />
      </label>
      <section className="rounded-[16px] bg-surface p-4">
        <h2 className="font-semibold">OpenAI</h2>
        <OpenAiStatus />
        <OpenAiKeyField />
        <label className="mt-3 flex min-h-11 items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={state.preferences.aiMemoryEnabled}
            onChange={(event) => store.patchPreferences({ aiMemoryEnabled: event.target.checked })}
          />
          Guardar frases de preferência que eu confirmar
        </label>
        {state.preferences.aiMemory.length > 0 ? (
          <div className="mt-3">
            <ul className="list-disc pl-5 text-sm">
              {state.preferences.aiMemory.map((phrase) => (
                <li key={phrase}>{phrase}</li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-2 h-11 rounded-[10px] border border-line px-4"
              onClick={() => store.clearAiMemory()}
            >
              Apagar memória
            </button>
          </div>
        ) : null}
        <label className="mt-3 grid gap-2 text-sm" htmlFor="nota-preferencia">
          O que você quer ajustar
          <textarea
            id="nota-preferencia"
            value={preferenceNote}
            onChange={(event) => setPreferenceNote(event.target.value)}
            rows={3}
            className="rounded-[10px] border border-[var(--control)] bg-surface px-3 py-2"
          />
        </label>
        <div className="mt-3">
          <SuggestionPanel
            options={[{ capability: "propose_preferences", label: "Sugerir um ajuste de preferência" }]}
            text={preferenceNote}
            timezone={state.preferences.timezone}
          />
        </div>
      </section>
      <section className="flex flex-wrap gap-3">
        <button
          type="button"
          className="h-11 rounded-[10px] bg-action px-4 text-action-text"
          onClick={() => {
            const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "passolia-dados.json";
            link.click();
            URL.revokeObjectURL(url);
          }}
        >
          Exportar dados
        </button>
        <label className="inline-flex h-11 cursor-pointer items-center rounded-[10px] border border-line px-4">
          Importar
          <input
            type="file"
            accept="application/json"
            className="sr-only"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }
              try {
                const parsed: unknown = JSON.parse(await file.text());
                if (!isState(parsed)) {
                  store.report("Esse arquivo não é uma exportação da Passólia.");
                  return;
                }
                const base = emptyState(state.preferences.timezone);
                store.replaceState({
                  ...base,
                  ...parsed,
                  captures: parsed.captures ?? [],
                  tasks: parsed.tasks ?? [],
                  steps: parsed.steps ?? [],
                  series: parsed.series ?? [],
                  events: parsed.events ?? [],
                  routines: parsed.routines ?? [],
                  routineSteps: parsed.routineSteps ?? [],
                  runs: parsed.runs ?? [],
                  runSteps: parsed.runSteps ?? [],
                  plans: parsed.plans ?? [],
                  preferences: { ...base.preferences, ...parsed.preferences },
                  idempotency: parsed.idempotency ?? {},
                });
              } catch {
                store.report("Não consegui ler o arquivo.");
              }
            }}
          />
        </label>
      </section>
    </main>
  );
}
