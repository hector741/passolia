<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Passólia

Leia `docs/CHECKPOINT.md` e `docs/plano-etapas.md` antes de continuar. O contrato está em `docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md`. Origem das decisões: `docs/projeto/CONSOLIDACAO_E_DECISOES.md`. Aceite: `docs/projeto/MATRIZ_DE_COBERTURA_E_ACEITE.md`.

Preserve `brand/passolia/` e não redesenhe o logo. IA propõe; o servidor valida; a pessoa confirma alteração relevante. Captura e agenda precisam funcionar sem IA. Não marque mock, teste não executado ou integração sem credencial como verificado.

Comandos reais: `pnpm validate`, `pnpm build`, `pnpm setup:local`. Banco: `pnpm db:migrate` e `pnpm db:seed`, que recusam alvo remoto e hoje param se Docker ou a CLI do Supabase faltarem.
