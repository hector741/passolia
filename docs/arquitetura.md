# Arquitetura

Decisão registrada em `docs/decisoes/ADR-0001-stack.md`. A pasta não tinha aplicação, então vale a stack padrão do prompt: PWA em Next.js, monólito modular, Postgres via Supabase e IA atrás de adaptador. Flutter fica para a F20.

## Estado em 12/11/2026

| Caminho | Função atual |
| --- | --- |
| `src/app` | Página inicial, layout e rotas `/api/v1/health`, `/api/v1/ready`, `/api/v1/modules/finance` |
| `src/server` | Ambiente, alvo de banco, flags, erros, limites, health e portões. Segredo só em módulo com `server-only` |
| `src/fonts` | Cópia da Manrope variável para a interface. O original permanece em `brand/passolia/fontes/` |
| `scripts` | Preparação local e comandos de banco que ainda não aplicam migração |
| `tests/unit` | Contratos da fundação, sem banco real |
| `supabase/migrations` | Ainda não existe. A primeira migração é da F03 |

Módulos de domínio (`src/modules`) entram junto com a primeira regra persistida, na F04 em diante. Não há tabelas vazias representando finanças, roupa ou colaboração.

## Regras já fixadas para o código seguinte

- A interface mostra estado. O caso de uso autoriza. O domínio calcula. O Postgres confirma. A IA devolve proposta.
- Mutação composta usa comando no servidor, versão e idempotência. A F04 introduz isso na primeira escrita de captura.
- Flag no cliente não liga endpoint. Com `FEATURE_FINANCE` diferente de `true`, `GET /api/v1/modules/finance?enabled=true` responde 403 `feature_disabled`. Com a flag ligada, a resposta é 501 `unsupported`, porque o módulo ainda não existe.
- Health público devolve só `{ data: { status: "ok" }, meta: {} }`. Prontidão exige `Authorization: Bearer` igual a `WORKER_AUTH_SECRET` e não devolve o segredo.
- Listagens futuras usam os limites de `src/server/limits.ts`.

## Fora desta fundação

Autenticação, RLS, IndexedDB, service worker, OpenAI, Web Push, OpenAPI e jobs persistentes ainda não têm implementação. O arquivo de API será `docs/api/openapi.yaml` quando o primeiro caso de uso existir.
