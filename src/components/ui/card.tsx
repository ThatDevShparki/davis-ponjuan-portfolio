import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Card Component - Editorial Design System
 *
 * Follows the portfolio's sophisticated restraint principle:
 * - Subtle borders (not heavy shadows)
 * - Generous internal spacing
 * - Unhurried 300ms transitions
 * - Primary accent on hover for interactive cards
 */
function Card({
  className,
  interactive = false,
  featured = false,
  ...props
}: React.ComponentProps<'div'> & { interactive?: boolean; featured?: boolean }) {
  return (
    <div
      data-slot="card"
      className={cn(
        // Base: subtle elevation, editorial feel
        'bg-card text-card-foreground flex flex-col rounded-md border border-border',
        // Spacing: generous padding using design tokens
        'p-5 md:p-6',
        // Transitions: unhurried, elegant (400ms from design system)
        'transition-all duration-300 ease-out',
        // Interactive: hover reveals primary accent
        interactive && 'hover:border-primary cursor-pointer group',
        // Featured: primary border by default
        featured && 'border-primary',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        // Simplified header with editorial spacing
        'flex flex-col gap-1.5 mb-4',
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        // Serif for classical authority, moderate weight
        'font-serif text-lg leading-tight',
        // Interactive cards: title changes color on hover
        'group-hover:text-primary transition-colors duration-300',
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        // Muted, smaller text for secondary info
        'text-muted-foreground text-sm leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

function CardMeta({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-meta"
      className={cn(
        // Uppercase metadata style matching .text-nav
        'text-xs uppercase tracking-wide text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('self-start justify-self-end', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        // Editorial: subtle top border, proper spacing
        'flex items-center pt-4 mt-4 border-t border-border',
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMeta,
  CardTitle,
};
