import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Carpas y Pistas — Altivento',
  description: 'Estructuras memorables para eventos sociales y corporativos. Especialistas en carpas, pistas de baile, entarimados y más.',
};

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="es" className="antialiased">
      <head>
        {/* Import Boska and Switzer fonts - added in head for reliable font loading */}
        <link 
          rel="stylesheet" 
          href="https://api.fontshare.com/v2/css?f[]=boska@500,700,400&f[]=switzer@300,400,500,600,700&display=swap" 
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-forest text-white p-6 print:hidden">
            <div className="container mx-auto flex flex-col items-center">
              <img 
              src="/logo.png" 
              alt="Altivento Logo" 
              className="h-24 md:h-32 print:h-24"
              />
            </div>
          </header>
          <main className="flex-grow text-base md:text-lg">
            {children}
          </main>
          <footer className="bg-cream p-6 print:hidden text-sm text-forest">
            <div className="container mx-auto text-center">
              <p>© {new Date().getFullYear()} Altivento. Todos los derechos reservados.</p>
              <p className="mt-1">Querétaro, México</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}