import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "TV Walls & Display Units", body: "Feature walls with built-in lighting, marble-look panels and shelving made to measure." },
  { src: pexels(1643383), title: "Ceilings & Lighting", body: "Gypsum ceilings with LED lines and spotlights — even sky-print ceilings — that set the mood." },
  { src: pexels(1080721), title: "Wardrobes, Beds & Kitchens", body: "Fitted wardrobes, upholstered beds and kitchens built for the room they live in." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["TV Walls", "Ceilings & Lighting", "Wall Panels", "Wardrobes", "Kitchens", "Exterior Design"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Walls & Units", tint: "#E3E6DC", title: "Feature walls that become the heart of the room", body: "TV walls, display shelving and wall panels with lighting built in.", items: ["TV Walls", "Display & Shelving Units", "Slatted Wall Panels", "Marble-look Finishes"] },
  { tag: "Ceilings & Light", tint: "#DCE4E8", title: "Ceilings and lighting that set the mood", body: "Gypsum work and LED lighting planned together, room by room.", items: ["Gypsum Ceilings", "LED Strip Lighting", "Sky-print Ceilings", "Chandeliers & Pendants"] },
  { tag: "Rooms & Exteriors", tint: "#EBDDE0", title: "Bedrooms, kitchens and exteriors, finished", body: "Fitted furniture and finishes for every room — and the outside too.", items: ["Fitted Wardrobes", "Beds & Headboards", "Kitchens", "Exterior Design"] },
];

export const accordionA = [
  { q: "TV Walls", a: "Feature walls with hidden cabling, built-in LED lighting and marble-look or slatted finishes, designed around your screen and space." },
  { q: "Display & Shelving Units", a: "Made-to-measure shelving with integrated lighting to show off what you love and keep the rest out of sight." },
  { q: "Ceilings & Lighting", a: "Gypsum ceilings with concealed LED lines, spotlights and statement fittings — including sky-print ceilings." },
  { q: "Wall Panels", a: "Slatted and textured wall panels that add warmth and depth to living rooms, bedrooms and offices." },
];

export const accordionB = [
  { q: "Wardrobes", a: "Fitted wardrobes with glass or solid doors and inside lighting, built to fit the room exactly." },
  { q: "Beds & Headboards", a: "Upholstered beds and headboards designed with the rest of the bedroom." },
  { q: "Kitchens", a: "Cabinets, worktops and lighting planned around how you cook and store." },
  { q: "Exterior Design", a: "Facades and outdoor finishes that match the care we put into the inside." },
];
