import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-4xl text-xl font-semibold cursor-pointer transition-colors leading-loose",
  {
    variants: {
      variant: {
        default:
          "bg-rose-600 text-white text-lg font-semibold hover:bg-white hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-sky-900 hover:text-sky-900 disabled:bg-neutral-400 disabled:text-white disabled:outline-none disabled:cursor-default focus:outline-4 focus:outline-sky-900 focus:outline-offset-[-4px]",
        secondary:
          "bg-white text-zinc-800 text-lg font-semibold hover:bg-sky-900 hover:text-white disabled:bg-neutral-400 disabled:text-white disabled:outline-none disabled:cursor-default",
        tertiary:
          "bg-rose-600/10 text-rose-600 text-md font-bold font-['Montserrat'] leading-normal",
        text: "text-neutral-500 text-base font-medium",
        link: "text-sky-900 text-base font-medium",
        icon: "bg-neutral-50 text-center text-sky-900 text-base font-bold hover:text-rose-600 hover:outline-none disabled:bg-neutral-400 disabled:text-white disabled:outline-none disabled:cursor-default",
      },
      size: {
        default: "px-12 py-3",
        icon: "p-3",
        search: "px-16 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
