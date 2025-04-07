'use client';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className="no-print fixed bottom-6 right-6 bg-forest hover:bg-teal text-white font-medium shadow-lg flex items-center justify-center transition-colors rounded-full w-12 h-12 md:w-auto md:h-auto md:rounded-md md:py-2 md:px-4"
      aria-label="Imprimir Catálogo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      <span className="hidden md:inline">Imprimir Catálogo</span>
    </button>
  );
}