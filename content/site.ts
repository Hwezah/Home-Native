/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://pasha-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Pasha, …"). */
  name: "Pasha",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Pasha Interiors Ltd",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "PASHA", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Pasha",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior & exterior design in Uganda",
  description:
    "An interior and exterior design company in Uganda — TV walls, ceilings and lighting, wall panels, wardrobes, bedrooms and kitchens.",
  /** Footer blurb under the logo. */
  blurb: "Living in your dreams — interior and exterior design, from feature walls and ceilings to wardrobes and kitchens.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [{ display: "0705 782 831", href: "tel:+256705782831" }],
  hours: ["Call or WhatsApp us", "to book a site visit"],
  /** One-line hours for the footer. */
  hoursShort: "Call or WhatsApp to book a visit",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@pasha.interiors.ltd",
    whatsapp: "https://wa.me/256705782831",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok", "whatsapp"],
  socialText: ["tiktok", "whatsapp"],

  /** Brand colours (written into CSS variables by app/layout.tsx) — navy and lavender from the Pasha logo. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#1F1A6B",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#7058DC",
    /** Highlight underline on light backgrounds. */
    tint: "#ECE8FD",
    soft: "#B9ABF6",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#A99AF5", tint: "#33296E", soft: "#7466C2" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#C9BEFA",
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
