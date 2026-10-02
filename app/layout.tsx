import type { Metadata } from "next";
import { Jost, Newsreader, Oswald } from "next/font/google";
import "./globals.css";

import { siteUrl } from "@/content/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Home Native Interiors — Interior design studio in Kampala",
    template: "%s — Home Native Interiors",
  },
  description:
    "Home Native is an interior design studio in Kampala, Uganda creating calm, functional and lasting spaces. A MachineNative company.",
  openGraph: { siteName: "Home Native Interiors", type: "website", locale: "en_UG" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jost.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply the saved / system theme before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
