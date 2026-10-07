import { cn } from "@/lib/utils";

/**
 * Doozy logo symbol, redrawn from the client's badge (without its teal circle): a white D outline over a turquoise D,
 * with the gold curve inside. The white outline uses the text colour so it shows on light backgrounds too.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 60" className={cn("shrink-0", className)}>
      <path d="M3 4h20a26 26 0 0 1 0 52H3z" fill="#3CC7C7" />
      <path d="M11 6.5h15.5a23.5 23.5 0 0 1 0 47H11z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M22 13v16c0 3.2 1.8 5 5 5h5.5c3.2 0 5 1.8 5 5v4.5" fill="none" stroke="#E0B33A" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
