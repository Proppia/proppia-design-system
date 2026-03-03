import { Badge, Heading, Text } from "@proppia/ui";

export function ComponentsBadgePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading as="h1" size="xl">
          Badge
        </Heading>
        <Text variant="muted">Etiquetas compactas para estados o categorías.</Text>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Variantes
        </Heading>
        <div className="mt-4 flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  );
}

