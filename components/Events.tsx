import React from 'react';
import { Icons } from './Icons';
import { Section, SectionTitle, Button } from './UI';

export const Events = () => {
  return (
    <Section id="events" className="bg-gradient-to-b from-brand-dark to-brand-slate">
      <SectionTitle title="Formación y Eventos" subtitle="Capacitación de clase mundial" />
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icons.Mic className="text-brand-accent" /> Próximos Eventos
          </h3>
          <div className="space-y-4">
            {[
              { day: "15", month: "OCT", title: "Congreso Internacional de Neurodiversidad", loc: "Miami, FL", type: "Presencial" },
              { day: "02", month: "NOV", title: "Seminario: Liderazgo Inclusivo", loc: "Online Zoom", type: "Webinar" },
              { day: "20", month: "ENE", title: "Certificación Autism Soccer", loc: "Madrid, ES", type: "Híbrido" },
            ].map((evt, idx) => (
              <div key={idx} className="flex bg-brand-dark p-4 rounded-xl border border-gray-800 hover:border-brand-accent transition-all cursor-pointer group">
                <div className="flex-shrink-0 bg-brand-slate w-16 h-16 rounded-lg flex flex-col items-center justify-center border border-gray-700 group-hover:border-brand-accent">
                  <span className="text-xs font-bold text-brand-accent uppercase">{evt.month}</span>
                  <span className="text-2xl font-bold text-white">{evt.day}</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="font-bold text-lg text-white group-hover:text-brand-accent transition-colors">{evt.title}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1 gap-4">
                    <span className="flex items-center gap-1"><Icons.MapPin size={14} /> {evt.loc}</span>
                    <span className="bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded text-xs">{evt.type}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center px-2">
                  <Icons.ArrowRight className="text-gray-600 group-hover:text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="secondary">Ver Calendario Completo</Button>
          </div>
        </div>

        {/* Classes Highlight */}
        <div className="bg-brand-soft rounded-2xl p-8 text-brand-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <h3 className="text-3xl font-heading font-extrabold mb-4 relative z-10">Academia Online</h3>
          <p className="mb-6 relative z-10 font-medium">Accede a cursos certificados, diplomados y material exclusivo desde cualquier parte del mundo.</p>
          <ul className="space-y-3 mb-8 relative z-10">
            {["Certificación en Coaching Deportivo", "Neurociencia aplicada al Liderazgo", "Gestión de Entidades Inclusivas"].map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icons.CheckCircle2 className="text-blue-600 w-5 h-5" />
                <span className="font-semibold">{c}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark relative z-10 w-full">
            Ir al Aula Virtual
          </Button>
        </div>
      </div>
    </Section>
  );
};