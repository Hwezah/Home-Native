import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Pinterest, TikTok, WhatsApp } from "./social-icons";

const networks = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "tiktok", label: "TikTok", Icon: TikTok },
  { key: "whatsapp", label: "WhatsApp", Icon: WhatsApp },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "pinterest", label: "Pinterest", Icon: Pinterest },
] as const;

/** The client's social links from content/site.ts; empty links are skipped. */
export function SocialLinks({ variant, className, linkClassName }: { variant: "icons" | "text"; className?: string; linkClassName?: string }) {
  const links = networks.filter((n) => site.socials[n.key]);
  if (!links.length) return null;
  return (
    <div className={cn("flex", className)}>
      {links.map(({ key, label, Icon }) => (
        <a key={key} href={site.socials[key]} aria-label={variant === "icons" ? label : undefined} className={linkClassName}>
          {variant === "icons" ? <Icon /> : label}
        </a>
      ))}
    </div>
  );
}
