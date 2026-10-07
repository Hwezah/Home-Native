/**
 * Client settings — the one file to edit when re-branding this template for a new client.
 * Page copy (projects, team, testimonials, posts, FAQs, services, commitments) lives in the other content/*.ts files.
 */
export const site = {
  url: "https://uptown-interiors.vercel.app",
  locale: "en_UG",

  /** Short brand name used in running text ("At Uptown, …"). */
  name: "Uptown",
  /** Full trading name: page titles, copyright, company details. */
  fullName: "Uptown Interiors & Construction",
  /** Header / menu / footer logo: `name` in serif with `sub` spread underneath to the same width. */
  wordmark: { name: "UPTOWN", sub: "INTERIORS" },
  /** Huge outlined word behind the About intros. */
  outlineWord: "Uptown",
  /** Optional parent-company line (footer, contact page). Leave "" to hide. */
  parent: "",

  /** Default SEO title and description. */
  title: "Interior design & construction in Uganda",
  description:
    "An interior design and construction company in Uganda — homes, offices, hotels and Airbnbs, from wardrobes and kitchens to full transformations.",
  /** Footer blurb under the logo. */
  blurb: "Design and beyond — interiors and construction for homes, offices, hotels and Airbnbs.",

  city: "Uganda",
  location: "Uganda",
  email: "info@example.com",
  /** First number is the main one (big call-to-action spots); all are listed in the footer and menu. */
  phones: [
    { display: "0706 911 848", href: "tel:+256706911848" },
    { display: "0781 412 819", href: "tel:+256781412819" },
  ],
  hours: ["Call or DM us for", "site visits & quotes"],
  /** One-line hours for the footer. */
  hoursShort: "Call for site visits & quotes",

  /** Leave a link "" to hide it everywhere. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    tiktok: "https://www.tiktok.com/@uptowninteriors0",
    whatsapp: "",
  },
  /** Which networks show as icons (contact page, light footer) and as text (menu, dark footer), in order. */
  socialIcons: ["tiktok"],
  socialText: ["tiktok"],

  /** Brand colours (written into CSS variables by app/layout.tsx). Black from the logo, bronze from their wood finishes. */
  colors: {
    /** Main colour: dark sections, filled buttons, active chips, footer. */
    brand: "#161616",
    /** Accent on light backgrounds: highlighted words, link hover, cursor, focus. */
    accent: "#8A6436",
    /** Highlight underline on light backgrounds. */
    tint: "#EFE3D0",
    soft: "#C9A77A",
    /** Accent / tint / soft on the dark theme. */
    dark: { accent: "#D2AE78", tint: "#4A3A24", soft: "#8F7350" },
    /** Active nav link while the header sits over a hero photo. */
    onPhoto: "#E8CFA6",
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
