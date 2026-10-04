"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Wordmark } from "./Wordmark";

function copyright(sep: string) {
  return `© ${new Date().getFullYear()} ${site.fullName}${site.parent ? sep + site.parent : ""}`;
}

/** Home uses the dark, multi-column footer; every other page uses the light strip. */
export function Footer() {
  const pathname = usePathname();
  return pathname === "/" ? <DarkFooter /> : <LightFooter />;
}

function LightFooter() {
  return (
    <footer className="px-[clamp(20px,5vw,80px)] mp:px-[var(--gutter-m)] pb-12 pt-10">
      <div data-m-center className="flex flex-wrap items-center justify-between gap-5 text-[15px] uppercase tracking-[.06em] text-muted-1b">
        <div data-reveal>
          <SocialLinks variant="icons" className="items-center gap-7 text-ink" />
        </div>
        <span>{copyright(" · ")}</span>
      </div>
    </footer>
  );
}

function DarkFooter() {
  const col = "flex flex-col gap-3.5 text-[16px]";
  const head = "mb-1.5 text-[13px] uppercase tracking-[.16em] text-white";
  return (
    <footer className="bg-brand text-[#D9C7B4]">
      <div className="wrap-wide pb-10 pt-[clamp(64px,7vw,100px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-12 border-b border-white/10 pb-16">
          <div data-m-span data-m-center className="col-span-2 min-w-0">
            <Link href="/" className="mb-5 inline-flex text-white hover:text-white" aria-label={`${site.fullName} — home`}>
              <Wordmark size="footer" />
            </Link>
            <p className="m-0 max-w-[380px] text-[17px] font-light leading-[1.6]">
              {site.blurb}
              {site.parent && ` ${site.parent}.`}
            </p>
          </div>
          <div data-m-center className={col}>
            <div className={head}>Studio</div>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/news">News</Link>
          </div>
          <div data-m-center className={col}>
            <div className={head}>Contact</div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phones.map((p) => (
              <a key={p.href} href={p.href}>{p.display}</a>
            ))}
            <span>{site.hours[0]}</span>
          </div>
        </div>
        <div data-m-center className="flex flex-wrap justify-between gap-5 pt-8 text-[14px]">
          <span>{copyright(" — ")}</span>
          <SocialLinks variant="text" className="gap-6" />
        </div>
      </div>
    </footer>
  );
}
