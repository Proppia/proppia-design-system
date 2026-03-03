import { Check, X } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";

const typeScale = [
  { name: "Display",     size: "3rem",     lineHeight: "1.1",  weight: "900", tracking: "-0.02em", usage: "Hero, portadas" },
  { name: "Heading 1",  size: "2rem",     lineHeight: "1.2",  weight: "700", tracking: "-0.01em", usage: "Títulos principales" },
  { name: "Heading 2",  size: "1.5rem",   lineHeight: "1.25", weight: "700", tracking: "-0.01em", usage: "Secciones" },
  { name: "Heading 3",  size: "1.25rem",  lineHeight: "1.3",  weight: "600", tracking: "0",       usage: "Subsecciones" },
  { name: "Body Large", size: "1.125rem", lineHeight: "1.6",  weight: "400", tracking: "0",       usage: "Lead, intro" },
  { name: "Body",       size: "1rem",     lineHeight: "1.6",  weight: "400", tracking: "0",       usage: "Texto principal" },
  { name: "Body Small", size: "0.875rem", lineHeight: "1.5",  weight: "400", tracking: "0.01em",  usage: "Metadata, hints" },
  { name: "Caption",    size: "0.75rem",  lineHeight: "1.4",  weight: "400", tracking: "0.02em",  usage: "Labels, badges" },
] as const;

const weights = [
  { name: "Thin",       value: "100", sample: "Aa" },
  { name: "Light",      value: "300", sample: "Aa" },
  { name: "Regular",    value: "400", sample: "Aa" },
  { name: "Medium",     value: "500", sample: "Aa" },
  { name: "Bold",       value: "700", sample: "Aa" },
  { name: "Extra Bold", value: "800", sample: "Aa" },
  { name: "Black",      value: "900", sample: "Aa" },
] as const;

const glyphSets = [
  { label: "Mayúsculas",   chars: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" },
  { label: "Minúsculas",   chars: "a b c d e f g h i j k l m n o p q r s t u v w x y z" },
  { label: "Números",      chars: "0 1 2 3 4 5 6 7 8 9" },
  { label: "Puntuación",   chars: `. , : ; ! ? ( ) [ ] { } / \\ - \u2013 \u2014 \u2018 \u2019 \u201C \u201D & @ # % $ \u20AC *` },
] as const;

export function FoundationsTypographyPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Tipografía"
        description="Bw Gradual es la tipografía oficial de Proppia. Humanista geométrica con personalidad directa y contemporánea."
      />

      {/* Font family */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Font family</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <p className="font-mono text-xs text-muted-foreground mb-6">
            --font-sans: "Bw Gradual", "Bw Nista Grotesk", ui-sans-serif, system-ui, sans-serif
          </p>
          <p className="text-6xl font-black tracking-tight leading-none mb-3">
            Bw Gradual
          </p>
          <p className="text-xl font-light text-muted-foreground">
            Humanista geométrica · BoldMonday Type Foundry
          </p>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-3xl font-bold leading-tight">
              Proppia construye el futuro del trabajo.
            </p>
            <p className="mt-3 text-base font-light text-muted-foreground leading-relaxed max-w-2xl">
              Diseñamos sistemas de diseño, flujos de trabajo y herramientas digitales para equipos que operan con precisión y ambición.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Fallback:</span>{" "}
          Bw Nista Grotesk se mantiene como secundaria para compatibilidad. En ausencia de ambas, el sistema recae en <span className="font-mono">ui-sans-serif</span>.
        </div>
      </section>

      {/* Pesos disponibles */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Pesos disponibles</h2>
        <p className="text-sm text-muted-foreground">7 pesos con sus variantes itálicas. Total 14 archivos.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {weights.map((w) => (
            <div
              key={w.value}
              className="rounded-lg border border-border bg-card p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{w.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{w.value}</p>
              </div>
              <p
                className="text-4xl leading-none"
                style={{ fontWeight: w.value }}
              >
                {w.sample}
              </p>
              <p
                className="text-sm leading-snug"
                style={{ fontWeight: w.value }}
              >
                The quick brown fox
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Escala tipográfica */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Escala tipográfica</h2>
        <p className="text-sm text-muted-foreground">Tamaños, line-height, tracking y pesos recomendados por nivel.</p>
        <div className="space-y-2">
          {typeScale.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground mb-1">{t.name}</p>
                <p
                  style={{
                    fontSize: t.size,
                    lineHeight: t.lineHeight,
                    fontWeight: t.weight,
                    letterSpacing: t.tracking,
                  }}
                >
                  The quick brown fox
                </p>
              </div>
              <div className="shrink-0 text-right text-xs text-muted-foreground space-y-0.5 sm:pl-8">
                <p className="font-mono">{t.size}</p>
                <p className="font-mono">lh {t.lineHeight}</p>
                <p className="font-mono">ls {t.tracking || "0"}</p>
                <p className="font-mono">w {t.weight}</p>
                <p className="text-[11px] text-muted-foreground/70 mt-1">{t.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Espécimen de caracteres */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Espécimen</h2>
        <div className="rounded-xl border border-border bg-card divide-y divide-border">
          {glyphSets.map((g) => (
            <div key={g.label} className="px-6 py-4">
              <p className="text-xs text-muted-foreground mb-2">{g.label}</p>
              <p className="text-lg leading-relaxed tracking-wide">{g.chars}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itálicas */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Itálicas</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["300","400","700","900"] as const).map((w) => (
            <div key={w} className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs text-muted-foreground mb-3">weight {w} · italic</p>
              <p className="text-2xl" style={{ fontWeight: w, fontStyle: "italic" }}>
                The quick brown fox jumps
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reglas de uso */}
      <section className="mb-12 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Reglas de uso</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { positive: true,  title: "Usa siempre Bw Gradual",           body: "Es la tipografía oficial. Cualquier pieza de comunicación Proppia debe usarla." },
            { positive: true,  title: "Respeta los pesos del sistema",     body: "Display y headings usan pesos altos (700–900). Body usa Regular o Light (300–400)." },
            { positive: false, title: "No mezcles familias tipográficas",  body: "No usar Arial, Inter u otras sans-serifs junto a Bw Gradual en una misma pieza." },
            { positive: false, title: "No forzar tracking en headings",    body: "Los headings grandes ya tienen tracking negativo definido. No añadir letter-spacing positivo." },
          ].map((rule) => (
            <div key={rule.title} className="rounded-lg border border-border bg-card p-5 flex gap-3">
              <span className={`mt-0.5 shrink-0 ${rule.positive ? "text-[#23F8F7]" : "text-red-400"}`}>
                {rule.positive ? <Check size={16} /> : <X size={16} />}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{rule.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
