# Implementação do foco

Data: 2026-11-12. Persistência neste navegador, não em conta compartilhada.

## O que o ciclo faz

Em Hoje e Planejar, **Começar** abre `/foco?tarefa=`. A pessoa vê a próxima ação, pode editá-la, escolher minutos ou **Sem contagem**, e começar sem IA e sem questionário.

Durante a sessão dá para pausar, retomar, ocultar o tempo, anotar um desvio, reduzir o passo e encerrar. O tempo esgotado não conclui. Encerrar com “Avancei um pouco” ou “Fica para depois” deixa a tarefa aberta. “Concluí este passo” só marca o passo pendente, quando existe. A anotação fica em `focusNotes` e não cria tarefa.

## Estados

`running`, `paused`, `needs_review`, `ended`. O relógio de verdade é o início do segmento mais o acumulado. A tela só mostra o número. Lacuna acima de 30 minutos pede revisão e não conta esse intervalo.

## Limites reais

Não há sessão autenticada, RLS, segundo aparelho, aviso push nem fila de sincronização. O texto “salvo neste navegador” vale também para a sessão. MP06, MP07 e os experimentos MF12–MF15 permanecem planejados.
