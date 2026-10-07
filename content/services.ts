import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Smart Kitchens", body: "Modern kitchens with glass cabinets, built-in hobs, islands and lighting — designed and fitted by us." },
  { src: pexels(1643383), title: "Construction", body: "From the foundation up — we build, then finish the inside to the same standard." },
  { src: pexels(1080721), title: "Cable-less Interiors", body: "Walls, TVs and lights with every cable hidden, for a clean, finished look." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Smart Kitchens", "Construction", "Cable-less Walls", "Kitchen Islands", "Wall Lighting", "Full Interiors"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Kitchens", tint: "#E3E6DC", title: "Smart kitchens, built to work hard", body: "Cabinets, worktops, appliances and lighting planned as one.", items: ["Kitchen Cabinets", "Glass-front Wall Units", "Built-in Hobs & Ovens", "Kitchen Islands"] },
  { tag: "Construction", tint: "#DCE4E8", title: "From construction to the final finish", body: "We build the shell and finish the inside — one team, start to end.", items: ["New Builds", "Renovations", "Site Supervision", "Finishing Works"] },
  { tag: "Interiors", tint: "#EBDDE0", title: "Clean, cable-less interiors", body: "Hidden wiring, wall lights and feature walls for a tidy, modern home.", items: ["Cable-less TV Walls", "Wall & Accent Lighting", "Wall Panelling", "Full Home Interiors"] },
];

export const accordionA = [
  { q: "Smart Kitchens", a: "Full kitchens with glass-front wall units, built-in hobs and ovens, islands and under-cabinet lighting." },
  { q: "Kitchen Islands & Worktops", a: "Islands and worktops sized for how you cook, gather and store." },
  { q: "Cable-less Walls", a: "TV walls and wall lights with the wiring hidden inside the wall — no cables in sight." },
  { q: "Lighting", a: "Wall lights, LED strips and accent lighting planned with the rest of the room." },
];

export const accordionB = [
  { q: "Construction", a: "We take on building work too, so your home is built and finished by one team." },
  { q: "Renovations", a: "Tired kitchens and rooms reworked and refitted with modern finishes." },
  { q: "Full Interiors", a: "From the kitchen to every room — we do it all." },
  { q: "Site Visits & Quotes", a: "We visit the site, listen to what you want and send a clear quote before work begins." },
];
