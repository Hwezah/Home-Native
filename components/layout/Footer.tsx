"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { Facebook, Instagram, Linkedin } from "@/components/ui/social-icons";

/** Home uses the dark, multi-column footer; every other page uses the light strip. */
export function Footer() {
  const pathname = usePathname();
  return pathname === "/" ? <DarkFooter /> : <LightFooter />;
}

function LightFooter() {
  return (
    <footer className="px-[clamp(20px,5vw,80px)] pb-12 pt-10">
      <div data-m-center className="flex flex-wrap items-center justify-between gap-5 text-[15px] uppercase tracking-[.06em] text-muted-1b">
        <div data-reveal className="flex items-center gap-7 text-ink">
          <a href={site.socials.instagram} aria-label="Instagram"><Instagram /></a>
          <a href={site.socials.facebook} aria-label="Facebook"><Facebook /></a>
          <a href={site.socials.linkedin} aria-label="LinkedIn"><Linkedin /></a>
        </div>
        <span>© 2026 — Home Native Interiors · a MachineNative company</span>
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
            <div className="mb-5 font-serif text-[34px] text-white">Home Native</div>
            <p className="m-0 max-w-[380px] text-[17px] font-light leading-[1.6]">
              Interior design studio creating calm, functional and lasting spaces. A MachineNative company.
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
            <a href={site.phoneHref}>{site.phone}</a>
            <span>Mon–Fri, 9am–5pm</span>
          </div>
        </div>
        <div data-m-center className="flex flex-wrap justify-between gap-5 pt-8 text-[14px]">
          <span>© 2026 Home Native Interiors — a MachineNative company</span>
          <div className="flex gap-6">
            <a href={site.socials.instagram}>Instagram</a>
            <a href={site.socials.pinterest}>Pinterest</a>
            <a href={site.socials.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
