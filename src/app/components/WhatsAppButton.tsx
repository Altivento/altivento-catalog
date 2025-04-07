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
      className="no-print fixed bottom-20 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-4 rounded-md shadow-lg flex items-center transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      Cotizar Ahora
    </button>
  );
}