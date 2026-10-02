import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

/** Eyebrow + H2 on the left, optional action on the right (wraps under on small screens). */
export function SectionHead({
  eyebrow,
  children,
  action,
  className,
  eyebrowClassName,
}: {
  eyebrow: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  eyebrowClassName?: string;
}) {
  return (
    <div className={cn("m-center flex flex-wrap items-end justify-between gap-7", className)}>
      <div className="max-w-[860px] flex-[1_1_520px]">
        <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>
        {children}
      </div>
      {action}
    </div>
  );
}
