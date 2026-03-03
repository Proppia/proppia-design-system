import { useCallback, useEffect, useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import {
  BRAND_GRADIENT,
  BRAND_MINT,
  BRAND_TURQUOISE,
  BRAND_YELLOW,
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
  LOGO_DARK,
  LOGO_FULL_DARK,
  LOGO_FULL_LIGHT,
  LOGO_WORDMARK_DARK,
  PIXEL_PX,
  PresentationModal,
  SLIDE_W,
  SLIDE_H,
  SlideFrame,
  SLIDE_BG_DARK,
  type SlideEntry,
} from "../components/SlideFrame";

// ─────────────────────────────────────────────────────────
// Pixel disperso — reglas de uso
//
// PORTADA / SUBPORTADA GENERAL:
//   · Todos los pixels del mismo tamaño (PIXEL_PX)
//   · Fondo: var(--pixel-gradient) — mismo que línea del logo principal
//
// PORTADA DE DIVISIÓN DE NEGOCIO:
//   · Todos los pixels del mismo tamaño (PIXEL_PX)
//   · Fondo: color único de la división (BRAND_YELLOW, BRAND_MINT, BRAND_TURQUOISE)
//
// En ambos casos: borderRadius: 0 (cuadrado estricto)
// ─────────────────────────────────────────────────────────

// Helper — renderiza un pixel según las reglas (todos PIXEL_PX × PIXEL_PX)
function Pixel({ top, left, right, bottom, color = "var(--pixel-gradient)" }: {
  top?: string; left?: string; right?: string; bottom?: string; color?: string;
}) {
  return (
    <div
      className="absolute"
      style={{
        top, left, right, bottom,
        width: PIXEL_PX, height: PIXEL_PX,
        background: color,
        borderRadius: 0,
        flexShrink: 0,
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────
// SlideGrid — SVG helper canónico (tokens: --grid-line / --grid-line-layout)
// ─────────────────────────────────────────────────────────
function SlideGrid({
  cols = 8,
  rows = 4,
  mode = "decorative",
}: {
  cols?: number;
  rows?: number;
  mode?: "decorative" | "layout";
}) {
  const opacity = mode === "decorative" ? 0.08 : 0.18;
  const verticals   = Array.from({ length: cols - 1 }, (_, i) => i + 1);
  const horizontals = Array.from({ length: rows - 1 }, (_, i) => i + 1);
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{ opacity }}>
      {verticals.map((i) => (
        <line key={`v${i}`} x1={`${(i / cols) * 100}%`} y1="0" x2={`${(i / cols) * 100}%`} y2="100%" stroke="white" strokeWidth="0.5" />
      ))}
      {horizontals.map((i) => (
        <line key={`h${i}`} x1="0" y1={`${(i / rows) * 100}%`} x2="100%" y2={`${(i / rows) * 100}%`} stroke="white" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Slide header — pp. / número / año
// ─────────────────────────────────────────────────────────
// SlideHeader: frame estándar para slides internos del brandbook
// Usa el monograma sin línea + número de página + año, todo al 50% opacidad
function SlideHeader({ num, year = "2026" }: { num?: string | number; year?: string }) {
  return (
    <>
      <div
        className="absolute left-0 right-0 top-0 flex items-center justify-between"
        style={{ height: FRAME_H, padding: `${FRAME_PAD_Y}px ${FRAME_PAD_X}px 0`, opacity: FRAME_OPACITY, zIndex: 10 }}
      >
        <img
          src={LOGO_DARK}
          alt="Proppia"
          style={{ height: FRAME_LOGO_H, display: "block", marginTop: 1 }}
          draggable={false}
        />
        {num !== undefined && (
          <span style={{ fontSize: FRAME_FONT_SIZE, color: "white", fontWeight: FRAME_FONT_WEIGHT, letterSpacing: "0.02em" }}>{num}</span>
        )}
        <span style={{ fontSize: FRAME_FONT_SIZE, color: "white", fontWeight: FRAME_FONT_WEIGHT, letterSpacing: "0.02em" }}>{year}</span>
      </div>
      <div style={{
        position: "absolute", left: FRAME_PAD_X, right: FRAME_PAD_X, top: FRAME_H,
        height: "0.5px", background: "rgba(255,255,255,0.08)", zIndex: 10,
      }} />
    </>
  );
}

const GRID_COLS = 8;

// ─────────────────────────────────────────────────────────
// SLIDE 1 — Portada / Brandbook
// Grid adaptativo: las líneas horizontales se alinean con el
// borde superior e inferior del bloque título+logo y del año.
// Si el título tiene 3 o 4 líneas, las líneas se recalculan.
// ─────────────────────────────────────────────────────────
function SlideCover({ type = "BRAND\nBOOK", year = "2026" }: { type?: string; year?: string }) {
  const slideRef  = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const logoRef   = useRef<HTMLImageElement>(null);
  const yearRef   = useRef<HTMLSpanElement>(null);

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

    // El slide está dentro de un contenedor con transform:scale — getBoundingClientRect devuelve
    // coordenadas del viewport (escaladas), pero left/top usan el sistema local (1040×585).
    const scale = w / SLIDE_W;
    const toLocal = (viewportPx: number) => viewportPx / scale;

    // Horizontales: título, logo, año — de lado a lado del slide
    const hList: number[] = [yf(tr.top), yf(tr.bottom)];
    if (logo) {
      const lr = logo.getBoundingClientRect();
      hList.push(yf(lr.top), yf(lr.bottom));
    }
    hList.push(yf(yrR.top), yf(yrR.bottom));
    setHLines(hList);

    // Año: borde izq alineado con borde der del título (una sola línea vertical)
    const titleRightViewport = tr.right - sr.left;
    const newYearLeft = toLocal(titleRightViewport);
    setYearLeft(newYearLeft);

    // Verticales: borde izq título, borde der título, logo, año — usar posiciones en espacio local
    const yrWidthLocal = yrR.width / scale;
    const vList: number[] = [xf(tr.left), xf(tr.right)];
    if (logo) {
      const lr = logo.getBoundingClientRect();
      vList.push(xf(lr.left), xf(lr.right));
    }
    vList.push(newYearLeft / SLIDE_W, (newYearLeft + yrWidthLocal) / SLIDE_W);
    setVLines(vList);
  }, []);

  // ResizeObserver + medida inicial tras layout
  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // Medir tras el primer layout (ResizeObserver puede no disparar si el tamaño ya está estable)
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(measure);
    });
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  const verticals = Array.from({ length: GRID_COLS - 1 }, (_, i) => i + 1);

  return (
    <div
      ref={slideRef}
      className="relative h-full w-full text-white"
      style={{ backgroundColor: SLIDE_BG_DARK }}
    >
      {/* Grid — columnas fijas + líneas horizontales de ancho completo alineadas al contenido */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.08 }}
      >
        {/* Líneas verticales — 8 columnas fijas */}
        {verticals.map((i) => (
          <line
            key={`v${i}`}
            x1={`${(i / GRID_COLS) * 100}%`} y1="0"
            x2={`${(i / GRID_COLS) * 100}%`} y2="100%"
            stroke="white" strokeWidth="0.5"
          />
        ))}
        {/* Líneas horizontales — ancho completo de lado a lado */}
        {hLines.map((y, i) => (
          <line
            key={`h${i}`}
            x1="0"    y1={`${y * 100}%`}
            x2="100%" y2={`${y * 100}%`}
            stroke="white" strokeWidth="0.5"
          />
        ))}
        {/* Líneas verticales adaptativas — de arriba a abajo del slide */}
        {vLines.map((x, i) => (
          <line
            key={`va${i}`}
            x1={`${x * 100}%`} y1="0"
            x2={`${x * 100}%`} y2="100%"
            stroke="white" strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Pixels dispersos — todos en col 1/8 (márgenes) o en zonas alejadas del logo */}
      <Pixel top="17%" left="30%"  />   {/* col 2-3 — izq, sobre el título */}
      <Pixel top="10%" right="10%" />   {/* col 8 — margen der, sobre el logo */}
      <Pixel top="54%" left="5.5%" />   {/* col 1 — margen izq */}
      <Pixel top="71%" left="23%"  />   {/* col 2 — bajo el título */}
      <Pixel top="20%" right="6%"  />   {/* col 8 — margen der, alto */}
      <Pixel top="79%" right="8%"  />   {/* col 8 — margen der, bajo todo */}
      <Pixel top="31%" left="50%"  />   {/* col 4-5 — centro, entre las dos mitades */}

      {/* ── Contenido principal — grid estructural 2 × 1 (50 % / 50 %) ── */}
      <div
        className="absolute"
        style={{
          top: FRAME_H,
          bottom: FRAME_H,
          left: 0,
          right: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Izquierda: título cols 2-4 — padding simétrico COL_W en ambos lados */}
        <div
          className="flex items-center"
          style={{ paddingLeft: COVER_COL_W, paddingRight: COVER_COL_W }}
        >
          <h1
            ref={titleRef}
            className="uppercase text-white"
            style={{
              fontFamily: '"Bw Gradual", sans-serif',
              fontWeight: 700,
              fontSize: COVER_TITLE_SIZE,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {type.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>
            ))}
          </h1>
        </div>

        {/* Derecha: Logo cols 5-7 — padding simétrico COL_W en ambos lados */}
        <div
          className="flex items-center justify-center"
          style={{ paddingLeft: COVER_COL_W, paddingRight: COVER_COL_W }}
        >
          <img
            ref={logoRef}
            src={LOGO_WORDMARK_DARK}
            alt="Proppia"
            style={{ height: COVER_LOGO_H, width: "auto" }}
            draggable={false}
            onLoad={measure}
          />
        </div>
      </div>

      {/* Año — borde izq alineado con borde der del título + 30px */}
      <div
        className="absolute"
        style={{ bottom: FRAME_H + 20, left: yearLeft }}
      >
        <span
          ref={yearRef}
          className="text-white"
          style={{ fontFamily: '"Bw Gradual", sans-serif', fontWeight: 700, fontSize: COVER_YEAR_SIZE, letterSpacing: "0.04em" }}
        >
          {year}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 1b — Subportada (divisor de sección)
// ─────────────────────────────────────────────────────────

function SlideSubPortada({
  sectionNum = "02",
  title = "ANÁLISIS\nDE MARCA",
  year = "2026",
}: {
  sectionNum?: string;
  title?: string;
  year?: string;
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      {/* Grid decorativo */}
      <SlideGrid cols={GRID_COLS} rows={4} mode="decorative" />

      {/* Pixels dispersos — mismo tamaño, degradado completo de marca */}
      <Pixel top="12%" left="30%" />
      <Pixel top="9%"  right="13%" />
      <Pixel top="52%" left="5%" />
      <Pixel top="70%" left="22%" />
      <Pixel top="43%" right="19%" />
      <Pixel top="78%" right="7%" />
      <Pixel top="28%" left="57%" />
      <Pixel top="60%" left="75%" />
      <Pixel top="82%" left="42%" />

      {/* Número de sección — arriba, alineado a col 1 */}
      <div
        className="absolute"
        style={{
          top: FRAME_H + 28,
          left: FRAME_PAD_X,
        }}
      >
        <span
          style={{
            fontSize: "1.0em",
            color: "white",
            fontWeight: 300,
            opacity: 0.5,
            letterSpacing: "0.05em",
          }}
        >
          {sectionNum}
        </span>
      </div>

      {/* Título — centrado verticalmente en la mitad izquierda (cols 1-4) */}
      <div
        className="absolute flex items-center"
        style={{
          top: FRAME_H,
          bottom: FRAME_H,
          left: FRAME_PAD_X,
          width: `calc(50% - ${FRAME_PAD_X}px)`,
        }}
      >
        <h2
          className="uppercase text-white whitespace-pre-line"
          style={{
            fontWeight: 700,
            fontSize: "4.8em",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
      </div>

      {/* Footer — monograma izq. + año dcha. al 50% opacidad (alineados a FRAME_PAD_X) */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
        style={{
          height: FRAME_H,
          paddingLeft: FRAME_PAD_X,
          paddingRight: FRAME_PAD_X,
          opacity: FRAME_OPACITY,
        }}
      >
        <img
          src={LOGO_DARK}
          alt="Proppia"
          style={{ height: FRAME_LOGO_H, display: "block" }}
          draggable={false}
        />
        <span style={{ fontSize: FRAME_FONT_SIZE, color: "white", fontWeight: FRAME_FONT_WEIGHT, letterSpacing: "0.02em" }}>
          {year}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 2 — División intro (círculos concéntricos)
// ─────────────────────────────────────────────────────────
function SlideDivisionIntro({
  num = "1",
  title = "PERFORMANCE\n& GROWTH.",
  color = "#23F8F7",
  pageNum = "01",
}: {
  num?: string;
  title?: string;
  color?: string;
  pageNum?: string;
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      <SlideHeader num={pageNum} />

      {/* Círculos concéntricos centrados */}
      <div
        className="absolute"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-60%, -50%)",
        }}
      >
        {/* Círculo exterior */}
        <div
          style={{
            width: "45em", height: "45em",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Círculo interior */}
          <div
            style={{
              width: "30em", height: "30em",
              border: "0.5px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={LOGO_FULL_DARK}
              alt="Proppia"
              style={{ height: "3em", marginBottom: "0.8em" }}
            />
            {/* Línea de color de división */}
            <div style={{ height: "0.18em", width: "8em", backgroundColor: color, marginBottom: "0.8em" }} />
            <p
              className="font-black uppercase text-white text-center whitespace-pre-line"
              style={{ fontSize: "1.3em", lineHeight: 1.2, letterSpacing: "0.01em" }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Badge de número — círculo relleno */}
      <div
        className="absolute font-black text-black"
        style={{
          top: "50%", right: "15%",
          transform: "translateY(-50%)",
          width: "5em", height: "5em",
          backgroundColor: color,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2.5em",
        }}
      >
        {num}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 3 — Metodología (3 etapas en círculos conectados)
// ─────────────────────────────────────────────────────────
function SlideMetodologia({
  stages,
  pageNum = "24",
  lineColor = "#F6E342",
}: {
  stages: { n: number; label: string; desc: string }[];
  pageNum?: string;
  lineColor?: string;
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      <SlideHeader num={pageNum} />

      {/* Línea horizontal decorativa — color de la línea del brand */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "28%", height: "0.15em",
          backgroundColor: lineColor, opacity: 0.7,
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          top: "72%", height: "0.15em",
          backgroundColor: lineColor, opacity: 0.7,
        }}
      />

      {/* Tres círculos con etapas */}
      <div
        className="absolute inset-0 flex items-center justify-around"
        style={{ padding: "12% 8%" }}
      >
        {stages.map((s, i) => (
          <div
            key={s.n}
            className="relative flex flex-col items-center"
            style={{ flex: 1, maxWidth: "28%" }}
          >
            {/* Badge de número — círculo blanco */}
            <div
              className="absolute font-black text-black"
              style={{
                top: "50%",
                left: i === 0 ? "-15%" : i === 1 ? "-12%" : "-12%",
                transform: "translateY(-50%)",
                width: "3.5em", height: "3.5em",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4em",
                zIndex: 1,
              }}
            >
              {s.n}
            </div>

            {/* Círculo principal */}
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{
                width: "18em", height: "18em",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: "50%",
                padding: "15%",
              }}
            >
              <h3
                className="font-bold text-white"
                style={{ fontSize: "1.4em", marginBottom: "0.5em" }}
              >
                {s.label}
              </h3>
              <p
                className="text-center leading-snug"
                style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.5)" }}
              >
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 4 — "No somos una agencia" (fondo degradado)
// ─────────────────────────────────────────────────────────
function SlideNoSomosAgencia() {
  const pillars = [
    "Entendemos el modelo de negocio antes que los canales.",
    "Pensamos en métricas de ventas, no solo de marketing.",
    "Conectamos estrategia, ejecución y medición en un mismo flujo.",
    "Acompañamos equipos internos con visión operativa.",
  ];
  return (
    <div
      className="relative h-full w-full"
      style={{ background: BRAND_GRADIENT }}
    >
      {/* Header en oscuro */}
      <div
        className="absolute left-0 right-0 top-0 flex items-center justify-between"
        style={{ padding: "3.5% 5% 0" }}
      >
        <img
          src={LOGO_FULL_LIGHT}
          alt="Proppia"
          style={{ height: "1.8em", opacity: 0.7 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = LOGO_FULL_DARK;
            (e.currentTarget as HTMLImageElement).style.opacity = "0.5";
          }}
        />
        <span style={{ fontSize: "0.8em", color: "rgba(0,0,0,0.35)", fontWeight: 500 }}>2026</span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: "14% 8% 8%" }}>
        {/* Título */}
        <h2
          className="font-black uppercase text-black text-center"
          style={{ fontSize: "2.2em", marginBottom: "0.5em", letterSpacing: "-0.01em" }}
        >
          NO SOMOS UNA AGENCIA.
        </h2>
        <p
          className="text-center text-black/60 mb-[4%]"
          style={{ fontSize: "0.9em", maxWidth: "70%" }}
        >
          Somos un aliado estratégico de crecimiento que se involucra en el negocio, no solo en la comunicación.
        </p>

        {/* Círculos con pilares */}
        <div className="flex w-full items-center justify-around gap-[2%]">
          {pillars.slice(0, 3).map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-center"
              style={{
                width: "22em", height: "22em",
                border: "0.5px solid rgba(0,0,0,0.15)",
                borderRadius: "50%",
                backgroundColor: "rgba(20,20,20,0.85)",
                padding: "15%",
                flex: "0 0 auto",
              }}
            >
              <p
                className="font-semibold text-white leading-snug"
                style={{ fontSize: "1.05em" }}
              >
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 5 — Equipo individual (foto + bio)
// ─────────────────────────────────────────────────────────
function SlideEquipoIndividual({
  name = "Alex Cifuentes",
  role = "Founder & CEO",
  bio = "Alex lidera la dirección general y estratégica de Proppia. Ha acompañado a empresas B2B y B2C de alto valor en su transformación digital y comercial, impulsando procesos de crecimiento basados en estrategia, tecnología y acompañamiento comercial.",
  tagline = "Alex lidera la dirección general y estratégica de Proppia.",
  initials = "AC",
  pageNum = "15",
  accentColor = "#23F8F7",
}: {
  name?: string;
  role?: string;
  bio?: string;
  tagline?: string;
  initials?: string;
  pageNum?: string;
  accentColor?: string;
}) {
  return (
    <div
      className="relative h-full w-full text-white"
      style={{ backgroundColor: SLIDE_BG_DARK }}
    >
      {/* Glow de fondo sutil */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "40%", height: "60%",
          background: `radial-gradient(ellipse at bottom right, ${accentColor}18 0%, transparent 70%)`,
        }}
      />

      <SlideHeader num={pageNum} />

      <div className="absolute inset-0 grid grid-cols-2" style={{ paddingTop: "10%" }}>
        {/* Izquierda — foto con frame circular doble */}
        <div className="flex items-center justify-center" style={{ padding: "5%" }}>
          <div className="relative flex items-center justify-center">
            {/* Anillo exterior amarillo */}
            <div
              style={{
                position: "absolute",
                width: "22em", height: "22em",
                border: `0.15em solid #F6E342`,
                borderRadius: "50%",
                opacity: 0.7,
              }}
            />
            {/* Anillo interior mint */}
            <div
              style={{
                position: "absolute",
                width: "18em", height: "18em",
                border: `0.5px solid ${accentColor}`,
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
            {/* Avatar con iniciales */}
            <div
              className="flex items-center justify-center font-black text-white"
              style={{
                width: "15em", height: "15em",
                borderRadius: "50%",
                backgroundColor: "#1e2e2e",
                border: `0.5px solid rgba(255,255,255,0.1)`,
                fontSize: "3em",
              }}
            >
              {initials}
            </div>
          </div>
        </div>

        {/* Derecha — bio */}
        <div
          className="flex flex-col justify-center"
          style={{ padding: "4% 8% 4% 2%" }}
        >
          {/* Nombre */}
          <h2
            className="font-light"
            style={{ fontSize: "2em", color: accentColor, marginBottom: "0.3em" }}
          >
            {name} —{" "}
            <strong className="font-black text-white">{role}</strong>
          </h2>

          {/* Separador */}
          <div style={{ height: "0.5px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "5%" }} />

          {/* Tagline con icono */}
          <div className="flex items-start gap-[3%]" style={{ marginBottom: "4%" }}>
            <span style={{ fontSize: "1.5em", flexShrink: 0 }}>🧠</span>
            <p
              className="font-medium text-white"
              style={{ fontSize: "0.9em", lineHeight: 1.4 }}
            >
              {tagline}
            </p>
          </div>

          {/* Bio */}
          <p
            className="leading-relaxed"
            style={{ fontSize: "0.82em", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
          >
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 6 — Propósito (dos columnas)
// ─────────────────────────────────────────────────────────
function SlideProposito({
  pageNum = "02",
  division = "Proppia: Performance & Growth",
  color = "#F6E342",
  title = "Transformar la estrategia en resultados medibles.",
  body = "Acompañamos a las marcas a crecer con visión de negocio, optimizando sus canales, campañas y métricas más allá del marketing.",
}: {
  pageNum?: string;
  division?: string;
  color?: string;
  title?: string;
  body?: string;
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      <SlideHeader num={pageNum} />

      <div
        className="absolute inset-0 grid grid-cols-2 gap-[6%]"
        style={{ padding: "14% 7% 7%" }}
      >
        {/* Left */}
        <div>
          <p
            className="font-black uppercase tracking-widest"
            style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.25)", marginBottom: "4%" }}
          >
            PROPÓSITO
          </p>
          <h2
            className="font-black leading-tight text-white"
            style={{ fontSize: "2.2em", marginBottom: "5%" }}
          >
            {title}
          </h2>
          {/* Línea de color de división */}
          <div style={{ height: "0.15em", width: "15%", backgroundColor: color, marginBottom: "5%" }} />
          <p style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            {body}
          </p>
        </div>

        {/* Right */}
        <div>
          <p
            className="font-black uppercase tracking-widest"
            style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.25)", marginBottom: "4%" }}
          >
            ENFOQUE GENERAL
          </p>
          <p style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "5%" }}>
            Combinamos análisis, estrategia y ejecución para diseñar ecosistemas digitales de crecimiento sostenible.
          </p>
          <div style={{ height: "0.5px", backgroundColor: "rgba(255,255,255,0.08)", marginBottom: "5%" }} />
          {["Estrategia basada en datos", "Ejecución multidivisión", "Rentabilidad medible"].map((item) => (
            <div key={item} className="flex items-center" style={{ gap: "3%", marginBottom: "3%" }}>
              <div style={{ width: "6%", height: "0.15em", backgroundColor: color, flexShrink: 0 }} />
              <span style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.6)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nombre de división abajo izquierda */}
      <div className="absolute bottom-0 left-0" style={{ padding: "4% 7%" }}>
        <p style={{ fontSize: "0.72em", color: "rgba(255,255,255,0.2)" }}>{division}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 7 — Servicios / sublíneas (lista numerada)
// ─────────────────────────────────────────────────────────
function SlideServicio({
  pageNum = "04",
  subCode = "1.1",
  title = "Business Strategy & Growth Planning",
  division = "Proppia: Performance & Growth",
  color = "#F6E342",
  items = [
    "Diagnóstico del negocio y levantamiento de objetivos estratégicos.",
    "Diseño de estrategias de crecimiento personalizadas.",
    "Definición de roadmaps trimestrales de acción.",
    "Auditorías de ecosistemas digitales y embudos de conversión.",
    "Planificación integral de marketing, comunicación y tecnología.",
  ],
}: {
  pageNum?: string;
  subCode?: string;
  title?: string;
  division?: string;
  color?: string;
  items?: string[];
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      <SlideHeader num={pageNum} />

      <div className="absolute inset-0 flex flex-col" style={{ padding: "13% 8% 8%" }}>
        {/* Sub-código */}
        <p
          className="font-black"
          style={{ fontSize: "0.75em", color: "rgba(255,255,255,0.2)", marginBottom: "1.5%" }}
        >
          {subCode}
        </p>
        {/* Título */}
        <h2
          className="font-black leading-tight text-white"
          style={{ fontSize: "2em", marginBottom: "3%" }}
        >
          {title}
        </h2>
        {/* Línea de color */}
        <div style={{ height: "0.15em", width: "8%", backgroundColor: color, marginBottom: "6%" }} />

        {/* Items numerados en grid */}
        <div
          className="grid flex-1"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "3% 6%", alignContent: "start" }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-start" style={{ gap: "3%" }}>
              <span
                className="font-black shrink-0"
                style={{ fontSize: "1.8em", color: "rgba(255,255,255,0.12)", lineHeight: 1 }}
              >
                {i + 1}
              </span>
              <p style={{ fontSize: "0.82em", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, paddingTop: "0.2em" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0" style={{ padding: "4% 8%" }}>
        <p style={{ fontSize: "0.72em", color: "rgba(255,255,255,0.18)" }}>{division}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 8 — Caso de éxito (header)
// ─────────────────────────────────────────────────────────
function SlideCasoHeader({
  pageNum = "05",
  client = "Handtmann Andina y México",
  industry = "Maquinaria de procesamiento alimenticio (B2B)",
  country = "Colombia, Perú, Ecuador y México",
  challenge = "Unificar la estrategia digital y comercial de la marca en cuatro países y fortalecer su posicionamiento regional.",
  accentColor = "#23F8F7",
}: {
  pageNum?: string;
  client?: string;
  industry?: string;
  country?: string;
  challenge?: string;
  accentColor?: string;
}) {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      <SlideHeader num={pageNum} />
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "35%", height: "50%",
          background: `radial-gradient(ellipse at bottom right, ${accentColor}12 0%, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "14% 8% 8%" }}>
        {/* Label */}
        <p
          className="font-black uppercase tracking-widest"
          style={{ fontSize: "0.72em", color: "rgba(255,255,255,0.25)", marginBottom: "2.5%" }}
        >
          Caso de éxito
        </p>

        <h2
          className="font-black leading-tight text-white"
          style={{ fontSize: "3em", marginBottom: "4%" }}
        >
          {client}.
        </h2>

        <div style={{ height: "0.15em", width: "8%", backgroundColor: accentColor, marginBottom: "5%" }} />

        <div className="grid grid-cols-3" style={{ gap: "5%" }}>
          <div>
            <p style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.25)", marginBottom: "1.5%", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Operación en</p>
            <p style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{country}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.25)", marginBottom: "1.5%", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Industria</p>
            <p style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{industry}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.25)", marginBottom: "1.5%", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Desafío</p>
            <p style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{challenge}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SLIDE 9 — Cierre
// ─────────────────────────────────────────────────────────
function SlideCierre() {
  return (
    <div className="relative h-full w-full text-white" style={{ backgroundColor: SLIDE_BG_DARK }}>
      {/* Pixels — mismo tamaño, degradado completo de marca */}
      <Pixel top="15%" left="8%" />
      <Pixel top="70%" right="6%" />
      <Pixel top="40%" left="48%" />

      <SlideHeader />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ padding: "8% 15%" }}
      >
        <p
          className="font-black uppercase tracking-widest"
          style={{ fontSize: "0.7em", color: "rgba(255,255,255,0.2)", marginBottom: "4%" }}
        >
          ¿Listo para crecer?
        </p>
        <h2
          className="font-black leading-tight text-white"
          style={{ fontSize: "3.2em", marginBottom: "4%", letterSpacing: "-0.02em" }}
        >
          Crecer con propósito significa construir desde adentro.
        </h2>
        {/* Línea gradiente decorativa */}
        <div
          style={{ height: "0.15em", width: "8%", background: BRAND_GRADIENT, marginBottom: "4%" }}
        />
        <p style={{ fontSize: "0.9em", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: "70%" }}>
          Acompañamos a las empresas a convertir sus ideas en resultados reales,
          combinando estrategia, diseño y tecnología.
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
        style={{ padding: "4% 7%" }}
      >
        <img
          src={LOGO_FULL_DARK}
          alt="Proppia"
          style={{ height: "1.5em", opacity: 0.3 }}
        />
        <p
          className="italic"
          style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.2)" }}
        >
          Hazlo tuyo, hazlo Proppia.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────
export function TemplatesPage() {
  const [presentingIndex, setPresentingIndex] = useState<number | null>(null);

  const metStages1 = [
    { n: 1, label: "Ideación",     desc: "Definimos el punto de partida, los objetivos y la visión del proyecto." },
    { n: 2, label: "Validación",   desc: "Evaluamos viabilidad, datos y alineación con el mercado." },
    { n: 3, label: "Diseño UX/UI", desc: "Estructuramos la experiencia de usuario y el enfoque visual." },
  ];
  const metStages2 = [
    { n: 4, label: "Desarrollo",   desc: "Materializamos la estrategia en un producto funcional." },
    { n: 5, label: "Testeo",       desc: "Evaluamos calidad, funcionalidad y coherencia antes del lanzamiento." },
    { n: 6, label: "Lanzamiento",  desc: "Implementamos la solución y activamos comunicación o campañas." },
  ];
  const metStages3 = [
    { n: 7, label: "Atracción",   desc: "Activamos estrategias para generar tráfico, demanda y visibilidad." },
    { n: 8, label: "Conversión",  desc: "Optimizamos la experiencia y los embudos para maximizar resultados." },
    { n: 9, label: "Retención",   desc: "Fidelizamos y generamos recurrencia mediante tecnología y comunicación." },
  ];

  // Registro completo de slides — el orden determina la navegación del modal
  const SLIDES: SlideEntry[] = [
    // Portadas
    { label: "Portada — Brand Book",           content: <SlideCover type={"BRAND\nBOOK"} /> },
    { label: "Portada — Propuesta Comercial",  content: <SlideCover type={"PROPUESTA\nCOMERCIAL"} /> },
    { label: "Portada — Caso de Éxito",        content: <SlideCover type={"CASO DE\nÉXITO"} /> },
    // Subportadas
    { label: "Subportada — Análisis de Marca",    content: <SlideSubPortada sectionNum="02" title={"ANÁLISIS\nDE MARCA"} /> },
    { label: "Subportada — Performance & Growth", content: <SlideSubPortada sectionNum="01" title={"PERFORMANCE\n& GROWTH."} /> },
    { label: "Subportada — Brand & Experience",   content: <SlideSubPortada sectionNum="03" title={"BRAND &\nEXPERIENCE\nDESIGN."} /> },
    // Divisiones Intro
    { label: "División 1 — Performance & Growth",         content: <SlideDivisionIntro num="1" title={"PERFORMANCE\n& GROWTH."} color="#F6E342" pageNum="01" /> },
    { label: "División 2 — Brand & Experience Design",    content: <SlideDivisionIntro num="2" title={"BRAND &\nEXPERIENCE DESIGN."} color="#75EFB1" pageNum="02" /> },
    { label: "División 3 — Digital Products & AI Lab",    content: <SlideDivisionIntro num="3" title={"DIGITAL PRODUCTS\n& AI LAB."} color="#23F8F7" pageNum="03" /> },
    // Propósito
    {
      label: "Propósito — Performance & Growth",
      content: <SlideProposito color="#F6E342" division="Proppia: Performance & Growth"
        title="Transformar la estrategia en resultados medibles."
        body="Acompañamos a las marcas a crecer con visión de negocio, optimizando sus canales y métricas." />,
    },
    {
      label: "Propósito — Brand & Experience Design",
      content: <SlideProposito color="#75EFB1" pageNum="11" division="Proppia: Brand & Experience Design"
        title="Construir marcas coherentes, memorables y estratégicamente sólidas."
        body="Integramos identidad, comunicación y experiencia en un mismo ecosistema visual." />,
    },
    {
      label: "Propósito — Digital Products & AI Lab",
      content: <SlideProposito color="#23F8F7" pageNum="17" division="Proppia: Digital Product & AI Lab"
        title="Ser la columna vertebral tecnológica de Proppia."
        body="Convertimos ideas y estrategias en productos digitales tangibles." />,
    },
    // No somos una agencia
    { label: "No somos una agencia", content: <SlideNoSomosAgencia /> },
    // Metodología
    { label: "Metodología — Etapas 1–3: Ideación · Validación · Diseño",       content: <SlideMetodologia stages={metStages1} pageNum="26" lineColor="#F6E342" /> },
    { label: "Metodología — Etapas 4–6: Desarrollo · Testeo · Lanzamiento",    content: <SlideMetodologia stages={metStages2} pageNum="27" lineColor="#F6E342" /> },
    { label: "Metodología — Etapas 7–9: Atracción · Conversión · Retención",   content: <SlideMetodologia stages={metStages3} pageNum="28" lineColor="#75EFB1" /> },
    // Servicios
    {
      label: "Servicio — Business Strategy & Growth Planning",
      content: <SlideServicio subCode="1.1" title="Business Strategy & Growth Planning" color="#F6E342"
        division="Proppia: Performance & Growth" pageNum="04"
        items={["Diagnóstico del negocio y levantamiento de objetivos estratégicos.", "Diseño de estrategias de crecimiento personalizadas.", "Definición de roadmaps trimestrales de acción.", "Auditorías de ecosistemas digitales y embudos de conversión.", "Planificación integral de marketing, comunicación y tecnología."]} />,
    },
    {
      label: "Servicio — Branding & Comunicación Creativa",
      content: <SlideServicio subCode="2.1" title="Branding & Comunicación Creativa" color="#75EFB1"
        division="Proppia: Brand & Experience Design" pageNum="13"
        items={["Naming, propósito y territorio de marca.", "Diseño de identidad visual (logo, paleta, tipografía).", "Manuales y sistemas de marca.", "Conceptualización de campañas publicitarias integrales.", "Adaptación de la campaña a diferentes medios."]} />,
    },
    // Casos de Éxito
    {
      label: "Caso de Éxito — Handtmann Andina y México",
      content: <SlideCasoHeader pageNum="05" client="Handtmann Andina y México"
        industry="Maquinaria de procesamiento alimenticio (B2B)"
        country="Colombia, Perú, Ecuador y México"
        challenge="Unificar la estrategia digital y comercial en cuatro países y fortalecer el posicionamiento regional."
        accentColor="#23F8F7" />,
    },
    {
      label: "Caso de Éxito — DISAP LTDA.",
      content: <SlideCasoHeader pageNum="09" client="DISAP LTDA." accentColor="#75EFB1"
        industry="Soluciones industriales para manejo de fluidos (B2B)"
        country="Colombia"
        challenge="Incrementar la facturación, generar demanda calificada y modernizar el proceso comercial." />,
    },
    // Equipo
    {
      label: "Equipo — Alex Cifuentes, Founder & CEO",
      content: <SlideEquipoIndividual pageNum="15" name="Alex Cifuentes" role="Founder & CEO" initials="AC"
        tagline="Alex lidera la dirección general y estratégica de Proppia."
        bio="Ha acompañado a empresas B2B y B2C de alto valor en su transformación digital y comercial, impulsando procesos de crecimiento basados en estrategia, tecnología y acompañamiento comercial." />,
    },
    {
      label: "Equipo — Danna Vargas, Head of Growth & Operations",
      content: <SlideEquipoIndividual pageNum="16" name="Danna Vargas" role="Head of Growth & Operations" initials="DV" accentColor="#75EFB1"
        tagline="Danna lidera la planeación, coordinación y ejecución de las estrategias de crecimiento."
        bio="Su rol combina la dirección de performance digital con la gestión operativa de los proyectos, garantizando eficiencia, coherencia y resultados medibles." />,
    },
    // Cierre
    { label: "Cierre — Hazlo tuyo, hazlo Proppia.", content: <SlideCierre /> },
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
        breadcrumbs={[{ label: "Sistema", href: "/welcome" }]}
        badge="Fundamento"
        title="Templates de Presentación"
        description="Slides reutilizables para propuestas comerciales, estructuras de servicio, casos de éxito y cierres. Réplica fiel de las estructuras del brandbook y PPTs de Proppia."
      />

      {/* PORTADAS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Portada</h2>
        <p className="mb-5 text-sm text-muted-foreground">Grid de líneas, squares esparcidos sin redondeo, logo y año.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <SlideFrame label="Brand Book" onExpand={() => expand(0)}><SlideCover type={"BRAND\nBOOK"} /></SlideFrame>
          <SlideFrame label="Propuesta Comercial" onExpand={() => expand(1)}><SlideCover type={"PROPUESTA\nCOMERCIAL"} /></SlideFrame>
          <SlideFrame label="Caso de Éxito" onExpand={() => expand(2)}><SlideCover type={"CASO DE\nÉXITO"} /></SlideFrame>
        </div>
      </section>

      {/* SUBPORTADAS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Subportada</h2>
        <p className="mb-5 text-sm text-muted-foreground">Divisor de sección. Número de sección + título bold en mayúsculas. Pixels esparcidos. Footer con monograma y año.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <SlideFrame label="Análisis de Marca" onExpand={() => expand(3)}>
            <SlideSubPortada sectionNum="02" title={"ANÁLISIS\nDE MARCA"} />
          </SlideFrame>
          <SlideFrame label="Performance & Growth" onExpand={() => expand(4)}>
            <SlideSubPortada sectionNum="01" title={"PERFORMANCE\n& GROWTH."} />
          </SlideFrame>
          <SlideFrame label="Brand & Experience" onExpand={() => expand(5)}>
            <SlideSubPortada sectionNum="03" title={"BRAND &\nEXPERIENCE\nDESIGN."} />
          </SlideFrame>
        </div>
      </section>

      {/* DIVISIONES INTRO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">División — Intro</h2>
        <p className="mb-5 text-sm text-muted-foreground">Círculos concéntricos con logo, línea de color por división y badge numerado.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <SlideFrame label="Performance & Growth" onExpand={() => expand(6)}>
            <SlideDivisionIntro num="1" title={"PERFORMANCE\n& GROWTH."} color="#F6E342" pageNum="01" />
          </SlideFrame>
          <SlideFrame label="Brand & Experience Design" onExpand={() => expand(7)}>
            <SlideDivisionIntro num="2" title={"BRAND &\nEXPERIENCE DESIGN."} color="#75EFB1" pageNum="02" />
          </SlideFrame>
          <SlideFrame label="Digital Products & AI Lab" onExpand={() => expand(8)}>
            <SlideDivisionIntro num="3" title={"DIGITAL PRODUCTS\n& AI LAB."} color="#23F8F7" pageNum="03" />
          </SlideFrame>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Propósito</h2>
        <p className="mb-5 text-sm text-muted-foreground">Dos columnas: misión + enfoque. Línea de color por división.</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <SlideFrame label="Performance & Growth" onExpand={() => expand(9)}>
            <SlideProposito color="#F6E342" division="Proppia: Performance & Growth"
              title="Transformar la estrategia en resultados medibles."
              body="Acompañamos a las marcas a crecer con visión de negocio, optimizando sus canales y métricas." />
          </SlideFrame>
          <SlideFrame label="Brand & Experience Design" onExpand={() => expand(10)}>
            <SlideProposito color="#75EFB1" pageNum="11" division="Proppia: Brand & Experience Design"
              title="Construir marcas coherentes, memorables y estratégicamente sólidas."
              body="Integramos identidad, comunicación y experiencia en un mismo ecosistema visual." />
          </SlideFrame>
          <SlideFrame label="Digital Products & AI Lab" onExpand={() => expand(11)}>
            <SlideProposito color="#23F8F7" pageNum="17" division="Proppia: Digital Product & AI Lab"
              title="Ser la columna vertebral tecnológica de Proppia."
              body="Convertimos ideas y estrategias en productos digitales tangibles." />
          </SlideFrame>
        </div>
      </section>

      {/* NO SOMOS UNA AGENCIA */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">No somos una agencia</h2>
        <p className="mb-5 text-sm text-muted-foreground">Fondo degradado brand, título oscuro, círculos con pilares.</p>
        <SlideFrame label="No somos una agencia" onExpand={() => expand(12)}>
          <SlideNoSomosAgencia />
        </SlideFrame>
      </section>

      {/* METODOLOGÍA — 3 slides */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Metodología — Las 9 Etapas</h2>
        <p className="mb-5 text-sm text-muted-foreground">3 slides de 3 etapas cada uno. Círculos con badge numérico y línea horizontal de color.</p>
        <div className="grid gap-5">
          <SlideFrame label="Etapas 1–3: Ideación · Validación · Diseño" onExpand={() => expand(13)}>
            <SlideMetodologia stages={metStages1} pageNum="26" lineColor="#F6E342" />
          </SlideFrame>
          <SlideFrame label="Etapas 4–6: Desarrollo · Testeo · Lanzamiento" onExpand={() => expand(14)}>
            <SlideMetodologia stages={metStages2} pageNum="27" lineColor="#F6E342" />
          </SlideFrame>
          <SlideFrame label="Etapas 7–9: Atracción · Conversión · Retención" onExpand={() => expand(15)}>
            <SlideMetodologia stages={metStages3} pageNum="28" lineColor="#75EFB1" />
          </SlideFrame>
        </div>
      </section>

      {/* SLIDE DE SERVICIO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Slide de Servicio</h2>
        <p className="mb-5 text-sm text-muted-foreground">Código de sub-línea, título del servicio, lista numerada en dos columnas.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <SlideFrame label="Business Strategy & Growth Planning" onExpand={() => expand(16)}>
            <SlideServicio subCode="1.1" title="Business Strategy & Growth Planning" color="#F6E342"
              division="Proppia: Performance & Growth" pageNum="04"
              items={["Diagnóstico del negocio y levantamiento de objetivos estratégicos.", "Diseño de estrategias de crecimiento personalizadas.", "Definición de roadmaps trimestrales de acción.", "Auditorías de ecosistemas digitales y embudos de conversión.", "Planificación integral de marketing, comunicación y tecnología."]} />
          </SlideFrame>
          <SlideFrame label="Branding & Comunicación Creativa" onExpand={() => expand(17)}>
            <SlideServicio subCode="2.1" title="Branding & Comunicación Creativa" color="#75EFB1"
              division="Proppia: Brand & Experience Design" pageNum="13"
              items={["Naming, propósito y territorio de marca.", "Diseño de identidad visual (logo, paleta, tipografía).", "Manuales y sistemas de marca.", "Conceptualización de campañas publicitarias integrales.", "Adaptación de la campaña a diferentes medios."]} />
          </SlideFrame>
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Caso de Éxito — Header</h2>
        <p className="mb-5 text-sm text-muted-foreground">Nombre del cliente, país, industria y desafío. Glow de color ambiental.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <SlideFrame label="Handtmann Andina y México" onExpand={() => expand(18)}>
            <SlideCasoHeader pageNum="05" client="Handtmann Andina y México"
              industry="Maquinaria de procesamiento alimenticio (B2B)"
              country="Colombia, Perú, Ecuador y México"
              challenge="Unificar la estrategia digital y comercial en cuatro países y fortalecer el posicionamiento regional."
              accentColor="#23F8F7" />
          </SlideFrame>
          <SlideFrame label="DISAP LTDA." onExpand={() => expand(19)}>
            <SlideCasoHeader pageNum="09" client="DISAP LTDA." accentColor="#75EFB1"
              industry="Soluciones industriales para manejo de fluidos (B2B)"
              country="Colombia"
              challenge="Incrementar la facturación, generar demanda calificada y modernizar el proceso comercial." />
          </SlideFrame>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Equipo — Individual</h2>
        <p className="mb-5 text-sm text-muted-foreground">Frame circular con anillos dobles, nombre en color de acento, bio estructurada.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <SlideFrame label="Alex Cifuentes — Founder & CEO" onExpand={() => expand(20)}>
            <SlideEquipoIndividual pageNum="15" name="Alex Cifuentes" role="Founder & CEO" initials="AC"
              tagline="Alex lidera la dirección general y estratégica de Proppia."
              bio="Ha acompañado a empresas B2B y B2C de alto valor en su transformación digital y comercial, impulsando procesos de crecimiento basados en estrategia, tecnología y acompañamiento comercial." />
          </SlideFrame>
          <SlideFrame label="Danna Vargas — Head of Growth & Operations" onExpand={() => expand(21)}>
            <SlideEquipoIndividual pageNum="16" name="Danna Vargas" role="Head of Growth & Operations" initials="DV" accentColor="#75EFB1"
              tagline="Danna lidera la planeación, coordinación y ejecución de las estrategias de crecimiento."
              bio="Su rol combina la dirección de performance digital con la gestión operativa de los proyectos, garantizando eficiencia, coherencia y resultados medibles." />
          </SlideFrame>
        </div>
      </section>

      {/* CIERRE */}
      <section className="mb-4">
        <h2 className="mb-1 text-base font-semibold text-foreground">Cierre</h2>
        <p className="mb-5 text-sm text-muted-foreground">Headline grande, línea gradiente decorativa, tagline final.</p>
        <SlideFrame label="Cierre — Hazlo tuyo, hazlo Proppia." onExpand={() => expand(22)}>
          <SlideCierre />
        </SlideFrame>
      </section>
    </div>
  );
}
