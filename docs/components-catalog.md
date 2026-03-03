---
title: Catálogo de componentes Proppia (basado en shadcn/ui)
scope: @proppia/ui
---

## Objetivo

Este documento define el **catálogo completo de componentes** del Design System de Proppia,
tomando como referencia directa los componentes de [shadcn/ui](https://ui.shadcn.com/docs/components)
e indicando:

- **Nombre en shadcn** (fuente de verdad de patrón).
- **Nombre/ubicación en Proppia**.
- **Tipo** (átomo, molécula, organismo, patrón/layout).
- **Estado**:
  - `implementado`: ya existe en `@proppia/ui` y/o con página en `apps/docs`.
  - `planificado v1`: se implementará en esta primera versión del sistema.
  - `planificado futuro`: queda documentado pero para una fase posterior.

> Nota: aunque algunas APIs internas puedan evolucionar, **ningún componente de esta lista
> debería quedar “huérfano” o sin decisión explícita**.

---

## 1. Entradas, formularios y selección

- **Input**  
  - shadcn: `Input`  
  - Proppia: `Input` (`atoms`) – `/components/text-input`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Textarea**  
  - shadcn: `Textarea`  
  - Proppia: `Textarea` (`atoms`) – `/components/text-area`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Checkbox**  
  - shadcn: `Checkbox`  
  - Proppia: `Checkbox` (`atoms`) – `/components/switch-checkbox`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Switch**  
  - shadcn: `Switch`  
  - Proppia: `Switch` (`atoms`) – `/components/switch`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Select**  
  - shadcn: `Select` / `Native Select`  
  - Proppia: `Select` (`atoms`) – usado en `Dropdowns`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Radio Group**  
  - shadcn: `Radio Group`  
  - Proppia: `RadioGroup` (pendiente de exponer)  
  - Tipo: átomo  
  - Estado: `planificado v1`

- **Combobox, Command**  
  - shadcn: `Combobox`, `Command`  
  - Proppia: patrón de búsqueda avanzada basado en `Command` → integrado en futura versión de `SearchBar` avanzada  
  - Tipo: molécula  
  - Estado: `planificado futuro`

- **Input Group / Input OTP**  
  - shadcn: `Input Group`, `Input OTP`  
  - Proppia: patrones específicos de formulario (bundle de campos)  
  - Tipo: molécula  
  - Estado: `planificado futuro`

- **FormField**  
  - shadcn: `Field`  
  - Proppia: `FormField` (`molecules`) – wrapper label + control + ayuda + error  
  - Tipo: molécula  
  - Estado: `implementado`

---

## 2. Botones, toggles y acciones

- **Button**  
  - shadcn: `Button`, `Button Group`, `Toggle`, `Toggle Group`  
  - Proppia: `Button` (`atoms`) – `/components/buttons`  
  - Tipo: átomo  
  - Estado: `implementado` (Toggle/ToggleGroup se modelan como variantes/slots de Button)

- **Badge**  
  - shadcn: `Badge`  
  - Proppia: `Badge` (`atoms`) – `/components/badge`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Switch**  
  - (ver sección de formularios)  

- **Dropdown Menu**  
  - shadcn: `Dropdown Menu`  
  - Proppia: `DropdownMenu` (`atoms`) – `/components/dropdowns`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Context Menu**  
  - shadcn: `Context Menu`  
  - Proppia: reutiliza la base de `DropdownMenu`  
  - Tipo: átomo/molécula  
  - Estado: `planificado v1`

- **Menubar / Navigation Menu**  
  - shadcn: `Menubar`, `Navigation Menu`  
  - Proppia: `Navbar` (`organisms`) – `/components/navbar`  
  - Tipo: organismo  
  - Estado: `implementado`

- **Pagination**  
  - shadcn: `Pagination`  
  - Proppia: patrón de paginación para tablas/listas  
  - Tipo: molécula  
  - Estado: `planificado v1`

---

## 3. Layout, estructura y navegación

- **Card**  
  - shadcn: `Card`  
  - Proppia: `Card` (`atoms`) – `/components/cards`  
  - Tipo: átomo estructural  
  - Estado: `implementado`

- **Tabs**  
  - shadcn: `Tabs`  
  - Proppia: `Tabs` (`atoms`) – `/components/tabs`  
  - Tipo: átomo de navegación interna  
  - Estado: `implementado`

- **Accordion / Collapsible**  
  - shadcn: `Accordion`, `Collapsible`  
  - Proppia: acordeón para secciones de docs y filtros avanzados  
  - Tipo: molécula  
  - Estado: `planificado v1`

- **Sheet / Drawer**  
  - shadcn: `Sheet`, `Drawer`  
  - Proppia: `Sheet` (`atoms`) – usado en patrones de panel lateral  
  - Tipo: átomo  
  - Estado: `implementado`

- **Sidebar**  
  - shadcn: `Sidebar`  
  - Proppia: `DocsSidebar` (`organisms`) – navegación principal de docs  
  - Tipo: organismo  
  - Estado: `implementado`

- **Navbar / Header**  
  - shadcn: combinación de `Navigation Menu`, `Menubar`  
  - Proppia: `Navbar` (`organisms`) – `/components/navbar`  
  - Tipo: organismo  
  - Estado: `implementado`

- **Breadcrumb**  
  - shadcn: `Breadcrumb`  
  - Proppia: patrón ligero a añadir sobre `Text`/`Link`  
  - Tipo: molécula  
  - Estado: `planificado futuro`

---

## 4. Feedback, overlays y comunicación

- **Alert**  
  - shadcn: `Alert`  
  - Proppia: `Alert` (`atoms`) – `/components/alerts`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Toast / Sonner**  
  - shadcn: `Toast`, `Sonner`  
  - Proppia: sistema de notificaciones no bloqueantes tipo “toaster”  
  - Tipo: organismo/patrón global  
  - Estado: `planificado v1`

- **Dialog / Alert Dialog**  
  - shadcn: `Dialog`, `Alert Dialog`  
  - Proppia: `Dialog` (`atoms`) – `/components/modals`  
  - Tipo: átomo (base) + patrones (confirm/cancel)  
  - Estado: `implementado` (base), `planificado v1` (patrones específicos)

- **Popover / Hover Card**  
  - shadcn: `Popover`, `Hover Card`  
  - Proppia: patrones sobre Radix `Popover` para tooltips ricos  
  - Tipo: átomo/molécula  
  - Estado: `planificado v1`

- **Tooltip**  
  - shadcn: `Tooltip`  
  - Proppia: wrapper minimal con tokens Proppia  
  - Tipo: átomo  
  - Estado: `planificado v1`

- **Empty**  
  - shadcn: `Empty`  
  - Proppia: componente de estado vacío (`EmptyState`) para listas/tablas/cards  
  - Tipo: molécula  
  - Estado: `planificado v1`

---

## 5. Datos, tablas y visualización

- **Progress**  
  - shadcn: `Progress`  
  - Proppia: `Progress` (`atoms`) – `/components/progress-bar`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Progress Circle**  
  - shadcn: patrón custom  
  - Proppia: `ProgressCircle` (`atoms`) – `/components/progress-circle`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Table / Data Table**  
  - shadcn: `Table`, `Data Table`  
  - Proppia: tabla base + tabla avanzada (sorting, filtrado, selección, paginación)  
  - Tipo: molécula/organismo  
  - Estado: `planificado v1`

- **Chart**  
  - shadcn: `Chart`  
  - Proppia: integración con librería de gráficos (p.ej. charts específicos de dashboards Proppia)  
  - Tipo: organismo/patrón  
  - Estado: `planificado futuro`

---

## 6. Identidad, contenido y tipografía

- **Typography**  
  - shadcn: `Typography`  
  - Proppia: `Text`, `Heading` (`atoms`) – `/components/typography`  
  - Tipo: átomos  
  - Estado: `implementado`

- **Label**  
  - shadcn: `Label`  
  - Proppia: `Label` (`atoms`)  
  - Tipo: átomo  
  - Estado: `implementado`

- **Kbd / Code / Item**  
  - shadcn: `Kbd`, `Item`  
  - Proppia: patrones de texto dentro de docs  
  - Tipo: átomos  
  - Estado: `planificado futuro`

- **Banner**  
  - shadcn: patrón de alerta/comunicación destacada  
  - Proppia: `Banner` (`atoms`) – `/components/banners`  
  - Tipo: átomo  
  - Estado: `implementado`

- **List**  
  - shadcn: patrón de lista semántica  
  - Proppia: `List`, `ListItem` (`atoms`) – `/components/list`  
  - Tipo: átomo  
  - Estado: `implementado`

---

## 7. Media, interacción y otros patrones

- **Avatar**  
  - shadcn: `Avatar`  
  - Proppia: `Avatar` (`atoms`) – `/components/avatars`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Carousel**  
  - shadcn: `Carousel`  
  - Proppia: `Carousel` (`atoms`) – `/components/carousel`  
  - Tipo: átomo  
  - Estado: `implementado`

- **Slider**  
  - shadcn: `Slider`  
  - Proppia: control para rangos continuos  
  - Tipo: átomo  
  - Estado: `planificado v1`

- **Spinner / Skeleton**  
  - shadcn: `Spinner`, `Skeleton`  
  - Proppia: patrones de loading global y por componente  
  - Tipo: átomos/moléculas  
  - Estado: `planificado v1`

- **Scroll Area / Resizable**  
  - shadcn: `Scroll Area`, `Resizable`  
  - Proppia: wrappers de layout para áreas con scroll controlado y paneles redimensionables  
  - Tipo: moléculas  
  - Estado: `planificado futuro`

---

## 8. Relación con la documentación (`apps/docs`)

- La página `/components` muestra el **subset de componentes ya implementados** con ejemplos reales.  
- Este `components-catalog.md` funciona como **fuente de verdad** del plan completo basado en shadcn/ui:
  - Cuando un componente pase de `planificado` a `implementado`, se debe:
    - Exportar desde `@proppia/ui`.
    - Añadir/actualizar su página en `apps/docs/src/pages/components`.
    - Actualizar el `estado` en este catálogo.

Para cualquier nuevo componente, la regla es:

1. **Añadirlo primero aquí** (nombre, tipo, estado, referencia shadcn).  
2. Luego implementar el componente en `@proppia/ui` y su página de docs.  
3. Evitar componentes “fantasma” que no estén mapeados a este documento.

