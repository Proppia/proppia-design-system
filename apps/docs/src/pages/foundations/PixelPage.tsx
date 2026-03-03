import { Check, X } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { BRAND_MINT, BRAND_TURQUOISE, BRAND_YELLOW, SLIDE_BG_DARK } from "../../components/SlideFrame";

// ── Token table row ──────────────────────────────────────
function TokenRow({
  token,
  value,
  description,
}: {
  token: string;
  value: string;
  description: string;
}) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-3 pr-6">
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
          {token}
        </code>
      </td>
      <td className="py-3 pr-6">
        <code className="text-xs font-mono text-muted-foreground">{value}</code>
      </td>
      <td className="py-3 text-sm text-muted-foreground">{description}</td>
    </tr>
  );
}

// ── Pixel base con crosshair ─────────────────────────────
function GradientPixelHero() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative flex items-center justify-center">
        {/* Crosshair circle */}
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          className="absolute"
          style={{ opacity: 0.25 }}
        >
          <circle cx="90" cy="90" r="70" stroke="white" strokeWidth="0.8" fill="none" />
          {/* crosshair lines */}
          <line x1="90" y1="10"  x2="90" y2="50"  stroke="white" strokeWidth="0.8" />
          <line x1="90" y1="130" x2="90" y2="170" stroke="white" strokeWidth="0.8" />
          <line x1="10" y1="90"  x2="50"  y2="90" stroke="white" strokeWidth="0.8" />
          <line x1="130" y1="90" x2="170" y2="90" stroke="white" strokeWidth="0.8" />
        </svg>
        {/* El pixel — sin border-radius */}
        <div
          style={{
            width: 72,
            height: 72,
            background: "var(--pixel-gradient)",
            borderRadius: 0,
          }}
        />
      </div>
    </div>
  );
}

// ── Tamaños predefinidos ─────────────────────────────────
const SIZES = [
  { name: "pixel-2xs", px: 6,   label: "2xs" },
  { name: "pixel-xs",  px: 10,  label: "xs" },
  { name: "pixel-sm",  px: 16,  label: "sm" },
  { name: "pixel-md",  px: 28,  label: "md" },
  { name: "pixel-lg",  px: 48,  label: "lg" },
  { name: "pixel-xl",  px: 80,  label: "xl" },
];

// ── Blur levels ──────────────────────────────────────────
const BLURS = [
  {
    level: 1,
    token: "--pixel-blur-1",
    value: "2px",
    label: "Sutil",
    desc: "Textura suave. El pixel mantiene sus bordes. Ideal para decoración discreta en slides.",
    blurPx: 2,
    previewSize: 56,
  },
  {
    level: 2,
    token: "--pixel-blur-2",
    value: "8px",
    label: "Leve",
    desc: "Difusión visible. Bordes suavizados. Uso en elementos secundarios de fondo.",
    blurPx: 8,
    previewSize: 56,
  },
  {
    level: 3,
    token: "--pixel-blur-3",
    value: "20px",
    label: "Medio",
    desc: "Mancha de color. Presencia ambiental. Decoración de secciones en landing pages.",
    blurPx: 20,
    previewSize: 56,
  },
  {
    level: 4,
    token: "--pixel-blur-4",
    value: "48px",
    label: "Intenso",
    desc: "Glow amplio. Luz ambiental de fondo. Bajo la UI o en heroes oscuros.",
    blurPx: 48,
    previewSize: 56,
  },
];

// ── Scattered demo ───────────────────────────────────────
const SCATTERED: { top: string; left: string; size: number; opacity: number; blur: number }[] = [
  { top: "12%",  left: "8%",   size: 8,  opacity: 0.9, blur: 0 },
  { top: "22%",  left: "28%",  size: 6,  opacity: 0.7, blur: 2 },
  { top: "55%",  left: "15%",  size: 10, opacity: 0.8, blur: 0 },
  { top: "70%",  left: "42%",  size: 7,  opacity: 0.6, blur: 8 },
  { top: "15%",  left: "60%",  size: 9,  opacity: 0.9, blur: 0 },
  { top: "40%",  left: "75%",  size: 6,  opacity: 0.5, blur: 2 },
  { top: "75%",  left: "80%",  size: 8,  opacity: 0.8, blur: 0 },
  { top: "85%",  left: "55%",  size: 5,  opacity: 0.6, blur: 8 },
  { top: "30%",  left: "90%",  size: 7,  opacity: 0.7, blur: 0 },
  { top: "60%",  left: "5%",   size: 6,  opacity: 0.5, blur: 2 },
];

export function FoundationsPixelPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Fundamentos", href: "/foundations/colors" }]}
        badge="Fundamento"
        title="Pixel"
        description="El pixel degradado es el recurso gráfico primario de Proppia. Simboliza el primer paso — una idea que se convierte en acción. Sin bordes redondeados, siempre con el degradado de marca."
      />

      {/* HERO — pixel con crosshair */}
      <section className="mb-12 overflow-hidden rounded-xl border border-border" style={{ backgroundColor: SLIDE_BG_DARK }}>
        <GradientPixelHero />
        <div
          className="border-t border-white/5 px-6 py-4"
          style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-center text-xs text-white/30">
            El pixel siempre usa el degradado de marca · <code className="font-mono">border-radius: 0</code> estrictamente · el crosshair es opcional (contexto de brandbook)
          </p>
        </div>
      </section>

      {/* TOKENS BASE */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Tokens base</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Variables CSS definidas en <code className="font-mono text-xs">globals.css</code>. Disponibles en toda la aplicación.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Valor</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Descripción</th>
              </tr>
            </thead>
            <tbody className="px-4">
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">--pixel-gradient</code>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        background: "var(--pixel-gradient)",
                        borderRadius: 0,
                        flexShrink: 0,
                      }}
                    />
                    <code className="text-xs font-mono text-muted-foreground">
                      linear-gradient(135deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)
                    </code>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">Degradado de marca. Yellow → Mint → Turquoise.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">--pixel-blur-1</code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-xs font-mono text-muted-foreground">2px</code>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">Sutil — textura suave, bordes apenas difuminados.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">--pixel-blur-2</code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-xs font-mono text-muted-foreground">8px</code>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">Leve — difusión visible, bordes suavizados.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">--pixel-blur-3</code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-xs font-mono text-muted-foreground">20px</code>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">Medio — mancha de color, presencia ambiental.</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">--pixel-blur-4</code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-xs font-mono text-muted-foreground">48px</code>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">Intenso — glow ambiental amplio, luz de fondo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TAMAÑOS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Tamaños</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          No hay tokens de tamaño fijo — el pixel se escala según el contexto. Estas son las referencias orientativas de uso.
        </p>
        <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: SLIDE_BG_DARK }}>
          <div className="flex items-end gap-8 px-10 py-10">
            {SIZES.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: s.px,
                    height: s.px,
                    background: "var(--pixel-gradient)",
                    borderRadius: 0,
                    flexShrink: 0,
                  }}
                />
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] font-semibold text-white/50">{s.label}</span>
                  <span className="text-[10px] text-white/25 font-mono">{s.px}px</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 px-6 py-3">
            <p className="text-[11px] text-white/25">
              Los píxeles en slides suelen estar entre 6–12 px. En heroes y decoraciones de sección, entre 24–80 px.
            </p>
          </div>
        </div>
      </section>

      {/* BLUR — 4 NIVELES */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Blur — 4 niveles de difusión</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Cada nivel de blur transforma el pixel en un glow ambiental. Se aplica con <code className="font-mono text-xs">filter: blur(var(--pixel-blur-N))</code>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BLURS.map((b) => (
            <div
              key={b.level}
              className="overflow-hidden rounded-xl border border-border"
              style={{ backgroundColor: SLIDE_BG_DARK }}
            >
              {/* Preview area */}
              <div className="relative flex h-40 items-center justify-center">
                {/* Glow layer behind (same pixel, more blur for ambiance) */}
                <div
                  style={{
                    position: "absolute",
                    width: b.previewSize,
                    height: b.previewSize,
                    background: "var(--pixel-gradient)",
                    borderRadius: 0,
                    filter: `blur(${Math.max(b.blurPx * 2, 24)}px)`,
                    opacity: 0.35,
                  }}
                />
                {/* The pixel with its blur level */}
                <div
                  style={{
                    width: b.previewSize,
                    height: b.previewSize,
                    background: "var(--pixel-gradient)",
                    borderRadius: 0,
                    filter: b.blurPx > 0 ? `blur(${b.blurPx}px)` : "none",
                    position: "relative",
                  }}
                />
              </div>

              {/* Info */}
              <div className="border-t border-white/5 px-4 py-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    Nivel {b.level} — {b.label}
                  </span>
                  <code className="text-[10px] font-mono text-white/35">{b.value}</code>
                </div>
                <code className="mb-3 block text-[10px] font-mono text-white/30">
                  {b.token}
                </code>
                <p className="text-[11px] leading-relaxed text-white/45">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARACIÓN LADO A LADO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Comparación sin / con blur</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          El mismo pixel a 48 px con los 4 niveles superpuestos visualmente.
        </p>
        <div
          className="flex items-center justify-around rounded-xl border border-border py-12"
          style={{ backgroundColor: SLIDE_BG_DARK }}
        >
          {/* Sin blur */}
          <div className="flex flex-col items-center gap-3">
            <div
              style={{ width: 48, height: 48, background: "var(--pixel-gradient)", borderRadius: 0 }}
            />
            <span className="text-[10px] font-semibold text-white/40">Sin blur</span>
          </div>

          <div className="h-16 w-px" style={{ background: "rgba(255,255,255,0.06)" }} />

          {[2, 8, 20, 48].map((px, i) => (
            <div key={px} className="flex flex-col items-center gap-3">
              <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
                {/* Ambient */}
                <div
                  style={{
                    position: "absolute",
                    width: 48,
                    height: 48,
                    background: "var(--pixel-gradient)",
                    borderRadius: 0,
                    filter: `blur(${px * 2}px)`,
                    opacity: 0.3,
                  }}
                />
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "var(--pixel-gradient)",
                    borderRadius: 0,
                    filter: `blur(${px}px)`,
                    position: "relative",
                  }}
                />
              </div>
              <span className="text-[10px] font-semibold text-white/40">blur({px}px)</span>
              <span className="text-[9px] font-mono text-white/20">--pixel-blur-{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PIXELS ESPARCIDOS — demo de uso en contexto */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Uso en contexto — pixels esparcidos</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Los pixels se distribuyen de forma aleatoria y asimétrica sobre el fondo, combinando blur-0 y blur-1/2 para crear profundidad.
          Nunca se alinean en grid ni se usan con border-radius.
        </p>
        <div
          className="relative overflow-hidden rounded-xl border border-border"
          style={{ backgroundColor: SLIDE_BG_DARK, height: 280 }}
        >
          {/* Grid de fondo */}
          <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.05 }}>
            {[1,2,3,4,5,6,7].map(i => (
              <line key={`v${i}`} x1={`${i*14.28}%`} y1="0" x2={`${i*14.28}%`} y2="100%" stroke="white" strokeWidth="0.5" />
            ))}
            {[1,2,3].map(i => (
              <line key={`h${i}`} x1="0" y1={`${i*25}%`} x2="100%" y2={`${i*25}%`} stroke="white" strokeWidth="0.5" />
            ))}
          </svg>

          {/* Pixels */}
          {SCATTERED.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: "var(--pixel-gradient)",
                borderRadius: 0,
                opacity: p.opacity,
                filter: p.blur > 0 ? `blur(${p.blur}px)` : "none",
              }}
            />
          ))}

          {/* Label */}
          <div className="absolute bottom-4 right-5">
            <span className="text-[10px] text-white/20 font-mono">pixels esparcidos · sin grid · sin border-radius</span>
          </div>
        </div>
      </section>

      {/* SNIPPET DE CÓDIGO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Cómo usarlos</h2>
        <p className="mb-5 text-sm text-muted-foreground">Referencia rápida para CSS, Tailwind y React inline styles.</p>

        <div className="space-y-4">
          {/* CSS nativo */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="border-b border-border bg-muted/30 px-4 py-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">CSS</span>
            </div>
            <pre className="overflow-x-auto p-4 text-[12px] font-mono text-foreground leading-relaxed">
{`.pixel {
  background: var(--pixel-gradient);
  border-radius: 0; /* siempre */
  width: 24px;
  height: 24px;
}

/* Blur sutil */
.pixel-diffused { filter: blur(var(--pixel-blur-1)); }

/* Glow ambiental */
.pixel-glow     { filter: blur(var(--pixel-blur-4)); }`}
            </pre>
          </div>

          {/* React inline */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="border-b border-border bg-muted/30 px-4 py-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">React — inline style</span>
            </div>
            <pre className="overflow-x-auto p-4 text-[12px] font-mono text-foreground leading-relaxed">
{`// Pixel base
<div style={{
  width: 24,
  height: 24,
  background: "var(--pixel-gradient)",
  borderRadius: 0,
}} />

// Pixel con glow ambiental (superponer dos capas)
<div style={{ position: "relative", width: 48, height: 48 }}>
  {/* Capa de glow */}
  <div style={{
    position: "absolute", inset: 0,
    background: "var(--pixel-gradient)",
    borderRadius: 0,
    filter: "blur(var(--pixel-blur-4))",
    opacity: 0.4,
  }} />
  {/* Pixel real */}
  <div style={{
    position: "absolute", inset: 0,
    background: "var(--pixel-gradient)",
    borderRadius: 0,
    filter: "blur(var(--pixel-blur-1))",
  }} />
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* REGLA DE COLOR POR CONTEXTO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Color del pixel según contexto</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Esta es la regla más importante del pixel disperso. El color cambia dependiendo de qué está comunicando el slide.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* General */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div style={{ width: 10, height: 10, background: "var(--pixel-gradient)", borderRadius: 0, flexShrink: 0 }} />
                <p className="text-sm font-semibold text-foreground">Portada y subportada general</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Todos los pixels usan el <strong className="text-foreground">degradado completo de marca</strong> y son del <strong className="text-foreground">mismo tamaño</strong>. Aplica a portadas de Brand Book, propuestas comerciales, casos de éxito y cualquier subportada de sección no vinculada a una división.
              </p>
            </div>
            {/* Preview */}
            <div className="relative mx-5 mb-5 h-24 rounded-lg overflow-hidden" style={{ backgroundColor: SLIDE_BG_DARK }}>
              {[
                { top: "15%", left: "12%" }, { top: "55%", left: "38%" },
                { top: "20%", left: "60%" }, { top: "65%", left: "72%" },
                { top: "35%", left: "85%" }, { top: "70%", left: "20%" },
              ].map((p, i) => (
                <div key={i} className="absolute" style={{
                  top: p.top, left: p.left, width: 8, height: 8,
                  background: "var(--pixel-gradient)",
                  borderRadius: 0,
                }} />
              ))}
            </div>
          </div>

          {/* División de negocio */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div style={{ width: 10, height: 10, background: BRAND_YELLOW, borderRadius: 0 }} />
                  <div style={{ width: 10, height: 10, background: BRAND_MINT, borderRadius: 0 }} />
                  <div style={{ width: 10, height: 10, background: BRAND_TURQUOISE, borderRadius: 0 }} />
                </div>
                <p className="text-sm font-semibold text-foreground">Portada de división de negocio</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Todos los pixels usan el <strong className="text-foreground">color único de esa división</strong> y son del <strong className="text-foreground">mismo tamaño</strong>. No se mezclan colores.
              </p>
            </div>
            {/* Preview — las 3 divisiones */}
            <div className="mx-5 mb-5 grid grid-cols-3 gap-2">
              {[
                { color: BRAND_YELLOW, label: "Performance" },
                { color: BRAND_MINT, label: "Brand" },
                { color: BRAND_TURQUOISE, label: "Digital" },
              ].map((div) => (
                <div key={div.label} className="relative h-16 rounded overflow-hidden" style={{ backgroundColor: SLIDE_BG_DARK }}>
                  {[
                    { top: "15%", left: "10%" }, { top: "55%", left: "40%" },
                    { top: "25%", left: "65%" }, { top: "70%", left: "22%" },
                  ].map((p, i) => (
                    <div key={i} className="absolute" style={{
                      top: p.top, left: p.left, width: 6, height: 6,
                      background: div.color, borderRadius: 0,
                    }} />
                  ))}
                  <p className="absolute bottom-1 left-0 right-0 text-center" style={{ fontSize: 7, color: div.color, opacity: 0.7 }}>{div.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabla divisiones */}
        <div className="mt-4 rounded-xl border border-border overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">División</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Color del pixel</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Token</th>
              </tr>
            </thead>
            <tbody>
              {[
                { division: "Performance & Growth",        color: BRAND_YELLOW, token: "--color-yellow" },
                { division: "Brand & Experience Design",   color: BRAND_MINT, token: "--color-green" },
                { division: "Digital Products & AI Lab",   color: BRAND_TURQUOISE, token: "--color-cyan" },
              ].map((row) => (
                <tr key={row.division} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-sm text-foreground">{row.division}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div style={{ width: 12, height: 12, background: row.color, borderRadius: 0, flexShrink: 0 }} />
                      <code className="font-mono text-xs text-muted-foreground">{row.color}</code>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.token}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* REGLAS */}
      <section className="mb-4">
        <h2 className="mb-1 text-base font-semibold text-foreground">Reglas de uso</h2>
        <p className="mb-5 text-sm text-muted-foreground">Normas que garantizan coherencia con el brandbook.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { positive: true,  label: "Todos los pixels del mismo tamaño", desc: "En una misma composición, todos los pixels dispersos deben ser idénticos en tamaño. No variar entre sí." },
            { positive: true,  label: "Siempre sin border-radius", desc: "El pixel es estrictamente un cuadrado. Nunca redondeado." },
            { positive: true,  label: "Degradado en contexto general", desc: "Portadas y subportadas generales usan siempre el degradado completo de marca." },
            { positive: true,  label: "Color único en portada de división", desc: "Cuando el slide representa una división de negocio, todos los pixels van en el color de esa división." },
            { positive: true,  label: "Distribución asimétrica", desc: "Los pixels se esparcen de forma orgánica, nunca en grids ni alineados." },
            { positive: false, label: "No mezclar colores en un mismo slide", desc: "Un slide tiene o degradado completo, o el color de una sola división. Nunca ambos." },
            { positive: false, label: "No variar el tamaño entre pixels", desc: "Todos los pixels de una misma composición deben ser del mismo tamaño." },
            { positive: false, label: "No usar texto sobre el pixel", desc: "El pixel es decoración pura. Nunca colocar texto encima directamente." },
          ].map((rule, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-xl border border-border p-4"
            >
              <span className={`mt-0.5 shrink-0 ${rule.positive ? "text-[#23F8F7]" : "text-red-400"}`}>
                {rule.positive ? <Check size={16} /> : <X size={16} />}
              </span>
              <div>
                <p className="mb-0.5 text-sm font-semibold text-foreground">{rule.label}</p>
                <p className="text-xs text-muted-foreground">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
