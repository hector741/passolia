# ADR-0007 — Sessão de foco no navegador

- Estado: aceita para o ciclo manual local
- Data: 2026-11-12
- Origem: `PROMPT_MESTRE_CURSOR_PASSOLIA_FOCO_v3.md`, seções 5, 7 e 8

## Decisão

A sessão de foco usa a tarefa já existente. Não há segunda lista de tarefas nem conta nova. Enquanto não houver Supabase, a sessão fica no mesmo IndexedDB do organizador.

Cinco minutos é o valor sugerido e editável. Sem contagem é uma opção visível. Ocultar o número não zera o segmento. O fim do tempo marca `budgetElapsed` e não conclui tarefa nem passo.

Pausa fecha o segmento e não soma o intervalo parado. Uma lacuna maior que 30 minutos, ou um relógio que volta, pede revisão e não transforma esse intervalo em trabalho. A pessoa pode deixar a duração desconhecida.

Encerrar distingue passo concluído, avanço parcial e deixar para depois. Só “concluir a tarefa” explícito marca a tarefa feita. Reduzir o passo muda o objetivo da sessão e preserva título e prazo da tarefa. Anotação de distração não vira tarefa nem compromisso.

Uma sessão `running` por vez neste navegador. Sessão `ended` não reabre.

## Fora deste recorte

RLS, segundo aparelho, fila offline, push e áudio continuam bloqueados ou planejados. Não há medição de atenção por aba, câmera ou digitação.
