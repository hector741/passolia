# ADR-0002 — Mutações e propostas de IA

- Estado: aceita como regra de implementação
- Data: 2026-11-12
- Origem: seções 3.3, 4, 7.1 e 10 do prompt mestre

## Decisão

IA propõe. O servidor valida sessão, escopo, versão e schema. A pessoa confirma o que for alteração relevante. Aceitar uma proposta será uma transação idempotente. Captura, agenda e demais ações manuais funcionam com `AI_ENABLED=false`.

Escrita de domínio usará comandos estreitos. Leitura segue a identidade do usuário. Chave administrativa não atende consulta comum. `user_id` vindo do corpo não autoriza.

## Consequências

A F07 deste navegador usa a OpenAI só no servidor (`POST /api/v1/ai/proposals`, `store: false`, saída em JSON schema). O modelo padrão é `gpt-6-astra`, trocável por `OPENAI_TEXT_MODEL`. A pessoa confirma antes de gravar tarefa, passo, rotina, foco ou preferência. Sem `OPENAI_API_KEY` a rota responde que a integração não está configurada e o caminho manual segue. Não há conta nem banco compartilhado: a proposta confirmada grava no IndexedDB deste navegador. A cota de cinco pedidos por minuto vale na instância do servidor, não entre aparelhos.
