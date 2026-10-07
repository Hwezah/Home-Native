import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Gypsum Ceilings & Lighting", body: "Layered gypsum ceilings with concealed LED lines, spotlights and statement fittings." },
  { src: pexels(1643383), title: "Renovation & Remodelling", body: "Reworking layouts, walls and finishes — inside and out — so the space fits how you live." },
  { src: pexels(1080721), title: "Built-ins & Feature Walls", body: "Made-to-measure shelving, display units and TV walls designed for the room they live in." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Gypsum Ceilings", "Lighting", "TV Walls", "Built-in Units", "Painting", "Exterior Design"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Ceilings & Light", tint: "#E3E6DC", title: "Ceilings and lighting that set the mood", body: "Gypsum work and layered light that change how a room feels, day and night.", items: ["Gypsum Ceilings", "LED Strip Lighting", "Spotlights", "Chandeliers"] },
  { tag: "Walls & Joinery", tint: "#DCE4E8", title: "Feature walls and built-ins made to measure", body: "Display units, shelving and TV walls built to fit the room and the way you use it.", items: ["TV Walls", "Shelving & Display Units", "Wall Panelling", "Custom Joinery"] },
  { tag: "Exterior & Finishing", tint: "#EBDDE0", title: "Exteriors and finishes that last", body: "Durable finishes and careful renovation work, inside and out.", items: ["Exterior Design", "Painting", "Renovations", "Site Supervision"] },
];

export const accordionA = [
  { q: "Gypsum Ceilings", a: "Flat, stepped and coffered gypsum ceilings, with neat recesses for LED lines and spotlights — planned together with the lighting." },
  { q: "Lighting Design", a: "Ambient, task and accent lighting — LED strips, spotlights and chandeliers — placed so every room works after dark." },
  { q: "TV Walls", a: "Feature walls in marble-look, panelled or painted finishes, with hidden cabling and space for consoles and speakers." },
  { q: "Built-in Units", a: "Made-to-measure shelving, display and storage units designed for the room and built by our own team." },
];

export const accordionB = [
  { q: "Project Management", a: "One point of contact from the site visit to handover. We coordinate the work, timeline and budget so you do not have to." },
  { q: "Painting & Finishes", a: "Interior and exterior painting and wall finishes, applied by the same crew that built the space." },
  { q: "Exterior Design", a: "Facades, entrances and outdoor finishes that match the care put into the interior." },
  { q: "Aftercare", a: "We check in after handover and help with touch-ups, additions and changes." },
];
