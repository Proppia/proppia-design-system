import { useCallback, useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import {
  ACTIVE_ZONE_RATIO,
  BRAND_GRADIENT,
  BRAND_TURQUOISE,
  CONTENT_TITLE_RATIO,
  CONTENT_TITLE_SIZE,
  CONTENT_TITLE_WEIGHT,
  CONTENT_GUIDE_OPACITY,
  CONTENT_TITLE_EXCLUSION_TOP_RATIO,
  CONTENT_TITLE_EXCLUSION_BOTTOM_RATIO,
  CONTENT_TITLE_EXCLUSION_MARGIN_X,
  COVER_COL_W,
  COVER_LOGO_H,
  COVER_PIXELS,
  COVER_TITLE_SIZE,
  COVER_YEAR_SIZE,
  DIVISION_LABEL_SIZE,
  DIVISION_BLOCK_PADDING_Y,
  FRAME_H,
  FRAME_PAD_X,
  GRID_LAYOUT_OPACITY,
  GRID_STROKE,
  LOGO_DARK,
  PIXEL_PX,
  PIXEL_RADIUS,
  PresentationModal,
  SlideFrame,
  SlideLayout,
  SLIDE_BG_DARK,
  SLIDE_NUMBER_OPACITY,
  SLIDE_NUMBER_SIZE,
  SLIDE_YEAR,
  SLIDE_W,
  SLIDE_H,
  LOGO_WORDMARK_DARK,
  type SlideEntry,
} from "../../components/SlideFrame";

type PixelZone = "margins" | "intersections";

interface ExcludeZone {
  x1: number; // porcentaje [0–100]
  y1: number;
  x2: number;
  y2: number;
}

interface PixelPosition {
  left: number;
  top: number;
}

function isInsideZone(x: number, y: number, zone: ExcludeZone) {
  return x >= zone.x1 && x <= zone.x2 && y >= zone.y1 && y <= zone.y2;
}

function generatePixels(
  slideW: number,
  slideH: number,
  zone: PixelZone,
  count: number = 8,
  excludeZones?: ExcludeZone[],
): PixelPosition[] {
  if (zone === "margins") {
    const pixels: PixelPosition[] = [];
    const minDist = 8; // distancia mínima en porcentaje entre pixels
    const marginWidthPerc = (COVER_COL_W / slideW) * 100;
    let safety = 0;

    while (pixels.length < count && safety < count * 40) {
      safety += 1;
      const onLeft = Math.random() < 0.5;
      const xPerc = onLeft
        ? Math.random() * marginWidthPerc
        : 100 - marginWidthPerc + Math.random() * marginWidthPerc;
      const yPerc = 10 + Math.random() * 80; // 10–90%

      if (
        pixels.some((p) => {
          const dx = (p.left / slideW) * 100 - xPerc;
          const dy = (p.top / slideH) * 100 - yPerc;
          return Math.hypot(dx, dy) < minDist;
        })
      ) {
        continue;
      }

      if (
        excludeZones &&
        excludeZones.some((z) => isInsideZone(xPerc, yPerc, z))
      ) {
        continue;
      }

      pixels.push({
        left: (xPerc / 100) * slideW,
        top: (yPerc / 100) * slideH,
      });
    }

    return pixels;
  }

  // Intersecciones del grid 8×4 (líneas internas)
  const candidates: { xPerc: number; yPerc: number }[] = [];
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 3; j++) {
      const xPerc = (i / 8) * 100;
      const yPerc = (j / 4) * 100;
      candidates.push({ xPerc, yPerc });
    }
  }

  const filtered = candidates.filter(({ xPerc, yPerc }) => {
    if (!excludeZones) return true;
    return !excludeZones.some((z) => isInsideZone(xPerc, yPerc, z));
  });

  // Mezclar y tomar N
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  return filtered.slice(0, count).map(({ xPerc, yPerc }) => ({
    left: (xPerc / 100) * slideW,
    top: (yPerc / 100) * slideH,
  }));
}

// ── SlideGrid SVG helper — usa los tokens CSS del grid ───
function SlideGrid({
  cols = 8,
  rows = 4,
  mode = "decorative",
}: {
  cols?: number;
  rows?: number;
  mode?: "decorative" | "layout";
}) {
  const opacity   = mode === "decorative" ? 0.08 : 0.18;
  const verticals   = Array.from({ length: cols - 1 }, (_, i) => i + 1);
  const horizontals = Array.from({ length: rows - 1 }, (_, i) => i + 1);
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity }}
    >
      {verticals.map((i) => (
        <line key={`v${i}`}
          x1={`${(i / cols) * 100}%`} y1="0"
          x2={`${(i / cols) * 100}%`} y2="100%"
          stroke="white" strokeWidth="0.5" />
      ))}
      {horizontals.map((i) => (
        <line key={`h${i}`}
          x1="0" y1={`${(i / rows) * 100}%`}
          x2="100%" y2={`${(i / rows) * 100}%`}
          stroke="white" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

// ── Pixel cuadrado sin border-radius ────────────────────
function Px({ top, left, size, color }: { top: number; left: number; size: number; color: string }) {
  return (
    <div style={{
      position: "absolute", top, left,
      width: size, height: size,
      background: color, borderRadius: 0,
    }} />
  );
}

// ══════════════════════════════════════════════════════════
// SLIDES DE GRID — coordenadas en px sobre SLIDE_W × SLIDE_H
// ══════════════════════════════════════════════════════════

// 1. Portada con grid anotado — zonas: margen (col 1/8) · activa (cols 2-7)
// Título cols 2-4 · logo cols 5-7 · año con borde izq alineado al borde der del título
// Líneas horizontales y verticales adaptativas que siguen los bordes del contenido
function SlideDecorativeCover() {
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
      {/* Grid con zonas anotadas + líneas horizontales adaptativas */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        {/* Tinte margen — cols 1 y 8 */}
        <rect x={0}                     y={0} width={COVER_COL_W} height={SLIDE_H} fill="rgba(246,227,66,0.04)" />
        <rect x={SLIDE_W - COVER_COL_W} y={0} width={COVER_COL_W} height={SLIDE_H} fill="rgba(246,227,66,0.04)" />

        {/* Líneas verticales — 8 cols, bordes de zona activa más visibles */}
        {[1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`}
            x1={SLIDE_W * i/8} y1={0} x2={SLIDE_W * i/8} y2={SLIDE_H}
            stroke="white" strokeWidth="0.5"
            opacity={i === 1 || i === 7 ? 0.18 : 0.08}
          />
        ))}

        {/* Líneas horizontales — ancho completo de lado a lado */}
        {hLines.map((y, i) => (
          <line key={`h${i}`}
            x1={0} y1={`${y * 100}%`} x2={SLIDE_W} y2={`${y * 100}%`}
            stroke="white" strokeWidth="0.5" opacity={0.08}
          />
        ))}
        {/* Líneas verticales adaptativas — de arriba a abajo del slide */}
        {vLines.map((x, i) => (
          <line key={`va${i}`}
            x1={x * SLIDE_W} y1={0} x2={x * SLIDE_W} y2={SLIDE_H}
            stroke="white" strokeWidth="0.5" opacity={0.08}
          />
        ))}

        {/* Etiquetas de col — muy sutiles, parte superior */}
        {[1,2,3,4,5,6,7,8].map(i => (
          <text key={i}
            x={SLIDE_W * (i - 0.5) / 8} y={14}
            textAnchor="middle" fontSize={8}
            fill={i === 1 || i === 8 ? "rgba(246,227,66,0.35)" : "rgba(255,255,255,0.15)"}
            fontFamily="monospace"
          >
            {i}
          </text>
        ))}

        {/* Label MARGEN — col 1 */}
        <text x={COVER_COL_W / 2} y={SLIDE_H - 14} textAnchor="middle" fontSize={7}
          fill="rgba(246,227,66,0.35)" fontFamily="monospace">MARGEN</text>
        {/* Label MARGEN — col 8 */}
        <text x={SLIDE_W - COVER_COL_W / 2} y={SLIDE_H - 14} textAnchor="middle" fontSize={7}
          fill="rgba(246,227,66,0.35)" fontFamily="monospace">MARGEN</text>
      </svg>

      {/* Pixels — mismos que Layout: COVER_PIXELS, degradado completo de marca */}
      {COVER_PIXELS.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          top: p.top, left: p.left, right: p.right,
          width: PIXEL_PX, height: PIXEL_PX,
          background: "var(--pixel-gradient)", borderRadius: 0,
        }} />
      ))}

      {/* Contenido — grid 2×1 (cols 1-4 izq · cols 5-8 dcha), top/bottom FRAME_H como Layout */}
      <div style={{
        position: "absolute",
        top: FRAME_H, bottom: FRAME_H, left: 0, right: 0,
        display: "grid", gridTemplateColumns: "1fr 1fr",
      }}>
        {/* Izquierda: título cols 2-4 — padding simétrico COVER_COL_W */}
        <div style={{ display: "flex", alignItems: "center", paddingLeft: COVER_COL_W, paddingRight: COVER_COL_W }}>
          <p
            ref={titleRef}
            style={{
              fontFamily: '"Bw Gradual", sans-serif',
              fontSize: COVER_TITLE_SIZE, fontWeight: 700, lineHeight: 0.95,
              letterSpacing: "-0.02em", color: "white", margin: 0, whiteSpace: "nowrap",
            }}
          >
            BRAND<br />BOOK
          </p>
        </div>
        {/* Derecha: logo cols 5-7 — padding simétrico COVER_COL_W */}
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

      {/* Año — borde izq alineado al borde der del título (una sola línea vertical), bottom FRAME_H+20 como Layout */}
      <div style={{
        position: "absolute", left: yearLeft, bottom: FRAME_H + 20,
      }}>
        <p
          ref={yearRef}
          style={{
            fontFamily: '"Bw Gradual", sans-serif',
            fontSize: COVER_TITLE_SIZE, fontWeight: 700,
            letterSpacing: "0.04em", color: "white", margin: 0,
          }}
        >
          {SLIDE_YEAR}
        </p>
      </div>
    </div>
  );
}

interface SectionSlideProps {
  number: string;
  sectionTitle: string;
  pixelCount?: number;
  year?: string;
}

// 2. Slide de sección — 8×4 decorativo, número fijo en col 2 y título centrado
export function SectionSlide({
  number,
  sectionTitle,
  pixelCount = 8,
}: SectionSlideProps) {
  const pixels = generatePixels(SLIDE_W, SLIDE_H, "margins", pixelCount);

  return (
    <div
      style={{
        position: "relative",
        width: SLIDE_W,
        height: SLIDE_H,
        backgroundColor: SLIDE_BG_DARK,
        overflow: "hidden",
      }}
    >
      <SlideGrid cols={8} rows={4} mode="decorative" />

      {/* Pixels en márgenes (cols 1 y 8) */}
      {pixels.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: PIXEL_PX,
            height: PIXEL_PX,
            background: BRAND_GRADIENT,
            borderRadius: 0,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Número — alineado al borde izquierdo de la col 2 */}
      <p
        style={{
          position: "absolute",
          left: COVER_COL_W,
          top: SLIDE_H * 0.35,
          margin: 0,
          fontSize: "1.2em",
          fontWeight: 700,
          color: "white",
          opacity: 0.9,
        }}
      >
        {number}
      </p>

      {/* Título centrado en la zona activa (cols 2–7) */}
      <div
        style={{
          position: "absolute",
          top: SLIDE_H * 0.52,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            margin: 0,
            maxWidth: "75%",
            fontSize: "3.2em",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          {sectionTitle}
        </p>
      </div>
    </div>
  );
}

// Wrapper legacy para mantener compat compat con la demo existente
function SlideDecorativeSection() {
  return (
    <SectionSlide number="02" sectionTitle="ANÁLISIS DE MARCA" />
  );
}

interface ContentSlideProps {
  number: string;
  division: string;
  title: string;
  year?: string;
  pixelCount?: number;
}

// 3. Slide de contenido — modo layout con header y grid 8×4
export function ContentSlide({
  number,
  division,
  title,
  year = SLIDE_YEAR,
  pixelCount = 8,
}: ContentSlideProps) {
  const headerPerc = (FRAME_H / SLIDE_H) * 100;
  const marginPerc = (COVER_COL_W / SLIDE_W) * 100;
  const titleWidthPerc = CONTENT_TITLE_RATIO * 100;
  const titleCenterXPerc = 50;
  const titleMarginXPerc = CONTENT_TITLE_EXCLUSION_MARGIN_X * 100;
  const rawTitleX1 = titleCenterXPerc - titleWidthPerc / 2 - titleMarginXPerc;
  const rawTitleX2 = titleCenterXPerc + titleWidthPerc / 2 + titleMarginXPerc;
  const titleX1 = Math.max(0, rawTitleX1);
  const titleX2 = Math.min(100, rawTitleX2);
  const titleY1 = CONTENT_TITLE_EXCLUSION_TOP_RATIO * 100;
  const titleY2 = CONTENT_TITLE_EXCLUSION_BOTTOM_RATIO * 100;

  const [pixels] = useState(() =>
    generatePixels(SLIDE_W, SLIDE_H, "intersections", pixelCount, [
      { x1: 0, y1: 0, x2: marginPerc, y2: 100 },
      { x1: 100 - marginPerc, y1: 0, x2: 100, y2: 100 },
      { x1: 0, y1: 0, x2: 100, y2: headerPerc },
      { x1: titleX1, y1: titleY1, x2: titleX2, y2: titleY2 },
    ]),
  );

  const slideRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [subtitleHLines, setSubtitleHLines] = useState<number[]>([]);
  const [titleHLines, setTitleHLines] = useState<number[]>([]);
  const [titleVLines, setTitleVLines] = useState<number[]>([]);

  useEffect(() => {
    const slide = slideRef.current;
    const subtitleEl = subtitleRef.current;
    const titleEl = titleRef.current;
    if (!slide || !titleEl) return;

    const measure = () => {
      const slideRect = slide.getBoundingClientRect();
      const titleRect = titleEl.getBoundingClientRect();
      if (slideRect.height === 0) return;

      const titleTopRatio = (titleRect.top - slideRect.top) / slideRect.height;
      const titleBottomRatio =
        (titleRect.bottom - slideRect.top) / slideRect.height;
      const titleLeftRatio =
        (titleRect.left - slideRect.left) / slideRect.width;
      const titleRightRatio =
        (titleRect.right - slideRect.left) / slideRect.width;

      setTitleHLines([titleTopRatio, titleBottomRatio]);
      setTitleVLines([titleLeftRatio, titleRightRatio]);

      if (subtitleEl) {
        const subtitleRect = subtitleEl.getBoundingClientRect();
        const subtitleTopRatio =
          (subtitleRect.top - slideRect.top) / slideRect.height;
        const subtitleBottomRatio =
          (subtitleRect.bottom - slideRect.top) / slideRect.height;
        setSubtitleHLines([subtitleTopRatio, subtitleBottomRatio]);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(slide);
    return () => ro.disconnect();
  }, []);

  const scale = 1;

  // Forzar que "&" vaya con "SERVICIOS" en la segunda línea cuando aplique
  const marker = " & ";
  let displayTitle = title;
  const markerIndex = title.indexOf(marker);
  if (markerIndex !== -1) {
    const first = title.slice(0, markerIndex);
    const second = title.slice(markerIndex + 1); // incluye "& SERVICIOS"
    displayTitle = `${first}\n${second}`;
  }

  return (
    <SlideLayout mode="dark" website="@proppia.co" year={year}>
      <div
        ref={slideRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Grid base en modo layout */}
        <SlideGrid cols={8} rows={4} mode="layout" />

        {/* Líneas horizontales adaptativas alineadas a subtítulo y título */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: CONTENT_GUIDE_OPACITY,
          }}
        >
          {subtitleHLines.map((y, i) => (
            <line
              key={`sub-${i}`}
              x1="0"
              y1={`${y * 100}%`}
              x2="100%"
              y2={`${y * 100}%`}
              stroke="var(--grid-line-layout)"
              strokeWidth={GRID_STROKE}
            />
          ))}
          {titleHLines.map((y, i) => (
            <line
              key={`title-h-${i}`}
              x1="0"
              y1={`${y * 100}%`}
              x2="100%"
              y2={`${y * 100}%`}
              stroke="var(--grid-line-layout)"
              strokeWidth={GRID_STROKE}
            />
          ))}
          {titleVLines.map((x, i) => (
            <line
              key={`title-v-${i}`}
              x1={`${x * 100}%`}
              y1="0"
              x2={`${x * 100}%`}
              y2="100%"
              stroke="var(--grid-line-layout)"
              strokeWidth={GRID_STROKE}
            />
          ))}
        </svg>

        {/* Label de división — bajo el header de SlideLayout, en su propio contenedor */}
        <div
          ref={subtitleRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            paddingTop: scale * DIVISION_BLOCK_PADDING_Y,
            paddingBottom: scale * DIVISION_BLOCK_PADDING_Y,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              fontSize: scale * DIVISION_LABEL_SIZE,
              color: "hsl(var(--primary))",
            }}
          >
            {division}
          </p>
        </div>

        {/* Área de contenido: filas 2–4, cols 2–7 */}
        <div
          style={{
            position: "absolute",
            top: FRAME_H,
            bottom: 0,
            left: COVER_COL_W,
            right: COVER_COL_W,
          }}
        >
          {/* Título principal (y opcionalmente número) en bloque alineado y centrado */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: SLIDE_W * CONTENT_TITLE_RATIO,
              maxWidth: SLIDE_W * CONTENT_TITLE_RATIO,
            }}
          >
            <p
              ref={titleRef}
              style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: scale * CONTENT_TITLE_SIZE,
                fontWeight: CONTENT_TITLE_WEIGHT,
                lineHeight: 1.1,
                color: "var(--foreground)",
                textAlign: "center",
                textTransform: "uppercase",
                whiteSpace: "pre-wrap",
              }}
            >
              {displayTitle}
            </p>
          </div>
        </div>

        {/* Pixels en intersecciones del grid */}
        {pixels.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: PIXEL_PX,
              height: PIXEL_PX,
              background: BRAND_GRADIENT,
              borderRadius: PIXEL_RADIUS,
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </SlideLayout>
  );
}

// Wrapper legacy para mantener compat compat con la demo existente
function SlideLayoutContent() {
  return (
    <ContentSlide
      number="03"
      division="Proppia: Performance & Growth"
      title="SUBLÍNEAS & SERVICIOS"
      year={SLIDE_YEAR}
    />
  );
}

// 4–7. Variantes de columnas (modo decorativo)
function SlideColVariant({ cols, rows, use }: { cols: number; rows: number; use: string }) {
  return (
    <SlideLayout>
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <SlideGrid cols={cols} rows={rows} mode="decorative" />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
        }}>
          <p style={{ fontSize: 32, fontWeight: 900, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.01em" }}>
            {cols} cols · {rows} rows
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.25)" }}>{use}</p>
        </div>
      </div>
    </SlideLayout>
  );
}

// 8. Comparación decorativo vs layout
function SlideComparison({ mode }: { mode: "decorative" | "layout" }) {
  const isLayout = mode === "layout";

  if (isLayout) {
    return (
      <>
        <SlideLayoutContent />
        <div style={{ position: "absolute", bottom: 20, right: 28, zIndex: 20 }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
            --grid-line-layout · opacity 0.18
          </span>
        </div>
      </>
    );
  }

  return (
    <SlideLayout website="@proppia.co" year={SLIDE_YEAR}>
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <SlideGrid cols={8} rows={4} mode={mode} />
      <>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <Px top={-999} left={-999} size={0} color="" /> {/* dummy */}
          <p style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.6 }}>
            Modo decorativo<br />
            <span style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.2)" }}>El grid es fondo — no interfiere con el contenido</span>
          </p>
        </div>
        <Px top={85}  left={290} size={12} color="#75EFB1" />
        <Px top={55}  left={730} size={10} color="#F6E342" />
        <Px top={315} left={75}  size={11} color="#23F8F7" />
        <Px top={490} left={620} size={9}  color="#F6E342" />
        <div style={{ position: "absolute", bottom: 20, right: 28 }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
            --grid-line · opacity 0.08
          </span>
        </div>
      </>
    </div>
    </SlideLayout>
  );
}

// ══════════════════════════════════════════════════════════
// Page
// ══════════════════════════════════════════════════════════
export function FoundationsGridPage() {
  const [presentingIndex, setPresentingIndex] = useState<number | null>(null);

  const SLIDES: SlideEntry[] = [
    { label: "Decorativo — Portada Brand Book",         content: <SlideDecorativeCover /> },
    { label: "Decorativo — Slide de sección",           content: <SlideDecorativeSection /> },
    { label: "Layout — Sublíneas & Servicios",          content: <SlideLayoutContent /> },
    { label: "Variante 4×2 — Layout amplio",            content: <SlideColVariant cols={4} rows={2} use="Layout amplio, 2 bloques principales" /> },
    { label: "Variante 6×3 — Contenido mixto",         content: <SlideColVariant cols={6} rows={3} use="Contenido mixto, texto + imagen" /> },
    { label: "Variante 8×4 — Estándar brandbook",       content: <SlideColVariant cols={8} rows={4} use="Estándar brandbook — portadas y secciones" /> },
    { label: "Variante 12×4 — Editorial",               content: <SlideColVariant cols={12} rows={4} use="Slides editoriales de alta densidad" /> },
    { label: "Comparación — Modo decorativo",           content: <SlideComparison mode="decorative" /> },
    { label: "Comparación — Modo layout",               content: <SlideComparison mode="layout" /> },
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
        title="Grid"
        description="El grid es el segundo recurso gráfico de Proppia. Opera en dos modos: como fondo atmosférico que otorga profundidad, y como sistema de maquetación que estructura el contenido en slides de presentación."
      />

      {/* HERO — dos modos */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <SlideFrame label="Modo decorativo" onExpand={() => expand(0)}>
            <SlideDecorativeCover />
          </SlideFrame>
          <SlideFrame label="Modo layout" onExpand={() => expand(2)}>
            <SlideLayoutContent />
          </SlideFrame>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 text-sm font-semibold text-foreground">Modo decorativo</p>
            <p className="text-xs text-muted-foreground leading-relaxed">Fondo atmosférico — el grid da textura sin competir con el contenido. Opacity 0.08 (<code className="font-mono">--grid-line</code>). En portadas, líneas adaptativas siguen los bordes del título, logo y año.</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 text-sm font-semibold text-foreground">Modo layout</p>
            <p className="text-xs text-muted-foreground leading-relaxed">Las líneas del grid se convierten en bordes de celda. Opacity 0.18 (<code className="font-mono">--grid-line-layout</code>).</p>
          </div>
        </div>
      </section>

      {/* REGLA GLOBAL: LÍNEAS ADAPTATIVAS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Regla global — líneas adaptativas</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          En portadas, las líneas se adaptan a los bordes del contenido. En modo layout (subportadas), grid 4×4 limpio sin duplicados.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Portada",
              desc: "Líneas alineadas a título, logo y año. El año tiene su borde izquierdo alineado al borde derecho del título.",
            },
            {
              label: "Subportada / modo layout",
              desc: "Consume SlideLayout tokenizado (header + footer). Grid 8×4 estándar brandbook. Pixels aleatorios.",
            },
            {
              label: "Pixels aleatorios",
              desc: "En modo layout, los pixels se distribuyen de forma aleatoria. Mismo tamaño, color cyan, sin border-radius.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border p-4">
              <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRID ADAPTATIVO EN PORTADA */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Grid adaptativo — portada</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          En las portadas, el grid combina columnas fijas (8 cols) con líneas adaptativas que siguen los bordes del contenido.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Líneas horizontales",
              desc: "De lado a lado del slide. Se alinean con el borde superior e inferior del título, logo y año.",
            },
            {
              label: "Líneas verticales",
              desc: "De arriba a abajo. Siguen el borde izquierdo y derecho del título, logo y año. Una sola línea une el borde derecho del título con el borde izquierdo del año.",
            },
            {
              label: "Año",
              desc: "Mismo tamaño que el título (3.2em). Borde izquierdo alineado exactamente con el borde derecho del título.",
            },
            {
              label: "Pixels",
              desc: "Siempre en columnas 1 u 8 (márgenes) o zonas alejadas del logo. Mismo tamaño, degradado de marca, sin border-radius.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border p-4">
              <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISTRIBUCIÓN DEL GRID */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Distribución — zonas del grid</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          El grid de 8 columnas define tres zonas funcionales. Las columnas exteriores actúan como margen de respiración;
          el contenido siempre arranca desde la columna 2 y termina en la columna 7.
        </p>

        {/* Diagrama de zonas */}
        <div className="mb-5 overflow-hidden rounded-xl border border-border bg-[#141414]">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <svg
              viewBox={`0 0 ${SLIDE_W} ${SLIDE_H}`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            >
              {/* Fondo */}
              <rect width={SLIDE_W} height={SLIDE_H} fill="#141414" />

              {/* Zonas de margen — col 1 y col 8 */}
              <rect x={0}                         y={0} width={SLIDE_W/8}     height={SLIDE_H} fill="rgba(246,227,66,0.06)" />
              <rect x={SLIDE_W - SLIDE_W/8}       y={0} width={SLIDE_W/8}     height={SLIDE_H} fill="rgba(246,227,66,0.06)" />

              {/* Zona activa — cols 2-7 */}
              <rect x={SLIDE_W/8} y={0} width={SLIDE_W * 6/8} height={SLIDE_H} fill="rgba(35,248,247,0.04)" />

              {/* Líneas del grid */}
              {[1,2,3,4,5,6,7].map(i => (
                <line key={i}
                  x1={SLIDE_W * i/8} y1={0} x2={SLIDE_W * i/8} y2={SLIDE_H}
                  stroke="white" strokeWidth="0.5" opacity="0.12"
                />
              ))}
              {[1,2,3].map(i => (
                <line key={i}
                  x1={0} y1={SLIDE_H * i/4} x2={SLIDE_W} y2={SLIDE_H * i/4}
                  stroke="white" strokeWidth="0.5" opacity="0.08"
                />
              ))}

              {/* Etiquetas de columna */}
              {[1,2,3,4,5,6,7,8].map(i => (
                <text key={i}
                  x={SLIDE_W * (i - 0.5)/8} y={24}
                  textAnchor="middle" fontSize={11}
                  fill={i === 1 || i === 8 ? "#F6E342" : "rgba(255,255,255,0.4)"}
                  fontFamily="monospace"
                >
                  {i}
                </text>
              ))}

              {/* Etiqueta zona margen izq */}
              <text x={SLIDE_W * 0.5/8} y={SLIDE_H/2 - 10} textAnchor="middle" fontSize={10} fill="#F6E342" opacity={0.8} fontFamily="monospace">MARGEN</text>
              <text x={SLIDE_W * 0.5/8} y={SLIDE_H/2 + 6}  textAnchor="middle" fontSize={9}  fill="#F6E342" opacity={0.5} fontFamily="monospace">{Math.round(SLIDE_W/8)}px</text>

              {/* Etiqueta zona activa */}
              <text x={SLIDE_W/2} y={SLIDE_H/2 - 10} textAnchor="middle" fontSize={13} fill="rgba(35,248,247,0.8)" fontFamily="monospace" fontWeight="bold">ZONA ACTIVA — COLS 2–7</text>
              <text x={SLIDE_W/2} y={SLIDE_H/2 + 8}  textAnchor="middle" fontSize={10} fill="rgba(35,248,247,0.4)" fontFamily="monospace">{Math.round(SLIDE_W * 6/8)}px · 75% del slide</text>

              {/* Etiqueta zona margen dcha */}
              <text x={SLIDE_W * 7.5/8} y={SLIDE_H/2 - 10} textAnchor="middle" fontSize={10} fill="#F6E342" opacity={0.8} fontFamily="monospace">MARGEN</text>
              <text x={SLIDE_W * 7.5/8} y={SLIDE_H/2 + 6}  textAnchor="middle" fontSize={9}  fill="#F6E342" opacity={0.5} fontFamily="monospace">{Math.round(SLIDE_W/8)}px</text>

              {/* Flecha ancho col */}
              <line x1={SLIDE_W/8 + 4} y1={SLIDE_H - 22} x2={SLIDE_W * 2/8 - 4} y2={SLIDE_H - 22} stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
              <text x={SLIDE_W * 1.5/8} y={SLIDE_H - 8} textAnchor="middle" fontSize={8} fill="rgba(255,255,255,0.3)" fontFamily="monospace">1 col = {Math.round(SLIDE_W/8)}px</text>
            </svg>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Col 1 y Col 8 — Margen",
              desc: `Columnas exteriores reservadas como respiración visual. Ancho = ${Math.round(SLIDE_W/8)}px. El contenido no entra aquí.`,
              color: "#F6E342",
            },
            {
              label: "Cols 2–7 — Zona activa",
              desc: `${Math.round(SLIDE_W * 6/8)}px · 75% del slide. Aquí vive todo el contenido: título, logo, texto, imágenes.`,
              color: "#23F8F7",
            },
            {
              label: "Punto de corte vertical",
              desc: `Col 4–5: mitad del slide = ${SLIDE_W / 2}px. Divide título (izq) y logo (der). En portadas, el año se alinea al borde derecho del título.`,
              color: "#75EFB1",
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

      {/* TOKENS */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Tokens</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Variables CSS en <code className="font-mono text-xs">globals.css</code>. Los tokens de conteo son valores de referencia, no propiedades CSS funcionales.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Valor</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground">Uso</th>
              </tr>
            </thead>
            <tbody>
              {[
                { token: "--grid-line",        val: "rgba(255,255,255,0.08)", use: "Líneas en modo decorativo — muy sutil, atmosférico",     preview: true  },
                { token: "--grid-line-layout", val: "rgba(255,255,255,0.18)", use: "Líneas en modo layout — definen celdas de contenido",    preview: true  },
                { token: "--grid-stroke",      val: "0.5px",                  use: "Grosor de línea — igual en ambos modos",                 preview: false },
                { token: "--grid-cols-4",      val: "4",  use: "Layouts de sección, 4 columnas principales",       preview: false },
                { token: "--grid-cols-8",      val: "8",  use: "Estándar brandbook — portadas y slides de sección", preview: false },
                { token: "--grid-cols-12",     val: "12", use: "Editorial de alta densidad",                        preview: false },
                { token: "--grid-rows-4",      val: "4",  use: "Estándar brandbook",                               preview: false },
              ].map((row) => (
                <tr key={row.token} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{row.token}</code>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {row.preview && (
                        <div style={{
                          width: 28, height: 14, flexShrink: 0,
                          background: `repeating-linear-gradient(90deg, ${row.val} 0px, ${row.val} 1px, #141414 1px, #141414 8px)`,
                          border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2,
                        }} />
                      )}
                      <code className="text-xs font-mono text-muted-foreground">{row.val}</code>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* MODO DECORATIVO — variantes */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Modo decorativo — variantes de columnas</h2>
        <p className="mb-5 text-sm text-muted-foreground">El estándar brandbook es <strong>8 cols · 4 rows</strong>.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <SlideFrame label="4 cols · 2 rows — Layout amplio" onExpand={() => expand(3)}>
            <SlideColVariant cols={4} rows={2} use="Layout amplio, 2 bloques principales" />
          </SlideFrame>
          <SlideFrame label="6 cols · 3 rows — Contenido mixto" onExpand={() => expand(4)}>
            <SlideColVariant cols={6} rows={3} use="Contenido mixto, texto + imagen" />
          </SlideFrame>
          <SlideFrame label="8 cols · 4 rows — Estándar brandbook" onExpand={() => expand(5)}>
            <SlideColVariant cols={8} rows={4} use="Estándar brandbook — portadas y secciones" />
          </SlideFrame>
          <SlideFrame label="12 cols · 4 rows — Editorial" onExpand={() => expand(6)}>
            <SlideColVariant cols={12} rows={4} use="Slides editoriales de alta densidad" />
          </SlideFrame>
        </div>
      </section>

      {/* MODO LAYOUT */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Modo layout — el grid como maquetador</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Las líneas del grid definen el header, las columnas y las filas. Referente: slide de subportada con grid 4×4, subtítulo de división, título centrado y pixels en intersecciones.
        </p>
        <div className="mb-6">
          <SlideFrame label="Contenido estructurado — Sublíneas & Servicios" onExpand={() => expand(2)}>
            <SlideLayoutContent />
          </SlideFrame>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Header row", desc: "La primera fila horizontal delimita el header (logo · número · año). Height ≈ 14% del slide.", color: "#F6E342" },
            { label: "Columna de recurso", desc: "1–2 cols del lado izquierdo para imágenes o siluetas. Width ≈ 25% del slide.", color: "#75EFB1" },
            { label: "Celdas de contenido", desc: "El resto forma celdas donde vive el texto, con padding interno proporcional.", color: "#23F8F7" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border p-4">
              <div className="mb-3 h-0.5 w-8" style={{ background: item.color, borderRadius: 0 }} />
              <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Comparación — decorativo vs layout</h2>
        <p className="mb-5 text-sm text-muted-foreground">El mismo grid 8×4, diferente intención de uso.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <SlideFrame label="Decorativo · --grid-line (0.08)" onExpand={() => expand(7)}>
            <SlideComparison mode="decorative" />
          </SlideFrame>
          <SlideFrame label="Layout · --grid-line-layout (0.18)" onExpand={() => expand(8)}>
            <SlideComparison mode="layout" />
          </SlideFrame>
        </div>
      </section>

      {/* ARQUITECTURA ESCALABLE */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">Arquitectura escalable</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Las slides pueden generarse a partir de datos estructurados, manteniendo la lógica de grid y los tokens del sistema.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-muted/30 px-4 py-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
              TypeScript — modelo de datos
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-[12px] font-mono text-foreground leading-relaxed">{`interface PresentationSlide =
  | { type: "cover"; title: string; year: string }
  | { type: "section"; number: string; sectionTitle: string }
  | { type: "content"; number: string; division: string; title: string };`}</pre>
        </div>
      </section>

      {/* CÓDIGO */}
      <section className="mb-12">
        <h2 className="mb-1 text-base font-semibold text-foreground">SlideGrid — componente SVG</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Helper canónico. Se posiciona absolutamente y no interfiere con el contenido.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-muted/30 px-4 py-2">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">React / TSX</span>
          </div>
          <pre className="overflow-x-auto p-4 text-[12px] font-mono text-foreground leading-relaxed">{`function SlideGrid({
  cols = 8,
  rows = 4,
  mode = "decorative",   // "decorative" | "layout"
}) {
  const opacity   = mode === "decorative" ? 0.08 : 0.18;
  const verticals   = Array.from({ length: cols - 1 }, (_, i) => i + 1);
  const horizontals = Array.from({ length: rows - 1 }, (_, i) => i + 1);

  return (
    <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
                  pointerEvents:"none", opacity }}>
      {verticals.map((i) => (
        <line key={\`v\${i}\`}
          x1={\`\${(i/cols)*100}%\`} y1="0"
          x2={\`\${(i/cols)*100}%\`} y2="100%"
          stroke="white" strokeWidth="0.5" />
      ))}
      {horizontals.map((i) => (
        <line key={\`h\${i}\`}
          x1="0" y1={\`\${(i/rows)*100}%\`}
          x2="100%" y2={\`\${(i/rows)*100}%\`}
          stroke="white" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

// Uso en modo layout — celda que coincide con las líneas del grid (8 cols)
// Columnas 1–2 = left:0, width:25%   |  Filas 1–2 = top:0, height:50%
<div style={{
  position: "absolute",
  left: 0, top: 0, width: "25%", height: "50%",
  borderRight:  "0.5px solid var(--grid-line-layout)",
  borderBottom: "0.5px solid var(--grid-line-layout)",
  padding: "4% 5%",
}}>
  {/* contenido */}
</div>`}</pre>
        </div>
      </section>

      {/* REGLAS */}
      <section className="mb-4">
        <h2 className="mb-1 text-base font-semibold text-foreground">Reglas de uso</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { positive: true,  label: "El grid siempre está en el fondo",              desc: "position: absolute; inset: 0. Nunca sobre el contenido." },
            { positive: true,  label: "En modo layout, el contenido respeta el grid",  desc: "Los bordes de los contenedores coinciden exactamente con las líneas del grid." },
            { positive: true,  label: "Portada: año alineado al título",               desc: "El borde izquierdo del año coincide con el borde derecho del título. Una sola línea vertical." },
            { positive: true,  label: "Layout: SlideLayout tokenizado + grid 8×4",  desc: "Header y footer definidos en SlideFrame. Grid estándar brandbook 8×4." },
            { positive: true,  label: "Layout: pixels aleatorios",                     desc: "Los pixels se distribuyen de forma aleatoria, no en posiciones fijas." },
            { positive: true,  label: "8×4 es el estándar",                           desc: "Usar otras variantes solo cuando el contenido lo justifique." },
            { positive: true,  label: "Pixels en márgenes (cols 1 y 8)",               desc: "Nunca invadir el área del logo. Mismo tamaño, degradado de marca, sin border-radius." },
            { positive: false, label: "No mezclar modos en el mismo slide",            desc: "Un slide usa un solo modo: decorativo o layout. No ambos." },
            { positive: false, label: "No aumentar la opacidad",                      desc: "Superar 0.20 hace que el grid sea más llamativo que el contenido." },
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
