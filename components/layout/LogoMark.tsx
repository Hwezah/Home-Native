import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Zama logo symbol, redrawn from the client's badge: crossed gold roof lines over a full house outline
 * (walls and a swooping ground line), with the eave and the orange/yellow window inside.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const gold = "#B07A2A";
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F9D23C" />
          <stop offset="1" stopColor="#F08A1C" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4A62A" />
          <stop offset="1" stopColor="#F7C933" />
        </linearGradient>
      </defs>
      {/* crossed double roof lines */}
      <g stroke={gold} strokeWidth="1.7" strokeLinecap="round" fill="none">
        <path d="M1.5 31 34 2.5" />
        <path d="M4.2 32.2 35.6 4.6" />
        <path d="M58.5 31 26 2.5" />
        <path d="M55.8 32.2 24.4 4.6" />
      </g>
      {/* walls and ground */}
      <g stroke={gold} strokeLinecap="round" fill="none">
        <path d="M8.2 27.6V53.4M51.8 27.6V53.4" strokeWidth="2" />
        <path d="M2.5 55.2Q30 50.6 57.5 55.2" strokeWidth="2.4" />
        <path d="M9 58.4Q30 55.6 51 58.4" strokeWidth="1.1" />
      </g>
      {/* eave over the window */}
      <path d="M15.5 28 30 23.4 44.5 28" stroke={gold} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      {/* four-pane window */}
      <rect x="20" y="30.6" width="9.4" height="9.8" fill={`url(#${id}-a)`} />
      <rect x="30.6" y="30" width="9.4" height="10.4" fill={`url(#${id}-b)`} />
      <rect x="20" y="41.6" width="9.4" height="9.8" fill={`url(#${id}-b)`} />
      <rect x="30.6" y="41.6" width="9.4" height="10.6" fill={`url(#${id}-a)`} />
      <path
        d="M20 37.2c3.4-2.4 6.8-2.8 9.4-1.5M30.6 36.4c3-2.2 6.3-2.7 9.4-1.2M20 48.6c3.5-2.3 6.8-2.7 9.4-1.4M30.6 49.4c3-2.2 6.3-2.5 9.4-1.2"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth=".9"
        fill="none"
      />
    </svg>
  );
}
