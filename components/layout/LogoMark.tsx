import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Brayz logo symbol, redrawn from the client's sign: a house outline with a navy L-panel (floor lamp cut out)
 * and an armchair on a gold panel. Navy parts use the text colour so the mark flips on dark backgrounds.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden="true" viewBox="0 0 64 58" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2D35A" />
          <stop offset="1" stopColor="#C99A1E" />
        </linearGradient>
      </defs>
      {/* roof and walls */}
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 22 32 3.5 60.5 22" strokeWidth="3.4" />
        <path d="M9 18.6V55h46V18.6" strokeWidth="1.6" />
      </g>
      {/* navy L-panel with the floor lamp cut out */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 24h11v21h24v6H14z M17.3 27.2h5.4l1.3 5h-3v12.1h2.4v1.5h-6.6v-1.5h2.4V32.2h-3z"
      />
      {/* gold panel with the armchair */}
      <rect x="27" y="24" width="22" height="19" fill={`url(#${id}-g)`} />
      <path
        fill="#1C2541"
        d="M31.2 31.6c0-1.6 1-2.6 2.6-2.6h8.4c1.6 0 2.6 1 2.6 2.6v3.2h.4c1 0 1.7.7 1.7 1.7v3.6c0 .7-.5 1.2-1.2 1.2h-.7v1.3h-1.6v-1.3h-9.2v1.3h-1.6v-1.3h-.7c-.7 0-1.2-.5-1.2-1.2v-3.6c0-1 .7-1.7 1.7-1.7h.4zm1.6 4.8v2.6h10.4v-2.6c0-.8-.4-1.2-1-1.2h-8.4c-.6 0-1 .4-1 1.2z"
      />
    </svg>
  );
}
