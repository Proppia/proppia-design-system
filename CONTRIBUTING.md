# Guía de contribución

Gracias por contribuir al Proppia Design System. Esta guía te ayudará a mantener la consistencia del proyecto.

## Antes de empezar

1. **Revisa la documentación** en `docs/`:
   - [design-system-proppia.md](docs/design-system-proppia.md) — Filosofía y criterios
   - [components-catalog.md](docs/components-catalog.md) — Catálogo y estado de componentes
   - [brandbook-proppia.md](docs/brandbook-proppia.md) — Identidad visual

2. **Asegúrate de tener** Node ≥ 20 y pnpm instalado.

## Flujo de trabajo

1. Crea una rama desde `main` (ej. `feat/nuevo-componente`, `fix/button-variants`).
2. Haz tus cambios siguiendo las convenciones del proyecto.
3. Ejecuta `pnpm lint` y corrige errores.
4. Añade o actualiza la página en `apps/docs` si introduces un componente nuevo.
5. Actualiza `docs/components-catalog.md` si el componente cambia de estado.
6. Abre un Pull Request con una descripción clara.

## Convenciones de componentes

### Atomic Design

- **Átomo**: Unidad mínima, sin dependencias de layout (Button, Input, Avatar).
- **Molécula**: Combinación de átomos para un patrón recurrente (FormField, SearchBar).
- **Organismo**: Sección completa reutilizable (Navbar, DocsSidebar).

### Definición de DONE

Un componente está listo cuando:

- Tiene **variantes** relevantes (default, secondary, destructive, etc.).
- Tiene **tamaños** cuando aplica (sm, md, lg).
- Cubre **estados**: hover, focus-visible, disabled.
- Cumple **accesibilidad**: focus ring, `aria-*` cuando aplica.
- Tiene **ejemplo** en `apps/docs`.

### Tokens

- No hardcodear colores, espaciados ni radios.
- Usar variables CSS semánticas (`--background`, `--primary`, etc.).
- Usar clases Tailwind basadas en tokens: `bg-primary`, `text-foreground`, etc.

## Estructura de archivos

```
packages/ui/src/components/
├── atoms/       # Componentes base
├── molecules/   # Combinaciones pequeñas
└── organisms/   # Secciones completas
```

## Nuevos componentes

1. **Añade el componente** en `docs/components-catalog.md` con nombre, tipo y estado.
2. **Implementa** en `packages/ui/src/components/`.
3. **Exporta** desde `packages/ui/src/index.ts`.
4. **Crea la página** en `apps/docs/src/pages/components/`.
5. **Registra la ruta** en `apps/docs/src/layout/AppSidebar.tsx`.

## Iconografía

Usa [Lucide React](https://lucide.dev/) como librería oficial. Aplica colores con tokens (`text-primary`, `text-muted-foreground`, etc.).

## Preguntas

Si tienes dudas, contacta al equipo de producto o diseño de Proppia.
