import { cn } from "@proppia/ui";

interface DemoProps {
  children: React.ReactNode;
  /** Título opcional encima del demo box */
  label?: string;
  /** Quitar el centrado (útil cuando el demo tiene muchos elementos) */
  align?: "center" | "start";
  className?: string;
}

/**
 * Contenedor de previsualización estilo MUI docs.
 * Fondo sutil, bordes, padding generoso.
 */
export function Demo({ children, label, align = "center", className }: DemoProps) {
  return (
    <div className="not-prose space-y-2">
      {label && (
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          {label}
        </p>
      )}
      <div
        className={cn(
          "relative rounded-xl border border-border bg-muted/20 p-8",
          align === "center" && "flex flex-wrap items-center justify-center gap-4",
          align === "start" && "flex flex-col gap-4",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
