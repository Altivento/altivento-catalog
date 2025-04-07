import { ReactNode } from 'react';

interface CatalogSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function CatalogSection({ title, description, children }: CatalogSectionProps) {
  return (
    <section className="py-8 md:py-12">
      {/* Screen version */}
      <div className="print:hidden">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-forest mb-3">{title}</h2>
        {description && (
          <p className="text-text mb-6 max-w-5xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">{description}</p>
        )}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
      
      {/* Print version */}
      <div className="hidden print:block">
        <h2 className="text-3xl font-display font-medium text-forest mb-3 page-break-after">{title}</h2>
        {description && (
          <p className="text-text mb-6 leading-relaxed">{description}</p>
        )}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}