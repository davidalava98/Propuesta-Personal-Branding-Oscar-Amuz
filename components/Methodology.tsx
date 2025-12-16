import React from 'react';
import { Icons } from './Icons';
import { Section, SectionTitle, Button } from './UI';

export const Methodology = () => {
  return (
    <Section id="methodology" light>
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Metodología Rivera" subtitle="Un enfoque científico y humano para el desarrollo integral" light />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            {[
              { step: "01", title: "Evaluación Sensorial", desc: "Análisis profundo del perfil neurodiverso del individuo." },
              { step: "02", title: "Adaptación Estructural", desc: "Diseño de entornos y tareas ajustadas a las capacidades." },
              { step: "03", title: "Integración Progresiva", desc: "Avance paso a paso hacia objetivos complejos y socialización." },
              { step: "04", title: "Liderazgo Autónomo", desc: "Fomentar la independencia y la toma de decisiones." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-6">
              <Button variant="primary">Descargar Guía Metodológica</Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
             <div className="bg-white p-2 rounded-2xl shadow-2xl transform rotate-3">
               <img src="https://autismsoccer.org/wp-content/uploads/2025/06/metodologia-4-e1751241847275-1024x890.webp" className="rounded-xl w-full" alt="Metodología en acción" />
               <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-brand-dark">Resultados Comprobados</span>
                  <Icons.CheckCircle2 className="text-green-500" />
               </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};