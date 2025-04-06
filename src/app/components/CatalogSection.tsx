import { ReactNode } from 'react';

interface CatalogSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function CatalogSection({ title, description, children }: CatalogSectionProps) {
  return (
    <section className="py-8 md:py-12 avoid-break">
      <h2 className="text-2xl md:text-3xl font-display font-medium text-forest mb-3">{title}</h2>
      {description && (
        <p className="text-text mb-6 max-w-3xl">{description}</p>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}