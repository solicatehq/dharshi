import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled || isOpen ? 'bg-cream-100/90 backdrop-blur-md py-3 shadow-sm border-b border-brown-900/5' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl md:text-3xl tracking-wide text-brown-900 font-medium z-50 relative">
          Priyadharshika<span className="text-gold-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brown-800 hover:text-gold-500 text-[12px] uppercase tracking-[0.15em] font-sans transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-brown-900 text-cream-50 text-[12px] uppercase tracking-widest hover:bg-gold-500 transition-colors duration-300 rounded-full"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brown-900 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-cream-100 z-40 flex flex-col justify-center items-center space-y-8 animate-fade-in-up">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brown-900 text-3xl font-display italic hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-3 border border-brown-900 text-brown-900 uppercase tracking-widest text-sm hover:bg-brown-900 hover:text-cream-50 transition-colors duration-300 rounded-full"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};