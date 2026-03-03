import { Tabs, TabsContent, TabsList, TabsTrigger } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function TabsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Tabs"
        description="Navegación entre secciones de contenido dentro de una misma vista. Basado en Radix UI."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Default</h2>
        <Demo>
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground">
              Contenido del tab Overview.
            </TabsContent>
            <TabsContent value="analytics" className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground">
              Contenido del tab Analytics.
            </TabsContent>
            <TabsContent value="reports" className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground">
              Contenido del tab Reports.
            </TabsContent>
          </Tabs>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con contenido enriquecido</h2>
        <Demo>
          <Tabs defaultValue="cuenta" className="w-full max-w-md">
            <TabsList className="w-full">
              <TabsTrigger value="cuenta" className="flex-1">Cuenta</TabsTrigger>
              <TabsTrigger value="seguridad" className="flex-1">Seguridad</TabsTrigger>
              <TabsTrigger value="notif" className="flex-1">Notificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="cuenta" className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>Gestiona tu información de perfil y preferencias de cuenta.</p>
            </TabsContent>
            <TabsContent value="seguridad" className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>Contraseña, autenticación de dos factores y sesiones activas.</p>
            </TabsContent>
            <TabsContent value="notif" className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>Configura qué notificaciones recibes y por qué canal.</p>
            </TabsContent>
          </Tabs>
        </Demo>
      </section>
    </div>
  );
}
