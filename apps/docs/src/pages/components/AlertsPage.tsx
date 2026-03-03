import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

const variants = [
  { variant: "default" as const, icon: null, title: "Default", msg: "Mensaje informativo neutro." },
  { variant: "info" as const, icon: <Info size={16} />, title: "Información", msg: "Nueva actualización disponible. Revisa las novedades." },
  { variant: "success" as const, icon: <CheckCircle2 size={16} />, title: "Éxito", msg: "Tu perfil se ha actualizado correctamente." },
  { variant: "warning" as const, icon: <AlertTriangle size={16} />, title: "Advertencia", msg: "Tu sesión expirará pronto. Por favor, guarda tu trabajo." },
  { variant: "destructive" as const, icon: <XCircle size={16} />, title: "Error", msg: "Se ha producido un error. Intenta de nuevo más tarde." },
];

export function AlertsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Alert"
        description="Mensajes de feedback, advertencias y errores. Colores de estado alineados a la paleta Proppia: Turquoise (info), Mint (éxito), Yellow (advertencia)."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Variantes</h2>
        <Demo align="start">
          {variants.map((v) => (
            <Alert key={v.variant} variant={v.variant}>
              {v.icon}
              <AlertTitle>{v.title}</AlertTitle>
              <AlertDescription>{v.msg}</AlertDescription>
            </Alert>
          ))}
        </Demo>
      </section>
    </div>
  );
}
