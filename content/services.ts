import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Gypsum Ceilings", body: "Stepped and designer gypsum ceilings with LED lines and downlights built in." },
  { src: pexels(1643383), title: "Partitions", body: "Gypsum partitions that divide homes and offices cleanly, finished ready to paint." },
  { src: pexels(1080721), title: "Flooring", body: "Floors laid neatly to match the ceilings and walls above them." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Gypsum Ceilings", "Partitions", "Flooring", "LED Ceiling Lights", "Wall Finishes", "TV Walls"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Ceilings", tint: "#E3E6DC", title: "Gypsum ceilings that light the room", body: "Stepped designs with LED lines and downlights fitted as one.", items: ["Gypsum Ceilings", "Stepped Ceiling Designs", "LED Strip Lines", "Downlights"] },
  { tag: "Walls", tint: "#DCE4E8", title: "Partitions and walls, finished clean", body: "Room dividers, feature walls and textures that complete the space.", items: ["Gypsum Partitions", "TV & Feature Walls", "Wall Textures", "Wall Shelving"] },
  { tag: "Floors", tint: "#EBDDE0", title: "Flooring to match", body: "Floors laid to suit the ceilings and walls above them.", items: ["Floor Installation", "Skirting", "Finishing Works", "Site Visits & Quotes"] },
];

export const accordionA = [
  { q: "Gypsum Ceilings", a: "Flat, stepped and designer gypsum ceilings for homes and offices, fitted and finished by our team." },
  { q: "LED Ceiling Lighting", a: "LED strip lines, light boxes and downlights built into the ceiling as it goes up." },
  { q: "Partitions", a: "Gypsum partitions to divide rooms and offices, finished smooth and ready to paint." },
  { q: "Wall Finishes", a: "Textured walls, TV walls and feature walls that give a room character." },
];

export const accordionB = [
  { q: "Flooring", a: "Floors laid neatly and finished to match the rest of the room." },
  { q: "Wall Shelving & Units", a: "Lit shelves and built-in wall units to show off and store your things." },
  { q: "Homes & Offices", a: "We work on houses, apartments and commercial spaces across Kampala." },
  { q: "Site Visits & Quotes", a: "We visit the site, listen to what you want and send a clear quote before work begins." },
];
