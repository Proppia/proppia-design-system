import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        // Neutral informativo
        default:
          "border-border bg-card text-card-foreground [&>svg]:text-muted-foreground",
        // Info: Turquoise — dark accessible teal in light, neon in dark
        info:
          "border-[#23F8F7]/40 bg-[#23F8F7]/8 text-foreground [&>svg]:text-[#0a7e7f] dark:[&>svg]:text-[#23F8F7]",
        // Success: Mint — dark green in light, neon in dark
        success:
          "border-[#75EFB1]/40 bg-[#75EFB1]/8 text-foreground [&>svg]:text-[#1a7a50] dark:[&>svg]:text-[#75EFB1]",
        // Warning: Yellow — dark amber in light, neon in dark
        warning:
          "border-[#F6E342]/40 bg-[#F6E342]/8 text-foreground [&>svg]:text-[#6b5600] dark:[&>svg]:text-[#F6E342]",
        // Destructive: rojo semántico con tokens
        destructive:
          "border-destructive/40 bg-destructive/8 text-foreground [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref as React.Ref<HTMLParagraphElement>}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref as React.Ref<HTMLParagraphElement>}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
