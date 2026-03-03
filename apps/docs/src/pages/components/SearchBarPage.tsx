import * as React from "react";
import { SearchBar } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function ComponentsSearchBarPage() {
  const [value, setValue] = React.useState("");
  const [submitted, setSubmitted] = React.useState<string | null>(null);

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Moléculas" }]}
        badge="Molécula"
        title="Search Bar"
        description="Input de búsqueda con acción integrada. Molécula agnóstica que combina un campo de texto y un botón de submit."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Demo interactivo</h2>
        <Demo align="start">
          <div className="w-full max-w-xl space-y-3">
            <SearchBar
              value={value}
              onChange={setValue}
              onSubmit={() => setSubmitted(value)}
              placeholder="Buscar componentes…"
            />
            {submitted !== null && (
              <p className="text-sm text-muted-foreground">
                Última búsqueda: <span className="font-mono text-foreground">{submitted}</span>
              </p>
            )}
          </div>
        </Demo>
      </section>
    </div>
  );
}
