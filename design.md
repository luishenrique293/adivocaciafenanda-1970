# Rodrigues Fernandes Advocacia — Design

## Direção aprovada
Landing page web institucional em português, editorial premium. Marfim #f3f0e9, tinta #282c29, dourado envelhecido #9b8050. Cormorant Garamond para títulos e monograma, Poppins para corpo. Margens amplas, linhas finas, cantos discretos; hero assimétrico com pilha de fotografias arquitetônicas ilustrativas, nunca apresentadas como o escritório.

Página única: header, hero, apresentação, pilha sticky de três cartões com perspectiva 3D sincronizada ao scroll, localização e rodapé. CTA leva à localização e link externo ao Google Maps fornecido. Sem áreas, resultados, equipe ou contatos inventados. Endereço: Rua João Batistela, 1060, Guararapes – SP.

Mobile: hero e seções empilhadas, menu expansível. Foco visível, links semânticos e prefers-reduced-motion. React + Motion; nenhuma API ou tabela nova. Fontes e fotografias locais em public. Arquivos principais: pages/portfolio.tsx, portfolio.css, composição pages/index.tsx, metadados index.html. O conteúdo inicial abaixo é referência do template, não especificação deste projeto.

> Starter design brief. Replace this content with the app you're building before writing any UI.
> Keep it short and concrete — it's the single source of truth for palette, typography, pages,
> screens, and flows across web, mobile, and desktop.

One-line description of the app, the platforms it ships on, the visual direction (style, feel), and the core job it does for the user.

## Brand & Colors

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.
