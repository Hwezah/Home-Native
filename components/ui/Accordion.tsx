"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

/**
 * One-open-at-a-time accordion.
 * - variant "line": Services style — 26px "+" whose vertical bar rotates 90° → 0° into "−".
 * - variant "circle": Home FAQ style — plus/minus inside a 44px circle.
 * Expand animates grid-template-rows 0fr → 1fr (.55s).
 */
export function Accordion({
  items,
  defaultOpen = 0,
  variant = "line",
  className,
}: {
  items: Item[];
  defaultOpen?: number;
  variant?: "line" | "circle";
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={cn(variant === "circle" && "border-t border-[#ddd]", className)}>
      {items.map((it, i) => {
        const on = open === i;
        const panelId = `${id}-p${i}`;
        return (
          <div key={it.q} className={variant === "circle" ? "border-b border-[#ddd]" : "border-b border-line"}>
            <button
              type="button"
              aria-expanded={on}
              aria-controls={panelId}
              onClick={() => setOpen(on ? -1 : i)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent text-left font-light text-ink transition-colors duration-300 hover:text-brand-mid",
                variant === "line" ? "py-[30px] text-[clamp(24px,2.2vw,34px)]" : "py-7 text-[22px]",
              )}
            >
              {it.q}
              {variant === "line" ? (
                <span className="relative h-[26px] w-[26px] shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-[26px] bg-current" />
                  <span
                    className="absolute left-0 top-1/2 h-px w-[26px] bg-current transition-transform duration-[450ms] ease-hn"
                    style={{ transform: on ? "rotate(0deg)" : "rotate(90deg)" }}
                  />
                </span>
              ) : (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ccc]" aria-hidden="true">
                  {on ? <Minus size={20} strokeWidth={1.25} /> : <Plus size={20} strokeWidth={1.25} />}
                </span>
              )}
            </button>
            <div id={panelId} role="region" className="acc-body" data-open={on}>
              <div>
                <p
                  data-no-reveal
                  className={cn(
                    "m-0 font-light text-muted-1b",
                    variant === "line" ? "px-[clamp(0px,3vw,48px)] pb-9 text-[18px] leading-[1.75]" : "mb-[30px] max-w-[560px] text-[18px] leading-[1.6]",
                  )}
                >
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
