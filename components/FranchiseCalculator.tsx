import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, Button } from './UI';
import { Icons } from './Icons';

export const FranchiseCalculator: React.FC = () => {
  const [students, setStudents] = useState<number>(50);
  const [fee, setFee] = useState<number>(120); // Monthly fee per student
  
  // Simple calculation logic
  const monthlyRevenue = students * fee;
  const yearlyRevenue = monthlyRevenue * 12;
  const operationalCosts = yearlyRevenue * 0.4; // Assuming 40% operational cost
  const royalty = yearlyRevenue * 0.08; // 8% royalty
  const netProfit = yearlyRevenue - operationalCosts - royalty;

  const data = [
    { name: 'Ingresos Brutos', amount: yearlyRevenue, color: '#03d5fc' },
    { name: 'Costos Op.', amount: operationalCosts, color: '#ef4444' },
    { name: 'Utilidad Neta', amount: netProfit, color: '#22c55e' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2">
          <Icons.Calculator className="text-brand-accent" />
          Proyección de Rentabilidad
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-brand-soft mb-2">Número de Estudiantes Activos</label>
            <input 
              type="range" 
              min="20" 
              max="200" 
              value={students} 
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-2 bg-brand-slate rounded-lg appearance-none cursor-pointer accent-brand-accent"
            />
            <div className="text-right text-brand-accent font-bold text-xl">{students} Estudiantes</div>
          </div>

          <div>
            <label className="block text-brand-soft mb-2">Mensualidad Promedio (USD)</label>
            <input 
              type="range" 
              min="50" 
              max="300" 
              value={fee} 
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full h-2 bg-brand-slate rounded-lg appearance-none cursor-pointer accent-brand-accent"
            />
            <div className="text-right text-brand-accent font-bold text-xl">${fee} USD</div>
          </div>
        </div>

        <Card className="bg-brand-slate/50 border-brand-accent/30">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
             <span className="text-gray-300">Ingreso Mensual Estimado:</span>
             <span className="text-2xl font-bold text-white">${monthlyRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-gray-300">Utilidad Anual Proyectada:</span>
             <span className="text-3xl font-bold text-green-400">${netProfit.toLocaleString()}</span>
          </div>
        </Card>
        
        <Button variant="primary" fullWidth>
          Solicitar Dossier de Franquicia
        </Button>
      </div>

      <div className="h-[400px] bg-brand-slate rounded-2xl p-4 border border-brand-accent/10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3b5e" />
            <XAxis dataKey="name" stroke="#d7e7ff" />
            <YAxis stroke="#d7e7ff" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#010c26', borderColor: '#03d5fc', color: '#fff' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Monto']}
            />
            <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-center text-gray-500 mt-2">*Cifras estimadas. No garantizan resultados.</p>
      </div>
    </div>
  );
};