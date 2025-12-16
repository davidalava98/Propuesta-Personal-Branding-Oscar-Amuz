import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Philosophy } from './components/Philosophy';
import { Methodology } from './components/Methodology';
import { FranchiseSection } from './components/FranchiseSection';
import { Events } from './components/Events';
import { Books } from './components/Books';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Biography />
      <Philosophy />
      <Methodology />
      <FranchiseSection />
      <Events />
      <Books />
      <Footer />
    </div>
  );
}

export default App;