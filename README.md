# AffHub

Plataforma de gestao de projetos de afiliado. Biblioteca de criativos, resultados de ads, custos de ferramentas e produtos, multi-produto (LinfaFlow e o primeiro).

## Stack

Frontend: HTML/CSS/JS puro, single-file (index.html), sem build step.
Backend: Supabase (Postgres + Auth + Storage), projeto sxiqbhcnkzrrenzgncss, tabelas com prefixo aff_.
Acesso: login por e-mail/senha (Supabase Auth) mais whitelist na tabela aff_team via RLS (aff_is_team()).

## Deploy

App estatico, nao precisa de build command. Na Vercel: import do repo, framework "Other", sem install/build command, root = /.

## Estrutura

index.html: app completo (dashboard, biblioteca de criativos, ads, custos, produtos).

extension/ai-browser-automator: extensao Chrome unpacked para criar filas de prompts por projeto e operar ChatGPT/Gemini/Flow no navegador. Inclui presets de projeto como LinfaFlow e XYZ.

## Extensao de criativos

Carregar em `chrome://extensions`:

1. Ativar modo desenvolvedor.
2. Clicar em "Carregar sem compactacao".
3. Selecionar `extension/ai-browser-automator`.

Fluxo recomendado para Flow:

1. Abrir o projeto no Flow.
2. Abrir a extensao AffHub Creative Automator.
3. Aba `Projeto` -> `LinfaFlow` ou `XYZ`.
4. Clicar `Cenas Flow x1` para criar uma fila de cenas 9:16, 8s, uma geracao por take.
5. Usar `Colar no site`/fila. Se o Flow bloquear o editor Slate, a extensao abre um painel `AffHub Flow Assist` com o prompt pronto para copiar e colar manualmente.

## Time com acesso

vsugamele@gmail.com
ipcompanidigital@gmail.com

Pra adicionar mais gente: inserir o e-mail em aff_team no Supabase.
