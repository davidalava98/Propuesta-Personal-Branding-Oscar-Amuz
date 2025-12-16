import React from 'react';
import { Icons } from './Icons';
import { Button } from './UI';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/oscarhero/1920/1080" 
          alt="Oscar Amuz Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-6">
          <div className="inline-block bg-brand-accent/10 border border-brand-accent/30 rounded-full px-4 py-1 text-brand-accent font-bold text-sm tracking-wider uppercase mb-2">
            Liderazgo & Neurodiversidad Global
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight">
            Transformando <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
              Vidas y Organizaciones
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Oscar Amuz conecta el potencial humano con estrategias de alto impacto a través del deporte, la educación y el liderazgo consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary">
              Conoce la Metodología
            </Button>
            <Button variant="outline">
              <Icons.PlayCircle className="w-5 h-5 mr-2" />
              Ver Reel
            </Button>
          </div>
        </div>
        {/* Hero Image (cutout style mockup) */}
        <div className="hidden md:block relative animate-fade-in-up">
          <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-3xl"></div>
           {/* Using the specific image provided by the user */}
          <img 
            src="https://oscaramuz.com/wp-content/uploads/2025/12/oscar-2.jpg" 
            alt="Oscar Amuz Portrait" 
            className="relative rounded-2xl shadow-2xl border-2 border-brand-slate transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};