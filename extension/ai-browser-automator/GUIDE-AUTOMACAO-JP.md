# Guia de automacao - JP Freitas

Este guia mostra como rodar a extensao para criar prompts, carrosseis, imagens e videos do projeto JP Freitas pelo navegador.

## O que esta automatizado

A extensao automatiza estas etapas:

1. Criar ideias, hooks, roteiros, carrosseis e prompts com OpenRouter.
2. Organizar os prompts em fila.
3. Colar prompts no ChatGPT, Gemini ou Flow.
4. Enviar automaticamente quando a pagina permitir.
5. Criar filas diarias com base no projeto salvo.

Ainda nao esta automatizado:

1. Baixar automaticamente imagens/videos gerados.
2. Ler uma pasta inteira sem voce selecionar arquivos.
3. Garantir envio se ChatGPT, Gemini ou Flow mudarem a interface.
4. Rodar com Chrome fechado ou usuario deslogado.

## Fluxo recomendado para carrossel do JP

1. Abra `chrome://extensions`.
2. Clique em recarregar na extensao `AI Browser Automator MVP`.
3. Abra ChatGPT ou Gemini se quiser gerar imagens de slides.
4. Abra o popup da extensao.
5. Va em `Projeto`.
6. Clique em `JP`.
7. Confira estes campos:
   - Oferta: mentoria/programa de posicionamento e precificacao.
   - Avatar: cabeleireira de cachos/crespos que sabe tecnica, mas cobra pouco.
   - Mecanismo: Sindrome do Impostor Profissional / Identidade Premium.
8. Va em `Prompt`.
9. Selecione tamanho `4:5 Feed vertical`.
10. Va em `Assistente`.
11. Em `Template de copy`, escolha `JP - Carrossel Premium`.
12. Em `HookLab`, deixe `Automatico` ou selecione um hook especifico.
13. Em modo, escolha `Carrossel`.
14. Em quantidade, coloque `7` ou `8`.
15. Clique em `Gerar`.

Resultado esperado:

- A extensao cria a sequencia de slides.
- Cada slide vira um prompt `[IMAGEM]`.
- Os prompts aparecem na aba `Fila`.

Depois:

1. Va para a aba `Fila`.
2. Deixe `Enviar automaticamente` ligado se quiser que a extensao envie um por um.
3. Use intervalo de `15` a `30` segundos.
4. Clique em `Iniciar`.

## Fluxo para criar 3 carrosseis enquanto voce sai

Use este fluxo quando quiser deixar 3 linhas criativas diferentes rodando em sequencia.

1. Abra ChatGPT ou Gemini.
2. Abra o popup da extensao.
3. Va em `Projeto`.
4. Clique em `JP`.
5. Se tiver referencias visuais, use `Pasta inteira` ou `Imagens soltas`.
6. Em `Prompt`, selecione `Imagem` e tamanho `4:5 Feed vertical`.
7. Va em `Assistente`.
8. Em `Template de copy`, escolha `JP - Carrossel Premium`.
9. Em `HookLab`, deixe `Automatico`.
10. Em modo, escolha `Lote de carrosseis`.
11. Em `Quantidade`, coloque `3`.
12. Clique em `Gerar`.

Resultado esperado:

- Carrossel A: dor/identidade.
- Carrossel B: objecao/reframe.
- Carrossel C: prova/calculo.
- Cada carrossel vem com 7 slides.
- A fila fica com cerca de 21 prompts `[IMAGEM]`.

Depois:

1. Va em `Fila`.
2. Ligue `Enviar automaticamente`.
3. Use intervalo maior, de `45` a `120` segundos, porque geracao de imagem demora mais que texto.
4. Clique em `Conectar`.
5. Clique em `Iniciar`.

Observacao: o MVP envia a fila por intervalo. Ele nao confirma ainda se cada imagem terminou antes de mandar a proxima. Se o site aceitar varias solicitacoes em sequencia, isso funciona bem. Se o site bloquear enquanto gera, aumente o intervalo.

## Estrutura ideal de carrossel JP

Use de 7 a 8 slides:

1. Hook: "Voce ja sabe fazer o corte. Entao por que ainda cobra como iniciante?"
2. Dor: agenda cheia, cansaco e lucro baixo.
3. Falsa causa: achar que precisa de mais tecnica.
4. Mecanismo: o problema e identidade profissional e posicionamento.
5. Prova/calculo: diferenca entre cobrar R$70 e R$130.
6. Nova crenca: especialista nao cobra so pela hora, cobra pela transformacao.
7. Passo pratico: reposicionar oferta, linguagem e preco.
8. CTA: aprender a cobrar o que o corte vale.

## Fluxo para criar imagens do carrossel

Use ChatGPT ou Gemini para gerar imagens estaticas dos slides.

Configuracao recomendada:

- Formato: `Imagem`.
- Tamanho: `4:5 Feed vertical`.
- Destino: `ChatGPT` ou `Gemini`.
- Modo: `Carrossel`.
- Quantidade: `7`.

Depois de gerar a fila:

1. Abra ChatGPT/Gemini.
2. Clique em `Conectar`.
3. Clique em `Iniciar` na fila.
4. Revise cada imagem gerada.
5. Baixe manualmente as melhores imagens.

## Fluxo para transformar imagens em video no Flow

Depois de baixar as imagens:

1. Abra Flow.
2. Va em `Projeto`.
3. Em `Imagens baixadas`, selecione imagens soltas do computador; ou use `Pasta de referencias` para selecionar uma pasta inteira.
4. Preencha `Video usando imagens`, por exemplo:

```text
Criar video 9:16 de 6 segundos usando a imagem como first frame. Movimento de camera suave, zoom leve, ambiente de salao, expressao realista, final com sensacao de virada profissional.
```

5. Clique em `Criar videos das imagens selecionadas`.
6. Va para `Fila`.
7. Clique em `Conectar`.
8. Clique em `Iniciar`.

Observacao: por seguranca do Chrome, voce precisa selecionar os arquivos. A extensao nao pode varrer sua pasta Downloads sozinha sem permissao do usuario.

## Como ler referencias por pasta

Use `Pasta de referencias` quando voce tiver uma pasta como:

```text
Downloads/JP/carrossel-01/slide-01.png
Downloads/JP/carrossel-01/slide-02.png
Downloads/JP/carrossel-01/slide-03.png
```

Passo a passo:

1. Va em `Projeto`.
2. Clique em `Pasta de referencias`.
3. Escolha a pasta onde estao as imagens.
4. Escolha a `Acao`.
5. Ajuste o `Limite` de imagens, por exemplo `7`, `12` ou `20`.
6. A extensao lista imagens em ordem de caminho e nome.
7. Clique em `Criar fila com referencias`.

A fila criada preserva o caminho relativo, por exemplo `carrossel-01/slide-01.png`, para ajudar o prompt a entender ordem e contexto.

Limite importante: isso funciona depois que voce seleciona a pasta. A extensao pura de Chrome nao deve acessar automaticamente uma pasta do computador sem essa escolha do usuario.

### Acoes de referencia

`Videos usando first frame`

Cria um job por imagem. Ideal para Flow: cada imagem vira um video curto usando a imagem como primeiro frame/referencia.

`Variacoes de imagem`

Cria um job por imagem pedindo uma nova imagem inspirada naquela referencia. Bom para criar novas versoes de um slide, thumbnail ou criativo.

`Carrossel no mesmo estilo`

Cria um job unico pedindo um novo carrossel baseado no estilo do conjunto de referencias. A extensao anexa a primeira imagem quando o site suporta upload e descreve as demais pelo caminho/nome no prompt.

## Como a IA chega nas referencias

Existem duas camadas:

1. `Contexto textual`: quando voce seleciona uma pasta, a extensao envia para o assistente a quantidade de imagens, pastas/subpastas e nomes em ordem. Isso ajuda o modelo a entender campanha, sequencia e estilo pelo nome dos arquivos.
2. `Anexo na execucao`: quando a fila roda em site que suporta upload pelo adapter, como Flow, a extensao tenta anexar a imagem junto do prompt.

No MVP atual, o assistente OpenRouter ainda nao analisa visualmente os pixels das imagens antes de criar o roteiro. Para isso, o proximo passo seria enviar miniaturas das referencias para um modelo multimodal pelo OpenRouter e pedir um resumo de estilo: paleta, layout, composicao, tipografia, ritmo visual e elementos recorrentes.

## Fluxo de batch diario

Use batch diario para deixar uma fila pronta todos os dias.

1. Va em `Projeto`.
2. Clique em `JP`.
3. Defina horario, exemplo `09:00`.
4. Defina `Imagens/dia`, exemplo `3`.
5. Em `Estilos de imagem`, use uma linha por estilo:

```text
Carrossel educativo limpo 4:5
UGC no salao com cabeleireira realista
Antes/depois de posicionamento premium
```

6. Clique em `Salvar`.
7. Clique em `Agendar`.

Importante: o agendamento cria a fila no armazenamento da extensao. Para executar de fato no site, o Chrome precisa estar aberto, voce precisa estar logado e a aba do site precisa estar disponivel.

## Como usar HookLab no dia a dia

No campo `HookLab`:

- Use `Automatico` quando quiser que o assistente escolha hooks pelo funil.
- Escolha um hook especifico quando quiser repetir uma estrutura vencedora.

Objetivos:

- `Parar o scroll`: primeiro slide, primeira cena, criativo frio.
- `Gerar clique`: legenda, post, email, anuncio com curiosidade.
- `Aquecer o lead`: educacao, prova, objecao, retargeting.
- `Fechar a venda`: CTA, oferta, pagina, direct.

Categorias:

- `Curiosidade & Loop Aberto`: bom para slide 1.
- `Reframe & Contraintuicao`: bom para quebrar "preciso de mais tecnica".
- `Autoridade & Prova`: bom para dados, calculos e bastidores.
- `Medo & Urgencia`: bom para dinheiro deixado na mesa.
- `Identidade & Validacao`: bom para sindrome do impostor.
- `Perspectiva & Transformacao`: bom para antes/depois de posicionamento.

## Prompts prontos para usar no Objetivo

### Carrossel educativo

```text
Criar carrossel para JP Freitas falando com cabeleireiras de cachos/crespos que ja sabem tecnica, mas cobram pouco por medo de aumentar preco. Objetivo: fazer a profissional perceber que o problema nao e tecnica, e identidade profissional.
```

### Carrossel de objecao

```text
Criar carrossel quebrando a objecao "minha cliente nao paga mais caro". Mostrar que o problema nao e a cliente, e sim posicionamento, comunicacao de valor e identidade da profissional.
```

### Carrossel com calculo

```text
Criar carrossel mostrando quanto dinheiro uma cabeleireira deixa na mesa quando cobra R$70 por um servico que poderia cobrar R$130 com posicionamento correto. Tom direto, educativo e sem promessa exagerada.
```

### Roteiro para video

```text
Criar roteiro Reels 9:16 para JP Freitas com hook nos 2 primeiros segundos. Tema: a cabeleireira ja sabe fazer o corte, mas ainda cobra como iniciante. Incluir fala natural, cena de salao, virada e CTA.
```

## Checklist antes de rodar

Antes de clicar em `Iniciar`, confira:

1. Estou na aba correta: ChatGPT, Gemini ou Flow.
2. Estou logado.
3. A extensao mostra `Conectado a pagina`.
4. O formato esta certo: `4:5` para carrossel, `9:16` para video.
5. A fila tem um prompt por item.
6. O intervalo esta em pelo menos `15s`.
7. Se for Flow com upload, eu selecionei as imagens antes.

## Problemas comuns

### Colou mas nao enviou

Clique em `Conectar` e tente de novo. Se for Flow, alguns botoes so aparecem depois que o campo recebe texto.

### Receiving end does not exist

A aba nao recebeu o content script. Clique em `Conectar`, recarregue a pagina do site e abra o popup de novo.

### O site mudou e nao encontra o campo

Abra a pagina, espere carregar tudo e clique em `Conectar`. Se continuar, o seletor do site provavelmente mudou e precisa de ajuste no arquivo de content script.

### As imagens ficaram com texto ruim

Peça menos texto por slide. Use headline curta e deixe o restante para legenda.

### O carrossel ficou generico

Preencha oferta, avatar e mecanismo no Projeto. Para JP, use sempre a tese "tecnica nao e o problema; identidade profissional e posicionamento sao".
