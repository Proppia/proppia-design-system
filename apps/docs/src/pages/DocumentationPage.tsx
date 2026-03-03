import { PageHeader } from "../components/PageHeader";

export function DocumentationPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Documentación & Gobierno"
        description="Normas de uso, metodología y políticas para mantener el sistema coherente, escalable y vivo."
      />

      <section className="mb-10 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Uso del sistema</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Instalar <code>@proppia/ui</code> e importar los estilos globales en el entry point del proyecto. Usar siempre
          tokens semánticos (<code>bg-primary</code>, <code>text-foreground</code>…) en lugar de valores hardcodeados.
          Consultar <code>RULES_DESIGN_SYSTEM.md</code> para las reglas operativas completas.
        </p>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Metodología — Atomic Design</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Átomos → Moléculas → Organismos. Cada componente debe tener variantes, tamaños, estados y ejemplos
          documentados antes de considerarse <strong className="text-foreground">DONE</strong>.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { level: "Átomo", color: "border-[#23F8F7]/40 bg-[#23F8F7]/5", desc: "Unidad indivisible. Button, Input, Badge, Icon." },
            { level: "Molécula", color: "border-[#75EFB1]/40 bg-[#75EFB1]/5", desc: "Combinación de átomos. SearchBar, FormField, Card." },
            { level: "Organismo", color: "border-[#F6E342]/40 bg-[#F6E342]/5", desc: "Sección compleja. Navbar, Sidebar, DataTable." },
          ].map((item) => (
            <div key={item.level} className={`rounded-xl border p-4 ${item.color}`}>
              <p className="text-sm font-semibold text-foreground">{item.level}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Contribución</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Todo componente nuevo debe: tener página de documentación en <code>apps/docs</code>, consumir únicamente
          tokens semánticos, estar tipado con TypeScript y exportarse desde <code>packages/ui/src/index.ts</code>.
        </p>
      </section>
    </div>
  );
}
