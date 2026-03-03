import { Moon, Search, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@proppia/ui";
import { AppSidebar } from "./AppSidebar";

export function DocsLayout() {
  const location = useLocation();
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark"),
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Scroll to top of page on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header — uses Link for SPA navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline transition-opacity hover:opacity-80"
          >
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
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Cambiar tema"
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-transparent",
                "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              onClick={() => setDark((d) => !d)}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] px-6 pb-16">
        {/* Sidebar — single scroll container, no nested overflow */}
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[220px] shrink-0 overflow-y-auto md:block">
          <div className="flex flex-col gap-2 py-6 pr-3">
            {/* Search */}
            <div className="relative">
              <Search
                size={13}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-8 w-full rounded-md border border-border bg-muted/30 pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Navigation */}
            <AppSidebar search={search} />
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 py-10 md:pl-10 lg:pl-14">
          <div className="mx-auto max-w-3xl">
            <Outlet />
          </div>
        </main>

        {/* Right gutter (on-page TOC placeholder) */}
        <div className="hidden w-[160px] shrink-0 xl:block" />
      </div>
    </div>
  );
}
