import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** "after" = arrow-right after label (default); "before" = arrow-up-right before label; "none" */
  icon?: "after" | "before" | "none";
  /** Own-row button: 80vw and centred on mobile portrait. */
  block?: boolean;
} & VariantProps<typeof buttonVariants>;

export function PillButton({ href, children, className, icon = "after", block = true, variant, size }: Props) {
  return (
    <Link href={href} data-m-btn={block ? "" : undefined} className={cn(buttonVariants({ variant, size }), className)}>
      {icon === "before" && <ArrowUpRight size={18} strokeWidth={1.25} />}
      {children}
      {icon === "after" && <ArrowRight size={18} strokeWidth={1.25} />}
    </Link>
  );
}
