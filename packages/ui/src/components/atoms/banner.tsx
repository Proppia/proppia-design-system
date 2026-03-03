import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const bannerVariants = cva(
  "flex w-full items-center justify-between gap-4 px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        // Neutral
        default:
          "bg-muted/60 text-muted-foreground border-b border-border",
        // Info: Turquoise Proppia
        info:
          "bg-[#23F8F7]/10 text-foreground border-b border-[#23F8F7]/30",
        // Warning: Yellow Proppia
        warning:
          "bg-[#F6E342]/10 text-foreground border-b border-[#F6E342]/30",
        // Destructive: rojo semántico
        destructive:
          "bg-destructive/10 text-foreground border-b border-destructive/30",
        // Success: Mint Proppia
        success:
          "bg-[#75EFB1]/10 text-foreground border-b border-[#75EFB1]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  /** Acción o botón de cierre */
  action?: React.ReactNode;
  /** Si es dismissible, mostrar botón de cerrar */
  dismissible?: boolean;
  /** Callback al cerrar */
  onDismiss?: () => void;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      action,
      dismissible,
      onDismiss,
      children,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = React.useCallback(() => {
      setDismissed(true);
      onDismiss?.();
    }, [onDismiss]);

    if (dismissed) return null;

    return (
      <div
        ref={ref}
        role="banner"
        className={cn(bannerVariants({ variant }), className)}
        {...props}
      >
        <div className="flex flex-1 items-center gap-2">{children}</div>
        <div className="flex items-center gap-2">
          {action}
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  },
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };
