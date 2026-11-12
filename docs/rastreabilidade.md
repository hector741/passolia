# Rastreabilidade

Atualizado em 2026-11-12. Critérios de aceite continuam na matriz `docs/projeto/MATRIZ_DE_COBERTURA_E_ACEITE.md`. Estado `planejado` significa que o requisito ainda não tem código de produto. A fundação técnica não muda esse estado.

Evidência da fundação, comum às linhas de ambiente: `tests/unit/foundation.test.ts` (13 testes), `pnpm build` e a busca sem segredo em `.next/static`.

## RF01–RF29

| ID | Fase | Critério de saída | Estado |
| --- | --- | --- | --- |
| RF01 | F03 | AC001–AC004: conta, sessão e isolamento | Planejado |
| RF02 | F03–F04 | AC005–AC007: onboarding pulável e preferências | Planejado |
| RF03 | F04 | AC008–AC010: captura sem categoria e sem duplicar | Planejado |
| RF04 | F04, F13 | AC011–AC015: tarefas, versão, busca autorizada | Planejado |
| RF05 | F05 | AC016–AC019: agenda, ambiguidade e prazo fixo | Planejado |
| RF06 | F05 | AC020–AC026: recorrência sem duplicar | Planejado |
| RF07 | F06 | AC027–AC029: dia que não cabe e focos manuais | Planejado |
| RF08 | F06 | AC030–AC033: rotina, snapshot e timer | Planejado |
| RF09 | F06–F07 | AC034–AC036: retomada sem apagar obrigação | Planejado |
| RF10 | F07 | AC037–AC043: proposta editável e idempotente | Planejado |
| RF11 | F07 | AC044–AC048: memória, cota e caminho manual | Planejado |
| RF12 | F08 | AC049–AC056: aviso, silêncio e job cancelado | Planejado |
| RF13 | F09 | Captura offline, fila por usuário e conflito | Planejado |
| RF14 | F10 | Exportação, exclusão e consentimento | Planejado |
| RF15 | F02, F10–F11 | Acessibilidade verificável e roteiro de pesquisa, sem participante fictício | Planejado |
| RF16 | F12 | Centavos exatos, parcial, estorno e compra em espera | Planejado |
| RF17 | F13 | Projetos, estudos e preparação | Planejado |
| RF18 | F13 | Casa pessoal, compras e manutenção | Planejado |
| RF19 | F14 | Convite, papéis, saída e revogação | Planejado |
| RF20 | F15 | Acordo versionado e rascunho sem envio | Planejado |
| RF21 | F16 | Peças, looks e disponibilidade | Planejado |
| RF22 | F17 | Voz, OCR e visão com revisão | Planejado |
| RF23 | F18 | Importação e conectores, cada um com credencial própria | Planejado |
| RF24 | F19 | Plano, webhook e cancelamento em teste | Planejado |
| RF25 | F20 | Cliente móvel e paridade documentada | Planejado |
| RF26 | F21 | Experimento opcional, ou adiado com motivo | Planejado |
| RF27 | F10, F22 | Conteúdo revisado e administração restrita | Planejado |
| RF28 | F01–F03, F11, F22 | CI, migração, backup e recuperação | Em andamento: CI escrita e build local verificado; migração e backup bloqueados |
| RF29 | F02, F09, F11, F20 | Ativos reais e tokens | Em andamento: Manrope e favicon originais na fundação; sistema visual da F02 ainda planejado |

## M01–M10

| ID | Fase | Evidência esperada | Estado |
| --- | --- | --- | --- |
| M01 Captura | F04, F09 | Persistir sem IA e recuperar offline | Planejado |
| M02 Hoje | F06 | Próxima ação e focos alteráveis | Planejado |
| M03 Decomposição | F07 | Prévia, parte aceita, sem duplicar | Planejado |
| M04 Compromissos | F05 | Fixos e prazos preservados | Planejado |
| M05 Rotinas | F06 | Pausa, snapshot e cronômetro | Planejado |
| M06 Lembretes | F08 | Permissão, silêncio e cancelamento | Planejado |
| M07 Retomada | F06, F07 | Triagem sem apagar prazo real | Planejado |
| M08 Acessibilidade | F02, F10, F11 | Teclado, contraste e teste descrito | Planejado |
| M09 Conta e dados | F03, F09, F10 | Isolamento, sync, exportação e exclusão | Planejado |
| M10 IA delimitada | F07 | Cota, escopo e confirmação | Em andamento: contrato e prévia no servidor; chamada real bloqueada sem chave |

## I01–I20

| ID | Fase | Estado |
| --- | --- | --- |
| I01 Captura estruturada | F07 | Em andamento: prévia no servidor, sem smoke real |
| I02 Decomposição | F07 | Em andamento: prévia no servidor, sem smoke real |
| I03 Esclarecimento | F07 | Em andamento: prévia no servidor, sem smoke real |
| I04 Priorização explicada | F07 | Em andamento: prévia no servidor, sem smoke real |
| I05 Replanejamento | F13 | Planejado |
| I06 Proposta de rotina | F07 | Em andamento: prévia no servidor, sem smoke real |
| I07 Apoio ao início | F07 | Em andamento: prévia no servidor, sem smoke real |
| I08 Estimativa | F13 | Planejado |
| I09 Retomada assistida | F07 | Em andamento: prévia no servidor, sem smoke real |
| I10 Revisão semanal | F13 | Planejado |
| I11 Voz, foto e texto | F17 | Planejado |
| I12 Checklist de preparação | F13 | Planejado |
| I13 Explicação financeira calculada | F12 | Planejado |
| I14 Reflexão de compra | F12 | Planejado |
| I15 Planejamento doméstico | F13–F14 | Planejado |
| I16 Acordo versionado | F15 | Planejado |
| I17 Rascunho de comunicação | F15 | Planejado |
| I18 Looks com IDs existentes | F17 | Planejado |
| I19 Mala e clima identificado | F17–F18 | Planejado |
| I20 Conteúdo aprovado | F10, F13 | Planejado |

## U01–U36

Todos planejados. Fase e controle estão na seção 10.4.1 do prompt mestre. Nenhum foi executado contra modelo real.

| ID | Fase | ID | Fase |
| --- | --- | --- | --- |
| U01 | F17 | U19 | F15, F18 |
| U02 | F17 | U20 | F15 |
| U03 | F07 | U21 | F12 |
| U04 | F07 | U22 | F12 |
| U05 | F07 | U23 | F12 |
| U06 | F07 | U24 | F12 |
| U07 | F06, F07 | U25 | F12 |
| U08 | F13 | U26 | F13, F17 |
| U09 | F13 | U27 | F13, F14 |
| U10 | F13 | U28 | F13 |
| U11 | F13 | U29 | F17 |
| U12 | F07 | U30 | F17 |
| U13 | F07 | U31 | F17, F18 |
| U14 | F13 | U32 | F07–F18 |
| U15 | F07 | U33 | F10, F13 |
| U16 | F13, F15 | U34 | F07 |
| U17 | F15 | U35 | F21 |
| U18 | F15 | U36 | F13 |

## Inventário lido na F00

- Prompt mestre, consolidação, matriz, plano por etapa e pesquisas em `docs/pesquisa/`.
- Manual PDF em `docs/referencia/Passolia_Manual_Completo_Identidade_Visual_v1.pdf`.
- `brand/passolia/`: 64 arquivos, entre eles SVG mestres, ícones de interface, PNG, favicon, Manrope e tokens. Os originais não foram redesenhados.
- Git inexistente. Docker e Supabase CLI ausentes. Sem `.env` de credencial no pacote original. `.env.local` foi criado depois, só com o exemplo vazio, e está fora do versionamento.
