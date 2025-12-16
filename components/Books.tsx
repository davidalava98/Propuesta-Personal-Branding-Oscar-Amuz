import React from 'react';
import { Icons } from './Icons';
import { Section, Button } from './UI';

export const Books = () => {
  return (
    <Section id="books">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Books */}
        <div>
          <h3 className="text-3xl font-heading font-bold mb-8 text-white">Publicaciones</h3>
          <div className="flex gap-6 overflow-x-auto pb-4">
             {/* Book 1 */}
             <div className="flex-shrink-0 w-48 group cursor-pointer">
               <div className="aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-xl mb-4 relative overflow-hidden border border-gray-600 group-hover:scale-105 transition-transform">
                  {/* Placeholder for Book Cover */}
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                    <span className="font-heading font-bold text-xl text-brand-accent">Autism Soccer<br/>Method</span>
                  </div>
               </div>
               <h4 className="font-bold text-white group-hover:text-brand-accent">El Método Autism Soccer</h4>
               <p className="text-sm text-gray-400 mb-2">Guía práctica para entrenadores.</p>
               <a href="#" className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:underline">Comprar en Amazon <Icons.ArrowRight size={14}/></a>
             </div>
             {/* Book 2 */}
             <div className="flex-shrink-0 w-48 group cursor-pointer">
               <div className="aspect-[2/3] bg-gradient-to-br from-blue-800 to-brand-dark rounded-lg shadow-xl mb-4 relative overflow-hidden border border-gray-600 group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                    <span className="font-heading font-bold text-xl text-white">Liderazgo<br/>Sin Barreras</span>
                  </div>
               </div>
               <h4 className="font-bold text-white group-hover:text-brand-accent">Liderazgo Sin Barreras</h4>
               <p className="text-sm text-gray-400 mb-2">Historias de transformación.</p>
               <a href="#" className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:underline">Comprar en Amazon <Icons.ArrowRight size={14}/></a>
             </div>
          </div>
        </div>

        {/* Magazine / Social Grid */}
        <div>
          <h3 className="text-3xl font-heading font-bold mb-8 text-white">Magazine & Social</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-brand-slate rounded-xl p-6 border border-brand-accent/20 flex items-center gap-4 hover:bg-brand-slate/80 transition-colors cursor-pointer">
              <Icons.Instagram className="w-10 h-10 text-pink-500" />
              <div>
                <h5 className="font-bold text-white">Último Reel</h5>
                <p className="text-sm text-gray-400">Consejos para padres: La paciencia es clave.</p>
              </div>
            </div>
            <div className="bg-brand-slate rounded-xl p-6 border border-brand-accent/20 hover:bg-brand-slate/80 transition-colors cursor-pointer text-center">
              <Icons.Newspaper className="w-8 h-8 text-brand-accent mx-auto mb-2" />
              <h5 className="font-bold text-white text-sm">Blog: Inclusión Escolar</h5>
            </div>
            <div className="bg-brand-slate rounded-xl p-6 border border-brand-accent/20 hover:bg-brand-slate/80 transition-colors cursor-pointer text-center">
              <Icons.Youtube className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h5 className="font-bold text-white text-sm">Entrevista CNN</h5>
            </div>
            <div className="col-span-2 bg-brand-soft rounded-xl p-6 text-brand-dark flex justify-between items-center">
              <div>
                <h5 className="font-bold">Suscríbete al Newsletter</h5>
                <p className="text-xs text-gray-600">Recibe noticias y recursos semanales.</p>
              </div>
              <Button variant="primary" className="py-2 px-4 text-sm">Suscribir</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};