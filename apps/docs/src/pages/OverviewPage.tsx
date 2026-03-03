import { PageHeader } from "../components/PageHeader";

export function OverviewPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Resumen del sistema"
        description="Visión técnica del Design System Proppia: arquitectura, stack y principios de implementación."
      />

      <section className="mb-10 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Arquitectura</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Monorepo con <code>packages/ui</code> (librería de componentes) y <code>apps/docs</code> (esta plataforma
          de documentación). Gestionado con pnpm workspaces.
        </p>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Stack técnico</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "React + Vite", desc: "Frontend y bundler de ambos paquetes" },
            { name: "TypeScript", desc: "Tipado estricto en toda la codebase" },
            { name: "Tailwind CSS", desc: "Estilos con tokens semánticos" },
            { name: "shadcn/ui", desc: "Referencia de patrones de componentes" },
            { name: "Radix UI", desc: "Primitivos accesibles sin estilos" },
            { name: "Lucide React", desc: "Librería de iconografía oficial" },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-semibold text-card-foreground">{item.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Tokens semánticos</h2>
        <p className="text-sm text-muted-foreground">
          Variables CSS (HSL) definidas en <code>globals.css</code> y mapeadas en <code>tailwind.config.ts</code>.
          Los componentes consumen solo tokens, lo que garantiza que el dark mode y futuros temas funcionen sin tocar código.
        </p>
      </section>
    </div>
  );
}
