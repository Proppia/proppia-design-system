# Proppia Design System

Sistema de diseño oficial de **Proppia**, basado en Atomic Design y tokens semánticos al estilo [shadcn/ui](https://ui.shadcn.com). Pensado para productos digitales de la organización y sus clientes.

## Características

- **Atomic Design** — Componentes organizados en átomos, moléculas y organismos
- **Tokens semánticos** — Variables CSS para colores, espaciado y tipografía
- **Accesibilidad** — Focus ring, estados claros y atributos ARIA por defecto
- **Identidad Proppia** — Paleta, tipografía Bw Gradual y pixel como recurso gráfico
- **React + Tailwind** — Stack moderno con soporte para dark mode

## Estructura del monorepo

```
proppia-design-system/
├── apps/
│   └── docs/          # Documentación interactiva (Vite + React Router)
├── packages/
│   └── ui/            # @proppia/ui — librería de componentes
├── docs/              # Documentación en Markdown (brandbook, catálogo, fundamentos)
└── scripts/           # Utilidades (importación de branding, etc.)
```

## Requisitos

- **Node.js** ≥ 20
- **pnpm** (vía Corepack)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Proppia/proppia-design-system.git
cd proppia-design-system

# Instalar dependencias
corepack pnpm install
```

## Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm dev:docs` | Inicia la documentación interactiva en modo desarrollo |
| `pnpm build:ui` | Compila la librería `@proppia/ui` |
| `pnpm build` | Compila todos los paquetes del monorepo |
| `pnpm lint` | Ejecuta ESLint en todos los paquetes |
| `pnpm import:branding` | Importa recursos de branding (logos, Figma, etc.) |

## Documentación

### Documentación interactiva

Ejecuta `pnpm dev:docs` y abre [http://localhost:5173](http://localhost:5173) para explorar:

- **Fundamentos** — Colores, tipografía, espaciado, grid, pixel, logotipos
- **Componentes** — Catálogo con ejemplos y variantes
- **Playgrounds** — Landing, Case Study, Dashboard
- **Templates** — Plantillas de presentación

### Documentación en Markdown

| Documento | Descripción |
|-----------|-------------|
| [docs/design-system-proppia.md](docs/design-system-proppia.md) | Filosofía, tokens, Atomic Design, dark mode |
| [docs/components-catalog.md](docs/components-catalog.md) | Catálogo completo de componentes (estado, tipo, referencia shadcn) |
| [docs/brandbook-proppia.md](docs/brandbook-proppia.md) | Resumen del brandbook para el Design System |

## Consumir @proppia/ui

1. Añade `@proppia/ui` como dependencia (workspace o registry cuando se publique).
2. Importa los estilos globales:

```tsx
import "@proppia/ui/styles.css";
```

3. Importa y usa los componentes:

```tsx
import { Button, Card } from "@proppia/ui";
```

## Tecnologías

- **React 19** — UI
- **Vite** — Build y dev server
- **Tailwind CSS** — Estilos
- **Radix UI** — Primitivos accesibles
- **Lucide React** — Iconografía oficial

## Licencia

Uso interno de Proppia. Consultar con el equipo para uso externo.
