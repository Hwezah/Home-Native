/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://zama-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Zama, …"). */
  name: "Zama",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Zama Interiors",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width */
  wordmark: { name: "ZAMA", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Zama",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior & exterior design in Uganda",
  description:
    "An interior and exterior design company in Uganda — gypsum ceilings, lighting, built-in joinery, painting and full renovations.",
  /** Footer blurb under the logo. */
  blurb: "Interior and exterior design, updates and renovations — planned, built and finished by one team.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [
    { display: "0780 930 242", href: "tel:+256780930242" },
    { display: "0757 449 776", href: "tel:+256757449776" },
  ],
  hours: ["Call us to book", "a site visit"],
  /** One-line hours for the footer. */
  hoursShort: "Call to book a site visit",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@zamainteriorsltdz",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok"],
  socialText: ["tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — taken from the Zama logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#3A2710",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#A35C0E",
    /** Highlight underline on light backgrounds. */
    tint: "#FBE1BD",
    soft: "#E2A75A",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#F0A04B", tint: "#5A3B12", soft: "#9C6A2A" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#F6C66E",
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
