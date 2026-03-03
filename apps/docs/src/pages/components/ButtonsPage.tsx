import { ArrowRight, Download, Plus } from "lucide-react";
import { Button } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

function PropRow({ name, type, default: def, description }: { name: string; type: string; default?: string; description: string }) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-3 pr-4 align-top">
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{name}</code>
      </td>
      <td className="py-3 pr-4 align-top">
        <code className="text-xs text-[#23F8F7]">{type}</code>
      </td>
      <td className="py-3 pr-4 align-top">
        {def && <code className="text-xs text-muted-foreground">{def}</code>}
      </td>
      <td className="py-3 align-top text-xs text-muted-foreground">{description}</td>
    </tr>
  );
}

export function ButtonsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Button"
        description="Componente fundamental para acciones del usuario. Soporta variantes semánticas, tres tamaños, iconos y el patrón asChild para composición con links."
      />

      {/* Variants */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Variantes</h2>
        <Demo>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Demo>
      </section>

      {/* Sizes */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tamaños</h2>
        <Demo>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Demo>
      </section>

      {/* With icons */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con iconos</h2>
        <Demo>
          <Button>
            <Plus size={14} />
            Crear nuevo
          </Button>
          <Button variant="secondary">
            <Download size={14} />
            Descargar
          </Button>
          <Button variant="outline">
            Continuar
            <ArrowRight size={14} />
          </Button>
        </Demo>
      </section>

      {/* States */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Estados</h2>
        <Demo>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </Demo>
      </section>

      {/* As link */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Como enlace (asChild)</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code className="rounded bg-muted px-1 py-0.5 text-xs">asChild</code> para
          renderizar el botón como <code className="rounded bg-muted px-1 py-0.5 text-xs">&lt;a&gt;</code>{" "}
          manteniendo todos los estilos.
        </p>
        <Demo>
          <Button asChild>
            <a href="/components">Ver componentes</a>
          </Button>
        </Demo>
      </section>

      {/* API */}
      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">API</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Prop</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Default</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Descripción</th>
              </tr>
            </thead>
            <tbody className="px-4">
              <PropRow name="variant" type='"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"' default='"default"' description="Estilo visual del botón" />
              <PropRow name="size" type='"sm" | "md" | "lg"' default='"md"' description="Tamaño del botón" />
              <PropRow name="asChild" type="boolean" default="false" description="Renderiza el primer hijo en lugar del botón (composición con links)" />
              <PropRow name="disabled" type="boolean" default="false" description="Deshabilita interacción y reduce opacidad" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
