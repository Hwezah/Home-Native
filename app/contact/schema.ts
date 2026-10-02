export const projectTypes = ["Residential", "Commercial", "Renovation", "Styling"] as const;
export type ProjectType = (typeof projectTypes)[number];

export type ContactState = { status: "idle" | "error" | "sent"; error?: string };

export const CONTACT_ERROR = "Please add your name, a valid email and a short message.";
export const EMAIL_RE = /^\S+@\S+\.\S+$/;
