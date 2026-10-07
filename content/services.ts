import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Interior Styling", body: "Bedrooms, living rooms and apartments styled from bare walls to fully furnished." },
  { src: pexels(1643383), title: "Furniture", body: "Sofas, TV consoles, beds and statement pieces — like our bubble sectional — to fit your space." },
  { src: pexels(1080721), title: "Décor & Finishing", body: "Mirrors, curtains, lighting and the small touches that make a room feel complete." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Interiors", "Furniture", "Décor", "Bedrooms", "Studio Apartments", "Outdoor Spaces"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Interiors", tint: "#E3E6DC", title: "Rooms styled from bare to beautiful", body: "Bedrooms, living rooms and whole apartments, furnished and finished.", items: ["Bedrooms", "Living Rooms", "Studio & Double Rooms", "Curtains & Soft Furnishings"] },
  { tag: "Furniture", tint: "#DCE4E8", title: "Furniture chosen for the room it lives in", body: "Comfortable, good-looking pieces sized for your space.", items: ["Sofas & Sectionals", "TV Consoles", "Beds & Wardrobes", "Dining & Coffee Tables"] },
  { tag: "Décor & Outdoor", tint: "#EBDDE0", title: "Finishing touches, inside and out", body: "Mirrors, lighting and décor — and outdoor spaces too.", items: ["Dressing Mirrors", "Lighting & Chandeliers", "Artificial Grass", "Garden Lighting"] },
];

export const accordionA = [
  { q: "Bedrooms", a: "Beds, wardrobes, curtains and bedding chosen together for a calm, finished bedroom." },
  { q: "Living Rooms", a: "Sofas, TV consoles, rugs and décor arranged so the room is comfortable and looks great." },
  { q: "Studio & Double Rooms", a: "Small apartments furnished to make the most of every metre — ideal for living or renting out." },
  { q: "Curtains & Soft Furnishings", a: "Curtains, cushions and throws in colours and fabrics picked for each room." },
];

export const accordionB = [
  { q: "Furniture", a: "Sofas and sectionals, beds, consoles and tables selected to fit your space and style." },
  { q: "Mirrors & Lighting", a: "Dressing mirrors, chandeliers and lamps that add light and polish." },
  { q: "Outdoor Spaces", a: "Artificial grass installation and garden lighting for compounds and terraces." },
  { q: "Site Visits & Quotes", a: "We visit the space, listen to what you want and send a clear quote before work begins." },
];
