import { cn } from "@/lib/utils";

/**
 * "Home Native" with INTERIORS in capitals underneath, spread to exactly the same width.
 * `size` sets the "Home Native" font size; INTERIORS scales with it.
 */
export function Wordmark({ className, size = "header" }: { className?: string; size?: "header" | "panel" }) {
  return (
    <span className={cn("inline-flex min-w-0 flex-col", className)}>
      <span
        className={cn(
          "whitespace-nowrap font-serif tracking-[-.02em]",
          size === "header" ? "text-[30px] mp:text-[26px]" : "text-[28px] mp:text-[26px]",
          // after the size: tailwind-merge drops a line-height that comes before a font-size
          "leading-none",
        )}
      >
        Home Native
      </span>
      <span aria-hidden="true" className="-mt-0.5 flex justify-between text-[11px] font-light leading-none mp:-mt-px mp:text-[10px]">
        {"INTERIORS".split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
    </span>
  );
}
