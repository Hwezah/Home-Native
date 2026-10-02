import { cn } from "@/lib/utils";

/** "— Label" with a 1px rule underneath. */
export function Eyebrow({ children, className, dash = true }: { children: React.ReactNode; className?: string; dash?: boolean }) {
  return (
    <div className={cn("eyebrow", className)}>
      {dash && "— "}
      {children}
    </div>
  );
}
