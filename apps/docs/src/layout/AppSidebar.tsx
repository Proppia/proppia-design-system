import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@proppia/ui";
import { ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
type NavLeaf = { title: string; href: string };
type NavGroup = { title: string; badge?: string; links: NavLeaf[] };
type NavSection = { title: string; entries: (NavLeaf | NavGroup)[] };
type NavRoot = NavLeaf | NavSection;

function isLeaf(item: unknown): item is NavLeaf {
  return typeof item === "object" && item !== null && "href" in item;
}
function isGroup(item: unknown): item is NavGroup {
  return typeof item === "object" && item !== null && "links" in item;
}
function isSection(item: unknown): item is NavSection {
  return typeof item === "object" && item !== null && "entries" in item;
}

// ─────────────────────────────────────────────────────────
// Navigation tree
// ─────────────────────────────────────────────────────────
const NAV: NavRoot[] = [
  { title: "Inicio", href: "/" },
  {
    title: "Fundamentos",
    entries: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Iconography", href: "/foundations/iconography" },
      { title: "Logotypes", href: "/foundations/logotypes" },
      { title: "Spacing & Radius", href: "/foundations/spacing" },
      { title: "Pixel", href: "/foundations/pixel" },
      { title: "Grid", href: "/foundations/grid" },
      { title: "Layout de Slide", href: "/foundations/layout" },
      { title: "Tokens", href: "/tokens" },
    ],
  },
  {
    title: "Componentes",
    entries: [
      { title: "Overview", href: "/components" },
      {
        title: "Átomos",
        badge: "Átomo",
        links: [
          { title: "Button", href: "/components/buttons" },
          { title: "Text Input", href: "/components/text-input" },
          { title: "Text Area", href: "/components/text-area" },
          { title: "Switch & Checkbox", href: "/components/switch" },
          { title: "Avatar", href: "/components/avatars" },
          { title: "Tabs", href: "/components/tabs" },
          { title: "Alert", href: "/components/alerts" },
          { title: "Progress Bar", href: "/components/progress-bar" },
          { title: "Progress Circle", href: "/components/progress-circle" },
          { title: "List", href: "/components/list" },
          { title: "Text & Heading", href: "/components/typography" },
        ],
      },
      {
        title: "Moléculas",
        badge: "Molécula",
        links: [
          { title: "Card", href: "/components/cards" },
          { title: "Dropdown", href: "/components/dropdowns" },
          { title: "Banner", href: "/components/banners" },
          { title: "Carousel", href: "/components/carousel" },
        ],
      },
      {
        title: "Organismos",
        badge: "Organismo",
        links: [
          { title: "Navbar / Header", href: "/components/navbar" },
          { title: "Modal / Dialog", href: "/components/modals" },
        ],
      },
    ],
  },
  {
    title: "Playground",
    entries: [
      { title: "Dashboard", href: "/playground/dashboard" },
      { title: "Landing B2B", href: "/playground/landing" },
      { title: "Case Study", href: "/playground/case-study" },
    ],
  },
  {
    title: "Sistema",
    entries: [
      { title: "Resumen del Sistema", href: "/welcome" },
      { title: "Templates", href: "/templates" },
      { title: "Gobierno & Uso", href: "/documentation" },
    ],
  },
];

// ─────────────────────────────────────────────────────────
// Badge colors per Atomic Design level
// Light: dark tones for contrast. Dark: original brand neons.
// ─────────────────────────────────────────────────────────
const badgeClass: Record<string, string> = {
  Átomo:    "border-[#23F8F7]/30 bg-[#23F8F7]/8 text-[#0a7e7f] dark:text-[#23F8F7]",
  Molécula: "border-[#75EFB1]/30 bg-[#75EFB1]/8 text-[#1a7a50] dark:text-[#75EFB1]",
  Organismo:"border-[#F6E342]/30 bg-[#F6E342]/8 text-[#6b5600] dark:text-[#F6E342]",
};

// ─────────────────────────────────────────────────────────
// Leaf link
// ─────────────────────────────────────────────────────────
function SidebarLink({ item, active }: { item: NavLeaf; active: boolean }) {
  return (
    <Link
      to={item.href}
      className={cn(
        "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
        active
          ? "font-medium text-primary"
          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
      )}
    >
      {active && (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      )}
      <span className={cn(!active && "pl-3.5")}>{item.title}</span>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────
// Collapsible group (Átomos / Moléculas / Organismos)
// ─────────────────────────────────────────────────────────
function SidebarGroup({
  group,
  currentPath,
}: {
  group: NavGroup;
  currentPath: string;
}) {
  const hasActive = group.links.some((l) => l.href === currentPath);
  const [open, setOpen] = useState(hasActive);

  // Auto-expand when user navigates into this group
  useEffect(() => {
    if (hasActive) setOpen(true);
  }, [hasActive]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
      >
        <ChevronRight
          size={11}
          className={cn("shrink-0 transition-transform duration-150", open && "rotate-90")}
        />
        <span className="flex-1 text-left">{group.title}</span>
        {group.badge && (
          <span
            className={cn(
              "rounded-full border px-1.5 py-px text-[9px] font-medium",
              badgeClass[group.badge] ?? "border-border text-muted-foreground",
            )}
          >
            {group.badge}
          </span>
        )}
      </button>

      {open && (
        <div className="ml-2.5 mt-0.5 space-y-0.5 border-l border-border pl-3">
          {group.links.map((link) => (
            <SidebarLink
              key={link.href}
              item={link}
              active={currentPath === link.href}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Section block
// ─────────────────────────────────────────────────────────
function SidebarSection({
  section,
  currentPath,
}: {
  section: NavSection;
  currentPath: string;
}) {
  return (
    <div className="space-y-0.5">
      <p className="px-2.5 pb-1 pt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
        {section.title}
      </p>
      {section.entries.map((entry) => {
        if (isLeaf(entry)) {
          return (
            <SidebarLink
              key={entry.href}
              item={entry}
              active={currentPath === entry.href}
            />
          );
        }
        if (isGroup(entry)) {
          return (
            <SidebarGroup
              key={entry.title}
              group={entry}
              currentPath={currentPath}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Root export — accepts optional search filter
// ─────────────────────────────────────────────────────────
function filterLinks(links: NavLeaf[], q: string): NavLeaf[] {
  return links.filter((l) => l.title.toLowerCase().includes(q.toLowerCase()));
}

function filterEntries(
  entries: (NavLeaf | NavGroup)[],
  q: string,
): (NavLeaf | NavGroup)[] {
  return entries.flatMap((e): (NavLeaf | NavGroup)[] => {
    if (isLeaf(e)) {
      return e.title.toLowerCase().includes(q.toLowerCase()) ? [e] : [];
    }
    if (isGroup(e)) {
      const filtered = filterLinks(e.links, q);
      return filtered.length > 0 ? [{ ...e, links: filtered }] : [];
    }
    return [];
  });
}

function filterNav(nav: NavRoot[], q: string): NavRoot[] {
  if (!q.trim()) return nav;
  return nav.flatMap((entry): NavRoot[] => {
    if (isLeaf(entry)) {
      return entry.title.toLowerCase().includes(q.toLowerCase()) ? [entry] : [];
    }
    if (isSection(entry)) {
      const filtered = filterEntries(entry.entries, q);
      return filtered.length > 0 ? [{ ...entry, entries: filtered }] : [];
    }
    return [];
  });
}

export function AppSidebar({
  search = "",
  className,
}: {
  search?: string;
  className?: string;
}) {
  const location = useLocation();
  const path = location.pathname;
  const items = filterNav(NAV, search);

  return (
    <nav className={cn("space-y-0.5 pb-6", className)}>
      {items.map((entry) => {
        if (isLeaf(entry)) {
          return (
            <SidebarLink key={entry.href} item={entry} active={path === entry.href} />
          );
        }
        if (isSection(entry)) {
          return (
            <SidebarSection key={entry.title} section={entry} currentPath={path} />
          );
        }
        return null;
      })}
    </nav>
  );
}
