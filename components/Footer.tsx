import React from 'react';
import { Icons } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-[#000510] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading font-extrabold text-white mb-4">OSCAR <span className="text-brand-accent">AMUZ</span></h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Creando un mundo donde cada individuo, sin importar su condición neurológica, tenga la oportunidad de liderar y brillar.
            </p>
            <div className="flex gap-4">
              {[Icons.Instagram, Icons.Facebook, Icons.Linkedin, Icons.Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Explora</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-accent">Metodología</a></li>
              <li><a href="#" className="hover:text-brand-accent">Franquicias</a></li>
              <li><a href="#" className="hover:text-brand-accent">Academia</a></li>
              <li><a href="#" className="hover:text-brand-accent">Tienda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Icons.Briefcase size={14} /> Gestión de Prensa</li>
              <li className="flex items-center gap-2"><Icons.MapPin size={14} /> Miami, FL - USA</li>
              <li className="mt-4">
                <a href="mailto:info@oscaramuz.com" className="text-brand-accent hover:underline">info@oscaramuz.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Oscar Amuz. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};