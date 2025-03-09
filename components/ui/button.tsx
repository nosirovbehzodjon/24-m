import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-md font-medium transition-colors after:transition-colors before:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 relative transition-mask-shadow",
  {
    variants: {
      variant: {
        default:
          "bg-orange-400 text-white hover:bg-orange-500 hover:after:bg-orange-500 hover:before:bg-orange-500 after:bg-orange-400 before:bg-orange-400 default-mask-shadow",
        dark: "bg-black-300 text-white  hover:bg-black-400 hover:after:bg-black-400 hover:before:bg-black-400 after:bg-black-300 before:bg-black-300 dark-mask-shadow",
        secondary:
          "bg-blue-500 text-white hover:bg-blue-600 after:bg-blue-500 hover:after:bg-blue-600 before:bg-blue-500 hover:before:bg-blue-600 secondary-mask-shadow",
        ghost:
          "bg-orange-50 text-orange-400 hover:bg-orange-400 hover:text-white after:bg-orange-50 hover:after:bg-orange-400 before:bg-orange-50 hover:before:bg-orange-400 ghost-mask-shadow",
        link: "text-orange-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2 clip-shape default-clip-shape",
        lg: "h-14 px-10 text-lg clip-shape lg-clip-shape",
        sm: "h-10 px-6 text-sm clip-shape sm-clip-shape",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
