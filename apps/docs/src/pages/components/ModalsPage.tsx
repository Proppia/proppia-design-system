import { useState } from "react";
import {
  Button,
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
  Input, Label,
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function ModalsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Moléculas" }]}
        badge="Molécula"
        title="Modals / Dialog"
        description="Diálogos centrados para confirmaciones, formularios y alertas. Sheet para paneles laterales. Basados en Radix UI."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Dialog (modal centrado)</h2>
        <Demo>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Abrir modal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>¿Confirmar acción?</DialogTitle>
                <DialogDescription>
                  Esta acción no se puede deshacer. ¿Estás seguro de continuar?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={() => setOpen(false)}>Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Dialog con formulario</h2>
        <Demo>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Editar perfil</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar perfil</DialogTitle>
                <DialogDescription>Actualiza tu información de cuenta.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" defaultValue="Alex Cifuentes" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="alex@proppia.co" />
                </div>
              </div>
              <DialogFooter>
                <Button>Guardar cambios</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Sheet (panel lateral)</h2>
        <Demo>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir panel lateral</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Configuración</SheetTitle>
                <SheetDescription>Ajusta las preferencias de tu aplicación.</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Panel lateral para formularios extendidos, filtros o detalles de elementos.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </Demo>
      </section>
    </div>
  );
}
