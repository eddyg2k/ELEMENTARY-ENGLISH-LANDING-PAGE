import type { PropsWithChildren, ReactNode } from 'react';

export type CardProps = PropsWithChildren<{
  title?: ReactNode;
  className?: string;
  headerSlot?: ReactNode;
}>;

export function Card({ title, headerSlot, className = '', children }: CardProps) {
  const baseStyles = 'rounded-lg border p-6 shadow-sm transition-transform duration-200';

  return (
    <article className={`${baseStyles} ${className}`.trim()}>
      {(title || headerSlot) && (
        <header className="mb-4 flex items-center justify-between gap-2">
          {title && <h3 className="text-xl font-semibold leading-tight">{title}</h3>}
          {headerSlot}
        </header>
      )}
      <div className="space-y-2 text-sm leading-relaxed">{children}</div>
    </article>
  );
}
