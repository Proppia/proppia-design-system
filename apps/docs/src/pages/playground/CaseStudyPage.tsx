import {
  Alert, AlertDescription,
  Badge,
  Button,
  Card, CardContent,
  Progress,
} from "@proppia/ui";
import {
  ArrowRight, ArrowUpRight, BarChart2,
  CheckCircle2, Clock, Layers, Target, TrendingUp, Zap,
} from "lucide-react";
import { PageHeader } from "../../components/PageHeader";

import { BRAND_GRADIENT, BRAND_MINT, BRAND_TURQUOISE, BRAND_YELLOW } from "../../components/SlideFrame";

// ─── Caso: Rediseño digital + performance para Retail Corp ───
const challenge = [
  "Tasa de conversión e-commerce del 0.8% (benchmark industria: 2.5%)",
  "Identidad visual desactualizada, sin sistema de diseño definido",
  "Inversión en pauta sin estructura ni atribución correcta",
  "Equipo interno sin capacidad para escalar campañas digitales",
];

const solution = [
  {
    division: "Brand & Experience Design",
    color: BRAND_MINT,
    icon: <Layers size={15} />,
    items: [
      "Rediseño completo de identidad visual y tono de marca",
      "Nuevo sitio web con Design System propio",
      "Optimización UX del funnel de compra (3 pasos → 1 paso)",
    ],
  },
  {
    division: "Performance & Growth",
    color: BRAND_YELLOW,
    icon: <TrendingUp size={15} />,
    items: [
      "Estrategia de pauta Meta + Google con atribución multitoque",
      "SEO técnico y de contenidos — 60 artículos en 4 meses",
      "Implementación CRM HubSpot + automatización de nurturing",
    ],
  },
  {
    division: "Digital Products & AI Lab",
    color: BRAND_TURQUOISE,
    icon: <Zap size={15} />,
    items: [
      "Dashboard de analytics en tiempo real para el equipo interno",
      "Integración API Shopify → ERP",
      "Bot de atención al cliente entrenado con IA (resolución 74%)",
    ],
  },
];

const results = [
  { label: "Conversión e-commerce", before: "0.8%",  after: "3.2%",  delta: "+300%", progress: 80, color: BRAND_TURQUOISE },
  { label: "ROAS campañas pauta",   before: "1.4x",  after: "4.8x",  delta: "+243%", progress: 90, color: BRAND_MINT },
  { label: "Tráfico orgánico",      before: "4.2K",  after: "18K",   delta: "+328%", progress: 72, color: BRAND_YELLOW },
  { label: "Tiempo de carga web",   before: "6.8s",  after: "1.2s",  delta: "-82%",  progress: 60, color: BRAND_TURQUOISE },
  { label: "NPS marca",             before: "34",    after: "71",    delta: "+108%", progress: 85, color: BRAND_MINT },
  { label: "Ticket promedio",       before: "$42",   after: "$68",   delta: "+62%",  progress: 65, color: BRAND_YELLOW },
];

const timeline = [
  { week: "Sem 1–2",  label: "Discovery & Auditoría",         done: true },
  { week: "Sem 3–4",  label: "Estrategia & Propuesta",        done: true },
  { week: "Mes 2",    label: "Rediseño + Setup técnico",      done: true },
  { week: "Mes 3",    label: "Lanzamiento + Activación pauta",done: true },
  { week: "Mes 4–6",  label: "Optimización continua",         done: true },
  { week: "Ongoing",  label: "Gestión mensual",               done: false },
];

const testimonial = {
  quote: "Proppia no es una agencia tradicional. Nos trataron como socios estratégicos desde el día 1. Los resultados hablan solos: triplicamos la conversión en 6 meses y el equipo interno aprendió a leer los datos de manera que nunca habían podido antes.",
  name: "Daniela F.",
  role: "Directora de Marketing — Retail Corp",
  initials: "DF",
};

export function CaseStudyPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        breadcrumbs={[{ label: "Playground" }]}
        badge="Fundamento"
        title="Case Study"
        description="Ejemplo real de presentación de resultados a cliente. Basado en el formato Proppia: contexto, reto, solución por división, resultados y testimonio."
      />

      {/* ── Header del caso ── */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10">
        {/* Pixel decorativo — sin border-radius (tokenizado) */}
        <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 opacity-10 blur-3xl" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />
        <div className="pointer-events-none absolute right-10 top-10 h-8 w-8 opacity-30" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="border-[#23F8F7]/30 bg-[#23F8F7]/8 text-[#0a7e7f] dark:text-[#23F8F7]">Retail Corp</Badge>
              <Badge className="border-border bg-muted text-muted-foreground">E-commerce · Retail</Badge>
              <Badge className="border-border bg-muted text-muted-foreground">6 meses · Full service</Badge>
            </div>
            <h2 className="mb-3 text-3xl font-black leading-tight text-foreground">
              De 0.8% a 3.2% de conversión en 6 meses.
            </h2>
            <div className="mb-4 h-0.5 w-12 rounded-full" style={{ background: BRAND_GRADIENT }} />
            <p className="text-base leading-relaxed text-muted-foreground">
              Una empresa de retail con 12 años en el mercado y presencia digital
              fragmentada. Sin sistema de diseño, sin atribución de pauta y con un
              e-commerce que no convertía. Proppia entró con las 3 divisiones.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Duración",        val: "6 meses",   icon: <Clock size={14} /> },
              { label: "Divisiones",       val: "3 / 3",     icon: <Layers size={14} /> },
              { label: "ROI del proyecto", val: "8.4×",      icon: <BarChart2 size={14} /> },
              { label: "NPS final",        val: "71 / 100",  icon: <Target size={14} /> },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-background p-4">
                <div className="mb-2 flex items-center gap-1.5 text-muted-foreground">{s.icon}<span className="text-xs">{s.label}</span></div>
                <p className="text-2xl font-black text-foreground">{s.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El reto ── */}
      <section>
        <div className="mb-6">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">01 — El reto</p>
          <h3 className="text-xl font-black text-foreground">¿Qué encontramos al llegar?</h3>
        </div>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {challenge.map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-lg border border-border bg-destructive/5 p-3">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                  <p className="text-sm text-muted-foreground">{c}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── La solución ── */}
      <section>
        <div className="mb-6">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">02 — La solución</p>
          <h3 className="text-xl font-black text-foreground">Tres divisiones. Un solo objetivo.</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {solution.map((s) => (
            <Card key={s.division} className="border-border bg-card">
              <CardContent className="p-5">
                <div
                  className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border"
                  style={{ borderColor: `${s.color}30`, backgroundColor: `${s.color}10`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="mb-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: s.color }} />
                <h4 className="mb-4 text-xs font-black uppercase tracking-tight text-foreground">{s.division}</h4>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: s.color }} />
                      <span className="text-xs leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Resultados ── */}
      <section>
        <div className="mb-6">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">03 — Resultados</p>
          <h3 className="text-xl font-black text-foreground">Los números al cierre de 6 meses.</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <Card key={r.label} className="border-border bg-card">
              <CardContent className="p-5">
                <p className="mb-3 text-xs font-medium text-muted-foreground">{r.label}</p>
                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground/60">Antes</p>
                    <p className="text-lg font-bold text-muted-foreground line-through decoration-muted-foreground/40">{r.before}</p>
                  </div>
                  <ArrowRight size={14} className="mb-1 text-muted-foreground/30" />
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground/60">Después</p>
                    <p className="text-2xl font-black text-foreground">{r.after}</p>
                  </div>
                </div>
                <Progress value={r.progress} className="mb-2 h-1.5" />
                <div className="flex items-center gap-1">
                  <TrendingUp size={11} style={{ color: r.color }} />
                  <span className="text-xs font-semibold" style={{ color: r.color }}>{r.delta}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section>
        <div className="mb-6">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">04 — Proceso</p>
          <h3 className="text-xl font-black text-foreground">Cómo lo ejecutamos.</h3>
        </div>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="relative">
              <div className="absolute left-[18px] top-0 h-full w-px bg-border" />
              <div className="space-y-5">
                {timeline.map((t, i) => (
                  <div key={t.week} className="flex items-start gap-4 pl-1">
                    <div
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold"
                      style={t.done
                        ? { borderColor: "#75EFB1", backgroundColor: "#75EFB110", color: "#1a7a50" }
                        : { borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))", color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      {t.done ? <CheckCircle2 size={14} /> : i + 1}
                    </div>
                    <div className="pt-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">{t.week}</p>
                      <p className="text-sm font-semibold text-foreground">{t.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Testimonio ── */}
      <section>
        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <div className="mb-4 h-0.5 w-10 rounded-full" style={{ background: BRAND_GRADIENT }} />
            <blockquote className="mb-6 text-lg font-medium leading-relaxed text-foreground">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-sm font-bold text-foreground">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── CTA ── */}
      <section>
        <Alert variant="info">
          <ArrowUpRight size={14} />
          <AlertDescription className="flex items-center justify-between gap-4">
            <span>¿Quieres resultados similares para tu empresa?</span>
            <Button size="sm" className="shrink-0 gap-1.5">
              Solicitar propuesta <ArrowRight size={12} />
            </Button>
          </AlertDescription>
        </Alert>
      </section>
    </div>
  );
}
