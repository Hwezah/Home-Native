import type { Metadata } from "next";

import { clients, pexels, site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Facebook, Instagram, Linkedin } from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us about your space — a single room or a whole home. Home Native, Kampala, Uganda. info@homenative.co · 0742 696 353.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        highlight="Us."
        caption="We reply within one working day."
        image={pexels(1571453)}
        alt="Bright kitchen and dining room"
      />

      <section className="wrap py-[clamp(80px,10vw,150px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(56px,8vw,130px)]">
          <div data-m-center className="flex flex-col">
            <Eyebrow className="w-full">Get in touch</Eyebrow>
            <h2 className="t-h2">
              Let&apos;s <span className="hl-green">Talk</span>
            </h2>
            <p className="mt-8 max-w-[460px] text-[19px] leading-[1.7] text-muted-1b">
              Tell us about your space — a single room or a whole home. We will come back with ideas, a rough timeline and next steps.
            </p>
            <h3 className="mt-16 text-[26px] font-light">Call us now</h3>
            <a href={site.phoneHref} className="mt-3.5 text-[clamp(40px,4.4vw,64px)] font-light leading-[1.1] tracking-[.01em]">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-3.5 text-[20px] text-muted-1">
              {site.email}
            </a>
            <div className="mt-10 flex gap-[26px] text-ink">
              <a href={site.socials.instagram} aria-label="Instagram"><Instagram /></a>
              <a href={site.socials.facebook} aria-label="Facebook"><Facebook /></a>
              <a href={site.socials.linkedin} aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Studio information" className="wrap pb-[clamp(80px,9vw,140px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-9 border-t border-line pt-14">
          {[
            ["Studio", site.location, "Visits by appointment"],
            ["Hours", site.hours[0], site.hours[1]],
            ["Company", "Home Native Interiors", site.company],
          ].map(([label, a, b]) => (
            <div key={label} data-m-center className="">
              <div className="label-caps">— {label}</div>
              <div className="text-[19px] leading-[1.6] text-muted-1">
                {a}
                <br />
                {b}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Clients" className="grid grid-cols-[repeat(auto-fit,minmax(min(50%,200px),1fr))] border-y border-line-strong">
        {clients.map((c) => (
          <div
            key={c}
            className="flex min-h-[clamp(140px,14vw,220px)] items-center justify-center border-r border-line-strong font-num text-[clamp(26px,2.4vw,38px)] font-light text-muted-2b transition-[color,background] duration-[400ms] hover:bg-surface-warm hover:text-ink"
          >
            {c}
          </div>
        ))}
      </section>
    </>
  );
}
