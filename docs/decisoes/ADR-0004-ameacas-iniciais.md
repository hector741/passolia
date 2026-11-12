# ADR-0004 — Ameaças iniciais

- Estado: identificadas, controles ainda por implementar
- Data: 2026-11-12
- Origem: seções 5.4, 8, 10 e 12 do prompt mestre. Não é auditoria concluída nem teste de penetração.

| Risco | Controle previsto | Fase |
| --- | --- | --- |
| Identidade forjada no corpo da requisição | Sessão verificada no servidor e RLS | F03 |
| Leitura entre contas, filhos e busca | Políticas e testes negativos | F03–F04 |
| Segredo no cliente ou no log | `server-only`, nomes `NEXT_PUBLIC_` sem segredo, health sem detalhe | F01, contínuo |
| IA aplica a própria proposta ou ID de outra pessoa | Schema, confirmação e transação | F07 |
| Texto importado vira instrução privilegiada | Conteúdo sem autoridade | F07, F17–F18 |
| Fila offline da conta A enviada como B | Base local por usuário e limpeza no logout | F09 |
| URL de upload ou push usada para SSRF | Allowlist e cliente de rede restrito | F08, F17 |
| Webhook repetido libera plano | Idempotência do evento | F19 |
| Redirect aberto na recuperação de senha | Allowlist de URL | F03 |

A fundação já cobre o health sem segredo, a recusa de nome público de segredo e o portão de módulo. Os demais controles continuam planejados.
