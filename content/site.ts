/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://mibemax-interiors.vercel.app",
  locale: "en_KE",

  /** Short brand name used in running text ("At Mibemax, …"). */
  name: "Mibemax",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Mibemax Interior Finishes",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "MIBEMAX", sub: "INTERIOR FINISHES" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Mibemax",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior design studio in Kenya",
  description:
    "An interior design studio in Kenya — TV walls and wall panels, gypsum ceilings, wardrobes and wall-to-wall carpet. We create, update and renovate.",
  /** Footer blurb under the logo. */
  blurb: "We create, update and renovate — interior finishes from wall panels and ceilings to carpets and wardrobes.",

  city: "Kenya",
  location: "Laxmi Plaza, Biashara Street",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0741 172 522", href: "tel:+254741172522" }],
  hours: ["Call or WhatsApp us", "for orders & enquiries"],
  /** One-line hours for the footer. */
  hoursShort: "Laxmi Plaza, Biashara Street",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@mibemaxinteriorfinishes",
    whatsapp: "https://wa.me/254741172522",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["whatsapp", "tiktok"],
  socialText: ["whatsapp", "tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — the greens of the Mibemax logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#12502A",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#1E7F3A",
    /** Highlight underline on light backgrounds. */
    tint: "#DDF2E2",
    soft: "#8FD3A0",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#5CC97B", tint: "#1C3F28", soft: "#2F7D46" },
    /** Active nav link and highlighted words over photos and dark sections. */
    onPhoto: "#7BD88F",
  },
};

export const siteUrl = site.url;
export const phone = site.phones[0];
export const homeLabel = `${site.fullName} — home`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const clients = ["Aurel", "Theo", "Hudson", "Loom", "Kesh", "Oslo."];

/** Pexels placeholder helper — swap for real photography later. */
export const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
