import { Heading, Text } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function ComponentsTypographyPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Typography"
        description="Componentes Heading y Text para estandarizar jerarquía tipográfica. Basados en Bw Nista Grotesk con tokens semánticos."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Heading — niveles</h2>
        <Demo align="start">
          <div className="space-y-3 w-full">
            <Heading as="h1" size="2xl">Heading 2xl — Proppia Design</Heading>
            <Heading as="h2" size="xl">Heading xl — Sistema Unificado</Heading>
            <Heading as="h3" size="lg">Heading lg — Componentes</Heading>
            <Heading as="h4" size="md">Heading md — Átomos y Moléculas</Heading>
            <Heading as="h5" size="sm">Heading sm — Detalles de API</Heading>
          </div>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Text — variantes y tamaños</h2>
        <Demo align="start">
          <div className="space-y-3 w-full">
            <Text size="lg">Body large. Claridad, aire y jerarquía tipográfica para párrafos de introducción.</Text>
            <Text>Body normal. Componentes minimalistas con tokens semánticos para consistencia cross-producto.</Text>
            <Text size="sm" variant="muted">Body small muted. Útil para ayuda contextual, hints y metadata secundaria.</Text>
          </div>
        </Demo>
      </section>
    </div>
  );
}
