"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

function useAutoIndex(length: number, ms = 6000) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setT((v) => (v + 1) % length), ms);
    return () => clearInterval(id);
  }, [length, ms, t]); // restarting on manual change gives the reader a full 6s
  return [t, setT] as const;
}

function Dots({ count, active, onPick }: { count: number; active: number; onPick: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show testimonial ${i + 1}`}
          aria-current={i === active}
          onClick={() => onPick(i)}
          className="h-[5px] cursor-pointer rounded border-0 p-0 transition-[width] duration-300"
          style={{ width: i === active ? 44 : 6, background: i === active ? "var(--ink)" : "var(--line-strong)" }}
        />
      ))}
    </div>
  );
}

/** Home / About: quote column on the left (rendered by this component). */
export function TestimonialColumn({ items }: { items: Testimonial[] }) {
  const [t, setT] = useAutoIndex(items.length);
  const q = items[t];
  return (
    <div className="flex flex-col items-center px-[clamp(24px,5vw,80px)] mp:px-[var(--gutter-m)] py-[clamp(64px,8vw,110px)] text-center">
      <div className="mb-14 w-full max-w-[440px] border-b border-line pb-[18px] text-[15px] uppercase">Testimonials</div>
      <div className="mb-7 text-brand-mid">
        <Quote size={48} strokeWidth={1} />
      </div>
      <div aria-live="polite" className="flex flex-col items-center">
        <p data-no-reveal className="m-0 mb-14 max-w-[420px] text-[22px] leading-[1.6] text-pretty">
          {q.text}
        </p>
        <div className="mb-1.5 text-[18px] font-normal uppercase">{q.name}</div>
        <div className="mb-[60px] text-[17px] text-muted-2b">{q.role}</div>
      </div>
      <Dots count={items.length} active={t} onPick={setT} />
    </div>
  );
}

/** Services: centred Newsreader quote, crossfading grayscale avatar, arrows (hidden on mobile). */
export function TestimonialCentered({ items }: { items: Testimonial[] }) {
  const [t, setT] = useAutoIndex(items.length);
  const n = items.length;
  const q = items[t];
  const arrow =
    "cursor-pointer border-0 bg-transparent p-3 text-ink transition-[color,transform] duration-300 hover:text-brand-mid";
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[clamp(12px,4vw,60px)]">
      <button type="button" data-m-hide aria-label="Previous testimonial" onClick={() => setT((t + n - 1) % n)} className={cn(arrow, "hover:-translate-x-1.5")}>
        <ArrowLeft size={36} strokeWidth={1.25} />
      </button>
      <div className="flex flex-col items-center text-center">
        <div className="mb-9 text-brand-mid">
          <Quote size={44} strokeWidth={1.25} />
        </div>
        <div
          aria-live="polite"
          className="flex min-h-[3.75em] max-w-[1000px] items-center font-serif text-[clamp(28px,3.6vw,56px)] leading-[1.25] tracking-[-.015em] text-balance"
        >
          {q.text}
        </div>
        <div className="relative mt-11 h-[84px] w-[84px] overflow-hidden rounded-full bg-img-bg grayscale">
          {items.map((it, i) => (
            <div key={it.name} className="absolute inset-0 transition-opacity duration-[600ms]" style={{ opacity: i === t ? 1 : 0 }}>
              <Image src={it.avatar} alt={i === t ? it.name : ""} fill sizes="84px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-[22px] text-[18px] font-normal uppercase">{q.name}</div>
        <div className="mt-1 text-[17px] text-muted-2b">{q.role}</div>
        <div className="mt-12">
          <Dots count={n} active={t} onPick={setT} />
        </div>
      </div>
      <button type="button" data-m-hide aria-label="Next testimonial" onClick={() => setT((t + 1) % n)} className={cn(arrow, "hover:translate-x-1.5")}>
        <ArrowRight size={36} strokeWidth={1.25} />
      </button>
    </div>
  );
}
