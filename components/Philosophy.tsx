import React from 'react';
import { Icons } from './Icons';
import { Section, SectionTitle, Card } from './UI';

export const Philosophy = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
      <SectionTitle title="Filosofía y Misión" subtitle="Valores que construyen el futuro" />
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Liderazgo Consciente", desc: "Formar líderes que entiendan la diversidad como una ventaja competitiva, no como un obstáculo.", icon: Icons.Brain },
          { title: "Innovación Social", desc: "Crear estructuras sostenibles que permitan la integración real en el deporte y el trabajo.", icon: Icons.TrendingUp },
          { title: "Esperanza Activa", desc: "No solo soñar con un mundo mejor, sino construirlo con herramientas tangibles día a día.", icon: Icons.Heart },
        ].map((item, idx) => (
          <Card key={idx} className="group hover:-translate-y-2">
            <div className="bg-brand-dark w-16 h-16 rounded-full flex items-center justify-center border border-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};