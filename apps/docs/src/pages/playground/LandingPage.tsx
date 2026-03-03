import React, { useState } from "react";
import {
  Alert, AlertDescription,
  Avatar, AvatarFallback,
  Badge,
  Button,
  Card, CardContent,
  Input,
} from "@proppia/ui";
import {
  ArrowRight, BarChart2, CheckCircle2, Globe,
  Layers, Lightbulb, MessageSquare, Rocket, ShieldCheck, Zap,
} from "lucide-react";
import { PageHeader } from "../../components/PageHeader";

import { BRAND_GRADIENT, BRAND_MINT, BRAND_TURQUOISE, BRAND_YELLOW } from "../../components/SlideFrame";

const features = [
  {
    icon: <BarChart2 size={18} />,
    title: "Analytics en tiempo real",
    desc: "Métricas de conversión, tráfico y ROI actualizadas al instante para tomar decisiones con datos.",
    color: BRAND_YELLOW,
  },
  {
    icon: <Zap size={18} />,
    title: "Automatización inteligente",
    desc: "Flujos de trabajo automatizados que conectan CRM, pauta y contenidos en un solo sistema.",
    color: BRAND_MINT,
  },
  {
    icon: <Globe size={18} />,
    title: "Presencia digital unificada",
    desc: "Desde el SEO hasta las campañas pagas — todo coordinado bajo una misma estrategia.",
    color: BRAND_TURQUOISE,
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Seguridad y compliance",
    desc: "Datos protegidos bajo estándares internacionales con auditoría continua.",
    color: BRAND_YELLOW,
  },
  {
    icon: <Layers size={18} />,
    title: "Integración sin fricciones",
    desc: "Conecta con tu stack actual — HubSpot, Shopify, Meta Ads, Google y más.",
    color: BRAND_MINT,
  },
  {
    icon: <Lightbulb size={18} />,
    title: "Estrategia + Ejecución",
    desc: "No solo consultoría — Proppia acompaña la implementación desde el día 1.",
    color: BRAND_TURQUOISE,
  },
];

const testimonials = [
  {
    quote: "Proppia transformó nuestra estrategia digital. En 3 meses triplicamos el tráfico orgánico y el ROAS subió de 1.8x a 4.2x.",
    name: "Valentina R.",
    role: "CMO — Retail Corp",
    initials: "VR",
  },
  {
    quote: "El equipo de Brand & Experience rediseñó nuestra identidad completa en tiempo récord. El resultado superó todas las expectativas.",
    name: "Mateo L.",
    role: "CEO — StartUp Verde",
    initials: "ML",
  },
  {
    quote: "La app que desarrollaron para nosotros tiene un 99.9% de uptime y el equipo sigue iterando con nosotros cada sprint.",
    name: "Sofía M.",
    role: "CTO — FinTech Lab",
    initials: "SM",
  },
];

const stats = [
  { val: "3×", label: "Crecimiento promedio en 6 meses" },
  { val: "150+", label: "Proyectos entregados" },
  { val: "98%", label: "Retención de clientes" },
  { val: "4.9★", label: "Satisfacción promedio" },
];

const plans = [
  {
    name: "Starter",
    price: "$1,200",
    period: "/mes",
    desc: "Para equipos que están comenzando su transformación digital.",
    features: ["1 línea de servicio", "Reporte mensual", "Slack dedicado", "4 entregas/mes"],
    cta: "Comenzar",
    highlight: false,
    color: BRAND_MINT,
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/mes",
    desc: "Para empresas en expansión que necesitan resultados rápidos.",
    features: ["2 líneas de servicio", "Dashboard en tiempo real", "Account Manager", "Entregas ilimitadas", "Integración CRM"],
    cta: "Hablar con un experto",
    highlight: true,
    color: BRAND_TURQUOISE,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Solución completa para corporativos con necesidades a escala.",
    features: ["3 líneas de servicio", "Equipo dedicado", "SLA garantizado", "Onboarding personalizado", "API access"],
    cta: "Solicitar propuesta",
    highlight: false,
    color: BRAND_YELLOW,
  },
];

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <div className="space-y-16">
      <PageHeader
        breadcrumbs={[{ label: "Playground" }]}
        badge="Fundamento"
        title="Landing B2B"
        description="Ejemplo de landing corporativa para un servicio Proppia. Composición completa: hero, features, testimonios, pricing y CTA final."
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16">
        {/* Pixel decorativo — sin border-radius (tokenizado) */}
        <div className="pointer-events-none absolute right-10 top-10 h-8 w-8 opacity-40" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />
        <div className="pointer-events-none absolute right-8 top-8 h-16 w-16 opacity-10 blur-2xl" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />

        <div className="max-w-2xl">
          <Badge className="mb-5 border-primary/30 bg-primary/8 text-primary">
            Proppia · Performance & Growth
          </Badge>
          <h1 className="mb-4 text-4xl font-black leading-[1.08] tracking-tight text-foreground md:text-5xl">
            De la idea<br />al resultado.
          </h1>
          <div className="mb-5 h-0.5 w-16 rounded-full" style={{ background: BRAND_GRADIENT }} />
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Proppia conecta estrategia, diseño y tecnología en un solo equipo.
            Más clientes, más conversiones, más impacto — sin fricción.
          </p>

          {submitted ? (
            <Alert variant="success" className="max-w-md">
              <CheckCircle2 size={14} />
              <AlertDescription>¡Gracias! Te contactamos en menos de 24 h.</AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
              <Input
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="shrink-0 gap-1.5">
                Solicitar demo <ArrowRight size={14} />
              </Button>
            </form>
          )}

          <p className="mt-3 text-xs text-muted-foreground">Sin compromisos. Primera sesión gratuita.</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 text-center">
            <div
              className="mx-auto mb-2 h-0.5 w-8 rounded-full"
              style={{ backgroundColor: [BRAND_YELLOW, BRAND_MINT, BRAND_TURQUOISE, BRAND_YELLOW][i % 4] }}
            />
            <p className="text-3xl font-black tracking-tight text-foreground">{s.val}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Features ── */}
      <section>
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Por qué Proppia</p>
          <h2 className="text-2xl font-black text-foreground">Todo lo que necesitas, integrado.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="group border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-sm">
              <CardContent className="p-5">
                <div
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border"
                  style={{ borderColor: `${f.color}30`, backgroundColor: `${f.color}10`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section>
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Clientes</p>
          <h2 className="text-2xl font-black text-foreground">Lo que dicen quienes ya trabajan con nosotros.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card">
              <CardContent className="p-5">
                <MessageSquare size={16} className="mb-3 text-primary/40" />
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div className="flex items-center gap-2.5 border-t border-border pt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section>
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Planes</p>
          <h2 className="text-2xl font-black text-foreground">Elige cómo quieres trabajar con Proppia.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative border-border bg-card transition-all ${p.highlight ? "ring-1 ring-primary/30" : ""}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="border-primary/30 bg-primary/10 text-primary text-[10px]">Más popular</Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div className="mb-1 h-0.5 w-8 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="mt-3 text-base font-black text-foreground">{p.name}</h3>
                <div className="my-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <p className="mb-4 text-xs text-muted-foreground">{p.desc}</p>
                <ul className="mb-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={12} style={{ color: p.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full gap-1.5"
                  variant={p.highlight ? "default" : "outline"}
                  size="sm"
                >
                  <Rocket size={12} /> {p.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">¿Listo?</p>
        <h2 className="mb-3 text-3xl font-black text-foreground">Hazlo tuyo, hazlo Proppia.</h2>
        <p className="mb-6 text-base text-muted-foreground">Primera sesión estratégica sin costo. Sin compromisos.</p>
        <Button size="lg" className="gap-2 font-semibold">
          Hablar con un experto <ArrowRight size={14} />
        </Button>
      </section>
    </div>
  );
}
