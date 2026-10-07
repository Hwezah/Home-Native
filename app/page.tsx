import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Eye, Gem, Layers, PenTool, Sparkle } from "lucide-react";

import { pexels, site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { posts } from "@/content/posts";
import { faqs } from "@/content/faqs";
import { marquee, reasons, serviceCards } from "@/content/services";
import { Img, ParallaxImg } from "@/components/ui/Img";
import { PillButton } from "@/components/ui/PillButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { SectionHead } from "@/components/sections/SectionHead";
import { ReelCard } from "@/components/sections/ReelCard";
import { ProjectSlider } from "@/components/sections/ProjectSlider";
import { TestimonialSplit } from "@/components/sections/TestimonialSplit";

export const metadata: Metadata = {
  title: { absolute: `${site.fullName} — Interior Solutions` },
  description: `Rooms shaped around how you live. Calm, considered interiors made to last — an interior design studio in ${site.location}.`,
};

const reasonIcons = { gem: Gem, eye: Eye, pen: PenTool, layers: Layers } as const;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-hero className="relative h-[min(92vh,900px)] min-h-[560px] overflow-hidden bg-[var(--brand)] text-white">
        <ParallaxImg src={pexels(1571460)} alt="Bright open-plan living room with a floating oak staircase" speed={0.35} priority className="hero-zoom" />
        <div className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--brand)_35%,transparent)]" />
        <div className="hero-line pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/30" />
        <div data-m-center className="wrap-wide pointer-events-none relative flex h-full flex-col justify-center">
          <div className="hero-fade mb-3.5 text-[13px] uppercase tracking-[.16em]" style={{ animationDelay: "300ms" }}>
            {site.name}&apos;s Best
          </div>
          <HeroTitle className="m-0 mb-7 font-serif text-[clamp(52px,8.4vw,128px)] leading-none tracking-[-.02em]" parts={["Interior Solutions"]} />
          <p className="hero-fade m-0 mb-9 max-w-[620px] text-[18px] font-light" style={{ animationDelay: "1000ms" }}>
            Rooms shaped around how you live. Calm, considered interiors made to last.
          </p>
          {/* Mobile portrait: both CTAs stack, centred, 80vw; "or" is dropped. */}
          <div data-m-stack data-m-center className="hero-fade pointer-events-auto flex flex-wrap items-center gap-7" style={{ animationDelay: "1150ms" }}>
            <PillButton href="/contact" variant="light" size="hero" icon="before">
              Get Started Now
            </PillButton>
            <span data-m-hide className="italic opacity-60">
              or
            </span>
            <Link
              href="/services"
              data-m-btn
              className="inline-flex items-center justify-center border-b border-white/60 pb-1.5 text-[14px] uppercase tracking-[.16em] text-white transition-colors duration-[350ms] hover:text-white mp:rounded-full mp:border mp:px-10 mp:py-[22px] mp:hover:bg-paper mp:hover:text-ink"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div aria-hidden="true" data-m-hide className="pointer-events-none absolute bottom-[clamp(32px,6vh,64px)] right-[clamp(20px,5vw,80px)] h-[140px] w-[140px]">
          <svg viewBox="0 0 140 140" width="140" height="140" className="spin absolute inset-0">
            <defs>
              <path id="hnCircle" d="M70,70 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
            </defs>
            <text fill="#fff" className="font-sans" style={{ fontWeight: 300, fontSize: 12.5, letterSpacing: 4.2, textTransform: "uppercase" }}>
              <textPath href="#hnCircle">Scroll to explore • {site.name} • </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <ArrowDown size={28} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div aria-hidden="true" className="marquee overflow-hidden border-b border-line bg-paper py-[clamp(28px,3vw,44px)]">
        <div className="marquee-track flex w-max gap-[clamp(28px,4vw,64px)] whitespace-nowrap font-serif text-[clamp(36px,5vw,76px)] leading-none">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-[clamp(28px,4vw,64px)]">
              {m}
              <span className="flex text-brand-mid">
                <Sparkle size={30} strokeWidth={1} />
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section className="wrap-wide relative overflow-hidden pb-[clamp(60px,8vw,120px)] pt-[clamp(80px,9vw,130px)]">
        <div aria-hidden="true" className="outline-word absolute -right-[1vw] top-5 text-[clamp(160px,26vw,420px)] font-light">
          {site.outlineWord}
        </div>
        <div data-m-center className="relative flex flex-col gap-7">
          <div className="text-[14px] uppercase">— About Us</div>
          <p className="relative m-0 max-w-[1320px] font-serif text-[clamp(32px,4.4vw,66px)] leading-[1.18] tracking-[-.02em] text-pretty">
            We are an interior design studio in Kenya — we create, update and renovate. Experienced in{" "}
            <Link href="/portfolio" className="hl-brand">
              residential and commercial projects
            </Link>
             — from TV walls and gypsum ceilings to carpets and wardrobes.
          </p>
        </div>
        <ReelCard image={pexels(1918291)} />
      </section>

      {/* ── Services ── */}
      <section className="wrap-wide pb-[clamp(80px,9vw,130px)] pt-[clamp(40px,6vw,80px)]">
        <SectionHead
          eyebrow="Our Services"
          className="mb-[clamp(48px,6vw,96px)]"
          action={<PillButton href="/services">All Services</PillButton>}
        >
          <h2 className="t-h2">
            Design <span className="hl-brand">Solutions</span>
          </h2>
        </SectionHead>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(20px,2.6vw,40px)]">
          {serviceCards.map((s) => (
            <Link
              key={s.title}
              href="/services"
              data-reveal
              className="zoom-host group relative block h-[clamp(440px,38vw,580px)] overflow-hidden rounded-[14px] bg-[var(--brand)] text-white transition-[transform,box-shadow] duration-500 ease-hn hover:-translate-y-2 hover:text-white hover:shadow-[0_24px_50px_rgba(0,0,0,.18)]"
            >
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-hn group-hover:scale-[1.08]">
                <Img src={s.src} alt="" sizes="(max-width: 700px) 100vw, 33vw" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/[.18]" />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-[clamp(32px,3.4vw,52px)]">
                <div className="pt-[60px]">
                  <h3 className="m-0 mb-[26px] text-[clamp(30px,2.8vw,44px)] font-light leading-[1.15]">{s.title}</h3>
                  <p data-no-reveal className="m-0 text-[18px] font-light leading-[1.45]">{s.body}</p>
                </div>
                <div className="flex items-center gap-5 pb-[60px] text-[13px] uppercase tracking-[.2em] mp:justify-center">
                  See Details
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/60">
                    <ArrowRight size={18} strokeWidth={1.25} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="bg-brand text-white">
        <div className="wrap-wide py-[clamp(80px,9vw,130px)]">
          <SectionHead
            eyebrow="Why Choose Us?"
            eyebrowClassName="text-[var(--on-brand-muted)] border-white/[.12]"
            className="mb-[clamp(56px,7vw,100px)]"
            action={
              <PillButton href="/about" variant="outline-light">
                Learn More
              </PillButton>
            }
          >
            <h2 className="t-h2 mb-[30px]">
              Tailored <span className="hl-yellow">for You</span>
            </h2>
            <p className="m-0 text-[19px] font-light leading-[1.55] text-[var(--on-brand)]">
              Concept design builds the framework that guides every decision that follows.
            </p>
          </SectionHead>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {reasons.map((r) => {
              const Icon = reasonIcons[r.icon];
              return (
                <div key={r.title} data-m-center className="flex flex-col items-start border-r border-white/[.12] px-[clamp(20px,2.4vw,36px)] pb-10 pt-7 mp:border-r-0 mp:px-0 mp:pb-14">
                  <div className="mb-[34px] flex h-[134px] w-[134px] items-center justify-center rounded-3xl bg-[var(--brand-raised)] text-white transition-[background,transform,color] duration-[400ms] hover:-rotate-6 hover:bg-yellow hover:text-ink">
                    <Icon size={52} strokeWidth={1} />
                  </div>
                  <h3 className="m-0 mb-[18px] text-[30px] font-normal leading-[1.1]">{r.title}</h3>
                  <p className="m-0 mb-[22px] text-[19px] font-light leading-[1.45] text-[var(--on-brand-muted)]">{r.body}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 border-b border-white pb-1 text-[15px] uppercase tracking-[.16em] text-white hover:text-yellow"
                  >
                    See Details
                    <ArrowRight size={16} strokeWidth={1.25} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialSplit />

      {/* ── Projects ── */}
      <section aria-label="Featured work" className="overflow-hidden py-[clamp(80px,9vw,130px)]">
        <ProjectSlider
          projects={featuredProjects}
          head={
            <div className="max-w-[860px] flex-[1_1_520px]">
              <Eyebrow>Recent Projects</Eyebrow>
              <h2 className="t-h2">
                Featured <span className="hl-brand">Work</span>
              </h2>
            </div>
          }
        />
        <div className="flex justify-center">
          <PillButton href="/portfolio">All Projects</PillButton>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface-warm-2">
        <div className="wrap-wide grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-start gap-[clamp(40px,6vw,100px)] py-[clamp(80px,9vw,130px)]">
          <div data-reveal className="relative h-[clamp(420px,46vw,680px)] overflow-hidden rounded-3xl bg-img-bg">
            <ParallaxImg src={pexels(1571467)} alt="Calm living room with a grey sofa and patterned rug" speed={0.15} extra={12} sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div data-m-center className="">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="t-h2 mb-12">
              Common <span className="hl-brand">Questions</span>
            </h2>
            <Accordion items={faqs} variant="circle" defaultOpen={-1} className="text-left" />
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="wrap-wide py-[clamp(80px,9vw,130px)]">
        <SectionHead eyebrow="Latest News" className="mb-[clamp(48px,6vw,80px)]" action={<PillButton href="/news">All News</PillButton>}>
          <h2 className="t-h2">
            From the <span className="hl-brand">Journal</span>
          </h2>
        </SectionHead>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(24px,2.6vw,40px)]">
          {posts.slice(0, 3).map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}`} data-m-center className="zoom-host group flex flex-col gap-[22px] hover:text-ink">
              <div data-reveal className="relative h-[340px] overflow-hidden rounded-[14px] bg-img-bg">
                <div className="zoom group-hover:scale-[1.07]">
                  <Img src={n.image} alt="" sizes="(max-width: 1000px) 100vw, 33vw" />
                </div>
              </div>
              <div className="flex gap-3.5 text-[13px] uppercase tracking-[.14em] text-muted-2">
                <span>{n.date}</span>
                <span>·</span>
                <span className="text-brand-mid">{n.category}</span>
              </div>
              <h3 className="m-0 font-serif text-[30px] leading-[1.15] transition-colors group-hover:text-brand-mid">{n.title}</h3>
              <span className="inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-[13px] uppercase tracking-[.2em]">
                Read More <ArrowRight size={14} strokeWidth={1.25} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[var(--brand)] text-white">
        <ParallaxImg src={pexels(1457842)} alt="" speed={0.35} extra={20} />
        <div className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--brand)_45%,transparent)]" />
        <div className="wrap-wide pointer-events-none relative w-full text-center">
          <div className="mb-[18px] text-[13px] uppercase tracking-[.16em]">Let&apos;s Work Together</div>
          <h2 className="m-0 mb-10 font-serif text-[clamp(48px,7vw,110px)] leading-none tracking-[-.02em]">Ready to feel at home?</h2>
          <PillButton href="/contact" variant="light" size="hero" icon="before" className="pointer-events-auto">
            Book a Consultation
          </PillButton>
        </div>
      </section>
    </>
  );
}

