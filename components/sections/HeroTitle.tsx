import { cn } from "@/lib/utils";

type Part = string | { text: string; className: string };

/**
 * H1 split into words, each masked and rising from translateY(110%) rotate(4deg)
 * (1.3s, 140ms stagger, 450ms initial delay). Pure CSS, so it is SSR-safe and
 * collapses to a static title under prefers-reduced-motion.
 */
export function HeroTitle({ parts, className }: { parts: Part[]; className?: string }) {
  const words: { text: string; className?: string }[] = [];
  for (const p of parts) {
    if (typeof p === "string") p.split(/\s+/).filter(Boolean).forEach((w) => words.push({ text: w }));
    else words.push(p);
  }
  return (
    <h1 className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="hero-word">
            <span className={cn(w.className)} style={{ animationDelay: `${450 + i * 140}ms` }}>
              {w.text}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
