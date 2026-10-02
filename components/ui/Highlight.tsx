import { cn } from "@/lib/utils";

export function Highlight({ children, tone = "green", className }: { children: React.ReactNode; tone?: "green" | "yellow" | "sand"; className?: string }) {
  return <span className={cn(`hl-${tone}`, className)}>{children}</span>;
}
