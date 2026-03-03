import { ProgressCircle } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

const examples = [
  { value: 10, label: "10%" },
  { value: 33, label: "33%" },
  { value: 66, label: "66%" },
  { value: 100, label: "100%" },
];

export function ProgressCirclePage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Progress Circle"
        description="Indicador circular de progreso. Ideal para dashboards y KPIs."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tamaño estándar (64px)</h2>
        <Demo>
          {examples.map((e) => (
            <div key={e.value} className="flex flex-col items-center gap-2">
              <ProgressCircle value={e.value} size={64} />
              <span className="text-xs text-muted-foreground">{e.label}</span>
            </div>
          ))}
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tamaños</h2>
        <Demo>
          {[32, 48, 64, 96].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <ProgressCircle value={65} size={size} />
              <span className="text-xs text-muted-foreground">{size}px</span>
            </div>
          ))}
        </Demo>
      </section>
    </div>
  );
}
