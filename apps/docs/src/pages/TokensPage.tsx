import { PageHeader } from "../components/PageHeader";

const colorTokens = [
  { name: "--background", label: "background", usage: "Fondo de página" },
  { name: "--foreground", label: "foreground", usage: "Texto principal" },
  { name: "--card", label: "card", usage: "Fondo de tarjeta" },
  { name: "--card-foreground", label: "card-foreground", usage: "Texto sobre card" },
  { name: "--primary", label: "primary", usage: "Acción principal (Turquoise)" },
  { name: "--primary-foreground", label: "primary-foreground", usage: "Texto sobre primary" },
  { name: "--secondary", label: "secondary", usage: "Acción secundaria" },
  { name: "--secondary-foreground", label: "secondary-foreground", usage: "Texto sobre secondary" },
  { name: "--accent", label: "accent", usage: "Hover, activos (Mint)" },
  { name: "--accent-foreground", label: "accent-foreground", usage: "Texto sobre accent" },
  { name: "--muted", label: "muted", usage: "Fondos sutiles" },
  { name: "--muted-foreground", label: "muted-foreground", usage: "Texto secundario" },
  { name: "--destructive", label: "destructive", usage: "Error, acciones peligrosas" },
  { name: "--destructive-foreground", label: "destructive-foreground", usage: "Texto sobre destructive" },
  { name: "--border", label: "border", usage: "Bordes, divisores" },
  { name: "--input", label: "input", usage: "Borde de inputs" },
  { name: "--ring", label: "ring", usage: "Focus ring (Turquoise)" },
  { name: "--popover", label: "popover", usage: "Fondo de popovers" },
  { name: "--popover-foreground", label: "popover-foreground", usage: "Texto en popovers" },
] as const;

function TokenSwatch({ name, label, usage }: { name: string; label: string; usage: string }) {
  const bg = `hsl(var(${name}))`;
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div
        className="h-12"
        style={{ background: bg }}
        title={bg}
      />
      <div className="bg-card p-3">
        <p className="font-mono text-xs font-semibold text-card-foreground">{name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{usage}</p>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground/60">
          bg-{label}
        </p>
      </div>
    </div>
  );
}

export function TokensPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Tokens"
        description="Variables CSS (HSL) mapeadas a Tailwind. Los tokens son la fuente de verdad de color del sistema; nunca se hardcodean valores en componentes."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tokens de color</h2>
        <p className="text-sm text-muted-foreground">
          Las swatches reflejan el valor real en el tema activo. Activa el dark mode para ver la diferencia.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {colorTokens.map((t) => (
            <TokenSwatch key={t.name} {...t} />
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Cómo definir un nuevo token</h2>
        <p className="text-sm text-muted-foreground">
          Añadir la variable en <code>packages/ui/src/styles/globals.css</code> bajo <code>:root</code> y <code>.dark</code>, luego extender <code>tailwind.config.ts</code>.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-muted px-4 py-3 text-xs text-foreground">
{`:root {
  --mi-token: 179 93% 55%;
}
.dark {
  --mi-token: 149 80% 70%;
}`}
        </pre>
      </section>
    </div>
  );
}
