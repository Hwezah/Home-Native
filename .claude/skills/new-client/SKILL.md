---
name: new-client
description: Turn a client's TikTok profile screenshot into their own interior-design site — a new client branch of this repo, re-branded content, recreated logo symbol, Vercel deploy and a WhatsApp pitch. Use whenever the user shares a screenshot of a business's TikTok (or similar social) profile, even with no message at all — the screenshot alone means "make this client's site end to end". Also when they ask to make a site for a company from a screenshot.
---

# New client site from a TikTok screenshot

The user's whole job is to forward the WhatsApp message at the end. Do every step without asking questions; only stop if a
token or network call fails, and then say exactly which setting to fix.

This repo (`Hwezah/Home-Native`) holds every interior-design client: **`main` is the HomeNative demo site (and the
template), each client is a branch** named `<name>` cut from `main`, deployed by its own Vercel project whose production
branch is `<name>`. Never put client content on `main` and never merge one client branch into another. Nothing in this
flow needs the user except forwarding the WhatsApp message.

## 0. Access check (first thing)

This session needs `Hwezah/Home-Native` attached (`add_repo`, push access) and cloned to `/home/user/home-native`.

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
and video thumbnails), the **country** (flag emoji, phone format, place names — e.g. 🇰🇪 / 07xx +254 = Kenya), and the logo. Crop and zoom the logo with Playwright (embed the image as a base64 data URL; `file://`
is blocked) so you can see its details. Don't guess anything that isn't shown — no city, hours, email or claims.

## 2. Name and branch

- **Name** (branch, Vercel project and `site.url` all use it): short and plain — the client's main brand word plus the
  business type, lowercase with hyphens, e.g. `uptown-interiors`, `pasha-interiors`. No "ltd", handles, numbers or extra
  words. If the Vercel project name is taken (`GET https://api.vercel.com/v9/projects/<name>` isn't 404), add `-ug`.
- Work in a separate folder per client (a git worktree), so `main` stays clean:

```bash
cd /home/user/home-native && git fetch -q origin main:refs/remotes/origin/main
[ -d node_modules ] || npm ci            # once per session
git worktree add /home/user/clients/<name> -b <name> origin/main
cp -al node_modules /home/user/clients/<name>/node_modules   # hard links; a symlink breaks Turbopack
```

All paths below are inside `/home/user/clients/<name>`.

## 3. Re-brand (client branch only)

- **Client outside Uganda** (the template defaults are Ugandan): use their country's calling code in every `tel:` and
  `wa.me` link (Kenya `+254`, Tanzania `+255`, Rwanda `+250`…), set `locale` (e.g. `en_KE`), never write Uganda/Kampala
  anywhere, and replace the Ugandan place names in `content/projects.ts` sample locations with their country. In the
  pitch, "for businesses in Uganda" becomes "for businesses across East Africa".

- `content/site.ts` — the one settings file: url `https://<name>.vercel.app`, `name`, `fullName`,
  `wordmark` (`name` in capitals as on their logo, `sub` e.g. "INTERIORS"), `outlineWord`, `parent: ""`, `title`,
  `description`, `blurb` (use their slogan if the logo has one), `city`/`location` ("Uganda" unless shown),
  `email: "info@example.com"`, `phones` (display "0700 000 000", href `tel:+256700000000`), `hours`/`hoursShort`
  as "Call us to book a site visit"-style text (never invent opening hours), `socials` (TikTok link; others ""),
  `socialIcons`/`socialText` = only the networks they have, `colors` from their logo.
  (`homeLabel` already uses `fullName`.)
- **No logo at all** (profile photo is a person or a room): keep the generic house LogoMark and use neutral
  monochrome colours (brand `#1A1A1A`, accent `#555555`) — never invent brand colours.
- **Colours come only from the client's logo — never HomeNative's browns/creams** unless their logo has them. `brand` =
  their darkest logo colour (dark sections/footer), `accent` = a darker shade of their main logo colour reaching
  **4.5:1 on white**, dark-theme accent 4.5:1 on a near-black; `tint`/`soft`/`onPhoto` are light/mid shades of the same.
  Check with a quick WCAG contrast calc. Every other tint (dark theme surfaces, section tints, photo placeholders/tints,
  service tags, highlights, footer text) is already derived from these on `main` (`brand-tones.py` was applied there). The About stat circles (`content/team.ts` `bg`) must also be light shades of
  the logo colours.
- `components/layout/LogoMark.tsx` (a generic house on `main`) — replace it with **only the logo's symbol** as an SVG (no circle/badge/background, no text,
  no slogan), `viewBox` sized to the symbol, `className` passed through. Keep the logo's own colours; if the logo is
  black/white (or dark navy etc.) use `currentColor` for those parts so it flips in dark mode. If the logo can't be made
  out from the screenshot (zoom first — a tiny sign in a profile photo often works), use a simple generic house outline
  (roof + walls, `currentColor`) instead. Wordmark.tsx already places it left of the name at the text's height and
  handles long taglines (e.g. "INTERIOR & HOME DECO") and keeps the small line about 4px under an all-caps name —
  don't add margin between the two lines.
- Copy: `content/services.ts` (serviceCards, marquee, serviceColumns, accordionA/B) and the intro paragraphs in
  `app/page.tsx` and `app/about/page.tsx` — rewrite around what they actually do (replace the whole intro sentences). `content/faqs.ts` — neutral, no "free",
  no fixed fees or durations. `content/team.ts` `stats` — their real TikTok follower and like counts + one honest third
  stat; remove anything like awards. Update the title and brand-colour lines in `CLAUDE.md` for this branch.
- Leave team, testimonials, projects, posts and photos as placeholders (the pitch says so).
- `grep -rn -i "native\|kampala"` in `app components content` — only placeholder projects may still mention Kampala.

## 4. Check

Start `npx next dev -p <free port>` in the client folder, then:
- `PORT=<port> node /home/user/home-native/.claude/skills/new-client/files/check-overflow.js` — must print only `done`.
- Screenshot the header logo (light, dark, mobile 390×844), footer, and the About "Numbers" stats in dark mode; look at them.
- `npm run lint` and `npm run build` must pass. Commit (attribution lines as usual) and `git push -u origin <name>`.

## 5. Deploy (all via the Vercel API, `Content-Type: application/json`)

1. Create the project: `POST https://api.vercel.com/v10/projects`
   `{"name": "<name>", "framework": "nextjs", "gitRepository": {"type": "github", "repo": "Hwezah/Home-Native"}}` →
   keep `id` and `link.repoId`.
2. Automatic deploys are off for this repo (`vercel.json` → `git.deploymentEnabled: false`), because every push would
   otherwise log a deployment in every linked project and use up Vercel's 100-a-day limit. Every deploy is an API call.
3. Make the client branch its live branch: `PATCH /v9/projects/<name>/branch` `{"branch": "<name>"}`.
4. First production deploy: `POST /v13/deployments`
   `{"name": "<name>", "project": "<id>", "target": "production", "gitSource": {"type": "github", "repoId": <repoId>, "ref": "<name>"}}`.
5. Poll `GET /v13/deployments/<id>` every 15 s until `readyState` is `READY` and `alias` contains `<name>.vercel.app`
   (the sandbox can't open `*.vercel.app`; the alias is the confirmation). Later changes go live only when you deploy
   again with the same call; batch changes and deploy once per round.
6. If the alias got a random suffix instead (e.g. `<name>-flax.vercel.app` — someone else owns `<name>.vercel.app`),
   add a clean one: `POST /v10/projects/<name>/domains` `{"name": "<name>-ug.vercel.app"}` (check `verified: true`),
   set `site.url` to it, push, and use that address in the pitch.

## 6. Hand over

Reply with: the live link, what's still placeholder, the WhatsApp pitch below with their details filled in, and one
**tap-to-send link per phone number** so the user's phone opens WhatsApp on that chat with the pitch already typed:
`https://wa.me/256XXXXXXXXX?text=<pitch, URL-encoded>` (Ugandan `07…` numbers become `2567…`; build the encoding with
Python `urllib.parse.quote(pitch, safe="")`). Show each as a **tappable markdown link** —
`**[Send pitch to <Company> on WhatsApp](https://wa.me/...)**` — never in a code block (the user taps, not copies).
Also give each phone number in its own code block (no spaces) in case a link fails. The pitch:

```
Hello <Company> team,

I came across your account on TikTok and really liked your work.

We build websites and mobile apps for businesses in Uganda. As more customers search online before they call anyone, we'd love to help your business be found there too.

A website is your business's own page on the internet. It shows your work, your services and your phone number in one place, it's open day and night, and it helps new clients trust you before they even call. TikTok brings people to you; a website helps turn them into clients.

We've already made a sample website for you. Have a look:
*<live link>*

_The photos and some text are only samples for now. If you like it, we'll add your real projects and details._

If you find the idea interesting, I'm happy to talk about it. Just reply here.
```

Never quote their follower, like or view counts in the pitch — it reads as creepy; keep the TikTok mention subtle as above.
The first message has **no price and no proposed domain name** (WhatsApp turns anything like `name.co.ug` into a link
that goes nowhere). Only the preview link may appear. Keep it plain and non-technical: the reader may not know what a website is. Price comes in the user's follow-up
once the client replies.

## Template updates

Improve the template on `main` (in `/home/user/home-native`), push, then bring it into each client branch with
`git merge origin/main` in that client's worktree, check, and push, then deploy each client you changed with the
`POST /v13/deployments` call above (pushes don't deploy on their own).
The session can't delete branches or repos; if one needs removing, ask the user (GitHub → branches → trash icon).
