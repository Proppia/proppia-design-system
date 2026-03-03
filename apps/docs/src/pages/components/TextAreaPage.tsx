import { FormField, Label, Textarea } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function TextAreaPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Text Area"
        description="Campo multilínea para textos largos. Misma base de estilos que Input: focus ring, estados, FormField compatible."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Estados</h2>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-3">
            <div className="space-y-1.5">
              <Label>Por defecto</Label>
              <Textarea placeholder="Escribe tu mensaje..." />
            </div>
            <div className="space-y-1.5">
              <Label>Deshabilitado</Label>
              <Textarea placeholder="No editable" disabled />
            </div>
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con FormField</h2>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-4">
            <FormField label="Comentarios" description="Opcional. Máximo 500 caracteres.">
              <Textarea placeholder="Tu feedback sobre este proyecto..." />
            </FormField>
            <FormField label="Descripción (error)" error="Este campo es obligatorio.">
              <Textarea placeholder="Descripción del proyecto..." aria-invalid />
            </FormField>
          </div>
        </Demo>
      </section>
    </div>
  );
}
