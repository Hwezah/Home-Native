"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { nav, homeLabel, site } from "@/content/site";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/MenuContext";
import { cn } from "@/lib/utils";
import { isActive } from "./Header";
import { Wordmark } from "./Wordmark";
import { SocialLinks } from "@/components/ui/SocialLinks";

/** Right-hand 35% panel. Text is never centred, mobile included. */
export function SidePanel() {
  const { menuOpen, closeMenu } = useMenu();
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuOpen) closeRef.current?.focus();
  }, [menuOpen]);

  return (
    <>
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-[rgba(17,17,17,.4)] transition-opacity duration-500"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
      />
      <aside
        id="side-panel"
        aria-label="Menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className="fixed inset-y-0 right-0 z-50 flex w-[35%] min-w-[min(100%,360px)] flex-col overflow-y-auto bg-paper p-[clamp(32px,3.6vw,56px)] text-left transition-transform duration-[600ms] ease-[cubic-bezier(.7,0,.2,1)]"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(105%)" }}
      >
        <div className="mb-[clamp(48px,7vh,90px)] flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="hover:text-current" aria-label={homeLabel}>
            <Wordmark size="panel" />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="relative h-10 w-10 cursor-pointer border-0 bg-transparent p-0"
          >
            <span className="absolute left-0 top-1/2 h-px w-10 rotate-45 bg-ink" />
            <span className="absolute left-0 top-1/2 h-px w-10 -rotate-45 bg-ink" />
          </button>
        </div>
        <nav aria-label="Menu" className="flex flex-col gap-1.5 text-[clamp(32px,2.6vw,44px)] font-light leading-[1.3]">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "transition-[padding,color] duration-[400ms] hover:pl-[18px] hover:text-brand-mid",
                  active && "text-brand-mid",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-2.5 border-t border-line pt-12 text-[17px] font-light text-muted-1b">
          <div className="mb-1.5 text-[13px] uppercase tracking-[.16em] text-ink">Get in touch</div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.phones.map((p) => (
            <a key={p.href} href={p.href}>{p.display}</a>
          ))}
          <SocialLinks variant="text" className="mt-3.5 flex-wrap gap-x-[22px] gap-y-2 text-[14px] uppercase tracking-[.1em]" linkClassName="text-ink" />
        </div>
      </aside>
    </>
  );
}
