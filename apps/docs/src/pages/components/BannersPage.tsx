import { Banner, Button } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function BannersPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Banner"
        description="Mensajes de sistema destacados en la parte superior de la página. Variantes de estado con la paleta Proppia."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Variantes</h2>
        <Demo align="start" className="p-0 overflow-hidden">
          <Banner variant="default">Mensaje informativo por defecto.</Banner>
          <Banner variant="info">Nueva actualización disponible. Revisa las novedades.</Banner>
          <Banner variant="warning">Tu sesión expirará pronto. Por favor, guarda tu trabajo.</Banner>
          <Banner variant="destructive">Se ha producido un error. Intenta de nuevo más tarde.</Banner>
          <Banner variant="success">Tu perfil se ha actualizado correctamente.</Banner>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con acción y dismissible</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code>action</code> para añadir un botón y <code>dismissible</code> para que el usuario pueda cerrarlo.
        </p>
        <Demo align="start" className="p-0 overflow-hidden">
          <Banner
            variant="info"
            dismissible
            action={<Button size="sm" variant="outline">Ver más</Button>}
          >
            Nuevas características disponibles. Explora las mejoras.
          </Banner>
        </Demo>
      </section>
    </div>
  );
}
