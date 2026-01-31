# Code Patterns & Best Practices

## Astro Component Pattern

### Basic Page Structure
```astro
---
import '../styles/global.css';
import { SomeReactComponent } from '@/components/SomeReactComponent';

// Frontmatter: Server-side logic goes here
const pageTitle = "My Page";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <!-- Static content -->
    <div class="container">
      <!-- Interactive React component -->
      <SomeReactComponent client:load />
    </div>
  </body>
</html>
```

### Layout Component Pattern
```astro
---
import '../styles/global.css';
const { content } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{content.title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

## React Component Pattern (shadcn/ui style)

### Component with CVA Variants
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes-here", // Base styles
  {
    variants: {
      variant: {
        default: "variant-specific-classes",
        secondary: "secondary-variant-classes",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ComponentProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
}

function Component({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Component, componentVariants }
```

### Simple Functional Component
```typescript
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export function SimpleComponent({ title, className, ...props }: Props) {
  return (
    <div className={cn("default-classes", className)} {...props}>
      <h2>{title}</h2>
    </div>
  )
}
```

## Styling Patterns

### Using Design Tokens
```typescript
// Prefer design system tokens
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Action
  </button>
  <button className="bg-secondary text-secondary-foreground">
    Secondary Action
  </button>
</div>
```

### Conditional Classes with cn()
```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "opacity-50 cursor-not-allowed",
  className // Allow className override
)} />
```

### Dark Mode Support
```typescript
// Use dark: variant
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

## Import Patterns

### Correct Import Usage
```typescript
// ✅ Use path aliases
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { SomeType } from '@/lib/types'

// ✅ Relative imports for same directory
import { helperFunction } from './helpers'

// ❌ Avoid long relative paths
// import { Button } from '../../../components/ui/button'
```

## Astro Client Directives

### When to Hydrate
```astro
<!-- Load immediately on page load -->
<Component client:load />

<!-- Load when component is visible -->
<Component client:visible />

<!-- Load when browser is idle -->
<Component client:idle />

<!-- Only load on media query match -->
<Component client:media="(max-width: 768px)" />

<!-- Never hydrate (static only) -->
<Component />
```

### Best Practice
- Use `client:visible` for below-the-fold interactive components
- Use `client:load` for critical interactive components
- Use no directive for purely presentational components

## Common Utilities

### cn() Usage (className merger)
```typescript
import { cn } from '@/lib/utils'

// Merges classes intelligently, Tailwind-aware
const className = cn(
  "px-4 py-2",           // Base classes
  "bg-blue-500",         // Default color
  isRed && "bg-red-500", // Conditional (overrides blue)
  className              // Allow prop override
)
```

### CVA Pattern for Variants
```typescript
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center", // base
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "sm",
        className: "text-sm",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## File Organization

### Component Files
```
components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── sections/             # Page sections
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── layout/              # Layout components
    ├── Header.astro
    └── Footer.astro
```

### Naming Conventions
- **Astro files:** PascalCase or kebab-case (e.g., `Main.astro` or `main.astro`)
- **React components:** PascalCase (e.g., `Button.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`)
- **Types:** PascalCase (e.g., `types.ts` with `export type ButtonProps`)

## Performance Best Practices

1. **Minimize React Usage**
   - Use Astro components for static content
   - Only use React for interactive elements

2. **Smart Hydration**
   - Use `client:visible` for below-fold components
   - Avoid `client:load` unless necessary

3. **CSS Optimization**
   - Leverage Tailwind's purge (automatic)
   - Use design tokens instead of arbitrary values
   - Avoid inline styles when possible

4. **Bundle Size**
   - Tree-shake unused imports
   - Lazy load heavy components
   - Use dynamic imports for route-based code splitting

## Accessibility Patterns

### Radix UI + shadcn/ui
```typescript
// Radix components are accessible by default
import { Slot } from "@radix-ui/react-slot"

// Always include proper ARIA attributes
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
>
  Close
</button>
```

### Semantic HTML
```astro
<!-- Use semantic elements -->
<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>

<!-- Not just divs -->
```

## Error Prevention

### Type Safety
```typescript
// ✅ Use TypeScript interfaces
interface Props {
  title: string
  count?: number
}

// ✅ Use ComponentProps for HTML elements
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary"
}

// ✅ Use VariantProps for CVA
import { type VariantProps } from "class-variance-authority"
interface Props extends VariantProps<typeof variants> {
  // ...
}
```

### Prop Validation
```typescript
// Destructure with defaults
function Component({
  variant = "default",
  size = "md",
  className,
  ...props
}: Props) {
  // ...
}
```
