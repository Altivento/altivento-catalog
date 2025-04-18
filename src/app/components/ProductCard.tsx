interface DetailItem {
    label?: string;
    text?: string;
    price?: string;
    items?: string[];
  }
  
  interface ProductCardProps {
    title: string;
    details: DetailItem[];
    imagePath?: string;
    imageAlt?: string;
  }
  
  export default function ProductCard({ title, details, imagePath, imageAlt }: ProductCardProps) {
    // Extract price for print version
    const priceDetail = details.find(detail => detail.price);
    const price = priceDetail?.price || '';

    return (
      <>
        {/* Screen version */}
        <div className="avoid-break bg-cream rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print-bg flex flex-col print:hidden">
          {imagePath && (
            <div className="h-48 md:h-64 overflow-hidden flex-shrink-0">
              <img 
                src={imagePath} 
                alt={imageAlt || `Imagen de ${title}`} 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-6 flex-grow">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-teal mb-3">{title}</h3>
            <div className="space-y-3">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-1">
                    {detail.label && (
                      <p className="font-medium text-forest">{detail.label}</p>
                    )}
                    {detail.items ? (
                      <ul className="mt-1 ml-5 list-disc space-y-1">
                        {detail.items.map((item, idx) => (
                          <li key={idx} className="text-text leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    ) : detail.text && (
                      <p className="text-text leading-relaxed">{detail.text}</p>
                    )}
                  </div>
                  {detail.price && (
                    <div className="ml-4 text-right whitespace-nowrap">
                      <span className="font-semibold text-xl md:text-2xl text-secondary">{detail.price}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Print version */}
        <div className="hidden print:block product-card-print">
          {imagePath && (
            <div className="image-container">
              <img 
                src={imagePath} 
                alt={imageAlt || `Imagen de ${title}`}
              />
            </div>
          )}
          <h3>{title}</h3>
          {details.map((detail, index) => (
            <div key={index}>
              {detail.text && (
                <p>{detail.text}</p>
              )}
              {detail.items && (
                <ul className="mt-1 ml-5 list-disc">
                  {detail.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {price && (
            <div className="price mt-2">
              {price}
            </div>
          )}
        </div>
      </>
    );
  }