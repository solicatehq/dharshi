import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Brands } from './components/Brands';
import { Rates } from './components/Rates';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { HowItWorks } from './components/HowItWorks';
import { MoodBoard } from './components/MoodBoard';

function App() {
  return (
    <div className="min-h-screen bg-beige-200 font-sans selection:bg-stone-300 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MoodBoard />
        <HowItWorks />
        <Portfolio />
        <Brands />
        <Rates />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
