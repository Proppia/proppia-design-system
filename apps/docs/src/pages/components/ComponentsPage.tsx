import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";

const atoms = [
  { href: "/components/buttons", label: "Buttons", desc: "Acciones principales y secundarias" },
  { href: "/components/text-input", label: "Text Input", desc: "Campos de entrada de texto" },
  { href: "/components/text-area", label: "Text Area", desc: "Texto multilínea" },
  { href: "/components/switch", label: "Switch / Checkbox", desc: "Selección booleana y múltiple" },
  { href: "/components/typography", label: "Text & Heading", desc: "Escala tipográfica del sistema" },
  { href: "/components/avatars", label: "Avatars", desc: "Imagen o iniciales de usuario" },
  { href: "/components/tabs", label: "Tabs", desc: "Navegación por pestañas" },
  { href: "/components/list", label: "List", desc: "Listas semánticas de ítems" },
  { href: "/components/progress-bar", label: "Progress Bar", desc: "Indicador de progreso lineal" },
  { href: "/components/progress-circle", label: "Progress Circle", desc: "Indicador circular" },
  { href: "/components/alerts", label: "Alerts", desc: "Mensajes de feedback y estado" },
  { href: "/components/cards", label: "Cards", desc: "Superficie de contenido principal" },
  { href: "/components/banners", label: "Banners", desc: "Mensajes de página completa" },
  { href: "/components/carousel", label: "Carousel", desc: "Contenido deslizable" },
];

const molecules = [
  { href: "/components/dropdowns", label: "Dropdowns", desc: "Menú contextual desplegable" },
  { href: "/components/modals", label: "Modals", desc: "Diálogos y hojas laterales" },
];

const organisms = [
  { href: "/components/navbar", label: "Navbar / Header", desc: "Barra de navegación principal" },
];

// Light-mode accessible colors + dark neons
const groups = [
  {
    title: "Átomos",
    // Bar: decorative bg only (not text) — bright color OK
    barClass: "bg-[#23F8F7]",
    // Badge text: accessible
    textClass: "text-[#0a7e7f] dark:text-[#23F8F7]",
    bgClass: "bg-[#23F8F7]/8",
    borderClass: "border-[#23F8F7]/30",
    items: atoms,
  },
  {
    title: "Moléculas",
    barClass: "bg-[#75EFB1]",
    textClass: "text-[#1a7a50] dark:text-[#75EFB1]",
    bgClass: "bg-[#75EFB1]/8",
    borderClass: "border-[#75EFB1]/30",
    items: molecules,
  },
  {
    title: "Organismos",
    barClass: "bg-[#F6E342]",
    textClass: "text-[#6b5600] dark:text-[#F6E342]",
    bgClass: "bg-[#F6E342]/8",
    borderClass: "border-[#F6E342]/30",
    items: organisms,
  },
];

function ComponentCard({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <Link
      to={href}
      className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-sm"
    >
      <span className="font-medium text-foreground transition-colors group-hover:text-primary">
        {label}
      </span>
      <span className="text-xs leading-relaxed text-muted-foreground">{desc}</span>
    </Link>
  );
}

export function ComponentsPage() {
  return (
    <div>
      <PageHeader
        title="Componentes"
        description="Catálogo completo de componentes del sistema. Cada uno con variantes, tamaños, estados y guía de uso. Basados en shadcn/ui y adaptados a la identidad Proppia."
      />

      <div className="space-y-12">
        {groups.map((g) => (
          <section key={g.title} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`h-5 w-0.5 rounded-full ${g.barClass}`} />
              <h2 className="text-base font-semibold text-foreground">{g.title}</h2>
              <span
                className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${g.borderClass} ${g.bgClass} ${g.textClass}`}
              >
                {g.items.length}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((c) => (
                <ComponentCard key={c.href} {...c} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
