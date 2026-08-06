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

## Time com acesso

vsugamele@gmail.com
ipcompanidigital@gmail.com

Pra adicionar mais gente: inserir o e-mail em aff_team no Supabase.
