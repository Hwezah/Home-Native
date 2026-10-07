/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://timeline-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Timeline, …"). */
  name: "Timeline Interiors",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Timeline Interiors UG",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "TIMELINE", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Timeline",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Gypsum ceilings, partitions and flooring in Kampala",
  description:
    "Timeline Interiors UG fits gypsum ceilings with LED lighting, partitions, wall finishes and flooring for homes and offices in Kampala, Uganda.",
  /** Footer blurb under the logo. */
  blurb: "Walls & ceilings — gypsum ceilings, partitions and flooring.",

  city: "Kampala",
  location: "Kampala, Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0705 619 035", href: "tel:+256705619035" }],
  hours: ["Call us", "to book a site visit"],
  /** One-line hours for the footer. */
  hoursShort: "Call to book a site visit",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@timelineinteriors",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok"],
  socialText: ["tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — the navy of the Walls & Ceiling logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#0F1D55",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#1F3A93",
    /** Highlight underline on light backgrounds. */
    tint: "#E2E8F8",
    soft: "#9DB0E6",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#8FA8F0", tint: "#18244F", soft: "#4F68B8" },
    /** Active nav link and highlighted words over photos and dark sections. */
    onPhoto: "#B9C8F5",
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
