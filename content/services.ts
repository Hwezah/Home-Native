import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Luxury Interior Design", body: "Elegant homes and spaces designed down to the last detail — layout, lighting, colour and finish." },
  { src: pexels(1643383), title: "House Transformations", body: "Old houses and tired rooms turned into bright, modern spaces you will love coming home to." },
  { src: pexels(1080721), title: "Home Décor & Deliveries", body: "Mirrors, vases, wall art and statement furniture — chosen with you and delivered to your door." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Luxury Interiors", "House Transformations", "Ceilings & Lighting", "Dining Sets", "Mirrors & Décor", "Deliveries"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Interior Design", tint: "#E3E6DC", title: "Luxurious interiors planned around you", body: "Full-room and full-house design with a polished, high-end finish.", items: ["Living & Dining Rooms", "Bedrooms", "Offices & Shops", "Colour & Finishes"] },
  { tag: "Transformations", tint: "#DCE4E8", title: "Old spaces made new again", body: "Before-and-after makeovers that change how a home looks and feels.", items: ["House Transformations", "Ceilings & Lighting", "Curtains & Windows", "Wall Features"] },
  { tag: "Home Décor", tint: "#EBDDE0", title: "Statement pieces, delivered", body: "Furniture and décor chosen to complete the room — and brought to you.", items: ["Dining Sets & Sofas", "Mirrors & Wall Art", "Vases & Accessories", "Deliveries"] },
];

export const accordionA = [
  { q: "Interior Design", a: "We plan the whole room — layout, colours, lighting, furniture and finishing pieces — for a luxurious look that still works every day." },
  { q: "House Transformations", a: "From old and tired to bright and modern: we rework rooms and whole houses, then style them to finish." },
  { q: "Ceilings & Lighting", a: "Ceilings with concealed lighting, spotlights and chandeliers that make every room feel grand, day and night." },
  { q: "Curtains & Windows", a: "Curtains and window styling in fabrics and colours chosen to match the rest of the room." },
];

export const accordionB = [
  { q: "Furniture", a: "Dining sets, sofas and statement pieces selected to fit your space and your style." },
  { q: "Mirrors & Décor", a: "Mirrors, vases, wall art and accessories — the finishing touches that make a room feel complete." },
  { q: "Deliveries", a: "Order décor and furniture with us and we deliver it. Call or WhatsApp to arrange." },
  { q: "Site Visits & Quotes", a: "We visit the space, listen to what you want and send a clear quote before any work begins." },
];
