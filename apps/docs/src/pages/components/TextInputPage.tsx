import { FormField, Input, Label } from "@proppia/ui";
import { Search, Mail } from "lucide-react";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function TextInputPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Text Input"
        description="Campo de texto de línea única. Focus ring consistente con ring token (Turquoise). Combinable con FormField para validación y ayuda."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Estados</h2>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-3">
            <div className="space-y-1.5">
              <Label>Por defecto</Label>
              <Input placeholder="Escribe algo..." />
            </div>
            <div className="space-y-1.5">
              <Label>Deshabilitado</Label>
              <Input placeholder="No editable" disabled />
            </div>
            <div className="space-y-1.5">
              <Label>Con error</Label>
              <Input placeholder="Email inválido" aria-invalid className="border-destructive focus-visible:ring-destructive" />
            </div>
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con iconos (composición manual)</h2>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Buscar componentes..." />
            </div>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="tu@proppia.co" type="email" />
            </div>
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con FormField (molécula)</h2>
        <p className="text-sm text-muted-foreground">
          <code>FormField</code> envuelve el control con label, descripción y mensaje de error accesible via <code>aria-describedby</code>.
        </p>
        <Demo align="start">
          <div className="w-full max-w-sm space-y-4">
            <FormField label="Email" description="Te contactaremos a este correo.">
              <Input placeholder="nombre@proppia.com" />
            </FormField>
            <FormField label="Email (error)" error="El formato del email no es válido.">
              <Input placeholder="nombre@proppia.com" aria-invalid />
            </FormField>
          </div>
        </Demo>
      </section>
    </div>
  );
}
