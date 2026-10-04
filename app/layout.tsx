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
  `:root{--brand:${c.brand};--brand-mid:${c.accent};--brand-tint:${c.tint};--brand-soft:${c.soft};--brand-accent-light:${c.accent};--on-photo:${c.onPhoto}}` +
  `:root[data-theme="dark"]{--brand-mid:${c.dark.accent};--brand-tint:${c.dark.tint};--brand-soft:${c.dark.soft}}`;

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
