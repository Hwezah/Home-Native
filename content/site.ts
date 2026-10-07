/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://brayz-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Brayz, …"). */
  name: "Brayz",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Brayz Interior & Home Deco",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "BRAYZ", sub: "INTERIOR & HOME DECO" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Brayz",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Luxurious interior design in Uganda",
  description:
    "A luxurious interior design and home décor company in Uganda — house transformations, ceilings and lighting, furniture and décor pieces, with deliveries.",
  /** Footer blurb under the logo. */
  blurb: "Luxurious interiors and home décor — from full house transformations to the finishing pieces, delivered.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0703 722 820", href: "tel:+256703722820" }],
  hours: ["Call or WhatsApp us", "for visits & deliveries"],
  /** One-line hours for the footer. */
  hoursShort: "Call or WhatsApp for deliveries",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@brayzinteriorhomedeco.ug",
    whatsapp: "https://wa.me/256703722820",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok", "whatsapp"],
  socialText: ["tiktok", "whatsapp"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — navy and gold from the Brayz logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#1C2541",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#8A6A12",
    /** Highlight underline on light backgrounds. */
    tint: "#F4E9C8",
    soft: "#D8B860",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#D8B44A", tint: "#4A3E1A", soft: "#8F7A3A" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#F2D27A",
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
