import * as React from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

import { cn } from "../../lib/utils";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitives.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitives.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitives.Indicator>
  </CheckboxPrimitives.Root>
));
Checkbox.displayName = "Checkbox";

