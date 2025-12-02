import type { PropsWithChildren } from 'react';

export type LayeredBackdropProps = PropsWithChildren<{
  className?: string;
}>;

export function LayeredBackdrop({ className = '', children }: LayeredBackdropProps) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`.trim()}>
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-[-10%] h-64 w-64 rounded-full bg-emerald-500 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-500 blur-[140px]" />
        <div className="absolute left-0 bottom-[-10%] h-72 w-72 rounded-full bg-indigo-500 blur-[130px]" />
      </div>
      {children}
    </div>
  );
}
