"use client";

import { useActionState, useState } from "react";
import { Check } from "lucide-react";

import { sendContact } from "@/app/contact/actions";
import { CONTACT_ERROR, EMAIL_RE, projectTypes, type ContactState, type ProjectType } from "@/app/contact/schema";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Chip } from "@/components/ui/Chip";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initial);
  const [projectType, setProjectType] = useState<ProjectType>("Residential");
  const [clientError, setClientError] = useState<string | null>(null);
  // "Send another" dismisses the current result and remounts a fresh form.
  const [round, setRound] = useState(0);
  const [dismissed, setDismissed] = useState<ContactState | null>(null);

  const sent = state.status === "sent" && state !== dismissed;
  const error = clientError ?? (state.status === "error" && state !== dismissed ? state.error : null);

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-[22px] bg-surface-warm-3 p-12">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-tint text-green">
          <Check size={28} strokeWidth={1.25} />
        </span>
        <span className="font-serif text-[clamp(36px,3.4vw,52px)] leading-[1.1]">Thank you — message received.</span>
        <span className="text-[18px] leading-[1.7] text-muted-1b">
          We will be in touch within one working day. In a hurry? Call {site.phone}.
        </span>
        <button
          type="button"
          onClick={() => {
            setDismissed(state);
            setRound((r) => r + 1);
            setClientError(null);
            setProjectType("Residential");
          }}
          className="cursor-pointer border-0 border-b border-ink bg-transparent px-0 pb-1.5 pt-0 text-[14px] font-light uppercase tracking-[.14em] text-ink"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      key={round}
      action={formAction}
      noValidate
      onSubmit={(e) => {
        const fd = new FormData(e.currentTarget);
        const v = (k: string) => String(fd.get(k) ?? "").trim();
        if (!v("name") || !EMAIL_RE.test(v("email")) || !v("message")) {
          e.preventDefault();
          setClientError(CONTACT_ERROR);
        } else {
          setClientError(null);
        }
      }}
      className="flex flex-col gap-3.5"
      aria-describedby={error ? "contact-error" : undefined}
    >
      <Input name="name" placeholder="Name" aria-label="Name" autoComplete="name" required />
      <Input name="email" type="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
      <Input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone (optional)" autoComplete="tel" />
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="mb-2.5 mt-[22px] flex flex-col gap-3.5">
        <Label id="project-type-label">Project type</Label>
        <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-labelledby="project-type-label">
          {projectTypes.map((t) => (
            <Chip key={t} active={t === projectType} role="radio" aria-checked={t === projectType} onClick={() => setProjectType(t)}>
              {t}
            </Chip>
          ))}
        </div>
        <input type="hidden" name="projectType" value={projectType} />
      </div>
      <Textarea name="message" rows={6} placeholder="Your message" aria-label="Your message" required />
      {error && (
        <span id="contact-error" role="alert" className="text-[15px] text-error">
          {error}
        </span>
      )}
      <Button type="submit" variant="solid" size="block" disabled={pending} className="m-btn mt-4 cursor-pointer">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
