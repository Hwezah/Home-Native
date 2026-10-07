import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { pexels, site } from "@/content/site";
import { stats, team } from "@/content/team";
import { commitments } from "@/content/commitments";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialSplit } from "@/components/sections/TestimonialSplit";
import { GetStarted } from "@/components/layout/GetStarted";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Img, ParallaxImg } from "@/components/ui/Img";
import { PillButton } from "@/components/ui/PillButton";
import { Counter } from "@/components/effects/Counter";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${site.name} — an interior design studio in ${site.city} creating calm, functional and lasting spaces.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About"
        highlight="Us."
        caption="Get to know more about us."
        image={pexels(1571453)}
        alt="Kitchen and dining room with houndstooth chairs"
      />

      {/* ── Lead + Mission / Vision ── */}
      <section className="relative overflow-hidden pb-[clamp(60px,8vw,110px)] pt-[clamp(80px,10vw,150px)]">
        <div
          aria-hidden="true"
          className="outline-word absolute left-1/2 top-[30px] -translate-x-[42%] text-[clamp(180px,30vw,460px)] font-extralight"
        >
          {site.outlineWord}
        </div>
        <div data-m-center className="wrap relative flex flex-col gap-8">
          <div className="text-[14px] uppercase">— About Us</div>
          <p className="t-lead">
            We design luxurious interiors and supply the décor to complete them. Experienced in{" "}
            <Link href="/portfolio" className="hl-brand">
              residential and commercial projects
            </Link>
            , we transform houses, style rooms and deliver statement pieces across Uganda.
          </p>
        </div>
        <div className="wrap relative mt-[clamp(80px,10vw,150px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(40px,6vw,90px)]">
          <div data-m-center className="flex flex-col gap-[26px]">
            <h3 className="m-0 text-[19px] font-normal uppercase tracking-[.2em]">Mission</h3>
            <p className="m-0 text-[18px] font-light leading-[1.7] text-muted-1">
              At <strong className="font-medium text-ink">{site.name}</strong>, our mission is to design spaces that blend beauty, comfort and function. We
              create interiors that reflect the people in them, make everyday living easier and leave a lasting impression — through thoughtful design,
              sustainable choices and close attention to detail.
            </p>
          </div>
          <div data-m-center className="flex flex-col gap-[26px]">
            <h3 className="m-0 text-[19px] font-normal uppercase tracking-[.2em]">Vision</h3>
            <p className="m-0 text-[18px] font-light leading-[1.7] text-muted-1">
              At <strong className="font-medium text-ink">{site.name}</strong>, our vision is to be a trusted name in inspiring, livable spaces. We aim to raise
              the standard of interior design by embracing innovation, sustainability and craftsmanship — turning every project into a timeless place that
              fits its owner&apos;s life.
            </p>
            <div className="mt-[18px] self-end border-b border-ink pb-1 font-serif text-[34px] italic">{site.name}</div>
          </div>
        </div>
      </section>

      {/* ── Banner ── */}
      <section aria-label="Studio detail" className="relative h-[clamp(320px,40vw,620px)] overflow-hidden bg-img-bg">
        <ParallaxImg src={pexels(1350789)} alt="Two armchairs upholstered in bold African wax-print fabric" speed={0.3} extra={20} />
      </section>

      {/* ── Commitment ── */}
      <section className="wrap pt-[clamp(80px,9vw,140px)]">
        <div data-m-center className="mb-[clamp(48px,6vw,90px)]">
          <Eyebrow>Our Commitment</Eyebrow>
          <h2 className="t-h2">
            Our commitment <span className="hl-brand">to quality</span>
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[clamp(32px,4vw,64px)]">
          {commitments.map((c) => (
            <div key={c.title} className="border-t border-line py-[clamp(36px,4vw,48px)]">
              <div data-m-center>
                <h3 className="m-0 text-[clamp(24px,2vw,30px)] font-light leading-[1.2]">{c.title}</h3>
                <p className="mt-5 text-[18px] leading-[1.6] text-muted-1b">{c.body}</p>
              </div>
              {/* Lists stay left-aligned on mobile. */}
              <ul className="mt-7 flex list-none flex-col gap-3.5 p-0 text-[18px] text-muted-1">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-4">
                    <span aria-hidden="true" className="text-brand-mid">
                      —
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="wrap py-[clamp(80px,9vw,140px)]">
        <div data-m-center className="border-b border-line pb-7 text-[15px] uppercase">/ Numbers of Success</div>
        {stats.map((st) => (
          <div
            key={st.title}
            data-m-stack data-m-center className="group grid grid-cols-[auto_minmax(0,1.2fr)_minmax(0,1.6fr)_auto] items-center gap-[clamp(16px,3vw,48px)] border-b border-line py-8 transition-colors hover:bg-surface-warm"
          >
            <div
              className="flex h-[clamp(84px,9vw,124px)] w-[clamp(84px,9vw,124px)] items-center justify-center rounded-full text-[#111] transition-transform duration-500 group-hover:rotate-45"
              style={{ background: st.bg }}
            >
              <ArrowUpRight size={40} strokeWidth={1} />
            </div>
            <h3 className="m-0 text-[clamp(24px,2.6vw,40px)] font-light leading-[1.1]">{st.title}</h3>
            <p className="m-0 text-[18px] font-light text-muted-1b">{st.body}</p>
            <Counter
              to={st.n}
              suffix={st.suffix}
              className="min-w-[2.4em] text-right font-num mp:min-w-0 mp:text-center text-[clamp(56px,6.4vw,96px)] font-extralight leading-none"
            />
          </div>
        ))}
      </section>

      {/* ── Team ── */}
      <section className="wrap pb-[clamp(80px,9vw,140px)]">
        <div data-m-center className="mb-[clamp(56px,7vw,110px)] flex flex-wrap items-end justify-between gap-7">
          <div className="max-w-[640px] flex-[1_1_420px]">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(56px,7vw,110px)] leading-none tracking-[-.02em]">
              Meet The <span className="hl-brand">Team</span>
            </h2>
          </div>
          <PillButton href="/contact">Learn More</PillButton>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] items-start gap-[clamp(24px,5vw,90px)]">
          {team.map((m) => (
            <div key={m.name} data-m-center className={`flex flex-col gap-[18px] ${m.offset ? "min-[880px]:mt-[120px]" : ""}`}>
              <div data-reveal className="group relative aspect-square overflow-hidden bg-img-bg">
                <div className="zoom grayscale-[.35] transition-[transform,filter] duration-[1200ms] group-hover:scale-[1.06] group-hover:grayscale-0">
                  <Img src={m.src} alt={`${m.name}, ${m.role}`} sizes="(max-width: 880px) 100vw, 33vw" />
                </div>
              </div>
              <div>
                <div className="text-[22px] font-light">{m.name}</div>
                <div className="mt-1.5 text-[14px] uppercase tracking-[.14em] text-muted-2">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSplit />
      <GetStarted />
    </>
  );
}
