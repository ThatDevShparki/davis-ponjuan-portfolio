# Davis Ponjuan Portfolio - Project Context

## Project Overview

A modern portfolio website for Davis Ponjuan built with Astro, React, and Tailwind CSS v4.

**Repository:** davis-ponjuan-portfolio
**Current Branch:** develop
**Package Manager:** pnpm

## Tech Stack

### Core Frameworks

- **Astro 5.17.1** - Static Site Generator (SSG) meta-framework
  - Partial hydration for optimal performance
  - Islands architecture for React components
  - Built-in MDX support enabled via @astrojs/mdx
- **React 19.2.4** - UI library for interactive components
  - Integrated via @astrojs/react
  - JSX configured for react-jsx transform
- **TypeScript** - Strict type checking (astro/tsconfigs/strict)

### Styling System

- **Tailwind CSS 4.1.18** - Utility-first CSS framework (v4 ALPHA)
  - Integrated via @tailwindcss/vite plugin (NOT traditional Astro integration)
  - CSS-first configuration (no tailwind.config.js needed)
  - Uses new @theme syntax for design tokens
  - OKLCH color space for better color manipulation
- **tw-animate-css 1.4.0** - Animation utilities
- **shadcn/ui** - Component library
  - Style variant: "new-york"
  - Base color: "neutral"
  - CSS variables enabled
  - Icon library: lucide-react

### Component Libraries & Utilities

- **@radix-ui/react-slot 1.2.4** - Composable component primitives
- **lucide-react 0.563.0** - Icon library
- **canvas-confetti 1.9.4** - Confetti effects library
- **class-variance-authority 0.7.1** - Type-safe component variants (CVA)
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Merge Tailwind classes intelligently

### Development Tools & Code Quality

#### Linting & Formatting

- **ESLint 9.39.2** - JavaScript/TypeScript linter (flat config)
  - **typescript-eslint 8.54.0** - TypeScript-specific linting rules
  - **eslint-plugin-astro 1.5.0** - Astro file support
  - **eslint-plugin-react 7.37.5** - React best practices
  - **eslint-plugin-react-hooks 7.0.1** - React Hooks rules
  - **eslint-plugin-jsx-a11y 6.10.2** - Accessibility linting
  - **eslint-plugin-simple-import-sort 12.1.1** - Auto-sort imports alphabetically
  - **eslint-plugin-unused-imports 4.3.0** - Detect and remove unused imports
  - **eslint-config-prettier 10.1.8** - Disable conflicting ESLint rules
- **Prettier 3.8.1** - Opinionated code formatter
  - **prettier-plugin-astro 0.14.1** - Format .astro files

#### Git Hooks & Automation

- **Husky 9.1.7** - Modern Git hooks manager
  - Pre-commit hook configured to run lint-staged
  - Automatically initialized via `prepare` script
- **lint-staged 16.2.7** - Run linters on staged files only
  - Runs ESLint --fix on JS/TS/Astro files
  - Runs Prettier --write on all staged files
  - Fast commits (only checks what you're committing)

## Project Structure

```
davis-ponjuan-portfolio/
├── .astro/                    # Generated Astro types
├── .claude/                   # Project context for AI assistance
│   ├── project-context.md
│   ├── code-patterns.md
│   ├── design-system.md
│   └── README.md
├── .husky/                    # Git hooks (managed by Husky)
│   ├── pre-commit            # Auto-fix linting/formatting before commit
│   └── README.md
├── .vscode/                   # VS Code workspace settings
│   ├── settings.json         # Editor config (format on save, ESLint)
│   └── extensions.json       # Recommended extensions
├── .git/                      # Git repository
├── public/                    # Static assets
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx     # shadcn Button component
│   ├── layouts/
│   │   └── main.astro         # Main layout wrapper
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── markdown-page.md   # Example markdown page
│   └── styles/
│       └── global.css         # Tailwind v4 config + design tokens
├── .prettierrc                # Prettier configuration
├── .prettierignore            # Files to ignore for Prettier
├── astro.config.mjs           # Astro configuration
├── components.json            # shadcn/ui configuration
├── eslint.config.js           # ESLint flat config
├── package.json               # Dependencies & scripts
├── pnpm-lock.yaml            # Lock file
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Configuration Details

### TypeScript Configuration (tsconfig.json)

- Extends: `astro/tsconfigs/strict`
- JSX: `react-jsx`
- JSX Import Source: `react`
- Path Aliases:
  - `@/*` → `./src/*`
  - Enables clean imports like `@/components/ui/button`

### Astro Configuration (astro.config.mjs)

- **Vite Plugin:** @tailwindcss/vite for Tailwind v4
- **Integration:** @astrojs/react for React components
- **MDX Support:** Enabled via @astrojs/mdx

### shadcn/ui Configuration (components.json)

- **Style:** new-york
- **TypeScript:** Enabled (tsx: true)
- **RSC:** Disabled (rsc: false)
- **CSS Location:** src/styles/global.css
- **Base Color:** neutral
- **CSS Variables:** Enabled
- **Icon Library:** lucide
- **Path Aliases:**
  - components: @/components
  - utils: @/lib/utils
  - ui: @/components/ui
  - lib: @/lib
  - hooks: @/hooks

### ESLint Configuration (eslint.config.js)

Using ESLint v9 **flat config** format (NOT .eslintrc):

- **Base Rules:** JavaScript + TypeScript recommended
- **Astro Support:** Full parsing and linting of .astro files
- **React Rules:** Including Hooks and JSX a11y for accessibility
- **Import Management:**
  - Auto-sort imports alphabetically
  - Detect and remove unused imports
  - External packages → @/ aliases → relative imports
- **Prettier Integration:** Disables conflicting ESLint rules
- **Ignore Patterns:** dist/, node_modules/, .astro/, config files

### Prettier Configuration (.prettierrc)

- **Semi:** true (use semicolons)
- **Single Quote:** true (prefer single quotes)
- **Tab Width:** 2 spaces
- **Trailing Comma:** es5
- **Print Width:** 100 characters
- **Arrow Parens:** always
- **End of Line:** lf (Unix-style)
- **Plugins:** prettier-plugin-astro for .astro file support

### Git Hooks (Husky + lint-staged)

**Pre-commit Hook:**

- Automatically runs before every commit
- Only checks staged files (fast!)
- Auto-fixes linting errors with ESLint --fix
- Auto-formats all files with Prettier --write
- Backs up unstaged changes (safe!)

**lint-staged Configuration:**

```json
{
  "*.{js,jsx,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md}": ["prettier --write"]
}
```

### VS Code Configuration (.vscode/)

**settings.json:**

- Format on save enabled
- ESLint auto-fix on save
- Prettier as default formatter
- Tailwind IntelliSense in cn() and cva()
- File associations for Tailwind CSS

**extensions.json (Recommended):**

- Astro VS Code extension
- ESLint
- Prettier
- Tailwind CSS IntelliSense

## Design System (global.css)

### Theme Configuration

Uses Tailwind v4's new @theme inline syntax with CSS custom properties.

**Border Radius Scale:**

- `--radius`: 0.625rem (10px base)
- Scales: sm, md, lg, xl, 2xl, 3xl, 4xl

**Color Tokens (OKLCH):**

- background / foreground
- card / card-foreground
- popover / popover-foreground
- primary / primary-foreground
- secondary / secondary-foreground
- muted / muted-foreground
- accent / accent-foreground
- destructive
- border / input / ring
- chart-1 through chart-5
- sidebar variants

**Dark Mode:**

- Class-based (`.dark`)
- Complete theme override with dark-optimized colors

### Custom Variant

```css
@custom-variant dark (&:is(.dark *));
```

## Available Scripts

### Development

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm astro      # Run Astro CLI commands
```

### Code Quality

```bash
pnpm lint           # Check for linting errors
pnpm lint:fix       # Auto-fix linting errors
pnpm format         # Format all files with Prettier
pnpm format:check   # Check if files are formatted
pnpm check          # Run format check + lint (CI-ready)
```

### Git Hooks

```bash
pnpm prepare    # Initialize Husky (runs automatically after install)
# Pre-commit hook runs automatically on git commit
```

## Development Guidelines

### Component Development

1. **Astro Components** (.astro files)
   - Use for static/SSG pages and layouts
   - Import global.css at the top
   - Leverage Astro's component syntax

2. **React Components** (.tsx files)
   - Use for interactive UI components
   - Follow shadcn/ui patterns for consistency
   - Utilize CVA for variant management
   - Use `cn()` utility for className merging

### Styling Conventions

- Use Tailwind utility classes primarily
- Leverage design system tokens (e.g., `bg-primary`, `text-foreground`)
- Use CVA for component variants
- Merge classes with `cn()` utility for conditional styling

### Import Patterns

```typescript
// Use path aliases
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// In Astro files
import '../styles/global.css'; // For global styles
```

## Current Implementation Status

### ✅ Completed

#### Project Foundation

- [x] Astro project initialization
- [x] Tailwind CSS v4 setup with Vite plugin
- [x] shadcn/ui initialization (new-york style)
- [x] React integration via @astrojs/react
- [x] TypeScript configuration with path aliases
- [x] MDX support
- [x] Design system with light/dark modes
- [x] Button component from shadcn/ui
- [x] Basic homepage structure
- [x] Layout wrapper component

#### Development Tooling

- [x] ESLint v9 with flat config
- [x] TypeScript, React, Astro linting plugins
- [x] Accessibility linting (jsx-a11y)
- [x] Auto-import sorting (simple-import-sort)
- [x] Unused import detection
- [x] Prettier code formatting
- [x] Prettier Astro plugin
- [x] Husky git hooks setup
- [x] Pre-commit hooks with lint-staged
- [x] VS Code workspace settings
- [x] VS Code extension recommendations
- [x] .claude context documentation

### 🎯 Next Steps

- [ ] Build out portfolio pages
- [ ] Add more shadcn/ui components as needed
- [ ] Create portfolio content sections
- [ ] Add animations and interactions
- [ ] Implement routing structure
- [ ] Add SEO optimization

## Important Notes

### Tailwind CSS v4 Specifics

⚠️ **Using Tailwind CSS v4 (ALPHA)** - This version uses a different configuration approach:

- NO `tailwind.config.js` file needed
- Configuration via `@theme` in CSS files
- Vite plugin integration instead of PostCSS
- Uses new CSS-first approach

### shadcn/ui Integration

- Components are copied into the project (not installed as package)
- Customizable and own-able component code
- Located in `src/components/ui/`
- Uses Radix UI primitives for accessibility

### Astro + React Hybrid

- Astro handles SSG and routing
- React components are "islands" that hydrate on the client
- Use `client:load`, `client:visible`, etc. directives for hydration strategy
- Keep React usage minimal for best performance

## Git Workflow

**Main Branch:** develop
**Recent Commits:**

- feat: shadcn button
- feat: shadcn init
- Initial commit from Astro

## Dependencies to Know

### Runtime Dependencies

All dependencies are tracked in package.json. Key ones:

- Astro & integrations
- React & React DOM
- Tailwind CSS & plugins
- shadcn/ui dependencies (Radix, CVA, etc.)
- Lucide icons
- Canvas confetti

### Dev Dependencies

**Linting & Formatting:**

- ESLint 9.39.2 + plugins (Astro, React, TypeScript, a11y, import sorting)
- Prettier 3.8.1 + Astro plugin
- TypeScript ESLint 8.54.0

**Git Hooks:**

- Husky 9.1.7
- lint-staged 16.2.7

**Animation:**

- tw-animate-css 1.4.0

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [React 19 Docs](https://react.dev)
