---
title: Brandbook Proppia (Resumen para Design System)
version: 2025
---

## 1. Propósito del brandbook

Este brandbook consolida a **Proppia** como una compañía estratégica que combina **pensamiento de negocio, creatividad y tecnología** para acompañar a las marcas en su crecimiento.

No es solo un manual gráfico, sino una **hoja de ruta conceptual** que orienta:

- Identidad visual (logo, colores, tipografías, estilo gráfico).
- Identidad verbal (voz, tono, mensajes clave).
- Comunicación institucional, digital y comercial.
- Proyectos internos y externos, incluyendo colaboraciones y alianzas.

Este resumen está adaptado específicamente para servir como **base del Design System de Proppia** y ser consumido por equipos de producto, diseño y desarrollo.

## 2. Posicionamiento de Proppia

- **Qué es Proppia**: compañía estratégica que une **estrategia, diseño y tecnología**.
- **En qué se diferencia**:
  - No es una agencia de servicios tradicional.
  - No se centra solo en clics o visibilidad, sino en **crecimiento real del negocio**.
  - Conecta lo que se planea con lo que se implementa: de la idea al resultado.
- **Para quién es**:
  - Empresas B2B y B2C de **ticket alto**.
  - Marcas que buscan un **aliado estratégico**, no solo un proveedor.

## 3. Arquetipo y personalidad de marca

- **Arquetipo principal**:
  - **El Sabio**: guía, cuestiona y aporta claridad. Busca entender antes de construir.
  - **El Creador**: transforma ideas en realidades tangibles con diseño y propósito.
- **Personalidad resultante**:
  - Marca **intelectual, estructurada y creativa**.
  - Combina la lógica del análisis con la sensibilidad del diseño.
  - No busca ser la más ruidosa, sino la más **coherente**.
  - Narrativa **sobria pero inspiradora**.

Implicaciones para el Design System:

- Estética limpia, precisa y funcional (evitar ruido visual gratuito).
- Microinteracciones sobrias, con foco en claridad y legibilidad.
- Jerarquías claras, estructura consistente, narrativa visual contenida pero expresiva.

## 4. Esencia y pilares de marca

### 4.1. Lo que buscamos generar

- **¿Qué queremos que sientan?**
  - Acompañamiento.
  - Progreso.

- **¿Cómo nos comunicamos?**
  - Concisos.
  - Estratégicos.
  - Experimentados.
  - Proactivos.
  - Adaptables.

- **¿Qué queremos que piensen de nosotros?**
  - Visionarios.
  - Creativos.

### 4.2. Pilares de marca

- **Propósito**: todo parte de un “por qué”; proyectos con propósito son los que perduran.
- **Estrategia**: cada acción nace del entendimiento profundo del negocio.
- **Ejecución**: convertir ideas en resultados; pensamos y ejecutamos.
- **Progreso**: nada está terminado; el progreso continuo es parte de la identidad.
- **Creatividad**: usada para resolver problemas y generar impacto medible, no para decorar.

## 5. Concepto estratégico y gráfico

### 5.1. Concepto estratégico

> **“De la idea al resultado.”**

Proppia traduce la visión en acción, conectando **estrategia, diseño y tecnología** para que cada proyecto avance con propósito y coherencia.

### 5.2. Concepto gráfico principal

- Todo comienza con una **visión** y un primer paso claro.
- El **cuadrado** es el recurso gráfico principal:
  - Simboliza el primer paso que traduce ideas en acciones.
  - Puede leerse como **primer píxel** o **primer bloque** que cimenta algo más grande.
  - Es altamente **versátil y adaptable** en el universo visual de Proppia.

Implicaciones para el Design System:

- Uso recurrente de **bloques, tarjetas, grids y layouts modulares**.
- Preferencia por geometrías limpias, alineaciones claras y composiciones basadas en cuadrícula.
- Componentes que se sienten como “bloques construibles” dentro de un sistema mayor.

## 6. Identidad visual

### 6.1. Logotipo y monograma

- **Nombre**: “Proppia” surge de “hacer propio” (apropiarse de las ideas y convertirlas en realidad).
- **Doble “P”**:
  - Simboliza **propósito** y **progreso**.
  - Representa estabilidad y visión contemporánea.
- **Logo**:
  - Movimiento, precisión y equilibrio.
  - Pensado para entornos digitales y escalabilidad.

Directrices de uso a tener en cuenta en el Design System:

- Mantener siempre suficiente **contraste** y respiro alrededor del logo.
- Evitar fondos ruidosos que compitan con la marca.
- Priorizar versiones en **monocromo** o con combinaciones que mantengan legibilidad y coherencia con la paleta.

### 6.2. Tipografía

- **Tipografía principal**: `Bw Nista Grotesk` (BW Nista en el brandbook)
  - Pesos: Thin (100), Light (300), Regular (400), Medium (500), Bold (700), Extra Bold (800), Black (900).
  - Características:
    - Limpia, moderna y altamente legible.
    - Gran versatilidad para títulos, subtítulos y cuerpos de texto.
  - **Ubicación en el repo**: `apps/docs/public/fonts/bw-nista/` (WOFF2 para web).
  - **Uso**: `font-family: "Bw Nista Grotesk", ui-sans-serif, system-ui, sans-serif`

Implicaciones para el Design System:

- Establecer escalas tipográficas claras (display, heading, body, caption).
- Usar pesos para marcar jerarquía (no abusar de cambios de familia/estilo).
- Mantener buena legibilidad en interfaces (tamaños mínimos, interlineado cómodo).

### 6.3. Paleta de color

Paleta principal extraída del brandbook:

| Nombre        | Hex       | Descripción visual                                            |
| ------------- | --------- | ------------------------------------------------------------- |
| Chalk         | `#F1F1F1` | Fondo neutro claro, sutil, ideal como base de interfaz.      |
| Yellow        | `#F6E342` | Acento luminoso, asociado a energía y claridad.              |
| Mint Green    | `#75EFB1` | Acento fresco, vinculado a progreso y crecimiento.           |
| Turquoise     | `#23F8F7` | Acento tecnológico y vibrante, para momentos clave.          |
| Charcoal      | `#1E1E1E` | Neutro oscuro, base para tipografía y fondos profundos.      |

Notas para la implementación en el Design System:

- Los colores se mapearán a **tokens semánticos** (no se usarán nombres literales en UI).
- Ejemplos de mapeo:
  - `--background` → derivados de Chalk / neutros claros.
  - `--foreground` → Charcoal y sus variantes.
  - `--primary` → combinación estratégica (por ejemplo, amarillo/turquesa) según contexto.
  - `--accent` → Mint / Turquoise para resaltar acciones secundarias o estados especiales.
- Los tokens deben permitir variantes **light/dark** sin romper la identidad de marca.

## 7. Estructura de líneas de servicio

El ecosistema Proppia se articula en tres divisiones complementarias:

- **Performance & Growth**:
  - Estrategia, acompañamiento comercial, analítica, CRM, pauta y SEO.
- **Brand & Experience Design**:
  - Branding, identidad visual, campañas, dirección creativa y diseño UX/UI.
- **Digital Products & AI Lab**:
  - Desarrollo de plataformas, aplicaciones e integraciones inteligentes.

En el Design System:

- Se pueden representar estas líneas mediante **variantes visuales** (por color o énfasis), siempre partiendo de la paleta del brandbook.
- Cuidar que cualquier codificación por color mantenga **accesibilidad** (contraste suficiente, no depender solo del color).

## 8. Tono visual para productos digitales

Derivado del brandbook, el tono visual recomendado para productos es:

- **Minimalista, estratégico y funcional**:
  - Mucho espacio en blanco.
  - Jerarquía clara entre títulos, subtítulos y contenido.
  - Usar acentos de color solo donde ayuden a guiar la acción o la lectura.
- **Sobrio pero inspirador**:
  - Nada se ve “publicitario gratuito”; todo tiene intención.
  - Microdetalles (borders, sombras muy sutiles, animaciones) deben apoyar el mensaje.
- **Consistente y modular**:
  - Componentes reutilizables, composiciones basadas en cuadrícula, patrones repetibles.

## 9. Cómo se usa este resumen en el Design System

Este documento sirve como **capa estratégica** sobre la cual se construye el Design System Proppia:

- La paleta y tipografías se traducen a **tokens semánticos** (CSS variables + Tailwind).
- El concepto gráfico del cuadrado y la modularidad informan:
  - Layouts basados en **cards, grids y bloques**.
  - Componentes con bordes, radios y espaciados consistentes.
- La personalidad de marca y el arquetipo guían:
  - Tono de los textos de ejemplo en la documentación.
  - Densidad visual (ni excesivamente fría ni sobredecorada).

A medida que el Design System evolucione (nuevos productos, modos dark, variantes por líneas de servicio), este brandbook seguirá siendo el **marco de referencia** para validar que las decisiones visuales y de experiencia sigan alineadas con la esencia de Proppia.

