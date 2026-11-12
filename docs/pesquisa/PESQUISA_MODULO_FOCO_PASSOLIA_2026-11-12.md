# Passólia | Módulo de foco

Pesquisa de evidências e especificação de produto • 12 de novembro de 2026 • Versão 1.0

**Iniciar, sustentar, lidar com distrações e retomar atividades.**

Público inicial: adultos brasileiros com TDAH, com atenção especial às necessidades relacionadas à apresentação predominantemente desatenta. Ferramenta de apoio à organização e à execução; sem diagnóstico, prescrição ou substituição do acompanhamento profissional.

Este documento complementa o pacote da Passólia de 12/11/2026. As recomendações de desenvolvimento e os parâmetros de interface são propostas para validação, não resultados de um teste do produto.

## 1. Decisão recomendada

Construir o módulo em torno de **uma ação concreta e de um ponto de retomada**, oferecendo tempo, pausas e ajuda como recursos ajustáveis. A pergunta principal é: “O que tornaria este próximo passo mais fácil de executar?”.

A sustentação mais consistente vem de intervenções estruturadas para adultos com TDAH que combinam organização, planejamento e estratégias comportamentais. Isso não permite atribuir eficácia clínica a um checklist, timer ou aplicativo isolado. Diretrizes recomendam suporte adaptado e intervenções conduzidas por profissionais; a Passólia pode aproveitar princípios de organização sem se apresentar como terapia. [E04–E08]

Na primeira versão, priorizar:

- Escolher uma tarefa e definir a próxima ação sem questionário obrigatório.
- Começar com ou sem timer, mantendo a duração ajustável.
- Salvar progresso e contexto antes, durante e depois de interrupções.
- Anotar uma distração sem sair da tarefa nem criar uma obrigação automaticamente.
- Reduzir o escopo em um dia difícil, preservando prazos e compromissos reais.
- Encerrar com progresso parcial e poder voltar sem penalidade.
- Usar IA apenas como ajuda opcional para esclarecer e propor passos revisáveis.

Sons, recompensas, gamificação, bloqueadores externos e presença acompanhada devem ser opcionais e avaliados separadamente. Uma interface mais estimulante não é necessariamente mais útil. Os resultados de pausas, música e acompanhamento social variam por contexto; a evidência para adultos e para uso cotidiano é desigual. [E18–E21, E25–E29]

**Benefício a testar:** menor dificuldade para começar e retomar ações que a pessoa considera importantes, com esforço de manutenção e sobrecarga aceitáveis. Minutos registrados e frequência de acesso não comprovam esse benefício.

## 2. Método, escopo e limites da pesquisa

Foi feita uma busca web estruturada em 12/11/2026, direcionada a diretrizes oficiais, registros PubMed/PMC, páginas de periódicos e publicações dos próprios pesquisadores. Foram priorizados adultos com TDAH; resultados em crianças, universitários sem seleção clínica e população geral estão identificados como evidência indireta quando aplicados ao público do produto.

Os temas pesquisados incluíram organização e TCC, intervenções digitais, percepção temporal, memória prospectiva, interrupções, lembretes, pausas/Pomodoro, ruído, música, gamificação, body doubling e IA generativa. Consultas representativas:

- `adult ADHD digital intervention randomized controlled trial 2025 2026`
- `ADHD organization time management planning adults randomized trial`
- `ADHD white pink noise systematic review meta-analysis`
- `ADHD body doubling controlled study EEG`
- `Pomodoro self-regulated breaks task completion students`
- `ADHD SMS reminders adherence randomized`
- `ADHD generative AI task decomposition adults study`
- `cognitive accessibility focus interruptions W3C`

A síntese contém **40 referências principais**, incluindo ciência, diretrizes e documentos institucionais/técnicos. Não se somaram participantes entre revisões sobrepostas. Popularidade, avaliações de lojas e depoimentos comerciais não foram usados como demonstração de eficácia.

Esta é uma **síntese crítica de escopo para decisão de produto**, não uma revisão sistemática exaustiva registrada. Houve uma única síntese, sem triagem independente por dois revisores, extração duplicada ou nova metanálise. Não se afirma cobertura de todos os estudos existentes. Artigos encontrados com acesso restrito ou bloqueado foram usados somente no nível de informação efetivamente recuperado; o catálogo informa o nível de acesso.

O julgamento de certeza aplicado às funcionalidades é narrativo: considera desenho, comparador, viés, amostra, duração, população e proximidade do desfecho com o uso pretendido. **Não corresponde a uma nova avaliação GRADE formal.** Quando uma revisão já apresenta GRADE, isso é atribuído aos autores.

Nenhuma entrevista, teste de aplicativo, estudo clínico ou validação com usuários da Passólia foi realizado nesta pesquisa.

### 2.1 Quatro classes de transferência para o produto

| Classe | Significado | Exemplo e limite |
| --- | --- | --- |
| TDAH direto | Estudado em pessoas com diagnóstico ou sintomas definidos de TDAH | TCC estruturada, alguns programas digitais e ruído em testes. O pacote, a idade e o contexto importam. |
| Geral/indireto | Estudado em população sem seleção por TDAH | Pausas, lembretes externos e planos de retorno. Exige validação para adultos com TDAH. |
| Promissor/limitado | Pilotos, estudos descritivos ou transferência ainda incerta | Body doubling, IA generativa e gamificação de tarefas cotidianas. |
| Alegação não sustentada | A promessa excede a evidência recuperada | “25 minutos é o tempo ideal para todo TDAH”, “mede seu foco real”, “normaliza dopamina”, “IA detecta piora clínica”. |

Uma estratégia pode ter evidência na primeira classe e sua implementação específica na Passólia continuar experimental. Evidência de um programa digital não valida automaticamente outro programa, outra versão, um modelo generativo ou cada componente separado.

## 3. Contexto da Passólia e decisões preservadas

Foram recuperados o pacote atual, o prompt mestre, a consolidação de decisões, as duas pesquisas anteriores, a matriz de aceite e os tokens/ativos da marca. A revisão concentrou-se nos requisitos que afetam foco, tarefas, IA, privacidade e retomada.

| Já previsto no material atual | Aplicação neste módulo |
| --- | --- |
| RF04: tarefas e passos; RF06: ocorrências | Referenciar entidades existentes; concluir uma sessão não conclui tarefa nem todas as repetições. |
| RF07–RF09, F06 | Integrar Hoje, execução, pausa e retomada; evitar um segundo gerenciador de tarefas. |
| RF10–RF11, F07 | IA propõe; regras validam; pessoa revisa; alternativa manual permanece. |
| RF12, F08 | Reutilizar preferências, silêncio, jobs e deduplicação dos avisos. |
| RF13, F09 | Preservar contratos de sincronização; offline de sessões é uma extensão proposta, pois a garantia inicial anterior era captura textual. |
| RF14–RF15, F10–F11 | Dados controláveis, métricas de utilidade, acessibilidade e piloto. |
| RF26, F21 | Manter gamificação e body doubling como experimentos opcionais posteriores. |
| RF29 | Usar Passólia, SVGs oficiais, Manrope e tokens atuais. |

**Premissas de engenharia:** PWA responsiva primeiro e monólito modular Next.js/TypeScript/Postgres/Supabase são as recomendações do pacote, não escolhas clínicas nem stack já implementada. Não há repositório de aplicativo disponível nesta tarefa; o estado real do código não foi auditado. O Cursor deverá inventariá-lo antes de implementar.

Preservar três focos ajustáveis em Hoje e o convite pulável de retomada após sete dias, já propostos no material. O módulo mostra uma próxima ação durante a execução; isso não substitui a visão do dia nem oculta obrigações vencidas.

## 4. TDA, TDAH e dificuldades de execução

“TDA” costuma ser usado popularmente para o quadro em que a desatenção chama mais atenção que a hiperatividade. A nomenclatura clínica atual usa **TDAH**, com apresentações predominantemente desatenta, predominantemente hiperativa/impulsiva e combinada. O antigo termo inglês ADD é desatualizado como nome diagnóstico. “TDA” não deve virar uma quarta apresentação no cadastro. Reconhecer o termo na busca e explicar sua relação com TDAH, sem concluir diagnóstico a partir da palavra utilizada. [E01, E02, E39]

A ausência de hiperatividade evidente não significa ausência de dificuldades importantes. A apresentação e as necessidades podem mudar; os estudos de intervenção frequentemente agrupam apresentações e não oferecem estimativas confiáveis específicas para adultos predominantemente desatentos. Portanto, **não há base suficiente nesta pesquisa para prescrever um timer ou perfil visual exclusivo para essa apresentação**. Personalizar pela necessidade relatada e pelos ajustes escolhidos. [E02, E05, E12, E13, E26]

| Dificuldade possível | Exemplo cotidiano | Apoio proposto |
| --- | --- | --- |
| Iniciar e escolher | “Organizar documentos” exige descobrir onde começar | Próxima ação observável: “abrir a pasta de documentos recebidos”. |
| Sustentar a atenção | Perder o fio ao ler ou fazer uma tarefa repetitiva | Menos estímulos, referência visível e duração ajustável. |
| Memória de trabalho/instruções | Esquecer uma etapa de uma receita ou orientação de trabalho | Instrução curta consultável e passos externos. |
| Memória prospectiva | Lembrar que precisa enviar algo, mas não no momento oportuno | Lembrete contextual escolhido e ação acessível. |
| Organização e sequenciamento | Começar a limpeza por uma etapa que exige retirar objetos antes | Sequência editável com dependências necessárias. |
| Percepção/estimativa de tempo | Planejar a saída em cinco minutos sem contar preparação | Estimativa revisável e preparação separada do deslocamento. |
| Frustração e esforço | Desistir ao perceber que a tarefa é maior que parecia | Reduzir escopo, pausar e guardar progresso sem reprimenda. |
| Retomada | Depois de atender uma ligação, não lembrar o próximo trecho do relatório | Passo atual, contexto e nota de retorno preservados. |

As manifestações acima não estão presentes da mesma forma em todas as pessoas. A literatura descreve dificuldades de atenção, organização e execução; memória prospectiva, aspectos emocionais e processamento temporal acrescentam necessidades relevantes, com variação entre tarefas e estudos. [E03, E15–E17]

Em casa, isso pode aparecer em roupas parcialmente guardadas; no trabalho, em um relatório aberto sem próxima ação; no estudo, em releitura sem saber o objetivo; na vida pessoal, em preparar-se tarde para um compromisso. São exemplos de design, não testes diagnósticos.

Sono, ambiente, ansiedade, depressão, dor, recursos disponíveis e condições coexistentes também podem afetar a execução. O sistema deve permitir registrar uma restrição prática sem atribuí-la automaticamente ao TDAH. Não traduzir atraso, ausência ou dificuldade em preguiça, piora clínica ou falta de interesse. [E03]

## 5. Síntese crítica das evidências

### 5.1 Organização: apoiar habilidades, sem atribuir o resultado a um botão

A revisão Cochrane de 2018 reuniu 14 ensaios e 700 adultos; encontrou benefícios em algumas comparações, com certeza baixa ou muito baixa e resultados dependentes do comparador. A diretriz australiana de 2022 incorporou estudos adicionais e recomenda intervenções cognitivo-comportamentais para adultos. Comparações contra lista de espera tendem a ser mais favoráveis que comparações contra suporte ativo. [E05, E06]

Ensaios de Safren e Solanto sustentam programas que combinam habilidades de organização, planejamento e manejo de dificuldades. Não isolaram um “primeiro passo de dois minutos” ou um timer como causa suficiente da melhora. [E07, E08]

**Decisão de produto:** decomposição, próxima ação e instruções externas são escolhas fundamentadas em estratégias reconhecidas, com validação própria da interface. Não anunciar o módulo como TCC ou tratamento porque usa listas e planejamento.

### 5.2 Intervenções digitais: já existem ensaios, mas a transferência é limitada

O levantamento de revisões de 2025 encontrou qualidade heterogênea e lacunas de segurança/transferência; a revisão de escopo de 2026 mapeou 133 estudos de tecnologias para adultos. Contar estudos ou tecnologias não estabelece eficácia de um gerenciador de tarefas. [E10, E11]

Dois resultados merecem contraste. O ensaio attexis, de 2026, randomizou 337 adultos e relatou melhora de sintomas e desfechos funcionais com o programa mais cuidado usual. Usou autorrelato, sem cegamento dos participantes, e foi financiado pelo fabricante. O ensaio de Antshel e colegas, com 154 adultos e oito semanas, encontrou melhora de sintomas e qualidade de vida contra lista de espera, **mas não na medida de prejuízo funcional**. [E12, E13]

Outro ensaio alemão de 2026, com 307 adultos, encontrou melhora de qualidade de vida em 12 semanas; era exploratório, com alfa de 10%, adesão baixa e sem diagnóstico padronizado realizado pelo próprio estudo. Não estabelece benefício duradouro ou específico de retomada. [E14]

**Decisão de produto:** há evidência específica para determinados programas digitais; não transferir tamanhos de efeito para a Passólia. Medir ações reais e prejuízo/benefício percebido, além de satisfação com a interface.

### 5.3 Tempo: necessidade real, duração ideal não estabelecida

Metanálise de 55 estudos encontrou diferenças em tarefas de processamento temporal no TDAH. Medir milissegundos ou segundos no laboratório não determina o tamanho ideal de um bloco doméstico ou profissional. [E15]

Pausas curtas tiveram efeitos pequenos sobre vigor e fadiga na população geral, sem melhora global estatisticamente significativa de desempenho. Em estudantes, Biwer (2023) favoreceu pausas estruturadas em parte da experiência subjetiva; estudos de 2025 e 2026 não estabeleceram superioridade geral, e o de 2026 favoreceu pausas autorreguladas em medidas de humor. [E18–E21]

**Decisão de produto:** oferecer tempo ajustável, pausa livre e opção sem contagem. Cinco minutos iniciais e pausas sugeridas de dois a cinco minutos são hipóteses de interface, não doses recomendadas pela literatura.

### 5.4 Lembretes: mais acesso não equivale a execução

No estudo de Nordby, com 109 adultos com diagnóstico autorrelatado de TDAH, SMS adicionais não melhoraram globalmente conclusão dos módulos ou prática das estratégias. Houve alguns efeitos sobre o momento do login. Todos já recebiam aviso de módulo novo, e houve perdas de seguimento importantes. Isso não prova que lembretes nunca ajudam; refuta a suposição de que insistir necessariamente aumenta benefício. [E22]

Experimentos de lembretes externos na população geral sustentam descarregar intenções no ambiente, com transferência limitada para tarefas cotidianas complexas. [E23]

**Decisão de produto:** avisos escolhidos, acionáveis e com controle de frequência. Ignorar um aviso não autoriza aumentar a insistência.

### 5.5 Retomada: hipótese plausível com transferência explícita

Leroy e Glomb estudaram planos breves de retorno em quatro estudos da população geral. O resultado central envolve reduzir resíduo de atenção e preservar desempenho na atividade que interrompe, não comprovar retomada de tarefas por adultos com TDAH. [E24]

**Decisão de produto:** salvar “onde parei” e “qual é a próxima ação” é uma hipótese de baixo atrito, reforçada pela necessidade de memória e organização. Avaliar diretamente o tempo/esforço de reorientação após interrupções.

### 5.6 Sons, presença e IA: resultados promissores não são universais

Ruído branco/rosa mostrou benefício pequeno em testes breves, principalmente em crianças e jovens; música teve estudos e resultados heterogêneos. Pesquisas de body doubling incluem relato de uso, resultado preliminar nulo em leitura e piloto positivo em realidade virtual. Estudos de IA incluem chatbot sem vantagem sobre aplicativo convencional e piloto de IA generativa sem diferenças quantitativas significativas. [E25–E32]

**Decisão de produto:** recursos opcionais, reversíveis e avaliados por tarefa/pessoa. Não usar linguagem neurocientífica para dar certeza a uma preferência individual.

## 6. Análise das estratégias e condições de uso

### 6.1 Dividir tarefas e definir a próxima ação

**Problema:** intenção ampla, muitas decisões e dificuldade de sequenciar. **Funcionamento:** transformar o objetivo em até três ações inicialmente visíveis, cada uma iniciada por um verbo e com resultado observável. Expandir só quando necessário; permitir trabalhar diretamente na tarefa sem decomposição.

Exemplo: em vez de “arrumar o quarto inteiro”, propor “juntar as roupas que estão na cadeira”, “separar para lavar ou guardar” e “guardar apenas as peças escolhidas”. A pessoa edita a ordem e pode escolher só a primeira ação.

**Evidência:** direta para programas estruturados que incluem organização; limitada para a granularidade e apresentação isoladas no app. [E03, E07–E09] **Riscos:** produzir 30 microtarefas, transformar planejamento em fuga da atividade, infantilizar ou acrescentar limpeza que não foi solicitada. **Proteção:** limite inicial de proposta, botão “está detalhado demais” e critérios de parada escolhidos pela pessoa.

### 6.2 Sessões ajustáveis e opção sem timer

**Problema:** uma atividade sem fronteira clara pode parecer difícil de começar. **Funcionamento:** botão primário “Começar”; duração inicial de referência de cinco minutos editável, com alternativas simples “sem contagem” e “ajustar”. Não exigir estimativa do projeto inteiro.

**Evidência:** organização temporal é parte de programas; a superioridade de uma duração específica em adultos com TDAH não foi estabelecida nas fontes recuperadas. [E08, E15, E19–E21] **Riscos:** ansiedade com contagem regressiva, interrupção de trabalho útil, otimizar minutos em vez de ações, extensão contínua para bater meta. **Proteção:** ocultar números, usar contagem crescente, continuar ou encerrar livremente e não converter duração em nota de concentração.

### 6.3 Pausas e transições

**Problema:** fadiga, desconforto e dificuldade de passar de uma atividade para outra. **Funcionamento:** pausa disponível a qualquer momento; ao atingir o tempo escolhido, mostrar convite discreto para pausar, continuar ou encerrar. Pausa pode ser livre ou ter lembrete opcional de retorno. Não iniciar outra sessão automaticamente.

**Evidência:** bem-estar em população geral; resultados contraditórios sobre estrutura ideal e desempenho. [E18–E21] **Riscos:** pausa virar navegação prolongada, retorno difícil ou alarme interromper concentração útil. **Proteção:** salvar contexto antes da pausa, sugestões neutras como levantar-se se desejar, e opção de retomar pelo mesmo passo. Descanso não precisa ser “merecido” por conclusão.

### 6.4 Registro rápido de distrações

**Problema:** receio de esquecer um pensamento leva a trocar de tarefa. **Funcionamento:** abrir campo curto por botão/atalho opcional, salvar e voltar ao mesmo lugar. Não pedir categoria, data, projeto ou prioridade. Por padrão, anotação privada; converter em tarefa só mediante ação posterior.

**Evidência:** indireta, de descarregamento de intenções e programas de manejo de distração; a versão específica não foi demonstrada. [E07, E23] **Riscos:** virar diário de pensamentos, nova caixa de pendências ou obrigação de registrar toda distração. **Proteção:** registro opcional, sem contador de “falhas de foco”, sem abrir a lista acumulada durante a sessão e com exclusão simples.

### 6.5 Salvar contexto e retomar

**Problema:** perder referência após ligação, mudança de ambiente, pausa ou dias sem usar. **Funcionamento:** preservar tarefa, ocorrência, passo, trecho/material autorizado e estado. Nota opcional: “Parei após conferir janeiro; falta fevereiro”. Retorno abre uma ação de continuidade, não um painel de atrasos.

**Evidência:** plano de retorno estudado na população geral e necessidades de planejamento/memória em TDAH; eficácia específica ainda precisa ser medida. [E16, E24] **Riscos:** exigir texto quando a interrupção é urgente, guardar dados de terceiros, reabrir conteúdo cujo acesso foi revogado. **Proteção:** snapshot automático mínimo, nota dispensável, autorização revalidada e opção de começar outra coisa.

### 6.6 Lembretes acionáveis

**Problema:** intenção não reaparece na hora útil. **Funcionamento:** a pessoa escolhe receber um aviso e seu horário/contexto; o aviso abre a próxima ação, com adiar ou dispensar. Sem sequência automática de cobranças.

**Evidência:** mista em TDAH e indireta em tarefas de memória geral; SMS de adesão a curso não representa qualquer lembrete de atividade. [E22, E23] **Riscos:** habituação, interrupção de outra tarefa, exposição de título privado na tela bloqueada, culpa. **Proteção:** conteúdo discreto, silêncio, deduplicação e ação que não depende da permissão de push. Compromissos reais mantêm a política própria do núcleo.

### 6.7 Estimativas e aprendizado temporal

**Problema:** subestimar preparação, duração e transição. **Funcionamento:** estimativa opcional por faixa; ao terminar, registrar tempo percebido se desejar. Depois de registros comparáveis, oferecer “Quer ajustar sua estimativa habitual?”. Mostrar quantidade de registros e possibilidade de não serem comparáveis.

**Evidência:** necessidade temporal direta; calibração automatizada de tarefas no app ainda não demonstrada. [E08, E15] **Riscos:** falsa precisão, tarefas diferentes agrupadas, urgência artificial. **Proteção:** nenhuma atualização silenciosa, duração sem registro tratada como desconhecida, sem diagnosticar “cegueira temporal”.

### 6.8 Progresso visual e reconhecimento

**Problema:** progresso parcial ficar invisível. **Funcionamento:** “Você guardou as roupas; a cama fica para depois”, com contagem textual de passos escolhidos. Itens pulados ficam distinguíveis dos concluídos.

**Evidência:** faz parte de intervenções e feedback comportamental, mas não há demonstração independente da barra escolhida para esta população. [E07–E10] **Riscos:** barra sempre incompleta, divisão artificial para ganhar pontos, percentual que parece medir qualidade. **Proteção:** progresso local por tarefa, sem ranking, percentual de “atenção” ou comparação entre pessoas. Pode ser ocultado.

### 6.9 Recompensas e gamificação

**Problema:** benefício da tarefa ser distante e tarefa ser pouco atraente. **Funcionamento:** reconhecimento sóbrio; depois, se a pessoa optar, uma recompensa que ela própria escolheu. Pontos e mascote ficam em experimento separado e desligável.

**Evidência:** estudos de jogos terapêuticos são majoritariamente pediátricos e multicomponentes; não demonstram que pontos em tarefas domésticas ajudam adultos. [E10, E40] **Riscos:** passar mais tempo no jogo que na tarefa, pressão por sequência, punição por ausência, consumo ou competição. **Proteção:** sem perda de pontos, item que “morre”, aposta, recompensas aleatórias ou obrigação de manter sequência. Não condicionar alimentação, sono ou descanso à produtividade.

### 6.10 Body doubling e presença acompanhada

**Problema:** começar ou persistir sozinho pode ser mais difícil para algumas pessoas. **Funcionamento:** escolher uma pessoa de confiança, combinar atividade e duração, trabalhar em paralelo e poder sair sem cobrança. Não exigir conversar, câmera ou comprovar desempenho.

**Evidência:** levantamento descritivo com 220 adultos; resumo preliminar de experimento de leitura sem diferença significativa; preprint em VR com 12 participantes e resultado favorável em tarefa específica. Os desenhos não permitem concluir eficácia cotidiana, equivalência entre formatos ou benefício geral para apresentação desatenta. [E27–E29]

**Riscos:** distração social, comparação, vigilância, constrangimento e exposição doméstica. **Proteção:** privado primeiro, compartilhamento mínimo, sem gravação padrão ou avaliação do parceiro. Não apresentar avatar/IA como presença humana comprovadamente equivalente. Rede pública e vídeo exigem infraestrutura e moderação próprias; ficam fora do MVP.

### 6.11 Ruído, música e sons

**Problema:** ambiente ruidoso ou necessidade individual de estimulação. **Funcionamento:** silêncio como padrão; áudio opcional de baixa complexidade, volume controlável e parada imediata. Comparar a experiência na mesma classe de tarefa; a pessoa pode preferir áudio próprio ou nenhum som.

**Evidência:** metanálise de ruído branco/rosa encontrou efeito pequeno (g aproximadamente 0,25) em testes de 335 crianças/jovens com TDAH ou sintomas elevados; comparação sem TDAH teve efeito negativo. Autores classificaram a certeza do efeito laboratorial como moderada. Música tem síntese heterogênea e não define uma trilha ideal. [E25, E26]

**Limites:** adultos mais velhos e funcionamento prolongado pouco representados. A revisão de 2024 não incluiu estudos de ruído marrom; esta busca não recuperou ensaio robusto aplicável que sustente preferi-lo. Não afirmar ausência de toda pesquisa possível. **Riscos:** desconforto sensorial, letras competindo com leitura, escolher playlists continuamente, volume excessivo. **Proteção:** sem autoplay ou alegação de frequência “terapêutica”; permitir desligar sem refazer configurações.

### 6.12 Redução e bloqueio de distrações externas

**Problema:** alternância automática para redes sociais e notificações. **Funcionamento:** no MVP, reduzir notificações internas e sugerir, se solicitado, usar o foco do aparelho ou afastar distrações. Integração real com bloqueadores virá por adaptadores específicos e permissões claras.

**Evidência:** um ensaio da população geral com 467 usuários de smartphone encontrou benefícios após bloqueio de internet móvel por duas semanas, mas adesão foi difícil e não era ensaio de tratamento para TDAH. Bloqueio amplo não equivale a bloquear um site por cinco minutos. [E38]

**Riscos:** bloquear material de estudo, canal de trabalho, acessibilidade ou contato importante. **Proteção:** lista permitida, saída simples, limites por contexto e nenhuma alegação de bloqueio do sistema operacional pela PWA. Sair da aba pode ser parte da tarefa; nunca contar isso automaticamente como distração.

## 7. Matriz de priorização

Prioridade P0 = primeira versão do módulo; P1 = após o núcleo e teste exploratório; P2 = experimento posterior. Esforço é estimativa relativa incremental sobre a fundação já pronta: baixo = UI/regra localizada; médio = persistência e múltiplos estados; alto = integração/permissões/operação. Não são prazos nem orçamento. P0 não significa eficácia clínica comprovada.

<!-- landscape -->

| Funcionalidade | Dificuldade | Funcionamento | Evidência aplicada | Limitações/riscos | Esforço | Prioridade |
| --- | --- | --- | --- | --- | --- | --- |
| MF01 Próxima ação | Início/etapas | Uma ação e até três passos visíveis | Moderada para programas; baixa para componente/app [E07–E09] | Fragmentação excessiva, planejamento sem agir | Médio | P0 |
| MF02 Sessão flexível | Começar/sustentar | Começar com duração ajustável ou sem timer | Baixa para duração; evidência indireta mista [E19–E21] | Ansiedade, interrupção útil | Médio | P0 |
| MF03 Pausa livre | Fadiga/transição | Pausar, continuar e escolher aviso de retorno | Moderada geral; baixa para TDAH cotidiano [E18–E21] | Perder contexto na pausa | Médio | P0 |
| MF04 Ponto de retomada | Reorientação | Passo e nota opcionais persistidos | Baixa, indireta para esta implementação [E16, E24] | Nota obrigatória, conteúdo revogado | Médio | P0 |
| MF05 Anotar distração | Mudança de tarefa | Captura privada sem triagem imediata | Baixa, indireta; app sem validação [E07, E23] | Acúmulo e autorregistro exaustivo | Baixo/médio | P0 |
| MF06 Progresso parcial | Frustração | Exibir ações confirmadas; distinguir puladas | Baixa para componente isolado [E07–E10] | Pressão, contagem artificial | Baixo | P0 |
| MF07 Aviso escolhido | Esquecimento | Opt-in; abrir ação, adiar, dispensar | Baixa/mista para execução cotidiana [E22, E23] | Excesso, exposição na tela | Médio | P0 básico |
| MF08 Estimativa pessoal | Planejar tempo | Faixa e comparação voluntária | Baixa para calibração; necessidade direta [E15] | Falsa precisão | Médio | P1; edição simples P0 |
| MF09 IA de primeiro passo | Ambiguidade | Proposta curta, editável e confirmada | Muito baixa para benefício do recurso [E30–E32] | Invenção, excesso de diálogo | Médio | P0 opcional |
| MF10 Modo essencial | Sobrecarga | Uma ação, poucas escolhas, acessibilidade | Orientação de acessibilidade; não ensaio clínico [E33, E34] | Ocultar informações necessárias | Médio | P0 |
| MF11 Reduzir atividade | Dia difícil | Menor escopo; prazos reais preservados | Muito baixa para recurso; hipótese de produto [E05] | Tratar obrigação como dispensada | Baixo/médio | P0 |
| MF12 Áudio | Ambiente/estimulação | Silêncio padrão; som opcional | Moderada em ruído/testes; baixa em adultos [E25, E26] | Desconforto, competição verbal | Médio | P1 experimental |
| MF13 Bloqueador externo | Distração digital | Adaptador por plataforma, com saída | Moderada geral; indireta/baixa para TDAH [E38] | Bloquear ferramenta necessária | Alto | P2 |
| MF14 Recompensa/jogo | Motivação | Escolhida; desligável; sem punição | Muito baixa para tarefas de adultos [E10, E40] | Culpa, jogo virar distração | Médio | P2/F21 |
| MF15 Presença privada | Início/persistência | Convite mínimo; sem vigilância | Muito baixa; descritiva/pilotos [E27–E29] | Pressão social e privacidade | Alto | P2/F21 |
| MF16 Ajustes por histórico | Preferências | Perguntar antes de salvar padrão | Muito baixa; hipótese de personalização | Inferir clínica ou padrão com poucos dados | Médio | P1 |

<!-- portrait -->

## 8. Experiência simples e personalização

O módulo deve abrir a partir de Hoje, tarefa, projeto ou ocorrência de rotina. Não exigir ativar todas as áreas da plataforma. A primeira sessão precisa funcionar sem informar diagnóstico, apresentação, medicação ou dificuldades pessoais.

**Configuração inicial proposta:** uma próxima ação; cinco minutos já selecionados como ponto de partida editável; link visível para começar sem contagem; som, animações celebratórias e lembretes recorrentes desligados; pausa livre; nota de retomada opcional. A pessoa começa sem responder perguntas. A configuração adotada na sessão pode ser salva como preferência mediante escolha.

Não oferecer uma grade de dez métodos na primeira tela. As demais opções ficam em ajustes progressivos e acessíveis. A pessoa pode pular a IA, editar a ação e começar. Não usar um fluxo de consentimento longo do módulo para substituir a política de dados do serviço.

| Personalizável | Comportamento inicial sugerido |
| --- | --- |
| Visibilidade do tempo | Contagem regressiva simples, com opção imediatamente acessível de ocultar ou trocar por crescente. |
| Duração e pausas | Cinco minutos editáveis; nenhum ciclo 25/5 imposto. |
| Detalhe das instruções | Uma ação; até três passos ao expandir. |
| Avisos | Só os solicitados; silêncio herdado do núcleo. |
| Estímulos | Áudio e celebração desligados; respeitar movimento reduzido. |
| Linguagem | Neutra, adulta, respeitosa; tom mais acolhedor só se desejado. |
| Disponibilidade de hoje | Ajuste temporário declarado; não alterar padrão global automaticamente. |
| Progresso | Texto discreto e ocultável; sem sequência obrigatória. |
| Histórico/memória da IA | Ver, corrigir, desligar e apagar; preferências separadas de observações de sessão. |

Aplicar a identidade já definida: papel #F7F4EF, tinta #242235, ação violeta #5B4BC4 e lavanda #DAD4F5; Manrope, corpo de referência 16 px/1,5. No escuro, usar o token de ação lavanda com tinta. Terracota não deve receber texto branco comum sem contraste adequado.

Usar teclado, rótulos explícitos, foco visível, leitores de tela, reflow e ampliação; controles de preferência 44 px, respeitando os critérios completos da WCAG 2.2 AA. Timer não anuncia cada segundo; anunciar transições relevantes e deixar consultar o tempo. Não depender de cor, som, arrastar ou animação para entender estado. [E34]

COGA recomenda reduzir distrações e facilitar reorientação; é orientação complementar, não certificação clínica ou requisito normativo equivalente à WCAG. Limitar interrupções também aparece em critério AAA; adotá-lo como decisão de produto não muda a meta AA. Testar com pessoas, não somente com ferramenta automática. [E33, E34]

Depois de dias afastado: mostrar a última ação relevante e oferecer “Retomar”, “Escolher outra” e “Revisar meu dia”. Não exigir limpar atrasos para usar o app. Contas vencidas e compromissos reais continuam identificados na área apropriada; não reaparecem como cobrança moral.

## 9. Fluxo completo, telas e mensagens

### 9.1 Escolha e primeiro passo

**Tela Hoje → tarefa “Arrumar meu quarto” → Começar.**

Cartão: “Qual parte você quer resolver agora?”. Campo já preenchido com o primeiro passo existente ou vazio e editável. Ações: “Usar este passo”, “Me ajude a começar” e “Começar pela tarefa”. Não exigir resultado final perfeito.

Ao pedir ajuda: “Uma opção é juntar as roupas que estão na cadeira. Quer começar por isso?”. Expansão mostra até mais duas sugestões. A pessoa pode remover, reordenar e aceitar só uma. A proposta não vira tarefa persistida antes da confirmação.

**Critério escolhido:** “As roupas da cadeira foram separadas”. Alternativa reduzida: “Separar apenas três peças”. São exemplos, não quantidades ideais.

### 9.2 Início da sessão

Tela com tarefa pequena no topo, próxima ação em destaque e botão “Começar”. Duração de referência de cinco minutos, link “Sem contagem” e ajuste. Sem tutorial obrigatório, banner de plano ou convite social nesse momento.

Depois de começar, mostrar “Agora: juntar as roupas da cadeira”, tempo se desejado, “Anotar algo” e “Pausar”. “Encerrar” e “Ajustar ação” continuam acessíveis. Não abrir chat espontaneamente.

### 9.3 Distração

Pessoa lembra “comprar detergente”. Toca “Anotar algo”, escreve e salva. Mensagem breve: “Anotado. Você pode olhar depois”. Retorno ao mesmo passo; teclado fecha; foco acessível é restaurado. Não criar data nem notificação para a anotação.

Se for algo urgente: pode pausar ou encerrar. O produto não decide que todo pensamento deve ser adiado.

### 9.4 Interrupção e pausa

Pessoa recebe uma ligação. “Pausar” salva o passo imediatamente. Campo opcional: “Quer deixar uma pista para voltar?”. Pode sair sem preencher. Estado: “Pausado. Seu ponto de retorno está salvo”.

Não pedir motivo clínico. Motivo de pausa pode ser registrado voluntariamente em categorias simples para pesquisa, com opção de não responder.

### 9.5 Retomada

Ao voltar: “Você estava separando as roupas da cadeira. Quer continuar daí?”. Mostrar nota, se houver. Opções: “Retomar”, “Reduzir este passo”, “Escolher outra tarefa”. Retomar preserva duração acumulada e cria novo segmento da mesma sessão, conforme contrato abaixo.

Se faltou salvar uma nota antes da interrupção, o passo e os avanços já confirmados continuam suficientes para o cartão de retorno.

### 9.6 Fim do tempo escolhido

Mensagem discreta: “O tempo que você escolheu terminou”. Ações: “Continuar”, “Fazer pausa” e “Encerrar por agora”. Não marcar passo como concluído, zerar progresso ou forçar interrupção. Somente o usuário confirma realização.

Se a ação ficou maior: “Quer continuar, dividir o que falta ou guardar para depois?”. Não exibir contagem negativa em vermelho nem “você falhou”.

### 9.7 Encerramento

Oferecer “Concluí este passo”, “Avancei um pouco” e “Fica para depois”. A opção de concluir a tarefa inteira é explícita e mostra pendências, se existirem. Duração e avaliação de esforço são opcionais.

Resumo: “Você separou as roupas. Próximo passo salvo: guardar as peças limpas”. Não transformar encerrar sessão em concluir pai, projeto, rotina inteira ou regra recorrente.

### 9.8 Situações de exceção

| Situação | Resposta esperada |
| --- | --- |
| Fecha a aba ou app cai | Recuperar último estado confirmado; eventual rascunho local vem identificado. Não apagar sessão. |
| Sessão ficou aberta por horas/dias | Mostrar estado a revisar; tempo registrado como trabalho não é presumido. Pode ajustar, omitir ou encerrar. |
| Não começa depois de apertar Iniciar | Botão é evento de interface; não prova ação no mundo real. Pode reduzir, sair ou tentar depois. |
| Não conclui a tarefa | Guardar progresso parcial e próxima ação; sem penalidade. |
| Subestima a duração | Oferecer revisão do escopo/tempo; não comprimir resto do dia nem alterar prazo real. |
| Ignora lembrete | Sem escalada automática. Próximo acesso mostra o item se ainda pertinente. |
| Precisa de um dia menor | Mostrar versão reduzida escolhida; compromissos e obrigações permanecem. |
| Não quer IA ou provedor falha | Campo manual, passo anterior e template editável; mesma possibilidade de começar. |
| Rede cai | Indicar o que está salvo no aparelho e o que está sincronizado; não fingir confirmação remota. |
| Sessão em outro aparelho | Informar execução ativa e permitir assumir mediante comando versionado. |
| Tarefa muda ou acesso é revogado | Revalidar; não revelar conteúdo retirado nem reaplicar alteração antiga. |
| Volta após sete dias | Convite pulável de revisão; não exigir “recuperar sequência” ou fazer todas as pendências. |

## 10. IA: utilidade, contrato e limites

A evidência de chatbot estruturado não equivale à de modelo generativo. Em um ensaio com 40 adultos, chatbot e aplicativo convencional não diferiram nos resultados; no piloto de AR+GenAI de 2026, 15 universitários tiveram tendências qualitativas favoráveis, sem diferenças quantitativas significativas. Uma avaliação de planos de IA por 27 especialistas usou perfis hipotéticos e encontrou problemas de personalização e viabilidade. Nada disso valida um agente clínico ou a eficácia da Passólia. [E30–E32]

### 10.1 Quatro capacidades iniciais

| Capacidade | Entrada mínima | Resposta esperada | Limite |
| --- | --- | --- | --- |
| Esclarecer | Intenção e restrição declarada | Uma pergunta útil ou proposta explicitamente condicional | Não prolongar entrevista sem necessidade. |
| Propor começo | Tarefa, passo atual e detalhe escolhido | Uma próxima ação e até três passos iniciais | Não ampliar objetivo ou inventar material disponível. |
| Destravar | Dificuldade relatada: “está grande”, “não sei como” | Duas ou três opções curtas: reduzir, esclarecer, pausar | Não inferir depressão, gravidade ou dose. |
| Reorganizar resto | Avanços confirmados, tempo disponível declarado e restrições | Prévia das ações restantes | Preservar prazos, fixos e decisões manuais. |

Pedido exemplo: “preciso arrumar meu quarto, só tenho dez minutos”. Proposta: “Vamos limitar ao que você escolheu: 1) juntar roupas da cadeira; 2) separar para lavar/guardar; 3) guardar o que der. Você quer usar só o primeiro passo?”. Não assumir que há armário disponível, produtos de limpeza ou que o quarto inteiro ficará pronto nesse tempo.

Pedidos vagos como “resolver aquilo” exigem esclarecimento ou seleção manual. Estimativas podem ser nulas; se fornecidas, são faixas rotuladas como estimativas ajustáveis. Tarefas físicas ou técnicas exigem respeitar restrições informadas e não gerar instruções perigosas para preencher uma lista.

### 10.2 Contexto, autorização e confirmação

Enviar apenas tarefa/passo pertinentes, restrições que a pessoa forneceu e preferências explicitamente autorizadas. Não enviar automaticamente diagnóstico, finanças, conversas de casal, todo o histórico ou anotações de distração. Preferências da tarefa podem ser temporárias; salvar padrão exige escolha.

Fluxo: autenticar → autorizar contexto → minimizar dados → gerar proposta → validar estrutura e regras → mostrar prévia → pessoa edita/seleciona → revalidar versões/permissões → aplicar transação idempotente. Esse fluxo reutiliza `ai_proposals` e os contratos do prompt mestre.

Schema conceitual sugerido: `schema_version`, `outcome` (proposal/clarify/out_of_scope), `summary`, `question` opcional, `assumptions`, `steps` com identificadores locais, ação, critério de conclusão e faixa de duração opcional. IDs persistidos e permissões não vêm do modelo. Rejeitar itens excessivos, ciclos, campos de autoridade e referências inacessíveis.

Aceitar a proposta não permite ao modelo concluir tarefas, enviar mensagens, remarcar compromissos ou mudar contas. Essas operações continuam dependentes das regras e autorizações específicas da plataforma.

### 10.3 Falhas e proteção de dados

Timeout, recusa, saída inválida, cota e ausência de chave produzem fallback manual claro. Exemplo: “A ajuda automática não está disponível agora. Você pode escrever o primeiro passo e começar”. Não perder o texto original; não repetir chamadas ilimitadamente.

Permitir ver e apagar memórias. Conteúdo privado fica fora de logs operacionais comuns e métricas. Configurar retenção de propostas e contratos do fornecedor antes do piloto, sem prometer retenção zero por um parâmetro isolado. Não usar dados de clientes/terceiros como corpus de teste.

A OMS alerta para respostas falsas, vieses e confiança excessiva em IA; a política de produto deve manter revisão humana e escopo definido. No Brasil, dados de saúde são sensíveis; minimizar coleta, mapear finalidade/base aplicável e implementar direitos e segurança. Consentimento para produto, IA opcional e pesquisa não é um único aceite genérico. [E35, E36]

“Você escolheu sessões mais curtas nas últimas vezes; quer salvar essa preferência?” é adaptação de interface. “Seu TDAH piorou porque você interrompeu três sessões” é inferência clínica indevida.

## 11. Especificação executável de engenharia

Esta seção é proposta incremental. Inspecionar a implementação real e adaptar nomes sem criar entidades concorrentes. Não fixa versões de bibliotecas ou modelo de IA.

### 11.1 Domínio e armazenamento

Reutilizar `tasks`, `task_steps`, `occurrences`, `routine_runs`, `focus_sessions`, `captures`, `ai_proposals` e notificações do núcleo. Adicionar campos/tabelas só se necessários:

| Entidade | Campos/comportamento propostos |
| --- | --- |
| Sessão | Usuário proprietário, referência tipada a tarefa/ocorrência/execução autorizada, passo opcional, status, modo de tempo, duração planejada opcional, revisão e dispositivo ativo. |
| Segmento | Início, fim/pausa, tempo acumulado calculado, sequência de comando e qualidade temporal. Pausas não são trabalho. |
| Ponto de retorno | Passo, referência autorizada e nota curta opcional; acesso e eliminação acompanham a política do conteúdo de origem. |
| Anotação de distração | Captura privada reutilizável, vínculo opcional à sessão, nenhuma data/tarefa/lembrete automático. |
| Preferências | Duração, exibição do tempo, áudio, detalhe, avisos e validade global/temporária. |
| Avaliação opcional | Ação útil relatada, esforço/sobrecarga e tempo declarado; separada de telemetria técnica e de dados clínicos. |

Sessão e anotações são privadas mesmo se a tarefa for compartilhada. Compartilhar a tarefa não compartilha histórico de foco, dificuldades ou conteúdo das distrações. Convite de presença futura revela apenas os campos consentidos.

### 11.2 Estados e invariantes

Estados sugeridos: `ready`, `running`, `paused`, `needs_review`, `ended`. Resultados de encerramento separados: `step_done`, `task_done`, `partial`, `save_for_later`, `stopped`. Não usar rótulo de fracasso para abandono.

- Iniciar: `ready/paused → running`; transação verifica versão e execução concorrente.
- Pausar: fecha segmento de tempo e preserva passo imediatamente; nota é opcional.
- Atingir duração escolhida: marca `budget_elapsed`, sem conclusão automática nem bloqueio de continuidade.
- Retorno com lacuna temporal relevante ou relógio inconsistente: `needs_review`; preservar contexto e pedir revisão discreta do registro antes de tratá-lo como tempo de atividade.
- Encerrar: fecha sessão sem alterar conclusão de tarefa, salvo comando explícito separado e autorizado.
- Retomar sessão encerrada cria outra sessão vinculada; retomar pausada continua a mesma. Evitar um estado terminal que volte a correr silenciosamente.

Unicidade de execução: no máximo uma sessão `running` sincronizada por usuário, conforme regra inicial. Duas execuções offline não podem garantir exclusão global; ao sincronizar, apresentar sobreposição e revisão sem somar tempos duplicados nem apagar notas. Itens `skipped` nunca contam como concluídos.

### 11.3 Tempo e funcionamento em segundo plano

Usar instantes/segmentos persistidos e duração acumulada. `setInterval` atualiza a tela; não é a fonte do tempo. Mudança de aba, suspensão e economia de energia podem atrasar callbacks no navegador. [E37]

Separar **tempo decorrido da sessão**, **tempo declarado de atividade** e **atenção real**, que o app não mede. Aba visível não prova concentração; aba oculta pode significar execução doméstica ou consulta de material.

Proposta inicial: lacuna superior a 30 minutos sem ponto de confirmação torna o registro temporal candidato a revisão ao reabrir. Esse valor é hipótese técnica configurável, não limite de atenção. A pessoa pode confirmar, ajustar ou deixar duração não registrada. Não converter horas com app abandonado em “horas de foco”. Não bloquear a execução só porque o aparelho ficou com tela apagada.

Modo sem contagem mantém estado/progresso; coleta detalhada de duração não precisa existir nesse modo. Alarmes exatos em segundo plano e bloqueio de outros aplicativos não são garantias da PWA. Documentar a matriz real por aparelho/navegador, sem simular entrega de push.

### 11.4 Comandos, concorrência e offline

Casos de uso sugeridos: criar/iniciar, pausar, retomar, salvar ponto, adicionar anotação, marcar passo, encerrar e reconciliar. Usar autenticação no servidor, revisão otimista e chave idempotente nos comandos. Repetição após timeout retorna o mesmo resultado; não cria duas capturas ou duas sessões.

Manter módulo `src/modules/focus` com domínio puro, casos de uso, adaptadores e componentes. Reusar API `/api/v1` e RLS do núcleo. Jobs do módulo passam pela outbox existente; não criar serviço de notificações paralelo.

Offline proposto inicialmente só para estado/progresso de sessões pessoais já acessíveis e capturas privadas, com IndexedDB por usuário, fila versionada, origem do dado visível e reconciliação. **É extensão do escopo anterior e precisa ser aceita no planejamento técnico**, não é garantia existente. Se não implementada, informar limite e preservar rascunho compatível, sem alegar paridade offline.

Logout/troca de usuário limpam estado acessível e cache privado conforme política. Conteúdo compartilhado e sensível não entra no cache offline inicial. Revogação exige limpeza/restrição de derivados; não prometer apagar instantaneamente bytes em um aparelho desconectado. Exportação/eliminação devem incluir notas, propostas e avaliações relacionadas, conforme retenção documentada.

### 11.5 Avisos e limites de operação

Aviso de retorno só com opção explícita; silencioso conforme preferências. Um aviso ignorado não gera repetição automática. Revalidar relevância e versão antes de enviar; cancelar se a sessão terminou ou o usuário retirou autorização. Distinguir aceito pelo provedor, recebido e aberto quando tecnicamente observável.

Métricas operacionais sem conteúdo: erros, sincronização pendente, duplicação, latência e falhas de persistência. Nenhuma integração externa é necessária para o núcleo manual. Chaves de IA somente no servidor; limites de uso e custo configuráveis. Esta pesquisa não executou esses testes.

## 12. Sequência de implementação e dependências

| Entrega | Integração no plano atual | Critério objetivo de saída |
| --- | --- | --- |
| A. Contratos e protótipo | F00/F02; RF04, RF08, RF29 | Inventário do código; estados e eventos definidos; fluxo utilizável sem IA e sem cadastro adicional. |
| B. Núcleo de execução | F06; RF07–RF09 | Iniciar, pausar, anotar, retomar e encerrar persistem ponta a ponta. Refresh não zera estado. |
| C. IA opcional | F07; RF10–RF11 | Proposta revisável, aceitação idempotente, falhas/fallback e testes de conteúdo em português. |
| D. Confiabilidade | F08–F10; RF12–RF14 | Notificações autorizadas, conflitos explícitos, offline declarado e exportação/eliminação verificadas. |
| E. Piloto acessível | F11; RF15 | Cenários críticos abaixo passam; usabilidade com adultos e plano de métricas aprovado. |
| F. Ajustes por uso | Após piloto | Estimativas e personalização só avançam se ajudarem sem elevar manutenção/sobrecarga. |
| G. Experimentos | F21; RF26 | Áudio, recompensas ou presença avaliados separadamente, com opção de retirar cada um. |

Não atrasar o núcleo para montar vídeo, marketplace, mascote ou detecção automática de atenção. Preservar módulos financeiros, relações, casa e vestuário no restante do plano; o foco apenas se vincula às tarefas autorizadas dessas áreas, sem redesenhá-las.

## 13. Critérios de aceite para o Cursor

Todos os cenários abaixo estão **planejados, não executados**. Registrar teste, comando, ambiente, data, resultado e pendência. Reutilizar casos da matriz existente e adicionar estes identificadores; não renumerar os 219 cenários anteriores.

| Caso | Resultado a verificar |
| --- | --- |
| FOC01 | Começar manualmente sem IA, diagnóstico, estimativa ou questionário. |
| FOC02 | Tarefa existente abre sem duplicar entidade ou ocorrência. |
| FOC03 | Próxima ação editável e texto grande não quebram celular a 320 CSS px. |
| FOC04 | Passos extras só aparecem mediante expansão; detalhamento pode ser reduzido. |
| FOC05 | Sem timer permite os mesmos comandos de pausa, avanço e encerramento. |
| FOC06 | Ocultar números ou trocar modo não reinicia sessão. |
| FOC07 | Duração esgotada não conclui ação nem impede continuar. |
| FOC08 | Pausar salva passo sem nota e não acumula duração de pausa. |
| FOC09 | Retomar recupera passo/nota e acumulado depois de refresh. |
| FOC10 | Abandono prolongado pede revisão de tempo sem declarar horas de atenção. |
| FOC11 | Mudança de relógio/suspensão não produz duração negativa ou falsa precisão. |
| FOC12 | Captura de distração volta ao mesmo campo/ação e não agenda tarefa. |
| FOC13 | Timeout e duplo clique não duplicam captura, sessão ou proposta aplicada. |
| FOC14 | Encerrar com avanço parcial mantém pendências. |
| FOC15 | Passo pulado fica separado de concluído. |
| FOC16 | Concluir sessão não conclui tarefa, projeto, rotina ou recorrência automaticamente. |
| FOC17 | Tarefa concluída por comando explícito não reaparece aberta por mutação antiga. |
| FOC18 | Reduzir atividade não altera vencimento real, reunião fixa ou saldo financeiro. |
| FOC19 | Segundo dispositivo assume execução com versão; conflito não perde nota. |
| FOC20 | Duas execuções offline sobrepostas geram revisão, sem soma duplicada. |
| FOC21 | Falha de rede mostra o que é local e o que foi sincronizado. |
| FOC22 | Atualização do app não apaga comando/rascunho ainda pendente. |
| FOC23 | Troca de usuário não revela cache de outro usuário. |
| FOC24 | RLS/API impedem acesso de parceiro a sessão e distrações privadas. |
| FOC25 | Revogação de acesso invalida proposta e não expõe derivados retirados. |
| FOC26 | IA sem contexto suficiente esclarece ou permite entrada manual, sem inventar fatos. |
| FOC27 | IA respeita restrição declarada e não acrescenta subtarefas fora do objetivo. |
| FOC28 | Prévia editável aceita apenas os passos selecionados; dependências são revalidadas. |
| FOC29 | Saída inválida, recusa, cota e timeout mantêm texto e operação manual. |
| FOC30 | Pedido/instrução em anotação não consegue conceder acesso ou executar comando. |
| FOC31 | IA não infere estado clínico, não recomenda dose e não envia mensagens sozinha. |
| FOC32 | Avisos desligados/negados não impedem foco; ignorar não aumenta frequência. |
| FOC33 | Aviso obsoleto é cancelado; reenvio não duplica alerta. |
| FOC34 | Tela bloqueada não revela título sensível quando conteúdo discreto estiver ativo. |
| FOC35 | Leitor de tela anuncia transições; timer não anuncia cada segundo. |
| FOC36 | Teclado, foco, ampliação, movimento reduzido e alternativa a arrastar funcionam. |
| FOC37 | Retorno após sete dias é pulável; prazos reais continuam visíveis no contexto adequado. |
| FOC38 | Histórico, notas e propostas obedecem exportação, exclusão e retenção documentadas. |
| FOC39 | Telemetria não contém texto privado, escore clínico ou inferência de atenção. |
| FOC40 | Som, jogo e presença permanecem desligáveis e não bloqueiam encerramento. |

Testes apropriados: unidade para estados/tempo; integração para comandos, conflitos, permissões e notificações; E2E para fluxos reais; avaliação humana para acessibilidade, linguagem e sugestões de IA. Um screenshot bonito não comprova persistência, privacidade ou benefício.

## 14. Validação com pessoas

### 14.1 Descoberta e usabilidade

Começar com 12–20 entrevistas/cocriação, aproveitando o plano anterior; pedir exemplos recentes de início difícil, interrupção e ferramentas abandonadas. Incluir adultos predominantemente desatentos, outras apresentações, diferentes escolaridades, acesso digital, jornadas de trabalho e condições coexistentes. Diagnóstico pode ser autorrelatado para pesquisa exploratória, com essa limitação registrada; serviço não exige laudo.

Realizar ciclos de 5–8 participantes para fluxos centrais: escolher tarefa, ajustar passo, negar aviso, pausar sem nota, retomar após ligação simulada, registrar distração, reduzir escopo e voltar depois de dias. Incluir pessoas que usem teclado/leitor de tela e que não gostem de timer. Permitir pausas e remuneração sem vínculo à conclusão de tarefas.

A equipe aprende sobre uso, não avalia clinicamente participantes. Apresentação/diagnóstico, quando relevantes e consentidos para pesquisa, não devem ser inferidos pelo app nem exigidos no onboarding geral.

### 14.2 Piloto cotidiano

Proposta operacional: aproximadamente 30–50 adultos por quatro a seis semanas; primeira semana de observação com suas ferramentas habituais e depois uso do módulo. Esse tamanho serve para viabilidade e encontrar problemas; não demonstra eficácia nem garante poder para subgrupos.

Para comparar componentes, testar uma pergunta por vez: ponto de retomada versus lista competente; timer opcional versus sem contagem; sugestão de IA versus template manual competente. Usar ordem contrabalançada/randomizada quando viável, preservando dados e a possibilidade de sair. Se o componente ensina habilidades duradouras, efeito de aprendizagem pode contaminar crossover; preferir comparação paralela ou interpretação exploratória.

Não retirar tratamento ou pedir mudança de medicação. Registrar alterações relevantes no contexto só se consentidas. Estudo clínico ou pesquisa destinada a publicação exige definição do desenho, responsabilidades e avaliação ética aplicável antes de recrutar.

### 14.3 Indicadores de benefício e de dano

| Medida | Definição operacional proposta | Cuidado de interpretação |
| --- | --- | --- |
| Facilidade de iniciar | Esforço 1–5 e ação útil iniciada na oportunidade definida pela pessoa | Apertar Iniciar não prova execução. |
| Latência de início | Tempo da oportunidade escolhida até ação relatada/observada em amostra consentida | Disponibilidade real importa; sem início é censura/pendência, não zero. |
| Retomada | Entre interrupções com intenção de voltar, proporção de retorno à ação e esforço 1–5 | Não usar todo fechamento do app como interrupção. |
| Conclusão/avanço | Resultado definido antes, conclusão confirmada e progresso parcial significativo | Preservar versão/escopo; não premiar fragmentação artificial. |
| Sobrecarga | Esforço para manter sistema, avisos incômodos, culpa e distração provocada | Perguntas curtas, amostradas, puláveis. |
| Autonomia | Pessoa consegue escolher, recusar ajuda e executar fora do app | Menor acesso pode ser melhora. |
| Confiabilidade | Perda de estado, duplicação, aviso obsoleto, falha de sincronização | Falha técnica pode parecer dificuldade de organização. |
| Acessibilidade | Sucesso sem ajuda e barreiras por modo de acesso | Médias podem ocultar exclusão. |
| Preferência/utilidade | O que ajudou, não ajudou e deixou de ser necessário | Satisfação não substitui benefício funcional. |

No piloto, observar execução em tarefas simuladas consentidas e usar diários breves para tarefas reais. Evitar câmera/teclado/monitoramento contínuo para “provar” atenção. Solicitar feedback em amostra de sessões ou revisão semanal, em vez de questionário a cada interrupção.

Antes de analisar, definir denominadores, janela temporal, tarefas elegíveis, hipóteses e tratamento de ausências. Apresentar desistências, dados faltantes e análises de sensibilidade; não classificar quem sumiu como sucesso ou fracasso automaticamente. Medidas repetidas da mesma pessoa não são amostras independentes. Relatar diferenças individuais e por contexto sem transformar pequenos subgrupos em conclusões clínicas.

### 14.4 Regras para avançar, ajustar ou parar

Meta inicial de usabilidade, a pactuar: pelo menos 80% conseguem iniciar e retomar sem ajuda nos cenários centrais. É um alvo de produto, não um limiar médico nem resultado já obtido. Não liberar com falha conhecida crítica de isolamento, perda de progresso ou conclusão indevida.

Para benefício cotidiano, definir com participantes e pesquisador uma diferença considerada útil antes da comparação. Não inventar um percentual universal de eficácia. Exigir que qualquer melhora venha acompanhada de manutenção aceitável e ausência de aumento relevante de sobrecarga.

Se timer aumentar pressão, rever default e visibilidade. Se anotar distrações criar mais pendências que alívio, simplificar ou retirar. Se IA gerar listas extensas ou erros, preferir template/manual e corrigir conteúdo. Se presença acompanhada aumentar vigilância/constrangimento, interromper o experimento. Engajamento alto sem melhora percebida é motivo para investigar, não para declarar sucesso.

## 15. Catálogo crítico das fontes

Consulta em 12/11/2026. “Resumo” inclui texto indexado recuperado da publicação/registro; não implica leitura integral. Quando não há data editorial confirmada, registra-se s.d. e a data da consulta. As limitações abaixo restringem a transferência para o módulo proposto.

### E01 — NIH: nomenclatura inclusiva

NIH Style Guide, seção Disabilities; s.d., versão consultada em 12/11/2026. Institucional, não ensaio; público geral. Indica ADHD como nome atual e ADD como termo ultrapassado. Não valida funcionalidades e não substitui classificação diagnóstica completa. Acesso: trecho oficial indexado. Link: https://www.nih.gov/nih-style-guide/disabilities

### E02 — CDC: apresentações do TDAH

Symptoms of ADHD; s.d., versão consultada em 12/11/2026. Informação institucional para público geral, principalmente crianças, com continuidade para adultos. Descreve apresentações e possibilidade de mudança ao longo do tempo. Limite: página educativa, não comparação de tratamento ou ferramentas. Acesso: texto oficial indexado. Link: https://www.cdc.gov/adhd/signs-symptoms/index.html

### E03 — NIMH: dificuldades e estratégias de apoio

ADHD: What You Need to Know; s.d., versão consultada em 12/11/2026. Orientação institucional sobre crianças, adolescentes e adultos; inclui organização, passos menores e pausas. Limite: não estima efeito isolado de cada estratégia ou sua versão em app. Acesso: texto institucional. Link: https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know

### E04 — NICE NG87

Diretriz de 2018, recomendações atualizadas em 2019, versão consultada em 12/11/2026. Crianças, jovens e adultos; recomenda adaptações ambientais e suporte psicológico estruturado quando indicado. Limite: intervenção clínica, não validação de timer/app. Acesso: recomendações oficiais indexadas; abertura direta bloqueada. Link: https://www.nice.org.uk/guidance/ng87/chapter/recommendations

### E05 — AADPA: intervenções cognitivo-comportamentais

Australian ADHD Clinical Practice Guideline, 2022. Síntese inclui adultos com TDAH, comparando intervenções com lista de espera/cuidado usual e suporte ativo. Benefícios variam por comparador e desfecho; orientação fortalece autonomia e funcionamento. Limite: pacotes conduzidos por profissionais não são equivalentes a recursos isolados. Acesso: síntese de evidências e recomendações oficiais. Link: https://adhdguideline.aadpa.com.au/non-pharmacological/cognitive-behavioural-interventions/cognitive-behaviour-interventions/

### E06 — Cochrane: TCC para adultos

Revisão de 2018, 14 ensaios randomizados, 700 adultos de 18–65 anos. Encontrou benefícios em determinadas comparações, com qualidade baixa/muito baixa em muitos resultados. Limites: amostras pequenas, comparadores e medidas diferentes; não isola componentes de interface. Acesso: revisão/resumo e tabelas selecionadas. Link: https://www.cochrane.org/evidence/CD010840_cognitive-behavioural-therapy-attention-deficit-hyperactivity-disorder-adhd-adults

### E07 — Safren e colegas: programa de habilidades

JAMA, 2010;304:875–880. DOI 10.1001/jama.2010.1192. Ensaio com 86 adultos medicados e sintomas persistentes; TCC versus relaxamento com apoio educacional, favorecendo TCC. Limites: intervenção multicomponente com terapeuta e população selecionada; não demonstra timer ou decomposição isoladamente. Acesso: resumo e texto selecionado. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC3641654/

### E08 — Solanto e colegas: organização e planejamento

American Journal of Psychiatry, 2010;167:958–968. DOI 10.1176/appi.ajp.2009.09081123. Ensaio de 12 semanas com 88 adultos; terapia metacognitiva versus suporte, com melhora de desatenção. Limites: grupo estruturado, contato profissional e múltiplas habilidades; não valida automaticamente um checklist digital. Acesso: resumo do estudo. Link: https://pubmed.ncbi.nlm.nih.gov/20231319/

### E09 — Moëll e colegas: Living SMART

Internet Interventions, 2015;2:24–31. DOI 10.1016/j.invent.2014.11.004. Ensaio pequeno, 57 adultos com TDAH ou quadro subclínico; curso orientado ensinava uso de smartphone para organizar o cotidiano. Limites: suporte de coach e lista de espera impedem atribuir resultado ao app sozinho. Acesso: resumo/editorial indexado e caracterização na revisão Cochrane; texto integral da editora não recuperado. Link: https://www.sciencedirect.com/science/article/pii/S2214782914000347

### E10 — Gabarron, Denecke e Lopez-Campos: panorama digital

BMC Psychiatry, 22/04/2025;25:414. DOI 10.1186/s12888-025-06825-0. Revisão de 26 revisões, idades e intervenções diversas. Limites: sobreposição de estudos, qualidade frequentemente baixa/crítica e informação de segurança incompleta; não fornece certeza única para todos os apps. Acesso: métodos, tabelas e discussão. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12016436/

### E11 — Schofield e colegas: tecnologias para adultos

Frontiers in Digital Health, 23/02/2026;8:1746732. DOI 10.3389/fdgth.2026.1746732. Revisão de escopo com 133 estudos até dezembro de 2025, especificamente adultos. Limites: tecnologias e propósitos heterogêneos; mapeamento de pesquisa não demonstra eficácia agregada de ferramentas cotidianas. Acesso: métodos, resultados e síntese. Link: https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1746732/full

### E12 — D’Amelio e colegas: attexis

Psychological Medicine, 11/03/2026;56:e54. DOI 10.1017/S0033291726103390. Ensaio com 337 adultos de 18–65 anos, diagnóstico confirmado; programa digital mais cuidado usual versus cuidado usual. Sintomas favoreceram intervenção aos três meses (d=0,85), com resultados também em funcionamento. Limites: autorrelato, participantes não cegos, população digitalmente selecionada e financiamento/vínculos com fabricante. Acesso: métodos, resultados, limitações e conflitos. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC13079232/

### E13 — Antshel, McBride e Knouse: aplicativo informado por TCC

Online em 11/11/2025; Journal of Attention Disorders, 2026;30:370–385. DOI 10.1177/10870547251384462. Ensaio com 154 adultos de 18–55 anos, oito semanas versus lista de espera. Sintomas e qualidade de vida melhoraram; prejuízo funcional não mostrou o mesmo resultado. Limites: expectativa do comparador, autorrelato e conflito comercial declarado por autora. Acesso: resumo e declaração de conflitos; integral restrito. Link: https://pubmed.ncbi.nlm.nih.gov/41220055/

### E14 — Intervenção digital não guiada em adultos

Deutsches Ärzteblatt International, 2026. DOI 10.3238/arztebl.m2026.0065. Ensaio exploratório com 307 adultos, média de 36 anos, 12 semanas; qualidade de vida favoreceu app mais cuidado usual (d=0,54; IC90% 0,33–0,74). Limites: alfa 10%, baixa adesão, sem confirmação diagnóstica padronizada no estudo e sem longo prazo. Acesso: resumo e resultados indexados. Há divergência na proporção de resposta do controle entre resumo e corpo indexado; essa proporção não foi usada nesta síntese. Link: https://pubmed.ncbi.nlm.nih.gov/42240305/

### E15 — Metanálise de processamento temporal

Meta-analysis: Altered Perceptual Timing Abilities in ADHD, 2022; registro publicado online em 2021. Cinquenta e cinco estudos, pessoas com TDAH e controles, paradigmas de milissegundos a segundos. Encontrou diferenças em várias medidas temporais. Limite: tarefas laboratoriais/idades diversas não determinam a duração de uma sessão de atividade. Acesso: resumo. Link: https://pubmed.ncbi.nlm.nih.gov/34923055/

### E16 — Memória prospectiva complexa

PLOS ONE, 2013;8:e58338. DOI 10.1371/journal.pone.0058338. Estudo comparativo com 45 adultos com TDAH sem estimulantes e 45 controles; dificuldades destacaram planejamento. Limites: caso-controle/laboratório, não ensaio de lembretes e sem generalização automática a pessoas medicadas. Acesso: resumo e texto selecionado. Link: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058338

### E17 — Beheshti e colegas: regulação emocional

BMC Psychiatry, 12/03/2020;20:120. DOI 10.1186/s12888-020-2442-7. Metanálise de 13 estudos, N=2.535, adultos com TDAH/controles, com associação a dificuldades emocionais. Limites: associação e medidas heterogêneas não estabelecem mecanismo individual, critério diagnóstico separado ou eficácia de linguagem acolhedora em app. Acesso: resumo e síntese indexada. Link: https://pubmed.ncbi.nlm.nih.gov/32164655/

### E18 — Albulescu e colegas: micropausas

PLOS ONE, 31/08/2022;17:e0272460. DOI 10.1371/journal.pone.0272460. Metanálise: 22 amostras independentes, N=2.335, estudantes/trabalhadores saudáveis. Efeitos pequenos em vigor/fadiga; desempenho global não significativo. Limites: população sem seleção por TDAH e tarefas variadas. Acesso: resumo, métodos e resultados. Link: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0272460

### E19 — Biwer e colegas: pausas estruturadas

British Journal of Educational Psychology, 01/03/2023. DOI 10.1111/bjep.12593. Estudo com 87 universitários; blocos 24/6 ou 12/3 versus pausas autorreguladas. Experiência subjetiva favoreceu estrutura em parte dos resultados; conclusão de tarefas não diferiu. Limites: análise de um dia, perdas/exclusões e ausência de seleção por TDAH. Acesso: resumo, desenho e resultados. Link: https://bpspsychub.onlinelibrary.wiley.com/doi/10.1111/bjep.12593

### E20 — Comparação Pomodoro, Flowtime e autorregulação

Behavioral Sciences, 2025. Estudo com 94 universitários, média de 20 anos e 93% mulheres, sessão de duas horas. Não encontrou superioridade geral em produtividade, motivação, fadiga ou conclusão; algumas trajetórias foram menos favoráveis às técnicas estruturadas. Limites: curto, amostra homogênea, autorrelato e poder limitado; não TDAH clínico. Acesso: métodos e discussão. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12292963/

### E21 — Göksu, Wiradhany e de Bruin: pausas e aprendizagem

Behavioral Sciences, 09/07/2026;16:1158. DOI 10.3390/bs16071158. Estudo com 176 universitários em leitura; não houve diferença significativa de desempenho e autorregulação favoreceu humor/experiência. Limites: tarefa específica, medida de desempenho possivelmente pouco sensível e sem seleção por TDAH. Acesso: resumo completo. Link: https://pubmed.ncbi.nlm.nih.gov/42510279/

### E22 — Nordby e colegas: SMS adicionais

Frontiers in Digital Health, 2022;4:821031. DOI 10.3389/fdgth.2022.821031. Randomizações repetidas com 109 adultos com diagnóstico autorrelatado; sem efeito global em conclusão de módulos ou prática de estratégias. Limites: aviso inicial já enviado a todos, quase 40% sem avaliações finais e maioria feminina; não testa qualquer tipo de lembrete cotidiano. Acesso: métodos, resultados e limitações. Link: https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2022.821031/full

### E23 — Gilbert: descarregar intenções

Quarterly Journal of Experimental Psychology, 2015;68:971–992; online em 2014. DOI 10.1080/17470218.2014.972963. Quatro experimentos online, N=1.196, população geral; lembretes externos melhoraram tarefa de intenção breve. Limites: transferência naturalística modesta e ausência de amostra clínica de TDAH. Acesso: resumo e texto selecionado. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC4448673/

### E24 — Leroy e Glomb: plano para voltar

Organization Science, 11/05/2018;29:380–397. DOI 10.1287/orsc.2017.1184. Quatro estudos, população geral; planejar retorno reduziu resíduo de atenção e prejuízo na tarefa que interrompe. Limites: não estudo clínico de TDAH; não confundir com comprovação de retomada cotidiana. N total não extraído do resumo consultado. Acesso: resumo da editora. Link: https://pubsonline.informs.org/doi/abs/10.1287/orsc.2017.1184

### E25 — Nigg e colegas: ruído branco/rosa

JAACAP, 2024;63:778–788; online em 28/02/2024. DOI 10.1016/j.jaac.2023.12.014. Metanálise de 13 estudos, 335 crianças/jovens com TDAH/sintomas, efeito pequeno em tarefas; sem estudos de ruído marrom incluídos. Limites: laboratório, pouca representatividade adulta e cegamento difícil; certeza moderada segundo os autores para esse efeito específico. Acesso: métodos, resultados e discussão. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC11283987/

### E26 — Saville e colegas: música e TDAH

Behavioral Sciences, 13/01/2025;15:65. DOI 10.3390/bs15010065. Revisão narrativa sistematizada de 20 estudos, 1.170 participantes, 830 com TDAH/ADD; mistura percepção musical, escuta e intervenções. Limites: idades/diagnósticos/medicação heterogêneos, sem efeito único para playlist ou apresentação desatenta; musicoterapia não equivale a som no app. Acesso: resumo, resultados e limitações. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC11762814/

### E27 — Eagle, Baltaxe-Admony e Ringland: body doubling

ACM Transactions on Accessible Computing, outubro de 2024;17, artigo 16. Pesquisa com 220 adultos de 18–72 anos, principalmente neurodivergentes, descreve formas e razões de uso. Limites: autorseleção, diagnóstico não exigido, predomínio EUA/Europa; relato de utilidade não demonstra causalidade. Acesso: manuscrito completo da autora, com foco em métodos/limitações. Link: https://leyabreanna.com/papers/body_double_taccess.pdf

### E28 — Schuenke e Moore: experimento preliminar de presença

CCSC Central Plains, 2025, resumo de pôster. Pessoas com TDAH medicadas/não medicadas e controles fizeram leitura com/sem acompanhante; resumo relata ausência de efeito significativo em desempenho/foco/calma. N não informado nesse resumo. Limites: preliminar e tarefa pouco representativa de início cotidiano; ausência de significância não prova ineficácia. Publicação relacionada no ASSETS 2025 teve integral bloqueado e não foi usada para números adicionais. Acesso: resumo dos autores no congresso. Link: https://www.ccsc.org/centralplains/2025/talks/talk-poster16/

### E29 — Ara e colegas: presença em realidade virtual

arXiv 2509.12153, 15/09/2025, preprint. Doze participantes em construção virtual, com presença humana ou agente de IA, tiveram execução mais rápida e avaliações subjetivas favoráveis. Limites: amostra mínima, tarefa artificial, situação diagnóstica não esclarecida no resumo e sem revisão por pares confirmada no registro consultado. Não comprova equivalência humano/IA. Acesso: resumo/registro. Link: https://arxiv.org/abs/2509.12153

### E30 — Selaskowski e colegas: chatbot estruturado

BJPsych Open, 2023. Ensaio de três semanas: 40 adultos randomizados, 34 completaram; chatbot versus aplicativo de psicoeducação. Não houve vantagem entre grupos. Limites: pequeno/curto, sem controle sem intervenção e chatbot estruturado, não LLM generativo. Não concluir equivalência clínica por ausência de diferença. Acesso: métodos, resultados e discussão. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC10594162/

### E31 — Parmar, Oyelere e Aruleba: AR e IA generativa

Discover Education, 19/02/2026; versão de registro em 26/03/2026;5:235. DOI 10.1007/s44217-026-01264-9. Piloto intrassujeitos com 15 universitários diagnosticados; tendências quantitativas não significativas e relatos de utilidade. Limites: novidade, ordem/carryover e intervenção combinada impedem isolar IA; sem longo prazo. Acesso: resumo, métodos e limitações. Link: https://link.springer.com/article/10.1007/s44217-026-01264-9

### E32 — Planos gerados por IA avaliados por especialistas

BMC Psychology, 05/12/2025; artigo com DOI 10.1186/s40359-025-03729-2. Avaliação de três perfis hipotéticos por 27 especialistas; apontou coerência teórica e problemas de viabilidade/personalização. Limites: nenhum resultado de pacientes; não é ensaio de execução de tarefas. Acesso: métodos e resultados. Link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12784522/

### E33 — W3C COGA: foco e interrupções

Conteúdo publicado inicialmente em 29/04/2021. Orientação complementar para pessoas com dificuldades cognitivas/aprendizagem: limitar interrupções e facilitar orientação. Limites: não ensaio de eficácia nem critério normativo isolado para certificar acessibilidade. Acesso: orientação oficial. Link: https://www.w3.org/WAI/WCAG2/supplemental/objectives/o5-user-focus/

### E34 — W3C WCAG 2.2

Recomendação de 2023, edição consultada de 12/12/2024. Norma técnica de acessibilidade, para web em diferentes dispositivos. Limites: conformidade não prova baixa carga cognitiva para toda pessoa ou eficácia clínica; testes automáticos não bastam. Acesso: norma oficial. Link: https://www.w3.org/TR/WCAG22/

### E35 — OMS: governança de IA generativa

Orientação/comunicado de 18/01/2024 sobre grandes modelos multimodais em saúde. Destaca erros, viés, confiança excessiva, privacidade e participação dos usuários. Limite: governança, não evidência de benefício em TDAH ou validação de fornecedor. Acesso: comunicado e referência oficial. Link: https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models

### E36 — ANPD: proteção de dados

Perguntas frequentes, publicadas em 25/07/2024, versão atualizada em 09/09/2026 consultada nesta pesquisa. Orientação institucional brasileira; dados de saúde são sensíveis. Limites: não é auditoria jurídica do produto nem define sozinha base legal/contratos de cada operação. Acesso: orientação oficial indexada. Link: https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes

### E37 — MDN: abas e timers

Page Visibility API, documentação contínua consultada em 12/11/2026. Descreve limitação de callbacks/timers em segundo plano. População não aplicável: documento técnico. Limites: diferenças entre navegadores exigem teste real; visibilidade não mede atenção. Acesso: documentação oficial Mozilla. Link: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

### E38 — Castelo e colegas: bloqueio de internet móvel

PNAS Nexus, fevereiro de 2025;4:pgaf017. DOI 10.1093/pnasnexus/pgaf017. Ensaio com 467 participantes da população geral, duas semanas de bloqueio; atenção sustentada e bem-estar favoreceram intervenção, com adesão difícil. Limites: usuários de iPhone, seleção voluntária e só 119 atenderam critério de aderência; não tratamento de TDAH ou bloqueio seletivo de tarefa. Acesso: desenho/resultados indexados. Link: https://academic.oup.com/pnasnexus/article/4/2/pgaf017/8016017

### E39 — Ministério da Saúde: PCDT do TDAH

Portaria Conjunta nº 14, de 29/07/2022; anexo alterado em 30/08/2022. Diretriz brasileira para diagnóstico, tratamento e acompanhamento. Limites: não avalia a Passólia; nomenclatura/contexto nacional não são validação digital. Acesso: página oficial e resumo do PCDT, sem nova avaliação integral do protocolo nesta tarefa. Link: https://www.gov.br/saude/pt-br/assuntos/pcdt/t/transtorno-do-deficit-de-atencao-com-hiperatividade-tdah/view

### E40 — Revisão de jogos terapêuticos pediátricos

JMIR Serious Games, 2025; artigo e60937. Revisão de 35 estudos em crianças com TDAH e jogos digitais, com buscas até janeiro de 2024. Limites: intervenções multicomponentes, estudos e medidas heterogêneos; não isola pontos/mascote nem representa organização de adultos. Acesso: método e descrição dos estudos. Link: https://games.jmir.org/2025/1/e60937/

## 16. Adendo pronto para orientar o Cursor

```text
Integre à Passólia o módulo de foco especificado nesta pesquisa.

Antes de editar, leia o prompt mestre e a matriz atuais, este documento
e o código existente. Preserve RF04, RF06–RF15, RF26 e RF29.
Não recrie tarefas, autenticação, notificações ou IA em módulos paralelos.

Implemente primeiro MF01–MF07 e MF10–MF11 em fatias verificáveis.
MF09 é opcional e não pode bloquear o fluxo manual. Mantenha estimativas
simples editáveis; aprendizado temporal, áudio, bloqueadores, jogo e
presença acompanhada permanecem nas prioridades posteriores indicadas.

Use o fluxo escolher → definir próxima ação → começar → anotar/pausar
→ retomar → encerrar com resultado explícito. Sessão, passo, tarefa e
ocorrência têm estados separados. Tempo e visibilidade de aba não medem
atenção. Não conclua tarefas ou altere prazos automaticamente.

Registre as decisões novas: defaults de cinco minutos, revisão temporal
após lacuna de referência de 30 minutos e eventual extensão offline são
hipóteses configuráveis de produto/engenharia, não prescrições clínicas.

Execute os cenários FOC01–FOC40 pertinentes a cada entrega, associando-os
à matriz existente sem renumerá-la. Registre comandos e resultados reais;
não declare benefício clínico, acessibilidade completa ou teste executado
com base apenas em código ou screenshots. Preserve alternativa manual,
privacidade das notas, revisão das propostas de IA e controle do usuário.

Atualize docs/CHECKPOINT.md com o que foi implementado, testado,
bloqueado e ainda planejado. Não habilite experimentos F21 antes da
decisão de teste correspondente. Ao fim, informe limitações verificadas.
```

O próximo marco é um protótipo funcional do ciclo de começo e retomada, seguido de testes de usabilidade e de utilidade cotidiana. A pesquisa orienta escolhas e limites; a eficácia da implementação continua sendo uma pergunta a investigar.
