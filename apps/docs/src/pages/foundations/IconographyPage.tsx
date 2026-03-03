import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  Download,
  Heart,
  LayoutGrid,
  Lightbulb,
  Search,
  Settings,
  Sparkles,
  Star,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { Demo } from "../../components/Demo";

const iconSet = [
  { icon: Search, name: "Search" },
  { icon: Settings, name: "Settings" },
  { icon: Bell, name: "Bell" },
  { icon: Download, name: "Download" },
  { icon: Upload, name: "Upload" },
  { icon: Trash2, name: "Trash2" },
  { icon: Heart, name: "Heart" },
  { icon: Star, name: "Star" },
  { icon: X, name: "X" },
  { icon: CheckCircle2, name: "CheckCircle2" },
  { icon: ChevronRight, name: "ChevronRight" },
  { icon: ArrowRight, name: "ArrowRight" },
  { icon: LayoutGrid, name: "LayoutGrid" },
  { icon: Lightbulb, name: "Lightbulb" },
  { icon: Sparkles, name: "Sparkles" },
];

const colorTokenExamples = [
  { icon: Sparkles, token: "text-primary", label: "primary" },
  { icon: Lightbulb, token: "text-accent", label: "accent" },
  { icon: CheckCircle2, token: "text-foreground", label: "foreground" },
  { icon: LayoutGrid, token: "text-muted-foreground", label: "muted" },
  { icon: Trash2, token: "text-destructive", label: "destructive" },
];

export function FoundationsIconographyPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Iconography"
        description="Línea de iconografía basada en Lucide React — misma base que shadcn/ui. Trazo consistente, buena legibilidad y soporte de accesibilidad."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Librería oficial: Lucide React</h2>
        <p className="text-sm text-muted-foreground">
          Instalar en cualquier proyecto consumidor del sistema:
        </p>
        <pre className="overflow-x-auto rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground">
          pnpm add lucide-react
        </pre>
        <p className="text-sm text-muted-foreground">
          Importar el icono que necesites y controlar tamaño y color con props o clases Tailwind.
        </p>
        <pre className="overflow-x-auto rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground">{`import { Search } from "lucide-react";

<Search size={20} className="text-primary" />`}</pre>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Muestra de iconos</h2>
        <Demo>
          <div className="grid grid-cols-5 gap-4 sm:grid-cols-8">
            {iconSet.map(({ icon: Icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/40">
                  <Icon size={18} className="text-foreground" />
                </div>
                <span className="text-center text-[9px] text-muted-foreground leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Colores con tokens Proppia</h2>
        <p className="text-sm text-muted-foreground">
          Usar siempre tokens semánticos. Nunca hardcodear colores en iconos.
        </p>
        <Demo>
          {colorTokenExamples.map(({ icon: Icon, token, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/30">
                <Icon size={22} className={token} />
              </div>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tamaños recomendados</h2>
        <Demo>
          {[12, 16, 20, 24, 32].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Search size={size} className="text-foreground" />
              <span className="text-xs text-muted-foreground">{size}px</span>
            </div>
          ))}
        </Demo>
      </section>

      <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Principios</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
          <li>Consistencia en grosor de línea (stroke 2) y radios de Lucide.</li>
          <li>Usar siempre un token de color semántico, nunca hardcodeado.</li>
          <li>Añadir <code>aria-hidden="true"</code> si el icono es decorativo.</li>
          <li>Si el icono tiene significado, añadir <code>aria-label</code> o texto visible.</li>
        </ul>
      </section>
    </div>
  );
}
