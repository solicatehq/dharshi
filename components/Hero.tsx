import React from 'react';
import { Button } from './Button';
import { Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxeai4.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-stone-300/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-beige-300/20 rounded-full blur-[80px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center relative z-10">

        {/* Username / Brand Identity */}
        <div className="animate-fade-in-up opacity-0 flex items-center space-x-2 mb-8" style={{ animationDelay: '0.1s' }}>
          <span className="h-px w-8 bg-stone-400 inline-block"></span>
          <span className="font-sans text-stone-500 text-xs tracking-[0.3em] uppercase">
            @luxe_clicks__
          </span>
          <span className="h-px w-8 bg-stone-400 inline-block"></span>
        </div>

        {/* Main Name Impact */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-stone-900 leading-[0.9] tracking-tighter mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Ayesha Malkani
        </h1>

        {/* The Luxe Tagline */}
        <p className="font-serif text-2xl md:text-4xl text-stone-800 font-light mb-12 max-w-3xl mx-auto animate-fade-in-up opacity-0 leading-tight" style={{ animationDelay: '0.5s' }}>
          "Creating content that looks <span className="italic">real</span> and feels <span className="italic">luxe</span>."
        </p>

        {/* Description */}
        <p className="max-w-lg mx-auto text-stone-500 font-sans text-sm md:text-base leading-relaxed tracking-wide mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Elevating beauty and lifestyle brands through authentic, high-end visual storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View Portfolio
          </Button>
          <a
            href="https://www.instagram.com/luxe_clicks__/#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-stone-500 hover:text-stone-900 transition-colors text-sm tracking-widest uppercase border-b border-transparent hover:border-stone-900 pb-1"
          >
            <Instagram size={16} className="mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};