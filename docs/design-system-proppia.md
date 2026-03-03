---
title: Proppia Design System
scope: agnóstico de producto
---

## Objetivo

Este repositorio define el **Design System oficial de Proppia** para ser consumido por múltiples productos/plataformas.

Principios:

- **Tokens semánticos** (variables CSS) + Tailwind: estilo shadcn/ui.
- **Accesibilidad por defecto**: focus ring consistente, estados claros, props ARIA cuando aplican.
- **Atomic Design** como modelo mental y estructura de carpetas.

## Atomic Design (criterio y carpetas)

Carpetas en `@proppia/ui`:

- `packages/ui/src/components/atoms`
  - Unidades mínimas (Button, Input, Text…).
  - Sin dependencias de layout de página.
- `packages/ui/src/components/molecules`
  - Combinaciones pequeñas de átomos (FormField, SearchBar).
  - Resuelven un patrón recurrente, siguen siendo agnósticas.
- `packages/ui/src/components/organisms`
  - Secciones completas reutilizables (p. ej. header/sidebar de docs).
  - Pueden orquestar moléculas/átomos y manejar estructura de layout.

Regla práctica:

- Si el componente **se puede explicar en una línea** y es genérico → **átomo**.
- Si combina 2–4 piezas para un patrón recurrente → **molécula**.
- Si define una sección/layout con navegación o estructura dominante → **organismo**.

## Tokens semánticos (estilo shadcn/ui)

Los componentes **no** hardcodean colores/espaciados/radios: usan clases basadas en tokens semánticos.

Variables CSS obligatorias (definidas en `@proppia/ui/styles.css`):

- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`

Tailwind mapea estos tokens a colores semánticos con soporte de alpha:

- `bg-background`, `text-foreground`, `border-border`, `ring-ring`, etc.
- Variantes con opacidad: `bg-primary/90`, `bg-accent/50`, etc.

## Dark mode

El dark mode se activa por clase:

- `document.documentElement.classList.add("dark")`

En `@proppia/ui/styles.css` se define:

- `:root` (light)
- `.dark` (dark)

## Definición de DONE (por componente)

Un componente se considera “DONE” cuando:

- Tiene **variantes** relevantes (ej. `Button`: default/secondary/destructive/ghost/link).
- Tiene **tamaños** cuando aplica (sm/md/lg).
- Cubre **estados**: hover, focus-visible, disabled.
- Cumple **accesibilidad**:
  - focus ring consistente (ring + ring-offset).
  - `aria-*` cuando aplica (ej. `FormField` + `aria-describedby`).
- Tiene **ejemplo real** en `apps/docs`.

## Iconografía

- **Librería oficial**: [Lucide React](https://lucide.dev/). Misma base que shadcn/ui: trazo consistente, tamaños estándar, buena accesibilidad.
- Uso: instalar `lucide-react` en el proyecto consumidor e importar los iconos necesarios. Aplicar color con tokens (`text-primary`, `text-accent`, `text-muted-foreground`, etc.).

