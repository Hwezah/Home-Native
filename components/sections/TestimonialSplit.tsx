import { clients, pexels, site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { ParallaxImg } from "@/components/ui/Img";
import { TestimonialColumn } from "@/components/ui/TestimonialSlider";

/** Home + About: quote slider on the left, client names over a parallax portrait on the right. */
export function TestimonialSplit() {
  return (
    <section aria-label="Testimonials" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] border-b border-ink">
      <TestimonialColumn items={testimonials} />
      <div className="relative min-h-[560px] overflow-hidden bg-[var(--brand)]">
        <ParallaxImg src={pexels(3768911)} alt={`${site.name} client portrait`} speed={0.2} extra={12} sizes="(max-width: 920px) 100vw, 50vw" />
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 content-center gap-x-5 gap-y-10 p-[clamp(40px,7vw,120px)] font-num text-[clamp(24px,2.4vw,38px)] font-light tracking-[.02em] text-white">
          {clients.map((c, i) => (
            <div key={c} style={{ justifySelf: i % 2 ? "end" : "start" }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
