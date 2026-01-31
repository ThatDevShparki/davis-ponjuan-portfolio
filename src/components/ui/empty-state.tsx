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

function EmptyState({ title, description, icon, action, className, ...props }: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn('flex flex-col items-center justify-center py-16 px-8 text-center', className)}
      {...props}
    >
      {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-base text-muted-foreground mb-6 max-w-md">{description}</p>
      )}
      {action && (
        <Button asChild>
          <a href={action.href}>{action.label}</a>
        </Button>
      )}
    </div>
  );
}

export { EmptyState };
