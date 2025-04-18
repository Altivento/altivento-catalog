'use client';

export default function WhatsAppButton() {
  // Replace with the actual WhatsApp number
  const whatsappNumber = '524421900928';
  const message = encodeURIComponent('Hola, me gustaría solicitar una cotización para un evento.');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="no-print fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium shadow-lg flex items-center justify-center transition-colors rounded-full w-12 h-12 md:w-auto md:h-auto md:rounded-md md:py-2 md:px-4"
      aria-label="Cotizar Ahora"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-5 md:w-5 md:mr-2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      <span className="hidden md:inline">Cotizar Ahora</span>
    </button>
  );
}