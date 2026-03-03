import { useCallback, useEffect, useRef, useState } from "react";

// Dimensiones de referencia para el canvas de slides (equivalente a 1 PPT slide)
export const SLIDE_W = 1040;
export const SLIDE_H = Math.round(SLIDE_W * 9 / 16); // 585px

// ─────────────────────────────────────────────────────────
// SlideLayout — área de protección estándar de Proppia
//
// Reglas:
//  · Monograma sin línea — esquina superior izquierda
//  · Sitio web           — centro del header
//  · Año                 — esquina superior derecha
//  · Copyright           — pie de página centrado
//  · Todos los elementos del frame al 50% de opacidad
//  · Modo oscuro: monograma blanco sobre #141414
//  · Modo claro:  monograma negro sobre #FFFFFF
// ─────────────────────────────────────────────────────────
export const LOGO_DARK         = "/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg";
export const LOGO_LIGHT        = "/branding/proppia-logos/Monograma Principal Todo Negro Sin Linea.svg";
export const LOGO_WORDMARK_DARK  = "/branding/proppia-logos/Logo Principal con Blanco.svg";
export const LOGO_WORDMARK_LIGHT = "/branding/proppia-logos/Logo Principal con Negro.svg";
export const LOGO_FULL_DARK      = "/branding/proppia-logos/Logo Principal Todo Blanco.svg";
export const LOGO_FULL_LIGHT     = "/branding/proppia-logos/Logo Principal Todo Negro.svg";

// ── Tokens de frame (px sobre el canvas 1040×585) ──────────────────────────
export const FRAME_H          = 50;    // altura del header  — PAD_Y(18) + logo(14) + PAD_Y(18)
export const FRAME_PAD_X      = 48;    // padding horizontal (~4.6% de 1040)
export const FRAME_PAD_Y      = 18;    // distancia desde el borde superior al baseline
export const FOOTER_H         = 32;    // altura del footer  (~5.5% de 585)
export const FRAME_LOGO_H     = 14;    // altura del monograma en px
export const FRAME_FONT_SIZE  = 9;     // tamaño de fuente del frame (header + footer)
export const FRAME_FONT_WEIGHT = 300;  // peso de fuente del frame (light)
export const FRAME_OPACITY    = 0.5;   // opacidad global del frame
export const FRAME_SEPARATOR  = "0.5px solid"; // grosor del separador

// ── Tokens de portada (slides tipo cover/subportada) ───────────────────────
// Fuente única para Layout, Grid y Templates
export const SLIDE_BG_DARK    = "#141414";   // fondo oscuro de slides (modo presentación)
export const BRAND_CHALK      = "#F1F1F1";   // fondo neutro claro (brandbook)
export const BRAND_CHARCOAL   = "#1E1E1E";   // neutro oscuro, tipografía y fondos (brandbook)
export const BRAND_GRADIENT   = "linear-gradient(135deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)";
// Gradiente del pixel — mismo que la línea del logo principal (Logo Principal con Blanco/Negro.svg)
export const LOGO_LINE_GRADIENT = "linear-gradient(90deg, #fae23e 0%, #6dccdd 100%)";
// Colores de división (pixels en portadas de unidad de negocio)
export const BRAND_YELLOW    = "#F6E342";  // Performance & Growth
export const BRAND_MINT      = "#75EFB1";  // Brand & Experience Design
export const BRAND_TURQUOISE = "#23F8F7";  // Digital Products & AI Lab
export const COVER_TITLE_SIZE = Math.round(3.2 * 12);   // 38 px — Bold 700
export const COVER_LOGO_H     = Math.round(6.0 * 12);  // 72 px
export const COVER_YEAR_SIZE  = Math.round(1.9 * 12);  // 23 px — año en portada
export const COVER_COL_W      = SLIDE_W / 8;            // 130 px — 1 columna del grid 8
export const PIXEL_PX         = Math.round(SLIDE_W * 0.011); // 11 px — mismo tamaño en todos los pixels
export const COVER_PIXELS: Array<{ top: number; left?: number; right?: number }> = [
  { top: SLIDE_H * 0.17, left:  SLIDE_W * 0.30  },
  { top: SLIDE_H * 0.10, right: SLIDE_W * 0.10  },
  { top: SLIDE_H * 0.54, left:  SLIDE_W * 0.055 },
  { top: SLIDE_H * 0.71, left:  SLIDE_W * 0.23  },
  { top: SLIDE_H * 0.20, right: SLIDE_W * 0.06  },
  { top: SLIDE_H * 0.79, right: SLIDE_W * 0.08  },
  { top: SLIDE_H * 0.31, left:  SLIDE_W * 0.50  },
];

// ── Tokens tipográficos y de layout para slides de contenido ─────────────────
// Tamaños base (a escala SLIDE_W = 1040px)
export const CONTENT_TITLE_SIZE  = 44;   // px — títulos tipo "SUBLÍNEAS & SERVICIOS" (ligeramente menor que portada)
export const DIVISION_LABEL_SIZE = 14;   // px — labels de división en header
export const SLIDE_NUMBER_SIZE   = 16;   // px — números de slide ("03")
export const CONTENT_TITLE_WEIGHT = 700; // peso "bold" del título principal en slides de contenido
export const DIVISION_BLOCK_PADDING_Y = Math.round(SLIDE_H * 0.035); // padding vertical para el subtítulo (con más aire)

// Ratios de layout sobre el canvas completo
export const ACTIVE_ZONE_RATIO   = 0.75; // cols 2–7 ~ 75% del ancho
export const CONTENT_TITLE_RATIO = 0.45; // título principal ocupa ~45% del ancho (fuerza 2 líneas)
export const CONTENT_TITLE_EXCLUSION_TOP_RATIO = 0.40;   // banda vertical donde vive el título (inicio)
export const CONTENT_TITLE_EXCLUSION_BOTTOM_RATIO = 0.64; // banda vertical donde vive el título (fin)
export const CONTENT_TITLE_EXCLUSION_MARGIN_X = 0.04;     // padding horizontal extra para evitar pixels pegados
export const HEADER_ZONE_RATIO   = 0.14; // header ~14% del alto

// Grid — espejo de tokens CSS (--grid-line, --grid-line-layout, --grid-stroke)
export const GRID_LAYOUT_OPACITY    = 0.18;
export const GRID_DECORATIVE_OPACITY = 0.08;
export const GRID_STROKE            = 0.5;
export const CONTENT_GUIDE_OPACITY  = 0.24; // guías adaptativas para subtítulo/título (un poco más visibles)

// Pixel
export const PIXEL_RADIUS        = 0;    // cuadrado estricto, sin border-radius

// Opacidades específicas de elementos en slides
export const SLIDE_NUMBER_OPACITY = 0.7;

// Año por defecto en slides de presentación
export const SLIDE_YEAR = "2026";

export interface SlideLayoutProps {
  children: React.ReactNode;
  mode?: "dark" | "light";
  website?: string;
  year?: string | number;
  copyright?: string;
  headerCenter?: string;
}

export function SlideLayout({
  children,
  mode = "dark",
  website = "@proppia.co",
  year = SLIDE_YEAR,
  copyright,
  headerCenter,
}: SlideLayoutProps) {
  const isLight = mode === "light";
  const bg        = isLight ? "#FFFFFF" : SLIDE_BG_DARK;
  const textColor = isLight ? "#000000" : "#FFFFFF";
  const logoSrc   = isLight ? LOGO_LIGHT : LOGO_DARK;
  const copy      = copyright ?? `© Proppia SAS, Todos los derechos reservados.`;
  const centerLabel = headerCenter ?? website;

  return (
    <div
      style={{
        position: "relative",
        width: SLIDE_W,
        height: SLIDE_H,
        backgroundColor: bg,
        overflow: "hidden",
        fontFamily: "inherit",
      }}
    >
      {/* ── Header ─────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 0, right: 0, top: 0,
          height: FRAME_H,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: `${FRAME_PAD_Y}px ${FRAME_PAD_X}px 0`,
          opacity: FRAME_OPACITY,
          zIndex: 10,
        }}
      >
        <img src={logoSrc} alt="Proppia"
          style={{ height: FRAME_LOGO_H, display: "block", marginTop: 1 }}
          draggable={false}
        />
        <span style={{ fontSize: FRAME_FONT_SIZE, fontWeight: FRAME_FONT_WEIGHT, color: textColor, letterSpacing: "0.02em" }}>
          {centerLabel}
        </span>
        <span style={{ fontSize: FRAME_FONT_SIZE, fontWeight: FRAME_FONT_WEIGHT, color: textColor, letterSpacing: "0.02em" }}>
          {year}
        </span>
      </div>

      {/* Separador bajo el header */}
      <div style={{
        position: "absolute",
        left: FRAME_PAD_X, right: FRAME_PAD_X, top: FRAME_H,
        height: "0.5px",
        background: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.08)",
        zIndex: 10,
      }} />

      {/* ── Área de contenido ─────────────────────────── */}
      <div style={{
        position: "absolute",
        top: FRAME_H + 1,
        left: 0, right: 0,
        bottom: FOOTER_H,
        overflow: "hidden",
      }}>
        {children}
      </div>

      {/* Separador sobre el footer */}
      <div style={{
        position: "absolute",
        left: FRAME_PAD_X, right: FRAME_PAD_X, bottom: FOOTER_H,
        height: "0.5px",
        background: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.08)",
        zIndex: 10,
      }} />

      {/* ── Footer ─────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        height: FOOTER_H,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: FRAME_OPACITY,
        zIndex: 10,
      }}>
        <span style={{
          fontSize: FRAME_FONT_SIZE,
          fontWeight: FRAME_FONT_WEIGHT,
          color: textColor,
          letterSpacing: "0.02em",
        }}
        >
          {copy}
        </span>
      </div>
    </div>
  );
}

export interface SlideEntry {
  label: string;
  content: React.ReactNode;
}

// ─────────────────────────────────────────────────────────
// useSlideScale — mide el contenedor real y calcula scale
// ─────────────────────────────────────────────────────────
export function useSlideScale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / SLIDE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { containerRef, scale };
}

// ─────────────────────────────────────────────────────────
// ModalSlideCanvas — slide a tamaño completo dentro del modal
// ─────────────────────────────────────────────────────────
export function ModalSlideCanvas({ content, maxWidth }: { content: React.ReactNode; maxWidth?: string }) {
  const { containerRef, scale } = useSlideScale();
  const w = maxWidth ?? "min(92vw, calc((100vh - 148px) * 16/9))";
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden shadow-2xl"
      style={{
        width: w,
        aspectRatio: "16/9",
        backgroundColor: SLIDE_BG_DARK,
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          fontSize: 12,
        }}
      >
        {content}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// PresentationModal — overlay full-screen con navegación
// ─────────────────────────────────────────────────────────
export function PresentationModal({
  slides,
  initialIndex,
  onClose,
}: {
  slides: SlideEntry[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const total = slides.length;
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  const current = slides[idx];

  // Chrome height: top bar ~44px + bottom bar ~44px + hint ~28px + gaps ~24px = 140px
  const SLIDE_MAX = "min(92vw, calc((100vh - 148px) * 16/9))";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(6px)", padding: "12px 0" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Top bar */}
      <div
        className="flex w-full items-center justify-between px-4 pb-3"
        style={{ maxWidth: SLIDE_MAX }}
      >
        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
          {current.label}
        </span>
        <button
          onClick={onClose}
          className="flex h-7 w-7 items-center justify-center rounded"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
            fontSize: 16,
            cursor: "pointer",
          }}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      {/* Slide canvas */}
      <ModalSlideCanvas content={current.content} maxWidth={SLIDE_MAX} />

      {/* Bottom bar */}
      <div
        className="flex w-full items-center justify-between px-4 pt-3"
        style={{ maxWidth: SLIDE_MAX }}
      >
        <button
          onClick={prev}
          className="flex h-8 items-center gap-2 rounded px-3 text-xs font-medium"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
          }}
        >
          ← Anterior
        </button>

        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            {idx + 1} / {total}
          </span>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? 16 : 5,
                  height: 3,
                  borderRadius: 2,
                  background: i === idx ? "#23F8F7" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.2s, background 0.2s",
                }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="flex h-8 items-center gap-2 rounded px-3 text-xs font-medium"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
          }}
        >
          Siguiente →
        </button>
      </div>

      <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
        ← → navegar · Esc cerrar
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SlideFrame — thumbnail 16:9 con botón expand y overlay
// ─────────────────────────────────────────────────────────
export function SlideFrame({
  children,
  label,
  onExpand,
}: {
  children: React.ReactNode;
  label: string;
  onExpand?: () => void;
}) {
  const { containerRef, scale } = useSlideScale();

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-semibold text-muted-foreground">{label}</p>
        {onExpand && (
          <button
            onClick={onExpand}
            className="flex h-5 w-5 items-center justify-center rounded opacity-40 transition-opacity hover:opacity-100"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              cursor: "pointer",
              fontSize: 10,
            }}
            title="Ver en modo presentación"
            aria-label="Expandir slide"
          >
            ⤢
          </button>
        )}
      </div>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden border border-border shadow-lg"
        style={{ aspectRatio: "16/9", backgroundColor: "#141414" }}
      >
        {/* Canvas fijo escalado con transform */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: SLIDE_W,
            height: SLIDE_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            fontSize: 12,
          }}
        >
          {children}
        </div>
        {/* Overlay hover para expandir */}
        {onExpand && (
          <button
            onClick={onExpand}
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100"
            style={{
              background: "rgba(0,0,0,0.45)",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Ver en presentación"
          >
            <span
              className="flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold text-white"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(4px)",
              }}
            >
              ⤢ Modo presentación
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
