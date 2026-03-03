import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-3xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

export function Heading({
  as = "h2",
  className,
  size,
  ...props
}: HeadingProps) {
  const Comp = as as any;
  return <Comp className={cn(headingVariants({ size }), className)} {...props} />;
}

