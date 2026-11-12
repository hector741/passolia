# Matriz de cobertura e aceite do módulo de foco

Versão 3.0 • 12/11/2026

Este documento complementa, sem renumerar, a matriz global da Passólia.
Os 40 casos FOC abaixo foram preservados da pesquisa. Os 12 EFOC detalham
lacunas de engenharia desta versão. **Todos estão planejados, não executados.**

Durante implementação, preencher caminho do teste, comando, ambiente, data,
resultado e bloqueio real. Requisito com tela sem persistência não está verificado.
Testes humanos, smokes externos e testes automatizados são evidências distintas.

## Cobertura MF01–MF16

| Recurso | Fases do módulo | Casos mínimos relacionados | Requisitos globais |
| --- | --- | --- | --- |
| MF01 | MP02/MP04 | FOC01–FOC04, FOC26–FOC28 | RF04/RF07/RF10 |
| MF02 | MP02/MP03 | FOC05–FOC07, FOC10–FOC11, EFOC01 | RF08 |
| MF03 | MP03 | FOC08–FOC09, FOC19 | RF08/RF09 |
| MF04 | MP03 | FOC08–FOC11, FOC19, FOC37 | RF09 |
| MF05 | MP04 | FOC12–FOC13, FOC23–FOC25 | RF03/RF08/RF14 |
| MF06 | MP04 | FOC14–FOC17 | RF04/RF06/RF08 |
| MF07 | MP06 | FOC32–FOC34, EFOC09 | RF12 |
| MF08 | MP02/MP09 | FOC18, EFOC07 | RF07/RF08 |
| MF09 | MP05 | FOC25–FOC31, EFOC09 | RF10/RF11 |
| MF10 | Transversal | FOC01, FOC03, FOC35–FOC37 | RF02/RF15/RF29 |
| MF11 | MP04 | FOC18, FOC27, EFOC08 | RF07/RF09 |
| MF12 | MP09 | FOC40, EFOC10 | RF08/RF15 |
| MF13 | MP10 | FOC40, EFOC11 | RF23/RF26 |
| MF14 | MP10 | FOC40, EFOC12 | RF26 |
| MF15 | MP10 | FOC24–FOC25, FOC40, EFOC12 | RF19/RF26 |
| MF16 | MP09 | FOC31, FOC39, EFOC07 | RF02/RF11/RF15 |

## Cobertura das seções da pesquisa

| Seção da pesquisa | Onde foi convertida em instrução |
| --- | --- |
| 1. Decisão recomendada | Prompt 2 e núcleo das etapas MP02–MP04 |
| 2. Método/classes de evidência | Prompt 3; limitações preservadas na pesquisa integral |
| 3. Contexto da Passólia | Prompt 1/7/13; plano e RF globais preservados |
| 4. Termos e dificuldades | Prompt 0/3/5/6; necessidades sem diagnóstico inferido |
| 5. Síntese de evidências | Prompt 3; decisões proporcionais às fontes |
| 6. Estratégias | Prompt 4/5/12; todas MF01–MF16 mantidas |
| 7. Priorização | Prompt 4/13; núcleo, P1 e P2 separados |
| 8. UX/personalização | Prompt 5/6; opções progressivas, defaults reversíveis |
| 9. Fluxo e exceções | Prompt 5/8/9; estados, falhas e retorno |
| 10. IA | Prompt 10/11; proposta, confirmação, limites e dados |
| 11. Engenharia | Prompt 7/8/9/11; contratos e migrações |
| 12. Sequência | Prompt 13; MPxx mapeadas a Fxx |
| 13. Aceite | Prompt 14; FOC01–FOC40 literais abaixo |
| 14. Validação | Prompt 15; benefício, esforço e sobrecarga |
| 15. Catálogo de fontes | Pesquisa integral incluída; E01–E40 referidos no prompt |
| 16. Adendo anterior | Expandido no novo prompt e nos comandos de início/continuidade |

## Casos preservados da pesquisa

| Caso | Resultado esperado | Estado inicial | Evidência de execução |
| --- | --- | --- | --- |
| FOC01 | Começar manualmente sem IA, diagnóstico, estimativa ou questionário. | Planejado | Não executado |
| FOC02 | Tarefa existente abre sem duplicar entidade ou ocorrência. | Planejado | Não executado |
| FOC03 | Próxima ação editável e texto grande não quebram celular a 320 CSS px. | Planejado | Não executado |
| FOC04 | Passos extras só aparecem mediante expansão; detalhamento pode ser reduzido. | Planejado | Não executado |
| FOC05 | Sem timer permite os mesmos comandos de pausa, avanço e encerramento. | Planejado | Não executado |
| FOC06 | Ocultar números ou trocar modo não reinicia sessão. | Planejado | Não executado |
| FOC07 | Duração esgotada não conclui ação nem impede continuar. | Planejado | Não executado |
| FOC08 | Pausar salva passo sem nota e não acumula duração de pausa. | Planejado | Não executado |
| FOC09 | Retomar recupera passo/nota e acumulado depois de refresh. | Planejado | Não executado |
| FOC10 | Abandono prolongado pede revisão de tempo sem declarar horas de atenção. | Planejado | Não executado |
| FOC11 | Mudança de relógio/suspensão não produz duração negativa ou falsa precisão. | Planejado | Não executado |
| FOC12 | Captura de distração volta ao mesmo campo/ação e não agenda tarefa. | Planejado | Não executado |
| FOC13 | Timeout e duplo clique não duplicam captura, sessão ou proposta aplicada. | Planejado | Não executado |
| FOC14 | Encerrar com avanço parcial mantém pendências. | Planejado | Não executado |
| FOC15 | Passo pulado fica separado de concluído. | Planejado | Não executado |
| FOC16 | Concluir sessão não conclui tarefa, projeto, rotina ou recorrência automaticamente. | Planejado | Não executado |
| FOC17 | Tarefa concluída por comando explícito não reaparece aberta por mutação antiga. | Planejado | Não executado |
| FOC18 | Reduzir atividade não altera vencimento real, reunião fixa ou saldo financeiro. | Planejado | Não executado |
| FOC19 | Segundo dispositivo assume execução com versão; conflito não perde nota. | Planejado | Não executado |
| FOC20 | Duas execuções offline sobrepostas geram revisão, sem soma duplicada. | Planejado | Não executado |
| FOC21 | Falha de rede mostra o que é local e o que foi sincronizado. | Planejado | Não executado |
| FOC22 | Atualização do app não apaga comando/rascunho ainda pendente. | Planejado | Não executado |
| FOC23 | Troca de usuário não revela cache de outro usuário. | Planejado | Não executado |
| FOC24 | RLS/API impedem acesso de parceiro a sessão e distrações privadas. | Planejado | Não executado |
| FOC25 | Revogação de acesso invalida proposta e não expõe derivados retirados. | Planejado | Não executado |
| FOC26 | IA sem contexto suficiente esclarece ou permite entrada manual, sem inventar fatos. | Planejado | Não executado |
| FOC27 | IA respeita restrição declarada e não acrescenta subtarefas fora do objetivo. | Planejado | Não executado |
| FOC28 | Prévia editável aceita apenas os passos selecionados; dependências são revalidadas. | Planejado | Não executado |
| FOC29 | Saída inválida, recusa, cota e timeout mantêm texto e operação manual. | Planejado | Não executado |
| FOC30 | Pedido/instrução em anotação não consegue conceder acesso ou executar comando. | Planejado | Não executado |
| FOC31 | IA não infere estado clínico, não recomenda dose e não envia mensagens sozinha. | Planejado | Não executado |
| FOC32 | Avisos desligados/negados não impedem foco; ignorar não aumenta frequência. | Planejado | Não executado |
| FOC33 | Aviso obsoleto é cancelado; reenvio não duplica alerta. | Planejado | Não executado |
| FOC34 | Tela bloqueada não revela título sensível quando conteúdo discreto estiver ativo. | Planejado | Não executado |
| FOC35 | Leitor de tela anuncia transições; timer não anuncia cada segundo. | Planejado | Não executado |
| FOC36 | Teclado, foco, ampliação, movimento reduzido e alternativa a arrastar funcionam. | Planejado | Não executado |
| FOC37 | Retorno após sete dias é pulável; prazos reais continuam visíveis no contexto adequado. | Planejado | Não executado |
| FOC38 | Histórico, notas e propostas obedecem exportação, exclusão e retenção documentadas. | Planejado | Não executado |
| FOC39 | Telemetria não contém texto privado, escore clínico ou inferência de atenção. | Planejado | Não executado |
| FOC40 | Som, jogo e presença permanecem desligáveis e não bloqueiam encerramento. | Planejado | Não executado |

## Casos complementares de engenharia

| Caso | Gatilho | Resultado esperado | Estado inicial |
| --- | --- | --- | --- |
| EFOC01 | Ocultar, crescente e untimed | Exibição não reinicia; untimed iniciado depois não inventa duração anterior; segmentos existentes preservados. | Planejado |
| EFOC02 | Revisar intervalo incerto | Pode omitir tempo e começar/retomar sem declarar horas de trabalho; atenção não é calculada. | Planejado |
| EFOC03 | Falha de armazenamento local e remoto | Texto permanece disponível para copiar/repetir; não afirma salvo ou sincronizado. | Planejado |
| EFOC04 | Mesma chave, outro payload | Retorna conflito controlado; não reaplica conteúdo diferente nem cria duplicata. | Planejado |
| EFOC05 | Takeover e aparelho anterior | Epoch/revisão antiga não sobrescreve execução assumida; captura própria não é descartada. | Planejado |
| EFOC06 | Meia-noite, fuso e horário irregular | Instantes preservados; agrupamento por data local é explícito e não altera prazos reais. | Planejado |
| EFOC07 | Estimativas e preferência habitual | Desconhecido não é zero; só compara registros elegíveis; mudança mostra antes/depois e exige escolha. | Planejado |
| EFOC08 | Objetivo reduzido versus tarefa ampla | Concluir escopo da sessão mantém pendências originais e ocorrência correta; não declara o pai pronto. | Planejado |
| EFOC09 | Revogação/encerramento durante geração e aviso | Proposta não expõe/aplica contexto retirado; job obsoleto é cancelado/revalidado. | Planejado |
| EFOC10 | Áudio, encerramento e logout | Sem autoplay; parar/encerrar/logout interrompem reprodução; falha não afeta o núcleo. | Planejado |
| EFOC11 | Bloqueador sem capacidade real | Não anuncia bloqueio feito; lista permitida e saída são verificadas na plataforma elegível. | Planejado |
| EFOC12 | Experimento privado recusado/desligado | Revogar convite retira acesso; sair não pune; desligar jogo/presença mantém dados e fluxo manual. | Planejado |

## Portas de conclusão

1. Domínio/dados: transições, integridade, autorização e idempotência verificadas.
2. Ciclo manual: escolher, começar, pausar, anotar, reduzir, retomar e encerrar persistem.
3. Integrações: somente capacidades reais testadas; ausência de credencial consta como bloqueio.
4. Confiabilidade: nenhuma falha conhecida crítica de perda, duplicação, isolamento ou conclusão indevida.
5. Acessibilidade: registrar verificações reais; ferramenta automática não certifica toda a experiência.
6. Pesquisa: benefício clínico ou funcional não é atribuído ao produto por aprovação de testes de código.

P2 continua planejado quando o experimento não foi habilitado; não marcar os
respectivos casos como aprovados por uma flag estar desligada. Registrar Não se
aplica à versão liberada, manter vínculo ao backlog e testar o núcleo sem dependência.
