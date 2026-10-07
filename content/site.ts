/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://maliha-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Maliha, …"). */
  name: "Maliha",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Maliha Interiors Ug",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "MALIHA", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Maliha",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interiors, furniture & décor in Kampala",
  description:
    "Interiors, furniture and décor in Kampala — bedrooms, living rooms, studio apartments, sofas, mirrors and outdoor spaces.",
  /** Footer blurb under the logo. */
  blurb: "Interior | Furniture | Décor — bedrooms, living rooms and apartments styled and furnished in Kampala.",

  city: "Kampala",
  location: "Kampala, Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [
    { display: "0756 947 596", href: "tel:+256756947596" },
    { display: "0756 300 267", href: "tel:+256756300267" },
  ],
  hours: ["Call us", "to book a site visit"],
  /** One-line hours for the footer. */
  hoursShort: "Call to book a site visit",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@malihainteriorsug",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok"],
  socialText: ["tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — the Maliha logo is black on white, so monochrome. */
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
