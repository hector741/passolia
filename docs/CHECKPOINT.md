# Checkpoint

- Data: 2026-11-12
- Fase concluída nesta sessão: F00 verificada; F01 verificada na base web local
- Git: repositório privado https://github.com/hector741/passolia, branch `main`. `.env.local`, `data/` e `node_modules` ficaram de fora. A Vercel do projeto `passolia` está ligada a esse repositório e passa a construir a partir do GitHub.
- Uso diário: Hoje, Planejar, Rotinas, Minha vida e Preferências. Os dados ficam no IndexedDB deste navegador. Produção em https://passolia.vercel.app (deployment dpl_nM9WJZhaLNFzNPcuUb3MQ8eQcFe1, READY). `AI_ENABLED=true` e `OPENAI_TEXT_MODEL=gpt-6-astra` estão no projeto. A chave continua ausente do servidor.
- OpenAI: dividir uma tarefa exige pelo menos três ações menores. Um passo igual ao título, mesmo com “meu”, “o” ou “começar a”, é recusado e a OpenAI é chamada de novo uma vez. A chave guardada em Preferências fica no cookie deste navegador e, quando o disco permite, em `data/openai-key` (gitignored). Ela não volta na resposta.
- Foco MP00–MP04: ciclo manual em `/foco`, gravado no IndexedDB. RLS, push, segundo aparelho e offline de sessão continuam bloqueados ou planejados.
- Próxima unidade: aviso escolhido só quando houver job real. Conta Supabase continua pendente de confirmação de custo.

## O que funciona

No navegador dá para guardar um registro, virá-lo em tarefa, ver a tarefa depois de recarregar, montar agenda, iniciar rotina e exportar o JSON em Preferências. Tudo isso fica só neste navegador. `GET /api/v1/health` responde status ok. Sem `WORKER_AUTH_SECRET`, `GET /api/v1/ready` fica indisponível. O módulo financeiro não abre por `?enabled=true`.

## Verificado

- `.\node_modules\.bin\vitest run`: 35 testes passaram de novo depois da regra de divisão. `tests/unit/ai.test.ts` recusa “Arrumar o quarto” quando o texto é “preciso arrumar meu quarto” mais uma linha de prazo, e aceita cama, roupa e varrer.
- `.\node_modules\.bin\tsc --noEmit`: código 0 depois do ciclo de foco.
- `.\node_modules\.bin\eslint` nos arquivos do foco: código 0 depois de tirar a escrita de ref durante o render.
- Navegador em `http://localhost:3000`: Começar em Planejar abre `/foco`, o objetivo editado aparece, ocultar o tempo troca o número por texto, pausar mostra a pista, a anotação não cria tarefa e “Avancei um pouco” volta à tela de início. Recarregar não reabre a sessão encerrada. Em Planejar a tarefa ficou “Em andamento” e o título original permaneceu. Hoje também aponta Começar para `/foco`. A tarefa criada só para essa verificação foi arquivada em seguida. Um aviso de hidratação apareceu em Planejar, linha 52, durante a navegação; o recarregamento seguinte de `/foco` e de Planejar não mostrou o aviso. Produção na Vercel não foi republicada nesta fatia.
- `.\node_modules\.bin\vitest run` anterior nesta base: 26 testes, antes do módulo de foco.
- `GET /api/v1/ai/proposals` local: provedor openai, enabled true, configured false, modelo gpt-6-astra.
- `POST` sem chave: 503 `integration_not_configured`. A tela Preferências mostrou o mesmo aviso. Nenhuma sugestão foi gravada.
- `.\node_modules\.bin\tsc --noEmit`: código 0.
- `.\node_modules\.bin\eslint .`: código 0 depois dos scripts.
- `pnpm build`: sucesso no Next.js 16.4.6.
- Navegador em `http://localhost:3000`: título Passólia e o texto de que a base local está no ar.
- `GET /api/v1/health`: 200 `{"data":{"status":"ok"},"meta":{}}`.
- `GET /api/v1/modules/finance?enabled=true`: 403 `feature_disabled`.
- `GET /api/v1/ready` sem segredo: 503 `integration_not_configured`.
- `.next/static` sem `SUPABASE_SECRET`, `OPENAI_API_KEY` ou `WORKER_AUTH`.
- `node scripts/setup-local.ts`: código 0; segunda execução preservou `.env.local`.
- `node scripts/db-migrate.ts` e `node scripts/db-seed.ts`: código 2, nenhuma SQL aplicada.

## Bloqueado

- Docker ausente e Supabase CLI ausente. Banco, RLS, seed e smoke de autenticação não executados.
- Sem chave de IA, VAPID, webhook ou remoto Git. CI está escrita e não rodou em provedor.
- Vercel: conta `hectormanolo-5807`, projeto `passolia`. Produção https://passolia.vercel.app, inspeção https://vercel.com/hectormanolo-5807s-projects/passolia/GiuKNJtHTqCJ3AJttnMvZGjc7t57. Com a sessão da conta, `/hoje` devolve Hoje, Planejar, Rotinas, Minha vida e Preferências. Sem essa sessão o mesmo endereço continua 404: a proteção SSO cobre o domínio `vercel.app`.
- Testes de integração, RLS, e2e, acessibilidade e IA: comando existe e declara `NÃO EXECUTADO`.

## Ambiente

Node v24.18.0, pnpm 11.13.1, Next 16.4.6, React 19.3.0, Zod 4.6.7, Vitest 5.1.0. `.env.local` local, gitignored, copiado do exemplo. Não há segredo preenchido por esta sessão.

## Retomar

Continue a partir deste checkpoint. As telas de uso já existem e gravam neste navegador. Não trate isso como piloto pronto: falta conta, banco compartilhado, RLS, IA real e aviso entre aparelhos. A próxima implementação, se o dono confirmar o custo mensal de 0, é o projeto Supabase em sa-east-1. Não desligue a proteção SSO da Vercel sem pedido explícito.
