import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "TV Walls & Wall Panels", body: "Slatted panels, marble-look boards and built-in units that turn a wall into the centre of the room." },
  { src: pexels(1643383), title: "Ceilings & Lighting", body: "Gypsum ceilings with concealed lighting and statement chandeliers." },
  { src: pexels(1080721), title: "Carpets & Wardrobes", body: "Wall-to-wall carpet and fitted wardrobes that finish every bedroom." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["TV Walls", "Wall Panels", "Gypsum Ceilings", "Wall-to-wall Carpet", "Wardrobes", "Renovations"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Walls", tint: "#E3E6DC", title: "Feature walls that finish the room", body: "TV walls and panels with storage and lighting built in.", items: ["TV Wall Units", "Slatted Wall Panels", "Marble-look Boards", "Shelving & Display"] },
  { tag: "Ceilings & Floors", tint: "#DCE4E8", title: "Ceilings and floors, done properly", body: "Gypsum ceilings with lighting, and carpet laid wall to wall.", items: ["Gypsum Ceilings", "Concealed Lighting", "Chandeliers", "Wall-to-wall Carpet"] },
  { tag: "Renovations", tint: "#EBDDE0", title: "We create, update and renovate", body: "From new homes to tired rooms that need a fresh finish.", items: ["Fitted Wardrobes", "Room Makeovers", "Full Renovations", "Finishing Works"] },
];

export const accordionA = [
  { q: "TV Walls", a: "TV wall units with slatted panels, marble-look boards, shelving and lighting, built around your screen." },
  { q: "Wall Panels", a: "Slatted and textured wall panels that add warmth and depth to living rooms and bedrooms." },
  { q: "Gypsum Ceilings", a: "Gypsum ceilings with concealed lighting, designed together with your chandeliers and spotlights." },
  { q: "Wall-to-wall Carpet", a: "Carpet measured, cut and laid wall to wall for a soft, finished floor." },
];

export const accordionB = [
  { q: "Fitted Wardrobes", a: "Floor-to-ceiling wardrobes made to fit the room exactly, with lighting and storage inside." },
  { q: "Renovations", a: "We update tired rooms and renovate whole homes — one team from start to finish." },
  { q: "Orders & Enquiries", a: "Call or WhatsApp us on 0741 172 522 to order or ask about a project." },
  { q: "Visit Us", a: "Find us at Laxmi Plaza along Biashara Street." },
];
