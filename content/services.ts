import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Interior Design", body: "Living rooms, bedrooms and whole homes designed with a polished, lux finish." },
  { src: pexels(1643383), title: "Lux Décor & Lighting", body: "Statement mirrors, lighting and décor pieces that make a room feel complete." },
  { src: pexels(1080721), title: "Custom Upholstery", body: "Sofas, headboards and seating made and customised in our own workshop." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Interior Design", "Lux Décor", "Custom Upholstery", "Lighting & Mirrors", "Bedrooms", "Living Rooms"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Interiors", tint: "#E3E6DC", title: "Rooms designed around the people in them", body: "From living rooms to children's bedrooms, planned for how you actually live.", items: ["Living Rooms", "Bedrooms & Kids' Rooms", "Wardrobes & Storage", "Wall Finishes & Wallpaper"] },
  { tag: "Lux Décor", tint: "#DCE4E8", title: "The finishing touches that make it feel luxe", body: "Lighting, mirrors and décor chosen to complete each room.", items: ["Lit Mirrors & Vanities", "Ceiling & Accent Lighting", "Rugs & Soft Furnishings", "Décor Styling"] },
  { tag: "Upholstery", tint: "#EBDDE0", title: "Made locally, in our own workshop", body: "Seating and headboards made to fit your room, your fabric and your style.", items: ["Custom Sofas", "Headboards", "Accent Chairs", "Re-upholstery"] },
];

export const accordionA = [
  { q: "Interior Design", a: "We plan the whole room — layout, colour, lighting, furniture and décor — so it looks luxe and works every day." },
  { q: "Bedrooms & Kids' Rooms", a: "Calm main bedrooms and fun, practical rooms for children, with storage that keeps them tidy." },
  { q: "Lighting & Mirrors", a: "Lit mirrors, vanities and layered lighting that change how a room feels, day and night." },
  { q: "Lux Décor", a: "Rugs, soft furnishings and statement pieces chosen to finish each space." },
];

export const accordionB = [
  { q: "Custom Upholstery", a: "Sofas, headboards and chairs made and customised in our own workshop, in the fabric you choose." },
  { q: "Project Management", a: "We coordinate the trades on site — from plumbing to finishing — so you have one point of contact." },
  { q: "Projects Across Uganda", a: "We take on projects in different towns, including Jinja." },
  { q: "Site Visits & Quotes", a: "We visit the space, listen to what you want and send a clear quote before work begins." },
];
