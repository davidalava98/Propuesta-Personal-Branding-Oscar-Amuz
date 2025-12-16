import React from 'react';
import { Icons } from './Icons';
import { Section } from './UI';

export const Biography = () => {
  return (
    <Section id="bio">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 relative">
           <img 
            src="https://oscaramuz.com/wp-content/uploads/2025/12/OMG04911.jpg" 
            alt="Oscar Speaking" 
            className="rounded-lg shadow-2xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-6 right-6 bg-brand-accent text-brand-dark p-4 rounded-lg shadow-lg max-w-xs">
            <p className="font-heading font-bold text-lg">"El liderazgo real comienza con la inclusión."</p>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-4xl font-heading font-bold text-white">Más que un líder, un <span className="text-brand-accent">agente de cambio</span>.</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Fundador y CEO de <strong>Autism Soccer</strong>, Oscar ha dedicado su vida a demostrar que las barreras neurológicas no definen el potencial humano. Su trayectoria combina la pasión deportiva con una visión empresarial única.
            </p>
            <p>
              Reconocido internacionalmente por desarrollar modelos de inclusión que funcionan tanto en el campo de juego como en las salas de juntas corporativas.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {[
              { label: "Años de Exp.", value: "20+", icon: Icons.Calendar },
              { label: "Familias Impactadas", value: "15k+", icon: Icons.Users },
              { label: "Países", value: "12", icon: Icons.Globe },
              { label: "Premios", value: "30+", icon: Icons.Award },
            ].map((stat, idx) => (
              <div key={idx} className="bg-brand-slate p-4 rounded-xl text-center border border-white/5 hover:border-brand-accent/50 transition-colors">
                <stat.icon className="w-8 h-8 text-brand-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};