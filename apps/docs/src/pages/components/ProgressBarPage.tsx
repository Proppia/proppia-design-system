import { Progress } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

const steps = [
  { label: "Iniciado", value: 10 },
  { label: "En progreso", value: 40 },
  { label: "Avanzado", value: 75 },
  { label: "Completado", value: 100 },
];

export function ProgressBarPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Progress Bar"
        description="Indicador lineal de progreso. Usa el token primary (Turquoise Proppia) como color de avance."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Ejemplos de valor</h2>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-5">
            {steps.map((s) => (
              <div key={s.label} className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <Progress value={s.value} />
              </div>
            ))}
          </div>
        </Demo>
      </section>
    </div>
  );
}
