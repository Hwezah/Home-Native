@AGENTS.md

# Interior sites — project rules

This repo holds one website per interior-design client. **`main` is the template; every client is a branch** named
after them (e.g. `pasha-interiors`), deployed by its own Vercel project whose production branch is that branch.
- New client = new branch from `main` (see `.claude/skills/new-client/SKILL.md`). Never merge one client's branch into
  another, and never put client content on `main`.
- Template improvements go on `main`, then get merged into client branches (`git merge main`).
- The template started as the HomeNative site (github.com/Hwezah/Home-Native, which stays separate and unchanged); the
  design rules below still apply. `content/site.ts` still holds HomeNative's details as example values only.

The design rules, tokens and page specs live in `design_handoff_home_native/CLAUDE.md` and
`design_handoff_home_native/README.md`. Read both before changing UI. When the README and the HTML
references in `design_handoff_home_native/design/` disagree, the HTML wins.

Stack: Next.js App Router (TypeScript) · Tailwind v4 · shadcn/ui (`components/ui`) · React Context
(`context/`) · Supabase placeholder (`lib/supabase`, inactive until env vars are set).

- Tokens are CSS variables in `app/globals.css`, mirrored into Tailwind via `@theme inline`.
- Brand colour (set in `content/site.ts` → `site.colors`; client decision, overrides the handoff's green): `--brand` #2E1F12 is the main colour (dark
  sections, filled buttons, active chips, footer); `--brand-mid` #8B5E3C is the accent on light backgrounds
  (highlighted words, link hover, cursor, focus); `--brand-tint` #EADBC8 is the highlight underline.
- Theming: light/dark via `<html data-theme>` (set before paint by `themeInitScript`, state in
  `context/ThemeContext.tsx`, toggle `components/layout/ThemeToggle.tsx`). Use flipping tokens (`paper`, `ink`,
  `line`, `muted-*`, `surface-*`, `fill`, `img-bg`) for page surfaces/text; use fixed `white` / `#111` only for
  text and buttons sitting on photos or the deep-brown sections.
- Header is fixed and transparent at the top (white text over image heroes listed in `HERO_PAGES`), frosted
  glass once scrolled. It always stays pinned (client decision — no hide-on-scroll, overrides the handoff). `#main` is padded by `--header-h`; a first-child `[data-hero]` slides up under it.
- Cursor and click sound react to mouse presses and real taps only — never to touch-down, so scrolls
  are not treated as clicks.
- Custom classes live in `@layer base` / `@layer components` so Tailwind utilities always win.
- Mobile portrait: follow `.claude/skills/mobile-portrait/SKILL.md` (attributes `data-m-center`, `data-m-btn`,
  `data-m-row`, `data-m-stack`, `data-m-span`, `data-m-hide`) and audit every page at 390×844 before pushing.
- Scroll reveal and parallax are global (`components/effects/ScrollEffects.tsx`): headings, paragraphs,
  `a[data-m-btn]` and `[data-reveal]` inside `main` reveal; `[data-parallax]` layers move. Opt out with
  `data-no-reveal`; heroes are excluded via `data-hero`.
- Content is typed data in `content/*.ts`; detail pages use `generateStaticParams`.
- Client details (name, wordmark, contacts, hours, socials, SEO text, brand colours) live only in `content/site.ts`;
  re-branding for a new client starts there, then the page copy in the other `content/*.ts` files. Client sites use a generic
  email (`info@example.com`) until the client gives a real one.
- Run `npm run lint` and `npm run build` before pushing.
- A TikTok/social profile screenshot from the user (even with no text) means: build that client's site end to end with
  `.claude/skills/new-client/SKILL.md`. Branch from `main`; never change `main` while doing it.
