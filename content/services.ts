import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "TV Wall Units", body: "Wall units with built-in lighting, shelving and panels — designed around your screen and your space." },
  { src: pexels(1643383), title: "Sofas & Furniture", body: "Sectionals, tufted sofas and statement pieces made to fit your living room." },
  { src: pexels(1080721), title: "Single Rooms & Full Homes", body: "From one single room to the whole house — interior designing of all kinds." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["TV Wall Units", "Sofas", "Single Rooms", "Wall Panels", "LED Lighting", "Full Homes"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Wall Units", tint: "#E3E6DC", title: "TV walls that become the heart of the room", body: "Wall units with storage, panels and lighting built in.", items: ["TV Wall Units", "Wood & Slatted Panels", "Glass Display Shelves", "LED Lighting"] },
  { tag: "Furniture", tint: "#DCE4E8", title: "Sofas made for the way you relax", body: "Sectionals and sofas in the shape, size and fabric you want.", items: ["Sectional Sofas", "Tufted Sofas", "Coffee Tables", "Dining Sets"] },
  { tag: "Rooms", tint: "#EBDDE0", title: "Interior designing of all kinds", body: "One single room or a whole home — planned, furnished and finished.", items: ["Single Rooms", "Living Rooms", "Bedrooms", "Full Home Interiors"] },
];

export const accordionA = [
  { q: "TV Wall Units", a: "Wall units with hidden cabling, LED lighting, shelving and panels, designed around your screen." },
  { q: "Wall Panels", a: "Wood and slatted wall panels that add warmth and depth behind the TV and around the room." },
  { q: "Lighting", a: "LED strips and wall lights built into units and walls to set the mood at night." },
  { q: "Single Rooms", a: "Single rooms furnished and styled to feel bigger, brighter and ready to live in." },
];

export const accordionB = [
  { q: "Sofas", a: "Sectional and tufted sofas made in the size, shape and colour you choose." },
  { q: "Living Rooms & Bedrooms", a: "Furniture, wall units and décor planned together so each room feels complete." },
  { q: "Full Home Interiors", a: "Interior designing of all kinds — from one room to the whole house." },
  { q: "Visit or WhatsApp Us", a: "We are in Ndejje, Namasuba. WhatsApp 0756 281 269 or call 0761 189 945." },
];
