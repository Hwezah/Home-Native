"use server";

import { createServiceClient } from "@/lib/supabase/server";
import { CONTACT_ERROR, EMAIL_RE, projectTypes, type ContactState, type ProjectType } from "./schema";

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

export async function sendContact(_prev: ContactState, fd: FormData): Promise<ContactState> {
  // Honeypot: bots fill hidden fields; pretend success.
  if (str(fd, "company")) return { status: "sent" };

  const name = str(fd, "name").slice(0, 200);
  const email = str(fd, "email").slice(0, 320);
  const phone = str(fd, "phone").slice(0, 40);
  const message = str(fd, "message").slice(0, 5000);
  const rawType = str(fd, "projectType");
  const projectType: ProjectType = (projectTypes as readonly string[]).includes(rawType) ? (rawType as ProjectType) : "Residential";

  if (!name || !EMAIL_RE.test(email) || !message) return { status: "error", error: CONTACT_ERROR };

  const supabase = createServiceClient();
  if (!supabase) {
    // Supabase placeholder: no backend configured yet.
    console.info("[contact] Supabase not configured — message not stored:", { name, email, phone, projectType });
    return { status: "sent" };
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({ name, email, phone: phone || null, project_type: projectType, message });

  if (error) {
    console.error("[contact] insert failed:", error.message);
    return { status: "error", error: "Something went wrong sending your message. Please call us on 0742 696 353." };
  }

  // TODO: notify the studio by email (e.g. Resend) once credentials are available.
  return { status: "sent" };
}
