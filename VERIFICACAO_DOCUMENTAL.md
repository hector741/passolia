# Verificação documental — Passólia

Versão 2.0 • 12/11/2026.

## Resultado

O pacote foi conferido quanto a estrutura, cobertura, integridade das cópias e coerência das instruções. A verificação é **documental**. O aplicativo não foi implementado ou testado nesta preparação e nenhum teste de aplicativo está sendo declarado aprovado.

| Item | Conferência |
| --- | --- |
| Requisitos | 29 RFs, RF01-RF29 |
| MVP | 10 itens, M01-M10 |
| Implementação | 23 fases F00-F22 e 23 prompts complementares |
| IA | 36 usos U01-U36 preservados e 20 grupos I01-I20 mapeados |
| Aceite especificado | 219 cenários planejados: 163 AC, 20 AI e 36 UAC |
| Cenários anteriores | 133 AC e 20 AI preservados; 30 AC e 36 UAC acrescentados |
| Marca | 64 arquivos originais com hashes idênticos; 26 SVGs bem formados; 5 fontes TTF e licença presentes |
| Fontes textuais | Duas pesquisas e estudo de nomes preservados sem alteração |
| Manual final | PDF original de 33 páginas preservado |
| Arquivo avulso | Idêntico ao prompt mestre no ZIP |
| Orientação do Cursor | Regra curta .mdc; checkpoint único em docs/CHECKPOINT.md; prompts por fase consistentes |
| Markdown | Fences balanceados, tabelas com colunas consistentes, exemplo JSON válido |

## O que esta conferência não comprova

Não houve inspeção de um repositório de aplicativo, execução de migrações, autenticação, RLS, chamadas reais de IA, entrega de push, instalação PWA, avaliação de acessibilidade da aplicação, pesquisa com pessoas ou deploy. Esses são critérios para o Cursor executar e registrar, usando a matriz. A integridade de um SVG não prova usabilidade nem aprovação jurídica da marca.

As sete fontes estão identificadas com hash em docs/projeto/CONSOLIDACAO_E_DECISOES.md. As cópias duplicadas no pacote anterior foram comparadas; o histórico de propostas não substitui o manual final. As fontes médicas permanecem levantamentos datados; não se afirma renovação de toda a pesquisa externa.

## Reprodutibilidade

MANIFESTO_SHA256.txt lista hashes dos arquivos distribuídos, exceto o próprio manifesto. O ZIP foi aberto novamente após criação, teve a integridade CRC conferida e os bytes de cada membro comparados com esse manifesto. Não inclui segredos, URLs assinadas de transferência ou scripts de infraestrutura usados para preparar a entrega.
