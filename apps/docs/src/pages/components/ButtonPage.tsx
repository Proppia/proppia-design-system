import { Button, Heading, Text } from "@proppia/ui";

export function ComponentsButtonPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading as="h1" size="xl">
          Button
        </Heading>
        <Text variant="muted">
          Variantes, tamaños, estados (hover/focus-visible/disabled) y accesibilidad.
        </Text>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Variantes
        </Heading>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Tamaños
        </Heading>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Disabled
        </Heading>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}

