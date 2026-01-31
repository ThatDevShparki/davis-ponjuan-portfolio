# Design System Reference

## Color System (OKLCH)

### Why OKLCH?

OKLCH is a perceptually uniform color space that provides:

- Consistent perceived brightness across hues
- Better color manipulation (lightening/darkening)
- More vibrant colors than HSL
- Better for accessibility (predictable contrast)

### Light Mode Colors

#### Neutrals

```css
--background: oklch(1 0 0) /* Pure white */ --foreground: oklch(0.145 0 0) /* Near black */
  --card: oklch(1 0 0) /* White */ --card-foreground: oklch(0.145 0 0) /* Near black */;
```

#### Primary

```css
--primary: oklch(0.205 0 0) /* Dark gray/black */ --primary-foreground: oklch(0.985 0 0)
  /* Off-white */;
```

#### Secondary & Muted

```css
--secondary: oklch(0.97 0 0) /* Very light gray */ --secondary-foreground: oklch(0.205 0 0)
  --muted: oklch(0.97 0 0) /* Very light gray */ --muted-foreground: oklch(0.556 0 0)
  /* Medium gray */ --accent: oklch(0.97 0 0) /* Very light gray */
  --accent-foreground: oklch(0.205 0 0);
```

#### Semantic

```css
--destructive: oklch(0.577 0.245 27.325) /* Red */ --border: oklch(0.922 0 0) /* Light gray */
  --input: oklch(0.922 0 0) /* Light gray */ --ring: oklch(0.708 0 0) /* Medium gray */;
```

#### Charts

```css
--chart-1: oklch(0.646 0.222 41.116) /* Orange */ --chart-2: oklch(0.6 0.118 184.704) /* Teal */
  --chart-3: oklch(0.398 0.07 227.392) /* Blue */ --chart-4: oklch(0.828 0.189 84.429) /* Yellow */
  --chart-5: oklch(0.769 0.188 70.08) /* Yellow-orange */;
```

### Dark Mode Colors

#### Neutrals

```css
--background: oklch(0.145 0 0) /* Near black */ --foreground: oklch(0.985 0 0) /* Off-white */
  --card: oklch(0.205 0 0) /* Dark gray */ --card-foreground: oklch(0.985 0 0) /* Off-white */;
```

#### Primary

```css
--primary: oklch(0.922 0 0) /* Light gray */ --primary-foreground: oklch(0.205 0 0) /* Dark gray */;
```

#### Secondary & Muted

```css
--secondary: oklch(0.269 0 0) /* Medium dark gray */ --secondary-foreground: oklch(0.985 0 0)
  --muted: oklch(0.269 0 0) /* Medium dark gray */ --muted-foreground: oklch(0.708 0 0)
  /* Medium gray */ --accent: oklch(0.269 0 0) /* Medium dark gray */
  --accent-foreground: oklch(0.985 0 0);
```

#### Semantic

```css
--destructive: oklch(0.704 0.191 22.216) /* Lighter red */ --border: oklch(1 0 0 / 10%)
  /* Transparent white */ --input: oklch(1 0 0 / 15%) /* Transparent white */
  --ring: oklch(0.556 0 0) /* Medium gray */;
```

## Border Radius System

### Base Scale

```css
--radius: 0.625rem /* 10px - Base value */;
```

### Computed Scale

```css
--radius-sm: calc(var(--radius) - 4px) /* 6px */ --radius-md: calc(var(--radius) - 2px) /* 8px */
  --radius-lg: var(--radius) /* 10px */ --radius-xl: calc(var(--radius) + 4px) /* 14px */
  --radius-2xl: calc(var(--radius) + 8px) /* 18px */ --radius-3xl: calc(var(--radius) + 12px)
  /* 22px */ --radius-4xl: calc(var(--radius) + 16px) /* 26px */;
```

### Usage

```typescript
// In Tailwind classes
<div className="rounded-lg">      /* Uses --radius-lg (10px) */
<div className="rounded-xl">      /* Uses --radius-xl (14px) */
<div className="rounded-2xl">     /* Uses --radius-2xl (18px) */
```

## Spacing System

Uses Tailwind's default spacing scale:

- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `12` = 3rem (48px)
- `16` = 4rem (64px)
- etc.

## Typography

### Font Stack

Uses system font stack (default Tailwind):

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
```

### Size Scale

```
text-xs   → 0.75rem (12px)
text-sm   → 0.875rem (14px)
text-base → 1rem (16px)
text-lg   → 1.125rem (18px)
text-xl   → 1.25rem (20px)
text-2xl  → 1.5rem (24px)
text-3xl  → 1.875rem (30px)
text-4xl  → 2.25rem (36px)
text-5xl  → 3rem (48px)
```

### Weight Scale

```
font-light     → 300
font-normal    → 400
font-medium    → 500
font-semibold  → 600
font-bold      → 700
```

## Component Sizing

### Button Sizes

```typescript
size: {
  xs: "h-6 px-2",           // Extra small
  sm: "h-8 px-3",           // Small
  default: "h-9 px-4",      // Default
  lg: "h-10 px-6",          // Large
  icon: "size-9",           // Icon button (square)
  "icon-sm": "size-8",      // Small icon
  "icon-lg": "size-10",     // Large icon
}
```

## Shadows

Using Tailwind's shadow utilities:

```
shadow-xs  → Extra small shadow
shadow-sm  → Small shadow
shadow     → Default shadow
shadow-md  → Medium shadow
shadow-lg  → Large shadow
shadow-xl  → Extra large shadow
```

## Animation & Transitions

### Default Transitions

```css
transition-all  /* All properties */
```

### Available from tw-animate-css

The `tw-animate-css` package provides additional animation utilities.
Check package documentation for full list of animations.

## Focus States

### Focus Visible (Keyboard Navigation)

```typescript
// Applied to focusable elements
"outline-none
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]"
```

### Invalid States

```typescript
// Applied to invalid form inputs
"aria-invalid:ring-destructive/20
dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive"
```

## Color Usage Guidelines

### When to Use Each Color

#### Background & Foreground

- Main page background and text
- Most common pairing

#### Card

- Elevated surfaces
- Content containers

#### Primary

- Main CTAs
- Important actions
- Brand color

#### Secondary

- Less important actions
- Alternative options

#### Muted

- Disabled states
- Placeholder text
- Less important content

#### Accent

- Highlights
- Hover states
- Interactive feedback

#### Destructive

- Delete actions
- Error states
- Warning messages

#### Border

- Dividers
- Component outlines

#### Ring

- Focus indicators
- Selection states

## Dark Mode Implementation

### Toggle Dark Mode

```typescript
// Add/remove .dark class on document root
document.documentElement.classList.toggle('dark');
```

### Usage in Components

```typescript
// Tailwind automatically handles dark: variant
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-black dark:text-white">Title</h1>
</div>
```

### Custom Dark Variant

The project uses a custom dark variant:

```css
@custom-variant dark (&:is(.dark *));
```

This allows dark mode to work with the `.dark` class on any ancestor.

## Responsive Breakpoints

Using Tailwind's default breakpoints:

```
sm:  640px   @media (min-width: 640px)
md:  768px   @media (min-width: 768px)
lg:  1024px  @media (min-width: 1024px)
xl:  1280px  @media (min-width: 1280px)
2xl: 1536px  @media (min-width: 1536px)
```

## Best Practices

1. **Use Design Tokens**
   - Always prefer `bg-primary` over `bg-black`
   - Tokens adapt to light/dark mode automatically

2. **Consistent Spacing**
   - Use 4px increments (spacing scale)
   - Maintain vertical rhythm

3. **Color Contrast**
   - Always pair colors with their foreground variant
   - `primary` + `primary-foreground`
   - `secondary` + `secondary-foreground`

4. **Border Radius**
   - Be consistent within component families
   - Buttons use `rounded-md`
   - Cards might use `rounded-lg`

5. **Focus States**
   - Always include visible focus indicators
   - Use `focus-visible:` not `focus:`
   - Maintain 3:1 contrast ratio for focus rings
