import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Interior Design & Fit-outs", body: "Homes, offices and hotels designed and finished end to end — layout, lighting and every surface." },
  { src: pexels(1643383), title: "Airbnb Setup & Styling", body: "Short-stay apartments furnished and styled to photograph well and book often." },
  { src: pexels(1080721), title: "Wardrobes & Kitchens", body: "Made-to-measure wardrobes, cabinets and kitchens built for the room they live in." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Wardrobes", "Kitchens", "Gypsum Ceilings", "Airbnb Setups", "Offices & Hotels", "Construction"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Homes & Airbnbs", tint: "#E3E6DC", title: "Homes and short stays people love to come back to", body: "Full interiors for family homes and Airbnb units — planned, furnished and styled.", items: ["Interior Design", "Airbnb Setup", "Furniture & Décor", "Before & After Makeovers"] },
  { tag: "Cabinetry & Kitchens", tint: "#DCE4E8", title: "Wardrobes, cabinets and kitchens made to measure", body: "Storage and joinery built to fit the space exactly, with integrated lighting.", items: ["Fitted Wardrobes", "Kitchen Cabinets", "Kitchen Tiles", "TV & Display Units"] },
  { tag: "Construction & Finishing", tint: "#EBDDE0", title: "Construction and finishes for homes, offices and hotels", body: "From structural work to the final coat — one team on site from start to handover.", items: ["Construction", "Gypsum Ceilings & Lighting", "Office & Hotel Fit-outs", "Painting & Finishes"] },
];

export const accordionA = [
  { q: "Interior Design", a: "Layouts, materials, lighting and furniture planned together, so homes, offices and hotels feel finished and work well every day." },
  { q: "Airbnb Setup", a: "We furnish and style short-stay units for comfort, durability and great listing photos — ready for guests from day one." },
  { q: "Wardrobes & Cabinets", a: "Fitted wardrobes and cabinets made to measure, with integrated lighting and finishes chosen to match the room." },
  { q: "Kitchens", a: "Cabinets, worktops and tiles planned around how you cook and store, then built and fitted by our own team." },
];

export const accordionB = [
  { q: "Construction", a: "Building and structural work handled by the same team that designs the interior, so nothing gets lost between trades." },
  { q: "Ceilings & Lighting", a: "Gypsum ceilings with concealed LED lines, spotlights and statement fittings, planned with the room from the start." },
  { q: "Office & Hotel Fit-outs", a: "Workspaces, lobbies and rooms finished to a hospitality standard and built to take daily use." },
  { q: "Site Visits & Quotes", a: "We visit the space, listen to what you need and send an itemised quote before any work begins." },
];
