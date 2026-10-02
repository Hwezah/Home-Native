export const siteUrl = "https://homenative.co";

export const site = {
  name: "Home Native",
  tagline: "interiors",
  company: "A MachineNative company",
  email: "info@homenative.co",
  phone: "0742 696 353",
  phoneHref: "tel:0742696353",
  location: "Kampala, Uganda",
  hours: ["Mon–Fri: 9 AM to 5 PM", "Sun: Closed"],
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    pinterest: "#",
  },
} as const;

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
