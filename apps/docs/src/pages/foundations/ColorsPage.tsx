import { PageHeader } from "../../components/PageHeader";
import { BRAND_CHALK, BRAND_CHARCOAL, SLIDE_BG_DARK } from "../../components/SlideFrame";

const brandPalette = [
  { token: "Chalk", hex: BRAND_CHALK, desc: "Fondo neutro claro, base de interfaz", textOn: "dark" },
  { token: "Yellow", hex: "#F6E342", desc: "Acento luminoso, energía y claridad", textOn: "dark" },
  { token: "Mint Green", hex: "#75EFB1", desc: "Acento fresco, progreso y crecimiento", textOn: "dark" },
  { token: "Turquoise", hex: "#23F8F7", desc: "Acento tecnológico, momentos clave", textOn: "dark" },
  { token: "Charcoal", hex: BRAND_CHARCOAL, desc: "Neutro oscuro, tipografía y fondos profundos", textOn: "light" },
  { token: "Slide Dark", hex: SLIDE_BG_DARK, desc: "Fondo de presentaciones (slides)", textOn: "light" },
] as const;

const semanticTokens = [
  { token: "--background", usage: "Fondo principal de la interfaz" },
  { token: "--foreground", usage: "Texto principal" },
  { token: "--primary", usage: "Acciones principales, elementos destacados" },
  { token: "--secondary", usage: "Elementos secundarios" },
  { token: "--accent", usage: "Acentos, hover, estados activos" },
  { token: "--muted", usage: "Texto secundario, fondos sutiles" },
  { token: "--destructive", usage: "Errores, acciones destructivas" },
  { token: "--border", usage: "Bordes, divisores" },
  { token: "--ring", usage: "Focus ring, accesibilidad" },
] as const;

function ColorSwatch({
  token,
  hex,
  desc,
  textOn,
}: {
  token: string;
  hex: string;
  desc: string;
  textOn: "light" | "dark";
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className="flex h-24 items-center justify-center"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`text-sm font-semibold ${textOn === "dark" ? "text-[#1E1E1E]" : "text-[#F1F1F1]"}`}
        >
          Aa
        </span>
      </div>
      <div className="border-t border-border bg-card p-4">
        <p className="font-mono text-sm font-semibold text-card-foreground">
          {token}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{hex}</p>
      </div>
    </div>
  );
}

export function FoundationsColorsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Colors"
        description="Paleta de marca y tokens semánticos. Los colores se definen como variables CSS (HSL) garantizando coherencia y soporte de dark mode en todos los productos."
      />

      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Paleta de marca</h2>
        <p className="text-sm text-muted-foreground">Colores extraídos del brandbook Proppia. Siempre usar como tokens semánticos, nunca hardcodeados.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brandPalette.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tokens semánticos</h2>
        <p className="text-sm text-muted-foreground">Variables CSS que mapean a la paleta. Usar siempre en componentes.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {semanticTokens.map((t) => (
            <div
              key={t.token}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="font-mono text-sm font-semibold text-card-foreground">
                {t.token}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{t.usage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Reglas de uso</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Usar siempre tokens semánticos en componentes (<code>bg-primary</code>, <code>text-foreground</code>...).</li>
          <li>Evitar valores hardcodeados (#1E1E1E, #F1F1F1) dentro de componentes del sistema.</li>
          <li>Los tokens se adaptan automáticamente en modo dark.</li>
        </ul>
      </section>
    </div>
  );
}
