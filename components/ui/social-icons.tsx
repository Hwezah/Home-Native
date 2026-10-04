import type { SVGProps } from "react";

/**
 * Lucide brand glyphs (removed from lucide-react v1). Same paths and API
 * shape as Lucide icons so they sit alongside them with a thin stroke.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function Base({ size = 22, strokeWidth = 1.25, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <Base {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </Base>
  );
}

export function Facebook(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Base>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </Base>
  );
}

export function Pinterest(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M11 8.5c2.6-.6 5 .9 4.6 3.7-.3 2-2 3.1-3.6 2.6M11.8 10 9 21" />
    </Base>
  );
}

export function TikTok(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V3c.4 2.6 2.4 4.6 5 5" />
    </Base>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z" />
      <path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1-1.5-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2z" />
    </Base>
  );
}
