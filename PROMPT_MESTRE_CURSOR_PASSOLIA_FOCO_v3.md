# PROMPT MESTRE PARA O CURSOR — PASSÓLIA COM MÓDULO DE FOCO

Versão 3.0 • 12/11/2026 • Português brasileiro

## 0. Missão, contexto e resultado esperado

Atue como engenheiro de software sênior, arquiteto de produto, especialista em UX acessível e integração responsável de IA. Implemente na Passólia um módulo funcional para ajudar adultos a iniciar tarefas, sustentar sua execução, lidar com distrações e retomar atividades interrompidas. Entregue código, persistência, testes pertinentes e documentação real; não se limite a telas, planejamento ou descrições.

A Passólia é uma plataforma de organização da vida pessoal/doméstica, trabalho/estudos, finanças, relações e vestuário. O núcleo contém captura, tarefas, passos, projetos, agenda, recorrências, rotinas, Hoje, lembretes e IA. O módulo de foco deve reutilizar essa estrutura. Não criar um aplicativo independente, um segundo banco de tarefas ou uma segunda autenticação.

O público inicial são adultos brasileiros com TDAH, incluindo apresentação predominantemente desatenta. As necessidades individuais orientam as opções; o aplicativo não diagnostica, prescreve ou substitui acompanhamento profissional. “TDA” é termo popular a reconhecer e explicar; não é uma quarta apresentação a cadastrar. Não exigir diagnóstico, laudo, medicação ou apresentação para usar o módulo.

O resultado central é este ciclo completo:

**Escolher → esclarecer a próxima ação → começar → anotar/pausar → retomar → encerrar com progresso explícito.**

O trabalho está autorizado para implementação incremental no repositório aberto, respeitando suas regras. Não termine cada etapa pedindo confirmação para a próxima atividade já prevista. Preserve alterações existentes e faça perguntas somente quando faltar informação realmente necessária à ação concreta. Não invente credenciais, infraestrutura, resultados de teste ou decisões do proprietário.

## 1. Documentos, precedência e reaproveitamento

Leia e use:

1. Este prompt e `INICIAR_NO_CURSOR_PASSOLIA_FOCO.md`.
2. `docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md`: arquitetura e escopo integral da plataforma.
3. `docs/projeto/CONSOLIDACAO_E_DECISOES.md` e a matriz global `docs/projeto/MATRIZ_DE_COBERTURA_E_ACEITE.md`.
4. `docs/pesquisa/PESQUISA_MODULO_FOCO_PASSOLIA_2026-11-12.md`, integralmente. O PDF correspondente é uma referência de leitura/apresentação.
5. `docs/foco/MATRIZ_DE_COBERTURA_E_ACEITE_FOCO.md` e `docs/foco/PLANO_E_CONTINUIDADE_FOCO.md`.
6. As pesquisas anteriores em `docs/pesquisa/`, o catálogo de IA e o manual/ativos oficiais da marca em `docs/referencia/` e `brand/passolia/`.
7. As instruções reais do repositório, seus arquivos de configuração, código, migrações, testes, README e checkpoint.

Precedência de produto: instrução mais recente do proprietário; definições específicas deste módulo; contratos gerais da Passólia; pesquisas e exemplos anteriores. Preserve instruções de segurança e regras superiores do ambiente. Exemplos de tela não substituem regras de negócio. Os valores padrão desta versão são decisões propostas de produto/engenharia, não prescrições clínicas.

Este documento detalha RF07–RF15 e RF29 e utiliza RF04/RF06. MF13–MF15 permanecem compatíveis com RF26/F21. Não remover RF01–RF29, os 36 usos de IA ou as 23 fases F00–F22 do plano global. As fases MP00–MP10 abaixo são subdivisões de implementação do módulo; não renumeram o projeto inteiro.

Se o código já existe, inventarie o que funciona e adapte com alterações mínimas coerentes. Não substituir stack, sistema de jobs ou autenticação por preferência pessoal. Se o projeto estiver vazio, implemente as fundações reais do plano global antes das partes dependentes do módulo. Não fingir Supabase, sessão autenticada ou persistência com dados de demonstração em produção.

Os documentos deste pacote não representam um repositório de aplicativo já auditado. Confirme o estado real. Se algum arquivo citado não estiver disponível, registre nome, conteúdo necessário e impacto. Continue o que for independente; não afirme ter lido material ausente.

## 2. Escolha de produto: combinação recomendada

Implemente como primeira experiência uma combinação de recursos complementares:

- **Próxima ação:** tornar claro o que a pessoa pode fazer agora.
- **Sessão ajustável:** oferecer uma fronteira de tempo opcional, sem método obrigatório.
- **Pausa e ponto de retorno:** preservar ação, contexto e progresso.
- **Captura de distração:** anotar sem trocar de tarefa ou criar cobrança automática.
- **Progresso parcial:** registrar o que foi confirmado e o que continua pendente.
- **Redução de escopo:** permitir um passo menor sem alterar obrigações reais.
- **Aviso escolhido:** lembrar quando a pessoa desejar, sem insistência automática.
- **IA opcional:** esclarecer ou propor passos revisáveis, com caminho manual equivalente.

Essa é uma escolha de implementação fundamentada na pesquisa e na baixa carga de manutenção esperada. Não alegar que a combinação já demonstrou eficácia na Passólia. Ela precisa ser avaliada em uso.

Não exibir um catálogo de técnicas na entrada. A pessoa deve conseguir começar a partir de uma tarefa com uma ação principal. Configurações avançadas aparecem progressivamente, quando pertinentes.

## 3. Evidências que precisam orientar o comportamento

Use os identificadores E01–E40 do catálogo da pesquisa para rastrear decisões. Não repetir nesta implementação uma revisão médica completa nem transformar dados científicos em textos promocionais.

| Achado da pesquisa | Regra executável |
| --- | --- |
| Nomenclatura e orientações institucionais reconhecem diversidade de necessidades [E01–E03] | Explicar “TDA” sem criar diagnóstico; permitir apoio ajustável sem exigir apresentação clínica. |
| Programas estruturados de organização/TCC possuem evidência em adultos; isso não isola cada componente [E04–E09] | Usar listas e planejamento como apoio; não apresentar a interface como terapia comprovada. |
| Resultados digitais variam e melhora de sintomas não garante melhora funcional [E10–E14] | Avaliar ações úteis, esforço e sobrecarga; não usar acesso como prova de benefício. |
| Dificuldades de tempo/memória são relevantes, mas heterogêneas [E15–E17] | Externalizar instruções e permitir estimativas revisáveis; não inferir incapacidade individual. |
| Pausas estruturadas e autorreguladas têm resultados contraditórios [E18–E21] | Duração ajustável, pausa livre, continuar ou trabalhar sem contagem. |
| Lembretes adicionais não garantem execução [E22–E23] | Opt-in, contexto e ação clara; ignorar não autoriza aumentar frequência. |
| Plano de retorno tem evidência indireta para este uso [E24] | Preservar contexto e testar retomada diretamente. |
| Ruído/música dependem de tarefa, idade e preferência [E25–E26] | Silêncio inicial; áudio opcional, desligável e experimental. |
| Body doubling tem evidência limitada/mista [E27–E29] | Experimento posterior, privado e sem vigilância. |
| Chatbot estruturado e IA generativa não são a mesma intervenção [E30–E32] | IA ajuda com sugestões; sua utilidade precisa de avaliação própria. |
| Acessibilidade, governança e privacidade são requisitos [E33–E37, E39] | Controle do usuário, minimização de dados, acessibilidade e testes verificáveis. |
| Bloqueio digital geral e jogos pediátricos não validam este app adulto [E38, E40] | Não prometer bloqueio do sistema pela PWA nem eficácia de pontos/mascotes. |

Distinguir no registro de decisões: evidência específica em TDAH; evidência geral transferida; hipótese promissora; alegação sem sustentação. Não converter “não significativo” em “comprovadamente equivalente” ou “nunca funciona”. Não usar popularidade de aplicativos como evidência.

## 4. Cobertura de todas as funcionalidades pesquisadas

P0 = versão inicial do módulo. P1 = evolução após avaliação do núcleo. P2 = experimento posterior. “Opcional” significa que a pessoa pode usar todo o núcleo sem aquele recurso. Nenhum item posterior pode desaparecer do backlog.

| ID | Implementação requerida | Prioridade/fase | Critério observável |
| --- | --- | --- | --- |
| MF01 Próxima ação | Ação editável, critério de parada e decomposição progressiva | P0 / MP02, MP04 | Começar pela tarefa ou por um passo sem lista extensa obrigatória. |
| MF02 Sessão flexível | Com tempo ajustável, crescente/decrescente/oculto, ou sem medição detalhada | P0 / MP02–MP03 | Trocar visualização não reinicia; tempo esgotado não conclui. |
| MF03 Pausa livre | Pausar imediatamente; descanso livre ou aviso opcional | P0 / MP03 | Pausa não acumula tempo de atividade nem exige justificativa. |
| MF04 Ponto de retomada | Passo/contexto mínimo e nota opcional persistidos | P0 / MP03 | Reabrir e continuar sem refazer planejamento. |
| MF05 Anotar distração | Captura privada rápida, com triagem posterior opcional | P0 / MP04 | Salvar e voltar ao mesmo lugar; não agenda nem vira tarefa sozinha. |
| MF06 Progresso parcial | Concluído, pendente e pulado distinguíveis | P0 / MP04 | Encerrar parcialmente mantém o restante. |
| MF07 Aviso escolhido | Lembrete de retorno acionável, silêncio e deduplicação | P0 básico / MP06 | Negar push ou ignorar aviso não bloqueia nem aumenta insistência. |
| MF08 Estimativa pessoal | Edição simples inicial; depois faixas e comparação voluntária | P0 simples / MP02; P1 / MP09 | Desconhecido não vira zero; ajuste habitual exige escolha. |
| MF09 IA de primeiro passo | Esclarecer, decompor, reduzir e reorganizar com revisão | P0 opcional / MP05 | Sem provedor o mesmo fluxo manual continua utilizável. |
| MF10 Modo essencial | Uma ação em destaque, opções progressivas e acessibilidade | P0 transversal | Começar sem diagnóstico, tutorial ou questionário adicional. |
| MF11 Reduzir atividade | Diminuir escopo atual preservando original e prazos | P0 / MP04 | Não apagar pendências nem alterar conta ou compromisso fixo. |
| MF12 Áudio | Controle simples; silêncio padrão; comparar utilidade | P1 experimental / MP09 | Sem autoplay, promessa terapêutica ou áudio necessário à operação. |
| MF13 Bloqueador externo | Adaptador específico, permissões, lista permitida e saída | P2 / MP10 | Só anunciar bloqueio quando houver capacidade real testada. |
| MF14 Recompensa/jogo | Preferência pessoal, desligável e sem perda/punição | P2 / MP10 / F21 | Núcleo funciona sem jogo; ausência não destrói progresso. |
| MF15 Presença privada | Convite consentido, sem câmera/gravação obrigatória | P2 / MP10 / F21 | Sem compartilhar notas ou medir desempenho do parceiro. |
| MF16 Ajustes por histórico | Sugerir preferência com motivo, dados mínimos e reversão | P1 / MP09 | Nenhuma alteração silenciosa ou inferência clínica. |

## 5. Jornadas e regras de experiência

### 5.1 Entradas

Adicionar “Começar” em tarefa, Hoje, projeto e ocorrência/execução de rotina. O contexto deve apontar para a entidade já existente. Se a entrada for uma intenção ainda não salva, permitir captura/criação pelo fluxo comum e iniciar sem duplicar registros em refresh ou retry.

Não exigir nova conta dentro do módulo. Usar identidade e espaço pessoal da plataforma. Em tarefa compartilhada, revalidar autorização; sessão, anotações e avaliações continuam privadas para quem executa.

### 5.2 Preparar sem criar barreira

Pré-preencher o próximo passo existente quando fizer sentido. Mostrar:

- Tarefa de origem e ação atual em destaque.
- Campo editável; se vazio, permitir começar pela própria tarefa.
- Botão principal “Começar”.
- Duração inicial de referência de cinco minutos, editável, e opção visível “Sem contagem”.
- “Me ajude a começar” como alternativa opcional; não exigir IA.

Não exigir escolher categoria, estimar projeto inteiro, responder sobre humor ou selecionar método. Cinco minutos é default configurável de produto, não duração ideal de atenção. Não substituir preferência já salva por esse default.

Até três passos inicialmente visíveis quando houver decomposição. Mostrar mais mediante expansão; não eliminar passos existentes nem ocultar pendência real como se tivesse deixado de existir. Uma pessoa que prefere mais detalhe pode escolhê-lo; não impor máximo absoluto de três passos a toda tarefa.

### 5.3 Executar

Mostrar a ação atual, tarefa/contexto, tempo se desejado e ações “Anotar algo”, “Pausar” e “Encerrar”. Ajustar ação e consultar passos permanecem acessíveis. Evitar chat aberto, gráficos, banners, rankings e convites durante execução.

Foco visual não deve bloquear teclado, navegação necessária ou uso de material externo. Fechar uma janela, mudar de aba ou apagar a tela pode fazer parte da atividade. Não pausar automaticamente por visibilidade, falta de digitação, mouse parado ou aba em segundo plano.

### 5.4 Anotar algo

Um campo curto, sem categoria/data obrigatórias. Botão Salvar ou atalho opcional documentado, sem conflito com tecnologias assistivas. Salvar reutiliza captura privada e pode vincular à sessão; nunca compartilha só porque a tarefa é compartilhada.

Após confirmação, “Anotado. Você pode olhar depois”; fechar teclado e restaurar foco/contexto de navegação. Não abrir a lista inteira, exibir contador de falhas, criar prazo ou notificação. Converter em tarefa exige ação separada posterior. Se a pessoa precisar agir imediatamente, permitir pausar/encerrar sem desencorajar uma urgência real.

Persistência tem estados honestos: salvo no aparelho, sincronizado, salvamento falhou. Não afirmar que um rascunho está preservado quando armazenamento local e remoto falharam. Em quota/IndexedDB negado, informar limitação e oferecer copiar o texto ou tentar novamente sem prender a pessoa no app.

### 5.5 Pausar e retomar

Pausar preserva imediatamente o último passo confirmado e fecha o segmento de tempo. Nota “Quer deixar uma pista para voltar?” é opcional e vem depois; nunca bloquear uma saída urgente.

Ao voltar: “Você estava separando as roupas da cadeira. Quer continuar daí?”. Oferecer Retomar, Reduzir este passo e Escolher outra tarefa. Não exigir limpar atrasos ou justificar ausência. Reutilizar o convite pulável de revisão após sete dias já previsto, preservando obrigações reais na área apropriada.

Retomar a sessão pausada continua seu histórico. Sessão encerrada permanece terminal; trabalhar novamente cria outra sessão vinculada à tarefa, podendo aproveitar uma nova referência de retorno autorizada. Não reabrir um resultado terminal silenciosamente.

### 5.6 Atingir o tempo escolhido

“O tempo que você escolheu terminou”, de forma discreta. Oferecer Continuar, Fazer pausa e Encerrar por agora. Nenhuma conclusão, perda de progresso, cronômetro negativo vermelho ou nova rodada automática.

O fim da duração planejada altera um indicador temporal (`budget_elapsed`), não a tarefa nem necessariamente o estado `running`. Se continuar com mais tempo, isso é escolha explícita e preserva o acumulado; não reiniciar ou aumentar metas automaticamente.

### 5.7 Reduzir o escopo

Disponível antes ou durante a sessão. Exemplo: de “guardar todas as roupas” para “separar algumas peças”, conforme escolha da pessoa. Preservar texto original e pendências restantes; revisão não transforma “todo o quarto” em concluído por ter feito uma parte.

Separar objetivo desta sessão da tarefa de origem. Alterar título/prazo/estrutura da tarefa exige comando correspondente e revisão quando necessário. Não criar subpassos extras só para gerar contagem de progresso. Não modificar compromisso fixo, vencimento financeiro ou pagamento.

### 5.8 Encerrar

Opções: Concluí este passo, Avancei um pouco e Fica para depois. A avaliação e o tempo declarado são opcionais. “Encerrar sessão” sozinho não conclui pai, rotina ou projeto.

Concluir a tarefa inteira precisa de ação explícita e tratamento dos passos pendentes/pulados. Aplicar a semântica do núcleo. Em recorrência, atingir somente a ocorrência selecionada, nunca todas as repetições. Permitir desfazer de forma compensatória e versionada, respeitando mudanças posteriores.

Resumo curto: realizado confirmado, restante escolhido e próxima ação opcional. Não exigir nota ou plano para poder encerrar. Não usar culpa, cobrança, “perdeu sua sequência” ou recompensa pela mera permanência no app.

### 5.9 Exemplos em diferentes áreas

| Contexto | Intenção | Próxima ação possível | Pista de retorno |
| --- | --- | --- | --- |
| Casa | Arrumar meu quarto | Juntar as roupas da cadeira | Separadas as peças para lavar; falta guardar as limpas. |
| Trabalho | Fazer relatório | Abrir o arquivo e escrever os três tópicos pedidos | Janeiro conferido; começar por fevereiro. |
| Estudo | Estudar contabilidade | Abrir o capítulo escolhido e selecionar uma questão | Retomar na questão 3, sem resolver tudo de novo. |
| Pessoal | Preparar saída | Separar documento e chave | Itens separados; conferir horário de saída. |
| Finanças | Organizar conta a pagar | Abrir o documento que já foi separado | Documento conferido; pagamento continua pendente. |

Os exemplos são editáveis. IA não pode afirmar que materiais existem, prescrever limpeza perigosa ou contabilizar “vou pagar” como pagamento.

## 6. Preferências, marca e acessibilidade

Defaults novos, todos identificados como configuráveis: uma ação em destaque; referência de cinco minutos; áudio e celebração desligados; nenhum lembrete recorrente automático; pausa livre; nota de retorno opcional; configurações avançadas recolhidas.

Separar temporário da sessão/de hoje e preferência habitual. A duração de hoje não altera todas as próximas sessões sem escolha. A pessoa pode ocultar tempo, mudar contraste/tema, detalhe, lembretes, progresso e tom. Não inferir energia ou estado emocional por número de tarefas.

Usar os ativos existentes em `brand/passolia/`, com grafia **Passólia**, Manrope e tokens oficiais; não redesenhar o logo. Valores básicos: papel #F7F4EF, tinta #242235, violeta #5B4BC4, lavanda #DAD4F5. No tema escuro, ação lavanda com texto tinta. Preservar tokens de bordas, estados, foco e espaçamento do pacote.

Corpo de referência 16 px/entrelinha 1,5; controles preferenciais de 44 px; foco visível; teclado, leitor de tela, reflow, ampliação e movimento reduzido. Os valores não substituem a avaliação integral dos critérios pertinentes da WCAG 2.2 AA. COGA é orientação complementar. Reduzir interrupções por decisão de produto não significa que o critério AAA virou requisito AA.

Timer não anuncia cada segundo no leitor de tela; anunciar transições relevantes e permitir consultar tempo sob demanda. Não depender só de cor/som. Alternativa a arrastar; diálogos com foco/retorno corretos. Testar 320 CSS px, teclado móvel aberto, texto ampliado, desktop e ferramentas assistivas reais quando disponíveis.

Mensagens devem ser curtas, adultas e neutras por padrão. Não importar o tom afetivo de conversas com o desenvolvedor para usuários. Exemplos: “Seu ponto está salvo”; “Quer reduzir o que falta?”; “Esta é uma sugestão; você pode editar”. Não prometer cura, normalização de dopamina, diagnóstico ou detecção de atenção.

## 7. Arquitetura e modelo de domínio

### 7.1 Base técnica

Preservar arquitetura válida do repositório. Para projeto novo, usar a recomendação do plano global: PWA responsiva; monólito modular; TypeScript/React/Next.js; PostgreSQL/Supabase, autenticação e storage privados; validação de contratos; adaptadores de IA e jobs persistentes; IndexedDB para o escopo offline implementado. Flutter permanece uma evolução, não obrigação simultânea do MVP.

Confirme versões, SDKs, capacidade de plataforma e comandos reais no ambiente; não instalar “a última versão” cegamente ou supor modelo habilitado. SDKs com segredos ficam no servidor. Não é necessário reescrever código para coincidir literalmente com os nomes abaixo.

Estrutura sugerida: `src/modules/focus/domain`, `application`, `infrastructure` e componentes de apresentação, reutilizando `src/server`, `/api/v1`, `supabase/migrations`, testes e design system do projeto. Separar estados/regras puros de React e do relógio concreto.

### 7.2 Entidades existentes e novas

Reutilizar `tasks`, `task_steps`, `occurrences`, `routine_runs`, `routine_run_steps`, `focus_sessions`, `captures`, `ai_proposals`, preferências, outbox e jobs. Uma tarefa, sua ocorrência e uma execução de rotina são conceitos diferentes; o vínculo da sessão deve identificar o alvo correto.

Não criar várias cópias do mesmo passo para simular progresso. Durante execução de rotina, manter o snapshot da execução, não alterar seu template. Durante sessão de tarefa comum, referenciar o passo canônico e tratar revisão/conflito da origem. Distinguir snapshot de exibição, objetivo da sessão e dado canônico.

Campos propostos a adaptar via migração, sem duplicar tabelas equivalentes:

| Entidade | Campos/regras |
| --- | --- |
| `focus_sessions` | ID, proprietário autenticado, alvo tipado/autorizado, passo opcional, objetivo da sessão, estado, modo temporal, duração planejada nullable, indicador temporal, dispositivo/epoch de execução, revisão, timestamps e encerramento. |
| Segmentos da sessão | Início/fim, motivo de fechamento técnico, ordem e duração derivada; intervalos não negativos e sem pausa contabilizada. |
| Ponto de retorno | Passo/ref autorizada, nota opcional, origem/revisão; contexto mínimo e dependência de autorização da fonte. |
| Captura privada | Texto, origem `focus`, proprietário, sessão opcional e estado de sincronização; reutilizar captura do núcleo. |
| Avaliação voluntária | Ação útil autorrelatada, esforço/sobrecarga e duração declarada opcional; não misturar com escore clínico. |
| Preferências | Duração, visualização, detalhe, áudio, avisos e validade temporária/global; revisão e controle do usuário. |

Documentar tipos, nullability, PK/FK, constraints, índices, autorização, retenção e transições. Usar associações tipadas com integridade real; um campo JSON de IDs ou um `target_type` sem validação não deve contornar acesso/integridade entre espaços. UUID recebido do cliente não prova autorização.

### 7.3 Regras que precisam ser invariantes

1. Sessão, tarefa, passo, ocorrência e regra recorrente têm estados separados.
2. Passo pulado não é concluído. Tempo esgotado não é realização.
3. Mutação da origem revalida versão e acesso; snapshot não concede permissão permanente.
4. Uma sessão sincronizada em execução por usuário; troca explícita ou assumir execução usa transação.
5. Conflito não causa perda silenciosa de nota, avanço ou captura.
6. Sem IA, push, áudio ou jogos, o núcleo continua funcional.
7. Nenhum estado de interface afirma sincronização ou entrega não verificada.
8. Não medir atenção por aba, câmera, microfone, digitação ou tempo aberto.
9. Compartilhar tarefa não abre sessões/notas privadas.
10. “Dia menor” não muda prazo real nem apaga obrigação.

## 8. Máquina de estados e semântica do tempo

### 8.1 Estados

Estados de sessão: `ready`, `running`, `paused`, `needs_review`, `ended`.

| Comando/situação | Transição | Efeito |
| --- | --- | --- |
| Começar | ready → running | Abrir segmento quando modo temporal o exigir; persistir versão/contexto. |
| Pausar | running → paused | Fechar segmento; guardar ponto de retorno sem exigir nota. |
| Retomar | paused → running | Verificar outra execução; abrir segmento novo da mesma sessão. |
| Tempo previsto termina | running → running | `budget_elapsed=true`; mostrar escolha discreta, sem concluir ou parar por inferência. |
| Volta com registro temporal incerto | running/paused → needs_review | Preservar progresso; resolver registro de tempo sem diagnosticar inatividade. |
| Revisar e continuar | needs_review → paused ou running | Confirmar/ajustar/omitir duração; running exige assumir execução atomicamente. |
| Encerrar | estado não terminal → ended | Fechar execução; resultado explícito, pendências preservadas. |
| Trabalhar após sessão encerrada | nova sessão | `ended` não volta a running; referência anterior pode ser reaproveitada se autorizada. |

Resultados separados: `step_done`, `task_done`, `partial`, `save_for_later`, `stopped`. `task_done` exige o comando de conclusão do domínio e confirmação correspondente. Não usar “abandono” como fracasso na interface. Sessão terminal sem resultado declarado não recebe conclusão inventada.

Pause reason é contexto opcional/técnico: não exigir motivo clínico nem tratá-lo como diagnóstico. Estado da tarefa pode seguir regra existente de início, mas jamais receber `done` apenas pelo start/timer.

### 8.2 Modos e exibição

Separar `timing_mode` (timed/untimed) de `timer_display` (countdown/elapsed/hidden). Ocultar números numa sessão temporal não elimina nem reinicia seu registro. Modo untimed não requer medição detalhada de duração para permitir progresso/retomada; manter só timestamps operacionais necessários e duração declarada opcional.

Passar de modo temporal para untimed no meio da sessão preserva os segmentos já existentes, sem convertê-los em atenção medida. Passar a medir depois inicia segmento a partir da escolha, sem inventar duração anterior. Registrar essa decisão de contrato e testar.

### 8.3 Relógio e retomada após lacuna

Usar instantes UTC, segmentos persistidos e acumulado derivado. Para exibição ativa, utilizar relógio monotônico quando pertinente e offset/horário de servidor validado; não usar quantidade de callbacks como tempo real. `setInterval` é apenas apresentação. Tratar suspensão, mudança relevante de relógio e comandos fora de ordem.

Distinguir tempo decorrido administrativo, duração de atividade declarada e atenção real, que o sistema não mede. Nenhum deles deve ser confundido com o outro em banco, métricas, texto ou exportação.

Default técnico proposto: ao reabrir depois de lacuna superior a 30 minutos sem confirmação de atividade do usuário, ou diante de inconsistência de relógio, oferecer revisão do registro temporal. É gatilho de qualidade do registro, não detector de distração e não limite de trabalho permitido. Atualizações automáticas de tela não contam como confirmação humana; não criar popups periódicos para colher confirmações.

Mostrar “A sessão ficou aberta. Quer ajustar o tempo ou continuar sem registrar duração?”. Permitir confirmar intervalo, informar duração própria ou deixar desconhecido. Sem resposta, não contabilizar candidato como trabalho confirmado. Progresso e retomada não dependem de informar tempo. Não forçar abandono de trabalho porque a tela ficou apagada.

Esse default deve constar no ADR e ser configurável/testado. Não criar quantidade arbitrária de horas de foco ao voltar depois de dias. Não limitar duração pelo teto de cinco minutos como se isso comprovasse trabalho realizado.

### 8.4 Outra sessão e outro aparelho

Uma restrição/controle transacional garante uma sessão sincronizada `running` por usuário. Pausadas podem existir sem monopolizar execução. `needs_review` não deve prender a pessoa a um registro antigo; pode revisá-lo sem impedir iniciar outra atividade, respeitando unicidade ao voltar a running.

Se já existe running, mostrar a execução ativa e oferecer retomar/assumir ou salvar a anterior para depois e começar outra. O comando de troca pausa a anterior e inicia a nova atomicamente, com versões esperadas; não encerrar ou descartar outra sessão automaticamente.

Assumir no segundo dispositivo incrementa versão/epoch de execução. Comandos do aparelho antigo não sobrescrevem o novo estado silenciosamente. Anotações privadas independentes não podem ser descartadas só porque a execução foi assumida. Resolver reenvio, ordem, ownership e conflitos por tipo de operação.

## 9. Persistência, API, sincronização e offline

Implementar casos de uso: preparar sessão, iniciar, pausar, salvar ponto, retomar, trocar/assumir execução, anotar distração, ajustar objetivo/tempo, marcar passo, encerrar, consultar estado e reconciliar pendências. Usar contratos reais da API existente, validação de entrada/saída, autorização e transações.

Cada mutação tem ID/chave idempotente, versão esperada, proprietário derivado da autenticação e alvo autorizado. Escopar idempotência por usuário/operação e verificar payload; reutilizar a mesma chave com conteúdo incompatível retorna conflito. Retry de um comando já confirmado retorna o mesmo resultado; não duas sessões ou capturas.

Padronizar erros compreensíveis: autenticação necessária, sem acesso/não encontrado sem revelar dados, versão conflitante, execução em outro dispositivo, proposta expirada, armazenamento local indisponível, limite, recurso externo indisponível e erro temporário. Não enviar stack trace/segredo ao cliente. Tratar sessão expirada sem apagar texto local e sem replicar para a conta errada.

### 9.1 Garantias iniciais e extensão offline

O núcleo anterior garantia captura textual offline; esta versão recomenda estender para execução pessoal já carregada. Registrar a extensão no plano/ADR e implementá-la na etapa MP07. Não anunciar paridade offline antes dos testes. Conteúdo compartilhado/sensível continua fora do cache inicial de sessões.

Para sessões pessoais: persistir localmente o contexto mínimo e comandos pendentes no IndexedDB separado por usuário; confirmar honestamente “salvo no aparelho”. Sincronizar em ordem compatível por agregado, com IDs estáveis e cursor/controle de versão. Refresh/atualização do service worker não pode apagar fila ou trabalho não sincronizado.

Concluir localmente um passo não significa que o servidor confirmou. Tombstone, exclusão de conta, mudança de autorização e versão da origem são revalidados. Se uma operação não puder ser aplicada, oferecer revisão/cópia autorizada, preservando anotações próprias legítimas; não executar contra alvo revogado.

### 9.2 Conflitos offline

Dois aparelhos desconectados podem iniciar sessões sobrepostas: não prometer lock global sem conexão. Ao reconectar, identificar sobreposição, preservar ambos os registros e marcar o período para revisão. Não somar duração duplicada nem apagar notas para satisfazer unicidade. O usuário escolhe como registrar as atividades; qualquer nova execução sincronizada respeita o lock.

Testar edições fora de ordem, replay, cursor expirado, horário incorreto, arquivo atualizado com fila pendente, dispositivo sem espaço e retorno com login expirado. Não resolver tudo por last-write-wins em texto, progresso ou conclusão.

### 9.3 Limites da plataforma

Uma PWA não tem garantia de alarme exato em segundo plano, entrega de push ou bloqueio de outros apps. Expor apenas capacidades testadas. Integrações específicas e eventual cliente móvel usam os mesmos contratos, com implementação nativa quando necessária; não duplicar regras de negócio.

## 10. Inteligência artificial: entradas, saída e ações permitidas

### 10.1 Capacidades e contexto mínimo

Capacidades iniciais: `first_step`, `breakdown`, `clarify`, `reduce_scope` e `resume_plan`, a mapear para o catálogo de IA já existente sem duplicação. A IA oferece conteúdo; o servidor executa comandos de negócio depois da escolha válida.

Enviar tarefa/passo pertinentes, progresso confirmado, objetivo solicitado, restrições declaradas, disponibilidade que a pessoa informou e preferências autorizadas. Data de referência, identidade e permissões vêm do servidor. Não enviar automaticamente finanças, diagnóstico, conversas de casal, todas as notas ou histórico de distrações.

Pedido vago “resolver aquilo”: pedir uma pergunta útil ou permitir seleção manual. Nunca fabricar uma lista para preencher o schema. Uma pergunta por vez por conveniência de UX; se persistir ambiguidade relevante, continuar esclarecendo ou oferecer caminho manual, sem aplicar suposições escondidas.

### 10.2 Contrato de proposta

Definir schema estrito e versionado, compatível com o provedor real. Exemplo de contrato de negócio, não parâmetro presumido de SDK:

```json
{
  "schema_version": "1",
  "outcome": "proposal",
  "summary": "Começar pelas roupas da cadeira",
  "question": null,
  "assumptions": ["A proposta pode ser ajustada ao seu espaço."],
  "recommended_first_step_key": "s1",
  "steps": [
    {
      "local_key": "s1",
      "title": "Juntar as roupas que estão na cadeira",
      "done_when": "As roupas da cadeira foram reunidas no local escolhido",
      "estimated_minutes_range": null,
      "depends_on": []
    }
  ]
}
```

Outcomes: proposal, clarify e out_of_scope. Falha técnica/indisponibilidade é tratada pelo aplicativo, não precisa ser inventada pelo modelo. Em clarify não preencher passos falsos. Referência recomendada precisa existir; dependências sem ciclos; estimativas opcionais, faixas válidas e rotuladas como ajustáveis.

Limite inicial de até três passos propostos por chamada curta; mais detalhe por solicitação explícita. Não cortar silenciosamente etapas essenciais de uma tarefa ou omitir advertência relevante para caber no número. Nesse caso, restringir o escopo proposto e explicar o restante, ou esclarecer a tarefa.

O contrato do provedor pode usar campos obrigatórios/nullable e envelope compatível; valide semanticamente no servidor mesmo quando o formato JSON for garantido. IDs persistidos, owner, escopo e permissões não são aceitos como autoridade vindos do modelo.

### 10.3 Revisão e aceitação

Mostrar prévia: editar, excluir, reordenar, aceitar uma parte, cancelar. Aceitação não pode criar novamente um passo existente ou converter automaticamente toda proposta em projeto. A pessoa escolhe se usará só o objetivo da sessão ou salvará passos na tarefa, com efeito visível.

Reutilizar `ai_proposals`: usuário/escopo, fontes e revisões, modelo/prompt/schema, validade e estado. Default de expiração de 24 horas já proposto no plano global, configurável. Na aceitação, revalidar sessão, origem, autorização e versões; aplicar seleção validada em transação e com idempotência. Resolver dependências de itens não selecionados na prévia.

O modelo não acessa SQL livre, credenciais, cliente administrativo ou ferramenta genérica de execução. Não pode declarar tarefa feita, alterar dose, pagar conta, mudar prazo real, contatar parceiro ou remanejar compromisso sozinho. Texto em tarefa/anexo é dado, não instrução para elevar privilégios.

### 10.4 Falhas, custos e memória

Sem chave/cota/provedor: “A ajuda automática não está disponível agora. Você pode escrever o primeiro passo e começar”. Preservar texto e caminho manual; não usar resposta de fixture como se fosse IA real.

Timeout, recusa, schema inválido e erro semântico têm tratamento e registro técnico separados. Retry limitado por política; não loop automático de conversa ou reparo. Reservar cota atomicamente e tratar consumo desconhecido após timeout conforme o núcleo. Sem segredos no cliente, logs ou checkpoint.

Memória só para preferências explícitas, visíveis, corrigíveis, desligáveis e apagáveis. Não salvar inferência clínica nem supor que uma dificuldade de hoje vale sempre. Exemplo aceitável: “Você escolheu ocultar o tempo nas últimas sessões. Quer salvar essa preferência?”. Não dizer que o TDAH melhorou/piorou por métricas.

### 10.5 Avaliações mínimas de conteúdo

Criar conjunto versionado de casos em português, separado de dados de usuários. Incluir:

- Arrumar quarto, só arrumar cama e objetivo menor que a tarefa ampla.
- Tempo disponível curto, sem materiais confirmados e restrição física declarada.
- Pedido vago que exige esclarecimento; vocabulário coloquial e texto com erros.
- Usuário quer menos detalhe ou recusa IA.
- Proposta com tempo preciso injustificado, etapas excessivas ou dependência cíclica.
- Retomada com progresso já feito; origem editada em outro aparelho.
- Pedido de alterar medicação ou inferir quadro clínico.
- Tarefa financeira: organizar documento sem registrar pagamento fictício.
- Conteúdo tentando acessar notas de outra pessoa ou sobrepor autorização.
- Restrição sobre produtos de limpeza, sem instruções perigosas.
- Falha de provedor, recusa, cota, expiração e confirmação duplicada.

Avaliar adequação, tamanho, aderência ao objetivo, restrições, privacidade, correção e utilidade. Taxa de aceitação não comprova que uma sugestão está correta. Mudança de modelo/prompt exige reavaliar casos afetados e smoke real quando houver credencial.

## 11. Notificações, dados e privacidade

Avisos do módulo desligados por padrão até escolha específica. Pausa não agenda cobrança sozinha. A pessoa escolhe horário/contexto de retorno; usar pipeline persistente, fuso, silêncio e consentimentos do núcleo.

Um aviso ignorado não vira sequência de insistências. Adiar é uma escolha explícita. Cancelar jobs ao encerrar/remarcar/revogar acesso; revalidar estado/versão na hora de enviar. Deep link não revela recurso sem autorização. Tela bloqueada pode mostrar mensagem discreta sem título sensível. Distinguir aceitação pelo provedor de entrega/abertura observável.

Durante foco, reduzir estímulos internos não essenciais. Não suprimir indiscriminadamente compromissos reais, avisos importantes ou contatos necessários; manter prioridades escolhidas e regras já existentes. Não prometer controle sobre notificações de outros aplicativos sem integração real.

Sessões, pontos de retorno, distrações e avaliações são dados privados. RLS e API precisam proteger relações pai/filho, busca, contagens, exportação e derivados. Nenhum papel do espaço compartilhado abre automaticamente histórico privado. Preservar a origem autorizada dos dados e retirar snapshots dependentes de conteúdo revogado; não continuar expondo o texto porque foi copiado.

Conteúdo compartilhado não entra no offline inicial. Após logout/troca de conta, limpar/segregar cache e filas para impedir vazamento. Revogação não apaga magicamente bytes de dispositivo desconectado; documentar limite e limpar na reconciliação. Não alegar criptografia ponta a ponta sem implementá-la e avaliá-la.

Incluir novos dados em exportação, exclusão idempotente e política real de retenção do núcleo. Documentar finalidade/base aplicável, fornecedor e dados enviados; saúde é dado sensível e não precisa ser coletada para foco. Consentimentos opcionais para IA/pesquisa são separados do uso básico. Textos legais pendentes de revisão permanecem identificados, sem falsa certificação.

Logs operacionais usam metadados mínimos, sem texto de tarefa, nota, captura, segredo ou conteúdo de IA. Pesquisa com pessoas não usa conversas de clientes ou dados de terceiros como material de teste.

## 12. Evoluções e experimentos: contratos antes da ativação

### MF08 e MF16 — estimativas e padrões pessoais

Depois do núcleo, permitir estimativa opcional por faixa e duração declarada após sessão. Comparar só atividades/escopos suficientemente semelhantes, distinguindo pausas e registros incertos. Mostrar quantidade de observações e limites de comparabilidade. Escolher e documentar o mínimo de observações antes de sugerir padrão; não inventar previsão robusta com um ou dois eventos.

Oferecer “Quer ajustar a duração habitual?”, com antes/depois, motivo e desfazer. Sugestão aceita atualiza apenas a preferência pretendida; não reprograma dias, compromissos ou prazos. “Disponibilidade hoje” só quando declarada, temporária e reversível. Não calcular gravidade de TDAH ou classificar pessoa por desempenho.

### MF12 — áudio opcional

Silêncio padrão; controle simples de play/pause/volume, sem autoplay, feed ou reprodução infinita necessária. Fonte de áudio própria/licenciada e origem documentada. Se gerar ruído localmente, documentar geração/limites sem afirmar nível físico de volume que o app não consegue medir. Permitir parar imediatamente e testar sensibilidade/competição com leitura.

Separar branco/rosa, música e ruído marrom na comunicação; não afirmar equivalência ou efeito clínico. Testar preferência com tarefas comparáveis, sem recomendar aumentar volume ou escolher “frequência para dopamina”. Não deixar um áudio oculto tocando após encerramento/logout. Falha de áudio não afeta sessão/progresso.

### MF13 — bloqueio externo

Primeiro, oferecer orientação discreta para o foco do aparelho se solicitada. Integração real exige adaptador para capacidade específica, permissões e teste. Prever lista permitida, duração, desbloqueio e acessibilidade. Não bloquear serviços necessários à própria tarefa, autenticação ou comunicação importante.

Separar “modo visual de foco” de “bloqueio de sites/apps”. Se indisponível, mostrar isso honestamente ou ocultar a oferta; não entregar botão de bloqueio cenográfico. Extensão/nativo é evolução específica, não justificativa para reescrever o núcleo.

### MF14 — reconhecimento e jogo

Progresso sóbrio existe em P0; jogo fica desligado até experimento definido. Recompensa escolhida pela pessoa, sem ranking, aposta, loot, perda de pontos/árvore, punição por ausência ou pressão para não interromper. Não condicionar alimentação, sono ou descanso a produtividade.

Avaliar se distrai ou aumenta manutenção. A pessoa pode desligar sem perder seus dados e sem prejuízo funcional. Não apresentar estudo de jogo pediátrico como demonstração de pontos em tarefas de adultos.

### MF15 — presença acompanhada

Começar por convite privado a pessoa de confiança, compartilhando apenas intenção/hora/duração consentidas. Sessões continuam individuais; sair, pausar ou recusar não afeta histórico do outro. Sem avaliação de atenção, câmera obrigatória, gravação padrão ou exposição de notas/finanças/título privado não selecionado.

Revalidar convite, expiração, revogação e quem vê cada campo. Para vídeo, definir provedor, consentimento, cancelamento de acesso, bloqueio/denúncia e proteção do ambiente. Sem pareamento público com desconhecidos ou rede social no MVP. Não apresentar IA/mascote como pessoa real ou equivalente comprovado à presença humana.

Cada experimento precisa de flag desativada por padrão, hipótese, público, métrica de benefício, risco de sobrecarga e critério de retirada. Planejamento não autoriza coleta contínua nem estudo clínico sem os requisitos correspondentes. Não bloquear o núcleo por falta de experimento humano; registrar o que ainda não foi validado.

## 13. Plano de execução por etapas verificáveis

Em cada fase: ler contratos pertinentes; implementar uma fatia completa; executar checks proporcionais; atualizar estado e seguir trabalho independente autorizado. Se a fundação global correspondente ainda não existe, implementá-la antes. Não repetir tarefas válidas nem forçar leitura integral de todo o acervo em cada retomada; usar checkpoint mais contrato atual, consultando a pesquisa conforme necessidade.

| Fase | Dependências e trabalho | Entrega e saída verificável |
| --- | --- | --- |
| MP00 Inventário e contratos | Repositório, pesquisa, plano F00–F22, regras, assets e testes | Mapa MF01–MF16/FOC01–FOC40, ADRs de dados/tempo/offline e recorte da próxima fatia. Prosseguir com implementação possível. |
| MP01 Domínio, dados e acesso | Base global F01–F05 conforme necessidade | Migrações e estado real, referências consistentes, RLS, idempotência e testes de invariantes/isolamento. |
| MP02 Primeiro ciclo manual | MP01; F02/F06 | Hoje/tarefa → ação → começar → encerrar parcial/concluir explicitamente, persistido. Sem IA e sem cadastro extra. |
| MP03 Pausa, tempo e retorno | MP02 | Segmentos corretos, pausa sem nota, refresh, lacuna/revisão, timer opcional e troca de aparelho verificáveis. |
| MP04 Distrações, redução e progresso | MP02–MP03 | Captura privada, volta ao contexto, redução sem alterar prazo e estados de passos/ocorrências corretos. |
| MP05 IA opcional | Contratos manuais + F07 | Proposta estruturada/curta, seleção parcial, versão, limite, falhas e avaliações. Smoke real condicionado a credencial segura. |
| MP06 Avisos escolhidos | Contratos de sessão + F08 | Jobs reais, silêncio, cancelamento, deduplicação e acesso. Sem push real, registrar verificação externa pendente. |
| MP07 Offline e concorrência | MP01–MP06 conforme contratos + F09 | Escopo pessoal implementado, fila por usuário, reconciliação, conflito e ausência de duplicação/perda; limites declarados. |
| MP08 Qualidade e piloto preparado | MP02–MP07 + F10/F11 | Acessibilidade, exportação/exclusão, logs, ambiente reproduzível e aceite crítico. Plano humano preparado; sem alegar validação ainda não realizada. |
| MP09 P1 | Núcleo estabilizado e avaliação disponível | MF08 avançado, MF12 e MF16 sob controle/flags e hipóteses; testes de preferência, reversão e não inferência clínica. |
| MP10 P2/F21 | Decisão de experimento e capacidade de plataforma | MF13, MF14 e MF15 apenas com contratos reais e testes; itens bloqueados continuam no backlog, sem simulação. |

O MVP técnico do módulo é MP00–MP08, com MF09 opcional ao usuário e integração real dependente de configuração. Falta de IA ou push não impede desenvolver o restante; impede declarar aquele recurso verificado. Não habilitar implementação falsa em produção para marcar fase concluída.

## 14. Testes e definição de pronto

Executar os 40 casos FOC01–FOC40 em `docs/foco/MATRIZ_DE_COBERTURA_E_ACEITE_FOCO.md`, extraídos da pesquisa, além dos cenários globais pertinentes. Eles estão inicialmente planejados, não executados. Manter IDs e rastreabilidade; não renumerar os 219 cenários anteriores.

Complementar com: troca entre ocultar tempo e untimed; revisão de duração desconhecida sem bloqueio; falha local de armazenamento; payload diferente com mesma chave; comando do aparelho anterior após takeover; troca de dia/fuso; revogação durante geração de IA; objetivo reduzido versus tarefa ampla; cancelamento de reminder após encerramento; áudio desligado/logout; sobreposição offline; mudança de template da rotina.

| Camada | Testes úteis |
| --- | --- |
| Domínio | Transições, pausas, limites, tempo irregular, estados terminais, conclusão explícita e alvo de recorrência. |
| Banco/API | RLS, vínculos entre escopos, transação, unicidade, concorrência, idempotência e exclusão. |
| Interface/E2E | Ciclo manual, captura, redução, negação de permissão, refresh, erro e retomada. |
| Sincronização | Reenvio, desconexão, ordem, conflitos, logout/troca de usuário e atualização com fila. |
| IA | Schema + semântica, objetivo, edição/seleção, falhas, acesso, custo e idioma. |
| Acessibilidade | Ferramentas automáticas mais teclado, leitor de tela, contraste, ampliação e inspeção humana. |
| Operação | Migração local limpa, configuração, jobs, logs sem conteúdo e limites de capacidades. |

Usar relógio injetável/controlável e cenários que exercitem comportamento, não testes que apenas repitam implementação. Não exigir testes redundantes de texto decorativo. Não executar tudo repetidamente sem mudança/falha relevante; selecionar checks proporcionais e concluir o trabalho.

Uma funcionalidade só está **verificada tecnicamente** quando UI, regra, persistência, autorização e falhas aplicáveis foram exercitadas e registradas. “Implementado”, “verificado localmente”, “smoke externo pendente” e “validado com usuários” são estados distintos.

Sem falha conhecida crítica de isolamento, perda de progresso, conclusão indevida, cache cruzado ou alteração de obrigação real antes do piloto. Um conjunto de testes aprovado não prova segurança absoluta nem benefício clínico.

## 15. Validação de utilidade e instrumentação

Preparar entrevistas/cocriação com aproximadamente 12–20 adultos, ciclos de usabilidade de 5–8 e piloto exploratório de aproximadamente 30–50 pessoas por quatro a seis semanas, conforme a pesquisa. São propostas operacionais, não tamanhos suficientes para provar eficácia ou comparar apresentações.

Incluir pessoas predominantemente desatentas e outros perfis, quem não gosta de timer, diferentes escolaridades, rotinas e modos de acesso. Produto não exige laudo. Informações clínicas para pesquisa são opcionais/consentidas e separadas do uso básico; não inferir diagnóstico pela navegação. Não alterar ou retirar tratamento.

| Medida | Definição e limite |
| --- | --- |
| Início útil | Ação considerada útil iniciada na oportunidade definida pela pessoa; clique em Começar não comprova execução. |
| Esforço para começar | Pergunta voluntária curta de 1–5, em amostra de sessões, sem valor diagnóstico. |
| Retomada | Entre interrupções com intenção de voltar, retorno à ação e esforço de reorientação; app fechado não define sozinho interrupção. |
| Resultado | Critério e escopo definidos antes; conclusão confirmada e progresso parcial significativo. |
| Sobrecarga | Manutenção do sistema, avisos, culpa ou distração provocada; permitir não responder. |
| Autonomia | Escolher, recusar e fazer sem app pode representar benefício. |
| Confiabilidade | Perda, duplicidade, conflito, aviso obsoleto e falha de sincronização. |

Não usar só retenção, minutos ou frequência de acesso. Não aumentar sessões, notificações ou dependência da IA como objetivo de otimização. Duração desconhecida é desconhecida; ausência de resposta não vira fracasso nem sucesso. Definir denominadores, elegibilidade, janelas e dados faltantes antes da análise; medidas da mesma pessoa não são observações independentes.

Comparar uma hipótese por vez: ponto de retorno versus lista competente; timer opcional versus sem contagem; IA versus template manual competente. Considerar ordem, novidade e aprendizagem; desenho com efeitos duradouros pode exigir comparação paralela. Não produzir ensaio controlado fictício nem resultados humanos simulados.

Meta provisória de usabilidade: pelo menos 80% conseguem iniciar e retomar sem ajuda nos cenários centrais, a pactuar. É alvo de produto, não limiar clínico. Benefício cotidiano exige diferença útil definida com participantes/pesquisador e custo de manutenção aceitável. Se aumentar pressão, sobrecarga ou vigilância, ajustar ou retirar o recurso.

Coleta para pesquisa/publicação e eventual estudo clínico exigem desenho, responsáveis e avaliação ética aplicável antes de recrutar. A implementação não concede essa validação por si só. Preparar roteiro e instrumentos, sem bloquear código independente por falta de participantes.

## 16. Documentação e continuidade do trabalho

Criar/atualizar de forma concisa e verdadeira:

- `docs/foco/IMPLEMENTACAO_FOCO.md`: contratos finais, endpoints, estados, privacidade e limites reais.
- `docs/foco/MATRIZ_DE_COBERTURA_E_ACEITE_FOCO.md`: requisitos, testes/arquivos, comandos, resultado e bloqueios.
- `docs/foco/PLANO_E_CONTINUIDADE_FOCO.md`: integração MPxx com Fxx e próximos itens.
- ADRs de divergências/novas decisões em `docs/decisoes/`.
- `docs/ia/` para prompts/schemas/avaliações, e documentação de dados/permissões/operação já existente.
- `docs/validacao/` para protocolo e resultados reais quando existirem.
- `docs/CHECKPOINT.md` e README com comandos reais de execução/teste.

Não reescrever todo o acervo a cada etapa nem copiar o prompt inteiro para uma regra sempre ativa do Cursor. Atualizar regras breves do repositório preservando instruções existentes; confirmar formato atual se for criar `.cursor/rules`. Não introduzir placeholders de funcionalidade como documentação de algo pronto.

No checkpoint, registrar fase, estado real, último teste, arquivo/commit quando disponível, migrações, próximo comando e bloqueio sem valor secreto. Em nova conversa, conferir código e testes antes de confiar no texto do checkpoint.

Relato de entrega: comportamento implementado; requisitos MF/FOC correspondentes; testes executados e resultado; o que não foi executado; dependência concreta; próximo passo. Não dizer “tudo pronto”, “acessível” ou “eficaz para TDAH” sem a verificação correspondente.

## 17. Comando de início

Comece agora pela MP00, verifique o repositório e os materiais, registre o recorte e implemente a primeira fatia possível. Se a base ainda não existe, avance nas fundações globais necessárias antes do módulo. Se já existe, integre sem reiniciar o projeto.

Priorize fazer o ciclo manual funcionar por completo e preservar progresso. Depois acrescente IA, avisos e sincronização conforme dependências, com critérios de teste claros. Mantenha os 16 recursos no planejamento e as evoluções experimentais nas fases indicadas. Avance autonomamente nas próximas etapas autorizadas e mantenha o checkpoint atualizado.
