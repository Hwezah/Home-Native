/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://doozy-designs-ug.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Doozy, …"). */
  name: "Doozy",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Doozy Designs",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "DOOZY", sub: "DESIGNS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Doozy",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Lux décor & interior design in Uganda",
  description:
    "A lux décor and interior design studio in Uganda — living rooms, bedrooms, lighting and custom upholstery made in our own workshop.",
  /** Footer blurb under the logo. */
  blurb: "Lux décor and interiors — designed by us, with custom upholstery made in our own workshop.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0200 956 455", href: "tel:+256200956455" }],
  hours: ["Call or message us", "to book a site visit"],
  /** One-line hours for the footer. */
  hoursShort: "Call to book a site visit",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "https://www.instagram.com/doozydesigns_",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@doozydesigns_",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["instagram", "tiktok"],
  socialText: ["instagram", "tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — teal, turquoise and gold from the Doozy logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#0B5F5C",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#0E7A74",
    /** Highlight underline on light backgrounds. */
    tint: "#D9F2F1",
    soft: "#7FD6D4",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#3CC7C7", tint: "#1E4A49", soft: "#2E8C8A" },
    /** Active nav link and highlighted words over photos and dark sections — the logo's gold. */
    onPhoto: "#E0B33A",
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
