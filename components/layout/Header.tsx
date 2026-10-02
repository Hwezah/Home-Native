"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { useMenu } from "@/context/MenuContext";
import { useScrolled } from "@/lib/useScrolled";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

/** Pages whose first section is a full-bleed image hero that sits under the header. */
const HERO_PAGES = ["/", "/about", "/services", "/contact"];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

/**
 * Fixed header. Transparent at the top of the page (white text over image heroes); once the page
 * scrolls it turns into frosted glass. Always stays pinned to the top (client decision).
 */
export function Header() {
  const pathname = usePathname();
  const { menuOpen, openMenu } = useMenu();
  const scrolled = useScrolled();
  const overHero = !scrolled && HERO_PAGES.includes(pathname);

  return (
    <header
      data-glass={scrolled || undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b transition-[background-color,box-shadow,border-color,color,backdrop-filter] duration-500 ease-hn",
        scrolled
          ? "border-line/60 bg-paper/65 shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
        overHero ? "text-white" : "text-ink",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-[90vw] mp:w-[calc(100vw-2*var(--gutter-m))] flex-nowrap items-center justify-between gap-6 mp:gap-4">
        <Link href="/" className="min-w-0 hover:text-current" aria-label="HomeNative interiors — home">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-[clamp(16px,2.4vw,34px)] text-[13px] uppercase tracking-[.08em]">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                // Links collapse into the side panel below 1100px (and always on mobile portrait).
                className={cn("transition-colors duration-300 max-[1100px]:hidden", active && "border-b border-current pb-1")}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="side-panel"
            className="flex h-[30px] w-[52px] shrink-0 cursor-pointer flex-col justify-center gap-[9px] border-0 bg-transparent p-0 text-current"
          >
            <span className="block h-px w-[52px] bg-current" />
            <span className="block h-px w-[52px] bg-current" />
          </button>
        </nav>
      </div>
    </header>
  );
}
