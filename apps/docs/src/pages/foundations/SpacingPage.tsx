import { PageHeader } from "../../components/PageHeader";

// ─────────────────────────────────────────────────────────
// Spacing scale — base 4 px (Tailwind default)
// ─────────────────────────────────────────────────────────
const spacingScale = [
  { token: "1",   px: 4,   rem: "0.25" },
  { token: "2",   px: 8,   rem: "0.5" },
  { token: "3",   px: 12,  rem: "0.75" },
  { token: "4",   px: 16,  rem: "1" },
  { token: "5",   px: 20,  rem: "1.25" },
  { token: "6",   px: 24,  rem: "1.5" },
  { token: "8",   px: 32,  rem: "2" },
  { token: "10",  px: 40,  rem: "2.5" },
  { token: "12",  px: 48,  rem: "3" },
  { token: "16",  px: 64,  rem: "4" },
  { token: "20",  px: 80,  rem: "5" },
  { token: "24",  px: 96,  rem: "6" },
  { token: "32",  px: 128, rem: "8" },
  { token: "40",  px: 160, rem: "10" },
  { token: "48",  px: 192, rem: "12" },
  { token: "64",  px: 256, rem: "16" },
];

// ─────────────────────────────────────────────────────────
// Border radius scale
// ─────────────────────────────────────────────────────────
const radiusScale = [
  { name: "none",  token: "rounded-none",  px: 0,   example: "Sin radio" },
  { name: "sm",    token: "rounded-sm",    px: 2,   example: "Tags, badges" },
  { name: "md",    token: "rounded-md",    px: 6,   example: "Inputs, botones sm" },
  { name: "lg",    token: "rounded-lg",    px: 8,   example: "Cards, paneles" },
  { name: "xl",    token: "rounded-xl",    px: 12,  example: "Modales, drawers" },
  { name: "2xl",   token: "rounded-2xl",   px: 16,  example: "Containers grandes" },
  { name: "full",  token: "rounded-full",  px: 9999, example: "Avatares, pills, toggles" },
];

// ─────────────────────────────────────────────────────────
// Usage principles
// ─────────────────────────────────────────────────────────
const principles = [
  {
    title: "Base 4 px",
    desc: "Toda unidad de espaciado es múltiplo de 4 px. Esto garantiza consistencia matemática entre componentes y layouts.",
    example: "gap-4 = 16px, p-6 = 24px, mt-8 = 32px",
  },
  {
    title: "Escala semántica",
    desc: "Usa las clases de Tailwind directamente — no valores arbitrarios. Si necesitas un tamaño que no existe en la escala, revisa el diseño.",
    example: "p-4, mx-6, gap-8, py-12…",
  },
  {
    title: "Espaciado interno vs externo",
    desc: "Padding (p-) para espacio interno de componentes. Margin (m-) / Gap (gap-) para distancia entre elementos.",
    example: "Card: p-6 interno / layout: gap-4 entre cards",
  },
];

export function FoundationsSpacingPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos" }]}
        badge="Fundamento"
        title="Espaciado & Radio"
        description="Sistema de espaciado basado en una unidad de 4 px. Todos los valores de padding, margin, gap y border-radius siguen esta escala para garantizar consistencia visual."
      />

      {/* ── Principios ────────────────────────────────── */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5">
              <p className="mb-1.5 text-sm font-semibold text-foreground">{p.title}</p>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <code className="block rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground">
                {p.example}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* ── Escala de espaciado ───────────────────────── */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Escala de espaciado</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Los tokens corresponden a las clases de Tailwind (<code className="rounded bg-muted px-1 py-0.5 text-xs">space-{"{token}"}</code>, <code className="rounded bg-muted px-1 py-0.5 text-xs">p-{"{token}"}</code>, <code className="rounded bg-muted px-1 py-0.5 text-xs">gap-{"{token}"}</code>, etc.)
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">px</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">rem</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Visual</th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((s, i) => (
                <tr key={s.token} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium text-foreground">
                      {s.token}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{s.px}px</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.rem}rem</td>
                  <td className="px-4 py-3">
                    <div
                      className="rounded-sm bg-primary/60"
                      style={{ width: Math.min(s.px, 256), height: 12 }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Visualización de gaps ─────────────────────── */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Gaps comunes en layout</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Cómo se ven los valores de <code className="rounded bg-muted px-1 py-0.5 text-xs">gap</code> más utilizados en componentes reales.
        </p>
        <div className="space-y-6 rounded-xl border border-border bg-card p-6">
          {[
            { label: "gap-2 · 8px", gap: 8 },
            { label: "gap-4 · 16px", gap: 16 },
            { label: "gap-6 · 24px", gap: 24 },
            { label: "gap-8 · 32px", gap: 32 },
          ].map(({ label, gap }) => (
            <div key={label}>
              <p className="mb-2 text-xs text-muted-foreground">{label}</p>
              <div className="flex" style={{ gap }}>
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex h-10 flex-1 items-center justify-center rounded-md border border-border bg-muted/40 text-xs text-muted-foreground"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Border radius ─────────────────────────────── */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Border radius</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Escala de redondez. Cada valor tiene un rol semántico definido en el sistema.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {radiusScale.map((r) => (
            <div key={r.name} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
              <div
                className="h-16 w-full border-2 border-dashed border-border bg-muted/30"
                style={{ borderRadius: r.px }}
              />
              <div>
                <div className="flex items-baseline justify-between">
                  <code className="text-xs font-medium text-foreground">{r.token}</code>
                  <span className="text-xs text-muted-foreground">{r.px === 9999 ? "∞" : `${r.px}px`}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{r.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Padding interno de componentes ────────────── */}
      <section className="mb-4">
        <h2 className="mb-1 text-base font-semibold text-foreground">Padding interno de componentes</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Guía de referencia rápida para el padding interno estándar de cada tipo de componente.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Componente</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Clase</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {[
                { comp: "Button sm",    cls: "px-3 py-1.5",   val: "12px · 6px" },
                { comp: "Button md",    cls: "px-4 py-2",     val: "16px · 8px" },
                { comp: "Button lg",    cls: "px-6 py-3",     val: "24px · 12px" },
                { comp: "Input",        cls: "px-3 py-2",     val: "12px · 8px" },
                { comp: "Card",         cls: "p-6",           val: "24px todos" },
                { comp: "Card compacta",cls: "p-4",           val: "16px todos" },
                { comp: "Modal",        cls: "p-6",           val: "24px todos" },
                { comp: "Badge",        cls: "px-2 py-0.5",   val: "8px · 2px" },
                { comp: "Alert",        cls: "px-4 py-3",     val: "16px · 12px" },
              ].map((row, i) => (
                <tr key={row.comp} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-medium text-foreground">{row.comp}</td>
                  <td className="px-4 py-3">
                    <code className="text-xs text-muted-foreground">{row.cls}</code>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
