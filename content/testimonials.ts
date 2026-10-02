import { pexels } from "./site";

export type Testimonial = { text: string; name: string; role: string; avatar: string };

export const testimonials: Testimonial[] = [
  { text: "They understood how we live before we did. The house finally feels like ours — calm, warm and easy to be in.", name: "Amara Osei", role: "Homeowner · Lagos", avatar: pexels(2379004, 300) },
  { text: "Our studio went from cramped to generous without losing a square metre. Clients notice it the moment they walk in.", name: "Daniel Reyes", role: "Founder · Atelier Reyes", avatar: pexels(774909, 300) },
  { text: "Clear process, honest budgets and a finish that exceeded the renders. We would hire them again tomorrow.", name: "Lena Fischer", role: "Director · Fischer & Co", avatar: pexels(1222271, 300) },
  { text: "Every piece has a reason to be there. Nothing feels staged, everything feels considered.", name: "Kofi Mensah", role: "Homeowner · Accra", avatar: pexels(1681010, 300) },
  { text: "From the first sketch to the last cushion, they handled it all. Stress-free in the best way.", name: "Sofia Marin", role: "Restaurateur · Casa Marin", avatar: pexels(733872, 300) },
];
