import { cn } from "@/lib/utils";

/**
 * Maliha logo symbol, redrawn from the client's badge: two pendant lamps hanging inside a rounded square.
 * Uses the text colour, so it flips on dark backgrounds (the logo itself is black on white).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={cn("shrink-0", className)}>
      <rect x="3" y="3" width="54" height="54" rx="9" fill="none" stroke="currentColor" strokeWidth="2.8" />
      <g stroke="currentColor" strokeWidth="1.3">
        <path d="M24 4.4V37" />
        <path d="M40 4.4V27" />
      </g>
      <g fill="currentColor">
        <rect x="21.6" y="36" width="4.8" height="3.2" rx="0.6" />
        <path d="M15 48a9 9 0 0 1 18 0z" />
        <rect x="37.6" y="26" width="4.8" height="3.2" rx="0.6" />
        <path d="M31 38a9 9 0 0 1 18 0z" />
      </g>
    </svg>
  );
}
