# ADR-0006 — Hospedagem na Vercel

- Estado: publicada na conta hectormanolo-5807; acesso público do domínio vercel.app ainda exige a sessão da Vercel
- Data: 2026-11-12
- Origem: pedido do proprietário para configurar e usar a Vercel. A hospedagem em serviço Node compatível já era a recomendação de engenharia do prompt.

## Decisão

A aplicação Next.js usa a Vercel. O arquivo `vercel.json` declara o framework `nextjs`. O pnpm 11.13.1 está em `packageManager`, e a CLI do projeto é a `vercel` 65.14.0.

Esta publicação é a base web da F01. Não há banco, chave de IA nem `APP_ENV=production`. Sem essas variáveis, a página e o health sobem; prontidão e módulos continuam indisponíveis.

## O que ocorreu

O login da CLI entrou como `hectormanolo-5807`. O primeiro deploy foi para produção em https://passolia.vercel.app. O build remoto ficou READY e a página Passólia responde quando a requisição passa pela proteção da Vercel. Sem essa sessão, o mesmo endereço devolve 404: a proteção SSO está em `all_except_custom_domains`. O deploy anônimo anterior tinha falhado no Windows por `EPERM` em symlink; esse caminho não foi usado.

## Consequências

Depois do login, o comando é `pnpm exec vercel deploy --yes --project passolia --create-if-missing`. Isso cria um deployment de preview. Produção com domínio estável só depois que a URL de preview responder health 200. Não apontar `APP_ENV=production` enquanto Supabase e o segredo do worker não existirem.
