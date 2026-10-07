import { pexels } from "./site";

export type Category = "Residential" | "Commercial" | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  cover: string;
  intro: string;
  client: string;
  date: string;
  location: string;
  scope: string;
  hero: string;
  palette: { name: string; hex: string }[];
  sections: { eyebrow: string; title: string; highlight: string; body: string; image: string }[];
  gallery: string[];
};

const defaultPalette = [
  { name: "Limewash", hex: "#E9E2D6" },
  { name: "Oat", hex: "#D8C9B0" },
  { name: "Sage", hex: "#A9B59A" },
  { name: "Walnut", hex: "#6B4F3A" },
];

type Seed = Pick<Project, "slug" | "title" | "category" | "intro" | "client" | "date" | "location" | "scope"> & {
  cover: number;
  hero: number;
  paletteBody: string;
  materialsBody: string;
  images: [number, number, number, number, number];
  palette?: Project["palette"];
};

const seeds: Seed[] = [
  {
    slug: "linen-house", title: "Linen House", category: "Residential", cover: 1571460, hero: 1571460,
    intro: "A 1970s family home opened up and softened — limewashed walls, oak floors and linen throughout, built around a big kitchen table where everything happens.",
    client: "The Kamau Family", date: "Jun 2026", location: "Kenya", scope: "Full renovation",
    paletteBody: "Warm limewash and oat tones form the base, grounded by walnut and lifted with soft sage. Nothing shouts — the palette lets daylight, texture and the family's own things carry the room.",
    materialsBody: "Solid oak, honed stone and heavy linen were chosen to age gracefully. A new opening between kitchen and living room brings light deep into the plan, while built-in joinery keeps everyday clutter out of sight.",
    images: [1643384, 1648776, 1571468, 2062426, 1080721],
  },
  {
    slug: "oak-and-clay-loft", title: "Oak & Clay Loft", category: "Renovation", cover: 2062426, hero: 2062426,
    intro: "An old storage loft reworked into a warm two-bedroom home, with clay plaster walls, exposed beams and a kitchen built from reclaimed oak.",
    client: "Private client", date: "Apr 2026", location: "Kenya", scope: "Renovation & joinery",
    paletteBody: "Earthy clay and terracotta give the loft its warmth, balanced by pale oak and a quiet stone grey that keeps the big volume calm.",
    materialsBody: "Hand-applied clay plaster, reclaimed oak and blackened steel. Each surface was chosen to soften the acoustics of a tall, open space.",
    images: [1648776, 1571463, 2062426, 1643383, 1080696],
    palette: [{ name: "Clay", hex: "#C9A889" }, { name: "Terracotta", hex: "#B5714F" }, { name: "Oak", hex: "#D8C3A0" }, { name: "Stone", hex: "#8D8A82" }],
  },
  {
    slug: "kiln-cafe", title: "Kiln Café", category: "Commercial", cover: 380768, hero: 380768,
    intro: "A neighbourhood café and workspace built around a long communal table, with daylight, plants and a counter that doubles as a stage for local ceramics.",
    client: "Kiln Coffee Co.", date: "Feb 2026", location: "Kenya", scope: "Commercial fit-out",
    paletteBody: "Glazed greens and kiln-fired neutrals echo the ceramics on sale, with dark timber grounding the busy counter area.",
    materialsBody: "Glazed tile, ash timber and terrazzo were picked for durability under heavy daily use, while soft textiles keep the room comfortable to linger in.",
    images: [1080721, 1457842, 380768, 1571467, 1909791],
    palette: [{ name: "Glaze", hex: "#7E9A84" }, { name: "Bisque", hex: "#E6D7C3" }, { name: "Ash", hex: "#C2B49C" }, { name: "Char", hex: "#3E3A35" }],
  },
  {
    slug: "harbour-apartment", title: "Harbour Apartment", category: "Residential", cover: 1643384, hero: 1643384,
    intro: "A compact lakeside apartment made to feel twice its size with low furniture, one confident rug and storage that disappears into the walls.",
    client: "Ms. Achieng", date: "Dec 2025", location: "Kenya", scope: "Interior design & styling",
    paletteBody: "Soft whites and misty blues borrow from the view, with a single walnut accent to keep it warm after dark.",
    materialsBody: "Matte lacquer joinery, wool rugs and linen curtains hung high and wide to stretch every window.",
    images: [1571460, 1080696, 1643384, 1571468, 2724749],
    palette: [{ name: "Chalk", hex: "#EEEBE4" }, { name: "Mist", hex: "#B9C6CC" }, { name: "Lake", hex: "#7D97A3" }, { name: "Walnut", hex: "#6B4F3A" }],
  },
  {
    slug: "stone-cottage", title: "Stone Cottage", category: "Renovation", cover: 1648776, hero: 1648776,
    intro: "A weekend cottage brought back to life — original stone kept, a new garden room added and a kitchen designed around the hearth.",
    client: "The Ssali Family", date: "Oct 2025", location: "Kenya", scope: "Renovation & extension",
    paletteBody: "Stone greys and moss greens tie the house to its garden, warmed by honey-toned timber.",
    materialsBody: "Reclaimed stone, lime render and oiled iroko. Every addition was detailed to sit quietly beside the old walls.",
    images: [1571463, 1643383, 1648776, 1080721, 1571460],
    palette: [{ name: "Stone", hex: "#B4AFA6" }, { name: "Moss", hex: "#7C8A6A" }, { name: "Honey", hex: "#C99F64" }, { name: "Soot", hex: "#3F3C38" }],
  },
  {
    slug: "atelier-reyes", title: "Atelier Reyes", category: "Commercial", cover: 1080721, hero: 1080721,
    intro: "A design studio that went from cramped to generous without losing a square metre, with flexible worktables and a gallery wall for client presentations.",
    client: "Atelier Reyes", date: "Aug 2025", location: "Kenya", scope: "Workplace design",
    paletteBody: "Gallery white with sand and charcoal keeps attention on the work, with sage plants softening the edges.",
    materialsBody: "Birch ply, cork pinboard walls and acoustic felt make the studio quiet and adaptable.",
    images: [2724749, 1571467, 1080721, 1457842, 1648776],
  },
  {
    slug: "juniper-flat", title: "Juniper Flat", category: "Residential", cover: 1571468, hero: 1571468,
    intro: "A first home for a young family — bright, practical and full of hidden storage, with a nursery that will grow with the child.",
    client: "The Nankya Family", date: "May 2025", location: "Kenya", scope: "Interior design",
    paletteBody: "Juniper green and soft oat create a calm backdrop that stays fresh as toys and books take over.",
    materialsBody: "Wipeable limewash, solid oak and washable linen — beautiful, but built for real family life.",
    images: [1643384, 2062426, 1571468, 1909791, 1571463],
    palette: [{ name: "Oat", hex: "#D8C9B0" }, { name: "Juniper", hex: "#5F7A64" }, { name: "Sage", hex: "#A9B59A" }, { name: "Linen", hex: "#EFE9DF" }],
  },
  {
    slug: "willow-studio", title: "Willow Studio", category: "Commercial", cover: 2724749, hero: 2724749,
    intro: "A boutique yoga and wellness studio designed for calm — curved walls, filtered light and changing rooms that feel like a spa.",
    client: "Willow Wellness", date: "Mar 2025", location: "Kenya", scope: "Commercial fit-out",
    paletteBody: "Willow green, blush plaster and pale timber keep the space soft and restorative.",
    materialsBody: "Tadelakt plaster, cork flooring and woven screens. Every material is warm to the touch and quiet underfoot.",
    images: [1457842, 1571460, 2724749, 1080696, 1643383],
    palette: [{ name: "Willow", hex: "#A3B18F" }, { name: "Blush", hex: "#E3CFC4" }, { name: "Birch", hex: "#E1D4BD" }, { name: "Bark", hex: "#5E4B3C" }],
  },
];

export const projects: Project[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  cover: pexels(s.cover, 1200),
  intro: s.intro,
  client: s.client,
  date: s.date,
  location: s.location,
  scope: s.scope,
  hero: pexels(s.hero),
  palette: s.palette ?? defaultPalette,
  sections: [
    { eyebrow: "We started with", title: "Colour", highlight: "Palette", body: s.paletteBody, image: pexels(s.images[0]) },
    { eyebrow: "Materials", title: "Natural", highlight: "Textures", body: s.materialsBody, image: pexels(s.images[1]) },
  ],
  gallery: s.images.slice(2).map((id) => pexels(id)),
}));

export const projectCategories = ["All", "Residential", "Commercial", "Renovation"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Previous / next wrap around the list, as in the design (Linen House → prev Willow Studio). */
export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}

/** Homepage slider: 5 featured projects */
export const featuredProjects = ["linen-house", "oak-and-clay-loft", "harbour-apartment", "kiln-cafe", "stone-cottage"].map(
  (slug) => projects.find((p) => p.slug === slug)!,
);
