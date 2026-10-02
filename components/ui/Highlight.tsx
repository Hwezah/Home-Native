import { cn } from "@/lib/utils";

export function Highlight({ children, tone = "brand", className }: { children: React.ReactNode; tone?: "brand" | "yellow" | "sand"; className?: string }) {
  return <span className={cn(`hl-${tone}`, className)}>{children}</span>;
}
