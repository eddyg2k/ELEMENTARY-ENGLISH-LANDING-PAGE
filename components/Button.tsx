import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    muted?: boolean;
  }
>;

export function Button({ children, className = '', muted = false, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200';
  const mutedStyles = muted ? 'opacity-80' : '';

  return (
    <button className={`${baseStyles} ${mutedStyles} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
