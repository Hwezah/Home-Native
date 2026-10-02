"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { Img } from "@/components/ui/Img";

/**
 * Featured work: draggable, auto-advancing (5s) track. The active slide is taller (560 vs 440).
 * Swipe/drag > 50px moves one slide. Clicking a side slide makes it active; clicking the active one opens it.
 */
export function ProjectSlider({ projects, head }: { projects: Project[]; head: React.ReactNode }) {
  const n = projects.length;
  const [slide, setSlide] = useState(Math.min(2, n - 1));
  const hover = useRef(false);
  const dragX = useRef<number | null>(null);
  const dragY = useRef(0);
  const dragged = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!hover.current) setSlide((s) => (s + 1) % n);
    }, 5000);
    return () => clearInterval(id);
  }, [n]);

  const prev = () => setSlide((s) => (s + n - 1) % n);
  const next = () => setSlide((s) => (s + 1) % n);

  const onDown = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
    dragY.current = e.clientY;
    dragged.current = false;
    if (e.pointerType === "mouse") hover.current = true;
  };
  const onUp = (e: React.PointerEvent) => {
    hover.current = false;
    if (dragX.current == null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    // Horizontal swipes only — a mostly-vertical drag is a scroll.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(e.clientY - dragY.current)) {
      dragged.current = true;
      if (dx < 0) next();
      else prev();
    }
  };

  const count = `${String(slide + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

  return (
    <>
      <div data-m-center className="wrap-wide mb-[clamp(48px,6vw,80px)] flex flex-wrap items-end justify-between gap-7">
        {head}
        <div data-m-row className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-paper p-0 text-ink transition-colors duration-300 hover:bg-brand hover:text-white"
          >
            <ArrowLeft size={22} strokeWidth={1.25} />
          </button>
          <span className="min-w-[70px] text-center text-[15px] tracking-[.12em]" aria-live="polite">
            {count}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-0 bg-fill p-0 text-white transition-colors duration-300 hover:bg-brand-mid"
          >
            <ArrowRight size={22} strokeWidth={1.25} />
          </button>
        </div>
      </div>
      <div
        data-hn-drag
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onPointerCancel={() => {
          // Touch scroll started here: forget the drag and resume auto-play.
          hover.current = false;
          dragX.current = null;
        }}
        onPointerEnter={(e) => e.pointerType === "mouse" && (hover.current = true)}
        className="relative h-[640px] cursor-grab touch-pan-y select-none [--card:524px] max-[600px]:h-[520px] max-[600px]:[--card:80vw]"
      >
        <div
          className="absolute left-1/2 top-0 flex h-[560px] items-center gap-[30px] transition-transform duration-700 ease-hn max-[600px]:h-[460px]"
          style={{ transform: `translateX(calc(${-slide} * (var(--card) + 30px) - var(--card) / 2))` }}
        >
          {projects.map((p, i) => {
            const active = i === slide;
            return (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                draggable={false}
                onClick={(e) => {
                  if (dragged.current || !active) {
                    e.preventDefault();
                    if (!dragged.current) setSlide(i);
                  }
                }}
                aria-label={`${p.title} — ${p.category}`}
                className="zoom-host relative flex-[0_0_var(--card)] overflow-hidden rounded-[14px] bg-img-bg transition-[height,opacity] duration-700 ease-hn"
                style={{ height: active ? "100%" : "78.5%", opacity: active ? 1 : 0.55 }}
              >
                <div className="zoom absolute inset-0">
                  <Img src={p.cover} alt={p.title} sizes="(max-width: 600px) 80vw, 524px" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(transparent,rgba(0,0,0,.55))] p-8 text-white">
                  <div>
                    <div className="mb-2 text-[13px] uppercase tracking-[.16em]">{p.category}</div>
                    <div className="font-serif text-[34px] leading-none">{p.title}</div>
                  </div>
                  <div className="text-[15px]">{String(i + 1).padStart(2, "0")}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
