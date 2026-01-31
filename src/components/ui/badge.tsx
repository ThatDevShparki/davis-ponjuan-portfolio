import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Badge Component - Editorial Design System
 *
 * Refined badges for the conductor portfolio:
 * - Subtle, understated styling
 * - Configurable text transform (uppercase for labels, capitalize for roles)
 * - Transition timing matches design system (300ms)
 */
const badgeVariants = cva(
  // Base: editorial style, subtle presentation
  'inline-flex items-center justify-center rounded px-2 py-0.5 text-[10px] font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors duration-300 border',
  {
    variants: {
      variant: {
        // Default: subtle primary tint
        default: 'bg-primary/10 text-primary border-transparent',
        // Secondary: neutral, subdued
        secondary: 'bg-muted text-muted-foreground border-transparent',
        // Outline: editorial border style (for awards, etc.)
        outline: 'border-primary text-primary bg-transparent',
        // Featured: primary accent for highlights
        featured: 'bg-primary text-primary-foreground border-transparent',
        // Role badges: conductor vs performer distinction
        conductor: 'bg-primary/10 text-primary border-transparent',
        performer: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-transparent',
        // Status badges: upcoming vs past
        upcoming: 'bg-primary/10 text-primary border-transparent',
        past: 'bg-muted text-muted-foreground border-transparent',
        // Destructive: error states
        destructive: 'bg-destructive/10 text-destructive border-transparent',
        // Ghost: minimal, text only
        ghost: 'border-transparent text-muted-foreground',
      },
      // Text transform options
      textCase: {
        uppercase: 'uppercase tracking-wide',
        capitalize: 'capitalize',
        none: '',
      },
      // Size variants for compact contexts
      size: {
        default: 'px-2 py-0.5 text-[10px]',
        sm: 'px-1.5 py-0.5 text-[9px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      textCase: 'uppercase',
      size: 'default',
    },
  }
);

function Badge({
  className,
  variant = 'default',
  textCase = 'uppercase',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, textCase, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
