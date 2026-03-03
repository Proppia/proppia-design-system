# Proppia Design System – Guidelines

Use this file as the **single source of truth** for how UI, components and layouts should be generated for Proppia.
These rules prioritize **clarity, consistency, scalability and brand rigor**.

Less rules. Better rules.
This is a system, not a moodboard.

---

## 1. General Engineering Guidelines

* Prefer **flexbox and CSS grid** for layout.
* Use **absolute positioning only for overlays, decorative layers or controlled visual effects**.
* Components must be **small, composable and reusable**.
* Refactor continuously. No duplicated logic.
* Split helpers, hooks and UI primitives into their own files.
* SVGs must be **inline** and use `currentColor`.
* Avoid premature abstractions.
* One component = one responsibility.

---

## 2. Design System Principles (Proppia)

Proppia is **bold, confident and contemporary**, but never noisy.

Every element must have a **business purpose**.

* This is a **finished product**, not a wireframe.
* Minimal, sharp, intentional.
* No visual filler.
* Editorial clarity over decorative UI.
* Design exists to support decisions, not trends.

If it does not help the business, it does not belong here.

---

## 3. Atomic Design Methodology

This system is structured using **Atomic Design**.

Every element must clearly belong to **one level**.

### Structure

**Foundations / Atoms**

* Colors
* Typography
* Spacing
* Tokens
* Icons
* Logos

**Molecules**

* Buttons
* Inputs
* Selects
* Tabs
* Badges
* Lists

**Organisms**

* Navbars
* Headers
* Footers
* Cards (complex)
* Tables
* Forms
* Modals

**Templates**

* Page structures
* Layouts without real content

**Pages**

* Real implementations
* Context-specific content

**Rule:**
If you cannot explain why a component exists and where it lives, it is not ready.

---

## 4. UI Component Library (Mandatory)

All UI components **must be based on**:

👉 **[https://ui.shadcn.com/](https://ui.shadcn.com/)**

### Rules

* Do not recreate components that already exist in shadcn/ui.
* Extending is allowed. Rewriting is not.
* Tailwind-compatible by default.
* Predictable props and states.
* Components must feel **systemic**, not page-specific.

shadcn/ui is the **foundation**, not a reference.

---

## 5. Color System

### Base Palette

* **Charcoal** → primary background (near-black)
* **Chalk** → primary text (soft white)
* **Neutral grays** → borders, dividers, secondary text

### Accent Usage

* Accents are **strategic**, not decorative.
* Use accents only for:

  * Section separators
  * Highlights
  * Borders
  * Micro-emphasis
* Never use accents as full backgrounds.

### Gradients

* Allowed only as **accents**
* Never full-page or full-section
* Never decorative

---

## 6. Typography

### Font

* **Inter** is the default system font.
* BW Nista may be introduced later as display-only.

### Hierarchy

* H1: 60–80px (hero only)
* H2: 28–36px
* H3: 20–24px
* Body: 16–18px
* Meta: 13–14px

### Rules

* Hierarchy must be obvious at first glance.
* Avoid decorative typography.
* Editorial > startup-generic.

---

## 7. Layout & Spacing

* Use **generous vertical rhythm**.
* Large sections default to `space-y-24`.
* Content must breathe.
* Avoid visual crowding.
* Prefer fewer sections with clarity over many with noise.

Whitespace is a feature.

---

## 8. Components

### General Rules

* Prefer existing primitives before creating new ones.
* Components must be reusable.
* Visual consistency > novelty.
* States are not optional (hover, focus, disabled).

### Cards

* Background: charcoal + ~5% elevation
* Border: subtle (≈12% opacity)
* Rounded, but never playful

---

## 9. Buttons

Buttons represent **decisions**, not decoration.

### Usage

* Buttons are actions, not navigation noise.
* Labels must be explicit and action-oriented.

### Variants

**Primary**

* One per section
* Represents the main decision

**Secondary**

* Supporting action
* Can coexist with primary

**Tertiary**

* Text-only
* Low emphasis

Never allow buttons to compete visually.

---

## 10. Icons & Logos

### General

* Inline SVG only
* Always use `currentColor`
* Size and color controlled via classes
* Never raster images

### Logo Rules

**Logotype (Proppia)**

* Can be used with or without underline
* Can be monochromatic
* If underline exists, it must match logo color

**Isotype (pp)**

* Always **without underline**
* Used for:

  * Favicon
  * Compact headers
  * Avatars
  * Background patterns

No effects.
No shadows.
No forced gradients.

---

## 11. Tokens & Foundations

Tokens must exist explicitly for:

### Logo Tokens

* `logo.primary.full`
* `logo.primary.mono`
* `logo.isotype`
* `logo.isotype.mono`

### Color Tokens

* `bg.primary`
* `bg.secondary`
* `text.primary`
* `text.muted`
* `border.subtle`
* `accent.primary`
* `accent.secondary`

### Typography Tokens

* `font.heading`
* `font.body`
* `font.meta`

Tokens are the contract between design and code.

---

## 12. Accessibility (Non-Negotiable)

All UI must comply with **WCAG 2.1 AA**.

### Minimum Requirements

* Contrast validated
* Visible focus states
* Keyboard navigation
* Proper ARIA roles
* Clear labels and semantics

Accessibility is not a feature. It is a baseline.

---

## 13. Documentation & Resources

These resources must be referenced and respected:

### Design System Checklist

[https://www.designsystemchecklist.com/](https://www.designsystemchecklist.com/)
Used to validate system coverage, scalability and consistency.

### Adobe Color – Contrast Analyzer

[https://color.adobe.com/es/create/color-contrast-analyzer](https://color.adobe.com/es/create/color-contrast-analyzer)
Used to validate contrast and legibility.

### WCAG 2.1 AA

[https://www.w3.org/WAI/WCAG2AA-Conformance](https://www.w3.org/WAI/WCAG2AA-Conformance)
Accessibility standard.

### ARIA Authoring Practices

[https://www.w3.org/WAI/ARIA/apg/](https://www.w3.org/WAI/ARIA/apg/)
Accessible interaction patterns and roles.

---

## 14. Design System Operational Checklist

### Foundations

* Tokens defined
* Colors pass AA contrast
* Typography scales correctly
* Logo variations documented

### Components

* Based on shadcn/ui
* States defined
* Keyboard accessible
* Reusable by design

### Documentation

* Usage rules
* Examples
* Do / Don’t
* Clear ownership

### Governance

* No duplicates
* Controlled evolution
* Consistency enforced

---

## 15. What to Avoid

* Over-designed visuals
* Decorative-only elements
* Trend-driven UI
* Excessive shadows or glows
* Inconsistent spacing or typography

---

## Final Note

If a component or visual element does not:

* clarify information,
* guide a decision, or
* reinforce brand confidence,

**it should not exist.**

Proppia builds systems to scale, not interfaces to impress.

