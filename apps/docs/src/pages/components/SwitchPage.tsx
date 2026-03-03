import { Checkbox, Label, Switch } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function SwitchPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Switch & Checkbox"
        description="Controles booleanos para preferencias y selección. Basados en Radix UI, accesibles por teclado y focus ring consistente."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Switch</h2>
        <Demo align="start">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Switch id="sw-1" />
              <Label htmlFor="sw-1">Apagado por defecto</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-2" defaultChecked />
              <Label htmlFor="sw-2">Encendido por defecto</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sw-3" disabled />
              <Label htmlFor="sw-3" className="text-muted-foreground">Deshabilitado</Label>
            </div>
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Checkbox</h2>
        <Demo align="start">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox id="cb-1" />
              <Label htmlFor="cb-1">Sin marcar</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-2" defaultChecked />
              <Label htmlFor="cb-2">Marcado por defecto</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-3" disabled />
              <Label htmlFor="cb-3" className="text-muted-foreground">Deshabilitado</Label>
            </div>
          </div>
        </Demo>
      </section>
    </div>
  );
}
