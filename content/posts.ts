import { pexels } from "./site";

export type PostCategory = "Ideas" | "Materials" | "Studio" | "Insights";

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; by: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  readTime: string;
  excerpt: string;
  image: string;
  tags: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "small-living-room-feel-generous",
    title: "Five ways to make a small living room feel generous",
    date: "Sep 18, 2026",
    category: "Ideas",
    readTime: "5 min read",
    excerpt: "Mirrors, low furniture and one confident rug — small moves that make a compact room feel twice the size.",
    image: pexels(1080696, 1800),
    tags: ["Small spaces", "Living room", "Lighting"],
    body: [
      { type: "lead", text: "A small living room does not need to feel small. With a few deliberate choices you can make it calmer, brighter and far more useful — without knocking down a single wall." },
      { type: "p", text: "Most compact rooms feel cramped because of what is in them, not their size. Too many pieces, furniture pushed against every wall and competing colours all shrink a space. Start by editing: keep what you use and love, and let everything else go." },
      { type: "h3", text: "1. Go low and leggy" },
      { type: "p", text: "Sofas and storage raised on slim legs let you see the floor beneath them, and the eye reads that as more space. Keep furniture below the window line so daylight travels across the room." },
      { type: "h3", text: "2. One confident rug" },
      { type: "p", text: "A rug large enough for the front legs of every seat ties the room together. Several small rugs do the opposite — they chop the floor into pieces." },
      { type: "image", src: pexels(1571468), alt: "Bright living room with a large rug and low sofa" },
      { type: "h3", text: "3. Our quick checklist" },
      { type: "list", items: ["Hang curtains high and wide to stretch the window.", "Use a mirror opposite the main light source.", "Choose one palette and repeat it across textiles.", "Swap a bulky coffee table for two nesting tables.", "Light the corners — dark corners pull walls inward."] },
      { type: "quote", text: "Space is not about square metres. It is about how freely you can move and breathe in a room.", by: "Grace Wanjiru, Interior Architect" },
      { type: "h3", text: "4. Built-ins over freestanding" },
      { type: "p", text: "Joinery that runs wall to wall — or floor to ceiling — holds far more than separate pieces and reads as architecture rather than furniture." },
      { type: "h3", text: "5. Layer your lighting" },
      { type: "p", text: "A single ceiling light flattens a room. Add a floor lamp, a table lamp and something low and warm, and the room gains depth after dark." },
    ],
  },
  {
    slug: "why-natural-oak-never-goes-out-of-style",
    title: "Why natural oak never goes out of style",
    date: "Aug 30, 2026",
    category: "Materials",
    readTime: "4 min read",
    excerpt: "Oak is warm, durable and gets better with age. Here is how we use it from floors to joinery.",
    image: pexels(1909791, 1800),
    tags: ["Materials", "Oak", "Joinery"],
    body: [
      { type: "lead", text: "Few materials earn their place in a home the way oak does. It is warm underfoot, honest to the touch and only grows more beautiful as it is used." },
      { type: "p", text: "We specify oak more than any other timber because it works almost everywhere — floors, worktops, stair treads, wardrobes and the smallest shelf." },
      { type: "h3", text: "Choosing the right finish" },
      { type: "p", text: "Oiled oak can be repaired in patches and develops a soft sheen. Lacquered oak is tougher against spills but harder to touch up. For family kitchens we usually recommend a hard-wax oil." },
      { type: "image", src: pexels(2062426), alt: "Oak kitchen joinery" },
      { type: "list", items: ["Rift-sawn boards stay straighter in humid climates.", "Wider planks feel calmer and more generous.", "Pair oak with limewash and linen for a soft, natural palette."] },
      { type: "quote", text: "Good materials do half the design work for you.", by: "Brian Otieno, Founder & Lead Designer" },
      { type: "p", text: "Looked after well, an oak floor will outlast every trend that passes over it." },
    ],
  },
  {
    slug: "inside-our-renovation-of-a-1960s-family-home",
    title: "Inside our renovation of a 1960s family home",
    date: "Aug 12, 2026",
    category: "Studio",
    readTime: "6 min read",
    excerpt: "A walk through Linen House, from the first measured survey to the last cushion.",
    image: pexels(2724749, 1800),
    tags: ["Renovation", "Case study", "Family home"],
    body: [
      { type: "lead", text: "Linen House began with a simple brief: make a dark, divided family home feel open, light and easy to live in — without losing its character." },
      { type: "p", text: "We started with a measured survey and two long conversations about how the family really uses the house: where they eat, where homework happens and where the shoes always end up." },
      { type: "h3", text: "Opening up the plan" },
      { type: "p", text: "A new opening between the kitchen and living room brought daylight deep into the plan, and a big kitchen table became the heart of the home." },
      { type: "image", src: pexels(1571460), alt: "Open-plan living room in Linen House" },
      { type: "list", items: ["Limewashed walls throughout.", "Oak floors laid in long, wide boards.", "Built-in joinery to hide everyday clutter.", "Linen curtains hung high and wide."] },
      { type: "quote", text: "The house finally feels like ours — calm, warm and easy to be in.", by: "The Kamau Family" },
      { type: "p", text: "Eighteen weeks later, the family moved back into a home that feels entirely theirs." },
    ],
  },
  {
    slug: "wall-art-and-decor-trends-for-the-season",
    title: "Wall art & décor trends for the season",
    date: "Jul 24, 2026",
    category: "Insights",
    readTime: "3 min read",
    excerpt: "Fewer, larger pieces, natural frames and handmade ceramics are leading the way this year.",
    image: pexels(1457842, 1800),
    tags: ["Décor", "Art", "Trends"],
    body: [
      { type: "lead", text: "This season is about editing. Walls are getting quieter, and the pieces that stay are bigger, bolder and more personal." },
      { type: "h3", text: "Fewer, larger pieces" },
      { type: "p", text: "One generous canvas does more for a room than a cluttered gallery wall. Hang it lower than you think — about a hand's width above the sofa." },
      { type: "list", items: ["Natural timber and linen-wrapped frames.", "Handmade ceramics from local studios.", "Textile hangings that soften hard walls."] },
      { type: "quote", text: "Buy what you love, then find the wall for it.", by: "Grace Wanjiru, Interior Architect" },
      { type: "p", text: "Most of all, choose pieces with a story. They are the ones you will never tire of." },
    ],
  },
  {
    slug: "lighting-a-room-in-three-layers",
    title: "Lighting a room in three layers",
    date: "Jul 02, 2026",
    category: "Ideas",
    readTime: "4 min read",
    excerpt: "Ambient, task and accent — the simple framework behind every room that feels right at night.",
    image: pexels(1571463, 1800),
    tags: ["Lighting", "Ideas"],
    body: [
      { type: "lead", text: "Every room that feels right at night has three kinds of light working together. Get the layers right and even a plain room gains depth." },
      { type: "h3", text: "Ambient" },
      { type: "p", text: "The base layer — soft, even light that lets you move around safely. Dimmable ceiling lights or wall washers work best." },
      { type: "h3", text: "Task" },
      { type: "p", text: "Focused light where you read, cook or work: a reading lamp, under-cabinet strips, a desk light." },
      { type: "h3", text: "Accent" },
      { type: "p", text: "The finishing layer that creates mood — picture lights, a lamp in a dark corner, candles on the table." },
      { type: "list", items: ["Use warm bulbs (2700K) in living spaces.", "Put every layer on its own switch or dimmer.", "Light the corners to push walls outward."] },
      { type: "quote", text: "Light is the cheapest way to change how a room feels.", by: "Daniel Mwangi, Project Manager" },
    ],
  },
];

export const postCategories = ["All", "Ideas", "Materials", "Studio", "Insights"] as const;

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  const n = posts.length;
  return { prev: posts[(i - 1 + n) % n], next: posts[(i + 1) % n] };
}
