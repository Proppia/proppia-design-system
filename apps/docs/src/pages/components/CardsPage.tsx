import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function CardsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Card"
        description="Contenedor para agrupar contenido relacionado. Base de casi todos los layouts de producto Proppia."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Básica</h2>
        <Demo>
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Descripción breve del contenido de la tarjeta.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Contenido principal de la tarjeta.</p>
            </CardContent>
            <CardFooter>
              <Button>Acción</Button>
            </CardFooter>
          </Card>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con Badge</h2>
        <Demo>
          <Card className="w-72">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Proyecto Alpha</CardTitle>
              <Badge>Nuevo</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Descripción del proyecto en curso.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Ver detalle</Button>
            </CardFooter>
          </Card>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Grid de Cards</h2>
        <Demo align="start">
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {["Performance & Growth", "Brand & Experience", "Digital Products"].map((name, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-sm">{name}</CardTitle>
                  <CardDescription>Línea de servicio Proppia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Componente {i + 1} de 3</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Demo>
      </section>
    </div>
  );
}
