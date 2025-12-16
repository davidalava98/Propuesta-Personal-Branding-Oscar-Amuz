import React from 'react';
import { Section, SectionTitle, Card } from './UI';
import { FranchiseCalculator } from './FranchiseCalculator';

export const FranchiseSection = () => {
  return (
    <Section id="franchise">
      <SectionTitle title="Franquicia Autism Soccer" subtitle="Emprende con propósito y rentabilidad" />
      <FranchiseCalculator />
      
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card className="text-center">
          <h4 className="font-bold text-brand-accent text-xl mb-2">Soporte Total</h4>
          <p className="text-sm text-gray-400">Capacitación continua para tu equipo y gestión.</p>
        </Card>
        <Card className="text-center">
          <h4 className="font-bold text-brand-accent text-xl mb-2">Marca Global</h4>
          <p className="text-sm text-gray-400">Respaldo de una organización internacional.</p>
        </Card>
        <Card className="text-center">
          <h4 className="font-bold text-brand-accent text-xl mb-2">ROI Atractivo</h4>
          <p className="text-sm text-gray-400">Modelo financiero optimizado y escalable.</p>
        </Card>
      </div>
    </Section>
  );
};