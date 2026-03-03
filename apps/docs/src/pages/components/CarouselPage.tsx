import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function CarouselPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Carousel"
        description="Carrusel de contenido con navegación anterior/siguiente. Basado en embla-carousel-react."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Básico</h2>
        <Demo>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-bold text-foreground">{i + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Múltiples visibles</h2>
        <p className="text-sm text-muted-foreground">
          Usa <code>opts</code> con <code>align: "start"</code> y <code>basis-1/2</code> en los ítems.
        </p>
        <Demo>
          <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
            <CarouselContent className="-ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i} className="basis-1/2 pl-2">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold text-foreground">{i + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Demo>
      </section>
    </div>
  );
}
