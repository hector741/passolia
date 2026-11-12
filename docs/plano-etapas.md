# Plano de etapas

Contrato detalhado: `docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md`, seção 15. Estados: planejado, em andamento, implementado, verificado, bloqueado.

| Fase | Depende de | Estado em 2026-11-12 | Próxima ação |
| --- | --- | --- | --- |
| F00 Inventário | Pacote e pasta | Verificado | Manter os documentos abaixo alinhados ao código |
| F01 Fundação | F00 | Verificado na base local; banco bloqueado | Instalar Docker e a CLI quando for criar o schema |
| F02 Design | F01 | Planejado | Tokens completos, componentes e jornadas com os SVG reais |
| F03 Conta e RLS | F01–F02 | Planejado; bloqueado pelo banco local | Migração do núcleo e dois usuários de teste |
| F04 Captura e tarefas | F03 | Planejado | Primeira escrita persistida, versão e idempotência |
| F05 Agenda | F04 | Planejado | Motor de tempo e recorrência |
| F06 Hoje e rotinas | F05 | Planejado | Focos, snapshot e retomada |
| F07 IA | F04–F06 | Implementado no navegador; smoke real bloqueado sem chave | Colar `OPENAI_API_KEY` e repetir um pedido real |
| F08 Jobs | F03–F06 | Planejado; push real bloqueado sem infra | Caixa interna e outbox |
| F09 PWA | F04–F08 | Planejado | Manifest, fila local e conflitos |
| F10 Dados | F03–F09 | Planejado | Exportação, exclusão e suporte |
| F11 Marco técnico | F00–F10 | Planejado | Hardening. Piloto humano continua externo |
| F12–F22 | Conforme o prompt | Planejado | Não antecipar módulo sem a dependência da fase |

F00 e F01 não entregam o MVP. O próximo trabalho autorizado é a F02.
