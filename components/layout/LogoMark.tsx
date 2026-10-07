import { cn } from "@/lib/utils";

/**
 * The client's logo symbol, shown left of the wordmark. Each client branch replaces this with a redrawn copy of their
 * own symbol; this generic house is the fallback when their logo can't be read. Uses the text colour.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 58" className={cn("shrink-0", className)}>
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 25 30 4l26 21" strokeWidth="3.4" />
        <path d="M11 20v34h38V20" strokeWidth="2" />
        <path d="M25 54V38h10v16" strokeWidth="2" />
      </g>
    </svg>
  );
}
