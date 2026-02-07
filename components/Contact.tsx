import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, Instagram, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    brand: '',
    message: ''
  });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Collab Inquiry: ${formState.brand || 'New Brand'}`);
    const body = encodeURIComponent(`Hi Priyadharshika,\n\nMy name is ${formState.name}.\n\n${formState.message}\n\nBest,\n${formState.name}`);
    return `mailto:dharshiugc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="bg-brown-900 text-cream-100 relative">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Info Side */}
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold-500 mb-6 block">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
              Ready to create <br />something <span className="italic text-gold-400">timeless?</span>
            </h2>
            <p className="text-cream-100/60 font-sans text-lg mb-12 max-w-md font-light">
              Accepting select collaborations for the upcoming quarter.
            </p>

            <div className="space-y-8">
              <a href="mailto:dharshiugc@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 border border-brown-800 flex items-center justify-center group-hover:bg-cream-100 group-hover:border-cream-100 transition-all duration-500 rounded-sm">
                  <Mail size={20} className="text-gold-500 group-hover:text-brown-900" />
                </div>
                <div className="ml-6">
                  <span className="block text-xs uppercase tracking-widest text-brown-400 mb-1">Email</span>
                  <span className="text-xl font-display italic text-cream-200 group-hover:text-white transition-colors">dharshiugc@gmail.com</span>
                </div>
              </a>

              <a href="https://www.instagram.com/dharshiugc/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 border border-brown-800 flex items-center justify-center group-hover:bg-cream-100 group-hover:border-cream-100 transition-all duration-500 rounded-sm">
                  <Instagram size={20} className="text-gold-500 group-hover:text-brown-900" />
                </div>
                <div className="ml-6">
                  <span className="block text-xs uppercase tracking-widest text-brown-400 mb-1">Instagram</span>
                  <span className="text-xl font-display italic text-cream-200 group-hover:text-white transition-colors">@dharshiugc</span>
                </div>
              </a>
            </div>
          </div>

          {/* Email Generator Side */}
          <div className="bg-brown-800/30 p-8 md:p-12 border border-brown-800/50 backdrop-blur-sm relative overflow-hidden rounded-sm">
            {/* Decorative background number */}
            <div className="absolute -top-10 -right-10 text-[200px] font-serif text-white opacity-[0.02] pointer-events-none leading-none">@</div>

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="font-display text-2xl mb-2 text-cream-100">Quick Inquiry</h3>
                <p className="text-brown-300 text-sm font-sans">Fill in the details to generate an email draft instantly.</p>
              </div>

              <div className="group">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brown-400 mb-2 group-focus-within:text-gold-500 transition-colors">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brown-700 focus:border-gold-500 text-cream-100 pb-3 outline-none transition-all placeholder-brown-700 font-sans"
                  placeholder="Enter your name"
                />
              </div>

              <div className="group">
                <label htmlFor="brand" className="block text-xs uppercase tracking-widest text-brown-400 mb-2 group-focus-within:text-gold-500 transition-colors">Brand / Company</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formState.brand}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brown-700 focus:border-gold-500 text-cream-100 pb-3 outline-none transition-all placeholder-brown-700 font-sans"
                  placeholder="Brand name"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brown-400 mb-2 group-focus-within:text-gold-500 transition-colors">Short Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-brown-700 focus:border-gold-500 text-cream-100 pb-3 outline-none transition-all resize-none placeholder-brown-700 font-sans"
                  placeholder="Describe your project briefly..."
                ></textarea>
              </div>

              <div className="pt-4">
                <a href={getMailtoLink()} className="block w-full">
                  <Button type="button" className="w-full bg-cream-100 text-brown-900 hover:bg-gold-500 hover:text-white font-bold tracking-widest border-none">
                    Open in Email <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer / Made with Love */}
        <div className="pt-8 border-t border-brown-800 flex justify-center w-full">
          <div className="flex justify-center items-center gap-1 font-sans text-xs tracking-widest text-brown-500 uppercase relative">
            <span>made with love by</span>
            <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="font-medium text-gold-500 hover:opacity-80 transition-opacity duration-300">solicate</a>
            <span>.</span>

            <div
              className="relative ml-1 cursor-pointer group"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <span className="flex items-center justify-center w-4 h-4 text-[10px] border border-brown-600 rounded-full hover:bg-gold-500 hover:text-brown-900 hover:border-gold-500 transition-colors">?</span>

              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 p-4 bg-cream-100 shadow-lg rounded-sm text-left border border-brown-200 transition-all duration-300 origin-bottom z-50 ${showTooltip ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <p className="normal-case text-brown-900 text-[11px] leading-relaxed tracking-normal font-sans">
                  This portfolio is designed, developed and maintained by <span className="font-medium text-gold-600">solicate</span>, a creative brand agency.
                </p>
                <div className="mt-2 text-[10px] normal-case tracking-wide opacity-80 font-sans text-brown-500">
                  For more details contact, <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-brown-800 transition-colors">solicate.in</a>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-cream-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};