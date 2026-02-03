import { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, className }: CardProps) {
  return (
    <section
      className={`card w-full p-5 sm:p-6 lg:p-7 bg-card ${className ?? ""}`}
    >
      {(title || subtitle) && (
        <header className="mb-4 flex flex-col gap-1">
          {title && (
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs text-foreground/70 sm:text-sm">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

