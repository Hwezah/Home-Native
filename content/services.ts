import { pexels } from "./site";

/** Homepage service cards */
export const serviceCards = [
  { src: pexels(1571463), title: "Interior Styling & Customization", body: "Layered textures, curated pieces and a finish that feels personal." },
  { src: pexels(1643383), title: "Renovation & Remodeling", body: "Reworking layouts and surfaces so the space fits the way you live." },
  { src: pexels(1080721), title: "Furniture & Custom Pieces", body: "Made-to-measure furniture designed for the room it lives in." },
];

export const reasons = [
  { icon: "gem", title: "Lasting Quality", body: "Timeless spaces built to inspire and stand the test of time." },
  { icon: "eye", title: "Attention to Detail", body: "From concept to finish, precision and care in every element." },
  { icon: "pen", title: "Tailored Design", body: "Every project reflects your lifestyle, taste and needs." },
  { icon: "layers", title: "End-to-End Service", body: "With you through the whole process — planning to execution." },
] as const;

export const marquee = ["Interior Styling", "Renovation", "Custom Furniture", "Space Planning", "Lighting Design", "Commercial Interiors"];

/** Services page columns */
export const serviceColumns = [
  { tag: "Concept & Planning", tint: "#E3E6DC", title: "Space planning for the way you actually live", body: "Layouts that make room for comfort, flow and everyday routines.", items: ["Space Planning", "Colour Consultation", "Furniture Selection", "3D Visualisation"] },
  { tag: "Light & Detail", tint: "#DCE4E8", title: "Lighting and detail that set the mood", body: "Layered light and finishing touches that change how a room feels.", items: ["Lighting Design", "Décor & Accessories", "Art Placement", "Custom Joinery"] },
  { tag: "Materials", tint: "#EBDDE0", title: "Natural materials for healthier interiors", body: "Honest, durable finishes chosen to age well and feel good to live with.", items: ["Material Sourcing", "Wall Treatments", "Flooring", "Window Styling"] },
];

export const accordionA = [
  { q: "Space Planning", a: "We plan layouts that make the most of every square metre — smooth movement, balanced proportions and practical storage, so the room works as well as it looks." },
  { q: "Colour Consultation", a: "A palette built around your light, your materials and your mood. We test samples in situ and give you a clear schedule for every wall and surface." },
  { q: "Furniture Selection", a: "We source, specify and arrange pieces at the right scale — mixing new, vintage and what you already own." },
  { q: "Lighting Design", a: "Layered ambient, task and accent lighting that shifts with the day and makes the space feel warm after dark." },
];

export const accordionB = [
  { q: "Project Management", a: "One point of contact from first sketch to handover. We coordinate trades, timelines and budgets so you do not have to." },
  { q: "Custom Joinery", a: "Made-to-measure storage, shelving and built-ins designed for the room they live in and crafted by local makers." },
  { q: "Styling & Art", a: "The final layer — textiles, objects and art curated to make the space feel lived-in from day one." },
  { q: "Aftercare", a: "We check in after you move in and help with tweaks, additions and seasonal refreshes." },
];
