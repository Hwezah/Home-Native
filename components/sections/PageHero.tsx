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
    <section data-hero className="relative h-[min(78vh,760px)] min-h-[520px] overflow-hidden bg-[#7A5E45] text-paper">
      <ParallaxImg src={image} alt={alt} speed={0.35} priority className="hero-zoom" />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(40,30,20,.32)]" />
      <div className="hero-line pointer-events-none absolute inset-x-0 top-[62%] h-px bg-white/[.22]" />
      <div className="wrap m-center pointer-events-none relative flex h-full flex-col justify-end pb-[clamp(60px,12vh,130px)]">
        <div className="hero-fade mb-[clamp(28px,5vh,56px)] text-[14px] uppercase tracking-[.06em]" style={{ animationDelay: "300ms" }}>
          — {eyebrow}
        </div>
        <HeroTitle className="t-hero" parts={[title, { text: highlight, className: "hl-yellow" }]} />
        <div
          className="hero-fade m-hide -mt-7 min-w-[min(100%,360px)] self-end border-b border-white/25 pb-4 text-right text-[14px] uppercase tracking-[.06em]"
          style={{ animationDelay: "1000ms" }}
        >
          {caption}
        </div>
      </div>
    </section>
  );
}
