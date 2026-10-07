import { cn } from "@/lib/utils";

/**
 * Mibemax logo symbol, redrawn from the client's badge (without its circle): two green gabled roof outlines with the
 * large solid green roof between them, a small house on top and dark four-pane windows.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 40" className={cn("shrink-0", className)}>
      <polygon points="17,7 53,22 45,37 28,37" fill="#1A8A3A" />
      <polygon points="64,9 46,37 55,37 67,16" fill="#22A045" />
      <g fill="none" stroke="#1E9A3E" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M3 37 17 6 31 37" />
        <path d="M50 37 65 7 78 37" />
        <path d="M42 13 48 4 54 13" strokeWidth="2.2" />
      </g>
      <path d="M37 9l3 4 4-7" fill="none" stroke="#1E9A3E" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <g fill="#3D3833">
        <rect x="9.5" y="26" width="2.6" height="2.6" />
        <rect x="12.6" y="26" width="2.6" height="2.6" />
        <rect x="9.5" y="29.1" width="2.6" height="2.6" />
        <rect x="12.6" y="29.1" width="2.6" height="2.6" />
        <rect x="65" y="26" width="2.6" height="2.6" />
        <rect x="68.1" y="26" width="2.6" height="2.6" />
        <rect x="65" y="29.1" width="2.6" height="2.6" />
        <rect x="68.1" y="29.1" width="2.6" height="2.6" />
        <rect x="46.3" y="10" width="1.6" height="1.6" />
        <rect x="48.2" y="10" width="1.6" height="1.6" />
        <rect x="46.3" y="11.9" width="1.6" height="1.6" />
        <rect x="48.2" y="11.9" width="1.6" height="1.6" />
      </g>
    </svg>
  );
}
