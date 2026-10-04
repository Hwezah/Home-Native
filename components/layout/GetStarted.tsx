import { phone, site } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";

export function GetStarted() {
  return (
    <section aria-labelledby="get-started" className="px-[clamp(20px,5vw,40px)] mp:px-[var(--gutter-m)] pb-[clamp(60px,6vw,90px)] pt-[clamp(90px,10vw,150px)] text-center">
      <div className="mb-9 inline-block border-b border-line pb-3.5 text-[14px] uppercase">— Get Started</div>
      <h2
        id="get-started"
        className="mx-auto max-w-[1100px] font-serif text-[clamp(52px,7.4vw,124px)] leading-[1.08] tracking-[-.03em]"
      >
        Get Started On <span className="hl-sand">Inspiring</span> Interiors — Contact Today
      </h2>
      <div className="mx-auto mt-14 grid max-w-[1060px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-9 border-t border-line pt-14">
        <div data-m-center className="text-left">
          <div className="label-caps">— Email</div>
          <a href={`mailto:${site.email}`} className="text-[19px] font-light text-muted-1">{site.email}</a>
        </div>
        <div>
          <div className="label-caps">— Hours</div>
          <div className="text-[19px] font-light leading-[1.6] text-muted-1">
            {site.hours[0]}
            <br />
            {site.hours[1]}
          </div>
        </div>
        <div data-m-center className="text-right">
          <div className="label-caps">— Phone</div>
          <a href={phone.href} className="text-[24px] font-light">{phone.display}</a>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <PillButton href="/contact" variant="primary" size="lg">
          Request a Quote
        </PillButton>
      </div>
    </section>
  );
}
