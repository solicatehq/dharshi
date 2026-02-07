import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Instagram, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="/luxeai4.jpeg"
          alt="Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brown-900/40 mix-blend-overlay" />
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Top Tag */}
        <div
          className="animate-fade-in-up opacity-0 mb-6 flex items-center gap-3"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="h-px w-8 bg-gold-400/60" />
          <span className="text-gold-300 tracking-[0.3em] text-xs font-sans uppercase font-medium">
            Premium UGC Creator
          </span>
          <span className="h-px w-8 bg-gold-400/60" />
        </div>

        {/* Main Heading */}
        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream-50 mb-6 animate-fade-in-up opacity-0 leading-[0.9] tracking-tight drop-shadow-2xl"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="block italic font-light text-5xl md:text-7xl lg:text-8xl text-cream-200 mb-2">The Art of</span>
          Priyadharshika
        </h1>

        {/* Subheading */}
        <p
          className="font-sans text-cream-100/90 text-sm md:text-lg tracking-wide max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 leading-relaxed font-light"
          style={{ animationDelay: '0.5s' }}
        >
          Curating high-converting, aesthetic visual stories for beauty, fashion, and lifestyle brands.
          Where <span className="text-gold-400 font-normal">elegance</span> meets <span className="text-gold-400 font-normal">performance</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.7s' }}
        >
          <Button
            onClick={scrollToContact}
            variant="primary"
            className="group !bg-cream-50 !text-brown-900 border-none hover:!bg-gold-400 hover:!text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-500 ease-out"
          >
            Start Your Campaign
            <ArrowRight size={16} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
          </Button>

          <a
            href="https://www.instagram.com/dharshiugc/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-cream-200 hover:text-gold-400 transition-colors text-xs tracking-[0.2em] uppercase"
          >
            <div className="w-10 h-10 rounded-full border border-cream-200/30 flex items-center justify-center mr-3 group-hover:border-gold-400/60 group-hover:bg-gold-400/10 transition-all">
              <Instagram size={14} />
            </div>
            <span>View Portfolio</span>
          </a>
        </div>

      </div>

      {/* Floating Glass Cards / Decorative Elements */}
      <div className="absolute bottom-10 left-10 md:left-20 hidden md:block animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg">
          <p className="text-gold-400 text-xs tracking-widest mb-1">CURRENTLY</p>
          <p className="text-cream-100 text-sm font-serif italic">Accepting New Collaborations</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 md:right-20 hidden md:block animate-fade-in opacity-0" style={{ animationDelay: '1.4s' }}>
        <div className="flex items-center gap-4">
          <span className="text-cream-200/40 text-xs tracking-widest uppercase rotate-270 origin-right">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};