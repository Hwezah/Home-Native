import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { LogoMark } from "./LogoMark";

/**
 * The client's name with a capitalised line (e.g. INTERIORS) spread underneath to the same width.
 * Text comes from `site.wordmark`; `size` sets the name's font size and the line scales with it.
 * The client's logo symbol (LogoMark) sits to the left, as tall as the two lines of text.
 */
export function Wordmark({
  className,
  size = "header",
}: {
  className?: string;
  size?: "header" | "panel" | "footer";
}) {
  const caps = site.wordmark.name === site.wordmark.name.toUpperCase();
  // Long taglines (e.g. "INTERIOR & HOME DECO") get smaller letters and a wider-spaced name so both lines match.
  const long = site.wordmark.sub.length > 12;
  return (
    <span
      className={cn(
        "inline-flex min-w-0 items-center gap-2.5",
        size === "footer" && "gap-3",
        className,
      )}
    >
      <LogoMark
        className={
          size === "footer" ? "h-[50px] w-auto" : "h-[42px] w-auto mp:h-[37px]"
        }
      />
      <span className="inline-flex min-w-0 flex-col">
        <span
          className={cn(
            "whitespace-nowrap font-serif font-light", // one notch above the 200 used for headings
            caps
              ? long
                ? "tracking-[.14em]"
                : "tracking-[.04em]"
              : "tracking-[-.02em]",
            {
              header: "text-[30px] mp:text-[26px]",
              panel: "text-[28px] mp:text-[26px]",
              footer: "text-[34px]",
            }[size],
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
            long
              ? size === "footer"
                ? "mt-0.5 text-[10px]"
                : "mt-0.5 text-[9px] mp:text-[8px]"
              : size === "footer"
                ? "mt-0 text-[12px]"
                : "text-[11px] mp:-mt-px mp:text-[10px]",
          )}
        >
          {site.wordmark.sub.split("").map((ch, i) => (
            <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
          ))}
        </span>
      </span>
    </span>
  );
}
