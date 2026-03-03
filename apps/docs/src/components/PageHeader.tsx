import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  /** Ej: [{ label: "Componentes" }, { label: "Átomos" }] */
  breadcrumbs?: Crumb[];
  /** Badge tipo "Átomo" | "Molécula" | "Organismo" */
  badge?: string;
  title: string;
  description?: string;
}

// Light: dark tones for accessibility (≥4.5:1 on white). Dark: brand neons.
const badgeColor: Record<string, string> = {
  Átomo:     "border-[#23F8F7]/40 bg-[#23F8F7]/8 text-[#0a7e7f] dark:text-[#23F8F7]",
  Molécula:  "border-[#75EFB1]/40 bg-[#75EFB1]/8 text-[#1a7a50] dark:text-[#75EFB1]",
  Organismo: "border-[#F6E342]/40 bg-[#F6E342]/8 text-[#6b5600] dark:text-[#F6E342]",
  Fundamento:"border-border text-muted-foreground bg-muted/40",
};

/**
 * Cabecera estándar de página inspirada en MUI docs:
 * breadcrumb → badge → h1 → descripción → divisor.
 */
export function PageHeader({ breadcrumbs, badge, title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-3 pb-8 border-b border-border">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="transition-colors hover:text-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="flex items-start gap-3">
        <div className="flex-1 space-y-2">
          {badge && (
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${badgeColor[badge] ?? "border-border text-muted-foreground bg-muted/40"}`}
            >
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        </div>
      </div>

      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
