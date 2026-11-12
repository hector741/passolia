# Iniciar a Passólia no Cursor

1. Abra no Cursor a pasta correta do projeto, nova ou existente.
2. Copie para ela `docs/` e `brand/` deste pacote. Em projeto existente, compare arquivos de mesmo nome antes de substituir; preserve implementações, instruções e alterações locais.
3. A regra `.cursor/rules/passolia.mdc` é opcional. Mescle com as regras existentes; não substitua AGENTS.md. Ela só aponta para os contratos, não contém o prompt inteiro.
4. Use o modo Agent com acesso ao repositório e anexe o prompt mestre ou indique seu caminho. Cole o bloco a seguir.

```text
Desenvolva a Passólia conforme docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md.

Leia esse prompt integralmente na primeira sessão, depois CONSOLIDACAO_E_DECISOES.md e MATRIZ_DE_COBERTURA_E_ACEITE.md na mesma pasta. Confira brand/passolia/ e o manual em docs/referencia/. Os estudos estão em docs/pesquisa/ para esclarecer a origem dos requisitos.

Comece pela F00: inspecione o repositório, as instruções existentes, o Git e o ambiente. Reuse código válido, preserve alterações locais e diferencie escolhas do proprietário de recomendações técnicas. Se a pasta for nova, aplique a stack padrão documentada. Crie rastreabilidade e checkpoint e prossiga para a F01 e para as próximas fatias verificáveis; não encerre entregando apenas planejamento.

Siga os critérios de saída e execute os checks reais. Integrações sem credencial ficam identificadas como bloqueadas, com alternativa manual; nenhuma simulação vale como integração pronta. Registre dúvidas apenas quando impedirem a ação concreta. Continue trabalho independente e documente concluído, verificado, pendente e bloqueado sem confundir esses estados.
```

Se o Cursor não conseguir ler arquivos anexados, cole o conteúdo integral de `docs/projeto/PROMPT_MESTRE_CURSOR_PASSOLIA.md`. Ele contém o contexto central e não exige o histórico da conversa. Os logos, fontes e ícones ainda precisam estar disponíveis como arquivos reais; descrição não substitui SVG.

Em sessões futuras, use `docs/projeto/PROMPT_DE_CONTINUIDADE.md`. Para direcionar uma fase, use o bloco correspondente em `PLANO_E_PROMPTS_POR_ETAPA.md`.
