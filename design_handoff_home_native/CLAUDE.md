# CLAUDE.md — Home Native website

Implement the Home Native marketing site in **Next.js (App Router, TypeScript)** from the HTML references in `design_handoff_home_native/design/`. Read `design_handoff_home_native/README.md` first: it lists every token, page and interaction. When the README and the HTML disagree, the HTML wins.

## Hard rules
- **Thin fonts only.** Headings: Newsreader 200. Body/UI: Jost 300. Numerals: Oswald 200/300.
- **Lucide icons only** (`lucide-react`), with strokeWidth 1–1.25.
- **Side panel menu:** 35% width. The hamburger is 2 long thin lines; the close icon is a big thin X.
- **Images:** Pexels placeholders until real photography arrives. Main images use parallax.
- **Mobile portrait** (`max-width: 600px` and `orientation: portrait`):
  - Centre all buttons. A button on its own row is 80vw wide.
  - Buttons side by side use `justify-content: space-between`, spread wide apart.
  - Centre all text EXCEPT bulleted/numbered lists, text inside styled containers (cards, panels), accordions, labels inside images, and the side-panel menu.
- The header hides on scroll down and shows on scroll up.
- Green circular cursor with a click pulse, plus a quiet dial-knob tick sound on click (Web Audio, see README).
- Scroll reveals, parallax, and animated counters. All of them must respect `prefers-reduced-motion`.
- Contact: info@example.com · 0742 696 353 · Kampala, Uganda · "A MachineNative company".

## Suggested structure
```
app/
  layout.tsx                 # fonts, <Header/>, <SidePanel/>, <Cursor/>, <ClickSound/>, <Footer/>
  page.tsx                   # Home
  about/page.tsx
  services/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx  # generateStaticParams from content/projects.ts
  news/page.tsx
  news/[slug]/page.tsx       # generateStaticParams from content/posts.ts
  contact/page.tsx
  contact/actions.ts         # server action: validate + send email
components/
  layout/   Header.tsx  SidePanel.tsx  Footer.tsx  GetStarted.tsx
  effects/  Cursor.tsx  ClickSound.tsx  Reveal.tsx  Parallax.tsx  Counter.tsx  HeroIntro.tsx
  ui/       PillButton.tsx  Chip.tsx  Eyebrow.tsx  Highlight.tsx  Accordion.tsx  TestimonialSlider.tsx
  sections/ PageHero.tsx  ProjectCard.tsx  PostRow.tsx  ...
content/
  projects.ts  posts.ts  team.ts  testimonials.ts  faqs.ts  services.ts
lib/
  useHideOnScroll.ts  useInView.ts  audio.ts
styles/
  globals.css   # tokens as CSS variables + the mobile-portrait media block
```

## Conventions
- Server components by default. Only effects, the slider, accordion, filters, menu and form are `"use client"`.
- Store tokens as CSS variables (`--ink`, `--green`, …) and mirror them in the Tailwind config if you use Tailwind.
- Recreate the `data-m-center`, `data-m-btn` and `data-m-row` behaviour as utility classes (e.g. `.m-center`, `.m-btn`, `.m-row`) inside a single `@media (max-width:600px) and (orientation:portrait)` block in `globals.css`.
- Use `next/image` for every photo, with `sizes` set correctly. Parallax wrappers stay `position: absolute; top: -15%; height: 130%` inside an `overflow: hidden` parent.
- Every route needs `metadata`, plus semantic landmarks: header, nav, main, footer, and article for posts.
- Compare your build against `screenshots/design/*` and the Velin references in `screenshots/reference-velin/`.

## Build order
1. Tokens, fonts and globals → layout shell (Header, SidePanel, Footer) → effects.
2. Home → About → Services → Portfolio → Portfolio detail → News → News detail → Contact.
3. Verify every nav link resolves, check mobile portrait at 390×844, and test with reduced motion turned on.
