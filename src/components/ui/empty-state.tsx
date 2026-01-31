import * as React from 'react';

import { cn } from '@/lib/utils';

import { Button } from './button';

interface EmptyStateProps extends React.ComponentProps<'div'> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
}

/**
 * EmptyState Component - Editorial Design System
 *
 * Subtle, understated empty states that don't distract:
 * - Serif title for consistency
 * - Generous but not excessive padding
 * - Optional subtle border treatment
 */
function EmptyState({ title, description, icon, action, className, ...props }: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn('flex flex-col items-center justify-center py-12 px-6 text-center', className)}
      {...props}
    >
      {icon && <div className="mb-4 text-muted-foreground opacity-60">{icon}</div>}
      <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground mb-5 max-w-sm">{description}</p>}
      {action && (
        <Button variant="outline" asChild>
          <a href={action.href}>{action.label}</a>
        </Button>
      )}
    </div>
  );
}

export { EmptyState };
