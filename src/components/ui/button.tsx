import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Button Component - Editorial Design System
 *
 * Follows the portfolio's design principles:
 * - Primary buttons: forest green, subtle hover lift
 * - Secondary/outline: editorial border treatment
 * - Transitions: 300ms ease-out (unhurried)
 * - Rounded-md (subtle, not too rounded)
 */
const buttonVariants = cva(
  // Base: editorial feel with proper transitions
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary: forest green with subtle lift on hover
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98]',
        // Outline: editorial border style (like the mobile menu CTA)
        outline:
          'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary',
        // Secondary: subtle filled background
        secondary: 'bg-muted text-foreground hover:bg-muted/80',
        // Ghost: minimal, just hover state
        ghost: 'text-foreground hover:bg-muted/50 hover:text-foreground',
        // Link: inline text link style
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto font-normal',
        // Nav: navigation style with active state
        nav: 'text-muted-foreground hover:text-foreground p-0 h-auto font-normal aria-[current=page]:text-foreground aria-[current=page]:border-b aria-[current=page]:border-primary',
        // Destructive: error/delete actions
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-6',
        xl: 'h-12 rounded-md px-8 text-base',
        // Icon buttons: circular
        icon: 'size-10 rounded-full p-0',
        'icon-sm': 'size-8 rounded-full p-0',
        'icon-lg': 'size-11 rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
