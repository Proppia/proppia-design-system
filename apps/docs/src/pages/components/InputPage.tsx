import { FormField, Heading, Input, Text, Textarea } from "@proppia/ui";

export function ComponentsInputPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading as="h1" size="xl">
          Input & Textarea
        </Heading>
        <Text variant="muted">Controles base con estados y focus ring consistente.</Text>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Input
        </Heading>
        <div className="mt-4 max-w-md space-y-3">
          <Input placeholder="Tu email" />
          <Input placeholder="Disabled" disabled />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          Textarea
        </Heading>
        <div className="mt-4 max-w-md space-y-3">
          <Textarea placeholder="Mensaje" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <Heading as="h2" size="lg">
          FormField (molecule)
        </Heading>
        <div className="mt-4 max-w-md">
          <FormField
            label="Email"
            description="Te contactaremos a este correo."
            error="Formato inválido."
          >
            <Input placeholder="nombre@proppia.com" aria-invalid />
          </FormField>
        </div>
      </div>
    </div>
  );
}

