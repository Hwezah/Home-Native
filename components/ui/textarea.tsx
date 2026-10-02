import * as React from "react";

import { cn } from "@/lib/utils";

/** shadcn/ui Textarea — Home Native style: boxed, 1px border, brown on focus. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "mt-3.5 min-h-[200px] w-full resize-y rounded-none border border-line-strong bg-transparent px-5 py-[18px] text-[18px] font-light text-ink outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-brand-mid aria-invalid:border-error",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
