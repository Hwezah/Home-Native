import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * E.s.B logo symbol, redrawn from the client's badge: a red gear shading from bright to dark red, its upper-left
 * edge breaking into bubbles, with the white centre and "E.s.B" in it.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden="true" viewBox="-2 0 66 64" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E3202A" />
          <stop offset="1" stopColor="#5E0A0F" />
        </linearGradient>
      </defs>
      <polygon points="25.3,10.0 25.5,3.7 38.5,3.7 38.7,10.0 42.8,11.7 47.4,7.4 56.6,16.6 52.3,21.2 54.0,25.3 60.3,25.5 60.3,38.5 54.0,38.7 52.3,42.8 56.6,47.4 47.4,56.6 42.8,52.3 38.7,54.0 38.5,60.3 25.5,60.3 25.3,54.0 21.2,52.3 16.6,56.6 7.4,47.4 11.7,42.8 10.0,38.7 3.7,38.5 3.7,25.5 10.0,25.3 11.7,21.2 7.4,16.6 16.6,7.4 21.2,11.7" fill={`url(#${id}-g)`} />
      {/* bubbles breaking out of the upper-left edge */}
      <g fill="#fff">
        <circle cx="25.5" cy="15.5" r="4.6" />
        <circle cx="16" cy="18.6" r="2.4" />
        <circle cx="17" cy="30" r="2.2" />
        <circle cx="10.5" cy="27" r="3.6" />
      </g>
      <g fill="#E3202A">
        <circle cx="4" cy="12" r="2.2" />
        <circle cx="2.5" cy="21.5" r="3" />
        <circle cx="10.5" cy="19" r="2.6" />
      </g>
      <circle cx="33" cy="33" r="12.5" fill="#fff" />
      <text
        x="33"
        y="35.5"
        textAnchor="middle"
        fill="#8B1218"
        style={{ fontFamily: "var(--font-serif)", fontSize: 8.6, fontWeight: 400 }}
      >
        E.s.B
      </text>
    </svg>
  );
}
