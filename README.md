# Home Native Interiors

Marketing site for **Home Native**, an interior design studio in Kampala, Uganda — *a MachineNative company*.

Built with **Next.js 16 (App Router, TypeScript)**, **Tailwind CSS v4**, **shadcn/ui**, **React Context** and a
**Supabase** placeholder.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — Supabase is not required
npm run dev                  # http://localhost:3000
```

| Script          | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Dev server (Turbopack)       |
| `npm run build` | Production build             |
| `npm start`     | Serve the production build   |
| `npm run lint`  | ESLint                       |

## Pages

`/` · `/about` · `/services` · `/portfolio` · `/portfolio/[slug]` · `/news` · `/news/[slug]` · `/contact`

## Structure

```
app/                 routes, root layout (fonts, header, side panel, footer, global effects)
  contact/actions.ts server action for the contact form
components/
  layout/            Header, SidePanel, Footer, GetStarted
  effects/           Cursor, ClickSound, ScrollEffects (reveal + parallax), Counter
  ui/                shadcn primitives (button, input, textarea, label) + PillButton, Chip, Accordion, sliders…
  sections/          page sections (PageHero, ProjectSlider, PortfolioGrid, NewsList, ContactForm…)
content/             typed data: projects, posts, team, testimonials, faqs, services, site
context/MenuContext  side-panel state (Context API)
lib/                 hooks, Web Audio tick, supabase clients
supabase/migrations  SQL for the contact_messages table
design_handoff_home_native/   HTML design references, specs and screenshots
```

## Supabase (placeholder)

Everything works without Supabase. To store contact-form submissions:

1. Create a project and run `supabase/migrations/0001_contact_messages.sql`.
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.

Without these, the contact action validates input and logs the submission on the server.

## Notes

- Images are **Pexels placeholders** (allowed in `next.config.ts`); swap them for real photography in `content/`.
- shadcn/ui is configured via `components.json`; add components with `npx shadcn@latest add <name>`.
- Animations (reveals, parallax, hero intro, counters, marquee, cursor smoothing) respect `prefers-reduced-motion`.
