# Handoff: Home Native Interiors — Marketing Website (8 pages)

## Overview
Home Native is an interior design studio in Kampala, Uganda ("A MachineNative company"). This package covers the full marketing site: **Home, About, Services, Portfolio, Portfolio Project (detail), News, News Post (detail), Contact**. The layout and interaction model follow the Velin interior theme (reference screenshots in `screenshots/reference-velin/`), with Home Native's own branding, copy and imagery.

Target stack: **Next.js (App Router) + TypeScript**. Tailwind or CSS Modules are both fine — the tokens below map 1:1.

## About the design files
The files in `design/` are **HTML design references**, not production code. Each `*.dc.html` opens directly in a browser (keep `support.js` and `image-slot.js` next to them) and shows the intended look and behaviour. Recreate them as real Next.js components — don't ship or wrap the HTML. Every style is inline in the HTML, so you can read exact values straight from the markup. The logic for each page sits in the `<script data-dc-script>` class at the bottom of its file (state, data arrays, scroll/cursor/sound effects).

## Fidelity
**High-fidelity.** Colours, type, spacing, copy and interactions are final. Match them pixel-for-pixel. Images are Pexels placeholders and will be swapped for real photography later.

---

## Global rules (apply on every page)
Source: `CLAUDE.md` in this folder. These rules are non-negotiable.

### Typography (thin fonts only)
| Role | Family | Weight | Notes |
|---|---|---|---|
| Headings / display | Newsreader (opsz 6..72) | 200 | letter-spacing −0.02 to −0.03em, line-height 1–1.1 |
| Body / UI | Jost | 300 (400 for small caps labels/buttons) | |
| Numerals (counters, big phone number, client names) | Oswald | 200–300 | |

Load them from Google Fonts with `next/font/google`: Newsreader 200/300 (+ italic), Jost 200/300/400, Oswald 200/300.

Type scale (all values are `clamp()` in the source):
- Hero H1: `clamp(64px, 9vw, 136px)` Newsreader 200
- Section H2: `clamp(48px, 6vw, 90px)` Newsreader 200, line-height 1
- Large lead paragraph: `clamp(32px, 4vw, 60px)` Newsreader 200, line-height 1.2
- H3 / accordion titles: `clamp(24px, 2.2vw, 34px)` Jost 300
- Body: 18–19px Jost 300, line-height 1.7, colour `#555`/`#444`
- Eyebrow label: 14px uppercase, prefixed with "— ", 1px `#eee` bottom border, 18px padding below
- Nav: 13px uppercase, letter-spacing .08em

### Colour tokens
```
--ink:          #111111   (text, borders on hover, primary button fill)
--paper:        #FFFFFF
--muted-1:      #444444 / #555555 (body)
--muted-2:      #888888 / #999999 (meta, captions)
--line:         #EEEEEE   (dividers)
--line-strong:  #E3E3E3   (input + pill borders)
--green:        #4C7A43   (brand accent, link hover, cursor)
--green-tint:   #DCEBD6   (highlight underline under green words)
--green-soft:   #A8C49C
--yellow:       #F3EFA6   (accent word on dark hero images)
--sand:         #8A7A52 + tint #EAE3D3 (accent word in the "Get Started" block)
--surface-warm: #FAFAF7 / #F6F4EF / #F4F6F1
Tag tints (Services): #E3E6DC, #DCE4E8, #EBDDE0
Stat circles (About): #C3D0DA, #D8CFBF, #B7CDBB
Error: #A24B3A
```
**Highlighted words**: accent colour text with `background: linear-gradient(transparent 88%, <tint> 88%)`, so the tint sits as a thick underline at the baseline.

### Layout
- Content width: `max-width: 1160px`, side padding `clamp(20px, 5vw, 40px)`
- Wide width (header, portfolio grid): `max-width: 1460px`, side padding `clamp(20px, 5vw, 80px)`
- Section vertical rhythm: `clamp(80px, 10vw, 150px)`
- Use grids with `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so they collapse to one column on their own
- Radius: 0 for images (homepage cards use 14–24px), 999px for pill buttons and chips

### Buttons
- **Pill (secondary):** padding 22px 42px, 1px `#e3e3e3` border, 999px radius, 17px text + Lucide `arrow-right` (18px, stroke 1.25). Hover: fill `#111`, text white. Transition .35s.
- **Pill (primary, CTA):** padding 30px 78px, 1px `#111` border, 19px text. Same hover.
- **Solid (form submit):** full width, `#111` fill, 15px uppercase, letter-spacing .3em. Hover: inverts to white.
- **Chips (filters / project type):** padding 10px 20px, 14px uppercase. Active: `#111` fill, white text. Inactive: transparent with `#e3e3e3` border.

### Icons
**Lucide only**, stroke width 1–1.25 (thin), sizes 16–48px. Use `lucide-react`. Icons in use: arrow-right, arrow-left, arrow-up-right, plus, quote, check, link, instagram, facebook, linkedin, mail.

### Header
Sticky, white background, shadow `0 2px 18px rgba(0,0,0,.05)`. Left: wordmark "Home Native" (Newsreader 200, 30px), a 60px × 1px rule, then "interiors" (Jost 300, 17px). Right: nav links (the active page gets a 1px underline with 4px padding) and a hamburger.
**Hide on scroll down, show on scroll up**: `translateY(-100%)` once scrollY > 160 and the user is scrolling down. Transition .5s `cubic-bezier(.2,.7,.2,1)`.

### Side-panel menu
- Fixed to the right, **35% width** (min `min(100%, 360px)`), white, padding `clamp(32px, 3.6vw, 56px)`.
- Opens with `translateX(105%) → 0`, .6s `cubic-bezier(.7,0,.2,1)`. Overlay `rgba(17,17,17,.4)` fades in; clicking it closes the panel.
- **Hamburger:** 2 long thin lines (52px × 1px, 9px gap).
- **Close:** a big thin X — two 64px × 1px lines rotated ±45°.
- Links: `clamp(32px, 2.6vw, 44px)` Jost 300. Hover: padding-left 18px and green.
- Footer block: "Get in touch", info@homenative.co, 0742 696 353, Instagram / Pinterest / LinkedIn.
- The panel's text is **never centred**, mobile included.

### Footer
Social icons (Instagram, Facebook, LinkedIn) and "© 2026 — Home Native Interiors · a MachineNative company". 15px uppercase, `#666`.

### "Get Started" block (shared, above the footer on most pages)
Eyebrow "— Get Started", H2 "Get Started On *Inspiring* Interiors — Contact Today" (sand highlight), a 3-column Email / Hours / Phone row, and a primary pill "Request a Quote" → /contact. Services and Contact leave it out.

### Mobile portrait (max-width 600px AND orientation: portrait)
- **Centre all buttons.** A button on its own row is **80vw wide**.
- **Buttons side by side**: `justify-content: space-between`, spread far apart (full width).
- **Centre all text EXCEPT**: bulleted/numbered lists, text inside styled containers (cards, panels), accordions, labels inside images, and the side-panel menu.
- In the prototype this is done with a single media block plus attributes: `data-m-center` (centre the block and its children), `data-m-btn` (80vw centred button), `data-m-row` (space-between row), `data-m-hide`, `data-m-span`. Recreate it as utility classes or a small set of responsive props.

### Contact details
info@homenative.co · 0742 696 353 · Mon–Fri 9 AM–5 PM, Sun closed · Kampala, Uganda · "A MachineNative company"

---

## Global interactions & effects
Build these as client components or hooks, mounted once in the root layout where possible.

1. **Custom cursor** (only when `pointer: fine`; hide the native cursor with `* { cursor: none }`):
   - Ring: 64px, 1.25px `#4C7A43` border, follows the pointer with smoothing (`k = 1 - 0.0018^(dt/1000)`).
   - Dot: 6px solid green, follows almost instantly.
   - Over `a`, `button` and `[data-hn-drag]`: the ring grows to 104px and fills `rgba(76,122,67,.12)`.
   - Mouse down: the ring shrinks to 40px and a pulse ring expands from scale .4 to 2.6 while fading out (750ms).
   - On touch: show the ring at the tap point for 700ms, then fade it out.
2. **Click sound — dial-knob tick** (Web Audio, kept very quiet). On each pointerdown, play two band-passed noise bursts with a sharp exponential decay (`(1 - i/n)^6`):
   - 12ms @ 3200Hz, Q 4, gain 0.12
   - 18ms @ 900Hz, Q 6, gain 0.06, starting 4ms later

   Create one AudioContext lazily and resume it if it is suspended. See `blip()` in any page file.
3. **Scroll reveal:** every `section h1, h2, h3, p, image-slot wrapper, a[data-m-btn]` outside the header, side panel and hero starts at `opacity: 0; translate: 0 40px`. When it crosses a 12% intersection threshold it animates to visible over 1s `cubic-bezier(.2,.7,.2,1)`, staggered 0.09s per sibling (capped at 4). It runs once only. Respect `prefers-reduced-motion`.
4. **Parallax:** elements with `data-parallax="<speed>"` (0.2–0.35) sit absolutely inside an `overflow: hidden` parent with extra height (`top: -15%; height: 130%`). On scroll, `translateY = (parentCenter - viewportCenter) * -speed`. All main and hero images use this.
5. **Hero intro** (pages with an image hero: Home, About, Services, Contact):
   - The image scales 1.18 → 1 and brightens .6 → 1 over 2.6s.
   - The horizontal line scales X from 0 to 1 (1.8s, 300ms delay).
   - The H1 is split into words, each masked and rising from `translateY(110%) rotate(4deg)` (1.3s, 140ms stagger).
   - The eyebrow and side caption fade up.
6. **Counters** (About "Numbers"): count from 0 to the target over 1.8s with ease-out cubic when 50% visible; the suffix (+ / %) stays fixed.
7. **Image hover:** the inner image wrapper scales to 1.06 over 1.2s `cubic-bezier(.2,.7,.2,1)`.

---

## Pages

### 1. Home — `/`  (`design/Home Native Homepage.dc.html`, screenshots `01-home/`)
Hero with parallax image, split-word H1 and a spinning circular text badge → About lead paragraph with outline "Native" wordmark → video/reel card with play toggle → Services cards → draggable/auto-advancing project slider (5 projects, active slide taller, counter "03 / 05", prev/next, swipe > 50px) → Why Us (4 reasons with Lucide icons) → FAQ accordion → testimonials (auto-rotate every 6s, dots) with client name grid on an image → Latest News (3 cards → /news/[slug]) → marquee → footer. Read the file for exact copy.

### 2. About — `/about`  (`design/About.dc.html`, `02-about/`)
- Image hero: "— Who We Are" / "About **Us.**" (yellow), caption "Get to know more about us."
- Lead paragraph (Newsreader) with a green highlighted link → /portfolio, plus an outline "Native" wordmark behind it (toggleable).
- Mission / Vision two-column section, with an italic signature "Home Native".
- Full-bleed parallax banner.
- "/ Numbers of Success": 3 rows, each with a coloured circle and arrow-up-right (hover rotates 45°), title, body and an animated counter (10+, 90%, 85%).
- Team: H2 "Meet The **Team**" and a "Learn More" pill. 3 square portraits, grayscale .35 → 0 on hover; the 1st and 3rd are offset 120px down.
- Testimonials split block, then Get Started and the footer.

### 3. Services — `/services`  (`design/Services.dc.html`, `03-services/`)
- Image hero: "— What We Do" / "Our **Services.**", caption "Spaces shaped around how you live."
- Intro: eyebrow "Services", H2 "Transforming **Spaces** Into Homes That Fit", paragraph.
- **3 service columns**, each with: a tinted tag, an H3 with a bottom rule, a paragraph, and a list of four items with Lucide `plus` icons (the lists stay left-aligned on mobile).
- **Accordion A** (image on the right): Space Planning, Colour Consultation, Furniture Selection, Lighting Design. **Accordion B** (image on the left): Project Management, Custom Joinery, Styling & Art, Aftercare. Each group has one item open at a time, and the first item is open by default.
  - Expand animates `grid-template-rows: 0fr → 1fr` over .55s.
  - The "+" morphs into "−" by rotating its vertical bar 90° → 0°.
- **Testimonial slider:**
  - Centred Newsreader quote `clamp(28px, 3.6vw, 56px)`, an 84px round grayscale avatar that crossfades between clients, name and role.
  - Arrow buttons left and right (hidden on mobile), and 5 dots (active dot 44px wide, inactive 6px).
  - Auto-advances every 6s.
- **Contact band**:
  - Full-bleed parallax image with a dark overlay, eyebrow "— Collaboration", H2 "Get in *touch* with us." (yellow).
  - The phone number "0742 696 353" is set very large in Oswald 200 (`clamp(64px, 10vw, 160px)`) and is a `tel:` link.
  - Email and Hours sit underneath, followed by a white pill "Request a Quote".
- Footer. This page has no Get Started block.

### 4. Portfolio — `/portfolio`  (`design/Portfolio.dc.html`, `04-portfolio/`)
- Wide grid, `repeat(auto-fill, minmax(min(100%, 340px), 1fr))`. **The first cell is the intro**: H1 "Portfolio", a paragraph, and filter chips (All / Residential / Commercial / Renovation).
- Project cards (4:5):
  - The image fills the card. A bottom gradient `rgba(20,16,12,.62) → 0` covers 55% of its height.
  - **Category (13px uppercase) and title (Newsreader 200, `clamp(28px, 2.4vw, 38px)`) sit in white in the bottom-left corner inside the image**, inset `clamp(20px, 2vw, 32px)`. There are no numbers.
  - Hover zoom. The whole card links to `/portfolio/[slug]`.
- 8 projects: Linen House (Residential), Oak & Clay Loft (Renovation), Kiln Café (Commercial), Harbour Apartment (Residential), Stone Cottage (Renovation), Atelier Reyes (Commercial), Juniper Flat (Residential), Willow Studio (Commercial).
- Get Started and the footer.

### 5. Portfolio Project — `/portfolio/[slug]`  (`design/Portfolio Project.dc.html`, `05-portfolio-project/`)
- Intro in two columns:
  - Left: a back link "← Residential — Interior Design", H1 (project title), and a paragraph.
  - Right: a 2×2 meta grid (Client, Date, Location, Scope), each item with a top rule, a muted label and an uppercase value.
- Full-bleed parallax hero image.
- "— We started with" / "Colour **Palette**": paragraph, 4 round swatches with names (Limewash #E9E2D6, Oat #D8C9B0, Sage #A9B59A, Walnut #6B4F3A; each scales 1.08 on hover), and an image on the right.
- "— Materials" / "Natural **Textures**": image on the left, text on the right.
- Three-image gallery, full bleed, 3:4 crops, 4px gaps.
- Previous / Next project row (`data-m-row`).
- Get Started and the footer.
- Data shape: `{ slug, title, category, intro, client, date, location, scope, palette[], sections[], gallery[], prev, next }`.

### 6. News — `/news`  (`design/News.dc.html`, `06-news/`)
- Intro: a large H1 "News" on the left. On the right: a paragraph and category chips (All / Ideas / Materials / Studio / Insights).
- Post list, one per row:
  - Title in Jost 200 at `clamp(36px, 4.2vw, 66px)`, with date and category under it. The title block is indented `clamp(0px, (100vw - 600px) * .45, 400px)`.
  - Then a full-width 16:7 image with hover zoom.
  - Then the excerpt and an underlined "Read more →" link (the gap widens on hover).
- Pagination: 01 02 03 on the left, "Older posts →" on the right.
- Get Started and the footer.

### 7. News Post — `/news/[slug]`  (`design/News Post.dc.html`, `07-news-post/`)
- Back link "← All news", H1 (Newsreader `clamp(52px, 7vw, 112px)`, balanced wrapping), and a meta line (date · category · read time).
- Parallax image inside a 1160px container.
- Article column, max 780px, offset to the right:
  - Lead paragraph in Newsreader, then body paragraphs and H3s.
  - An inline image.
  - A **bulleted list (always left-aligned)**.
  - A pull quote between rules, with a quote icon, italic Newsreader and an attribution.
- Tag pills, and share icons (Facebook, LinkedIn, Copy link). Copy link changes to "Copied" in green for 1.8s.
- Previous / Next post row, then "— Keep reading": 3 related cards (4:3 image, meta, title).
- Get Started and the footer.

### 8. Contact — `/contact`  (`design/Contact.dc.html`, `08-contact/`)
- Image hero: "— Get In Touch" / "Contact **Us.**", caption "We reply within one working day."
- Two columns:
  - **Left:** eyebrow, H2 "Let's **Talk**", a paragraph, "Call us now", the phone number at `clamp(40px, 4.4vw, 64px)`, email, and social icons.
  - **Right:** the form:
    - Name, Email and Phone (optional) inputs: underline only, 1px `#e3e3e3`, turning green on focus.
    - "Project type" chips (Residential, Commercial, Renovation, Styling), with Residential selected by default.
    - A boxed message textarea (min-height 200px).
    - A solid "Send message" button.
  - **Validation:** name is required, email must match `^\S+@\S+\.\S+$`, and message is required. If any fail, show "Please add your name, a valid email and a short message." in `#A24B3A`.
  - **Success:** replace the form with a panel (`#F4F6F1` background): a green check circle, "Thank you — message received.", a line of follow-up copy, and a "Send another" button that resets the form.
  - Wire the form to a Next.js Route Handler or Server Action (email via Resend or similar).
- Studio info row: Studio (Kampala, Uganda · visits by appointment), Hours, Company.
- Client name strip: bordered cells, Oswald 300, `#999` turning `#111` on hover.
- Footer. This page has no Get Started block.

---

## State summary
| Page | State |
|---|---|
| All | `menuOpen`, header hidden flag, cursor position (refs, not React state) |
| Home | `slide` (project slider), `faq` index, `t` (testimonial index, auto 6s), `reel` playing |
| About | `t` (testimonial) |
| Services | `accA` index (default 0), `accB` index (default 0), `t` (testimonial) |
| Portfolio | `category` filter |
| News | `category` filter |
| News Post | `copied` (1.8s timeout) |
| Contact | `projectType`, `error`, `sent`, plus form fields |

Content (projects, posts, team, testimonials, FAQs) should live in typed data files (`/content/*.ts`) or a CMS. Detail pages use `generateStaticParams`.

## Assets
- All images are **Pexels placeholders** (URLs are inline in each file). Swap them for real project photography and use `next/image`.
- Fonts: Google Fonts (Newsreader, Jost, Oswald).
- Icons: `lucide-react`.
- There is no logo file; the wordmark is set in type.

## Files
```
design_handoff_home_native/
├── README.md                ← this file
├── CLAUDE.md                ← project rules + suggested Next.js structure for Claude Code
├── design/                  ← HTML design references (open in a browser)
│   ├── Home Native Homepage.dc.html
│   ├── About.dc.html
│   ├── Services.dc.html
│   ├── Portfolio.dc.html
│   ├── Portfolio Project.dc.html
│   ├── News.dc.html
│   ├── News Post.dc.html
│   ├── Contact.dc.html
│   ├── support.js           ← runtime needed to open the prototypes (not for production)
│   └── image-slot.js        ← image placeholder component (not for production)
└── screenshots/
    ├── design/01-home … 08-contact/   ← desktop captures of each built page, top to bottom
    └── reference-velin/               ← original Velin theme reference screenshots
```
