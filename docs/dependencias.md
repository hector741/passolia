# Dependências e ambiente

Conferido em 2026-11-12 na pasta do projeto. Versões de pacote são as resolvidas no `pnpm-lock.yaml` desta sessão.

| Ferramenta | Situação |
| --- | --- |
| Node.js | v24.18.0 instalado. Next.js 16.4.6 aceita `>=20.9.0`. LTS ativa publicada em 11/11/2026: 26.13.1. Correção da linha 24: 24.22.3. O Node do sistema não foi trocado. |
| pnpm | 11.13.1, gravado em `packageManager`. A 12.18.0 aparece como atualização e não foi adotada. |
| Docker | Ausente no PATH. Bloqueia Supabase local. |
| Supabase CLI | Ausente no PATH. Não entrou no lockfile. |
| Git | A pasta não é um repositório. Nenhum commit foi criado. |
| Next.js | 16.4.6 |
| React / React DOM | 19.3.0 |
| TypeScript | 5.9.3, `strict` |
| Tailwind CSS | 4.3.3, com `@tailwindcss/turbopack` 4.3.3 |
| ESLint | 9.39.5, via `eslint-config-next` 16.4.6. O pacote avisa depreciação. |
| Zod | 4.6.7 |
| Vitest | 5.1.0 |
| server-only | 0.0.1 |
| OpenAI | SDK `openai` 7.55.0. Provedor fixo no servidor, modelo padrão `gpt-6-astra` em `OPENAI_TEXT_MODEL`. `AI_ENABLED=true` no exemplo local. A chave continua vazia; sem ela a rota responde integração não configurada. |
| Manrope | Arquivos OFL em `brand/passolia/fontes/`. A variável usada pela tela está copiada em `src/fonts/Manrope-Variable.ttf`. |

## Comandos

| Comando | Resultado nesta sessão |
| --- | --- |
| `pnpm install` | Concluiu e gerou o lockfile atualizado |
| `.\node_modules\.bin\tsc --noEmit` | Código 0 |
| `.\node_modules\.bin\eslint .` | Código 0, inclusive depois dos imports `.ts` dos scripts |
| `.\node_modules\.bin\vitest run` | 13 testes em `tests/unit/foundation.test.ts`, código 0 |
| `pnpm build` | Next.js 16.4.6 concluiu. Rotas: `/` estática; `/api/v1/health`, `/api/v1/ready` e `/api/v1/modules/finance` dinâmicas |
| Busca em `.next/static` | Nenhuma ocorrência de `SUPABASE_SECRET`, `OPENAI_API_KEY` ou `WORKER_AUTH` |
| `node scripts/setup-local.ts` | Código 0. Criou `.env.local` e, na segunda execução, preservou o arquivo. Docker e CLI registrados como bloqueio |
| `node scripts/db-migrate.ts` e `db-seed.ts` | Código 2. Nenhuma migração aplicada |

`pnpm test:integration`, `test:rls`, `test:e2e`, `test:a11y` e `test:ai` chamam `scripts/not-implemented.ts` e devem sair com código 2. Não foram usados como evidência de aprovação.

CI prevista: `.github/workflows/validate.yml` (install congelado, `pnpm validate`, `pnpm build`). Não há remoto Git para executá-la. O workflow não aponta banco de produção.
