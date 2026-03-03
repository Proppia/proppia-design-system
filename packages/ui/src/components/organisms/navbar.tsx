import * as React from "react";

import { cn } from "../../lib/utils";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Contenido del lado izquierdo (logo, título) */
  left?: React.ReactNode;
  /** Contenido central (búsqueda, navegación) */
  center?: React.ReactNode;
  /** Contenido del lado derecho (acciones, usuario) */
  right?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, left, center, right, children, ...props }, ref) => (
    <header
      ref={ref}
      role="banner"
      className={cn(
        "sticky top-0 z-40 flex h-14 w-full items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          {left && (
            <div className="flex flex-1 items-center gap-4">{left}</div>
          )}
          {center && (
            <div className="flex flex-1 items-center justify-center">
              {center}
            </div>
          )}
          {right && (
            <div className="flex flex-1 items-center justify-end gap-2">
              {right}
            </div>
          )}
        </>
      )}
    </header>
  ),
);
Navbar.displayName = "Navbar";

const NavbarBrand = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex items-center gap-2 font-semibold text-foreground no-underline",
      className,
    )}
    {...props}
  />
));
NavbarBrand.displayName = "NavbarBrand";

const NavbarNav = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
));
NavbarNav.displayName = "NavbarNav";

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
NavbarLink.displayName = "NavbarLink";

export { Navbar, NavbarBrand, NavbarNav, NavbarLink };
