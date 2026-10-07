import { cn } from "@/lib/utils";

/**
 * Napsy logo symbol, redrawn from the client's sign: a serif N between two laurel branches. Uses the text colour, so it
 * flips on dark backgrounds (the logo itself is black on white).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={cn("shrink-0", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M21.8 10.6A22 22 0 0 0 22.5 51.7" />
        <path d="M38.2 10.6A22 22 0 0 1 37.5 51.7" />
      </g>
      <g fill="currentColor">
        <ellipse cx="21.3" cy="8.0" rx="3.9" ry="1.5" transform="rotate(-66 21.3 8.0)" />
        <ellipse cx="22.6" cy="12.1" rx="3.0" ry="1.2" transform="rotate(10 22.6 12.1)" />
        <ellipse cx="14.9" cy="11.6" rx="3.9" ry="1.5" transform="rotate(-83 14.9 11.6)" />
        <ellipse cx="17.4" cy="15.1" rx="3.0" ry="1.2" transform="rotate(-7 17.4 15.1)" />
        <ellipse cx="9.9" cy="16.8" rx="3.9" ry="1.5" transform="rotate(-100 9.9 16.8)" />
        <ellipse cx="13.3" cy="19.5" rx="3.0" ry="1.2" transform="rotate(-24 13.3 19.5)" />
        <ellipse cx="6.6" cy="23.3" rx="3.9" ry="1.5" transform="rotate(-117 6.6 23.3)" />
        <ellipse cx="10.7" cy="24.8" rx="3.0" ry="1.2" transform="rotate(-41 10.7 24.8)" />
        <ellipse cx="5.4" cy="30.5" rx="3.9" ry="1.5" transform="rotate(-134 5.4 30.5)" />
        <ellipse cx="9.7" cy="30.8" rx="3.0" ry="1.2" transform="rotate(-58 9.7 30.8)" />
        <ellipse cx="6.3" cy="37.7" rx="3.9" ry="1.5" transform="rotate(-151 6.3 37.7)" />
        <ellipse cx="10.5" cy="36.7" rx="3.0" ry="1.2" transform="rotate(-75 10.5 36.7)" />
        <ellipse cx="9.3" cy="44.3" rx="3.9" ry="1.5" transform="rotate(-168 9.3 44.3)" />
        <ellipse cx="13.0" cy="42.1" rx="3.0" ry="1.2" transform="rotate(-92 13.0 42.1)" />
        <ellipse cx="14.1" cy="49.8" rx="3.9" ry="1.5" transform="rotate(175 14.1 49.8)" />
        <ellipse cx="17.0" cy="46.6" rx="3.0" ry="1.2" transform="rotate(-109 17.0 46.6)" />
        <ellipse cx="38.7" cy="8.0" rx="3.9" ry="1.5" transform="rotate(-114 38.7 8.0)" />
        <ellipse cx="37.4" cy="12.1" rx="3.0" ry="1.2" transform="rotate(170 37.4 12.1)" />
        <ellipse cx="45.1" cy="11.6" rx="3.9" ry="1.5" transform="rotate(-97 45.1 11.6)" />
        <ellipse cx="42.6" cy="15.1" rx="3.0" ry="1.2" transform="rotate(-173 42.6 15.1)" />
        <ellipse cx="50.1" cy="16.8" rx="3.9" ry="1.5" transform="rotate(-80 50.1 16.8)" />
        <ellipse cx="46.7" cy="19.5" rx="3.0" ry="1.2" transform="rotate(-156 46.7 19.5)" />
        <ellipse cx="53.4" cy="23.3" rx="3.9" ry="1.5" transform="rotate(-63 53.4 23.3)" />
        <ellipse cx="49.3" cy="24.8" rx="3.0" ry="1.2" transform="rotate(-139 49.3 24.8)" />
        <ellipse cx="54.6" cy="30.5" rx="3.9" ry="1.5" transform="rotate(-46 54.6 30.5)" />
        <ellipse cx="50.3" cy="30.8" rx="3.0" ry="1.2" transform="rotate(-122 50.3 30.8)" />
        <ellipse cx="53.7" cy="37.7" rx="3.9" ry="1.5" transform="rotate(-29 53.7 37.7)" />
        <ellipse cx="49.5" cy="36.7" rx="3.0" ry="1.2" transform="rotate(-105 49.5 36.7)" />
        <ellipse cx="50.7" cy="44.3" rx="3.9" ry="1.5" transform="rotate(-12 50.7 44.3)" />
        <ellipse cx="47.0" cy="42.1" rx="3.0" ry="1.2" transform="rotate(-88 47.0 42.1)" />
        <ellipse cx="45.9" cy="49.8" rx="3.9" ry="1.5" transform="rotate(5 45.9 49.8)" />
        <ellipse cx="43.0" cy="46.6" rx="3.0" ry="1.2" transform="rotate(-71 43.0 46.6)" />
      </g>
      <text
        x="30"
        y="39.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 400 }}
      >
        N
      </text>
    </svg>
  );
}
