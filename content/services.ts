import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Wall Moulding & Panels", body: "Moulded and slatted wall finishes that give plain rooms depth, warmth and style." },
  { src: pexels(1643383), title: "Gypsum Ceilings", body: "Gypsum ceilings with LED lines and spotlights, designed for each room." },
  { src: pexels(1080721), title: "Kitchens & Fitted Furniture", body: "Kitchens, TV units and wardrobes made to measure and fitted by our team." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Wall Moulding", "Gypsum Ceilings", "Kitchens", "Wall Panels", "TV Units", "Bedrooms"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Walls", tint: "#E3E6DC", title: "Walls that finish the room", body: "Moulding and panels that turn bare walls into a feature.", items: ["Wall Moulding", "Slatted Wall Panels", "Feature Walls", "Paint & Finishes"] },
  { tag: "Ceilings", tint: "#DCE4E8", title: "Gypsum ceilings with lighting built in", body: "Clean lines, LED strips and spotlights planned with each room.", items: ["Gypsum Ceilings", "LED Strip Lighting", "Spotlights", "Bulkheads & Cornices"] },
  { tag: "Fitted Furniture", tint: "#EBDDE0", title: "Kitchens, units and bedrooms made to measure", body: "Built and fitted by our team to suit the space exactly.", items: ["Kitchens", "TV Units", "Wardrobes", "Bedroom Furniture"] },
];

export const accordionA = [
  { q: "Wall Moulding", a: "Classic and modern moulding that adds detail and depth to living rooms, bedrooms and halls." },
  { q: "Wall Panels", a: "Slatted and textured panels for feature walls, TV walls and headboards." },
  { q: "Gypsum Ceilings", a: "Gypsum ceilings with concealed LED lines and spotlights, designed for each room." },
  { q: "Lighting", a: "LED strips, spotlights and under-cabinet lighting planned together with the ceiling and furniture." },
];

export const accordionB = [
  { q: "Kitchens", a: "Cabinets, worktops and lighting made to measure and fitted by our own team." },
  { q: "TV Units", a: "TV units and wall storage built around your screen and your space." },
  { q: "Wardrobes & Bedrooms", a: "Fitted wardrobes and bedroom furniture that make the most of every corner." },
  { q: "Visit Us", a: "Find us at Masterwood Plaza, level 3, shop B09 in Ndeeba — or WhatsApp us and we will come to you." },
];
