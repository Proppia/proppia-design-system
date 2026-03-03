import { ArrowRight, Layers, Palette, Puzzle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

// Light-mode safe versions of brand colors for icons/text
const pillars = [
  {
    icon: <Palette size={20} className="text-[#0a7e7f] dark:text-[#23F8F7]" />,
    accent: "#23F8F7",
    title: "Tokens semánticos",
    desc: "Variables CSS y Tailwind alineadas con la paleta Proppia. Sin colores hardcodeados.",
  },
  {
    icon: <Puzzle size={20} className="text-[#1a7a50] dark:text-[#75EFB1]" />,
    accent: "#75EFB1",
    title: "Atomic Design",
    desc: "Átomos, moléculas y organismos. Cada componente con un rol claro y sin ambigüedad.",
  },
  {
    icon: <Layers size={20} className="text-[#6b5600] dark:text-[#F6E342]" />,
    accent: "#F6E342",
    title: "Agnóstico de producto",
    desc: "Una sola librería que alimenta todos los productos y plataformas Proppia.",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#0a7e7f] dark:text-[#23F8F7]" />,
    accent: "#23F8F7",
    title: "Accesibilidad WCAG 2.1 AA",
    desc: "Focus ring, contraste de color, aria-labels y estados visibles en todos los componentes.",
  },
];

const quickLinks = [
  { label: "Tokens", href: "/tokens", desc: "Variables CSS + Tailwind" },
  { label: "Colors", href: "/foundations/colors", desc: "Paleta de marca Proppia" },
  { label: "Typography", href: "/foundations/typography", desc: "Bw Nista Grotesk, escala y uso" },
  { label: "Buttons", href: "/components/buttons", desc: "Variantes, tamaños, estados" },
  { label: "Cards", href: "/components/cards", desc: "Surface principal de contenido" },
  { label: "Alerts", href: "/components/alerts", desc: "Feedback y mensajes del sistema" },
];

export function WelcomePage() {
  return (
    <div>
      <PageHeader
        title="Resumen del Sistema"
        description="Sistema de componentes, tokens y patrones para equipos de diseño y desarrollo de Proppia. Construido para producir con coherencia, velocidad y sin fricción entre diseño y código."
      />

      {/* Pillars */}
      <section className="mb-12">
        <h2 className="mb-6 text-lg font-semibold text-foreground">Principios</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40">
                {p.icon}
              </div>
              <p className="mb-1 font-medium text-foreground">{p.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Objective */}
      <section className="mb-12 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Contexto</h2>
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              <p className="text-sm font-medium text-foreground">Problema</p>
            </div>
            <p className="pl-3.5 text-sm leading-relaxed text-muted-foreground">
              Equipos trabajando sin lenguaje visual compartido generan inconsistencias,
              ralentizan entregas y diluyen identidad de marca. Sin un sistema centralizado,
              cada proyecto reinventa componentes en lugar de refinarlos.
            </p>
          </div>
          <div className="h-px bg-border" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {/* accessible mint dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a7a50] dark:bg-[#75EFB1]" />
              <p className="text-sm font-medium text-foreground">Objetivo</p>
            </div>
            <p className="pl-3.5 text-sm leading-relaxed text-muted-foreground">
              Establecer un lenguaje de diseño unificado y librería de componentes que
              acelere producción, garantice coherencia funcional y visual, y permita a los
              equipos enfocarse en resolver problemas de negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="mb-6 text-lg font-semibold text-foreground">Explorar</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <div>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {l.label}
                </p>
                <p className="text-xs text-muted-foreground">{l.desc}</p>
              </div>
              <ArrowRight
                size={14}
                className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
