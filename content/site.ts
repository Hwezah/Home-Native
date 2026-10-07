/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://esb-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At E.s.B, …"). */
  name: "E.s.B",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "E.s.B Interior Studio",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "E.S.B", sub: "INTERIOR STUDIO" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "E.s.B",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "From construction to smart kitchens in Uganda",
  description:
    "From construction to smart kitchens — E.s.B Interior Studio builds, fits and finishes: modern kitchens, cable-less walls and full interiors in Uganda.",
  /** Footer blurb under the logo. */
  blurb: "From construction to smart kitchens — we do it all.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [
    { display: "0751 004 308", href: "tel:+256751004308" },
    { display: "0785 831 862", href: "tel:+256785831862" },
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
    tiktok: "https://www.tiktok.com/@esbinteriorstudio",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok"],
  socialText: ["tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — the reds of the E.s.B gear. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#6E0B12",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#C41A22",
    /** Highlight underline on light backgrounds. */
    tint: "#FBE3E4",
    soft: "#E99598",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#F0646A", tint: "#4A1418", soft: "#A0353B" },
    /** Active nav link and highlighted words over photos and dark sections. */
    onPhoto: "#F7A8AC",
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
