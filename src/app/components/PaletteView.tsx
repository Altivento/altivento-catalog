'use client';

import { useState } from 'react';

interface ColorInfo {
  name: string;
  class: string;
  hex: string;
  rgb: string;
}

export default function PaletteView() {
  const [isOpen, setIsOpen] = useState(false);
  
  const colors: ColorInfo[] = [
    { name: 'Peach', class: 'bg-peach', hex: '#EF9C82', rgb: 'RGB: 239, 156, 130' },
    { name: 'Cream', class: 'bg-cream', hex: '#F9EEE7', rgb: 'RGB: 249, 238, 231' },
    { name: 'Sand', class: 'bg-sand', hex: '#FFD9BE', rgb: 'RGB: 255, 217, 190' },
    { name: 'Forest', class: 'bg-forest', hex: '#123332', rgb: 'RGB: 18, 51, 50' },
    { name: 'Teal', class: 'bg-teal', hex: '#1D4241', rgb: 'RGB: 29, 66, 65' },
  ];

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="no-print fixed bottom-6 left-6 bg-teal hover:bg-forest text-white font-medium py-2 px-4 rounded-md shadow-lg flex items-center transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        Ver Paleta
      </button>
    );
  }

  return (
    <div className="no-print fixed bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display text-lg font-medium text-forest">Paleta de Colores</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-forest hover:text-teal transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {colors.map((color) => (
          <div key={color.name} className="border rounded overflow-hidden">
            <div className={`${color.class} h-20 w-full`}></div>
            <div className="p-2 text-sm">
              <p className="font-medium">{color.name}</p>
              <p className="text-xs text-gray-600">{color.hex}</p>
              <p className="text-xs text-gray-600">{color.rgb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}