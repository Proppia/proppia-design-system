# RULES — Proppia Design System

## 1) Tokens primero (prohibido hardcodear)

- **Prohibido** hardcodear colores/radius/spacing en componentes.
- Usar siempre **tokens semánticos** via Tailwind:
  - `bg-background`, `text-foreground`, `border-border`
  - `bg-primary`, `text-primary-foreground`, etc.

Fuente de verdad del tema:

- `packages/ui/src/styles/globals.css` (variables CSS light/dark)
- `tailwind.config.cjs` (mapeo `hsl(var(--token) / <alpha-value>)`)

## 2) Accesibilidad mínima obligatoria

- Focus visible consistente:
  - `focus-visible:ring-2 focus-visible:ring-ring`
  - `focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Estados:
  - `disabled:opacity-50 disabled:pointer-events-none` (o equivalente)
- Para campos:
  - Descripción/errores deben estar conectados con `aria-describedby`.

## 3) Atomic Design (dónde vive cada cosa)

- **Átomos**: componentes base sin composición “de patrón”.
- **Moléculas**: patrón repetible compuesto (ej. `FormField`).
- **Organismos**: sección/layout con estructura mayor.

Si tienes dudas, prioriza:

- Reuso y simplicidad.
- No acoplarse a un producto específico.

## 4) Variantes y API

- Preferir variantes con `class-variance-authority` (cva).
- Mantener nombres consistentes: `variant`, `size`.
- No crear props “ad-hoc” si una variante lo resuelve.

## 5) Docs obligatorias

Cada componente nuevo debe tener:

- Página o sección en `apps/docs` con ejemplos reales.
- Checklist DONE (variantes/tamaños/estados/a11y).

