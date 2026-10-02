import * as React from "react";

import { cn } from "@/lib/utils";

/** shadcn/ui Input — Home Native style: underline only, brown on focus. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-none border-0 border-b border-line-strong bg-transparent py-[18px] text-[18px] font-light text-ink outline-none transition-colors duration-300 placeholder:text-muted-2 focus:border-brand-mid aria-invalid:border-error",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
