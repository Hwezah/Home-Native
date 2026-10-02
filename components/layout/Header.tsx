"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { useMenu } from "@/context/MenuContext";
import { useHideOnScroll } from "@/lib/useHideOnScroll";
import { useScrolled } from "@/lib/useScrolled";
import { cn } from "@/lib/utils";

/** Pages whose first section is a full-bleed image hero that sits under the header. */
const HERO_PAGES = ["/", "/about", "/services", "/contact"];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

/**
 * Fixed header. Transparent at the top of the page (white text over image heroes); once the page
 * scrolls it turns into frosted glass. Hides on scroll down, shows on scroll up.
 */
export function Header() {
  const pathname = usePathname();
  const { menuOpen, openMenu } = useMenu();
  const hidden = useHideOnScroll(160, menuOpen);
  const scrolled = useScrolled();
  const overHero = !scrolled && HERO_PAGES.includes(pathname);

  return (
    <header
      data-glass={scrolled || undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b transition-[transform,background-color,box-shadow,border-color,color,backdrop-filter] duration-500 ease-hn",
        scrolled
          ? "border-line/60 bg-paper/65 shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
        overHero ? "text-white" : "text-ink",
      )}
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-[90vw] flex-nowrap items-center justify-between gap-6 mp:gap-4">
        {/* Wordmark: "Home Native" with INTERIORS spread underneath to exactly the same width. */}
        <Link href="/" className="inline-flex min-w-0 flex-col hover:text-current" aria-label="Home Native interiors — home">
          <span className="whitespace-nowrap font-serif text-[30px] leading-none tracking-[-.02em] mp:text-[26px]">Home Native</span>
          <span aria-hidden="true" className="-mt-0.5 flex justify-between text-[11px] font-light leading-none mp:-mt-px mp:text-[10px]">
            {"INTERIORS".split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </span>
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
