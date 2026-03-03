import * as React from "react";

import { cn } from "../../lib/utils";

export type DocsSidebarItem =
  | { title: string; href: string }
  | { title: string; children: readonly { title: string; href: string }[] };

export interface DocsSidebarProps {
  items: readonly DocsSidebarItem[];
  currentPath?: string;
  className?: string;
}

export function DocsSidebar({ items, currentPath, className }: DocsSidebarProps) {
  return (
    <nav
      className={cn("space-y-5 pt-1", className)}
    >
        {items.map((item) => {
          if ("href" in item) {
            const active = currentPath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                )}
                {item.title}
              </a>
            );
          }

          return (
            <div key={item.title} className="space-y-1">
              <div className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                {item.title}
              </div>
              <div className="space-y-0.5">
                {item.children.map((c) => {
                  const active =
                    currentPath === c.href ||
                    (currentPath?.startsWith(c.href + "/") ?? false);
                  return (
                    <a
                      key={c.href}
                      href={c.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        active
                          ? "font-medium text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {active && (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        )}
                      <span>{c.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
    </nav>
  );
}

