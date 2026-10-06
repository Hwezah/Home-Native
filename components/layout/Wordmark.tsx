import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The client's name with a capitalised line (e.g. INTERIORS) spread underneath to the same width.
 * Text comes from `site.wordmark`; `size` sets the name's font size and the line scales with it.
 */
export function Wordmark({ className, size = "header" }: { className?: string; size?: "header" | "panel" | "footer" }) {
  return (
    <span className={cn("inline-flex min-w-0 flex-col", className)}>
      <span
        className={cn(
          "whitespace-nowrap font-serif font-light tracking-[-.02em]", // one notch above the 200 used for headings
          { header: "text-[30px] max-[900px]:text-[26px] mp:text-[26px]", panel: "text-[28px] mp:text-[26px]", footer: "text-[34px]" }[size],
          // after the size: tailwind-merge drops a line-height that comes before a font-size
          "leading-none",
        )}
      >
        {site.wordmark.name}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "-mt-0.5 flex justify-between font-light leading-none",
          size === "footer" ? "mt-0 text-[12px]" : "text-[11px] mp:-mt-px mp:text-[10px]",
        )}
      >
        {site.wordmark.sub.split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
    </span>
  );
}
