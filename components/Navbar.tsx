import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b
          ${isScrolled
            ? 'bg-cream-50/80 backdrop-blur-xl py-4 border-brown-900/5 shadow-sm'
            : 'bg-transparent py-8 border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="relative z-50 group">
            <span className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${isOpen ? 'text-brown-900' : 'text-brown-900'}`}>
              Priyadharshika
            </span>
            <span className="text-gold-500 font-serif text-2xl">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brown-800 hover:text-brown-900 text-xs uppercase tracking-[0.2em] font-medium transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-gold-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            ))}

            <a
              href="#contact"
              className="group pl-8 ml-8 border-l border-brown-900/10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-brown-900 hover:text-gold-600 transition-colors"
            >
              Let's Talk
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brown-900 focus:outline-none z-50 relative p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${isOpen ? 'top-2.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-2.5'}`} />
              <span className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${isOpen ? 'top-2.5 -rotate-45' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-cream-50 z-40 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-brown-900 text-4xl font-serif italic hover:text-gold-500 transition-colors duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}

          <div className="w-12 h-px bg-brown-900/10 my-8"></div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`text-xs uppercase tracking-[0.3em] text-gold-600 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
};