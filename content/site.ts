/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://homenative.co",
  locale: "en_UG",

  /** Short brand name used in running text ("At HomeNative, …"). */
  name: "HomeNative",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "HomeNative Interiors",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "HomeNative", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Native",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "A MachineNative company",

  /** Default SEO title and description. */
  title: "Interior design studio in Kampala",
  description: "An interior design studio in Kampala, Uganda creating calm, functional and lasting spaces.",
  /** Footer blurb under the logo. */
  blurb: "Interior design studio creating calm, functional and lasting spaces.",

  city: "Kampala",
  location: "Kampala, Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0742 696 353", href: "tel:+256742696353" }],
  hours: ["Mon–Fri: 9 AM to 5 PM", "Sun: Closed"],

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    pinterest: "#",
    tiktok: "",
    whatsapp: "",
  },

  /** Brand colours (written into CSS variables by app/layout.tsx). */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#2E1F12",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#8B5E3C",
    /** Highlight underline on light backgrounds. */
    tint: "#EADBC8",
    soft: "#C9A98A",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#C99D76", tint: "#4A3526", soft: "#8B6A4F" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#E7C9A9",
  },
};

export const siteUrl = site.url;
export const phone = site.phones[0];

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
