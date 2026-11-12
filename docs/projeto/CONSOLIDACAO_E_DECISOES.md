# Passólia — consolidação, origem e decisões

Versão 2.0 • 12/11/2026. Documento de engenharia, não relatório de implementação.

## Material efetivamente revisto

Foram lidas integralmente as duas pesquisas em Markdown, o prompt anterior, a matriz, os prompts de início/continuidade e a verificação documental do pacote anterior, o estudo de nomes e o texto das 33 páginas do manual final. Foram inspecionados o inventário dos 64 ativos, os tokens, a licença da fonte e os caminhos dos SVGs/ícones. As versões atuais desses arquivos estavam acessíveis. PDF e MD equivalentes não contam como pesquisas independentes.

| Arquivo-fonte | Versão recuperada | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| `Pesquisa_TDAH_Produto_IA_2026-11-09.md` | versão 0 | 96.113 | `9b197727b60f12c6be48874f967ae083ce32819db57e23827848a9923d71d385` |
| `Pesquisa_TDAH_IA_2026-11-09.md` | versão 0 | 68.344 | `2b8ca5011a84b8b94939e23e4eef420341c109a1acea67167e22dee5d5d736f3` |
| `PROMPT_MESTRE_CURSOR_SISTEMA_TDAH.md` | versão 0 | 108.379 | `522c3fa03a6c75a854c377e174fd7126bfd589db42953175760010f228e9b4b5` |
| `PACOTE_CURSOR_SISTEMA_TDAH_COMPLETO.zip` | versão 0 | 88.342 | `0b9624f281916e608152a321a6a8533927b8eeca7bb1cde63233f65176755673` |
| `Passolia_Manual_Completo_Identidade_Visual_v1.pdf` | versão 0 | 6.117.799 | `94bf6c459f3ebcb63068472c96ee885f2c4cc2c94a2e12a8c00dda34547511e9` |
| `Passolia_Ativos_Identidade_Visual_v1.zip` | versão 0 | 3.912.110 | `e843d1a37751cf1dd80190a973d43ca908e3f1d3f347eb4f2a0d6b35a2be067a` |
| `Estudo_Nomes_Identidade_App_Organizacao_2026-11-10.md` | versão 0 | 32.818 | `41a9880302a330da0f63305e751b4d9b55f8e1d60a10ad593ddc5ae728e32f43` |

O ZIP anterior contém sete arquivos. A pesquisa principal e o prompt ali incluídos são byte a byte iguais aos avulsos. O material anterior foi usado como base de continuidade, evitando perder seus contratos e 153 cenários de aceite. O pacote novo preserva os dois estudos de produto, o estudo de nomes como histórico, o manual final e os 64 ativos originais; o prompt anterior é substituído pela versão consolidada. Não há credenciais, aplicativo ou repositório de implementação neste pacote.

## Origem das decisões

| Categoria | Decisão | Consequência |
| --- | --- | --- |
| Pedido expresso | Organizar vida pessoal/doméstica, profissional/estudos, financeira, relações e vestuário | Todos os módulos permanecem no plano, embora não sejam todos do MVP. |
| Pedido expresso | IA útil depois do início, com decomposição a partir de linguagem natural | Preservar 36 casos detalhados, confirmações e alternativas manuais. |
| Escolha expressa | Passólia e a identidade visual produzida depois da escolha do nome | Aplicar os ativos finais e manter acento, símbolo, slogan, paleta e Manrope. |
| Direção da pesquisa | Começar com adultos brasileiros; acessibilidade, autonomia, retomada, poucas escolhas | Requisitos de experiência; não alegar comprovação de eficácia clínica. |
| Recomendação anterior mantida | PWA primeiro, monólito modular, Next/TS/Supabase/OpenAI; Flutter se necessário depois | Padrão para pasta nova, sujeito a inventário e ADR se o repositório existente exigir adaptação. |
| Especificação de engenharia | Estados, contratos, limites, políticas temporais, retenção e sequência de fases | Defaults documentados para viabilizar código; não decisões médicas ou legais já aprovadas. |
| Pendente externa | Preço, fornecedores/planos contratados, orçamento e composição do piloto | Não inventar; configurar limites e manter trabalho independente avançando. |

## Diferenças resolvidas

| Tema | Materiais anteriores | Resolução aplicada |
| --- | --- | --- |
| Nome | Propostas comparativas e nome genérico no prompt antigo | Passólia é o nome atual; `passolia` em código. Não reabrir naming. |
| Logo | Pranchas raster de 10/11 ainda pediam finalização | Os vetores e versões ópticas de 11/11 são a referência de produção. Não redesenhar a prancha. |
| Disponibilidade da marca | Consultas datadas, INPI sem resultado válido | Não afirmar registro ou domínio disponível. Não impede desenvolvimento local com a marca escolhida. |
| Catálogo de IA | 36 usos específicos versus 20 grupos de capacidade | IDs U01-U36 preservam detalhes; I01-I20 agrupam, sem fingir equivalência 1:1. |
| MVP amplo versus fase inicial | Escopo do produto abrange todas as áreas | M01-M10 delimitam o núcleo F00-F11; demais capacidades entram nas fases seguintes. |
| Onboarding | Questionários extensos como possibilidade | Três perguntas opcionais no começo, demais preferências quando fizerem sentido. |
| Menu | Mockups exibem várias áreas | Navegação simples e módulos opcionais; composição do mockup é referência visual. |
| Tecnologia | Stack proposta no prompt antigo | Recomendação, sem atribuir aprovação expressa ao proprietário. Reusar implementação válida existente. |
| Cadastro de roupa | Exemplos sugerem pequenas quantidades iniciais | Nenhum mínimo obrigatório; favoritos e uma peça já podem ser cadastrados. |
| Dependências | Ordem linear poderia bloquear trabalho por uma credencial | Contratos precisam existir; smokes externos bloqueiam o respectivo aceite/release, não trabalho independente. |
| Finanças | Obrigações, previsão e registros precisam conviver | Regime inicial de caixa realizado mais previsão separada. Pagamento gera/vincula uma saída, sem dupla contabilização. |
| Recorrência | Regra interna ajusta mês curto | Importação RRULE preserva a semântica externa ou exige revisão; não confundir as duas políticas. |

## Lacunas resolvidas com premissas explícitas

1. Repositório novo: usar a stack padrão. Repositório existente: inventariar e propor adaptação mínima em ADR antes de mudar tecnologia.
2. Produto individual primeiro, colaboração posterior com escopo explícito. Cadastro não exige laudo, renda, rosto ou medidas corporais.
3. Captura textual é o offline garantido inicialmente; módulos sensíveis/compartilhados não ficam offline por padrão.
4. Três focos e convite de retomada após sete dias são defaults editáveis. Retenções são propostas de engenharia, precisam conferir contratos e política real antes do piloto.
5. IA gera propostas; servidor aplica comandos validados e transacionais depois de revisão. Falha do modelo nunca impede o fluxo manual.
6. Integrações, checkout e app nativo entram por adaptadores e flags. Preço, modelo disponível e plataformas-alvo não são inventados.
7. Conteúdo educacional só aparece como revisado quando houver revisão real registrada. Ferramentas não produzem participantes, pareceres ou comprovação clínica fictícios.

## Perguntas que podem realmente bloquear uma ação

| Momento | Informação necessária | O que pode seguir enquanto isso |
| --- | --- | --- |
| Primeira execução no Cursor | Pasta/repositório correto, se não estiver aberto | Ler o pacote; não criar aplicação fora do projeto pretendido. |
| Chamada real de IA | Conta, chave segura e modelo habilitado com limite de gasto | Adaptador, schema, validação, fixtures de teste e todos os fluxos manuais. |
| Teste real de push/cron | Infraestrutura HTTPS/agendamento e aparelho elegível | Outbox, worker, deduplicação, testes locais e caixa interna. |
| OAuth/Open Finance/billing | Conta autorizada, fornecedor/escopos e configuração do ambiente de teste | Módulos internos, importação manual e contratos dos conectores. |
| Piloto/produção | Ambiente-alvo, responsáveis, revisão humana pertinente e participantes reais | Desenvolvimento local e preparação verificável. Não afirmar pronto para piloto com smoke essencial bloqueado. |
| App nativo | Necessidade confirmada, plataforma e ambiente de build | Backend e PWA; não inventar binário iOS em ambiente sem suporte. |

Nenhuma dessas perguntas exige parar antecipadamente toda a implementação. Perguntar quando o bloqueio concreto for alcançado; registrar dependência nominal, etapa, impacto e forma de desbloqueio. Desenvolvimento reversível e decisões rotineiras já estão autorizados pela missão de implementar.

## Verificação técnica e limites desta revisão

Em 12/11/2026 foram consultadas fontes primárias atuais de regras do Cursor, segurança de dados do Next.js, SSR/RLS/Cron/backups/funções do Supabase, funções do PostgreSQL, Structured Outputs e controles de dados da OpenAI e perguntas frequentes da ANPD. URLs e efeitos constam da seção 18.3 do prompt. Bibliotecas, versões, preços, recursos contratados e modelos precisam ser confirmados no ambiente do Cursor; nada foi instalado num repositório de aplicativo nesta preparação.

As referências médicas e os levantamentos de mercado de 09/11 permanecem como documentos datados, com suas limitações. Não foi repetida nesta tarefa a leitura de cada artigo externo nem renovadas as buscas de marca/domínio. Esse material não autoriza promessas clínicas ou conclusões jurídicas.

O pacote passou por verificações de estrutura, integridade das cópias e cobertura documental. Testes do aplicativo, chamadas reais de IA, entrega de notificações, auditoria do repositório e entrevistas ficam para a execução. Não confundir uma exigência bem descrita com um resultado obtido.
