/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://summit-interiors-ug.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Summit, …"). */
  name: "Summit",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Summit Interiors",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "SUMMIT", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Summit",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior finishing in Ndeeba, Kampala",
  description:
    "An interior finishing company at Masterwood Plaza, Ndeeba — wall moulding, gypsum ceilings, kitchens, wall panels, TV units and wardrobes.",
  /** Footer blurb under the logo. */
  blurb: "Wall moulding, gypsum ceilings, kitchens and fitted furniture. Visit us at Masterwood Plaza, level 3, shop B09, Ndeeba.",

  city: "Kampala",
  location: "Masterwood Plaza, level 3, shop B09, Ndeeba",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0701 362 197", href: "tel:+256701362197" }],
  hours: ["WhatsApp us, or visit", "Masterwood Plaza, shop B09"],
  /** One-line hours for the footer. */
  hoursShort: "Masterwood Plaza, level 3, shop B09",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@summitinteriors",
    whatsapp: "https://wa.me/256701362197",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["whatsapp", "tiktok"],
  socialText: ["whatsapp", "tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — black, blue and orange from the Summit logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#141414",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#1F6FD1",
    /** Highlight underline on light backgrounds. */
    tint: "#DCE9FA",
    soft: "#8DB8EE",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#6FA6F0", tint: "#1E3550", soft: "#3F78C2" },
    /** Active nav link and highlighted words over photos and dark sections — the logo's orange. */
    onPhoto: "#F39A1E",
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
