import { Checkbox, Heading, Label, Switch, Text } from "@proppia/ui";

export function ComponentsSwitchCheckboxPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading as="h1" size="xl">
          Switch & Checkbox
        </Heading>
        <Text variant="muted">
          Controles accesibles basados en Radix, con focus ring consistente.
        </Text>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Switch
        </Heading>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="demo-switch" />
          <Label htmlFor="demo-switch">Recibir novedades</Label>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Checkbox
        </Heading>
        <div className="mt-4 flex items-center gap-3">
          <Checkbox id="demo-checkbox" />
          <Label htmlFor="demo-checkbox">Acepto términos</Label>
        </div>
      </div>
    </div>
  );
}

