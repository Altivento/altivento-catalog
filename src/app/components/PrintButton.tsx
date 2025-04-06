'use client';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className="no-print fixed bottom-6 right-6 bg-forest hover:bg-teal text-white font-medium py-2 px-4 rounded-md shadow-lg flex items-center transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Imprimir Catálogo
    </button>
  );
}