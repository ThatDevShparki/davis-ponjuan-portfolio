# Design System - Tailwind Theme Tokens

This document describes the design system tokens extracted from the codebase and encoded in the Tailwind theme. All tokens are defined in `src/styles/global.css`.

## Color System

### Foundation Colors (Light Mode)

Based on CLAUDE.md specifications for warm classical sophistication:

```css
/* Cream/off-white (#fefbf5) - not stark white */
bg-background, text-foreground

/* Cards and elevated surfaces */
bg-card, text-card-foreground
```

### Primary Accent - Forest Green

The signature color replacing typical blues/teals:

```css
/* Forest green (#2d7a3e) */
bg-primary, text-primary-foreground
hover:bg-primary-hover /* Darker green (#246330) */

/* Usage: CTAs, links, focus rings, badges */
```

### Semantic Colors

```css
/* Secondary - warm gray backgrounds */
bg-secondary, text-secondary-foreground

/* Muted - de-emphasized content */
bg-muted, text-muted-foreground

/* Accent - green highlights */
bg-accent, text-accent-foreground
bg-accent-muted /* Subtle green backgrounds */

/* Borders */
border-border /* Subtle warm border */
border-border-strong /* Strong borders (underlines) */

/* Focus rings */
ring-ring /* Forest green */
```

### Dark Mode

Sophisticated alternative with deep charcoal base (not pure black):

```css
/* Automatically applied with .dark class */
.dark /* Deep charcoal background with warm off-white text */
```

## Typography Scale

Classical concert program feel with generous readability:

```css
/* Base: 18px (text-lg) for comfortable body reading */
text-xs   /* 13px - small metadata */
text-sm   /* 14px - secondary text */
text-base /* 16px - fallback */
text-md   /* 17px - comfortable body (custom) */
text-lg   /* 18px - primary body text (DEFAULT) */
text-xl   /* 20px - lead paragraphs */
text-2xl  /* 24px - h3 */
text-3xl  /* 30px - h2 */
text-4xl  /* 36px - h1 subsections */
text-5xl  /* 48px - h1 page titles */
```

### Line Heights

```css
leading-tight   /* 1.25 - large headings */
leading-snug    /* 1.375 - h2 */
leading-normal  /* 1.5 - h3-h6 */
leading-relaxed /* 1.625 - body copy (DEFAULT) */
leading-loose   /* 1.75 - long-form content */
```

### Heading Defaults

Headings automatically apply appropriate sizes and weights via `@layer base`:

```css
h1 /* 48px, weight 400, tight line-height */
h2 /* 30px, weight 400, snug line-height */
h3 /* 24px, weight 600, normal line-height */
h4 /* 20px, weight 600 */
h5, h6 /* 17px, weight 600 */
```

## Spacing System

Consistent rhythm based on 4px multiples:

```css
/* Section spacing */
--spacing-section: 4rem /* 64px - between major sections */ --spacing-section-sm: 3rem
  /* 48px - smaller section gaps */ /* Component spacing */ --spacing-card: 2.5rem
  /* 40px - internal card padding */ --spacing-list: 2rem /* 32px - list item spacing */
  --spacing-list-sm: 1.5rem /* 24px - compact list spacing */ --spacing-gap: 2rem
  /* 32px - grid/flex gaps */ --spacing-gap-sm: 1rem /* 16px - compact gaps */;
```

## Border Radius Scale

Subtle, refined curves:

```css
rounded-sm   /* 4px */
rounded-md   /* 6px */
rounded-lg   /* 8px - DEFAULT */
rounded-xl   /* 12px */
rounded-2xl  /* 16px */
rounded-3xl  /* 20px */
rounded-4xl  /* 24px */
```

## Transitions

Unhurried, elegant animations:

```css
--transition-fast: 200ms --transition-normal: 400ms /* PRIMARY - use this */
  --transition-slow: 600ms --transition-timing: ease-out /* Smooth deceleration */
  /* Apply to elements: */ transition-all duration-[var(--transition-normal)]
  ease-[var(--transition-timing)];
```

## Shadows

Subtle elevation for sophisticated depth:

```css
shadow-sm  /* Minimal elevation */
shadow-md  /* Standard elevation */
shadow-lg  /* Card hover states */
shadow-xl  /* Prominent elevation */
```

## Utility Classes

### Component Patterns

Pre-built patterns for common UI elements:

#### Links

```html
<!-- Primary link (forest green) -->
<a href="..." class="link-primary">View all concerts →</a>

<!-- Foreground link (hover turns green) -->
<a href="..." class="link-foreground">Performance title</a>
```

#### Headings

```html
<!-- Section heading with strong underline -->
<h2 class="section-heading">Featured Performances</h2>

<!-- Smaller section heading -->
<h3 class="section-heading-sm">About</h3>
```

#### Buttons

```html
<!-- Primary CTA button -->
<a href="/contact" class="btn-primary">Book Performance</a>
```

#### Badges

```html
<!-- Featured badge -->
<span class="badge">Featured</span>
```

#### Lists

```html
<!-- List items with dividers -->
<li class="list-divider">
  <!-- Content -->
</li>
```

#### Cards

```html
<!-- Performance card with hover -->
<div class="card">
  <!-- Content -->
</div>
```

#### Press Quotes

```html
<!-- Blockquote with left border -->
<blockquote class="press-quote">
  "Inspiring, carefully crafted and paced"
  <cite class="press-quote-cite">— The Guardian</cite>
</blockquote>
```

#### Metadata

```html
<!-- Date/venue/composer metadata -->
<div class="metadata">
  <time>January 15, 2024</time>
  <span class="metadata-separator"></span>
  <span>Carnegie Hall, New York</span>
</div>
```

#### Sections

```html
<!-- Major section spacing -->
<section class="section">
  <!-- Content -->
</section>

<!-- Smaller section spacing -->
<section class="section-sm">
  <!-- Content -->
</section>
```

### Accessibility

```html
<!-- Screen reader only text -->
<span class="sr-only">Skip to main content</span>
```

### Print

```html
<!-- Hide in print mode -->
<nav class="print-hidden">...</nav>

<!-- Full width in print -->
<main class="print-full-width">...</main>
```

## Migration Guide

Replace hard-coded values with design system tokens:

### Colors

```diff
- class="bg-[#fefbf5]"
+ class="bg-background"

- class="text-[#242424]"
+ class="text-foreground"

- class="text-[#2d7a3e]"
+ class="text-primary"

- class="hover:bg-[#246330]"
+ class="hover:bg-primary-hover"

- class="text-gray-600"
+ class="text-muted-foreground"

- class="border-gray-200"
+ class="border-border"

- class="border-gray-800"
+ class="border-border-strong"
```

### Typography

```diff
- class="text-5xl"
+ class="text-5xl" (already uses token)

- class="text-[0.95rem]"
+ class="text-sm"

- style="font-size: 1.25rem"
+ class="text-xl"
```

### Spacing

```diff
- class="mb-16"
+ class="section" or class="mb-[var(--spacing-section)]"

- class="mb-12"
+ class="section-sm"

- class="pb-8 border-b"
+ class="list-divider"

- class="p-8"
+ class="p-[var(--spacing-gap)]"
```

### Buttons

```diff
- class="py-3 px-6 bg-[#2d7a3e] text-white rounded hover:bg-[#246330]"
+ class="btn-primary"
```

### Links

```diff
- class="text-[#2d7a3e] no-underline hover:underline"
+ class="link-primary"

- class="text-gray-800 no-underline hover:text-[#2d7a3e] hover:underline"
+ class="link-foreground"
```

### Headings

```diff
- class="text-3xl mb-6 border-b-2 border-gray-800 pb-2"
+ class="section-heading"
```

### Badges

```diff
- class="bg-[#2d7a3e] text-white py-0.5 px-2 text-xs rounded"
+ class="badge"
```

### Metadata

```diff
- class="text-gray-600 text-sm"
+ class="metadata"

- {item} • {item} • {item}
+ <span class="metadata-separator"></span>
```

### Blockquotes

```diff
- class="text-xl italic pl-6 border-l-4 border-[#2d7a3e]"
+ class="press-quote"

- class="text-gray-600 text-sm"
+ class="press-quote-cite"
```

## Design Principles

These tokens embody the design principles from CLAUDE.md:

1. **Sophisticated Restraint** - Subtle colors, refined spacing
2. **Elegant Hierarchy** - Clear typography scale, semantic colors
3. **Refined Details** - Precise spacing tokens, consistent shadows
4. **Purposeful Motion** - Defined transition timings
5. **Timeless Confidence** - System approach, not trend-driven

## Usage Examples

### Concert Listing

```html
<section class="section">
  <h2 class="section-heading">Upcoming Performances</h2>

  <ul class="list-none p-0">
    <li class="list-divider">
      <h3 class="text-xl mb-2">
        <a href="..." class="link-foreground">Concert Title</a>
        <span class="badge">Featured</span>
      </h3>
      <div class="metadata">
        <time>January 15, 2024</time>
        <span class="metadata-separator"></span>
        <span>Carnegie Hall, New York</span>
      </div>
    </li>
  </ul>

  <a href="/concerts" class="link-primary">View all concerts →</a>
</section>
```

### Press Quote

```html
<blockquote class="press-quote">
  "Inspiring, carefully crafted and paced"
  <cite class="press-quote-cite">— The Guardian, March 2024</cite>
</blockquote>
```

### CTA Section

```html
<nav class="flex gap-8">
  <a href="/cv" class="btn-primary">View Full CV →</a>
  <a href="/concerts" class="btn-primary">View Performances →</a>
</nav>
```

## Notes

- All tokens use CSS custom properties for easy theming
- Dark mode automatically switches color values via `.dark` class
- Typography base size (18px) ensures comfortable reading on all devices
- Spacing scale maintains visual rhythm throughout the site
- Reduced motion is respected via `@media (prefers-reduced-motion: reduce)`
- External links automatically get ↗ indicator (disable with `.no-external-icon`)
- Print styles automatically applied with `.print-hidden` and `.print-full-width`
