import * as React from "react";

import { cn } from "../../lib/utils";

export interface DocsHeaderProps {
  brand: { name: string; href: string };
  rightSlot?: React.ReactNode;
  className?: string;
}

export function DocsHeader({ brand, rightSlot, className }: DocsHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
        <a
          href={brand.href}
          className="flex items-center gap-2.5 no-underline transition-opacity hover:opacity-80"
        >
          {/* Monograma: negro en light, blanco en dark */}
          <img
            src="/branding/proppia-logos/Monograma Principal Todo Negro Sin Linea.svg"
            alt="Proppia"
            className="h-6 w-auto dark:hidden"
          />
          <img
            src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg"
            alt="Proppia"
            className="hidden h-6 w-auto dark:block"
          />
          <span className="hidden rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
            Design System
          </span>
        </a>
        <div className="flex items-center gap-2">{rightSlot}</div>
      </div>
    </header>
  );
}

