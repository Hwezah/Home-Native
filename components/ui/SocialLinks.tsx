import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Pinterest, TikTok, WhatsApp } from "./social-icons";

const networks = {
  instagram: { label: "Instagram", Icon: Instagram },
  facebook: { label: "Facebook", Icon: Facebook },
  tiktok: { label: "TikTok", Icon: TikTok },
  whatsapp: { label: "WhatsApp", Icon: WhatsApp },
  linkedin: { label: "LinkedIn", Icon: Linkedin },
  pinterest: { label: "Pinterest", Icon: Pinterest },
};
type Network = keyof typeof networks;

/** The client's social links from content/site.ts (`socialIcons` / `socialText`); empty links are skipped. */
export function SocialLinks({ variant, className, linkClassName }: { variant: "icons" | "text"; className?: string; linkClassName?: string }) {
  const keys = (variant === "icons" ? site.socialIcons : site.socialText) as readonly Network[];
  const links = keys.filter((k) => site.socials[k]).map((k) => ({ key: k, ...networks[k] }));
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
