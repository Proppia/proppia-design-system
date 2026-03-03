import { useCallback, useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import {
  COVER_COL_W,
  COVER_LOGO_H,
  COVER_PIXELS,
  COVER_TITLE_SIZE,
  COVER_YEAR_SIZE,
  FRAME_FONT_SIZE,
  FRAME_FONT_WEIGHT,
  FRAME_H,
  FRAME_LOGO_H,
  FRAME_OPACITY,
  FRAME_PAD_X,
  FRAME_PAD_Y,
  FOOTER_H,
  LOGO_DARK,
  LOGO_LIGHT,
  LOGO_WORDMARK_DARK,
  PIXEL_PX,
  PresentationModal,
  SlideFrame,
  SlideLayout,
  SLIDE_BG_DARK,
  SLIDE_W,
  SLIDE_H,
  type SlideEntry,
} from "../../components/SlideFrame";

function SlideCoverExample() {
  const slideRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const logoRef  = useRef<HTMLImageElement>(null);
  const yearRef  = useRef<HTMLParagraphElement>(null);

  const [hLines, setHLines] = useState<number[]>([]);
  const [vLines, setVLines] = useState<number[]>([]);
  const [yearLeft, setYearLeft] = useState<number>(COVER_COL_W + 32);

  const measure = useCallback(() => {
    const slide = slideRef.current;
    const title = titleRef.current;
    const logo  = logoRef.current;
    const yr    = yearRef.current;
    if (!slide || !title || !yr) return;

    const sr = slide.getBoundingClientRect();
    const w  = sr.width;
    const h  = sr.height;
    if (w === 0 || h === 0) return;

    const yf = (v: number) => (v - sr.top) / h;
    const xf = (v: number) => (v - sr.left) / w;
    const tr  = title.getBoundingClientRect();
    const yrR = yr.getBoundingClientRect();

    const hList: number[] = [yf(tr.top), yf(tr.bottom)];
    if (logo) {
      const lr = logo.getBoundingClientRect();
      hList.push(yf(lr.top), yf(lr.bottom));
    }
    hList.push(yf(yrR.top), yf(yrR.bottom));
    setHLines(hList);

    // El slide está dentro de un contenedor con transform:scale — convertir viewport → local
    const scale = w / SLIDE_W;
    const toLocal = (vp: number) => vp / scale;
    const newYearLeft = toLocal(tr.right - sr.left);
    setYearLeft(newYearLeft);

    const yrWidthLocal = yrR.width / scale;
    const vList: number[] = [xf(tr.left), xf(tr.right)];
    if (logo) {
      const lr = logo.getBoundingClientRect();
      vList.push(xf(lr.left), xf(lr.right));
    }
    vList.push(newYearLeft / SLIDE_W, (newYearLeft + yrWidthLocal) / SLIDE_W);
    setVLines(vList);
  }, []);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const raf = requestAnimationFrame(() => requestAnimationFrame(measure));
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, [measure]);

  return (
    <div
      ref={slideRef}
      style={{ position: "relative", width: SLIDE_W, height: SLIDE_H, backgroundColor: SLIDE_BG_DARK, overflow: "hidden" }}
    >
      {/* Grid — columnas fijas + líneas horizontales de ancho completo alineadas al contenido */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.08 }}>
        {[1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={`${(i/8)*100}%`} y1="0" x2={`${(i/8)*100}%`} y2="100%" stroke="white" strokeWidth="0.5" />
        ))}
        {hLines.map((y, i) => (
          <line key={`h${i}`} x1="0" y1={`${y*100}%`} x2="100%" y2={`${y*100}%`} stroke="white" strokeWidth="0.5" />
        ))}
        {vLines.map((x, i) => (
          <line key={`va${i}`} x1={`${x*100}%`} y1="0" x2={`${x*100}%`} y2="100%" stroke="white" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Pixels — todos PIXEL_PX × PIXEL_PX, degradado completo de marca */}
      {COVER_PIXELS.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          top: p.top, left: p.left, right: p.right,
          width: PIXEL_PX, height: PIXEL_PX,
          background: "var(--pixel-gradient)", borderRadius: 0,
        }} />
      ))}

      {/* Contenido — grid estructural 2 × 1 (cols 1-4 izq · cols 5-8 dcha) */}
      <div style={{
        position: "absolute",
        top: FRAME_H, bottom: FRAME_H, left: 0, right: 0,
        display: "grid", gridTemplateColumns: "1fr 1fr",
      }}>
        {/* Izquierda: título cols 2-4 — padding simétrico COVER_COL_W en ambos lados */}
        <div style={{ display: "flex", alignItems: "center", paddingLeft: COVER_COL_W, paddingRight: COVER_COL_W }}>
          <p
            ref={titleRef}
            style={{ fontFamily: '"Bw Gradual", sans-serif', fontSize: COVER_TITLE_SIZE, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", color: "white", margin: 0, whiteSpace: "nowrap" }}
          >
            ESTRUCTURA &<br />METODOLOGÍA
          </p>
        </div>
        {/* Derecha: logo cols 5-7 — padding simétrico COVER_COL_W en ambos lados */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: COVER_COL_W, paddingRight: COVER_COL_W }}>
          <img
            ref={logoRef}
            src={LOGO_WORDMARK_DARK}
            alt="Proppia"
            style={{ height: COVER_LOGO_H, width: "auto" }}
            onLoad={measure}
          />
        </div>
      </div>

      {/* Año — borde izq alineado con borde der del título + espaciado dinámico */}
      <div style={{
        position: "absolute", left: yearLeft, bottom: FRAME_H + 20,
      }}>
        <p
          ref={yearRef}
          style={{
            fontFamily: '"Bw Gradual", sans-serif',
            fontSize: COVER_YEAR_SIZE, fontWeight: 700,
            letterSpacing: "0.04em", color: "white", margin: 0,
          }}
        >
          2026
        </p>
      </div>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────
function Px({ top, left, size, color }: { top: number; left: number; size: number; color: string }) {
  return (
    <div style={{
      position: "absolute", top, left,
      width: size, height: size,
      background: color, borderRadius: 0,
    }} />
  );
}

// ── Anotación visual sobre el layout ─────────────────────
function Annotation({
  top, left, right, bottom, label, color = "#23F8F7",
}: {
  top?: number; left?: number; right?: number; bottom?: number;
  label: string; color?: string;
}) {
  return (
    <div style={{
      position: "absolute", top, left, right, bottom,
      display: "flex", alignItems: "center",
      gap: 6, pointerEvents: "none",
    }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 10, color, fontFamily: "monospace", whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SLIDES DEMO
// ══════════════════════════════════════════════════════════

// Demo 1 — Modo oscuro (dark) con contenido real
function SlideDarkDemo() {
  return (
    <SlideLayout mode="dark" website="@proppia.co" year="2026">
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 48 }}>
        {/* Pixel */}
        <div style={{ position: "relative", width: COVER_LOGO_H, height: COVER_LOGO_H }}>
          <div style={{ position: "absolute", inset: 0, background: "var(--pixel-gradient)", borderRadius: 0, filter: "blur(20px)", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--pixel-gradient)", borderRadius: 0 }} />
        </div>
        {/* Texto */}
        <div style={{ color: "white" }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>Slide — modo oscuro</p>
          <p style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em" }}>Área de<br />protección.</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 14, lineHeight: 1.6 }}>
            El frame garantiza que el monograma,<br />
            el sitio web y el año estén siempre presentes.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

// Demo 2 — Modo claro (light) con contenido real
function SlideLightDemo() {
  return (
    <SlideLayout mode="light" website="@proppia.co" year="2026">
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 48 }}>
        <div style={{ position: "relative", width: COVER_LOGO_H, height: COVER_LOGO_H }}>
          <div style={{ position: "absolute", inset: 0, background: "var(--pixel-gradient)", borderRadius: 0, filter: "blur(20px)", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--pixel-gradient)", borderRadius: 0 }} />
        </div>
        <div>
          <p style={{ fontSize: 11, color: "rgba(0,0,0,0.4)", marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>Slide — modo claro</p>
          <p style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#141414" }}>Área de<br />protección.</p>
          <p style={{ fontSize: 13, color: "rgba(0,0,0,0.4)", marginTop: 14, lineHeight: 1.6 }}>
            Mismo layout, mismo comportamiento.<br />
            Solo cambia el color del fondo y los elementos.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

// Demo 3 — Anatomía anotada del layout (dark)
function SlideAnatomy() {
  const RULER_X  = SLIDE_W - 28; // posición X del ruler derecho
  const LABEL_X  = SLIDE_W - 22; // posición X de los labels del ruler

  return (
    <div style={{ position: "relative", width: SLIDE_W, height: SLIDE_H, backgroundColor: SLIDE_BG_DARK, overflow: "hidden" }}>

      {/* ── HEADER zone ─────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 0, height: FRAME_H,
        background: "rgba(35,248,247,0.05)",
        zIndex: 2,
      }} />
      {/* Separador inferior del header */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: FRAME_H,
        height: "1px", background: "rgba(35,248,247,0.35)", zIndex: 5,
      }} />
      {/* Contenido del header — tal y como aparece en SlideLayout */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 0, height: FRAME_H,
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        padding: `${FRAME_PAD_Y}px ${FRAME_PAD_X}px 0`,
        opacity: FRAME_OPACITY, zIndex: 6,
      }}>
        <img src={LOGO_DARK} alt="Proppia" style={{ height: FRAME_LOGO_H, display: "block", marginTop: 1 }} />
        <span style={{ fontSize: FRAME_FONT_SIZE, fontWeight: FRAME_FONT_WEIGHT, color: "white", letterSpacing: "0.02em" }}>@proppia.co</span>
        <span style={{ fontSize: FRAME_FONT_SIZE, fontWeight: FRAME_FONT_WEIGHT, color: "white", letterSpacing: "0.02em" }}>2026</span>
      </div>
      {/* Label HEADER — debajo del separador, izquierda */}
      <div style={{ position: "absolute", left: FRAME_PAD_X, top: FRAME_H + 6, zIndex: 10 }}>
        <span style={{ fontSize: 8, color: "#23F8F7", fontFamily: "monospace", letterSpacing: "0.06em" }}>
          HEADER · {FRAME_H}px · opacity {FRAME_OPACITY}
        </span>
      </div>

      {/* ── CONTENT zone ────────────────────────────────── */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: FRAME_H, bottom: FOOTER_H,
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 2,
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Área de contenido
          </p>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.1)", marginTop: 6 }}>
            {SLIDE_W} × {SLIDE_H - FRAME_H - FOOTER_H} px efectivos
          </p>
        </div>
      </div>

      {/* ── FOOTER zone ─────────────────────────────────── */}
      {/* Separador superior del footer */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: FOOTER_H,
        height: "1px", background: "rgba(246,227,66,0.35)", zIndex: 5,
      }} />
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: FOOTER_H,
        background: "rgba(246,227,66,0.05)",
        zIndex: 2,
      }} />
      {/* Contenido del footer */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: FOOTER_H,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: FRAME_OPACITY, zIndex: 6,
      }}>
        <span style={{ fontSize: FRAME_FONT_SIZE, fontWeight: FRAME_FONT_WEIGHT, color: "white" }}>
          © Proppia SAS, Todos los derechos reservados.
        </span>
      </div>
      {/* Label FOOTER — encima del separador, izquierda */}
      <div style={{ position: "absolute", left: FRAME_PAD_X, bottom: FOOTER_H + 6, zIndex: 10 }}>
        <span style={{ fontSize: 8, color: "#F6E342", fontFamily: "monospace", letterSpacing: "0.06em" }}>
          FOOTER · {FOOTER_H}px · opacity {FRAME_OPACITY}
        </span>
      </div>

      {/* ── Rulers derecho ──────────────────────────────── */}
      {/* Ruler header */}
      <div style={{ position: "absolute", left: RULER_X, top: 0, width: 1, height: FRAME_H, background: "rgba(35,248,247,0.5)", zIndex: 10 }} />
      {/* Tick top */}
      <div style={{ position: "absolute", left: RULER_X - 3, top: 0, width: 7, height: 1, background: "rgba(35,248,247,0.5)", zIndex: 10 }} />
      {/* Tick bottom */}
      <div style={{ position: "absolute", left: RULER_X - 3, top: FRAME_H, width: 7, height: 1, background: "rgba(35,248,247,0.5)", zIndex: 10 }} />
      {/* Label centrado en el ruler */}
      <div style={{ position: "absolute", left: LABEL_X, top: FRAME_H / 2 - 5, zIndex: 10 }}>
        <span style={{ fontSize: 8, color: "#23F8F7", fontFamily: "monospace", whiteSpace: "nowrap" }}>{FRAME_H} px</span>
      </div>

      {/* Ruler footer */}
      <div style={{ position: "absolute", left: RULER_X, bottom: 0, width: 1, height: FOOTER_H, background: "rgba(246,227,66,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: RULER_X - 3, bottom: 0, width: 7, height: 1, background: "rgba(246,227,66,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: RULER_X - 3, bottom: FOOTER_H, width: 7, height: 1, background: "rgba(246,227,66,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: LABEL_X, bottom: FOOTER_H / 2 - 5, zIndex: 10 }}>
        <span style={{ fontSize: 8, color: "#F6E342", fontFamily: "monospace", whiteSpace: "nowrap" }}>{FOOTER_H} px</span>
      </div>

      {/* ── Padding annotation ──────────────────────────── */}
      {/* Flecha horizontal izquierda — padding X */}
      <div style={{ position: "absolute", left: 0, top: FRAME_H / 2, width: FRAME_PAD_X, height: 1, background: "rgba(117,239,177,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: 0, top: FRAME_H / 2 - 3, width: 1, height: 7, background: "rgba(117,239,177,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: FRAME_PAD_X, top: FRAME_H / 2 - 3, width: 1, height: 7, background: "rgba(117,239,177,0.5)", zIndex: 10 }} />
      <div style={{ position: "absolute", left: 4, top: FRAME_H / 2 + 4, zIndex: 10 }}>
        <span style={{ fontSize: 8, color: "#75EFB1", fontFamily: "monospace", whiteSpace: "nowrap" }}>{FRAME_PAD_X}px</span>
      </div>
    </div>
  );
}

// Demo 4 — Layout en slide de propuesta (dark, con contenido)
function SlideProposalExample() {
  return (
    <SlideLayout mode="dark" website="@proppia.co" year="2026">
      <div style={{ position: "relative", width: "100%", height: "100%", padding: "36px 52px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        {/* Pixel accent */}
        <div style={{ width: 32, height: 4, background: "var(--pixel-gradient)", borderRadius: 0 }} />
        {/* Número */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500, letterSpacing: "0.04em" }}>5</p>
        {/* Título */}
        <div>
          <p style={{ fontSize: 48, fontWeight: 900, color: "white", lineHeight: 1.0, letterSpacing: "-0.02em" }}>Alcance</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 10 }}>Durante 3 meses trabajaremos en:</p>
        </div>
        {/* Lista */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}>
          {[
            "Diagnóstico estratégico de la firma",
            "Arquitectura de servicios",
            "Definición de cliente ideal y foco estratégico",
            "Arquitectura de marca",
            "Estrategia de transición 360°",
            "Business Plan 2026",
          ].map((item) => (
            <p key={item} style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>· {item}</p>
          ))}
        </div>
        <p style={{ fontSize: 12, fontWeight: 700, color: "white", marginTop: 4 }}>Todo integrado en un solo marco estratégico.</p>
      </div>
    </SlideLayout>
  );
}

// Demo 5 — Layout en slide de propuesta (light, con contenido)
function SlideProposalLightExample() {
  return (
    <SlideLayout mode="light" website="@proppia.co" year="2026">
      <div style={{ position: "relative", width: "100%", height: "100%", padding: "36px 52px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        <div style={{ width: 32, height: 4, background: "var(--pixel-gradient)", borderRadius: 0 }} />
        <p style={{ fontSize: 13, color: "rgba(0,0,0,0.35)", fontWeight: 500, letterSpacing: "0.04em" }}>5</p>
        <div>
          <p style={{ fontSize: 48, fontWeight: 900, color: "#141414", lineHeight: 1.0, letterSpacing: "-0.02em" }}>Alcance</p>
          <p style={{ fontSize: 13, color: "rgba(0,0,0,0.4)", marginTop: 10 }}>Durante 3 meses trabajaremos en:</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}>
          {[
            "Diagnóstico estratégico de la firma",
            "Arquitectura de servicios",
            "Definición de cliente ideal y foco estratégico",
            "Arquitectura de marca",
            "Estrategia de transición 360°",
            "Business Plan 2026",
          ].map((item) => (
            <p key={item} style={{ fontSize: 11, color: "rgba(0,0,0,0.5)", lineHeight: 1.5 }}>· {item}</p>
          ))}
        </div>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#141414", marginTop: 4 }}>Todo integrado en un solo marco estratégico.</p>
      </div>
    </SlideLayout>
  );
}

// Demo 6 — Closing slide (dark)
function SlideClosingDemo() {
  return (
    <SlideLayout mode="dark" website="@proppia.co" year="2026">
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        {/* Monograma watermark */}
        <img
          src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg"
          alt=""
          style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            height: "80%", opacity: 0.04,
            pointerEvents: "none", userSelect: "none",
          }}
        />
        {/* Contenido */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 20,
        }}>
          <img
            src="/branding/proppia-logos/Logo Principal Todo Blanco.svg"
            alt="Proppia"
            style={{ height: 44, opacity: 0.9 }}
          />
          {/* Línea gradiente */}
          <div style={{ width: 200, height: 3, background: "var(--pixel-gradient)", borderRadius: 0 }} />
        </div>
      </div>
    </SlideLayout>
  );
}

// ══════════════════════════════════════════════════════════
// Page
// ══════════════════════════════════════════════════════════
export function FoundationsLayoutPage() {
  const [presentingIndex, setPresentingIndex] = useState<number | null>(null);

  const SLIDES: SlideEntry[] = [
    { label: "Layout — Modo oscuro",                    content: <SlideDarkDemo /> },
    { label: "Layout — Modo claro",                     content: <SlideLightDemo /> },
    { label: "Anatomía del layout",                     content: <SlideAnatomy /> },
    { label: "Slide de propuesta — Modo oscuro",        content: <SlideProposalExample /> },
    { label: "Slide de propuesta — Modo claro",         content: <SlideProposalLightExample /> },
    { label: "Slide de cierre — Modo oscuro",           content: <SlideClosingDemo /> },
    { label: "Portada — Sin SlideLayout",               content: <SlideCoverExample /> },
  ];

  const expand = (i: number) => setPresentingIndex(i);

  return (
    <div>
      {presentingIndex !== null && (
        <PresentationModal
          slides={SLIDES}
          initialIndex={presentingIndex}
          onClose={() => setPresentingIndex(null)}
        />
      )}

      <PageHeader
        breadcrumbs={[{ label: "Fundamentos", href: "/foundations/colors" }]}
        badge="Fundamento"
        title="Layout de Slide"
        description='El área de protección estándar de Proppia para presentaciones. Garantiza que el monograma, el sitio web y el año estén siempre presentes al 50% de opacidad, en modo oscuro o claro.'
      />

      {/* HERO — dark vs light */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <SlideFrame label="Modo oscuro — dark" onExpand={() => expand(0)}>
            <SlideDarkDemo />
          </SlideFrame>
          <SlideFrame label="Modo claro — light" onExpand={() => expand(1)}>
            <SlideLightDemo />
          </SlideFrame>
        </div>
      </section>

      {/* ANATOMÍA */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Anatomía</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          El layout divide el slide en tres zonas. El contenido de la presentación vive únicamente en el área central.
        </p>
        <div className="mb-6">
          <SlideFrame label="Anatomía anotada del layout" onExpand={() => expand(2)}>
            <SlideAnatomy />
          </SlideFrame>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              zone: "Header",
              height: `${FRAME_H} px`,
              color: "#23F8F7",
              items: ["Monograma sin línea — izquierda", "Sitio web (@proppia.co) — centro", "Año (2026) — derecha"],
            },
            {
              zone: "Contenido",
              height: `${SLIDE_H - FRAME_H - FOOTER_H} px efectivos`,
              color: "#75EFB1",
              items: ["Área libre para el slide", "No tiene restricciones de layout interno", "El grid y los pixels viven aquí"],
            },
            {
              zone: "Footer",
              height: `${FOOTER_H} px`,
              color: "#F6E342",
              items: ["Copyright centrado", "© Proppia SAS", "Todos los derechos reservados."],
            },
          ].map((z) => (
            <div key={z.zone} className="rounded-xl border border-border p-4">
              <div className="mb-3 flex items-center gap-2">
                <div style={{ width: 8, height: 8, background: z.color, borderRadius: 0, flexShrink: 0 }} />
                <p className="text-sm font-bold text-foreground">{z.zone}</p>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">{z.height}</span>
              </div>
              <ul className="space-y-1.5">
                {z.items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TOKENS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Especificaciones</h2>
        <p className="mb-5 text-sm text-muted-foreground">Valores fijos del layout sobre el canvas de referencia <code className="font-mono text-xs">1040 × 585 px</code>.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Propiedad</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Valor</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {[
                { prop: "Canvas",              val: `${SLIDE_W} × ${SLIDE_H} px`,                           desc: "Relación 16:9 — equivale a 1 PPT slide" },
                { prop: "Header height",       val: `${FRAME_H} px`,                                         desc: "Zona superior — monograma, sitio, año" },
                { prop: "Footer height",       val: `${FOOTER_H} px`,                                        desc: "Zona inferior — copyright" },
                { prop: "Padding horizontal",  val: `${FRAME_PAD_X} px (~${((FRAME_PAD_X/SLIDE_W)*100).toFixed(1)}% del ancho)`, desc: "Margen interno del header y footer" },
                { prop: "Padding vertical",    val: `${FRAME_PAD_Y} px desde el borde`,                      desc: "Distancia desde el borde superior al baseline" },
                { prop: "Opacidad del frame",  val: `${FRAME_OPACITY}`,                                       desc: "Aplica a header y footer en ambos modos" },
                { prop: "Monograma",           val: "Monograma … Sin Linea.svg",                              desc: `Blanco (dark) / Negro (light) · height: ${FRAME_LOGO_H} px` },
                { prop: "Tipografía frame",    val: `${FRAME_FONT_SIZE}px / weight ${FRAME_FONT_WEIGHT}`,     desc: "Light — aplica a website, año y copyright" },
                { prop: "Copyright",           val: "© Proppia SAS, Todos los derechos reservados.",          desc: "Centrado en el footer · generado automáticamente" },
                { prop: "Fondo dark",          val: SLIDE_BG_DARK,                                            desc: "Color base de presentaciones (slides)" },
                { prop: "Fondo light",         val: "#FFFFFF",                                                desc: "Blanco puro — propuestas formales" },
              ].map((row) => (
                <tr key={row.prop} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{row.prop}</td>
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono text-muted-foreground">{row.val}</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* EJEMPLOS REALES */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Ejemplos en contexto</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          El mismo layout aplicado a tipos de slide distintos. El contenido cambia; el frame es siempre idéntico.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <SlideFrame label="Propuesta de servicio — Modo oscuro" onExpand={() => expand(3)}>
            <SlideProposalExample />
          </SlideFrame>
          <SlideFrame label="Propuesta de servicio — Modo claro" onExpand={() => expand(4)}>
            <SlideProposalLightExample />
          </SlideFrame>
        </div>
        <div className="mt-4">
          <SlideFrame label="Slide de cierre — Modo oscuro" onExpand={() => expand(5)}>
            <SlideClosingDemo />
          </SlideFrame>
        </div>
      </section>

      {/* PORTADAS — excepción */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Excepción — Portadas</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Las portadas (<em>covers</em>) <strong>no usan <code className="font-mono text-xs">SlideLayout</code></strong>.
          Tienen su propia estructura visual definida sobre el grid de 8 columnas: título en las columnas 1–4 (izquierda),
          logo wordmark en las columnas 5–8 (derecha) y año centrado al fondo.
          El grid decorativo y los pixels dispersos son parte de la composición, no el frame.
        </p>
        <div className="mb-5">
          <SlideFrame label="Portada — sin frame estándar" onExpand={() => expand(6)}>
            <SlideCoverExample />
          </SlideFrame>
        </div>

        {/* Diagrama — grid de la portada anotado */}
        <div className="mb-5 overflow-hidden rounded-xl border border-border" style={{ backgroundColor: SLIDE_BG_DARK }}>
          <div className="border-b border-border bg-black/40 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Grid 8 × 4 — maquetación de portada</span>
          </div>
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <svg
              viewBox={`0 0 ${SLIDE_W} ${SLIDE_H}`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            >
              {/* Fondo */}
              <rect width={SLIDE_W} height={SLIDE_H} fill={SLIDE_BG_DARK} />

              {/* ── Zonas de color ────────────────────────── */}
              {/* Margen col 1 */}
              <rect x={0} y={0} width={COVER_COL_W} height={SLIDE_H} fill="rgba(246,227,66,0.07)" />
              {/* Margen col 8 */}
              <rect x={SLIDE_W - COVER_COL_W} y={0} width={COVER_COL_W} height={SLIDE_H} fill="rgba(246,227,66,0.07)" />
              {/* Zona título cols 2-4 */}
              <rect x={COVER_COL_W} y={FRAME_H} width={COVER_COL_W * 3} height={SLIDE_H - FRAME_H * 2} fill="rgba(246,227,66,0.09)" />
              {/* Zona logo cols 5-7 */}
              <rect x={COVER_COL_W * 4} y={FRAME_H} width={COVER_COL_W * 3} height={SLIDE_H - FRAME_H * 2} fill="rgba(117,239,177,0.09)" />

              {/* ── Líneas del grid ───────────────────────── */}
              {[1,2,3,4,5,6,7].map(i => (
                <line key={`v${i}`}
                  x1={SLIDE_W * i / 8} y1={0}
                  x2={SLIDE_W * i / 8} y2={SLIDE_H}
                  stroke="white" strokeWidth="0.5"
                  opacity={i === 1 || i === 7 ? 0.22 : 0.1}
                />
              ))}
              {[1,2,3].map(i => (
                <line key={`h${i}`}
                  x1={0} y1={SLIDE_H * i / 4}
                  x2={SLIDE_W} y2={SLIDE_H * i / 4}
                  stroke="white" strokeWidth="0.5" opacity={0.08}
                />
              ))}

              {/* Borde top/bottom del área activa (FRAME_H) */}
              <line x1={0} y1={FRAME_H} x2={SLIDE_W} y2={FRAME_H} stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1={0} y1={SLIDE_H - FRAME_H} x2={SLIDE_W} y2={SLIDE_H - FRAME_H} stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="4 4" />

              {/* ── Etiquetas de columna ──────────────────── */}
              {[1,2,3,4,5,6,7,8].map(i => (
                <text key={i}
                  x={SLIDE_W * (i - 0.5) / 8} y={20}
                  textAnchor="middle" fontSize={10}
                  fill={i === 1 || i === 8 ? "rgba(246,227,66,0.5)" : "rgba(255,255,255,0.25)"}
                  fontFamily="monospace"
                >
                  {i}
                </text>
              ))}

              {/* ── Labels de zona ───────────────────────── */}
              {/* MARGEN col 1 */}
              <text x={COVER_COL_W / 2} y={SLIDE_H / 2 - 8}
                textAnchor="middle" fontSize={9} fill="rgba(246,227,66,0.5)" fontFamily="monospace">MARGEN</text>
              <text x={COVER_COL_W / 2} y={SLIDE_H / 2 + 6}
                textAnchor="middle" fontSize={8} fill="rgba(246,227,66,0.3)" fontFamily="monospace">{COVER_COL_W}px</text>
              {/* TÍTULO cols 2-4 */}
              <text x={COVER_COL_W * 2.5} y={FRAME_H + 24}
                textAnchor="middle" fontSize={10} fontWeight="bold" fill="rgba(246,227,66,0.7)" fontFamily="monospace">TÍTULO</text>
              <text x={COVER_COL_W * 2.5} y={FRAME_H + 38}
                textAnchor="middle" fontSize={8} fill="rgba(246,227,66,0.4)" fontFamily="monospace">cols 2–4 · paddingL {COVER_COL_W}px</text>
              {/* LOGO cols 5-7 */}
              <text x={COVER_COL_W * 5.5} y={FRAME_H + 24}
                textAnchor="middle" fontSize={10} fontWeight="bold" fill="rgba(117,239,177,0.7)" fontFamily="monospace">LOGO</text>
              <text x={COVER_COL_W * 5.5} y={FRAME_H + 38}
                textAnchor="middle" fontSize={8} fill="rgba(117,239,177,0.4)" fontFamily="monospace">cols 5–7 · centrado</text>
              {/* MARGEN col 8 */}
              <text x={SLIDE_W - COVER_COL_W / 2} y={SLIDE_H / 2 - 8}
                textAnchor="middle" fontSize={9} fill="rgba(246,227,66,0.5)" fontFamily="monospace">MARGEN</text>
              <text x={SLIDE_W - COVER_COL_W / 2} y={SLIDE_H / 2 + 6}
                textAnchor="middle" fontSize={8} fill="rgba(246,227,66,0.3)" fontFamily="monospace">{COVER_COL_W}px</text>

              {/* AÑO — marcador en col 3.5 */}
              <line
                x1={COVER_COL_W * 3.5} y1={SLIDE_H - FRAME_H - 12}
                x2={COVER_COL_W * 3.5} y2={SLIDE_H - FRAME_H - 38}
                stroke="rgba(35,248,247,0.5)" strokeWidth="0.5" strokeDasharray="3 3"
              />
              <circle cx={COVER_COL_W * 3.5} cy={SLIDE_H - FRAME_H - 10} r={3} fill="rgba(35,248,247,0.7)" />
              <text x={COVER_COL_W * 3.5 + 10} y={SLIDE_H - FRAME_H - 22}
                fontSize={9} fill="rgba(35,248,247,0.6)" fontFamily="monospace">AÑO · col 3.5 · {Math.round(COVER_COL_W * 3.5)}px</text>

              {/* Punto de corte 50 % */}
              <line x1={SLIDE_W / 2} y1={FRAME_H} x2={SLIDE_W / 2} y2={SLIDE_H - FRAME_H}
                stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4" />
              <text x={SLIDE_W / 2 + 6} y={SLIDE_H / 2}
                fontSize={9} fill="rgba(255,255,255,0.3)" fontFamily="monospace">corte 50 % · {SLIDE_W / 2}px</text>

              {/* Medida ancho total */}
              <line x1={4} y1={SLIDE_H - 6} x2={SLIDE_W - 4} y2={SLIDE_H - 6}
                stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              <text x={SLIDE_W / 2} y={SLIDE_H - 1}
                textAnchor="middle" fontSize={8} fill="rgba(255,255,255,0.2)" fontFamily="monospace">{SLIDE_W}px</text>
            </svg>
          </div>
        </div>

        {/* Elementos de composición */}
        <div className="mb-3 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Título",
              desc: `Bold 700, uppercase. Empieza en columna 2 — padding izquierdo = 1 COL_W (${SLIDE_W / 8}px). Centrado verticalmente entre los dos FRAME_H.`,
              color: "#F6E342",
            },
            {
              label: "Logo wordmark",
              desc: `Logo Principal (con línea gradiente). Cols 5–7 centrado. Padding derecho = 1 COL_W (${SLIDE_W / 8}px) desde el borde.`,
              color: "#75EFB1",
            },
            {
              label: "Año",
              desc: `Bold 700. Centrado entre col 1 y col 7 (right: COL_W) → centro en col 3.5 = ${SLIDE_W / 8 * 3.5}px. Anclado al fondo: bottom = FRAME_H + 20px.`,
              color: "#23F8F7",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border p-4">
              <div className="mb-3 h-0.5 w-8" style={{ background: item.color, borderRadius: 0 }} />
              <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Reglas de grid y pixel */}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Grid estructural 2 × 1",
              desc: `El contenido se divide exactamente en dos mitades iguales (50 % / 50 %) sobre el grid de 8 columnas. El punto de corte vertical cae en la columna 4 → ${SLIDE_W / 2}px en el canvas de ${SLIDE_W}px.`,
              color: "#75EFB1",
            },
            {
              label: "Pixels dispersos — reglas",
              desc: `Todos del mismo tamaño (~${PIXEL_PX}px). Fondo degradado completo de marca en portadas generales. Fondo color único de división en portadas de unidad de negocio. Sin mezclar colores en el mismo slide. Sin border-radius (cuadrado estricto).`,
              color: "#F6E342",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border p-4">
              <div className="mb-3 h-0.5 w-8" style={{ background: item.color, borderRadius: 0 }} />
              <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* API */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">API del componente</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          <code className="font-mono text-xs">SlideLayout</code> está exportado desde <code className="font-mono text-xs">src/components/SlideFrame.tsx</code> y disponible en cualquier página del sistema.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-muted/30 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">React / TSX</span>
          </div>
          <pre className="overflow-x-auto p-4 text-[12px] font-mono text-foreground leading-relaxed">{`import { SlideLayout } from "../../components/SlideFrame";

// Uso mínimo (modo oscuro por defecto)
<SlideLayout>
  <YourSlideContent />
</SlideLayout>

// Modo claro
<SlideLayout mode="light">
  <YourSlideContent />
</SlideLayout>

// Con todas las props
<SlideLayout
  mode="dark"           // "dark" | "light" — default: "dark"
  website="@proppia.co" // texto del centro del header — default: "@proppia.co"
  year="2026"           // esquina derecha del header  — default: "2026"
  copyright="..."       // pie de página — auto-genera "© Proppia SAS, Todos los derechos reservados." si se omite
>
  {/* El contenido ocupa el área entre header (52px) y footer (36px) */}
  {/* Coordenadas disponibles: 1040 × 497 px */}
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    {/* ... */}
  </div>
</SlideLayout>`}</pre>
        </div>
      </section>

      {/* REGLAS */}
      <section className="mb-4">
        <h2 className="mb-1 text-base font-semibold text-foreground">Reglas de uso</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { positive: true,  label: "Slides interiores siempre usan SlideLayout",        desc: "Propuestas, metodología, equipo, servicios, casos de éxito y cierre." },
            { positive: true,  label: "Respetar la zona de protección del header/footer",  desc: "El contenido no debe invadir los 50 px superiores ni los 32 px inferiores." },
            { positive: true,  label: "Opacidad 0.5 fija para el frame",                  desc: "Ni más ni menos. Garantiza jerarquía visual entre contenido y frame." },
            { positive: true,  label: "Monograma sin línea — nunca el logo completo",      desc: "En el header siempre usa 'Monograma … Sin Linea.svg', no el wordmark." },
            { positive: false, label: "Las portadas NO usan SlideLayout",                 desc: "Tienen su propia estructura: título cols 1-4 · wordmark cols 5-8 · año centrado. Grid decorativo + pixels como composición." },
            { positive: false, label: "No personalizar los colores del frame",            desc: "El frame es blanco (dark) o negro (light). Nunca colores de división." },
          ].map((rule) => (
            <div key={rule.label} className="flex gap-3 rounded-xl border border-border p-4">
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
