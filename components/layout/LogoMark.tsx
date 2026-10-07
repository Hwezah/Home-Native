import { cn } from "@/lib/utils";

/**
 * Timeline Interiors' logo symbol: the "W" of their Walls & Ceiling badge, drawn as two overlapping Vs
 * (no circle, no text). Uses currentColor so it follows the header text colour and flips in dark mode.
 */
export function LogoMark({ className }: { className?: string }) {
  const v1 = "M0 0H16L30 52 44 0H52L35 70H22Z";
  const v2 = "M46 0H62L76 52 90 0H98L81 70H68Z";
  return (
    <svg viewBox="0 0 98 70" className={cn("shrink-0", className)} fill="currentColor" aria-hidden="true">
      <mask id="tl-gap">
        <rect width="98" height="70" fill="#fff" />
        <path d={v2} fill="#000" stroke="#000" strokeWidth="5" strokeLinejoin="round" />
      </mask>
      <path d={v1} mask="url(#tl-gap)" />
      <path d={v2} />
    </svg>
  );
}
