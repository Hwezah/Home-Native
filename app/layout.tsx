import type { Metadata } from "next";
import { Jost, Newsreader, Oswald } from "next/font/google";
import "./globals.css";

import { site } from "@/content/site";
import { MenuProvider } from "@/context/MenuContext";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Header } from "@/components/layout/Header";
import { SidePanel } from "@/components/layout/SidePanel";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/effects/Cursor";
import { ClickSound } from "@/components/effects/ClickSound";
import { ScrollEffects } from "@/components/effects/ScrollEffects";

// Thin fonts only: Newsreader 200 for headings, Jost 300 for body, Oswald 200/300 for numerals.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.title}`,
    template: `%s — ${site.fullName}`,
  },
  description: `${site.name} is ${site.description.charAt(0).toLowerCase()}${site.description.slice(1)}${site.parent ? ` ${site.parent}.` : ""}`,
  openGraph: { siteName: site.fullName, type: "website", locale: site.locale },
};

const c = site.colors;
// Brand colours from content/site.ts; light/dark neutrals stay in globals.css.
const brandCss =
  `:root{--brand:${c.brand};--brand-mid:${c.accent};--brand-tint:${c.tint};--brand-soft:${c.soft};--brand-accent-light:${c.accent};--on-photo:${c.onPhoto};--on-brand:color-mix(in srgb,#fff 90%,var(--brand));--on-brand-muted:color-mix(in srgb,#fff 72%,var(--brand));--brand-raised:color-mix(in srgb,#fff 12%,var(--brand));--yellow:${c.onPhoto}}` +
  `:root[data-theme="dark"]{--brand-mid:${c.dark.accent};--brand-tint:${c.dark.tint};--brand-soft:${c.dark.soft}}` +
  `html:root{--sand:var(--brand-mid);--sand-tint:var(--brand-tint);--surface-warm:color-mix(in srgb,var(--brand) 3%,#fff);--surface-warm-2:color-mix(in srgb,var(--brand) 6%,#fff);--surface-warm-3:color-mix(in srgb,var(--brand) 4%,#fff);--img-bg:color-mix(in srgb,var(--brand) 14%,#fff);--tag-tint-1:color-mix(in srgb,var(--brand-soft) 30%,#fff);--tag-tint-2:color-mix(in srgb,var(--brand) 12%,#fff);--tag-tint-3:color-mix(in srgb,var(--brand-tint) 70%,#fff)}html:root[data-theme="dark"]{--paper:color-mix(in srgb,var(--brand) 30%,#0b0b0c);--ink:color-mix(in srgb,var(--brand) 6%,#f4f4f4);--muted-1:color-mix(in srgb,var(--brand) 10%,#d2d2d2);--muted-1b:color-mix(in srgb,var(--brand) 10%,#c4c4c4);--muted-2:color-mix(in srgb,var(--brand) 12%,#a2a2a2);--muted-2b:color-mix(in srgb,var(--brand) 12%,#939393);--line:color-mix(in srgb,var(--brand) 45%,#262626);--line-strong:color-mix(in srgb,var(--brand) 45%,#363636);--surface-warm:color-mix(in srgb,var(--brand) 38%,#101011);--surface-warm-2:color-mix(in srgb,var(--brand) 42%,#121213);--surface-warm-3:color-mix(in srgb,var(--brand) 40%,#111112);--img-bg:color-mix(in srgb,var(--brand) 50%,#1c1c1c);--sand-tint:var(--brand-tint);--tag-tint-1:color-mix(in srgb,var(--brand-soft) 35%,#1c1c1c);--tag-tint-2:color-mix(in srgb,var(--brand) 60%,#262626);--tag-tint-3:color-mix(in srgb,var(--brand-tint) 70%,#1c1c1c)}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jost.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply the saved / system theme before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style dangerouslySetInnerHTML={{ __html: brandCss }} />
      </head>
      <body>
        <ThemeProvider>
          <MenuProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2"
            >
              Skip to content
            </a>
            <Header />
            <SidePanel />
            <main id="main">{children}</main>
            <Footer />
            <ThemeToggle />
          </MenuProvider>
        </ThemeProvider>
        <Cursor />
        <ClickSound />
        <ScrollEffects />
      </body>
    </html>
  );
}
