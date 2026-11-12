# ADR-0003 — Tempo e recorrência

- Estado: aceita como padrão, a testar na F05
- Data: 2026-11-12
- Origem: seção 6 do prompt mestre. É política de engenharia, não regra médica.

## Decisão

Separar instante UTC, data civil, horário local e fuso IANA. O fallback inicial exibido é `America/Sao_Paulo`, e a pessoa pode trocar. Idioma `pt-BR`, data `dd/MM/yyyy`, hora em 24 h, moeda BRL.

Recorrência inicial: calendário fixo e intervalo após conclusão, nas frequências diária, semanal, mensal e anual. Dia 31 mensal cai no último dia válido do mês e a série guarda a intenção do dia 31. Anual em 29/02 cai no último dia de fevereiro nos anos não bissextos. Horário inexistente por horário de verão desloca para o primeiro instante válido seguinte. Horário duplicado usa a primeira ocorrência.

Importação RRULE que não couber nesse subconjunto será recusada ou mostrada para revisão. A política interna não será apresentada como RFC 5545 completa.

## Consequências

Nenhum gerador está no código. A F05 cobre os casos AC016–AC026 antes de a agenda ser dada como verificada.
