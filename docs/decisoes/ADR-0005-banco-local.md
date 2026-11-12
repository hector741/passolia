# ADR-0005 — Banco local bloqueado nesta máquina

- Estado: aceita enquanto Docker e a CLI faltarem
- Data: 2026-11-12

## Contexto

`docker` e `supabase` não estão no PATH. Não há projeto Supabase vinculado nem credencial. A página do npm consultada nesta sessão mostrava a CLI `supabase` 3.0.0 como `latest`, com release 3.1.0 no GitHub. Nenhuma das duas foi instalada, porque a CLI local depende de Docker para o stack.

## Decisão

`pnpm db:migrate` e `pnpm db:seed` só seguem quando `APP_ENV` não é `production` e o host é `localhost`, `127.0.0.1` ou `::1`. Sem Docker ou CLI, terminam com código 2 e não aplicam SQL. O padrão da URL é `http://127.0.0.1:54321`.

`pnpm setup:local` pode concluir a preparação do `.env.local` mesmo com esse bloqueio. Ele registra as duas ausências e não trata o banco como pronto.

## Consequências

RLS, seed sintético e teste de dois usuários esperam a F03, depois que o stack local existir. Até lá, o estado do banco é bloqueado, não verificado.
