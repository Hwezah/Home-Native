import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Kitchens", body: "Modern kitchens with integrated lighting, smart storage and worktops built to last." },
  { src: pexels(1643383), title: "Full House Interiors", body: "Whole homes designed and finished room by room — from the ceilings to the last cabinet." },
  { src: pexels(1080721), title: "Bedrooms & Display Units", body: "Statement beds, headboards and glass display cabinets made for the space they live in." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Kitchens", "Full House Projects", "Ceilings & Lighting", "Display Cabinets", "Bedrooms", "Exteriors"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Kitchens", tint: "#E3E6DC", title: "Kitchens planned around how you cook", body: "Cabinets, worktops, appliances and lighting designed as one.", items: ["Kitchen Cabinets", "Islands & Worktops", "Built-in Appliances", "Under-cabinet Lighting"] },
  { tag: "Full House", tint: "#DCE4E8", title: "Whole homes, finished room by room", body: "Living rooms, bedrooms and every space in between — one team, one finish.", items: ["Living Rooms", "Bedrooms & Headboards", "Ceilings & Lighting", "Wall Finishes"] },
  { tag: "Storage & Display", tint: "#EBDDE0", title: "Storage that looks as good as it works", body: "Wardrobes, display cabinets and units made to measure.", items: ["Glass Display Cabinets", "Wardrobes", "TV & Wall Units", "Exterior Finishing"] },
];

export const accordionA = [
  { q: "Kitchens", a: "Full kitchens planned around how you cook and store — cabinets, worktops, islands, built-in appliances and lighting." },
  { q: "Full House Interiors", a: "We take on whole houses and finish them room by room, so every space feels part of the same home." },
  { q: "Ceilings & Lighting", a: "Gypsum ceilings with concealed LED lines, spotlights and pendants placed for each room." },
  { q: "Bedrooms", a: "Upholstered beds, statement headboards and bedside units designed with the rest of the room." },
];

export const accordionB = [
  { q: "Display Cabinets", a: "Glass display cabinets with inside lighting to show off what you love." },
  { q: "Wardrobes & Units", a: "Fitted wardrobes, TV units and storage made to measure for your space." },
  { q: "Exterior Finishing", a: "Outside finishes that match the care we put into the interior." },
  { q: "Visit Our Showroom", a: "See finishes and samples at Masterwood Plaza in Ndeeba, or call and we will come to you." },
];
