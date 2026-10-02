@AGENTS.md

# Home Native — project rules

The design rules, tokens and page specs live in `design_handoff_home_native/CLAUDE.md` and
`design_handoff_home_native/README.md`. Read both before changing UI. When the README and the HTML
references in `design_handoff_home_native/design/` disagree, the HTML wins.

Stack: Next.js App Router (TypeScript) · Tailwind v4 · shadcn/ui (`components/ui`) · React Context
(`context/`) · Supabase placeholder (`lib/supabase`, inactive until env vars are set).

- Tokens are CSS variables in `app/globals.css`, mirrored into Tailwind via `@theme inline`.
- Custom classes live in `@layer base` / `@layer components` so Tailwind utilities always win.
- Mobile portrait: follow `.claude/skills/mobile-portrait/SKILL.md` (helpers `.m-center`, `.m-btn`, `.m-row`,
  `.m-stack`, `.m-span`, `.m-hide`) and audit every page at 390×844 before pushing.
- Scroll reveal and parallax are global (`components/effects/ScrollEffects.tsx`): headings, paragraphs,
  `a.m-btn` and `[data-reveal]` inside `main` reveal; `[data-parallax]` layers move. Opt out with
  `data-no-reveal`; heroes are excluded via `data-hero`.
- Content is typed data in `content/*.ts`; detail pages use `generateStaticParams`.
- Run `npm run lint` and `npm run build` before pushing.
