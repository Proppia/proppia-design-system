import { Badge, Heading, Text } from "@proppia/ui";

interface DocStubProps {
  title: string;
  description?: string;
}

export function DocStub({ title, description }: DocStubProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge variant="outline">Próximamente</Badge>
        <Heading as="h1" size="xl">
          {title}
        </Heading>
        <Text variant="muted">
          {description ?? `Componente en desarrollo. Se documentará con variantes, tamaños y ejemplos.`}
        </Text>
      </div>
      <div className="rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center">
        <Text variant="muted" size="sm">
          Este componente se añadirá pronto a @proppia/ui
        </Text>
      </div>
    </div>
  );
}
