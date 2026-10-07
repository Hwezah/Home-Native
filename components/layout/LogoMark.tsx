import { cn } from "@/lib/utils";

/**
 * Pasha logo symbol, redrawn from the client's badge: two lavender bars forming a P (the right bar curves around the
 * dot) with the navy "i" inside. The navy parts use the text colour so the mark flips on dark backgrounds.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="-1 -1 53 62" className={cn("shrink-0", className)}>
      <rect x="0" y="0" width="10" height="60" fill="#9D8CF2" />
      <path d="M38.9 0H50.4V60H38.9V28.1A14.4 14.4 0 0 0 38.9 7.9Z" fill="#9D8CF2" />
      <ellipse cx="28.6" cy="18" rx="7.4" ry="9.2" fill="currentColor" />
      <rect x="21.6" y="38.9" width="13.9" height="21.1" fill="currentColor" />
    </svg>
  );
}
