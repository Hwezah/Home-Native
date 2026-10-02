import { cn } from "@/lib/utils";

export function Chip({
  active,
  className,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full border px-5 py-2.5 text-[14px] font-light uppercase tracking-[.08em] whitespace-nowrap transition-[background,color,border-color] duration-300",
        active ? "border-fill bg-fill text-white" : "border-line-strong bg-transparent text-ink hover:border-ink",
        className,
      )}
      {...props}
    />
  );
}
