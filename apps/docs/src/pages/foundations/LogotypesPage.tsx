import { Check, X } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import {
  BRAND_CHALK,
  BRAND_CHARCOAL,
  LOGO_DARK,
  LOGO_LIGHT,
  LOGO_FULL_DARK,
  LOGO_FULL_LIGHT,
  LOGO_WORDMARK_DARK,
  LOGO_WORDMARK_LIGHT,
} from "../../components/SlideFrame";

const logoVariants = [
  {
    name: "Logo principal (negro)",
    src: LOGO_WORDMARK_LIGHT,
    bgStyle: { backgroundColor: BRAND_CHALK },
    bgDesc: "Fondo claro",
  },
  {
    name: "Logo principal (blanco)",
    src: LOGO_WORDMARK_DARK,
    darkPreview: true,
    bgStyle: { backgroundColor: BRAND_CHARCOAL },
    bgDesc: "Fondo oscuro",
  },
  {
    name: "Logo principal todo blanco",
    src: LOGO_FULL_DARK,
    darkPreview: true,
    bgStyle: { backgroundColor: BRAND_CHARCOAL },
    bgDesc: "Fondo oscuro",
  },
  {
    name: "Logo principal todo negro",
    src: LOGO_FULL_LIGHT,
    bgStyle: { backgroundColor: BRAND_CHALK },
    bgDesc: "Fondo claro",
  },
  {
    name: "Monograma principal (negro)",
    src: "/branding/proppia-logos/Monograma Principal Negro.svg",
    bgStyle: { backgroundColor: BRAND_CHALK },
    bgDesc: "Fondo claro",
  },
  {
    name: "Monograma principal (blanco)",
    src: "/branding/proppia-logos/Monograma Principal Blanco.svg",
    darkPreview: true,
    bgStyle: { backgroundColor: BRAND_CHARCOAL },
    bgDesc: "Fondo oscuro",
  },
  {
    name: "Monograma todo blanco sin línea",
    src: LOGO_DARK,
    darkPreview: true,
    bgStyle: { backgroundColor: BRAND_CHARCOAL },
    bgDesc: "Fondo oscuro",
  },
  {
    name: "Monograma todo negro sin línea",
    src: LOGO_LIGHT,
    bgStyle: { backgroundColor: BRAND_CHALK },
    bgDesc: "Fondo claro",
  },
] as const;

export function FoundationsLogotypesPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Logotypes"
        description="Aplicaciones del logo Proppia en fondos claros y oscuros. Siempre usar versiones SVG oficiales del repositorio."
      />

      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Variantes disponibles</h2>
        <p className="text-sm text-muted-foreground">Logo principal y monograma para fondo claro y oscuro.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logoVariants.map((v) => (
            <div
              key={v.src}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div
                className={`flex min-h-32 items-center justify-center p-8 ${"darkPreview" in v && v.darkPreview ? "ring-2 ring-inset ring-white/15" : ""}`}
                style={v.bgStyle}
              >
                <img
                  src={v.src}
                  alt={v.name}
                  className="h-12 w-auto max-w-full object-contain"
                />
              </div>
              <div className="border-t border-border bg-card p-4">
                <p className="font-medium text-card-foreground">{v.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{v.bgDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Guías de uso</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-3 text-sm font-semibold text-foreground flex items-center gap-1.5">
              <Check size={14} className="text-[#23F8F7] shrink-0" /> Hacer
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>Mantener suficiente contraste y respiro alrededor del logo.</li>
              <li>Usar versiones monocromas según el fondo.</li>
              <li>Priorizar legibilidad en todos los tamaños.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-3 text-sm font-semibold text-foreground flex items-center gap-1.5">
              <X size={14} className="text-red-400 shrink-0" /> Evitar
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>Fondos ruidosos que compitan con la marca.</li>
              <li>Deformar o cambiar proporciones del logo.</li>
              <li>Usar versiones no oficiales o rasterizadas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-2">
        <h2 className="text-base font-semibold text-foreground">Uso en código</h2>
        <p className="text-sm text-muted-foreground">
          Los SVGs se sirven desde <code>/branding/proppia-logos/</code> en la app de docs (vía <code>public/</code>).
        </p>
      </section>
    </div>
  );
}
