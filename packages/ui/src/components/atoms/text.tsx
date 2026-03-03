import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const textVariants = cva("leading-relaxed", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export function Text({
  as = "p",
  className,
  variant,
  size,
  ...props
}: TextProps) {
  const Comp = as as any;
  return (
    <Comp className={cn(textVariants({ variant, size }), className)} {...props} />
  );
}

