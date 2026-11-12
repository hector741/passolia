# Passólia

Organização para a vida cotidiana. Assinatura: seu próximo passo, no seu ritmo.

Esta pasta começou como pacote de documentação. A aplicação web está na fundação (F01): sobe, valida o ambiente e ainda não guarda captura, agenda ou conta.

## Executar

Requisitos desta máquina: Node.js 20.9 ou mais recente (aqui, 24.18.0) e pnpm 11.13.1. Windows PowerShell e shell POSIX usam os mesmos scripts.

```powershell
pnpm install --frozen-lockfile
pnpm setup:local
pnpm dev
```

Abra `http://localhost:3000`. A checagem pública é `GET /api/v1/health`.

`setup:local` cria `.env.local` só quando o arquivo não existe. Não imprime valores e não sobrescreve configuração já preenchida.

## Verificação local

```powershell
pnpm validate
pnpm build
```

`validate` reúne lint, typecheck e testes unitários. Não chama provedor pago.

Estes comandos existem e, nesta etapa, terminam com código 2 e a mensagem `NÃO EXECUTADO`:

```powershell
pnpm db:migrate
pnpm db:seed
pnpm test:integration
pnpm test:rls
pnpm test:e2e
pnpm test:a11y
pnpm test:ai
```

O banco local depende de Docker e da Supabase CLI. Os dois estão ausentes nesta máquina. Os comandos de banco recusam produção e URL remota; o teste unitário cobre essa recusa. Sem Docker, nenhuma migração é aplicada.

Para o build de produção local, encerre `pnpm dev` e rode `pnpm start`.

## Vercel

A configuração está em `vercel.json`. A CLI do projeto é a `vercel` 65.14.0.

```powershell
pnpm exec vercel login
pnpm exec vercel deploy --yes --project passolia --create-if-missing
```

A publicação atual é https://passolia.vercel.app, na conta `hectormanolo-5807`. É a base da F01, sem banco. O domínio `vercel.app` está com a proteção SSO da Vercel: sem a sessão da conta, a resposta pública é 404. Não defina `APP_ENV=production` antes de existir Supabase e o segredo do worker.

O contrato do produto está em `docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md`. O estado atual está em `docs/CHECKPOINT.md`.
