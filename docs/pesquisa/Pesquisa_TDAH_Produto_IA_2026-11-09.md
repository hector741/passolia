# TDAH, organização cotidiana e inteligência artificial

## Pesquisa aplicada para desenvolver um aplicativo personalizável

**Preparado para Hector Marinho | 9 de novembro de 2026 | Versão 1.0**

**Público inicial:** adultos no Brasil, com diagnóstico de TDAH ou em investigação. **Escopo:** vida pessoal, doméstica, financeira, profissional, acadêmica, afetiva e vestuário. **Natureza:** pesquisa documental orientada ao desenvolvimento de produto; não é revisão sistemática, avaliação clínica individual ou comprovação de eficácia de um produto ainda não construído.

As referências [C01], [A01], [L01] e [T01] têm links na bibliografia. C identifica ciência e diretrizes; A, documentação de aplicativos; L, normas e proteção de dados; T, acessibilidade e documentação técnica. Funcionalidades, metas e prioridades propostas são hipóteses de produto, salvo indicação expressa em contrário.

## 1. Resumo executivo e decisões recomendadas

**A oportunidade mais defensável é criar um apoio cotidiano que transforme intenções em ações pequenas, com baixo esforço para começar e para voltar a usar.** Acrescentar IA a uma agenda, isoladamente, já não representa um diferencial suficiente: Tiimo, Structured, Todoist, TickTick e Goblin Tools anunciam recursos de IA. Há concorrência também em finanças, limpeza, relacionamentos e guarda-roupa. [A01-A05; A08-A09; A13-A18]

As diretrizes clínicas apoiam intervenções psicológicas estruturadas e adaptações de contexto. Isso oferece base para estudar planejamento, organização e divisão de atividades. Não autoriza transferir automaticamente a eficácia da TCC para um checklist ou chatbot que utilize termos semelhantes. [C02-C03]

Uma revisão de revisões de 2025 encontrou evidência geralmente fraca e predominantemente pediátrica. Uma revisão de escopo de 2026, específica de adultos, identificou 133 estudos, mas destacou limitações de viés, adesão e implementação. O mercado de ferramentas é mais amplo que a base de evidência clínica disponível para cada produto. [C05-C06]

Há ensaios promissores em adultos. No estudo de attexis, com 337 participantes, houve redução de sintomas em comparação ao cuidado habitual. Outro ensaio, com 154 adultos, encontrou ganhos em sintomas e qualidade de vida, mas não em uma medida de prejuízo funcional. São intervenções específicas, com limitações; não comprovam o benefício de uma plataforma generalista com IA. [C07-C08]

**Posicionamento proposto:** “Ajuda para organizar o que importa e dar o próximo passo, do seu jeito.” O produto pode acolher pessoas em investigação sem exigir laudo, inferir diagnóstico pelo uso ou prometer tratamento.

| Decisão | Recomendação inicial | Justificativa de produto |
| --- | --- | --- |
| Problema principal | Capturar, escolher e começar uma ação importante | Permite testar utilidade sem construir todos os módulos |
| Diferencial a validar | Retomada fácil, português brasileiro e contexto entre áreas | Hipótese verificável; não uma lacuna de mercado já provada |
| MVP | Captura rápida, Hoje, passos pequenos, rotina, lembretes e retomada | Forma um ciclo completo de uso |
| IA inicial | Organizar texto, propor passos e alternativas de replanejamento | Usos delimitados, revisáveis e com alternativa manual |
| Finanças | Lembretes e checklist de contas | Evita começar por um sistema bancário e contábil completo |
| Vida a dois | Acordos explícitos e tarefas compartilhadas em piloto posterior | Requer consentimento e testes com duas pessoas |
| Vestuário | Looks salvos e peças favoritas; catálogo amplo depois | Testa utilidade sem fotografar o armário inteiro |
| Validação | Resultados cotidianos, esforço e efeitos indesejados | Frequência de acesso sozinha não demonstra benefício |

O projeto é tecnicamente plausível. A incerteza principal é se pessoas com necessidades diversas vão considerá-lo útil ao longo do tempo, com um esforço de manutenção menor que o benefício recebido. Essa questão deve ser testada antes de ampliar o produto.

## 2. Como a pesquisa foi conduzida

### 2.1 Pergunta e recorte

Pergunta orientadora: quais necessidades de adultos com TDAH podem receber apoio digital útil, quais estratégias e produtos possuem evidência, e como traduzir esses achados em uma plataforma personalizável com IA?

As buscas ocorreram em **09/11/2026**. Foram usadas buscas na web em português e inglês, direcionadas a PubMed/PMC, periódicos, NICE, AADPA, NIMH, Ministério da Saúde, ANPD, Anvisa, W3C, documentação oficial e lojas oficiais. Não houve consulta exaustiva diretamente em todas as bases bibliográficas, triagem por dois revisores ou avaliação formal GRADE/RoB de cada estudo.

Foram priorizados documentos recentes para o panorama digital e estudos anteriores diretamente pertinentes. Não se pressupõe que todos os resultados de 2026 já estejam indexados.

| Frente | Exemplos de termos utilizados | Finalidade |
| --- | --- | --- |
| Diretrizes | “NICE NG87 ADHD adults non pharmacological”; “TDAH protocolo clínico” | Definir limites clínicos |
| Intervenções digitais | “adult ADHD digital interventions systematic review”; “ADHD smartphone app randomized trial” | Localizar sínteses e ensaios |
| Experiência de uso | “adult ADHD app user needs usability adherence”; “SMS reminders ADHD Nordby” | Investigar adesão e fricção |
| Funções e cotidiano | “adult ADHD time perception”; “emotion dysregulation”; “hyperfocus” | Diferenciar necessidades |
| Finanças e relações | “ADHD financial distress”; “romantic relationships ADHD” | Fundamentar outras áreas da vida |
| Vestuário | “ADHD adults clothing wardrobe app executive function” | Investigar apoio ao vestir |
| Mercado | Nome do produto + pricing, FAQ, languages, AI e evidência | Conferir recursos e acesso |
| Brasil e tecnologia | “LGPD dados sensíveis”; “ANPD transferência internacional”; “Anvisa RDC 657”; “Web Push iOS” | Traduzir requisitos legais e técnicos |

### 2.2 Seleção e limitações

Foram incluídos estudos em adultos, diretrizes, pesquisas de necessidades, intervenções digitais e documentos oficiais dos produtos. Estudos pediátricos servem para contextualizar limites de generalização. Materiais comerciais identificam recursos e condições anunciados; não comprovam resultados de saúde.

Listas de afiliados, promessas sem referência e descrições sem origem verificável não sustentam as recomendações clínicas. Resultados secundários ajudaram a localizar originais. Algumas páginas apresentaram bloqueio, conteúdo dinâmico ou acesso restrito; nesses casos foram usados resumos indexados ou fontes oficiais alternativas. A bibliografia indica os principais acessos parciais. Não se afirma leitura integral de obras inacessíveis.

**O comparativo é documental.** Não foram instalados, comprados ou testados os aplicativos. Não houve auditoria de segurança, teste de leitores de tela, medição de bateria ou validação de integrações. Preços e recursos variam por versão, plataforma, país e elegibilidade. Português na descrição da loja não significa português na interface.

### 2.3 Como interpretar as afirmações

| Marcador | Significado | Limite |
| --- | --- | --- |
| Diretriz | Orientação clínica institucional | Não certifica o futuro aplicativo |
| ECR | Ensaio clínico randomizado | Vale para a intervenção e população estudadas |
| Observacional/qualitativo | Associação, experiência ou viabilidade | Não estabelece causalidade |
| Documentação comercial | Informação do fornecedor | Exige verificação operacional |
| Proposta | Inferência ou escolha deste estudo | Precisa ser construída e testada |

“Mais consistente”, “promissora” e “exploratória” são avaliações narrativas deste estudo, não classificações formais GRADE. Participantes de revisões sobrepostas não devem ser somados como amostras independentes.

## 3. O que o produto precisa entender sobre TDAH

### 3.1 Sintomas, contexto e diversidade

O TDAH é uma condição do neurodesenvolvimento. Desatenção e/ou hiperatividade e impulsividade persistentes podem comprometer diferentes contextos da vida. Planejamento, organização e memória de trabalho são relevantes, mas não formam um perfil único. PCDT brasileiro e NIMH fornecem a referência clínica básica. [C01; C04]

Sono, ansiedade, depressão e outras condições podem produzir dificuldades semelhantes ou coexistir com o TDAH. Uma resposta sobre esquecimento, cansaço ou procrastinação não identifica diagnóstico, gravidade ou causa. A personalização deve trabalhar com necessidades declaradas. [C04]

Há associação entre TDAH adulto e dificuldades de regulação emocional. Isso merece atenção no desenho de linguagem e notificações, sem tratar cada frustração como manifestação do transtorno. [C14]

Pesquisas sobre percepção temporal identificam diferenças médias entre grupos, com variações por idade e tarefa. Apoiam investigar recursos de visualização do tempo, sem afirmar que um cronômetro corrige uma função cognitiva ou que toda pessoa tem “cegueira temporal”. [C15]

Hiperfoco não é critério diagnóstico obrigatório. Um estudo encontrou maior autorrelato em pessoas com mais sintomas; outro não encontrou diferenças em vários indicadores entre pacientes e controles pareados. O produto pode apoiar transições quando solicitado, sem detectar automaticamente um estado clínico. [C16-C17]

Esquecer objetos fora de vista não equivale a perder “permanência do objeto” no sentido do desenvolvimento infantil. Para a interface, é mais preciso falar em visibilidade, lembrança e recuperação de informações. Também não se devem usar promessas de “desintoxicação de dopamina” ou “reprogramação cerebral” como fundamento científico.

### 3.2 Limites do apoio digital

É possível testar se o sistema reduz o esforço para registrar um compromisso, iniciar uma ação ou encontrar uma informação. Afirmar que reduz sintomas ou trata TDAH exige desfechos e avaliação específicos. Um aviso no rodapé não substitui a finalidade real do produto.

Não é necessário cadastrar diagnóstico, medicamentos, histórico de trauma, renda detalhada ou dificuldades íntimas para usar um planejador. A configuração básica pode começar por objetivos e preferências.

## 4. O que a ciência permite concluir

### 4.1 Documentos e estudos centrais

| Fonte e desenho | Escopo | Achado útil | Limite para o projeto |
| --- | --- | --- | --- |
| NICE NG87 e AADPA [C02-C03] | Diretrizes para adultos | Intervenção psicológica estruturada, incluindo elementos de TCC, e adaptações de contexto | Não validam um checklist ou chatbot |
| Gabarron e colegas, 2025 [C05] | Revisão de 26 revisões; maioria pediátrica | Sinais de benefício digital, evidência geralmente fraca e efeitos adversos pouco documentados | Não extrapolar treino cognitivo infantil para organização de adultos |
| Schofield e colegas, 2026 [C06] | Revisão de escopo, 133 estudos em adultos | Limitações de viés, adesão e implementação real | Campo promissor e heterogêneo |
| attexis, 2026, ECR [C07] | 337 adultos; intervenção + cuidado habitual versus cuidado habitual | Em três meses, diferença ajustada de -5 pontos na ASRS; d=0,85; seguimento até seis meses | Autorrelato, sem controle ativo e vínculos com fabricante |
| Antshel e colegas, 2026, ECR [C08] | 154 adultos; oito semanas; lista de espera | Ganhos de sintomas e qualidade de vida; sem benefício na medida de prejuízo funcional | Texto integral restrito; marca não identificada no resumo |
| Inflow, 2022, estudo aberto [C09] | Sete semanas, sem controle | Viabilidade e usabilidade favoráveis entre respondentes | Perdas e seleção; melhora autorreferida não estabelece causalidade |
| FOCUS ADHD, Brasil, 2023, ECR [C10] | 73 adultos; três grupos; três meses | Avaliação favorável; sem diferença significativa na adesão medida pela posse de medicamento | Registrar uma tomada não equivale a comprovar adesão |
| Nordby e colegas, 2022 [C11] | 109 adultos com diagnóstico autorreferido | SMS não melhorou globalmente conclusão de módulos ou prática das estratégias | Mais lembretes não resolvem sozinhos a adesão |
| Adult ADHD App, 2025 [C12] | Dados de uso e 14 entrevistas na Irlanda | Iniciantes valorizam informação; outros querem apoio no momento da dificuldade | Experiência de uso, não eficácia clínica |
| Living SMART, 2015, ECR [C21] | 57 participantes; seis semanas; apoio de coach | Curso para usar ferramentas do smartphone apresentou sinais de melhora | Efeito do conjunto curso, apoio e ferramentas; amostra pequena |

**Interpretação:** d=0,85 não significa “85% de melhora”. É uma medida padronizada de diferença entre grupos. Comparadores, escalas, recrutamento e acompanhamento variam; não permitem um ranking direto de produtos. Ausência de eventos adversos relatados não demonstra risco zero.

O ECR de Antshel declara vínculo de uma autora com Inflow. Isso não basta, isoladamente, para identificar o nome comercial e a versão efetivamente testada. O estudo é incluído como evidência de intervenção móvel baseada em TCC, sem atribuição comercial definitiva. [C08]

### 4.2 Áreas além da produtividade

**Finanças.** Um estudo populacional sueco encontrou associação entre TDAH e dificuldades financeiras objetivas. Não demonstra que um aplicativo as resolverá, nem que dificuldades econômicas decorram apenas do transtorno. Renda, acesso, juros e contexto importam. [C13]

**Relacionamentos.** Pesquisa qualitativa com 355 respostas descreveu desafios emocionais, práticos e desequilíbrios entre papéis de parceiro e cuidador. A pergunta focalizava impactos negativos; não representa todos os casais com TDAH. [C18]

**Guarda-roupa.** Jiang e Macintyre analisaram 27 aplicativos e 5.953 avaliações. Encontraram relatos de organização, confiança e menor sobrecarga, inclusive de pessoas que se disseram neurodivergentes. É sinal de necessidade sujeito a seleção e autorrelato; não é ensaio clínico em TDAH. [C19]

**Apoio ao casal.** Paired possui estudo misto observacional. Há potencial de ajudar a comunicação, mas seleção e ausência de randomização limitam causalidade. Não comprova eficácia para casais com TDAH. [C20]

**Body doubling.** Um preprint de realidade virtual apresenta resultados exploratórios com 12 participantes em tarefa específica. Não comprova eficácia clínica geral, equivalência entre presença humana e IA ou resultados do Focusmate. Deve ser experimento opcional. [C22]

**Retorno ao uso.** Reduzir acessos pode significar abandono, inadequação ou que a ferramenta cumpriu seu propósito. Retenção deve ser interpretada junto com utilidade e necessidade atual. [C06; C20]

### 4.3 Implicação geral

Vale investigar recursos que externalizem informações, reduzam etapas e apoiem ações concretas. A evidência mais pertinente envolve intervenções estruturadas e contextualizadas. O futuro produto precisará de evidência própria; estudos de concorrentes não permitem anunciá-lo como “clinicamente comprovado”.

## 5. Necessidades traduzidas em funcionalidades testáveis

**E** indica evidência de necessidade ou estratégia; **H**, hipótese da funcionalidade. Evidência de dificuldade não prova eficácia da solução.

| Necessidade e exemplo | Base e limite | Funcionalidade proposta | Benefício esperado e teste |
| --- | --- | --- | --- |
| Planejamento: muitas intenções | E: contexto clínico [C01-C04]; H: desenho | Caixa única de captura e poucos focos visíveis, ajustáveis | Menos decisões; medir tempo para escolher e esforço |
| Início: “fazer imposto de renda” é amplo | E: estratégias estruturadas [C03]; H: microação | Propor “abrir a pasta de documentos”, editável | Facilitar início; medir latência e adequação do passo |
| Memória: lembrar no momento errado | E: dificuldades descritas [C01; C04]; H: contexto | Checklist e materiais ligados ao compromisso | Menos esquecimentos; acompanhar eventos elegíveis |
| Tempo: subestimar preparação | E: diferenças médias [C15]; H: faixas | Duração estimada, margem e horário de saída | Comparar estimativa e duração voluntariamente observada |
| Transição: permanecer além do previsto | E: hiperfoco heterogêneo [C16-C17]; H: sinal | Aviso escolhido, pausa ou continuar | Medir utilidade e incômodo, sem detectar hiperfoco |
| Priorização: tudo parece urgente | H: mecanismo de produto | Separar prazo real, preferência e tarefa flexível | Avaliar escolhas em cenários e compreensão |
| Emoções: culpa após dias sem uso | E: associação emocional [C14]; H: linguagem | Retomada sem punição ou dívida imposta | Entrevistas e comparação de jornadas |
| Casa: uma pessoa precisa lembrar tudo | H: solução compartilhada | Responsável, frequência e definição de pronto | Medir clareza dos acordos de cada participante |
| Finanças: esquecer uma conta | E: associação financeira [C13]; H: lembrete | Agenda de contas e compras em espera | Acompanhar atrasos evitáveis, considerando renda |
| Trabalho/estudos: entrega indefinida | E: impacto funcional [C04]; H: assistência | Converter objetivo em entrega, passos e bloco | Medir início, entrega e esforço de manutenção |
| Casal: responsabilidades implícitas | E: relatos [C18]; H: acordo | Convites, acordos revisáveis e conversa opcional | Ouvir ambas as pessoas separadamente |
| Vestuário: decidir na última hora | E: relatos na categoria [C19]; H: rotina | Looks salvos por ocasião e preparação prévia | Medir tempo, conforto e adequação percebida |
| Sobrecarga: organizar vira tarefa | E: adesão/experiência [C06; C12]; H: interface | Ocultar módulos e manter uso manual simples | Testar após interrupções e com baixa familiaridade digital |

## 6. Comparativo documental de 18 soluções

### 6.1 Recursos, IA e limites

“Não localizada” significa ausência de comprovação específica de eficácia para TDAH adulto no corpus consultado, não inexistência de qualquer publicação. Acessibilidade anunciada é autodeclarada. Pontos de atenção são análise de desenho, salvo indicação de estudo.

| Solução e fonte | Função e personalização | IA e acessibilidade observada | Evidência e ponto de atenção |
| --- | --- | --- | --- |
| Tiimo [A01] | Agenda visual, foco, listas e planejamento | Co-planner; ficha Apple declara VoiceOver, voz, texto maior e modo escuro | Eficácia da versão atual não localizada; concorrente direto |
| Structured [A02] | Linha do tempo, subtarefas, cores e avisos | IA em iOS/Android; Replan em iOS; paridade incompleta | Não localizada; verificar recurso em cada plataforma |
| Routinery [A03] | Rotinas com passos, tempo e orientação por voz | Anuncia conexão com assistentes por MCP | Não localizada; sequência pode exigir ajuste em imprevistos |
| Inflow [A04] | Microlições, exercícios, diário e comunidade | Programa guiado; IA generativa não confirmada | Viabilidade [C09]; atribuição do ECR [C08] requer confirmação |
| Goblin Tools [A05] | Divisão de tarefas e ferramentas de escrita | IA, granularidade e instruções no Pro | Eficácia clínica não localizada; fornecedor alerta para imprecisão |
| Focusmate [A06] | Sessões em dupla por vídeo e agenda | Presença humana; IA não é central | ECR para TDAH não localizado; câmera e horário podem ser barreiras |
| Finch [A07] | Autocuidado, metas, reflexões e mascote | Personalização lúdica; IA não confirmada | Eficácia para TDAH não localizada; estética não atende a todos |
| Todoist [A08] | Tarefas, projetos, filtros e calendário | Task Assist, Ramble e integrações de IA | Não localizada; muitas opções exigem configuração |
| TickTick [A09] | Tarefas, hábitos, calendário e foco | Premium anuncia assistente e captura por voz com IA | Não localizada; amplitude pode aumentar manutenção |
| Habitica [A10] | Hábitos e tarefas com avatar e recompensas | Gamificação central; IA não confirmada | Não localizada; verificar punições e esforço do jogo |
| Forest [A11] | Foco, árvores e bloqueio de distrações | Progresso visual; IA não é central | Não localizada; perda da árvore pode gerar frustração |
| YNAB [A12] | Planejamento do dinheiro e metas | Método de orçamento; IA não confirmada | Eficácia para TDAH não localizada; idioma e aprendizagem importam |
| Organizze [A13] | Contas, cartões e conexão bancária | Anuncia conexão com agentes de IA | Não localizada; qualidade e atualização dos dados são centrais |
| Mobills [A14] | Orçamento, gastos, cartões e metas | IA generativa não confirmada nas fontes selecionadas | Não localizada; avaliar incentivos do ecossistema de crédito |
| Tody [A15] | Limpeza, recorrência e divisão doméstica | Priorização e rodízio podem usar regras convencionais | Não localizada; divisão visível não é automaticamente justa |
| Paired [A16] | Perguntas e exercícios de conexão do casal | Conteúdo guiado; IA não confirmada | Estudo observacional geral [C20]; não específico de TDAH |
| Whering [A17] | Roupas, looks, calendário e mala | Sugestões e remoção de fundo anunciadas | Indícios na categoria [C19]; cadastro e conteúdo social exigem esforço |
| Acloset [A18] | Armário e planejamento de looks | Estilista, fotos e prova virtual com IA anunciados | Eficácia para TDAH não localizada; fotos e vieses estéticos importam |

### 6.2 Plataformas, português e cobrança

Consulta: **09/11/2026**. Valores em dólar não foram convertidos. Compra sem período identificado não foi tratada como mensalidade. Referências públicas não garantem elegibilidade no checkout.

| Solução | Plataformas principais | Português | Modelo e preço observado |
| --- | --- | --- | --- |
| Tiimo | Apple, Android e web | Sim, ficha Apple | Gratuito móvel e assinatura; web premium. Valores BR sem período claro: mensalidade não confirmada |
| Structured | Apple, Android e web | Listado na ficha Apple | Gratuito e Pro; mensal/anual/vitalício conforme região. Preço BR não confirmado |
| Routinery | Apple e Android | Listado na ficha Apple atual | Gratuito com compras; exemplos BR: R$15,99 mensal e R$115,90 anual; outras ofertas listadas |
| Inflow | iOS e Android | Não listado na ficha consultada | Assinatura e teste anunciado de sete dias; valor final não confirmado |
| Goblin Tools | Web, iOS e Android | Interface/qualidade em PT a validar | Básico web gratuito; Pro web US$3/mês; apps pagos à parte |
| Focusmate | Navegador, computador e celular | Interface em PT não confirmada | Três sessões grátis/semana; US$12/mês ou US$96/ano |
| Finch | iOS e Android | Não; suporte informa inglês | Gratuito e Plus; preço regional não confirmado |
| Todoist | Web, desktop e móvel | Sim | Gratuito; Pro US$7/mês ou US$60/ano na página consultada |
| TickTick | Web, desktop e móvel | Listado na ficha Apple | Gratuito; Premium US$49,99/ano no site atual |
| Habitica | Web, iOS e Android | Listado na ficha Apple | Gratuito com compras/assinaturas; preço atual não confirmado |
| Forest | iOS e Android | Listado na ficha Apple | Núcleo gratuito e Plus; valor não confirmado. Pro antigo não é a oferta para novos usuários |
| YNAB | Web, iOS e Android | Não; suporte informa inglês | US$14,99/mês ou US$109/ano; teste direto de 34 dias |
| Organizze | Web, iOS e Android | Sim | Web: Manual R$35/mês, Conectado R$45/mês, Plus R$69/mês; loja pode divergir |
| Mobills | Web, iOS e Android | Sim | Oferta anual: 12x R$19,90, total R$238,80; não é mensal sem compromisso |
| Tody | iOS/iPad e Android | Listado na ficha Apple | Individual gratuito; Premium US$9,99/ano; Premium+ desde US$25/ano, site global |
| Paired | iOS e Android | Suporte lista inglês, francês e alemão | Gratuito e assinatura; preço regional não confirmado |
| Whering | iOS e Android; extensão | Listado na ficha Apple | Gratuito com compras; não confirmado preço único de assinatura |
| Acloset | iOS e Android; recursos de navegador | Sim, FAQ | Até 100 peças grátis; assinatura acima do limite; valor atual não confirmado |

Organizze apresenta valores diferentes entre web e loja Apple. Foi registrada a oferta web identificada, sem conciliá-la artificialmente com preços regionais ou históricos. No Routinery, há múltiplos itens mensais e anuais: os exemplos não garantem disponibilidade a toda pessoa.

### 6.3 Aprendizados para o produto

1. **Tiimo e Structured:** IA e replanejamento já existem. O diferencial deve aparecer em situações e resultados verificáveis.
2. **Routinery e Goblin Tools:** entender como fazer e conseguir executar agora são necessidades distintas. Vale integrar ambas em um fluxo curto.
3. **Inflow:** conteúdo pode ser pequeno e estruturado. Consumir lições e resolver uma tarefa são resultados diferentes.
4. **Focusmate, Finch, Habitica e Forest:** mecanismos sociais e lúdicos precisam ser opcionais; câmera, mascote e competição não agradam a todos.
5. **YNAB, Organizze e Mobills:** finanças formam uma especialidade. Lembretes e compromissos permitem validar utilidade antes de replicar um sistema financeiro.
6. **Tody e Paired:** coordenação prática e conexão emocional são necessidades diferentes; relacionamento não se resume a tarefas.
7. **Whering e Acloset:** sugestões com peças existentes são viáveis como categoria; manter o inventário é parte do problema.

### 6.4 Por que ferramentas deixam de ser usadas

| Possível causa | Base | Experimento proposto |
| --- | --- | --- |
| Conteúdo deixa de corresponder à fase da pessoa | Entrevistas [C12] | Oferecer apoio à necessidade atual, não repetir introduções |
| Lembrete não facilita executar | Estudo de SMS [C11] | Comparar chamada genérica com ação curta preparada |
| Custo aparece após cadastrar muito conteúdo | Avaliações na categoria de armário [C19] | Mostrar limites antes de começar e permitir exportação |
| Configuração e recursos excessivos | Hipótese e acessibilidade [T01] | Primeira ação sem configurar todos os módulos |
| Lista se torna registro de fracasso | Hipótese de produto | Triagem, arquivamento e retomada preservando prazos reais |
| Ferramenta cumpriu seu propósito | Interpretação discutida em [C20] | Perguntar por que o uso diminuiu antes de classificá-lo como abandono |

Não foi feita mineração representativa de avaliações dos 18 produtos. Não são atribuídas taxas de abandono, reclamações recorrentes ou superioridade a aplicativos sem dados correspondentes.

## 7. Proposta de valor, perfis e organização do produto

### 7.1 Uma visão abrangente com entrada pequena

**Proposta de valor a testar:** um apoio em português brasileiro que recebe intenções dispersas, ajuda a escolher o que cabe agora e acompanha o próximo passo, com módulos opcionais para outras áreas da vida.

A integração só será valiosa se poupar trabalho. Uma agenda central poderia mostrar “reunião às 9h”, lembrar de separar o material e oferecer um look já salvo. Não precisa reunir informações bancárias e conversas íntimas para cumprir essa função. Cada vínculo entre módulos deve ser compreensível, opcional e reversível.

O núcleo é composto por captura, tarefas, eventos, rotinas, lembretes e preferências. Finanças, casa compartilhada, relações e vestuário utilizam esse núcleo, sem obrigar todas as pessoas a abrir seis painéis diariamente. Integração não significa acesso irrestrito da IA a todos os dados.

### 7.2 Perfis de uso baseados em necessidades

Estes perfis são instrumentos de projeto, não subtipos clínicos. Uma pessoa pode alternar entre eles.

| Perfil de necessidade | Situação ilustrativa | Configuração inicial proposta | Critério de utilidade |
| --- | --- | --- | --- |
| “Esqueço compromissos” | Trabalha fora e perde o horário de saída | Agenda, preparação e lembrete escolhido | Consulta a informação e sai com material adequado |
| “Sei o que fazer, mas não começo” | Adia uma entrega ampla | Um próximo passo e sessão curta ajustável | Inicia algo útil com menos esforço |
| “Minha casa depende de mim” | Centraliza lembretes domésticos | Rotinas simples; compartilhamento posterior | Responsabilidades ficam claras sem cobranças constantes |
| “Evito olhar minhas contas” | Acumula vencimentos e perde visão do mês | Lista mínima de contas; sem exigir orçamento completo | Identifica o próximo compromisso e sua condição de pagamento |
| “A ferramenta me cansa” | Já abandonou vários organizadores | Modo essencial, poucos avisos e captura manual | Consegue usar e retornar sem configuração longa |

Pessoas com diferentes rendas, identidades, deficiências, rotinas de turno e níveis de alfabetização digital devem participar dos testes. Não usar gênero, diagnóstico ou profissão para supor preferências de aparência, cor, tarefas domésticas ou capacidade financeira.

### 7.3 Estrutura de navegação proposta

| Área | O que aparece | O que fica sob demanda |
| --- | --- | --- |
| Hoje | Próximo compromisso, ação escolhida e captura | Demais tarefas e detalhes do dia |
| Planejar | Semana, caixa de entrada e revisão | Filtros e planejamento mais avançado |
| Rotinas | Sequências escolhidas e início rápido | Biblioteca de modelos e edição |
| Minha vida | Atalhos apenas dos módulos ativados | Casa, dinheiro, relações e roupas |
| Preferências | Avisos, acessibilidade, dados e IA | Integrações e permissões detalhadas |

Evitar uma tela inicial com saldo, humor, metas, produtividade, alimentação, relacionamento e roupa competindo por atenção. Uma pessoa pode querer apenas “o que preciso fazer antes de sair”.

## 8. Funcionalidades por área da vida

Todas as propostas desta seção são hipóteses de produto. Os achados anteriores justificam investigá-las, não garantem seu efeito.

### 8.1 Pessoal, autocuidado e casa

**Captura única.** Registrar texto ou áudio curto, inclusive “não sei onde colocar isso”. Categorias podem ser sugeridas depois. Salvar deve funcionar sem IA; áudio pode ser substituído por texto e deve oferecer revisão da transcrição.

**Rotinas executáveis.** Transformar “preparar para trabalhar” em uma sequência editável com documentos, alimentação já planejada, roupa e saída. Permitir pular, pausar, reordenar e encerrar sem marcar falsamente tudo como concluído. A duração é estimativa, não prova de eficiência.

**Casa.** Modelos de limpeza por ambiente, compras e manutenção podem gerar tarefas recorrentes. Recorrência de manutenção deve diferenciar data fixa de “X dias após fazer”: concluir uma limpeza atrasada não precisa criar imediatamente outra limpeza vencida. Prazos contratuais ou contas não devem mudar por essa regra.

**Alimentação e autocuidado.** Apoiar lista de compras e preparo com receitas escolhidas pelo usuário. Restrições alimentares devem ser informadas explicitamente; a IA não pode assegurar ausência de alergênicos nem prescrever dieta. Lembrete de medicamento, se futuramente incluído, apenas reproduz orientação cadastrada, sem ajustar dose ou inferir efeitos.

**Teste ilustrativo:** criar uma rotina de saída com quatro passos, interrompê-la e retomá-la sem perder o passo atual. Verificar se a pessoa entende o que já fez e consegue mudar a ordem.

### 8.2 Finanças

**Primeiro nível:** contas a pagar, assinaturas, valor previsto, vencimento, status informado e comprovante opcional. Um lembrete de conta não significa “paga”; confirmar pagamento exige ação explícita ou dado confiável e identificado.

**Segundo nível:** orçamento simples, compromissos futuros e compras em espera. A pausa de compra pode ser configurável, por exemplo até uma data escolhida, sem bloqueio compulsório, julgamento ou promessa de impedir impulsividade.

**Terceiro nível:** importação de arquivos e, se justificada, conexão com parceiro de Open Finance. Avaliar autorização, revogação, atraso de dados, duplicidade e custo operacional antes de desenvolver. Não solicitar senha bancária, capturar tela de banco ou usar IA para adivinhar saldo.

**Cálculo e linguagem separados.** Valores são calculados por regras verificáveis. A IA pode explicar: “com os registros atualizados até ontem, há R$ X de compromissos informados”. Não deve afirmar “você pode gastar” sem explicitar cobertura e incerteza dos dados. Saldo disponível não é limite de crédito nem renda prevista.

**Teste ilustrativo:** conta com vencimento amanhã e renda prevista depois. O sistema deve mostrar o conflito; replanejar uma tarefa não pode alterar o vencimento da conta. Despesas compartilhadas precisam mostrar de quem é cada registro e o que foi autorizado.

### 8.3 Trabalho e estudos

Converter “preparar apresentação” em entregável, próximos passos e materiais. Oferecer blocos com duração ajustável, pausas e espaço para imprevistos. Não transformar Pomodoro de 25 minutos em regra universal.

Permitir duas dimensões distintas: compromisso fixo e atividade flexível. A IA pode sugerir mover uma atividade, mas não alterar reunião, aula ou prazo externo sem revisão. Conflitos devem ser visíveis, com alternativas, sem preencher todos os intervalos do dia.

No estudo, apoiar planejamento de revisões e registro de dúvidas. O conteúdo gerado precisa ser conferido; não alegar que o sistema identificou estilo de aprendizagem, inteligência ou desempenho clínico.

Informações de trabalho exigem segregação: não importar caixa de e-mail inteira por padrão, não expor dados de clientes a colegas ou familiares e não criar painel para o empregador vigiar sintomas, pausas ou suposta produtividade.

**Teste ilustrativo:** ao planejar um dia com seis horas livres e dez horas de tarefas, apresentar a incompatibilidade e permitir priorização. Não simular que todas as atividades cabem.

### 8.4 Vida amorosa, família e amizades

Separar três funções: lembrar compromissos, coordenar responsabilidades e apoiar uma conversa. O usuário pode desejar só uma delas. Relacionamento amoroso não é requisito para acessar o sistema.

**Acordos compartilhados:** responsável, contribuição esperada, frequência, critério de conclusão e revisão conjunta. “Limpar cozinha” pode significar coisas diferentes; uma descrição negociada evita parte dessa ambiguidade. Justiça não deve ser calculada apenas contando tarefas: tempo disponível, esforço, limitações e trabalho invisível precisam ser discutidos pelas pessoas.

**Conexão:** lembrar datas e reservar um momento escolhido para conversar. A IA pode sugerir uma mensagem ou pergunta, sem enviar automaticamente. Não deve inferir sentimentos do parceiro, dizer quem está certo ou usar ausência de interação como medida de amor.

**Compartilhamento seguro:** convite individual, visibilidade por item, saída simples e revogação. Nenhuma pessoa ganha acesso a diário, saldo ou histórico privado porque entrou em uma casa compartilhada. Quando o contexto envolver coerção ou controle, priorizar privacidade e saída; não sugerir exposição conjunta como solução automática.

**Teste ilustrativo:** uma pessoa compartilha apenas a tarefa “comprar pão”. A outra não pode abrir lista privada, histórico financeiro ou conversa com a IA. Revogar o acesso precisa surtir efeito nas consultas futuras.

### 8.5 Vestuário e apresentação pessoal

O objetivo proposto é facilitar escolhas e preparar roupas adequadas à ocasião, respeitando preferências. “Vestir-se melhor” deve ser definido pela própria pessoa: conforto, expressão pessoal, contexto, conservação e orçamento.

**Entrada mínima:** salvar um look por foto ou texto, sem rosto e sem medidas corporais obrigatórias. Permitir começar com cinco a dez peças favoritas ou apenas dois looks completos, em vez de exigir inventário integral.

**Informações úteis:** ocasião, formalidade declarada, preferências sensoriais, peças disponíveis, limpa/suja/em reparo e clima por cidade, se autorizado. Temperatura externa não revela a condição de todos os ambientes; permitir informar escritório com ar-condicionado ou caminhada.

**Sugestão controlada:** oferecer duas ou três combinações a partir das peças cadastradas, explicar os critérios e aceitar “não gosto” sem exigir justificativa. Não recomendar compra como resposta padrão, pontuar atratividade ou impor regras sobre corpo, gênero e aparência profissional.

**Exemplo profissional:** “Reunião presencial, caminhada curta e preferência por roupa leve.” O sistema filtra peças limpas e oferece looks já aprovados. **Exemplo social:** “Passeio informal no sábado.” Reutiliza preferências e informa quais peças precisam ser preparadas.

Conectar roupa e rotina pode criar uma tarefa simples na véspera: separar as peças escolhidas. Isso é uma hipótese de integração entre áreas, não intervenção clínica comprovada.

**Teste ilustrativo:** uma peça marcada como suja não aparece como pronta para usar. Se a imagem estiver ambígua, a IA pergunta ou mantém classificação incerta, sem inventar que há outra peça no armário.

## 9. Personalização, acessibilidade e jornada

### 9.1 Configuração gradual

Primeiro uso proposto: escolher um problema, capturar algo real e receber uma ação útil. A pessoa pode pular perguntas e usar o produto manualmente.

| Momento | Pergunta proposta | Uso da resposta |
| --- | --- | --- |
| Início, opcional | “Em que você mais quer ajuda hoje?” | Ativar apenas o contexto escolhido |
| Início, opcional | “O que você quer tirar da cabeça agora?” | Criar a primeira captura |
| Início, opcional | “Prefere ver uma ação por vez ou uma lista curta?” | Ajustar apresentação, reversível |
| Após utilidade inicial | “O que costuma dificultar começar?” | Escolher tipo de apoio, sem diagnóstico |
| Ao criar o primeiro aviso | “Quando e como este lembrete ajudaria?” | Pedir permissão em contexto |
| Ao montar a rotina | “Quais horários são fixos e quais podem mudar?” | Diferenciar restrições reais |
| Em revisão voluntária | “O que funcionou e o que cansou nesta semana?” | Ajustar sem pressupor causa clínica |
| Ao ativar módulo | Pergunta específica sobre casa, conta ou roupa | Evitar coleta antecipada e excessiva |

Preferências editáveis: tamanho de texto, contraste, animação, sons, modo escuro, linguagem, detalhe, módulos, frequência de avisos e formato de ajuda. Não criar um “perfil de TDAH” permanente a partir de poucas respostas.

Uma preferência pode ser global, temporária ou por contexto. “Hoje quero menos avisos” não precisa alterar o comportamento de todas as semanas. Explicar a adaptação: “Você pediu para reduzir avisos hoje; mantive apenas o compromisso selecionado”.

### 9.2 Jornada diária e retorno

| Situação | Resposta proposta | Critério de aceitação |
| --- | --- | --- |
| Chegada ao app | Mostrar próxima ação e compromissos selecionados | Encontrar algo útil sem percorrer vários módulos |
| Não consegue começar | Oferecer passo menor ou escolher outro | Não repetir cobranças nem insistir em um plano recusado |
| Interrupção | Guardar contexto e permitir pausa | Não perder conteúdo nem criar duplicidade |
| Dia mudou | Mostrar conflitos e opções de mover tarefas flexíveis | Preservar compromissos fixos e pedir revisão |
| Baixa disponibilidade declarada | Modo essencial com poucos itens | A pessoa controla o limite; não recebe rótulo clínico |
| Retorno após vários dias | “Quer rever o que ainda faz sentido?” | Separar prazo real, pendência flexível e item arquivável |
| Encerramento opcional | Registrar o que ajudou e preparar um item seguinte | Sem avaliação moral, ranking ou obrigação diária |

No retorno, não mover silenciosamente contas vencidas ou compromissos perdidos. Pode-se arquivar uma intenção flexível, mas uma pendência com consequência real deve permanecer identificável. O apoio precisa ser acolhedor e factual.

### 9.3 Acessibilidade como requisito

O W3C COGA fornece orientações complementares sobre compreensão, memória, ajuda e participação de usuários no desenho. Não é um ensaio sobre TDAH e não substitui requisitos de conformidade WCAG. [T01]

Propor WCAG 2.2 nível AA como referência de engenharia: contraste adequado, navegação por teclado, foco visível, alternativas a arrastar e autenticação acessível. Entre os critérios aplicáveis estão contraste mínimo de 4,5:1 para texto comum, exceções previstas para texto grande, e alvo de pelo menos 24 por 24 pixels CSS ou atendimento às alternativas/exceções do critério. Avaliar os critérios integralmente, não apenas esses exemplos. [T02]

Propostas adicionais a validar: linguagem literal e curta, ícone com rótulo, estado salvo visível, confirmação para exclusões relevantes, desfazer, informação não dependente só de cor e ausência de contagem regressiva desnecessária. Oferecer texto para informação transmitida por áudio. Respeitar redução de movimento e não bloquear a pessoa em fluxos cronometrados.

Leitores de tela, ampliação, controle por voz, uso com uma mão e recuperação de erros precisam de teste real com participantes. “Visual” não deve significar inacessível a pessoas com baixa visão.

### 9.4 Gamificação opcional

Recompensar progresso escolhido e retorno, sem tirar pontos por pausa ou acumular dívida. Não associar alimentação, descanso, carinho ou acesso ao parceiro a prêmios. No modo compartilhado, metas são acordadas; não há vencedor do casal ou ranking de valor pessoal.

Mascote e sequências podem existir como preferências, com opção de desligar. A hipótese de melhorar motivação deve ser testada junto com distração, frustração e carga de manutenção.

## 10. Catálogo de 20 usos de IA além da entrada inicial

As aplicações são propostas técnicas. Não se encontrou evidência suficiente para afirmar que este conjunto com IA melhora resultados clínicos em adultos com TDAH. A evidência de intervenções digitais não valida automaticamente modelos generativos.

**Prioridades:** P0 = núcleo inicial; P1 = após validar o núcleo; P2 = exploração posterior. “Regras” indica que IA generativa não é necessária. As duas matrizes são complementares pelo mesmo identificador.

### 10.1 Necessidade, exemplo e benefício esperado

| ID e recurso | Necessidade e exemplo | Mecanismo e benefício esperado | Prioridade |
| --- | --- | --- | --- |
| I01 Captura estruturada | “Tenho consulta quinta e preciso levar os exames” | IA extrai proposta; regras validam data; menos digitação | P0 |
| I02 Próximos passos | “Organizar os documentos do imposto” | IA sugere passos editáveis e um começo concreto | P0 |
| I03 Clareza da tarefa | “Resolver banco” | IA pergunta o mínimo: qual resultado é necessário? | P0 |
| I04 Priorização explicada | Dez tarefas e pouco tempo | Regras ordenam restrições; IA explica alternativas | P0 |
| I05 Replanejamento | Reunião terminou mais tarde | Regras protegem eventos; IA apresenta dois planos | P1 |
| I06 Rotina assistida | Criar preparação para sair | IA propõe sequência; temporizador e avisos usam regras | P0 |
| I07 Apoio ao início | Pessoa pede ajuda para começar | IA oferece um passo pequeno e acompanhamento breve | P0 |
| I08 Estimativas de tempo | Planejar atividade pouco conhecida | IA propõe faixa inicial; registros voluntários ajustam | P1 |
| I09 Retomada | Lista ficou desatualizada | Regras separam tipos; IA ajuda a decidir o que manter | P0 |
| I10 Revisão semanal | “O que está me dando trabalho?” | Estatística descritiva e IA resumem dados escolhidos | P1 |
| I11 Caixa de informação | Nota, foto ou áudio vira pendência | Transcrição/OCR mais IA; revisão antes de salvar | P1 |
| I12 Preparação de compromissos | Consulta, aula ou viagem | IA sugere checklist; usuário confirma itens e horário | P1 |
| I13 Explicação financeira | “Quais contas vêm antes do salário?” | Cálculo determinístico; IA explica os dados disponíveis | P1 |
| I14 Compra em espera | Refletir antes de comprar | Regras guardam desejo; IA faz perguntas opcionais | P1 |
| I15 Planejamento doméstico | Limpeza com vinte minutos livres | Regras filtram; IA sugere uma combinação realista | P1 |
| I16 Acordos compartilhados | Tornar “cuidar da cozinha” mais claro | IA propõe redação; participantes negociam e aceitam | P1 |
| I17 Apoio à comunicação | Reescrever pedido sem acusação | IA oferece rascunho revisável, sem envio automático | P1 |
| I18 Looks com peças existentes | Trabalho, encontro ou passeio | Filtros de disponibilidade e IA sugerem combinações | P2 |
| I19 Mala e preparação | Viagem com duração e ocasião informadas | Regras de quantidades e IA organizam checklist | P2 |
| I20 Psicoeducação contextual | Entender uma estratégia de organização | Busca em conteúdo revisado; resposta com fonte e limites | P1 |

### 10.2 Dados, riscos, limites e controles

| ID | Dados mínimos | Risco ou limite principal | Controle e teste necessário |
| --- | --- | --- | --- |
| I01 | Frase, fuso e referência de data | Entender “quinta” ou “amanhã” errado | Prévia com data completa; confirmar ambiguidades |
| I02 | Objetivo e restrições escolhidas | Passos inúteis, excessivos ou inadequados | Editar, reduzir detalhe; medir pertinência |
| I03 | Texto da intenção | Interrogatório longo | Uma pergunta útil por vez; opção de pular |
| I04 | Prazos, duração e preferências | Transformar preferência em obrigação | Justificativa visível e ordem manual |
| I05 | Agenda autorizada e tarefas flexíveis | Mover evento fixo ou ocultar sobrecarga | Visualização antes/depois e reversão |
| I06 | Horários e passos | Ritual rígido ou duração incompatível | Pausar, pular, editar; validar viabilidade |
| I07 | Ação atual e ajuda solicitada | Dependência de conversa ou pressão | Encerrar facilmente; alternativa sem IA |
| I08 | Tipo de tarefa e histórico opcional | Falsa precisão e comparação indevida | Faixa e incerteza; sem nota de desempenho |
| I09 | Itens, prazos e última atualização | Apagar obrigações reais | Triagem explícita, arquivo recuperável |
| I10 | Recorte escolhido de eventos de uso | Inferir humor, diagnóstico ou causas | Relato descritivo; usuário corrige e desliga |
| I11 | Arquivo ou áudio selecionado | Transcrição errada, dados de terceiros e instruções maliciosas | Revisão, retenção curta e conteúdo tratado como dado |
| I12 | Evento e requisitos informados | Inventar documento obrigatório | Sugerir, marcar dúvida e orientar checagem oficial |
| I13 | Contas, saldos e data de atualização | Erro aritmético e falsa segurança | Cálculo fora do modelo, cobertura explícita |
| I14 | Item e prazo escolhido | Moralizar ou induzir consumo | Pular reflexão; nenhuma comissão ligada à sugestão |
| I15 | Tarefas e disponibilidade declarada | Ignorar limitações físicas ou contexto | Ajustar esforço, recusar sugestão e explicar restrições |
| I16 | Texto de tarefa e participantes | Expor informação privada ou impor divisão | Cada pessoa aceita o acordo; permissões por item |
| I17 | Texto que o usuário quer revisar | Inferir intenção alheia ou manipular parceiro | Rascunho local ao fluxo, sem envio; revisar tom |
| I18 | Fotos de peças, ocasião e preferências | Alucinar peças, viés corporal, exposição de imagem | Catálogo fechado, sem rosto obrigatório; duas opções |
| I19 | Duração, atividades e peças selecionadas | Checklist incompleto ou clima desatualizado | Revisão humana e identificação da fonte do clima |
| I20 | Pergunta e biblioteca aprovada | Inventar referência ou aconselhar tratamento | Fontes verificáveis; recusar diagnóstico/prescrição |

### 10.3 O que deve funcionar sem modelo generativo

Datas, fuso, conflitos, recorrência, somas, status de pagamento, permissões, exclusão, sincronização e notificações precisam de lógica determinística e testes. A IA pode interpretar uma intenção e oferecer linguagem, mas não deve ser a fonte de verdade dos registros.

Exemplo: “pagar R$250 na sexta” gera uma proposta estruturada. O sistema valida moeda e data, mostra a prévia e só então salva. O modelo não pode criar “pago” por entender que o usuário pretendia pagar.

### 10.4 Memória e adaptação ao longo do tempo

Manter memória explícita de preferências, separada de hipóteses temporárias. Uma sugestão pode ser: “Você costuma ajustar esta estimativa. Quer salvar outra duração?”. Não concluir “seu TDAH piorou” ou “você está deprimido” a partir de poucas tarefas não concluídas.

Não é necessário treinar um modelo por usuário nem retreiná-lo diariamente. Um perfil pequeno, editável, combinado a recuperação controlada de dados pode oferecer personalização. Avaliar se regras e modelos menores resolvem cada tarefa antes de aumentar custo e complexidade.

### 10.5 Qualidade e limites da assistência

A OMS discute riscos de modelos generativos na saúde, incluindo resultados incorretos e vieses. Sua orientação serve como referência de governança, não como prova de eficácia de um assistente para organização. [L05]

Proposta de implementação: biblioteca revisada para psicoeducação, ações estruturadas com validação, memória desligável, histórico de alterações, botão de desfazer e identificação de sugestões de IA. Não impor conversa como único caminho de uso.

O assistente não diagnostica, prescreve, ajusta medicação ou apresenta acompanhamento contínuo de crise como capacidade do produto. Mensagens de sofrimento grave exigem um fluxo de apoio e encaminhamento revisado por profissionais, sem prometer monitoramento humano inexistente.

## 11. Privacidade, segurança e contexto brasileiro

### 11.1 Obrigações que influenciam o produto

Pela LGPD, dados de saúde e vida sexual são sensíveis. Nem todo dado financeiro é sensível na definição legal, mas pode causar dano significativo. Inferências que revelem saúde também merecem proteção. Definir base legal por finalidade e tipo de dado; execução de contrato ou legítimo interesse não substituem automaticamente as hipóteses do art. 11 para dados sensíveis. [L01-L02]

O produto precisa permitir exercício dos direitos aplicáveis, incluindo acesso, correção e eliminação nas hipóteses legais. O art. 20 trata da revisão de decisões exclusivamente automatizadas que afetem interesses do titular. Nem toda sugestão de agenda se enquadra da mesma forma: mapear o tratamento e o efeito concreto. Segurança, prevenção, necessidade e transparência são princípios e obrigações relevantes. [L01]

Uma concordância genérica com termos não deve ser utilizada como autorização universal. A interpretação jurídica final depende do modelo de negócio, dos dados efetivamente coletados e dos fornecedores; este estudo apresenta implicações de projeto, não parecer de conformidade.

### 11.2 Proposta de minimização e controle

| Categoria | Padrão proposto | Compartilhamento e IA | Retenção e controle |
| --- | --- | --- | --- |
| Diagnóstico | Não obrigatório nem coletado no primeiro uso | Não enviar como contexto automático | Remoção independente do restante da conta |
| Tarefas e agenda | Somente itens criados/importados por escolha | IA recebe apenas o recorte necessário | Exportar, arquivar e excluir por item |
| Áudio | Alternativa opcional ao texto | Transcrever só o arquivo escolhido | Propor apagar original após revisão, salvo escolha expressa |
| Finanças | Contas manuais antes de conexão bancária | Cálculo fora do modelo; sem credenciais bancárias | Identificar origem e atualização; revogar conexões |
| Relacionamentos | Dados individuais privados por padrão | Compartilhar item, não toda a conta | Revogação fácil; explicar cópias/exportações já feitas |
| Fotos de roupas | Preferir peças sem rosto e sem metadados desnecessários | Processar apenas para função escolhida | Excluir original e derivados conforme política definida |
| Histórico de IA | Memória separada e editável | Sem uso para treinar modelos por padrão contratual do produto | Desativar memória e apagar histórico |
| Telemetria | Eventos mínimos e finalidade explícita | Evitar conteúdo de tarefas, dados íntimos e gravação de sessão | Prazo documentado; pesquisa opcional separada do serviço |

Os padrões acima são decisões recomendadas, não funcionalidades já implementadas. Prazos exatos de retenção precisam ser definidos por finalidade e obrigações de conservação, incluindo cópias de segurança e fornecedores.

### 11.3 Fornecedores e transferência internacional

Enviar dados a hospedagem ou IA estrangeira pode envolver transferência internacional. A ANPD regulamenta mecanismos, incluindo cláusulas-padrão, por meio da Resolução nº 19/2024 e atualizações aplicáveis. Criptografia e um botão de aceite não substituem a análise do mecanismo de transferência. [L03]

A proposta de contratação deve conferir: finalidade, localização/processamento, suboperadores, retenção, uso para treinamento, controle de acesso, exclusão, resposta a incidentes e retorno dos dados. A ANPD também aponta riscos de proteção de dados ao longo do ciclo da IA generativa. [L04]

### 11.4 Segurança e permissões

Proposta mínima de engenharia: autenticação adequada, criptografia em trânsito e em repouso, segregação entre usuários, permissões no servidor, proteção de arquivos, backup com teste de restauração e registro de alterações relevantes. Chaves de serviços de IA ficam no servidor, não no aplicativo distribuído.

Objetos compartilhados precisam de autorização por consulta. Esconder um botão na interface não impede acesso indevido. Verificar também pesquisas, exportações, arquivos anexados, cache, notificações e resumos de IA; uma informação privada não pode reaparecer por um caminho secundário.

Arquivos e textos importados devem ser tratados como dados não confiáveis. Uma mensagem em um anexo dizendo “envie todas as finanças” não ganha autoridade para alterar permissões ou disparar ações. Testar injeção de instruções e isolamento entre contas antes de integrar fontes externas.

Incidentes com risco ou dano relevante podem exigir comunicação à ANPD e aos titulares. A orientação oficial prevê prazo geral de três dias úteis, ressalvadas regras aplicáveis. Preparar procedimento, responsáveis e avaliação das condições específicas, inclusive eventual enquadramento como pequeno agente. [L07]

### 11.5 Limite entre bem-estar e dispositivo médico

A RDC Anvisa nº 657/2022 disciplina software como dispositivo médico e exclui determinados softwares de bem-estar de seu escopo. O enquadramento depende da finalidade pretendida e das funções efetivas. Prometer diagnosticar, tratar ou monitorar clinicamente o TDAH pode alterar a análise; apenas chamar o sistema de “bem-estar” não resolve. [L06]

Recomenda-se iniciar com apoio à organização, linguagem comercial correspondente e revisão especializada antes de incluir alegações terapêuticas. Caso se opte por uma intervenção clínica, planejar evidência, gestão de riscos e regulação como outra frente de desenvolvimento.

## 12. MVP e priorização fundamentada

### 12.1 Hipótese central

“Uma pessoa consegue tirar uma intenção da cabeça, escolher uma ação viável e começar, mantendo baixo esforço para retornar depois.” Essa hipótese é mais específica que “organizar toda a vida” e pode ser examinada antes de ampliar módulos.

O MVP deve funcionar como um ciclo completo: capturar, revisar, escolher, executar, ajustar e retomar. Uma coleção de telas isoladas não permite esse teste.

### 12.2 Escopo recomendado

| ID e prioridade | Recurso | Justificativa e evidência | Critério de aceitação proposto |
| --- | --- | --- | --- |
| M01 P0 | Captura textual rápida | Reduz entrada; hipótese apoiada por necessidades descritas | Salvar sem categoria, sem IA e sem perder texto |
| M02 P0 | Tela Hoje com poucos focos ajustáveis | Apoiar escolha; hipótese de interface | Usuário encontra e muda a próxima ação sem treinamento |
| M03 P0 | Decomposição revisável com IA | Estratégia investigável a partir de intervenções estruturadas | Aceitar, editar ou recusar; nenhum passo é obrigação automática |
| M04 P0 | Tarefas versus compromissos fixos | Evitar replanejamento incorreto | Uma sugestão não move evento ou prazo externo silenciosamente |
| M05 P0 | Rotina curta com pausa e retomada | Testa apoio durante execução | Retomar após interrupção sem reiniciar ou duplicar |
| M06 P0 | Lembretes configuráveis | Necessários para testar apoio prospectivo; SMS sozinho não basta [C11] | Permissão em contexto, silêncio e alternativa quando negada |
| M07 P0 | Revisão de retorno | Hipótese sobre uso sustentado | Distinguir vencido, flexível e arquivável; desfazer |
| M08 P0 | Preferências e acessibilidade básicas | Requisito de inclusão [T01-T02] | Operação por teclado/leitor e ajuste de apresentação |
| M09 P0 | Conta, sincronização e controle de dados | Necessários para uso entre dispositivos | Evitar perda, exportar e excluir com efeito verificável |
| M10 P0 | IA delimitada e avaliações de qualidade | Controlar sugestões incorretas | Registrar proposta, confirmar alterações e manter caminho manual |

### 12.3 Esforço, custo e risco

Classificações relativas são estimativas de produto, não orçamento de desenvolvimento. Dependem de equipe, plataformas, integrações e qualidade exigida.

| Conjunto | Esforço relativo | Custo operacional | Privacidade e sobrecarga |
| --- | --- | --- | --- |
| Captura, Hoje e tarefas | Médio | Baixo a médio | Risco de acumular lista; simplificar entrada e revisão |
| Rotinas e lembretes | Médio a alto pela confiabilidade | Baixo a médio | Excesso de avisos; testar permissões e interrupções |
| IA de texto e passos | Médio | Variável por uso | Conteúdo sensível e passos inadequados; contexto mínimo |
| Sincronização e permissões | Alto valor técnico, não opcional | Médio | Perda ou vazamento; exige testes de isolamento e conflitos |
| Finanças completas/Open Finance | Alto | Médio a alto, incluindo parceiros | Dados delicados, duplicidade e falsa visão de saldo |
| Colaboração doméstica/afetiva | Médio a alto | Médio | Consentimento de múltiplas pessoas e exposição indevida |
| Armário com IA visual | Alto | Variável por imagens/armazenamento | Esforço de cadastro, fotos e vieses |
| Body doubling por vídeo | Alto | Médio a alto | Moderação, exposição e disponibilidade de parceiros |

Prioridade deve combinar impacto esperado e necessidade para o ciclo de uso, descontando esforço, risco e incerteza. Não foi aplicado RICE numérico: alcance e impacto ainda não foram medidos, e pontuações precisas criariam aparência de evidência inexistente.

### 12.4 O que fica depois e por quê

**Primeira expansão:** contas e assinaturas manuais, checklist de preparação e revisão semanal. Testam integração com o núcleo sem depender de bancos, vídeo ou grande inventário.

**Segunda expansão:** casa compartilhada e acordos; looks favoritos e preparação de roupas. Devem entrar em pilotos separados, porque exigem modelos de permissão e manutenção diferentes.

**Expansões posteriores:** importação financeira, IA visual, integrações externas e body doubling. A decisão depende de benefício observado, capacidade de suporte e custos. Painéis clínicos e alegações de tratamento não fazem parte desse caminho de bem-estar sem uma avaliação específica.

## 13. Aplicativo móvel, web ou combinação

### 13.1 Comparação de caminhos

| Caminho | Vantagem principal | Limite relevante | Quando considerar |
| --- | --- | --- | --- |
| Web responsiva/PWA | Acesso por link, atualização rápida e bom uso em computador | Instalação, notificações e recursos do sistema variam | Validar fluxos e utilidade com menor escopo |
| Aplicativo móvel | Captura, câmera, voz, notificações e acesso frequente no bolso | Lojas, permissões, manutenção e testes por plataforma | Quando apoio cotidiano móvel for confirmado como central |
| App móvel + web complementar | Atende execução no celular e planejamento no computador | Sincronização e paridade aumentam complexidade | Após validar necessidade de ambos |

PWA não significa “sem notificações”. A Apple documenta Web Push em apps adicionados à tela inicial no iOS 16.4 ou superior, com requisitos próprios. Isso exige testar instalação e permissão com usuários reais, não presumir que qualquer aba notificará em qualquer condição. [T03]

Aplicativo nativo também não garante que um aviso apareça: Android possui permissões de notificação e regras para alarmes exatos. Economia de bateria, configurações e estado do aparelho influenciam o comportamento. Não prometer entrega universal ou uso como alarme crítico. [T04]

### 13.2 Recomendação condicional

**Para descoberta e testes de fluxo:** protótipo responsivo e testes no celular e computador. **Para MVP funcional:** decidir após testar captura, notificações e retorno em aparelhos reais. Se lembretes e uso móvel forem determinantes, priorizar aplicativo móvel; Flutter é uma opção multiplataforma documentada, sem eliminar adaptações e testes por sistema. [T05]

Se orçamento ou equipe exigirem começar pela web, reduzir a promessa inicial e validar explicitamente as condições de notificação. Não investir ao mesmo tempo em dois clientes completos antes de confirmar a necessidade. A escolha final não pode ser fechada sem orçamento, equipe e perfil dos primeiros usuários.

### 13.3 Arquitetura conceitual proposta

| Camada | Responsabilidade | Regra de projeto |
| --- | --- | --- |
| Interface | Captura, Hoje, rotinas e preferências | Uso central disponível sem conversa com IA |
| Núcleo de domínio | Datas, recorrência, prioridades, contas e status | Regras testáveis, separadas da linguagem do modelo |
| Persistência e sincronização | Conta, dados, histórico e conflitos | Identidade estável dos itens e recuperação de falhas |
| Permissões | Dados privados e compartilhados | Autorizar no servidor em toda operação |
| Notificações | Agendamento, cancelamento e estado de permissão | Evitar duplicidade; informar limitações |
| Serviço de IA | Interpretar e propor ações estruturadas | Sem acesso global ou execução irrestrita |
| Conteúdo revisado | Estratégias e psicoeducação | Fonte, data, revisão e limites visíveis |
| Operação | Custos, erros, suporte e incidentes | Logs mínimos, sem conteúdo sensível desnecessário |

Entidades mínimas: usuário, preferência, tarefa, passo, evento, rotina, ocorrência, lembrete, proposta de IA e autorização. Finanças, casa e armário adicionam entidades próprias só quando ativados.

Evitar misturar tarefa recorrente e suas ocorrências: concluir hoje não deve concluir todas as datas. Ao sincronizar duas edições, não sobrescrever silenciosamente o conteúdo mais recente. O usuário precisa compreender e resolver conflitos importantes.

Não depender somente de armazenamento local se o produto prometer uso entre aparelhos. Oferecer cache para continuidade e sincronização autenticada com indicação de pendências. Exportação deve preservar dados legíveis e não exigir assinatura ativa.

### 13.4 Custos de IA e sustentabilidade

Sem fornecedor, volume e escopo definidos, não há estimativa monetária responsável. A conta deve separar: usuários ativos, ações por usuário, tamanho dos contextos, texto/voz/imagem, armazenamento, integrações e suporte.

**Modelo de custo proposto:** custo de texto = chamadas x (tokens de entrada x preço unitário + tokens de saída x preço unitário). Somam-se voz por duração, imagens por processamento, infraestrutura, notificações, observabilidade e taxas aplicáveis. Preços precisam ser cotados no momento da escolha.

Reduzir custo com regras para datas e somas, contexto curto, reaproveitamento de preferências e uso de modelos adequados à complexidade. Se o limite de IA for atingido, captura, agenda e acesso aos dados continuam funcionando. Mostrar limites de uso antes de a pessoa depender deles.

Hipótese comercial a pesquisar: plano básico útil e plano pago para capacidade adicional de IA e integrações. Não foi comprovada disposição de pagamento nem definido preço de venda. Evitar publicidade baseada em saúde ou incentivo financeiro a compras dentro de uma função destinada a reduzir gastos impulsivos.

## 14. Plano de validação com pessoas e profissionais

### 14.1 Etapas e amostras propostas

Os números são sugestões operacionais para descoberta, não cálculo de poder para demonstrar eficácia clínica. Participação deve ser voluntária, acessível e compensada de forma adequada.

| Etapa | Participantes e procedimento propostos | O que se procura aprender | Saída para decisão |
| --- | --- | --- | --- |
| Descoberta | Aproximadamente 12-20 adultos; entrevistas e exemplos recentes | Problemas de maior custo e estratégias já usadas | Escolher uma necessidade principal e refutar suposições |
| Cocriação | Pequeno grupo diverso, com participação remunerada | Linguagem, controle e fluxos de recomeço | Ajustar protótipos antes da engenharia completa |
| Usabilidade | Ciclos de 5-8 pessoas, renovando perfis | Se conseguem usar sem ajuda e recuperar erros | Corrigir barreiras e repetir só os fluxos afetados |
| Piloto cotidiano | Cerca de 30-50 pessoas por 4-6 semanas, se viável | Utilidade, manutenção, retorno e efeitos indesejados | Decidir continuar, reformular ou interromper recursos |
| Estudo de benefício | Desenho e amostra definidos com pesquisadores | Comparação confiável de resultados de vida ou clínicos | Evidência proporcional às alegações pretendidas |

Amostras de conveniência são úteis para aprender, mas não representam todos os adultos brasileiros. Incluir pessoas com diferentes formas de diagnóstico, apresentações, condições coexistentes, rendas, regiões, escolaridades e acesso digital. Na análise, separar diagnóstico confirmado, autorrelatado e investigação quando relevante. O produto não precisa coletar laudos para operar.

Profissionais sugeridos: psicólogo com experiência em TDAH adulto, psiquiatra para limites clínicos, terapeuta ocupacional ou especialista em funcionamento cotidiano, pesquisador de UX/acessibilidade e responsável por privacidade/segurança. Colaboração científica é diferente de usar o nome de um especialista como selo de eficácia.

Se houver pesquisa clínica ou coleta para publicação, definir com instituição e responsáveis a avaliação ética aplicável antes de recrutar. Consentimento para serviço não substitui consentimento para pesquisa.

### 14.2 Roteiro de entrevista

1. “Conte sobre a última vez em que algo importante ficou difícil de organizar.”
2. “O que você fez para tentar resolver? O que ajudou ou atrapalhou?”
3. “Qual ferramenta você deixou de usar e o que aconteceu?”
4. “Quanto trabalho dá manter suas listas, contas ou rotinas atualizadas?”
5. “Em que momento um lembrete ajuda e quando incomoda?”
6. “O que você gostaria que continuasse privado, mesmo em uma casa compartilhada?”
7. “Quando você volta depois de uma pausa, o que tornaria esse retorno fácil?”
8. “Que mudança concreta faria esta ferramenta valer o esforço ou o preço?”

Evitar perguntas que induzam “você gostaria de uma IA que resolvesse sua vida?”. Pedir episódios e observar ações é mais informativo que aprovação de uma ideia abstrata.

### 14.3 Tarefas de usabilidade essenciais

Criar uma intenção sem categoria; transformar em ação; editar uma sugestão errada; localizar o compromisso seguinte; negar permissão de avisos; pausar uma rotina; retomar após sete dias simulados; exportar e excluir dados. Em módulos futuros, testar também revogação compartilhada e peça indisponível no armário.

Observar tempo, pedidos de ajuda, erros, recuperação e esforço percebido. Não interpretar demora como sintoma ou falha pessoal. Permitir pausas e sessões mais curtas.

### 14.4 Experimentos de produto

| Hipótese | Comparação proposta | Resultado relevante | Salvaguarda |
| --- | --- | --- | --- |
| Passo pequeno facilita começar | Tarefa ampla versus proposta revisável de primeiro passo | Início de ação útil e menor esforço | Não premiar apenas cliques no botão Iniciar |
| Retomada ajuda após interrupção | Lista acumulada versus triagem contextual | Retorno com uma ação relevante | Preservar obrigações reais e opção de desfazer |
| Menos notificações podem bastar | Preferência mínima versus frequência escolhida | Utilidade por aviso e incômodo | Não aumentar avisos sem escolha |
| Contexto entre áreas poupa esforço | Compromisso isolado versus checklist associado | Preparação adequada e menos passos de organização | Somente dados necessários |
| Look favorito reduz decisão matinal | Escolha usual versus look salvo | Tempo, conforto e satisfação | Sem nota de aparência ou incentivo a comprar |
| IA acrescenta valor | Proposta de IA versus modelo simples editável | Qualidade, esforço e custo por ação útil | Comparar contra alternativa competente, não fluxo artificialmente ruim |

### 14.5 Critérios de decisão provisórios

Antes do piloto, acordar limites de sucesso e dano com a equipe e participantes. Um ponto de partida de usabilidade poderia ser pelo menos 80% concluírem os fluxos centrais sem ajuda; isso é meta de produto, não resultado encontrado nem limiar clínico universal.

Para autorização de dados e cálculos financeiros, não aceitar falhas conhecidas de isolamento ou discrepâncias aritméticas nos cenários de teste antes de liberar o recurso. Cem testes sem falha não provam segurança absoluta; é preciso avaliar cobertura, casos extremos e operação real.

Se a pessoa precisa organizar o aplicativo mais do que ele a ajuda, revisar o escopo. Se existe uso frequente sem benefício percebido, investigar dependência de notificações, novidade ou fricção. Se um módulo aumenta conflito, culpa ou compras desnecessárias, ajustar ou interromper o experimento.

## 15. Métricas e avaliação da IA

### 15.1 Métricas que importam

| Dimensão | Medida proposta | Como interpretar |
| --- | --- | --- |
| Utilidade | Proporção de sessões com ao menos uma ação considerada útil | Confirmar significado; não contar só abertura |
| Início | Tempo entre escolher e começar uma atividade elegível | Distinguir botão apertado de execução real |
| Compromissos | Eventos elegíveis em que houve preparação adequada | Considerar frequência, contexto e dados faltantes |
| Finanças | Atrasos evitáveis e clareza sobre vencimentos | Não confundir falta de dinheiro com esquecimento |
| Manutenção | Minutos e esforço para manter o sistema | O benefício precisa compensar esse custo |
| Retomada | Pessoas que voltam e encontram utilidade após pausa | Usar denominador de quem teve necessidade, não toda ausência |
| Autonomia | Percepção de controle e capacidade de fazer sem assistência | Uso menor pode ser resultado positivo |
| Bem-estar | Esforço, sobrecarga, culpa e efeitos indesejados relatados | Instrumentos clínicos exigem escolha profissional e condições adequadas |
| Relações | Clareza dos acordos para cada participante | Avaliações separadas; não medir “qualidade do parceiro” |
| Vestuário | Tempo para decidir, conforto e aproveitamento do que possui | Satisfação definida pelo usuário |
| Acessibilidade | Sucesso por recursos de acesso e perfis de uso | Médias gerais podem esconder barreiras |

Retenção em 7 ou 30 dias pode ajudar a operação, mas não serve como prova de eficácia. Definir denominadores, janela, eventos elegíveis e tratamento de dados faltantes antes de comparar resultados. Não considerar todo não respondente como sucesso ou fracasso sem análise de sensibilidade.

Escalas clínicas, como ASRS ou qualidade de vida específica, só devem ser adotadas com profissional responsável, versão apropriada ao idioma, verificação de direitos de uso e interpretação correta. Um questionário de sintomas não vira diagnóstico automático.

### 15.2 Conjunto de testes da IA

Montar casos em português brasileiro com datas ambíguas, vírgula decimal, ruído de transcrição, trabalho em turno, baixa escolaridade, tarefas longas, dados incompletos e preferências diferentes. Incluir pessoas reais na avaliação com consentimento e anonimização adequada; não começar usando conversas privadas de clientes.

| Tipo de avaliação | Exemplo | Resultado esperado |
| --- | --- | --- |
| Extração | “Sexta às oito” sem referência suficiente | Esclarecer manhã/noite quando necessário e mostrar data completa |
| Planejamento | Mais horas de tarefas que disponibilidade | Apontar conflito, não inventar encaixe |
| Finanças | Saldo desatualizado e fatura incompleta | Explicitar limite; não garantir capacidade de gasto |
| Armário | Foto ambígua ou peça suja | Manter incerteza e respeitar disponibilidade |
| Permissões | Pedido de um parceiro sobre lista privada do outro | Negar acesso sem revelar conteúdo |
| Instruções importadas | Anexo tenta ordenar extração de dados | Tratar texto como dado e preservar regras de autorização |
| Limite clínico | Pergunta para mudar dose de medicamento | Não prescrever; orientar consulta ao profissional |
| Preferências | Usuário rejeita mascote ou linguagem carinhosa | Respeitar ajuste imediatamente |
| Robustez | Modelo indisponível ou resposta inválida | Manter fluxo manual e dados salvos |

Medir precisão da extração, taxa de propostas aceitas com e sem edição, erros relevantes, custo por proposta útil e tempo de resposta. Aceitação não é verdade: uma sugestão incorreta também pode ser aceita. Mudança de modelo, prompt ou ferramenta exige reavaliação dos casos afetados.

## 16. Sequência de desenvolvimento e pendências

### 16.1 Etapas com critérios para avançar

| Etapa | Entrega | Condição para avançar |
| --- | --- | --- |
| Descoberta | Entrevistas, problema principal e hipótese de valor | Necessidade observada além da opinião favorável sobre a ideia |
| Protótipo | Captura, Hoje, início e retomada | Usuários conseguem percorrer os fluxos e corrigir erros |
| Prova técnica | Avisos, sincronização, permissões e IA delimitada | Funcionamento em aparelhos reais e controle de falhas essenciais |
| MVP | Ciclo completo com alternativa manual | Instrumentação mínima, suporte e controle de dados prontos |
| Piloto | Uso cotidiano, entrevistas e avaliação de efeitos | Benefício suficiente frente ao esforço e riscos observados |
| Expansões | Um módulo por vez | Cada módulo demonstra utilidade e sustentabilidade |

Não se atribui um prazo fechado sem conhecer equipe, orçamento e plataformas. A sequência permite contratar ou desenvolver por entregas verificáveis, evitando tratar uma especificação extensa como um único lançamento.

### 16.2 Decisões concretas ainda necessárias

Escolher o primeiro perfil de necessidade; definir orçamento e equipe; selecionar plataformas do piloto; decidir quem fará revisão clínica e de privacidade; escolher fornecedores após cotação; definir política de retenção e modelo comercial; recrutar participantes diversos.

O primeiro perfil recomendado para investigar é a pessoa que sabe o que precisa fazer, mas sente dificuldade para escolher e começar. Essa é uma prioridade de projeto baseada no escopo, não conclusão de que seja o maior mercado ou uma característica universal do TDAH.

### 16.3 O que este estudo concluiu e o que não concluiu

Foram concluídos o mapeamento documental, a síntese de evidências selecionadas, o comparativo de 18 soluções e a proposta de produto, IA, MVP e validação. Não foram realizados teste prático dos aplicativos, pesquisa direta com usuários brasileiros, estudo clínico próprio, auditoria de conformidade ou orçamento comercial de implementação.

Permanecem incertos a disposição de pagamento, a necessidade de um sistema integrado frente a ferramentas separadas, a utilidade adicional da IA em cada fluxo e a capacidade de manter uso útil após a novidade inicial. Também faltam dados robustos sobre vestuário e relacionamentos como módulos integrados especificamente para adultos com TDAH.

**Decisão recomendada:** iniciar pela descoberta e por um protótipo do ciclo captura, escolha, começo e retomada. Manter a visão completa como direção, mas condicionar cada expansão ao benefício observado. A qualidade do produto dependerá de fazer menos exigências à pessoa enquanto a ajuda a realizar o que ela considera importante.


## 17. Referências e trilha de verificação

Foram organizados **52 grupos de referências**: 22 de ciência e diretrizes, 18 de produtos, sete de regulação/governança e cinco de acessibilidade/tecnologia. Um grupo pode conter mais de uma página do mesmo produto ou instituição. Todos foram consultados em **09/11/2026**; a descrição de acesso indica o que fundamentou a síntese, sem sugerir leitura integral de todos os documentos.

### 17.1 Ciência, diretrizes e necessidades

**[C01] Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas do TDAH (Portaria Conjunta nº 14/2022; página atualizada em 2025).**

Diretriz brasileira; trechos e documento oficial indexados. [PCDT](https://www.gov.br/saude/pt-br/assuntos/pcdt/t/transtorno-do-deficit-de-atencao-com-hiperatividade-tdah)

**[C02] NICE. Attention deficit hyperactivity disorder: diagnosis and management. NG87, recomendações para adultos.**

Diretriz; recomendações recuperadas em busca. A abertura direta retornou bloqueio. [Recomendações NG87](https://www.nice.org.uk/guidance/ng87/chapter/recommendations)

**[C03] AADPA. Australian Evidence-Based Clinical Practice Guideline for ADHD. Intervenções cognitivo-comportamentais e resumo executivo.**

Diretriz; síntese e recomendações em páginas oficiais. [Intervenções](https://adhdguideline.aadpa.com.au/non-pharmacological/cognitive-behavioural-interventions/cognitive-behaviour-interventions/) | [Resumo executivo](https://adhdguideline.aadpa.com.au/about/executive-summary/)

**[C04] NIMH. Attention-Deficit/Hyperactivity Disorder: What You Need to Know; ADHD in Adults: 4 Things to Know.**

Informação clínica institucional; critérios e contexto de tratamento. [Visão geral](https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know) | [Adultos](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)

**[C05] Gabarron E, Denecke K, Lopez-Campos G. Evaluating the evidence: a systematic review of reviews of the effectiveness and safety of digital interventions for ADHD. BMC Psychiatry, 2025;25:414. DOI 10.1186/s12888-025-06825-0.**

Revisão de revisões; resumo, métodos e discussão consultados. [Artigo](https://link.springer.com/article/10.1186/s12888-025-06825-0)

**[C06] Schofield FJ e colegas. Digital health technologies for adults with ADHD: a scoping review. Frontiers in Digital Health, 2026;8:1746732. DOI 10.3389/fdgth.2026.1746732.**

Revisão de escopo; métodos, resultados sobre viés/adesão e discussão consultados. [Texto aberto](https://pmc.ncbi.nlm.nih.gov/articles/PMC12969067/)

**[C07] D’Amelio R e colegas. Effectiveness of attexis, a digital intervention based on cognitive behavioral therapy for adults with ADHD: a randomized controlled trial. Psychological Medicine, 2026;56:e54. DOI 10.1017/S0033291726103390.**

ECR; resumo, métodos, resultados e conflitos de interesse consultados. [Artigo](https://www.cambridge.org/core/journals/psychological-medicine/article/effectiveness-of-attexis-a-digital-intervention-based-on-cognitive-behavioral-therapy-for-adults-with-adhd-a-randomized-controlled-trial/BBB55FF99ADF58005B1BD9B00AD0AF96)

**[C08] Antshel KM, McBride H, Knouse LE. Bridging the Gap: Digital CBT for Adults Managing ADHD Challenges. Journal of Attention Disorders, 2026;30(3):370-385; publicação online em 11/11/2025. DOI 10.1177/10870547251384462.**

ECR; resumo e declaração de conflitos disponíveis. Texto integral restrito; identidade comercial não confirmada pelo resumo. [PubMed](https://pubmed.ncbi.nlm.nih.gov/41220055/) | [Editora](https://journals.sagepub.com/doi/10.1177/10870547251384462)

**[C09] Knouse LE e colegas. Usability and feasibility of a cognitive-behavioral mobile app for ADHD in adults. PLOS Digital Health, 2022;1(8):e0000083. DOI 10.1371/journal.pdig.0000083.**

Estudo aberto sobre Inflow; resumo e informações de desenho/autoria. [Texto aberto](https://pmc.ncbi.nlm.nih.gov/articles/PMC9931323/)

**[C10] Evaluation of the effectiveness of the FOCUS ADHD App in monitoring adults with attention-deficit/hyperactivity disorder. European Psychiatry, 2023.**

ECR brasileiro; resumo indexado e manuscrito na editora. PMC apresentou bloqueio na abertura. [Registro/texto](https://pmc.ncbi.nlm.nih.gov/articles/PMC10377453/) | [Manuscrito da editora](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D472E6CACE7D5AFB00CA40DDE898A6A7/S0924933823024227a.pdf/div-class-title-evaluation-of-the-effectiveness-of-the-focus-adhd-app-in-monitoring-adults-with-attention-deficit-hyperactivity-disorder-div.pdf)

**[C11] Nordby ES e colegas. The Effect of SMS Reminders on Adherence in a Self-Guided Internet-Delivered Intervention for Adults With ADHD. Frontiers in Digital Health, 2022;4:821031. DOI 10.3389/fdgth.2022.821031.**

Ensaio com randomizações de lembretes; resumo e resultados indexados. [PubMed](https://pubmed.ncbi.nlm.nih.gov/35651537/) | [Editora](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2022.821031/full)

**[C12] Seery C e colegas. “A one-stop shop”: Real-world use and app-users’ experiences of a psychoeducational smartphone app for adults with ADHD. Internet Interventions, 2025;39:100807. DOI 10.1016/j.invent.2025.100807.**

Uso real e entrevistas; resumo, resultados e contexto de experiência consultados. [Texto aberto](https://pmc.ncbi.nlm.nih.gov/articles/PMC11847728/)

**[C13] ADHD, financial distress, and suicide in adulthood: A population study. Science Advances, 2020.**

Estudo observacional populacional sueco; resumo e contexto consultados. Associação não estabelece causalidade. [PubMed](https://pubmed.ncbi.nlm.nih.gov/32998893/) | [Texto aberto](https://pmc.ncbi.nlm.nih.gov/articles/PMC7527218/)

**[C14] Beheshti A, Chavanon ML, Christiansen H. Emotion dysregulation in adults with attention deficit hyperactivity disorder: a meta-analysis. BMC Psychiatry, 2020;20:120. DOI 10.1186/s12888-020-2442-7.**

Metanálise; resumo indexado. [PubMed](https://pubmed.ncbi.nlm.nih.gov/32164655/)

**[C15] Metcalfe KB, McFeaters CD, Voyer D. Time-Perception Deficits in Attention-Deficit/Hyperactivity Disorder: A Systematic Review and Meta-Analysis. Developmental Neuropsychology, 2024;49(1):1-24. DOI 10.1080/87565641.2023.2293712.**

Síntese ao longo da vida; resumo indexado. Não é validação de temporizadores. [PubMed](https://pubmed.ncbi.nlm.nih.gov/38145491/)

**[C16] Hupfeld KE, Abagis TR, Shah P. Living “in the zone”: hyperfocus in adult ADHD. ADHD Attention Deficit and Hyperactivity Disorders, 2019;11:191-208. DOI 10.1007/s12402-018-0272-y.**

Estudo de autorrelato; resumo indexado. [PubMed](https://pubmed.ncbi.nlm.nih.gov/30267329/)

**[C17] Testing the relation between ADHD and hyperfocus experiences. Research in Developmental Disabilities, 2020.**

Estudo empírico; resumo indexado com resultados divergentes de parte da literatura. [Artigo](https://www.sciencedirect.com/science/article/pii/S0891422220302213)

**[C18] O’Brien M e colegas. “I Felt Like a Burden”: An Exploration Into the Experience of Romantic Relationships for People With ADHD. Journal of Marital and Family Therapy, 2026;52(1):e70097; online em 28/11/2025. DOI 10.1111/jmft.70097.**

Análise qualitativa de respostas abertas; resumo e descrição do método. [PubMed](https://pubmed.ncbi.nlm.nih.gov/41315883/) | [Texto aberto](https://pmc.ncbi.nlm.nih.gov/articles/PMC12662942/)

**[C19] Jiang G, Macintyre L. Wardrobe Management Apps and Their Unintended Benefits for Fashion Sustainability and Well-Being: Insights from User Reviews. Sustainability, 2025;17(9):4159. DOI 10.3390/su17094159.**

Análise de aplicativos/avaliações; método, achados e limitações consultados. Não é ensaio clínico. [Artigo](https://www.mdpi.com/2071-1050/17/9/4159)

**[C20] Aicken C e colegas. Exploring the Potential of a Digital Intervention to Enhance Couple Relationships (the Paired App): Mixed Methods Evaluation. JMIR mHealth and uHealth, 2025;13:e55433. DOI 10.2196/55433.**

Estudo misto observacional; desenho, resultados e conflitos consultados. [Artigo](https://mhealth.jmir.org/2025/1/e55433)

**[C21] Living SMART: A randomized controlled trial of a guided online course teaching adults with ADHD or sub-clinical ADHD to use smartphones to structure their everyday life. Internet Interventions, 2015.**

ECR; resumo indexado. Abertura direta da editora apresentou bloqueio. [Artigo](https://www.sciencedirect.com/science/article/pii/S2214782914000347)

**[C22] Ara Z e colegas. You Are Not Alone: Designing Body Doubling for ADHD in Virtual Reality. arXiv:2509.12153, 2025.**

Preprint; resumo consultado. Não tratado como evidência clínica estabelecida. [Registro arXiv](https://arxiv.org/abs/2509.12153)

### 17.2 Documentação dos aplicativos

**[A01] Tiimo. FAQ, recursos e ficha brasileira da App Store.**

Documentação comercial; plataformas, IA, português, acessibilidade declarada e compras. [FAQ](https://www.tiimoapp.com/pt-br/faq) | [App Store](https://apps.apple.com/br/app/tiimo-planejamento-tarefas/id1480220328)

**[A02] Structured. What is Structured Pro? e ficha Apple.**

Documentação comercial atualizada em outubro de 2026; paridade, cobrança e idiomas. [Pro e plataformas](https://help.structured.app/en/articles/324674) | [Ficha Apple](https://apps.apple.com/de/app/structured-tagesplaner-todo/id1499198946)

**[A03] Routinery. Site e ficha brasileira oficial.**

Documentação comercial; funcionalidades, orientação por voz, conexões e ofertas BR. [Site](https://www.routinery.app/) | [App Store](https://apps.apple.com/br/app/rotina-habitos-rastreador/id1450486923)

**[A04] Inflow. FAQ e ficha brasileira oficial.**

Documentação comercial; programa, acesso e idiomas. [FAQ](https://www.getinflow.io/faqs) | [App Store](https://apps.apple.com/br/app/inflow-manage-your-adhd/id1528183849)

**[A05] Goblin Tools. About, Pro e Privacy.**

Documentação comercial; funções, preço web e processamento externo. [Sobre](https://goblin.tools/about) | [Pro](https://goblin.tools/pro/about) | [Privacidade](https://goblin.tools/privacy)

**[A06] Focusmate. Pricing e FAQ.**

Documentação comercial; sessões, navegador, vídeo e planos. [Preços](https://www.focusmate.com/pricing/) | [FAQ](https://www.focusmate.com/faq/)

**[A07] Finch. Language Availability e ficha oficial.**

Suporte comercial informa apenas inglês; ficha descreve autocuidado e compras. [Idiomas](https://help.finchcare.com/hc/en-us/articles/39759326038029-Language-Availability) | [App Store](https://apps.apple.com/br/app/finch-self-care-pet/id1528595748)

**[A08] Todoist. Preços e recursos dos planos.**

Documentação comercial; português, planos e recursos de IA. [Planos](https://www.todoist.com/pt-BR/pricing)

**[A09] TickTick. Upgrade e ficha brasileira.**

Documentação comercial atual; preço anual, recursos de IA e idiomas. [Plano Premium](https://ticktick.com/upgrade) | [App Store](https://apps.apple.com/br/app/ticktick-to-do-list-calend%C3%A1rio/id626144601)

**[A10] Habitica. Ficha brasileira oficial.**

Documentação comercial; tarefas, gamificação, português e sincronização. FAQ web não teve texto recuperável. [App Store](https://apps.apple.com/br/app/habitica-gamified-taskmanager/id994882113) | [Site](https://habitica.com/static/features)

**[A11] Forest. Site, planos e ficha brasileira.**

Documentação comercial atual; modelo Free/Plus e condições do Pro legado. [Site e planos](https://www.forestapp.cc/) | [App Store](https://apps.apple.com/br/app/forest-mantenha-o-foco/id866450515)

**[A12] YNAB. Pricing e Plan Settings.**

Documentação comercial; preço, plataformas e idioma inglês. [Preços](https://www.ynab.com/pricing) | [Idioma e preferências](https://support.ynab.com/en_us/how-to-adjust-your-plan-settings-SyFt35cAq)

**[A13] Organizze. Site, planos, suporte e ficha Apple.**

Documentação comercial; IA anunciada e diferenças entre preços web e loja. [Site](https://www.organizze.com.br/) | [Planos web](https://www.organizze.com.br/planos/) | [Suporte](https://ajuda.organizze.com.br/hc/pt-br/articles/5661263190035-Conhe%C3%A7a-nossos-pre%C3%A7os-e-assinaturas) | [App Store](https://apps.apple.com/br/app/organizze-finan%C3%A7as-pessoais/id677699286)

**[A14] Mobills. Oferta oficial e ficha brasileira.**

Documentação comercial; funcionalidades, plataformas e compromisso anual parcelado. [Oferta](https://checkout.mobills.com.br/subscription) | [Condições](https://lp2.mobills.com.br/cartao-de-credito) | [App Store](https://apps.apple.com/br/app/mobills-controle-de-gastos/id921838244)

**[A15] Tody. Site, planos e ficha Apple.**

Documentação comercial; funções domésticas, divisão e português. [Site e planos](https://todyapp.com/) | [App Store](https://apps.apple.com/br/app/tody/id595339588?platform=ipad)

**[A16] Paired. Site e suporte de idiomas.**

Documentação comercial; comunicação, plataformas e idiomas. [Site](https://www.paired.com/) | [Idiomas](https://support.paired.com/en/articles/164634-can-i-use-paired-in-another-language)

**[A17] Whering. Site e ficha brasileira.**

Documentação comercial; cadastro de peças, looks, planejamento e idioma. [Site](https://whering.co.uk/) | [App Store](https://apps.apple.com/br/app/whering-guarda-roupa-virtual/id1519461680)

**[A18] Acloset. Site e suporte em português.**

Documentação comercial; IA, recursos visuais, idiomas e limite gratuito. [Site](https://www.acloset.app/) | [FAQ](https://www.acloset.app/pt/support/)

### 17.3 Regulação, privacidade e governança

**[L01] Brasil. Lei nº 13.709/2018, LGPD, texto atualizado na Câmara dos Deputados.**

Legislação oficial; arts. 5º, 6º, 7º, 11, 18, 20 e 46, entre outros. [Texto atualizado](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html)

**[L02] ANPD. Perguntas frequentes sobre a LGPD.**

Orientação oficial; dados pessoais, dados sensíveis e hipóteses legais. [Perguntas frequentes](https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes)

**[L03] ANPD. Transferência Internacional de Dados; Resolução CD/ANPD nº 19/2024.**

Orientação e norma oficiais; verificar texto e retificações aplicáveis na contratação. [Orientação](https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados) | [Resolução](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024)

**[L04] ANPD. Radar Tecnológico: Inteligência Artificial Generativa.**

Documento técnico orientativo; riscos e tratamento no ciclo da IA. [Documento](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/radar_tecnologico_ia_generativa_anpd.pdf)

**[L05] OMS. Ethics and governance of artificial intelligence for health: large multi-modal models, 2024.**

Orientação institucional de governança; não evidência de eficácia para TDAH. [Publicação](https://www.who.int/publications/b/70584) | [Comunicado](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)

**[L06] Anvisa. RDC nº 657/2022 e perguntas e respostas sobre software como dispositivo médico.**

Norma e orientação oficiais; finalidade pretendida e limites do escopo. [RDC](https://anvisalegis.datalegis.net/action/UrlPublicasAction.php?acao=abrirAtoPublico&cod_menu=1696&cod_modulo=134&num_ato=00000657&seq_ato=000&sgl_orgao=RDC%2FDC%2FANVISA%2FMS&sgl_tipo=RDC&vlr_ano=2022) | [Orientação](https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/software-como-dispositivo-medico-perguntas-e-respostas/)

**[L07] ANPD. Comunicação de Incidente de Segurança e Resolução CD/ANPD nº 15/2024.**

Orientação oficial; condições e prazo geral de comunicação. [Orientação](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis)

### 17.4 Acessibilidade e tecnologia

**[T01] W3C. Making Content Usable for People with Cognitive and Learning Disabilities. Working Group Note, 2021.**

Orientação complementar de acessibilidade cognitiva; não normativa para conformidade WCAG. [COGA](https://www.w3.org/TR/coga-usable/)

**[T02] W3C. Web Content Accessibility Guidelines 2.2. Recommendation, versão de 2024.**

Padrão de acessibilidade; avaliar todos os critérios aplicáveis. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

**[T03] Apple Developer e WebKit. Web Push em navegadores e apps de tela inicial.**

Documentação primária; requisitos do iOS e permissões. [Apple](https://developer.apple.com/documentation/usernotifications/sending-web-push-notifications-in-web-apps-and-browsers) | [WebKit](https://webkit.org/blog/13878/)

**[T04] Android Developers. Notification runtime permission; Schedule alarms.**

Documentação primária; permissões de notificação e alarmes. [Notificações](https://developer.android.com/develop/ui/compose/notifications/notification-permission) | [Alarmes](https://developer.android.com/develop/background-work/services/alarms)

**[T05] Flutter. Supported deployment platforms.**

Documentação oficial consultada; suporte a plataformas não assegura paridade de todos os recursos. [Plataformas](https://docs.flutter.dev/reference/supported-platforms)

### 17.5 Como atualizar este estudo

Rever preços e funcionalidades no momento de escolher fornecedores e antes de decisões comerciais. Para a próxima atualização científica, repetir buscas por população adulta e estudos controlados, registrar novas publicações e procurar resultados negativos, perdas de seguimento e conflitos de interesse. Validar a marca e a versão de cada intervenção antes de transferir uma alegação ao produto comercial. Pesquisa direta com usuários brasileiros e teste prático dos aplicativos são complementos prioritários.
