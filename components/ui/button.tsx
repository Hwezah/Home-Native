import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button, re-skinned with the Home Native button system:
 * pill (secondary), primary (CTA), light (on dark images), outline-light, solid (form submit).
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap font-light transition-[background,color,border-color,transform] duration-[350ms] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        pill: "rounded-full border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
        primary: "rounded-full border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        light: "rounded-full bg-paper text-ink hover:bg-green hover:text-paper hover:-translate-y-[3px]",
        "light-solid": "rounded-full bg-paper text-ink hover:bg-ink hover:text-paper",
        "outline-light": "rounded-full border border-white/25 text-paper hover:bg-paper hover:text-ink",
        solid:
          "w-full border border-ink bg-ink text-paper text-[15px] font-normal uppercase tracking-[.3em] hover:bg-paper hover:text-ink",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[42px] py-[22px] text-[17px]",
        lg: "px-[78px] py-[30px] text-[19px]",
        hero: "px-10 py-[22px] text-[17px]",
        band: "px-[72px] py-7 text-[19px]",
        block: "p-6",
        none: "",
      },
    },
    defaultVariants: { variant: "pill", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
