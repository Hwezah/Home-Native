import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { pexels, site } from "@/content/site";
import { accordionA, accordionB, serviceColumns } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { ParallaxImg, ZoomImg } from "@/components/ui/Img";
import { PillButton } from "@/components/ui/PillButton";
import { TestimonialCentered } from "@/components/ui/TestimonialSlider";

export const metadata: Metadata = {
  title: "Services",
  description: "Space planning, colour, lighting, joinery, materials and full renovations — interiors shaped around how you live.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our"
        highlight="Services."
        caption="Spaces shaped around how you live."
        image={pexels(1457842)}
        alt="Living room with a sea view and grey sofa"
      />

      {/* ── Intro ── */}
      <section className="wrap pb-[clamp(60px,7vw,100px)] pt-[clamp(80px,10vw,150px)]">
        <div className="m-center flex flex-col">
          <Eyebrow>Services</Eyebrow>
          <h2 className="t-h2 max-w-[900px]">
            Transforming <span className="hl-green">Spaces</span> Into Homes That Fit
          </h2>
          <p className="mt-9 max-w-[620px] text-[19px] leading-[1.7] text-muted-1b">
            From a single room to a full renovation, we handle every step — planning, sourcing, building and styling — so the result feels calm,
            considered and entirely yours.
          </p>
        </div>
      </section>

      {/* ── Service columns ── */}
      <section className="wrap pb-[clamp(90px,10vw,160px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(48px,5vw,80px)]">
          {serviceColumns.map((c) => (
            <div key={c.tag} className="flex flex-col">
              <div className="m-center flex flex-col items-start">
                <span className="inline-block px-5 py-2.5 text-[14px] uppercase tracking-[.14em]" style={{ background: c.tint }}>
                  {c.tag}
                </span>
                <h3 className="mt-8 w-full border-b border-line pb-7 text-[clamp(26px,2.2vw,34px)] font-light leading-[1.25]">{c.title}</h3>
                <p className="mt-7 max-w-[340px] text-[18px] leading-[1.7] text-[#666]">{c.body}</p>
              </div>
              {/* Lists stay left-aligned on mobile. */}
              <ul className="mt-9 flex list-none flex-col gap-3 p-0 text-[19px] font-normal">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-3">
                    <Plus size={18} strokeWidth={1.25} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Accordion A (image right) ── */}
      <section className="wrap pb-[clamp(90px,10vw,160px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,90px)]">
          <Accordion items={accordionA} />
          <ZoomImg src={pexels(1571463)} alt="Dining room with a globe chandelier" frameClassName="aspect-square bg-[#D8CFBF]" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>

      {/* ── Accordion B (image left) ── */}
      <section className="wrap pb-[clamp(90px,10vw,160px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,90px)]">
          <ZoomImg src={pexels(1643383)} alt="Open living room with a glass coffee table" frameClassName="aspect-square bg-[#D8CFBF]" sizes="(max-width: 960px) 100vw, 50vw" />
          <Accordion items={accordionB} />
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section aria-label="Testimonials" className="wrap pb-[clamp(90px,10vw,160px)]">
        <TestimonialCentered items={testimonials} />
      </section>

      {/* ── Contact band ── */}
      <section className="relative overflow-hidden bg-[#5A4433] text-paper">
        <ParallaxImg src={pexels(1350789)} alt="" speed={0.25} />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(30,22,15,.45)]" />
        <div className="wrap pointer-events-none relative flex flex-col items-center py-[clamp(90px,11vw,170px)] text-center">
          <div className="mb-9 border-b border-white/25 pb-3.5 text-[14px] uppercase">— Collaboration</div>
          <h2 className="m-0 font-serif text-[clamp(56px,8vw,130px)] leading-[1.02] tracking-[-.03em] text-paper">
            Get in <span className="hl-yellow">touch</span>
            <br />
            with us.
          </h2>
          <p className="mt-8 text-[16px] uppercase tracking-[.06em] text-paper">Ask us anything — we reply within one working day.</p>
          <a
            href={site.phoneHref}
            className="pointer-events-auto mt-11 font-num text-[clamp(64px,10vw,160px)] font-extralight leading-none tracking-[.01em] text-paper hover:text-yellow"
          >
            {site.phone}
          </a>
          <div className="mt-14 grid w-full max-w-[860px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8">
            <div className="m-center text-left">
              <div className="label-caps mb-2.5">— Email</div>
              <a href={`mailto:${site.email}`} className="pointer-events-auto text-[19px] text-paper hover:text-yellow">
                {site.email}
              </a>
            </div>
            <div className="m-center text-right">
              <div className="label-caps mb-2.5">— Hours</div>
              <div className="text-[19px] leading-[1.6]">
                {site.hours[0]}
                <br />
                {site.hours[1]}
              </div>
            </div>
          </div>
          <div className="pointer-events-auto mt-14 flex w-full justify-center">
            <PillButton href="/contact" variant="light-solid" size="band">
              Request a Quote
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
