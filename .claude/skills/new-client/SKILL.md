---
name: new-client
description: Turn a client's TikTok profile screenshot into their own copy of this site — new GitHub repo, re-branded content, recreated logo symbol, Vercel deploy and a WhatsApp pitch. Use whenever the user shares a screenshot of a business's TikTok (or similar social) profile, even with no message at all — the screenshot alone means "make this client's site end to end". Also when they ask to make a site for a company from a screenshot.
---

# New client site from a TikTok screenshot

The user's whole job is to forward the WhatsApp message at the end. Do every step without asking questions; only stop if a
token or network call fails, and then say exactly which setting to fix.

This repo is the **HomeNative** site and the template. **Never change HomeNative's own site while doing this** — all
client work happens in a separate copy and a separate repo. Push everything to the client repo's `main` branch.

## 0. Access check (first thing)

The cloud environment injects the GitHub and Vercel tokens as `Authorization: Bearer` headers on requests to
`api.github.com` and `api.vercel.com` — there are no token variables; never ask for or print a token. Check both:

```bash
curl -s -o /dev/null -w "github %{http_code}\n" https://api.github.com/user
curl -s -o /dev/null -w "vercel %{http_code}\n" https://api.vercel.com/v2/user
```

`200` = ready. `401`/`403` from the API = the credential is missing or wrong (Edit cloud environment → API credentials).
`000` / "CONNECT tunnel failed" = the network policy blocks the host (Edit cloud environment → Network access → Custom,
add the host). Tell the user which one, then carry on with what doesn't need it.

## 1. Read the screenshot

Pull out: company name (full + short), handle, bio lines, phone numbers, follower and like counts, what they do (from bio
and video thumbnails), and the logo. Crop and zoom the logo with Playwright (embed the image as a base64 data URL; `file://`
is blocked) so you can see its details. Don't guess anything that isn't shown — no city, hours, email or claims.

## 2. Repo

- **Name** (repo, Vercel project and `site.url` all use it): short and plain — the client's main brand word plus the
  business type, lowercase with hyphens, e.g. `uptown-interiors`, `zama-interiors`. No "ltd", handles, numbers, trailing
  hyphens or extra words. If it's taken on GitHub or Vercel, add `-ug` (e.g. `uptown-interiors-ug`).
- Sessions can't create repos (the session's GitHub gateway blocks `POST /user/repos` and the GitHub tool's
  create_repository, whatever the token allows). So **right after reading the screenshot**, ask the user — in one short
  message — to create an empty repo at https://github.com/new named exactly `<name>` (no README), and keep building
  while they do. When they confirm, attach it with `add_repo` (push access); the folder you built in becomes the clone:
  `git init -b main`, `git remote add origin https://github.com/Hwezah/<name>`, commit, `git push -u origin main`,
  then `register_repo_root`.

## 3. Copy the template (into `/home/user/<name>`)

```bash
cd /home/user/Home-Native && git archive HEAD -- . ':!.claude/skills/new-client' | tar -x -C /home/user/<client>
cp -al /home/user/Home-Native/node_modules /home/user/<client>/node_modules   # hard links: a symlink breaks Turbopack
cp .claude/skills/new-client/files/Wordmark.tsx /home/user/<client>/components/layout/Wordmark.tsx
```

## 4. Re-brand (client copy only)

- `content/site.ts` — the one settings file: url `https://<name>.vercel.app`, `name`, `fullName`,
  `wordmark` (`name` in capitals as on their logo, `sub` e.g. "INTERIORS"), `outlineWord`, `parent: ""`, `title`,
  `description`, `blurb` (use their slogan if the logo has one), `city`/`location` ("Uganda" unless shown),
  `email: "info@example.com"`, `phones` (display "0700 000 000", href `tel:+256700000000`), `hours`/`hoursShort`
  as "Call us to book a site visit"-style text (never invent opening hours), `socials` (TikTok link; others ""),
  `socialIcons`/`socialText` = only the networks they have, `colors` from their logo.
  Set `homeLabel` to `` `${site.fullName} — home` ``.
- **Colours come only from the client's logo — never HomeNative's browns/creams** unless their logo has them. `brand` =
  their darkest logo colour (dark sections/footer), `accent` = a darker shade of their main logo colour reaching
  **4.5:1 on white**, dark-theme accent 4.5:1 on a near-black; `tint`/`soft`/`onPhoto` are light/mid shades of the same.
  Check with a quick WCAG contrast calc. Then run
  `python3 /home/user/Home-Native/.claude/skills/new-client/files/brand-tones.py /home/user/<name>` — it re-derives
  every remaining tinted colour (dark theme surfaces, section tints, photo placeholders/tints, service tags, highlights,
  footer text) from those brand colours. The About stat circles (`content/team.ts` `bg`) must also be light shades of
  the logo colours.
- `components/layout/LogoMark.tsx` — redraw **only the logo's symbol** as an SVG (no circle/badge/background, no text,
  no slogan), `viewBox` sized to the symbol, `className` passed through. Keep the logo's own colours; if the logo is
  black/white (or dark navy etc.) use `currentColor` for those parts so it flips in dark mode. If the logo can't be made
  out from the screenshot (zoom first — a tiny sign in a profile photo often works), use a simple generic house outline
  (roof + walls, `currentColor`) instead. Wordmark.tsx already places it left of the name at the text's height and
  handles long taglines (e.g. "INTERIOR & HOME DECO") and keeps the small line about 4px under an all-caps name —
  don't add margin between the two lines.
- Copy: `content/services.ts` (serviceCards, marquee, serviceColumns, accordionA/B) and the intro paragraphs in
  `app/page.tsx` and `app/about/page.tsx` — rewrite around what they actually do. `content/faqs.ts` — neutral, no "free",
  no fixed fees or durations. `content/team.ts` `stats` — their real TikTok follower and like counts + one honest third
  stat; remove anything like awards. Update the title/brand-colour lines in the client's `CLAUDE.md`.
- Leave team, testimonials, projects, posts and photos as placeholders (the pitch says so).
- `grep -rn -i "native\|kampala"` in `app components content` — only placeholder projects may still mention Kampala.

## 5. Check

Start `npx next dev -p <free port>` in the client folder, then:
- `PORT=<port> node .claude/skills/new-client/files/check-overflow.js` (run from Home-Native) — must print only `done`.
- Screenshot the header logo (light, dark, mobile 390×844), footer, and the About "Numbers" stats in dark mode; look at them.
- `npm run lint` and `npm run build` must pass. Commit (attribution lines as usual) and push to `main`.

## 6. Deploy

- If the Vercel check passed: create the project with `POST https://api.vercel.com/v10/projects`
  (`Content-Type: application/json`)
  `{"name": "<name>", "framework": "nextjs", "gitRepository": {"type": "github", "repo": "Hwezah/<name>"}}` — the
  response's `link.repoId` is needed next. Trigger production: `POST /v13/deployments`
  `{"name": "<name>", "project": "<project id>", "target": "production", "gitSource": {"type": "github", "repoId": <repoId>, "ref": "main"}}`.
  Poll `GET /v13/deployments/<id>` every 15 s until `readyState` is `READY` and `alias` contains `<name>.vercel.app`
  (the sandbox can't open `*.vercel.app` itself — the alias is the confirmation). If the alias differs from `site.url`,
  update `site.ts` and push again (Vercel redeploys on push).
- Otherwise tell the user to import the repo in Vercel and name the project `<name>`.

## 7. Hand over

Reply with: the live link, what's still placeholder, the WhatsApp pitch below with their details filled in, and one
**tap-to-send link per phone number** so the user's phone opens WhatsApp on that chat with the pitch already typed:
`https://wa.me/256XXXXXXXXX?text=<pitch, URL-encoded>` (Ugandan `07…` numbers become `2567…`; build the encoding with
Python `urllib.parse.quote(pitch, safe="")`). Show each as a **tappable markdown link** —
`**[Send pitch to <Company> on WhatsApp](https://wa.me/...)**` — never in a code block (the user taps, not copies).
Also give each phone number in its own code block (no spaces) in case a link fails. The pitch:

```
Hello <Company> team,

We came across your work on TikTok. It's impressive: *<followers> followers and <likes> likes*.

We build websites and mobile apps for businesses in Uganda. As more customers search online before they call anyone, we'd love to help your business be found there too.

A website is your business's own page on the internet. It shows your work, your services and your phone number in one place, it's open day and night, and it helps new clients trust you before they even call. TikTok brings people to you; a website helps turn them into clients.

We've already made a sample website for you. Have a look:
*<live link>*

_The photos and some text are only samples for now. If you like it, we'll add your real projects and details._

If you find the idea interesting, I'm happy to talk about it. Just reply here.
```

The first message has **no price and no proposed domain name** (WhatsApp turns anything like `name.co.ug` into a link
that goes nowhere). Only the preview link may appear. Keep it plain and non-technical: the reader may not know what a website is. Price comes in the user's follow-up
once the client replies.
