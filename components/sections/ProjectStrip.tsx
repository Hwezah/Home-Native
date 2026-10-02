"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Img } from "@/components/ui/Img";
import { PillButton } from "@/components/ui/PillButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const CLONES = 3; // max cards in view; cloned onto the end for a seamless loop
const EASE = "transform .9s cubic-bezier(.2,.7,.2,1)";

/**
 * Velin-style "Latest Projects" band: dark intro panel + auto-advancing strip of
 * tall project columns. The first visible column is lit, the rest tinted brown.
 * 3 columns on desktop, 2 on tablet, 1 on mobile portrait. Swipe > 50px moves.
 */
export function ProjectStrip({ projects }: { projects: Project[] }) {
  const n = projects.length;
  const items = [...projects, ...projects.slice(0, CLONES)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const hover = useRef(false);
  const dragX = useRef<number | null>(null);

  const next = () => {
    setAnimate(true);
    setIndex((i) => Math.min(i + 1, n));
  };
  const prev = () => {
    if (index === 0) {
      // Jump to the cloned copy of item 0 without animating, then step back.
      setAnimate(false);
      setIndex(n);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(n - 1);
        }),
      );
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  };

  // After sliding onto the clone of item 0, snap back to the real one.
  const onTransitionEnd = () => {
    if (index === n) {
      setAnimate(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!hover.current) {
        setAnimate(true);
        setIndex((i) => Math.min(i + 1, n));
      }
    }, 4500);
    return () => clearInterval(id);
  }, [n]);

  const active = index % n;

  return (
    <section aria-label="Latest projects" className="grid bg-[#2E1F12] text-paper min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      {/* Intro panel */}
      <div data-m-center className="flex flex-col justify-center px-[clamp(20px,4vw,72px)] py-[clamp(64px,8vw,110px)]">
        <Eyebrow dash={false} className="max-w-[440px] border-white/[.14] text-white/70">
          Latest Projects
        </Eyebrow>
        <h2 className="mb-10 max-w-[440px] font-serif text-[clamp(44px,4.2vw,64px)] leading-[1.08] tracking-[-.02em]">
          Every Project, <span className="hl-yellow">Designed</span> With Passion
        </h2>
        <PillButton href="/portfolio" variant="outline-light" className="self-start">
          All Projects
        </PillButton>
      </div>

      {/* Strip */}
      <div
        data-hn-drag
        className="relative h-[clamp(520px,48vw,690px)] cursor-grab touch-pan-y select-none overflow-hidden [--per:3] max-[1200px]:[--per:2] mp:h-[480px] mp:[--per:1]"
        onMouseEnter={() => (hover.current = true)}
        onMouseLeave={() => (hover.current = false)}
        onPointerDown={(e) => {
          dragX.current = e.clientX;
          hover.current = true;
        }}
        onPointerUp={(e) => {
          hover.current = false;
          if (dragX.current == null) return;
          const dx = e.clientX - dragX.current;
          dragX.current = null;
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        }}
      >
        <div
          className="flex h-full"
          style={{ transform: `translateX(calc(${-index} * 100% / var(--per)))`, transition: animate ? EASE : "none" }}
          onTransitionEnd={onTransitionEnd}
        >
          {items.map((p, i) => {
            const lit = i % n === active;
            const visible = i >= index && i < index + CLONES;
            return (
              <Link
                key={`${p.slug}-${i}`}
                href={`/portfolio/${p.slug}`}
                draggable={false}
                tabIndex={visible ? undefined : -1}
                aria-hidden={visible ? undefined : true}
                className="group relative h-full shrink-0 basis-[calc(100%/var(--per))] overflow-hidden text-paper hover:text-paper"
              >
                <div className="absolute inset-0 transition-transform duration-[1200ms] ease-hn group-hover:scale-[1.06]">
                  <Img src={p.cover} alt="" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 33vw, 22vw" />
                </div>
                {/* Brown tint on the columns that are not lit */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 transition-[background-color] duration-700",
                    lit ? "bg-[rgba(46,31,18,.12)] group-hover:bg-[rgba(46,31,18,.05)]" : "bg-[rgba(46,31,18,.72)] group-hover:bg-[rgba(46,31,18,.45)]",
                  )}
                />
                <div className="pointer-events-none absolute inset-x-[clamp(24px,2.4vw,36px)] top-[44%] flex flex-col gap-6">
                  <span className="text-[clamp(26px,2.2vw,36px)] font-light leading-[1.15]">{p.title}</span>
                  <span className="text-[13px] uppercase tracking-[.1em] text-white/80">Read more</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* PREV / NEXT — spread apart on mobile portrait */}
        <div className="absolute inset-x-0 bottom-[clamp(28px,3.4vw,48px)] px-[clamp(24px,2.4vw,36px)]">
          <div data-m-row className="flex gap-6 text-[14px] uppercase tracking-[.08em]">
            <button type="button" onClick={prev} aria-label="Previous project" className="cursor-pointer border-0 bg-transparent p-0 text-paper transition-colors hover:text-yellow">
              Prev
            </button>
            <button type="button" onClick={next} aria-label="Next project" className="cursor-pointer border-0 bg-transparent p-0 text-paper transition-colors hover:text-yellow">
              Next
            </button>
          </div>
        </div>
        <span className="sr-only" aria-live="polite">
          {projects[active].title}
        </span>
      </div>
    </section>
  );
}
