# Plano e continuidade — foco da Passólia

Versão 3.0 • 12/11/2026. Documento de especificação, sem implementação do aplicativo nesta entrega.

## Sequência

| Fase | Resultado esperado | Relação com o plano global | Estado inicial |
| --- | --- | --- | --- |
| MP00 | Inventário, recorte e contratos | F00, leitura de F01–F22 | Registrado em 2026-11-12. Pesquisa e matriz copiadas. RLS ainda bloqueado. |
| MP01 | Domínio, dados e autorização | F01–F05 | Domínio local implementado. Migração e RLS bloqueados sem Docker/Supabase. |
| MP02 | Primeiro ciclo manual | F02/F06 | Implementado no IndexedDB. Testes de domínio locais. |
| MP03 | Pausa, tempo e retorno | F06 | Implementado no domínio: pausa, revisão de lacuna e tempo esgotado. Segundo aparelho não existe. |
| MP04 | Distrações, redução e progresso | F04/F06 | Implementado no domínio: nota privada, redução sem mudar prazo, encerramento parcial. |
| MP05 | IA opcional | F07 | Planejado |
| MP06 | Avisos escolhidos | F08 | Planejado |
| MP07 | Offline pessoal e conflitos | F09 | Planejado |
| MP08 | Qualidade e preparação do piloto | F10/F11 | Planejado |
| MP09 | Estimativas, áudio e preferências | Evolução após núcleo/piloto | Planejado/P1 |
| MP10 | Bloqueio externo, jogo e presença | F18/F21 conforme integração | Planejado/P2 |

As dependências são de capacidades reais, não de nomes de pastas. Se uma base
equivalente já existir e estiver verificada, reutilizá-la. Se o aplicativo estiver
vazio, criar as fundações do plano global; não substituir acesso/dados por mocks.

MP05 não bloqueia o caminho manual. Credencial ausente não é autorização para
simular integração em produção. MP09/MP10 preservam todos os recursos da pesquisa,
mas dependem das condições de experimento descritas no prompt.

## Comando de retomada

```text
Continue a Passólia a partir de docs/CHECKPOINT.md. Confira código e testes reais.
Use PROMPT_MESTRE_CURSOR_PASSOLIA_FOCO_v3.md para o módulo e o prompt global para
o restante da plataforma. Leia o contrato da fase atual e a matriz de foco.
Implemente a próxima fatia não verificada, execute os checks pertinentes,
registre evidências e avance nas etapas independentes já autorizadas.
Não reinicie o projeto nem descarte alterações existentes.
```

## Checkpoint mínimo a produzir no repositório de implementação

- Fase/capacidade implementada, requisitos MF/RF e testes FOC/EFOC.
- Estado real: planejado, implementado, verificado localmente, smoke externo pendente ou bloqueado.
- Arquivos, migrações aplicadas, comandos reais, resultados e ambiente.
- Decisões de stack, dados, tempo e offline, com origem e alternativas.
- Próximo passo exato; dependência concreta quando existir, sem valores secretos.
- Condições para piloto/experimento e validações humanas ainda não realizadas.

## Decisões específicas desta versão

1. Combinar próxima ação, sessão ajustável, captura, pausa/retomada e progresso.
2. Cinco minutos iniciais são default editável, sem substituir preferência existente.
3. Trinta minutos de lacuna são gatilho configurável de revisão do registro, não detector de atenção.
4. Modo temporal e visibilidade do contador são dimensões distintas.
5. Sessão encerrada é terminal; novo trabalho cria sessão vinculada.
6. Offline de execução pessoal é extensão a implementar/verificar, além da captura original.
7. IA mantém proposta/confirmação e não executa poderes do banco por si.
8. Áudio, estimativas e padrões entram em P1; bloqueio, jogo e presença em P2.
9. Nenhum resultado humano ou teste de aplicativo foi produzido neste pacote documental.

Essas decisões detalham a engenharia; não são conclusões clínicas adicionais.
