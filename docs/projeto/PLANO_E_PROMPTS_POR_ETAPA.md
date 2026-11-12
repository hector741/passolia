# Passólia — instruções complementares por etapa

Versão 2.0 • 12/11/2026. O prompt mestre é o contrato principal. Estes blocos servem para direcionar uma sessão específica, sem redefinir regras ou reduzir o escopo. Podem ser copiados em sequência. Não é obrigatório pedir autorização entre as fases.

Antes de cada bloco: abrir o repositório correto e conferir o checkpoint, Git, dependências e verificações já realizadas. Se a fase estiver implementada, verificar a evidência e fazer só os ajustes necessários. Se uma dependência externa impedir uma verificação, registrar o bloqueio e continuar trabalho independente. Não declarar a fase verificada por existir um mock.

## F00 — Leitura, inventário, decisões e rastreabilidade

Dependência/entrada: este prompt da Passólia, consolidação, matriz, manual/ativos e repositório existente ou pasta nova.

```text
Execute a F00 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F00, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: todo RF, M, I e U tem fase e critério; escolhas críticas têm ADR e origem; dependências reais e comandos disponíveis estão registrados; próxima unidade está definida. F00 não encerra o trabalho: iniciar F01 quando possível. Não inventar que o repositório foi inspecionado antes dessa execução.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F01 — Fundação do projeto, ambiente e CI

Dependência/entrada: F00.

```text
Execute a F01 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F01, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: outro desenvolvedor consegue executar a base documentada. Não conta como entrega de funcionalidade de produto.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F02 — Design acessível e jornadas

Dependência/entrada: F01; decisões de experiência da pesquisa.

```text
Execute a F02 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F02, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: componentes e fluxos compreensíveis, sem declarar teste humano inexistente ou aplicativo pronto apenas pela aparência.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F03 — Banco, identidade, espaço pessoal e RLS

Dependência/entrada: F01-F02.

```text
Execute a F03 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F03, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: conta real de teste persiste preferências e não acessa dados de outra; migração e rollback/recuperação documentados.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F04 — Captura e tarefas com persistência

Dependência/entrada: F03.

```text
Execute a F04 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F04, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: ciclo manual funciona com dados reais de teste. Prévia visual deixa de depender de arrays estáticos.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F05 — Agenda, tempo e recorrências

Dependência/entrada: F04.

```text
Execute a F05 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F05, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: agenda e recorrências corretas sob cenários extremos, não somente semana corrente.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F06 — Hoje, rotina, foco e retomada

Dependência/entrada: F05.

```text
Execute a F06 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F06, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: capturar, escolher, começar, ajustar e retomar operam ponta a ponta.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F07 — IA inicial, confirmação e memória

Dependência/entrada: F04-F06.

```text
Execute a F07 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F07, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: IA real testada se houver credencial; caso contrário, implementação e contrato verificados localmente, com smoke real explicitamente bloqueado e funcionalidade indisponível em produção.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F08 — Notificações e jobs persistentes

Dependência/entrada: dados/identidade de F03-F06 e ambiente capaz de agendar. Não depende de chave de IA ou de terminar seu smoke externo.

```text
Execute a F08 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F08, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: teste real em pelo menos plataforma elegível quando infraestrutura estiver disponível; ausência de credencial é bloqueio documentado, não resultado “enviado”.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F09 — PWA, offline e sincronização

Dependência/entrada: contratos de dados e jobs de F04-F08. Smoke de IA ou push bloqueado por ambiente não impede implementar e verificar offline com infraestrutura local; o marco de release continua condicionado aos smokes essenciais.

```text
Execute a F09 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F09, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: usuário distingue salvo local e sincronizado; dados de outra conta não aparecem após logout/login.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F10 — Direitos de dados, conteúdo, métricas e suporte

Dependência/entrada: F03-F09.

```text
Execute a F10 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F10, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: controles têm efeito real. Texto jurídico e clínico pendente de revisão humana permanece identificado, sem falsa certificação.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F11 — Hardening e marco de MVP pronto para piloto

Dependência/entrada: F00-F10.

```text
Execute a F11 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F11, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: os dez itens M01-M10 foram comprovados no ambiente-alvo de teste, sem falha conhecida de isolamento, perda de dados ou cálculo. Se houver smoke essencial de IA, persistência, agendamento ou autenticação bloqueado, o estado é “implementado com verificação externa pendente”, e não “MVP pronto para piloto”. A falta de pesquisa com pessoas impede afirmar validação em uso, mesmo com os checks técnicos aprovados. Essa distinção não impede avançar localmente em módulos independentes sob flags. Produção requer instrução pertinente do proprietário, infraestrutura e resultado revisáveis.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F12 — Finanças pessoais e decisões de compra

Dependência/entrada: MVP técnico; módulo atrás de flag durante piloto.

```text
Execute a F12 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F12, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF16 funciona de ponta a ponta e tem documentação de escopo financeiro. Não apresentar conciliação bancária ou cartão completo inexistentes. Sem transação bancária executada pelo assistente.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F13 — Trabalho, estudos, casa pessoal e revisão

Dependência/entrada: núcleo F04-F07 e controles de F10; componentes financeiros só dependem de F12 quando utilizados. Não bloquear casa/trabalho pela monetização ou integração bancária.

```text
Execute a F13 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F13, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF17-RF18 completos no contexto pessoal, com integração ao Hoje sem poluir a tela principal.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F14 — Casa compartilhada e permissões completas

Dependência/entrada: escopos de F03, casa de F13 e contratos de sincronização.

```text
Execute a F14 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F14, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF19 funciona em dois usuários reais de teste, inclusive casos negativos. Ativar apenas após regressão de autorização em todos os módulos.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F15 — Relações, acordos e comunicação

Dependência/entrada: F14.

```text
Execute a F15 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F15, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF20 implementado como apoio de coordenação/comunicação, sem ranking afetivo, vigilância ou alegação terapêutica.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F16 — Guarda-roupa mínimo e planejamento de looks

Dependência/entrada: arquivos privados, módulos e agenda do núcleo.

```text
Execute a F16 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F16, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF21 útil sem catalogar armário inteiro. Efeitos sobre tempo de decisão e conforto são hipóteses para piloto, não benefícios afirmados sem teste.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F17 — Voz, OCR, visão e recomendações ampliadas

Dependência/entrada: F07 e módulos de destino, especialmente F16 para roupa.

```text
Execute a F17 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F17, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF22 funciona com modalidade real configurada e privacidade correspondente. Prova virtual corporal e análise de corpo não são obrigatórias e não entram como condição para sugerir look.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F18 — Importações e integrações autorizadas

Dependência/entrada: contratos dos módulos de destino e privacidade de F10.

```text
Execute a F18 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F18, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF23 discriminado por conector real. Dependências de contrato/credencial ficam bloqueadas nominalmente, sem ocultar o que não foi entregue.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F19 — Planos, pagamento e controle de custos

Dependência/entrada: utilidade/custo medidos e decisão comercial do proprietário; engenharia em test mode pode avançar antes.

```text
Execute a F19 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F19, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF24 completo em modo de teste; produção de cobrança tem liberação separada, com condições revisáveis. Uso pago não implica alegação de eficácia clínica.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F20 — Cliente móvel e distribuição de teste

Dependência/entrada: API estável, núcleo verificado e necessidade móvel confirmada; Flutter continua recomendação de plataforma, não decisão clínica ou imposição a um repositório móvel existente. Não reimplementar backend em Dart.

```text
Execute a F20 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F20, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF25 por plataforma, com builds/testes reais e limitações de distribuição explícitas. Submissão em loja é uma ação posterior e não um efeito implícito do build.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F21 — Experimentos opcionais: motivação e presença compartilhada

Dependência/entrada: núcleo estabilizado e decisão de experimento registrada.

```text
Execute a F21 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F21, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: RF26 em versão experimental identificada ou adiado por decisão concreta, preservado no backlog. Não bloquear qualidade do produto principal para concluir experimento sem evidência de necessidade.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```

## F22 — Operação, manutenção e evolução controlada

Dependência/entrada: entregas implantadas pertinentes; preparação começa em F11.

```text
Execute a F22 da Passólia no repositório aberto.

Leia docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md, seção 15, F22, e os contratos transversais aplicáveis. Consulte CONSOLIDACAO_E_DECISOES.md, MATRIZ_DE_COBERTURA_E_ACEITE.md, checkpoint e ADRs antes de alterar código. Preserve as instruções vigentes e o trabalho existente.

Mapeie RFs, itens M e capacidades I/U pertinentes. Inspecione o que já foi implementado, confirme as dependências e escolha a menor fatia completa da fase. Implemente dados/migração, autorização, domínio, API, interface, erros, testes e documentação na medida aplicável. Reuse os ativos Passólia fornecidos, sem redesenhar a marca.

Execute as verificações desta fase e os testes de regressão afetados. Use integração real quando configurada e fixtures só em ambiente de teste identificado. Não marque smoke externo como aprovado sem executá-lo.

Critério de saída desta fase: operação documentada e responsabilidades claras. Manutenção contínua não é uma etapa que possa ser declarada “terminada para sempre”.

Atualize docs/CHECKPOINT.md, docs/rastreabilidade.md, pendências, decisões e evidências com comandos/resultados reais. Relate o que funciona, o que foi verificado, o bloqueio nominal e a próxima ação. Ao fechar uma unidade verificável, continue na próxima unidade autorizada se houver contexto e dependências; em limite de contexto, deixe checkpoint suficiente para retomar sem recomeçar.
```
