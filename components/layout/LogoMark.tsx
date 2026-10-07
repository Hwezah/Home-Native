import { cn } from "@/lib/utils";

/** Uptown logo symbol, redrawn from the client's badge: a cut-away two-storey house with furniture. Uses the text colour. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 92 76" className={cn("shrink-0", className)}>
      {/* structure */}
      <g stroke="currentColor" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M3 23.5 34 3 89 23.5" />
        <path d="M12 19v53M80 16.5V72" />
        <path d="M3 72.5h86" />
      </g>
      <g fill="currentColor">
        {/* floors */}
        <rect x="12" y="41" width="68" height="3.6" />
        <rect x="44.6" y="43" width="3.6" height="29" />
        {/* upstairs: floor lamp */}
        <path d="M21.6 40.5V17.2l6.2-3.1-.5-1 1.3-.7 3.3 4.6-1.6.8-1.3-1.8-6 3v21.5h3.2V41h-7.8v-1.5h3.2z" />
        {/* upstairs: armchair */}
        <path d="M30 27.5c0-3.6 2.4-5.5 6.5-5.5h3.2c4.1 0 6.5 1.9 6.5 5.5v6.8h1.4v4.2h-1.6V41h-1.3v-2.5h-13.2V41h-1.3v-2.5H28.6v-4.2H30z" />
        {/* upstairs: plant on side table */}
        <path d="M54.5 26.8h7.2v1.3h-1.1l2 12.9h-1.3l-1.2-7.6h-3.9l-1.2 7.6h-1.3l2-12.9h-1.2zm2.4 5.3h3.4l-.5-4h-2.4z" />
        <path d="M58.1 26.8c-.3-1.8-1.6-2.9-3-3.2 1.6-.2 2.7.4 3.3 1.5.3-2 1.4-3 3-3.3-1.3.9-2 2.6-2.1 5z" />
        {/* upstairs: frames */}
        <rect x="58.4" y="13.2" width="4.2" height="6.8" />
        <rect x="64.6" y="17.6" width="4.4" height="7.2" />
        {/* downstairs: wingback chair */}
        <path d="M17.4 52.6c0-2.6 1.7-4 4.3-4h4.2c2.6 0 4.3 1.4 4.3 4v6.6h1.6c.9 0 1.4.5 1.4 1.4v5.1h-1.2V72h-1.3v-6.3H19.1V72h-1.3v-6.3h-1.2v-5.1c0-.9.5-1.4 1.4-1.4h-.6z" />
        {/* downstairs: side table with plant */}
        <path d="M34.8 62.4h6v1.3h-.9V72h-1.2v-6h-1.8v6h-1.2v-8.3h-.9z" />
        <path d="M37.6 62.4c-.4-2.2-1.8-3.4-3.3-3.8 1.7-.1 2.9.6 3.5 1.8.4-2.4 1.6-3.6 3.4-4-1.5 1.1-2.3 3.1-2.5 6z" />
        {/* downstairs: pendant lamp */}
        <path d="M62.6 44.6h.9v4.4h1.6c1.6 0 2.6 1 2.9 2.6h-10c.3-1.6 1.3-2.6 2.9-2.6h1.7z" />
        {/* downstairs: café table with plant */}
        <path d="M51.6 62.6h9.6v1.2H57V72h-1.4v-8.2h-4z" />
        <path d="M53.6 72l2-4.6h1.4l2 4.6h-1.2l-1.5-3.4-1.5 3.4z" />
        <path d="M56.1 62.6c-.3-1.8-1.4-2.8-2.6-3.1 1.4-.1 2.3.5 2.8 1.4.3-1.9 1.3-2.9 2.7-3.2-1.2.9-1.8 2.5-2 4.9z" />
        {/* downstairs: chair */}
        <path d="M66.6 56.6c0-2.3 1.6-3.6 3.8-3.6s3.8 1.3 3.8 3.6v6.2h.8v1.3h-.8V72H73v-7.9h-5.2V72h-1.2v-7.9h-.8v-1.3h.8zm1.2 6.2h5.2v-6.2c0-1.5-1-2.3-2.6-2.3s-2.6.8-2.6 2.3z" />
      </g>
    </svg>
  );
}
