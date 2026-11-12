# ADR-0001 — Stack da pasta nova

- Estado: aceita
- Data: 2026-11-12
- Origem: recomendação de engenharia do prompt mestre, seção 3. Não é escolha clínica nem aprovação prévia de fornecedor pelo proprietário.

## Contexto

A inspeção encontrou documentação, `brand/passolia/` e a regra `.cursor/rules/passolia.mdc`. Não havia `package.json`, código de aplicação nem repositório Git.

## Decisão

Adotar Next.js 16.4.6 (App Router), React 19.3.0, TypeScript 5.9.3 em modo estrito, Tailwind CSS 4.3.3 e pnpm 11.13.1. Validação com Zod 4.6.7. Teste unitário com Vitest 5.1.0. Dados previstos: Postgres do Supabase, quando Docker e a CLI existirem. IA prevista: adaptador no servidor, desligado sem chave.

Node nesta máquina: v24.18.0. O Next.js 16.4.6 declara `node >= 20.9.0`. A linha LTS ativa publicada em 11/11/2026 é a 26.13.1; a 24.22.3 é a correção de segurança da linha 24. O runtime local não foi atualizado.

## Consequências

O build e os testes unitários rodam aqui. Supabase local, push, cron e smoke de IA ficam bloqueados até infraestrutura e credencial. ESLint permanece em 9.39.5 porque `eslint-config-next` 16.4.6 o resolve, embora o pacote avise depreciação.

## Alternativa não adotada

Reescrever em outro framework ou começar pelo cliente Flutter. Não havia código móvel para preservar.
