import { ParallaxImg } from "@/components/ui/Img";
import { HeroTitle } from "./HeroTitle";

/** Image hero used by About, Services and Contact. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  caption,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  caption: string;
  image: string;
  alt: string;
}) {
  return (
    <section data-hero className="relative h-[min(78vh,760px)] min-h-[520px] overflow-hidden bg-[var(--brand)] text-white">
      <ParallaxImg src={image} alt={alt} speed={0.35} priority className="hero-zoom" />
      <div className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--brand)_32%,transparent)]" />
      <div className="hero-line pointer-events-none absolute inset-x-0 top-[62%] h-px bg-white/[.22]" />
      <div data-m-center className="wrap pointer-events-none relative flex h-full flex-col justify-end pb-[clamp(60px,12vh,130px)]">
        <div className="hero-fade mb-[clamp(28px,5vh,56px)] text-[14px] uppercase tracking-[.06em]" style={{ animationDelay: "300ms" }}>
          — {eyebrow}
        </div>
        <HeroTitle className="t-hero" parts={[title, { text: highlight, className: "hl-yellow" }]} />
        <div
          data-m-hide className="hero-fade -mt-7 min-w-[min(100%,360px)] self-end border-b border-white/25 pb-4 text-right text-[14px] uppercase tracking-[.06em]"
          style={{ animationDelay: "1000ms" }}
        >
          {caption}
        </div>
      </div>
    </section>
  );
}
