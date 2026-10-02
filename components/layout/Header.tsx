"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { useMenu } from "@/context/MenuContext";
import { useHideOnScroll } from "@/lib/useHideOnScroll";
import { cn } from "@/lib/utils";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const { menuOpen, openMenu } = useMenu();
  const hidden = useHideOnScroll(160, menuOpen);

  return (
    <header
      className="sticky top-0 z-30 bg-paper shadow-[0_2px_18px_rgba(0,0,0,.05)] transition-transform duration-500 ease-hn"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="mx-auto flex w-[90vw] flex-wrap items-center justify-between gap-6 py-[22px] mp:flex-nowrap mp:gap-4 mp:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3.5 hover:text-ink mp:gap-2.5" aria-label="Home Native interiors — home">
          <span className="whitespace-nowrap font-serif text-[30px] tracking-[-.02em] mp:text-[26px]">Home Native</span>
          <span className="h-px w-[60px] shrink-0 bg-ink mp:w-7" aria-hidden="true" />
          <span className="text-[17px] font-light mp:text-[15px]">interiors</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-[clamp(16px,2.4vw,34px)] text-[13px] uppercase tracking-[.08em]">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("transition-colors duration-300 mp:hidden", active && "border-b border-ink pb-1")}
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
            className="flex h-[30px] w-[52px] shrink-0 cursor-pointer flex-col justify-center gap-[9px] border-0 bg-transparent p-0"
          >
            <span className="block h-px w-[52px] bg-ink" />
            <span className="block h-px w-[52px] bg-ink" />
          </button>
        </nav>
      </div>
    </header>
  );
}
