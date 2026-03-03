## Proppia Design System (Atomic + tokens semánticos)

Monorepo oficial del **Design System de Proppia**, basado en:

- **Atomic Design** (Brad Frost)
- Enfoque **shadcn/ui**: tokens semánticos con variables CSS, estética minimalista, variantes sólidas y accesibilidad.

### Estructura

- `packages/ui`: librería `@proppia/ui` (componentes + tokens)
- `apps/docs`: documentación local (viewer) que consume `@proppia/ui`
- `docs/`: documentación del sistema (brandbook, reglas, fundamentos)

### Requisitos

- Node \(>= 20\)
- pnpm \(vía Corepack\)

Si `pnpm` no está instalado globalmente, en Windows puedes usarlo con Corepack.

### Instalar

```bash
corepack pnpm install
```

### Correr la documentación

```bash
corepack pnpm dev:docs
```

### Build de la librería UI

```bash
corepack pnpm build:ui
```

### Importar branding (brandbook/logos/figma)

```bash
corepack pnpm import:branding
```

### Consumir `@proppia/ui` desde otras apps

- Instala `@proppia/ui` como dependencia del workspace (o desde registry cuando se publique).
- Importa estilos/tokens globales desde la UI y usa los componentes.

