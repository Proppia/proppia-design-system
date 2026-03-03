import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Progress,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@proppia/ui";
import { ArrowRight, CheckCircle2, Info, Layers, Palette, Puzzle, Search, ShieldCheck, Type } from "lucide-react";

import { BRAND_MINT, BRAND_TURQUOISE, BRAND_YELLOW } from "../components/SlideFrame";

// ─────────────────────────────────────────────────────────
// Gradient pixel — recurso gráfico principal del brand (tokenizado)
// ─────────────────────────────────────────────────────────
function GradientPixel({ size = 52 }: { size?: number }) {
  const outer = size * 2.6;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: outer, height: outer }}>
      <svg className="absolute inset-0" width={outer} height={outer} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="white" strokeOpacity="0.1" strokeWidth="0.6" />
        <line x1="50" y1="4"  x2="50" y2="17" stroke="white" strokeOpacity="0.13" strokeWidth="0.6" />
        <line x1="50" y1="83" x2="50" y2="96" stroke="white" strokeOpacity="0.13" strokeWidth="0.6" />
        <line x1="4"  y1="50" x2="17" y2="50" stroke="white" strokeOpacity="0.13" strokeWidth="0.6" />
        <line x1="83" y1="50" x2="96" y2="50" stroke="white" strokeOpacity="0.13" strokeWidth="0.6" />
      </svg>
      <div style={{ width: size, height: size, background: "var(--pixel-gradient)", borderRadius: 0 }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Píxeles difuminados de fondo
// ─────────────────────────────────────────────────────────
const diffusedPixels = [
  { color: BRAND_YELLOW, size: 140, blur: 70, opacity: 0.09, style: { top: "4%",   left: "1%" } },
  { color: BRAND_MINT, size: 100, blur: 55, opacity: 0.08, style: { top: "18%",  right: "2%" } },
  { color: BRAND_TURQUOISE, size: 160, blur: 80, opacity: 0.07, style: { top: "52%",  left: "0%" } },
  { color: BRAND_MINT, size: 90,  blur: 50, opacity: 0.07, style: { bottom: "22%", right: "1%" } },
  { color: BRAND_YELLOW, size: 70,  blur: 40, opacity: 0.06, style: { bottom: "8%", left: "42%" } },
  // Píxeles nítidos pequeños
  { color: BRAND_YELLOW, size: 12, blur: 0, opacity: 0.28, style: { top: "26%", left: "6%" } },
  { color: BRAND_MINT, size: 10, blur: 0, opacity: 0.22, style: { top: "62%", right: "7%" } },
  { color: BRAND_TURQUOISE, size: 8,  blur: 0, opacity: 0.20, style: { top: "40%", left: "47%" } },
];

function DiffusedPixels() {
  return (
    <>
      {diffusedPixels.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute"
          style={{
            width: p.size, height: p.size,
            background: p.color,
            filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
            opacity: p.opacity,
            borderRadius: 0,
            ...p.style,
          }}
        />
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────
// Header — con buscador (punto 5)
// ─────────────────────────────────────────────────────────
function LandingHeader() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/components?q=${encodeURIComponent(query.trim())}`);
    else navigate("/components");
  }

  return (
    <header className="relative z-50 w-full border-b border-white/6 bg-[#0f0f0f]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80">
          <img src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg" alt="Proppia" className="h-6 w-auto" />
          <span className="text-xs font-medium text-white/35">Design System</span>
        </Link>

        {/* Search — central */}
        <form onSubmit={handleSearch} className="mx-auto hidden max-w-xs flex-1 md:flex">
          <div className="relative w-full">
            <Search size={13} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/25" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar componentes..."
              className="h-8 w-full rounded-lg border border-white/8 bg-white/4 pl-8 pr-3 text-xs text-white placeholder:text-white/25 focus:border-white/15 focus:bg-white/6 focus:outline-none"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/20">
              ↵
            </kbd>
          </div>
        </form>

        {/* Nav links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {[
            { label: "Fundamentos", to: "/foundations/colors" },
            { label: "Componentes", to: "/components" },
            { label: "Playground",  to: "/playground/dashboard" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="rounded-md px-3 py-1.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/components"
          className="ml-auto shrink-0 inline-flex h-8 items-center gap-1.5 rounded-md border border-white/12 bg-white/5 px-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/8 lg:ml-0"
        >
          Explorar <ArrowRight size={13} />
        </Link>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────
// App preview — con fade en bordes (punto 1)
// ─────────────────────────────────────────────────────────
function AppPreview() {
  const [progress] = useState(68);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="relative">
      {/* El contenido */}
      <div className="flex flex-col gap-3">
        <Card className="border-white/8 bg-white/4 shadow-xl backdrop-blur">
          <CardHeader className="pb-2 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://ui-avatars.com/api/?name=A+C&background=1a2e2e&color=23F8F7&size=128&bold=true&font-size=0.45" alt="AC" />
                  <AvatarFallback className="text-[10px] text-white">AC</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm text-white">Proyecto Alpha</CardTitle>
                  <p className="text-[11px] text-white/35">Proppia · 2026</p>
                </div>
              </div>
              <Badge className="border-white/12 bg-white/6 text-[10px] text-white/60">Activo</Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="mb-2 flex justify-between text-xs text-white/35">
              <span>Progreso del sprint</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5 bg-white/8" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Estrategia", val: "33.3%", color: "#F6E342" },
                { label: "Diseño",     val: "33.3%", color: "#75EFB1" },
                { label: "Tecnología", val: "33.3%", color: "#23F8F7" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/5 bg-white/3 py-2 text-center">
                  <div className="mx-auto mb-1 h-0.5 w-6 rounded-full" style={{ backgroundColor: s.color }} />
                  <p className="text-xs font-semibold text-white">{s.val}</p>
                  <p className="text-[10px] text-white/30">{s.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="border-white/8 bg-white/4 backdrop-blur">
            <CardContent className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium text-white/75">Notificaciones</p>
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} className="scale-90" />
              </div>
              <Alert variant="default" className="border-[#23F8F7]/30 bg-[#23F8F7]/6 [&>svg]:text-[#23F8F7]">
                <Info size={13} />
                <AlertTitle className="text-xs text-white/75">Actualización</AlertTitle>
                <AlertDescription className="text-xs text-white/45">
                  Nueva versión disponible.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="border-white/8 bg-white/4 backdrop-blur">
            <CardContent className="p-4">
              <p className="mb-3 text-xs font-medium text-white/75">Acciones</p>
              <div className="flex flex-col gap-1.5">
                <Button size="sm" className="h-7 w-full text-xs">Publicar</Button>
                <Button size="sm" variant="outline" className="h-7 w-full border-white/10 text-xs text-white/60 hover:bg-white/6">
                  Revisar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-white/8 bg-white/4 backdrop-blur">
          <CardContent className="p-4">
            <Tabs defaultValue="overview">
              <TabsList className="h-7 bg-white/5">
                <TabsTrigger value="overview" className="h-6 text-[11px]">Overview</TabsTrigger>
                <TabsTrigger value="analytics" className="h-6 text-[11px]">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Buscar en el proyecto..."
                    className="h-7 border-white/10 bg-white/5 text-xs text-white placeholder:text-white/25"
                  />
                  <Button size="sm" className="h-7 shrink-0 px-3 text-xs">Ir</Button>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="mt-2">
              <Alert variant="default" className="border-white/8 bg-white/4 py-2 [&>svg]:text-white/40">
                <CheckCircle2 size={12} />
                <AlertDescription className="text-[11px] text-white/55">
                  Métricas actualizadas correctamente.
                </AlertDescription>
              </Alert>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Fade radial derecho — integra al fondo sin corte abrupto */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32"
        style={{ background: "linear-gradient(to left, #0f0f0f 0%, #0f0f0f 20%, transparent 100%)" }}
      />
      {/* Fade radial superior */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{ background: "linear-gradient(to bottom, #0f0f0f 0%, transparent 100%)" }}
      />
      {/* Fade inferior — más generoso */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
        style={{ background: "linear-gradient(to top, #0f0f0f 0%, #0f0f0f 15%, transparent 100%)" }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Divisiones (punto 4: glow de color mejorado)
// ─────────────────────────────────────────────────────────
const divisions = [
  {
    number: "01",
    name: "PERFORMANCE\n& GROWTH.",
    desc: "Estrategia, acompañamiento comercial, analítica, CRM, pauta y SEO.",
    color: "#F6E342",
  },
  {
    number: "02",
    name: "BRAND &\nEXPERIENCE DESIGN.",
    desc: "Branding, identidad visual, campañas, dirección creativa y contenido audiovisual.",
    color: "#75EFB1",
  },
  {
    number: "03",
    name: "DIGITAL PRODUCTS\n& AI LAB.",
    desc: "Plataformas, aplicaciones e integraciones inteligentes. UX/UI y automatización.",
    color: "#23F8F7",
  },
];

// ─────────────────────────────────────────────────────────
// Sección de fundamentos visuales (punto 3)
// ─────────────────────────────────────────────────────────
const COLOR_SWATCHES = ["#23F8F7", "#75EFB1", "#F6E342", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.07)"];
const SPACING_STEPS  = [4, 8, 16, 24, 32, 48];

const foundations = [
  {
    icon: <Palette size={15} />,
    label: "Tokens de Color",
    desc: "18 variables semánticas",
    to: "/foundations/colors",
    accent: "#23F8F7",
    preview: (
      <div className="flex flex-col gap-3">
        {/* Swatches grandes */}
        <div className="flex gap-2">
          {COLOR_SWATCHES.map((c, i) => (
            <div
              key={i}
              className="flex-1 rounded-md"
              style={{ backgroundColor: c, height: 44 }}
            />
          ))}
        </div>
        {/* Barra gradiente brand */}
        <div className="h-1.5 w-full rounded-full" style={{ background: "var(--brand-gradient)" }} />
      </div>
    ),
  },
  {
    icon: <Type size={15} />,
    label: "Tipografía",
    desc: "Escala modular · Bw Gradual",
    to: "/foundations/typography",
    accent: "#75EFB1",
    preview: (
      <div className="flex flex-col justify-end gap-1 leading-none">
        <span className="text-[42px] font-black leading-none text-white tracking-tight">Aa</span>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-white/50">Bb</span>
          <span className="text-base font-medium text-white/30">Cc</span>
          <span className="text-sm text-white/20">Dd</span>
        </div>
        <div className="mt-1 h-px w-full" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }} />
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/20">Bw Gradual</span>
      </div>
    ),
  },
  {
    icon: <Layers size={15} />,
    label: "Espaciado & Radio",
    desc: "Sistema de 4px base",
    to: "/foundations/spacing",
    accent: "#F6E342",
    preview: (
      <div className="flex flex-col gap-3">
        {/* Bloques de espaciado alineados al fondo */}
        <div className="flex items-end gap-1.5">
          {SPACING_STEPS.map((s) => (
            <div
              key={s}
              className="rounded-sm bg-white/15"
              style={{ width: 12, height: s * 0.9 }}
            />
          ))}
        </div>
        {/* Radio preview */}
        <div className="flex gap-2">
          {[0, 4, 8, 12, 9999].map((r) => (
            <div
              key={r}
              className="h-7 w-7 border border-white/20 bg-white/6"
              style={{ borderRadius: r }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <ShieldCheck size={15} />,
    label: "Iconografía",
    desc: "Lucide · stroke-based",
    to: "/foundations/iconography",
    accent: "#F6E342",
    preview: (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-5 gap-2">
          {[Layers, Palette, Puzzle, Search, ShieldCheck, ArrowRight, CheckCircle2, Info, Type, Layers].map((Icon, i) => (
            <div key={i} className="flex h-8 w-8 items-center justify-center rounded-md border border-white/8 bg-white/4 text-white/40">
              <Icon size={14} />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-white/20">1000+ íconos disponibles</p>
      </div>
    ),
  },
];

// ─────────────────────────────────────────────────────────
// CoverPage
// ─────────────────────────────────────────────────────────
export function CoverPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#0f0f0f] text-white">
      <DiffusedPixels />

      <LandingHeader />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-20 pt-20 lg:grid-cols-2 lg:items-start lg:pb-24 lg:pt-24">
        {/* Left — copy */}
        <div>
          <div className="mb-8">
            <GradientPixel size={48} />
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
            Sistema de Diseño · Proppia · 2026
          </p>

          <h1 className="mb-5 text-5xl font-black leading-[1.08] tracking-tight text-white lg:text-6xl">
            Todo comienza
            <br />
            con una visión.
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/45">
            Sistema de componentes, tokens y patrones para equipos Proppia.
            Estrategia, diseño y tecnología hablando el mismo lenguaje visual.
          </p>

          {/* Botones — punto 2: más contraste en el secundario */}
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/components">
                Explorar Componentes <ArrowRight size={14} className="ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/6 text-white/80 hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <Link to="/foundations/colors">Ver Tokens</Link>
            </Button>
          </div>

          {/* Métricas */}
          <div
            className="mt-12 flex items-center border-t border-white/8 pt-10"
            style={{ paddingBottom: 0, marginBottom: 0 }}
          >
            {[
              { val: "18+",  label: "Componentes" },
              { val: "5",    label: "Fundamentos" },
              { val: "100%", label: "Proppia" },
            ].map((s, i) => (
              <>
                {i > 0 && (
                  <div
                    key={`div-${i}`}
                    style={{
                      width: 1,
                      height: 36,
                      background: "rgba(255,255,255,0.1)",
                      alignSelf: "center",
                      flexShrink: 0,
                      margin: "0 28px",
                    }}
                  />
                )}
                <div key={s.val}>
                  <p
                    style={{
                      fontSize: "2.75rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.val}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: 6,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Right — live app preview */}
        <div className="relative lg:pt-2">
          {/* Glow ambiental turquoise detrás del panel */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse at 60% 50%, rgba(35,248,247,0.03) 0%, transparent 65%)",
            }}
          />
          {/* Máscara radial — los componentes se disuelven en el fondo */}
          <div
            className="relative z-10"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 90% 85% at 65% 45%, black 30%, transparent 75%)",
              maskImage: "radial-gradient(ellipse 90% 85% at 65% 45%, black 30%, transparent 75%)",
              overflow: "visible",
              transform: "scale(1.05)",
              transformOrigin: "center left",
            }}
          >
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ── Separador suave ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* ── Fundamentos ─── */}
      <section className="bg-[#141414]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/25">
                Fundamentos
              </p>
              <h2 className="text-2xl font-black text-white">
                La base del sistema.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/40">
                Colores, tipografía, espaciado, iconografía y el pixel. Los tokens y recursos visuales que definen la identidad de Proppia y sirven de base para todos los componentes.
              </p>
            </div>
            <Link
              to="/foundations/colors"
              className="hidden items-center gap-1.5 text-sm text-white/35 transition-colors hover:text-white/60 sm:flex"
            >
              Ver todos <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.map((f) => (
              <Link
                key={f.label}
                to={f.to}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/6 bg-white/3 p-5 pb-5 transition-all duration-[250ms] ease-out hover:bg-white/5 hover:-translate-y-0.5"
                style={{ minHeight: 270 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(35,248,247,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(35,248,247,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Glow de acento en esquina superior derecha */}
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: f.accent }}
                />

                {/* Preview real — ocupa el espacio superior */}
                <div className="flex-1 py-4">{f.preview}</div>

                {/* Footer de la card */}
                <div className="mt-4 border-t border-white/6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white/70 transition-colors group-hover:text-white">{f.label}</p>
                      <p className="text-[11px] text-white/30">{f.desc}</p>
                    </div>
                    <span className="text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-white/50">
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Separador suave ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* ── Tres divisiones ───── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">
            Nuestras divisiones
          </p>
          <h2 className="text-3xl font-black text-white">
            Un ecosistema, tres líneas.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {divisions.map((d) => (
            <div
              key={d.number}
              className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-white/14 hover:bg-white/5"
            >
              {/* Glow de color — grande, difuminado (punto 4) */}
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-25 group-hover:scale-125"
                style={{ backgroundColor: d.color }}
              />
              {/* Segundo glow más nítido */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 opacity-8 blur-xl transition-opacity duration-500 group-hover:opacity-15"
                style={{ backgroundColor: d.color }}
              />

              <span className="mb-5 block text-xs font-bold text-white/20">{d.number}</span>

              <div className="mb-4 flex items-center gap-2">
                {/* Píxel nítido + glow inline */}
                <div className="relative">
                  <div className="h-3 w-3" style={{ backgroundColor: d.color, borderRadius: 0 }} />
                  <div
                    className="absolute inset-0 blur-sm opacity-60"
                    style={{ backgroundColor: d.color, borderRadius: 0 }}
                  />
                </div>
              </div>

              <h3 className="mb-1 whitespace-pre-line text-sm font-black uppercase leading-snug tracking-tight text-white">
                {d.name}
              </h3>

              <div className="mb-4 h-0.5 w-8 rounded-full" style={{ backgroundColor: d.color }} />

              <p className="text-sm leading-relaxed text-white/40">{d.desc}</p>

              {/* Flecha hover — señal de interactividad */}
              <span
                className="absolute bottom-5 right-5 text-lg font-light opacity-0 -translate-x-1 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: d.color }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Separador suave ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />
      </div>

      {/* ── Design System features ── */}
      <section className="bg-[#141414]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/25">
              Design System Proppia
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <Layers size={14} />,    label: "Atomic Design" },
                { icon: <Palette size={14} />,   label: "Tokens semánticos" },
                { icon: <ShieldCheck size={14} />, label: "WCAG AA" },
                { icon: <Puzzle size={14} />,    label: "shadcn/ui base" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span className="text-white/30">{f.icon}</span>
                  <span className="text-sm text-white/50">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Separador suave ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />
      </div>

      {/* ── Closing ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-10 md:p-14">
          {/* Monograma "pp." gigante como watermark — identidad Proppia */}
          <img
            src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -right-8 w-64 select-none opacity-[0.03]"
          />
          {/* Píxel gradiente decorativo */}
          <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 opacity-12 blur-3xl" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />
          <div className="pointer-events-none absolute right-10 top-10 h-6 w-6 opacity-22" style={{ background: "var(--pixel-gradient)", borderRadius: 0 }} />

          <GradientPixel size={28} />
          <h2 className="mb-2 mt-6 text-3xl font-black text-white lg:text-4xl">
            De la idea al resultado.
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/40">
            Cada componente, token y patrón está construido para que los equipos
            Proppia produzcan con coherencia, velocidad y propósito.
            <span className="mt-1 block text-sm italic text-white/25">Hazlo tuyo, hazlo Proppia.</span>
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/components">
              Empezar <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Separador suave ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />
      </div>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <img src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg" alt="Proppia" className="h-5 w-auto opacity-25" />
            <span className="text-xs text-white/20">Design System · {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-5 text-xs text-white/20">
            <Link to="/components"         className="transition-colors hover:text-white/45">Componentes</Link>
            <Link to="/foundations/colors" className="transition-colors hover:text-white/45">Tokens</Link>
            <Link to="/documentation"      className="transition-colors hover:text-white/45">Gobierno</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
