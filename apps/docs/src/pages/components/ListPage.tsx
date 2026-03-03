import { useState } from "react";
import { Badge, Button, List, ListItem, Switch } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function ListPage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="List"
        description="Listas semánticas de ítems. Combinable con switches, badges y botones para crear patrones de preferencias o resúmenes."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Lista básica</h2>
        <Demo>
          <List className="w-full max-w-sm">
            <ListItem>Primer elemento de la lista</ListItem>
            <ListItem>Segundo elemento de la lista</ListItem>
            <ListItem>Tercer elemento de la lista</ListItem>
          </List>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con acciones y estados</h2>
        <Demo>
          <List className="w-full max-w-sm">
            <ListItem className="flex items-center justify-between">
              <span className="text-sm">Notificaciones por email</span>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </ListItem>
            <ListItem className="flex items-center justify-between">
              <span className="text-sm">Proyecto Alpha</span>
              <Badge variant="secondary">Activo</Badge>
            </ListItem>
            <ListItem className="flex items-center justify-between">
              <span className="text-sm">Proyecto Beta</span>
              <Button variant="ghost" size="sm">Ver</Button>
            </ListItem>
          </List>
        </Demo>
      </section>
    </div>
  );
}
