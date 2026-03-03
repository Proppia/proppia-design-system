import { Badge, Button, Heading, Text } from "@proppia/ui";

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge variant="secondary">Design System</Badge>
        <Heading as="h1" size="2xl">
          Proppia UI
        </Heading>
        <Text variant="muted" size="lg">
          Atomic Design + tokens semánticos estilo shadcn/ui. Componentes
          accesibles, minimalistas y con variantes.
        </Text>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href="/overview">Empezar</a>
        </Button>
        <Button variant="secondary" asChild>
          <a href="/tokens">Ver tokens</a>
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Branding
        </Heading>
        <Text className="mt-2" variant="muted">
          Logos servidos desde{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            /branding/proppia-logos
          </code>
        </Text>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-background p-4">
            <img
              src="/branding/proppia-logos/Logo Principal con Negro.svg"
              alt="Proppia logo (negro)"
              className="h-10"
            />
          </div>
          <div className="rounded-md border border-border bg-[#1E1E1E] p-4">
            <img
              src="/branding/proppia-logos/Logo Principal con Blanco.svg"
              alt="Proppia logo (blanco)"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

