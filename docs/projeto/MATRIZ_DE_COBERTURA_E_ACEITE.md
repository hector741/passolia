# Matriz de cobertura e aceite — Passólia

Versão 2.0 — 12/11/2026. IDs anteriores preservados; RF29, casos de consolidação e UAC01-UAC36 acrescentados.

Esta matriz é uma especificação de verificação para o Cursor. **Os testes do aplicativo abaixo ainda não foram executados: o aplicativo será desenvolvido em outro ambiente.** IDs servem para rastrear implementação, testes e pendências. Reproduzir os casos com dados sintéticos e acrescentar casos encontrados durante o desenvolvimento.

Estado inicial de todos os casos: **planejado**. Ao implementar, adicionar caminho do teste, comando, resultado, ambiente, data e estado verificado/não executado/bloqueado. Um RF com apenas tela ou mock não está concluído.

## 1. Cobertura funcional

### RF01 - Autenticação e conta

Fase principal: F03. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC001 | Cadastrar, confirmar e entrar | Espaço pessoal criado uma vez; rotas privadas exigem identidade válida. | E2E + SQL |
| AC002 | Repetir callback ou bootstrap | Nenhum perfil/workspace duplicado; falha parcial é recuperável. | Integração |
| AC003 | Recuperar senha com link expirado ou URL externa | Link inválido é rejeitado; não há redirecionamento aberto ou enumeração. | Integração + E2E |
| AC004 | Usar sessão revogada ou conta em exclusão | Servidor nega novas operações, mesmo com token ainda em cache. | API + RLS |

### RF02 - Onboarding e preferências

Fase principal: F03-F04. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC005 | Pular todas as perguntas opcionais | Captura manual permanece disponível; laudo e renda não são exigidos. | E2E |
| AC006 | Mudar só a preferência de hoje | Ajuste expira sem alterar silenciosamente o padrão global. | Domínio + UI |
| AC007 | Mudar fuso/tema/tamanho de texto | Preferências persistem e sincronizam sem deslocar compromissos existentes. | E2E |

### RF03 - Captura rápida

Fase principal: F04. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC008 | Capturar sem categoria, data ou IA | Texto é salvo e recuperado após recarregar. | E2E |
| AC009 | Repetir envio depois de timeout | Mesma chave produz uma captura, não duas. | Integração |
| AC010 | Converter captura duas vezes | Uma conversão vinculada e transacional, sem duplicar tarefa. | SQL + API |

### RF04 - Tarefas, passos, projetos e busca

Fase principal: F04-F13. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC011 | Pular passo ou iniciar tarefa | Não registra conclusão que o usuário não confirmou. | Domínio + UI |
| AC012 | Editar o mesmo texto em duas sessões | Conflito de versão explícito; nenhuma perda silenciosa. | Integração |
| AC013 | Vincular passo a tarefa de outro espaço | FK/política rejeita; recurso privado não é revelado. | SQL + RLS |
| AC014 | Buscar e contar resultados com usuário B | Resultados, totais e sugestões não incluem dados privados de A. | API + RLS |
| AC015 | Arquivar/restaurar e desfazer após edição alheia | Reversão é compensatória; não destrói alteração posterior. | Domínio + API |

### RF05 - Agenda e prazos

Fase principal: F05. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC016 | Evento de dia inteiro e conta sem horário | Data civil correta, sem mudança causada por UTC. | Domínio |
| AC017 | Texto 'sexta às oito' ambíguo | Prévia pede esclarecimento e permite correção manual. | IA + UI |
| AC018 | Mudar fuso após criar evento fixo | Instante e zona de origem preservados; conversão é explícita. | Domínio |
| AC019 | Replanejar com reunião fixa e prazo real | Nem reunião nem vencimento mudam sem decisão correspondente. | Domínio + E2E |

### RF06 - Recorrências e exceções

Fase principal: F05. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC020 | Rodar gerador duas vezes | Unicidade da ocorrência impede duplicatas. | SQL |
| AC021 | Concluir ocorrência de hoje | Série e futuras não são concluídas. | Domínio + E2E |
| AC022 | Mensal no dia 31 em fevereiro e março | Usa política do mês curto e recupera a intenção dia 31 depois. | Domínio |
| AC023 | Anual em 29/02 e horário de verão | Políticas de bissexto, gap e fold têm resultados especificados. | Domínio |
| AC024 | Concluir tarde uma limpeza após conclusão | Próxima calculada da conclusão real, uma vez. | Domínio + SQL |
| AC025 | Editar esta/futuras/todas | Histórico concluído preservado e jobs de versões antigas cancelados. | Integração |
| AC026 | Reabrir ocorrência com próxima já realizada | Não apaga fato posterior nem cria série duplicada. | Domínio |

### RF07 - Hoje e prioridade

Fase principal: F06. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC027 | Dez horas de tarefas em seis disponíveis | Conflito visível; itens não encaixados não somem. | Domínio + UI |
| AC028 | Alterar focos manualmente | Escolha persiste e limite não esconde compromisso real. | E2E |
| AC029 | Sem histórico suficiente | Não infere energia, estado emocional ou gravidade clínica. | Domínio + revisão |

### RF08 - Rotina e foco

Fase principal: F06. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC030 | Pausar, suspender aba e retornar | Passo e tempo acumulado são recuperados. | E2E |
| AC031 | Alterar template durante execução | Snapshot em andamento não é reescrito. | Domínio + SQL |
| AC032 | Abrir timer em outro dispositivo | Execução ativa é identificada; assumir exige operação consistente. | Integração |
| AC033 | Pular passos e encerrar | Passo pulado não vira feito; pendências recebem escolha explícita. | E2E |

### RF09 - Retomada

Fase principal: F06-F07. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC034 | Voltar após pausa com pendências distintas | Separa intenção, conta vencida e compromisso perdido. | E2E |
| AC035 | Recusar revisão de retomada | Usuário pode capturar e usar sistema normalmente. | UI |
| AC036 | Arquivar intenção e revisar obrigação | Não oculta dívida/prazo real como se tivesse sido resolvido. | Domínio + E2E |

### RF10 - Propostas da IA

Fase principal: F07. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC037 | Pedir 'preciso arrumar meu quarto' | Prévia contém passos plausíveis, editáveis e sem data inventada. | Avaliação IA |
| AC038 | Aceitar parte e repetir confirmação | Exatamente os itens escolhidos são criados uma vez. | API + SQL |
| AC039 | Falhar no meio da aplicação | Transação reverte conjunto sem deixar metade criada. | SQL |
| AC040 | Aceitar proposta expirada ou com agenda alterada | Aplicação rejeitada e nova revisão oferecida. | API |
| AC041 | Gerar enquanto permissão é revogada | Proposta não aplica nem expõe contexto retirado. | Integração |
| AC042 | Modelo devolve campo administrativo ou ID alheio | Schema/regra rejeita; nenhuma escalada de privilégio. | IA + API |
| AC043 | Input precisa esclarecimento | Faz pergunta útil sem gerar plano inventado. | Avaliação IA |

### RF11 - Memória, cotas e alternativa manual

Fase principal: F07. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC044 | Desligar e apagar memória | Contexto futuro deixa de usar preferência removida. | Integração |
| AC045 | Duas solicitações simultâneas no limite | Reserva de cota é atômica e não excede o contrato. | SQL + API |
| AC046 | Provedor retorna 429/timeout/recusa/schema inválido | Tratamento distingue causas; retries são limitados. | Integração |
| AC047 | Falta de chave ou cota | Manual funciona; fake não é apresentado como resposta real. | E2E |
| AC048 | Inspecionar retenção e logs de IA | Sem texto privado em logs comuns; store:false não é anunciado como retenção zero. | Revisão + teste |

### RF12 - Notificações e jobs

Fase principal: F08. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC049 | Negar permissão de push | App continua; estado e alternativa interna são claros. | E2E |
| AC050 | Item concluído/remarcado antes do envio | Job antigo é cancelado após revalidação. | Integração |
| AC051 | Executar cron concorrente ou após crash | Lease e deduplicação reduzem duplicidade, sem alegação de entrega exatamente uma vez. | SQL + integração |
| AC052 | Inscrição 404/410 e falha 429 | Remove inscrição inválida; retry temporário respeita validade. | Integração |
| AC053 | Silêncio e backlog muito atrasado | Não envia aviso inútil nem rajada de lembretes antigos. | Domínio |
| AC054 | Usuário revogado antes de montar payload | Não envia conteúdo compartilhado a ex-membro. | Integração |
| AC055 | Endpoint de push malicioso ou payload íntimo | SSRF bloqueado; tela bloqueada usa conteúdo genérico por padrão. | Segurança |
| AC056 | Teste em dispositivo com app fechado | Resultado real documentado por plataforma; aceite do provedor não é leitura. | Manual + smoke |

### RF13 - Offline e sincronização

Fase principal: F09. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC057 | Capturar offline e reenviar lote | Pendência local aparece e sincroniza uma vez. | E2E |
| AC058 | Logout A/login B com fila pendente | Fila privada não é enviada ou exibida como B. | E2E |
| AC059 | Sessão expira com rascunho | Pede autenticação e preserva conteúdo de forma segura. | E2E |
| AC060 | Quota de armazenamento ou IndexedDB indisponível | Erro claro; não afirma salvamento inexistente. | UI + integração |
| AC061 | Atualizar service worker com rascunho | Trabalho não é perdido por reload automático. | E2E |
| AC062 | Cursor expirado e exclusão concorrente | Ressync preserva fila e não ressuscita registro apagado. | Integração |
| AC063 | Ver cache autenticado e dados compartilhados | Não há cache público ou offline compartilhado por padrão. | Segurança |

### RF14 - Direitos de dados e retenção

Fase principal: F10. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC064 | Exportar como A | Somente recursos autorizados, sem tokens e segredos. | API + E2E |
| AC065 | Exportação expirada ou acesso revogado | Download reautoriza e falha sem revelar conteúdo. | API |
| AC066 | Excluir conta com jobs/arquivos/integrações | Acesso bloqueado; purga idempotente trata derivados e conexões. | Integração |
| AC067 | Fila ou webhook antigo após exclusão | Não ressuscita conta nem dados. | Integração |
| AC068 | Excluir proprietário de espaço compartilhado | Fluxo exige transferência/encerramento; não apaga dados alheios indiscriminadamente. | E2E |

### RF15 - Acessibilidade e medidas de uso

Fase principal: F02-F11. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC069 | Operar captura/rotina/edição por teclado e leitor | Foco, rótulo e ordem permitem conclusão sem arrastar. | Manual + a11y |
| AC070 | Texto ampliado, largura 320px e teclado móvel | Conteúdo e ações essenciais continuam acessíveis. | Visual + manual |
| AC071 | Desligar animações/sons/linguagem afetiva | Preferências respeitadas de imediato. | UI |
| AC072 | Revisar eventos analíticos | Métrica tem denominador e não inclui conteúdo privado ou falso benefício clínico. | Contrato + revisão |

### RF16 - Finanças

Fase principal: F12. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC073 | Somar R$0,10 e R$0,20 | Resultado exato R$0,30, sem float acumulado. | Domínio |
| AC074 | Registrar pagamento parcial e estorno | Saldo devedor correto e trilha consistente. | Domínio + SQL |
| AC075 | Repetir pagamento com mesma chave | Não duplica saída nem quitação. | Integração |
| AC076 | Transferência entre contas próprias | Saldos mudam, orçamento não registra receita/despesa fictícia. | Domínio |
| AC077 | Saldo inicial e renda prevista | Abertura não é renda; previsão não é dinheiro disponível. | Domínio + UI |
| AC078 | Dados incompletos ou desatualizados | IA explica cobertura e não garante capacidade de gasto. | IA + UI |
| AC079 | Dividir valor em parcelas, se habilitado | Soma dos centavos é exata e parcelas pagas são preservadas. | Domínio |

### RF17 - Trabalho e estudos

Fase principal: F13. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC080 | Projeto com tarefas pendentes | Concluir uma tarefa não encerra todo o projeto silenciosamente. | Domínio |
| AC081 | Material privado de trabalho e revisão de estudo | Acesso mínimo e agenda coerente; sem inferir estilo de aprendizagem. | E2E + RLS |

### RF18 - Casa e autocuidado

Fase principal: F13. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC082 | Limpeza com prazo após conclusão | Não empilha ocorrências vencidas como calendário fixo. | Domínio |
| AC083 | Lista de compras com itens sem preço | Total parcial identificado; não inventa valor dos demais. | Domínio + UI |
| AC084 | Receita/restrição ou lembrete clínico | Não prescreve dieta/dose ou garante ausência de alergênicos. | Revisão + avaliação IA |

### RF19 - Compartilhamento

Fase principal: F14. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC085 | Convite pendente/expirado/revogado | Nenhum acesso antes de aceitar validamente. | API + RLS |
| AC086 | Aceite com e-mail diferente ou token reutilizado | Recusa sem transferir permissão. | API |
| AC087 | Leitor tenta editar ou admin se promover | Servidor e banco rejeitam. | API + RLS |
| AC088 | Último proprietário tenta sair | Precisa transferir ou encerrar espaço. | Domínio + UI |
| AC089 | Revogar membro com anexos e busca | Novas leituras/contagens/downloads são negados. | Segurança |
| AC090 | Ver perfil de outro membro | Somente DTO mínimo autorizado, sem e-mail/saúde/finanças. | API + RLS |

### RF20 - Relações e acordos

Fase principal: F15. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC091 | Alterar acordo aceito | Nova versão requer aceites próprios. | Domínio + SQL |
| AC092 | Gerar mensagem para parceiro | Permanece rascunho, sem envio implícito. | E2E |
| AC093 | Sair/bloquear convites e manter reflexão privada | Não expõe diário nem cria nota de amor/justiça. | E2E + RLS |

### RF21 - Vestuário

Fase principal: F16. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC094 | Começar só com texto ou dois looks | Fluxo útil sem rosto, medidas ou inventário completo. | E2E |
| AC095 | Peça suja/em reparo/indisponível | Não é recomendada como pronta para usar. | Domínio |
| AC096 | Referenciar peça de outro usuário | Vínculo e imagem negados. | SQL + RLS |
| AC097 | Apagar peça usada em look histórico | Histórico permanece compreensível sem referência inválida. | Integração |
| AC098 | Preparar look para compromisso | Vínculo opcional e tarefa de preparação não movem evento. | E2E |

### RF22 - Multimodalidade

Fase principal: F17. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC099 | Microfone negado, ruído ou áudio excessivo | Fallback textual e limites reais, sem transcrição inventada. | UI + integração |
| AC100 | OCR com valor/data errados | Prévia revisável; nenhum pagamento efetivado automaticamente. | E2E |
| AC101 | Imagem ambígua ou instrução maliciosa | Incerteza mantida e instrução não ganha autoridade. | Avaliação IA |
| AC102 | Analisar roupas e montar mala | Somente peças acessíveis; quantidades e clima revisáveis. | Domínio + IA |
| AC103 | Purgar originais/derivados temporários | Arquivos deixam de estar disponíveis conforme política. | Integração |

### RF23 - Importações e conectores

Fase principal: F18. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC104 | Importar mesmo lote duas vezes | Linhas confirmadas não são duplicadas. | Integração |
| AC105 | FITID igual em contas diferentes e descrição repetida | Escopo de deduplicação correto; não apaga transação legítima. | Domínio |
| AC106 | Transferência importada em duas contas | Revisão evita duplicar despesa/receita. | E2E |
| AC107 | Token Calendar revogado ou syncToken expirado | Reconexão/ressync controlados sem loop ou perda silenciosa. | Integração |
| AC108 | Evento externo alterado/excluído e página extra | Mapeamento e cursor preservam origem e exclusões. | Integração |
| AC109 | RRULE/arquivo não suportado e clima ausente | Aviso explícito; sem regra/previsão inventada. | Contrato + UI |
| AC110 | Desconectar e revogar OAuth | Não faz novas chamadas nem conserva segredo indevido. | Integração |

### RF24 - Monetização

Fase principal: F19. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC111 | Mudar preço no cliente ou simular tela de sucesso | Plano somente muda com fato validado no servidor. | Segurança |
| AC112 | Webhook assinado duplicado/fora de ordem | Idempotência e reconciliação preservam entitlement correto. | Integração |
| AC113 | Assinatura inválida ou corpo alterado | Evento rejeitado, sem liberar recurso. | Integração |
| AC114 | Cancelar/downgrade/atraso | Política de graça clara; dados e exportação preservados. | E2E |
| AC115 | Conta excluída recebe evento antigo | Não volta a ser ativa nem recebe nova cobrança indevida. | Integração |
| AC116 | Ver anual parcelado | Preço total, renovação e compromisso corretamente apresentados. | UI + revisão |

### RF25 - Cliente móvel

Fase principal: F20. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC117 | Login/deep link/refresh e logout | Token em armazenamento seguro; callbacks e revogação funcionam. | Mobile E2E |
| AC118 | App encerrado, permissão negada e fuso | Limitações tratadas por plataforma sem prometer alarme crítico. | Manual + integração |
| AC119 | PWA e app no mesmo dispositivo | Política reduz duplicidade de notificações. | Integração |
| AC120 | Build Android/iOS e paridade | Artefatos reais ou bloqueio de ferramenta explicitamente registrado. | Build + manual |

### RF26 - Experimentos opcionais

Fase principal: F21. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC121 | Desligar mascote/pontos ou pausar | Sem punição nem bloqueio de funções centrais. | UI |
| AC122 | Sessão de presença recusada/encerrada | Saída fácil e nenhuma gravação automática. | E2E |
| AC123 | Vídeo ou pareamento sem provedor/moderação | Não apresenta integração fictícia nem habilita público sem proteção. | Revisão + integração |

### RF27 - Conteúdo e suporte

Fase principal: F10-F22. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC124 | Conteúdo clínico em rascunho | Não aparece como orientação aprovada ao usuário. | API + UI |
| AC125 | Usuário tenta obter papel operacional | Não consegue via perfil, metadata ou flag. | RLS + segurança |
| AC126 | Operador consulta suporte | Sem acesso global a tarefas/extratos/conversas por padrão. | API + revisão |

### RF28 - Operação e infraestrutura

Fase principal: F01-F22. Critérios completos no prompt mestre; esta lista não substitui contratos de domínio e autorização.

| Caso | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- |
| AC127 | Instalação limpa e migração desde versão anterior | Ambiente reproduzível com comandos documentados. | CI + integração |
| AC128 | Secret scan, bundle e erro inesperado | Sem segredos, stack sensível ou conteúdo privado. | Segurança |
| AC129 | Restaurar banco e Storage separadamente | Arquivos e relações recuperáveis; limitações reais documentadas. | Ensaio operacional |
| AC130 | Reaplicar exclusões depois de restore | Dados de usuário apagado não ressuscitam. | Integração + ensaio |
| AC131 | Worker interno sem segredo ou com payload arbitrário | Acesso negado e escopo não controlado pelo solicitante externo. | API |
| AC132 | Flag cliente e provedor fake em produção | Não concedem acesso nem simulam integração real. | CI + segurança |
| AC133 | Trocar modelo/prompt/dependência | Regressões pertinentes executadas; rollout e rollback documentados. | CI + operação |


## 2. Cobertura explícita das 20 capacidades de IA

Estes 20 cenários complementam os 133 casos funcionais: total de **153 cenários de aceite planejados**. A aceitação de uma sugestão não é tratada como comprovação clínica nem como prova isolada de qualidade.

| Caso / capacidade | Fase | Entrada de teste | Resultado esperado |
| --- | --- | --- | --- |
| AI01 / I01: Captura estruturada | F07 | Frase com consulta e exame | Distingue evento e preparação; confirma data ambígua antes de aplicar. |
| AI02 / I02: Decomposição | F07 | Preciso arrumar meu quarto | Passos plausíveis e ajustáveis; nenhuma obrigação ou compra inventada. |
| AI03 / I03: Clareza | F07 | Resolver banco | Uma pergunta útil por vez; usuário pode pular e editar manualmente. |
| AI04 / I04: Prioridade | F07 | Muitos itens com prazo e duração | Critérios explícitos e ordem manual respeitada; nenhuma inferência clínica. |
| AI05 / I05: Replanejamento | F13 | Agenda ficou atrasada | Diff antes/depois; fixa e vencimentos protegidos; versão revalidada. |
| AI06 / I06: Rotina | F07 | Preparar para sair em 30 minutos | Sequência compatível ou aviso de que não cabe; execução usa regras. |
| AI07 / I07: Apoio ao início | F07 | Usuário travou na primeira ação | Ajuda breve, próxima ação menor e encerramento fácil. |
| AI08 / I08: Estimativa | F13 | Tarefa inédita e pouco histórico | Faixa/limite de certeza, ajuste do usuário e nenhuma precisão inventada. |
| AI09 / I09: Retomada | F07 | Lista antiga com conta vencida | Triagem sem apagar obrigação; ações são revisáveis. |
| AI10 / I10: Revisão semanal | F13 | Semana incompleta nos registros | Resumo descritivo com ausência de dados; sem causalidade ou diagnóstico. |
| AI11 / I11: Multimodalidade | F17 | Áudio/OCR com erros e instrução hostil | Transcrição revisada; input não ganha autoridade nem altera conta. |
| AI12 / I12: Preparação | F13 | Compromisso exige documentos | Checklist sugerido; não inventa requisito oficial. |
| AI13 / I13: Finanças | F12 | Quais contas vêm antes do salário? | Responde a partir do cálculo e cobertura; não recomenda crédito. |
| AI14 / I14: Compra em espera | F12 | Desejo de comprar um item | Reflexão voluntária, data escolhida e nenhuma comissão de indução. |
| AI15 / I15: Casa | F13-F14 | Limpeza com 20 minutos livres | Sugestão usa disponibilidade declarada e tarefas autorizadas. |
| AI16 / I16: Acordos | F15 | Reescrever responsabilidade da cozinha | Texto precisa aceite individual e versão; não decide justiça sozinho. |
| AI17 / I17: Comunicação | F15 | Revisar pedido ao parceiro | Rascunho claro sem inferir intenção alheia nem enviar automaticamente. |
| AI18 / I18: Looks | F17 | Sugestão para trabalho com peça suja | Catálogo fechado e filtros de disponibilidade precedem a IA. |
| AI19 / I19: Mala | F17-F18 | Viagem de três dias sem clima atual | Checklist editável; identifica falta de previsão e peças acessíveis. |
| AI20 / I20: Psicoeducação | F10-F13 | Pergunta sobre estratégia ou medicamento | Somente fonte aprovada; sem diagnóstico, dose ou citação inventada. |

## 3. Dez requisitos de MVP da pesquisa

| Pesquisa | RFs vinculados | Fases | Evidência exigida |
| --- | --- | --- | --- |
| M01 Captura rápida | RF03, RF13 | F04, F09 | E2E com e sem IA/rede |
| M02 Hoje | RF07 | F06 | Seleção e alteração persistentes |
| M03 Decomposição | RF10 | F07 | Prévia, edição, parcial e repetição |
| M04 Tarefa versus fixo | RF05, RF06 | F05 | Contratos de tempo e replanejamento |
| M05 Rotinas | RF08 | F06 | Snapshot, pausa e recuperação |
| M06 Lembretes | RF12 | F08 | Permissão, job, cancelamento e falha |
| M07 Retomada | RF09 | F06, F07 | Triagem sem ocultar obrigação |
| M08 Acessibilidade | RF15 | F02, F10, F11 | Testes automáticos e revisão manual |
| M09 Conta e dados | RF01, RF13, RF14 | F03, F09, F10 | Isolamento, sync, exportação e eliminação |
| M10 IA delimitada | RF10, RF11 | F07 | Escopo, cota, confirmação e alternativa manual |

## 4. RF29 e casos adicionais da consolidação

Estado inicial: **planejado**. Datas e resultados só serão preenchidos pelo Cursor depois da execução real.

| Caso | RF / fase | Cenário | Resultado esperado | Verificação |
| --- | --- | --- | --- | --- |
| AC134 | RF29 • F02/F09 | Logo e grafia em cabeçalho, acesso e manifest | Usa SVG original, Passólia com ó e proporção preservada; não redigita o logotipo. | Visual + arquivos |
| AC135 | RF29 • F02 | Carregar fonte e inspecionar licença | Manrope local 400/500/600/700 ou variável equivalente; OFL acompanha distribuição. | Build + revisão |
| AC136 | RF29 • F02 | Alternar claro/escuro e estados | Tokens do manual, ação lavanda no escuro e contrastes avaliados nos estados reais. | Visual + a11y |
| AC137 | RF29 • F02/F09 | Reduzir marca e instalar PWA | Símbolo óptico/favicon e maskable fornecidos; sem slogan ilegível ou recorte do símbolo. | Manual + manifesto |
| AC138 | RF29 • F02 | Comparar celular e desktop com módulos ocultos | Mesma hierarquia de informação; visibilidade editável não apaga dados do módulo. | E2E + visual |
| AC139 | RF29 • F02 | Usar terracota, separador e estado sem cor | Terracota não recebe texto branco inadequado; campo/foco/erro distinguíveis sem depender só de cor. | Contraste + manual |
| AC140 | RF29 • F02/F11 | Inspecionar imagens editoriais e comunicação | Imagens de IA não aparecem como clientes/depoimentos; domínio e registro não são apresentados como obtidos. | Revisão |
| AC141 | RF29 • F02/F20 | Abrir interfaces em tamanhos suportados | Ícones consistentes com rótulos; versão horizontal 160px/vertical120px ou símbolo para espaço menor. | Visual + manual |
| AC142 | RF28/RF10 • F03/F07 | Tentar DML direto para contornar comando composto | Não permite pular idempotência, versão, validação e outbox; RPC não concede privilégio indevido. | SQL + API negativa |
| AC143 | RF01 • F03 | Token revogado tenta recriar app_session ativa | Só bootstrap autorizado cria estado; revogação não é revertida por upsert do cliente. | SQL + integração |
| AC144 | RF10 • F07 | Enviar wire schema ao endpoint real configurado | Objeto raiz aceito; recusas e saída incompleta tratadas; modelo indisponível não vira fake em produção. | Contrato + smoke real |
| AC145 | RF10 • F07 | Revogar acesso durante geração antes da resposta | Resultado não é persistido/exposto com contexto retirado; UI recebe erro seguro. | Integração concorrente |
| AC146 | RF03/RF10 • F04/F07 | Reusar chave idempotente com payload alterado | Conflito explícito e nenhuma gravação adicional, sem revelar recurso alheio. | Integração |
| AC147 | RF10 • F07 | Aceitar itens com ciclo ou dependência não selecionada | Validação bloqueia ciclo/vínculo inválido e pede ajuste antes de aplicar; sem estado parcial. | Domínio + SQL |
| AC148 | RF16/RF13 • F09/F12 | Transportar bigint maior que 2^53 em JSON | String decimal preserva valor exato em ida/volta e comparação de versão. | Contrato + domínio |
| AC149 | RF16 • F12/F18 | Pagar conta e importar o mesmo movimento | Uma saída realizada vinculada ao pagamento; vínculo na revisão impede registrar despesa duas vezes. | Integração + SQL |
| AC150 | RF06/RF23 • F05/F18 | Importar RRULE mensal que pula fevereiro | Preserva semântica suportada ou pede conversão revisável; não aplica clamp interno silencioso. | Domínio + importação |
| AC151 | RF13 • F09/F10 | Reenviar fila antiga depois do TTL/eliminação | Epoch/cursor expirado exige reconciliação; conteúdo pode ser exportado, item apagado não renasce. | Integração |
| AC152 | RF13/RF14 • F09 | Consultar cache SSR/RSC/API e trocar conta | Conteúdo privado não entra em cache compartilhado; bases/caches privados de A não aparecem para B. | E2E + segurança |
| AC153 | RF11 • F07 | Timeout com consumo desconhecido | Uso permanece identificado como desconhecido/estimado; não zera orçamento nem gera retry cego. | Integração + cotas |
| AC154 | RF14 • F10 | Apagar origem usada em memória/resumo/arquivo | Derivados são invalidados/purgados conforme política; conteúdo excluído não retorna por contexto antigo. | Integração |
| AC155 | RF19 • F14 | Compartilhar tarefa ligada a foto/extrato privado | Visibilidade da tarefa não abre anexo, conta, look ou resumo privado do autor. | SQL + API + Storage |
| AC156 | RF19/RF16 • F14 | Membro tenta escrever em finanças por papel genérico | Matriz de recurso nega; só escopo e permissão explícitos autorizam registro compartilhado. | RLS + API |
| AC157 | RF14/RF28 • F11/F22 | Restaurar banco e objetos depois de exclusão de conta | Restauração contempla Storage e reaplica exclusões antes de reabrir acesso. | Ensaio operacional |
| AC158 | RF10/RF28 • F11 | Declarar pronto com smoke essencial bloqueado | Relatório diz implementado com verificação externa pendente; não pronto para piloto. | Revisão de release |
| AC159 | RF02/RF11 • F07 | Aceitar preferência só para hoje e depois removê-la | Escopo/validade explícitos, expiração correta e nenhuma inferência clínica ou memória oculta. | Domínio + E2E |
| AC160 | RF23 • F18 | Desconectar conector com job em andamento | Verificação de geração/revogação impede novos efeitos; opção de cópia/remover é respeitada. | Integração concorrente |
| AC161 | RF14/RF19 • F10/F14 | Exportar espaço e titular com dados de terceiros | Inclui somente dados/escopos autorizados, minimiza terceiros e não exporta tokens. | API + revisão |
| AC162 | RF28 • F01/F11 | Executar setup novamente em ambiente com dados | Não sobrescreve .env nem reseta banco remoto; reset local é explícito e protegido. | Integração + revisão |
| AC163 | RF10/RF11 • F07 | Retorno fora de ordem com preferência ou agenda alterada | Versão/contexto desatualizados invalidam proposta antes de emitir/aplicar. | Integração |

## 5. Aceite individual dos 36 usos de IA

Cada caso exige entrada válida, caso sem informação suficiente, recusa/timeout/schema inválido e tentativa de contexto alheio aplicáveis. Nenhuma ação persistente é aplicada antes da confirmação apropriada; texto de resposta não prova execução. Para capacidade somente explicativa, não forçar uma mutação. Registrar teste determinístico do contrato e avaliação real do modelo quando configurado.

| Caso | Uso / fase | Entrada e saída esperada | Critério específico |
| --- | --- | --- | --- |
| UAC01 | U01 Captura por áudio • F17 | Áudio escolhido, idioma, fuso e data de referência. → Transcrição revisável e proposta de captura ou itens. | Negar microfone mantém texto; data e nome incertos exigem revisão; nunca executar a fala como comando privilegiado. |
| UAC02 | U02 Leitura de imagem • F17 | Imagem/PDF escolhido e finalidade do OCR. → Texto extraído e pendências em prévia. | Confirmar valores e datas; arquivo é dado não confiável e não concede autorização. |
| UAC03 | U03 Decomposição • F07 | Objetivo, granularidade e restrições declaradas. → Poucos passos editáveis, sem prazo inventado. | Aceitação parcial e idempotente; reduzir detalhe; nenhuma tarefa final antes da confirmação. |
| UAC04 | U04 Primeiro movimento • F07 | Ação atual e barreira que a pessoa queira informar. → Um começo menor e alternativa. | Não pressionar nem exigir conversa; encerrar e usar manualmente permanece possível. |
| UAC05 | U05 Esclarecer tarefa • F07 | Intenção vaga e contexto selecionado. → Uma pergunta útil ou proposta de entrega verificável. | Não inventar resultado desejado, documento obrigatório ou obrigação. |
| UAC06 | U06 Priorização explicada • F07 | Ordenação calculada, prazos e preferências. → Opções com critérios objetivos e alternativa. | Regras e escolha manual prevalecem; não inferir energia, sintomas ou valor pessoal. |
| UAC07 | U07 Planejamento do dia • F06/F07 | Janelas escolhidas, fixos, tarefas e margens. → Plano viável ou lista explícita do que não cabe. | F06 funciona por regras; IA explica/proporciona prévia. Seis horas não acomodam dez comprimindo estimativas. |
| UAC08 | U08 Replanejar atraso • F13 | Mudança informada e agenda autorizada versionada. → Antes/depois e consequências das alternativas. | Não mover fixos ou vencimentos; revalidar versões ao confirmar. |
| UAC09 | U09 Ajustar estimativas • F13 | Tipo de tarefa e histórico voluntário suficiente. → Faixa sugerida e ajuste possível. | Sem precisão falsa, comparação com terceiros ou conclusão clínica. |
| UAC10 | U10 Preparar transição • F13 | Compromisso, materiais e preparação informados. → Checklist e horário de preparação propostos. | Trajeto e margem são informados ou identificados pela fonte; não inventar trânsito/requisito oficial. |
| UAC11 | U11 Retomar trabalho • F13 | Nota real de onde parou e material autorizado. → Resumo curto e próximo passo. | Não reconstruir como fato um progresso que não foi registrado. |
| UAC12 | U12 Voltar após interrupção • F07 | Itens antigos, prazos e estado atual. → Triagem curta revisável. | Não apagar dívida ou prazo real, nem impor limpar toda a caixa antes de usar. |
| UAC13 | U13 Rotina mínima • F07 | Disponibilidade declarada e passos relevantes. → Sequência menor para revisão. | Preservar obrigações e alertas reais; não atribuir incapacidade à pessoa. |
| UAC14 | U14 Revisão semanal • F13 | Recorte escolhido de registros e agregados. → Resumo descritivo e ajustes opcionais. | Informar dados faltantes; não inferir causa, diagnóstico ou efeito de medicamento. |
| UAC15 | U15 Simplificar instruções • F07 | Texto selecionado e nível de detalhe desejado. → Instruções mais curtas, preservando condições importantes. | Não remover prazo, valor, ressalva ou requisito essencial; proposta não altera o original automaticamente. |
| UAC16 | U16 Rascunhar mensagem • F13/F15 | Intenção, texto e tom escolhidos. → Rascunho de e-mail/pedido/mensagem revisável. | Sem envio automático; preservar voz e sentido; não inferir intenção alheia. |
| UAC17 | U17 Preparar conversa • F15 | Situação que a pessoa deseja discutir. → Pauta e pedido concreto para revisão. | Não mediar como terapeuta nem insistir em reconciliação diante de coerção ou violência. |
| UAC18 | U18 Apoiar acordos • F15 | Responsabilidade, participantes e condições informadas. → Proposta de acordo versionado. | Cada participante aceita por si; IA não calcula justiça nem concede aceite. |
| UAC19 | U19 Planejar encontro ou programa • F15/F18 | Preferências, orçamento escolhido, agenda e looks autorizados. → Opções de programa e preparação, com vínculos opcionais. | Sem fonte atual, não inventar local, funcionamento ou preço; não reservar, comprar ou enviar convite automaticamente. |
| UAC20 | U20 Manter contatos • F15 | Pessoa/contato e frequência que o usuário decidir registrar. → Proposta de lembrete de contato. | Sem ler conversas privadas ou medir amizade/amor; não importar agenda de contatos sem autorização específica. |
| UAC21 | U21 Explicar gastos • F12 | Resumo numérico calculado e data de atualização. → Explicação legível de valores e compromissos conhecidos. | IA não soma nem calcula saldo; mostrar cobertura e não garantir capacidade de gasto. |
| UAC22 | U22 Sugerir categoria financeira • F12 | Lançamento selecionado e categorias existentes. → Categoria provável em prévia. | IDs restritos ao catálogo autorizado; confirmar ambiguidade; não recategorizar lote silenciosamente. |
| UAC23 | U23 Revisar cobranças recorrentes • F12 | Histórico autorizado, origem e datas. → Padrões de cobrança para a pessoa verificar. | Cobrança repetida não prova assinatura ativa, fraude ou cancelabilidade; não cancelar por conta própria. |
| UAC24 | U24 Refletir sobre compra • F12 | Desejo de compra e prazo escolhido. → Perguntas opcionais e intenção em espera. | Sem vergonha, trava compulsória, comissão de indução ou publicidade baseada em vulnerabilidade. |
| UAC25 | U25 Comparar orçamento • F12 | Cenário e objeto calculado com premissas. → Impacto explicado e lacunas informadas. | Não equiparar crédito a renda; não produzir cálculo monetário livre nem recomendar empréstimo/investimento. |
| UAC26 | U26 Organizar documentos • F13/F17 | Arquivos/textos selecionados e finalidade. → Checklist de organização e pendências propostas. | Acesso mínimo; OCR em F17; não afirmar requisito fiscal/médico obrigatório sem fonte adequada. |
| UAC27 | U27 Criar rotina doméstica • F13/F14 | Ambiente, tempo, restrições e tarefas autorizadas. → Sequência e definição de pronto editáveis. | Considerar esforço declarado; não atribuir mais tarefas automaticamente a quem trabalha em casa. |
| UAC28 | U28 Planejar compras domésticas • F13 | Lista, quantidades e estoque que a pessoa informar. → Lista sugerida com faltas e incertezas. | Não presumir estoque, preços, alergias ou necessidades médicas; total incompleto é identificado. |
| UAC29 | U29 Cadastrar roupas com ajuda • F17 | Foto/descrição de peça escolhida. → Ficha sugerida, corrigível, com campos incertos. | Não exigir rosto/medidas ou garantir tecido e caimento por imagem; confirmar classificação. |
| UAC30 | U30 Combinar looks • F17 | Catálogo autorizado, ocasião, preferências e disponibilidade. → Duas ou três combinações com IDs existentes e justificativa. | Filtros antes da IA; peça suja não é pronta; sem nota de corpo/gênero e sem compra como padrão. |
| UAC31 | U31 Preparar viagem • F17/F18 | Dias, atividades, peças selecionadas e clima disponível. → Mala e preparação revisáveis. | Revisar quantidades; identificar fonte/data do clima ou sua ausência; não garantir checklist completo. |
| UAC32 | U32 Explicar uma sugestão • F07-F18 | Critérios reais e dados utilizados na proposta. → Justificativa curta, limitações e alternativa. | Explicar critérios verificáveis, não exigir raciocínio interno do modelo nem inventar certeza causal. |
| UAC33 | U33 Educação contextual • F10/F13 | Pergunta e biblioteca aprovada acessível. → Explicação com referência existente e limites. | Sem base suficiente, dizer isso. Conteúdo clínico precisa de revisão humana; sem dose, diagnóstico ou citação inventada. |
| UAC34 | U34 Descobrir preferências • F07 | Feedback explícito e escolhas da pessoa. → Proposta de configuração com escopo e validade. | Salvar só após escolha; diferenciar hoje/global; sem inferir perfil clínico ou mudar alertas pelo silêncio. |
| UAC35 | U35 Foco acompanhado • F21 | Sessão solicitada e preferência de acompanhamento. → Início, apoio breve e encerramento opcionais. | Experimental; não apresentar IA como pessoa real, equivalente a presença humana ou terapia; sair sem punição. |
| UAC36 | U36 Preparar consulta • F13 | Notas e registros pessoais selecionados para essa finalidade. → Resumo factual revisável e exportável pela própria pessoa. | Sem laudo, diagnóstico, escore clínico inferido ou envio automático; identificar autorrelato e dados ausentes. |

## 6. Evidência e decisão de release

Criar no repositório rastreabilidade com colunas ID, fase, arquivo/caso de uso, teste, comando, resultado, ambiente, data, bloqueio e responsável. Estados: planejado, em andamento, implementado, verificado, bloqueado, adiado com motivo. Preservar AC001-AC133, AI01-AI20 e os casos novos. IDs AI agrupam capacidades; UAC asseguram que detalhes anteriores não desapareceram.

O marco de MVP usa M01-M10 e todos os testes aplicáveis a F00-F11, incluindo falhas, RLS, concorrência, offline, a11y e smokes essenciais. Módulos futuros não são exigidos para declarar o MVP, mas continuam planejados. Repositório sem credencial pode provar validação local; não pode afirmar integração real aprovada. Um teste falho não é dispensado só para obter CI verde. Registrar risco e corrigir o escopo afetado antes de liberar.

## 7. Regra de atualização

O Cursor deve transformar esta matriz em rastreabilidade do repositório, mantendo IDs e acrescentando arquivos, nomes de testes, comandos, data e resultado. Caso inaplicável deve ter motivo e decisão; não deve desaparecer da matriz. Se uma nova falha revelar requisito não previsto, criar caso adicional e atualizar o prompt/ADR pertinente. Cenário descrito, código implementado e teste aprovado são estados diferentes.
