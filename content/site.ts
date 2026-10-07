/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://napsy-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Napsy, …"). */
  name: "Napsy",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Napsy Interiors",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "NAPSY", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Napsy",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior design in Ndeeba, Kampala",
  description:
    "An interior design company at Masterwood Plaza, Ndeeba — kitchens, full house interiors, ceilings and lighting, bedrooms and display units.",
  /** Footer blurb under the logo. */
  blurb: "Kitchens and full house interiors, designed and finished by one team. Visit us at Masterwood Plaza, Ndeeba.",

  city: "Kampala",
  location: "Masterwood Plaza, Ndeeba",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0759 588 311", href: "tel:+256759588311" }],
  hours: ["Call or WhatsApp us", "or visit Masterwood Plaza"],
  /** One-line hours for the footer. */
  hoursShort: "Masterwood Plaza, Ndeeba",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@napsyinteriors",
    whatsapp: "https://wa.me/256759588311",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok", "whatsapp"],
  socialText: ["tiktok", "whatsapp"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — the Napsy logo is black on white, so monochrome. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#1A1A1A",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#555555",
    /** Highlight underline on light backgrounds. */
    tint: "#ECECEC",
    soft: "#B5B5B5",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#C8C8C8", tint: "#3A3A3A", soft: "#7A7A7A" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#E6E6E6",
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
