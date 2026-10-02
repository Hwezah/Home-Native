"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Img } from "@/components/ui/Img";
import { PillButton } from "@/components/ui/PillButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const CLONES = 3; // max cards in view; cloned onto the end for a seamless loop
const SLIDE_MS = 1000; // glide time, as in the Velin reference
const HOLD_MS = 3500; // pause between glides
const EASE = `transform ${SLIDE_MS}ms cubic-bezier(.22,.61,.36,1)`; // ease-out: quick start, soft landing

/**
 * Velin-style "Latest Projects" carousel: dark intro panel + a looping row of tall project
 * columns that glides one column left every few seconds. The outgoing column slides under the
 * intro panel; the new first column brightens as it settles, the rest stay tinted brown.
 * 3 columns on desktop, 2 on tablet, 1 on mobile portrait. Horizontal swipes / Prev / Next move it.
 * Auto-play pauses only while a mouse hovers it (never stuck by touch scrolls) or the tab is hidden.
 */
export function ProjectStrip({ projects }: { projects: Project[] }) {
  const n = projects.length;
  const items = [...projects, ...projects.slice(0, CLONES)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const indexRef = useRef(0);
  const hover = useRef(false);
  const busy = useRef(false);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const go = (i: number, withAnim = true) => {
    indexRef.current = i;
    setAnimate(withAnim);
    setIndex(i);
  };
  // Run after the browser has painted a no-animation jump, so the next move animates.
  const afterPaint = (fn: () => void) => requestAnimationFrame(() => requestAnimationFrame(fn));

  const next = () => {
    if (busy.current) return;
    busy.current = true;
    if (indexRef.current >= n) {
      // Sitting on the clone of item 0: jump to the real item 0, then glide on.
      go(0, false);
      afterPaint(() => go(1));
    } else go(indexRef.current + 1);
  };
  const prev = () => {
    if (busy.current) return;
    busy.current = true;
    if (indexRef.current <= 0) {
      go(n, false);
      afterPaint(() => go(n - 1));
    } else go(indexRef.current - 1);
  };

  // Only the track's own transform transition counts (child tint/zoom transitions bubble up too).
  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    busy.current = false;
    if (indexRef.current === n) go(0, false); // landed on the clone → swap to the real one invisibly
  };

  // Safety net: never stay "busy" if a transitionend is missed (e.g. tab hidden mid-glide).
  useEffect(() => {
    if (!busy.current) return;
    const t = setTimeout(() => (busy.current = false), SLIDE_MS + 200);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!hover.current && !document.hidden) next();
    }, HOLD_MS + SLIDE_MS);
    return () => clearInterval(id);
    // next() reads refs only, so a single interval is enough
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const active = index % n;

  return (
    <section aria-label="Latest projects" className="grid bg-brand text-paper min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
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
        onPointerEnter={(e) => e.pointerType === "mouse" && (hover.current = true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && (hover.current = false)}
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, y: e.clientY };
          swiped.current = false;
        }}
        onPointerCancel={() => (drag.current = null)}
        onPointerUp={(e) => {
          const d = drag.current;
          drag.current = null;
          if (!d) return;
          const dx = e.clientX - d.x;
          // Horizontal swipes only — a mostly-vertical drag is a scroll.
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(e.clientY - d.y)) {
            swiped.current = true;
            (dx < 0 ? next : prev)();
          }
        }}
        // A swipe must not also open the project it ended on.
        onClickCapture={(e) => {
          if (swiped.current) {
            e.preventDefault();
            swiped.current = false;
          }
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
                    "pointer-events-none absolute inset-0 transition-[background-color] duration-1000",
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
