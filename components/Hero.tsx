import React from 'react';
import { Button } from './Button';
import { Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxeai4.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900 via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center relative z-10">

        {/* Username / Brand Identity */}
        <div className="animate-fade-in-up opacity-0 flex items-center space-x-4 mb-6" style={{ animationDelay: '0.1s' }}>
          <span className="h-px w-12 bg-gold-400 inline-block"></span>
          <span className="font-sans text-cream-100 text-xs tracking-[0.25em] uppercase font-medium">
            @dharshiugc
          </span>
          <span className="h-px w-12 bg-gold-400 inline-block"></span>
        </div>

        {/* Main Name Impact */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up opacity-0 drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
          Priyadharshika
        </h1>

        {/* The Luxe Tagline */}
        <p className="font-serif text-2xl md:text-3xl text-cream-100 font-light mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 leading-snug italic" style={{ animationDelay: '0.5s' }}>
          "Blending <span className="text-gold-400 not-italic">elegance</span> with authentic storytelling for premium brands."
        </p>

        {/* Description */}
        <p className="max-w-lg mx-auto text-cream-200/90 font-sans text-sm leading-relaxed tracking-wide mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Specializing in Beauty, Fashion, and Lifestyle UGC that converts views into loyal customers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button onClick={scrollToContact} variant="primary" className="bg-cream-100 text-brown-900 hover:bg-gold-500 hover:text-white border-none">
            Book a Consultation
          </Button>
          <a
            href="https://www.instagram.com/dharshiugc/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-cream-100 hover:text-gold-400 transition-colors text-xs tracking-[0.2em] uppercase border-b border-cream-100/30 hover:border-gold-400 pb-1"
          >
            <Instagram size={16} className="mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};