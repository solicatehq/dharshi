import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, Instagram, ArrowUpRight, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    brand: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Collab Inquiry: ${formState.brand || 'New Brand'}`);
    const body = encodeURIComponent(`Hi Priyadharshika,\n\nMy name is ${formState.name}.\n\n${formState.message}\n\nBest,\n${formState.name}`);
    return `mailto:dharshiugc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="bg-brown-900 text-cream-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-24">

          {/* Text Side */}
          <div>
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-6 block">Get in Touch</span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] text-white">
              Let's Create <br />
              <span className="italic text-gold-500 font-light">Magic.</span>
            </h2>
            <p className="text-cream-100/60 font-sans text-lg mb-12 max-w-md font-light leading-relaxed">
              Accepting select collaborations for the upcoming season. Elevate your brand with authentic storytelling.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:dharshiugc@gmail.com" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-gold-500/50 transition-colors">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brown-400 mb-1">Email Content</span>
                  <span className="text-2xl font-serif italic text-cream-100 group-hover:text-gold-400 transition-colors">dharshiugc@gmail.com</span>
                </div>
                <ArrowUpRight className="text-brown-500 group-hover:text-gold-500 transition-colors" />
              </a>

              <a href="https://www.instagram.com/dharshiugc/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-gold-500/50 transition-colors">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brown-400 mb-1">Follow On</span>
                  <span className="text-2xl font-serif italic text-cream-100 group-hover:text-gold-400 transition-colors">Instagram</span>
                </div>
                <ArrowUpRight className="text-brown-500 group-hover:text-gold-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:pt-20">
            <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-brown-300 text-xs font-sans uppercase tracking-widest">Available for new projects</p>
              </div>

              <div className="space-y-8">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    value={formState.name}
                    onChange={handleChange}
                    className="block w-full bg-transparent border-b border-white/20 text-cream-50 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-shown:border-white/20 peer"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-brown-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Your Name</label>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    placeholder=" "
                    value={formState.brand}
                    onChange={handleChange}
                    className="block w-full bg-transparent border-b border-white/20 text-cream-50 py-3 focus:outline-none focus:border-gold-500 transition-colors peer"
                  />
                  <label htmlFor="brand" className="absolute left-0 top-3 text-brown-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Brand Name</label>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    className="block w-full bg-transparent border-b border-white/20 text-cream-50 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none peer"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-brown-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">Tell us about your project</label>
                </div>

                <div className="pt-6">
                  <a href={getMailtoLink()} className="block w-full">
                    <Button type="button" className="w-full !bg-cream-100 !text-brown-900 hover:!bg-gold-500 hover:!text-white py-4 text-sm tracking-[0.2em] font-medium border-none rounded-sm transition-all duration-500">
                      SEND INQUIRY
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-sans uppercase tracking-widest text-brown-400">
            © 2024 Priyadharshika. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1 font-sans text-[10px] tracking-widest text-brown-400 uppercase">
            <span>Design by</span>
            <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-cream-100 transition-colors font-medium">Solicate</a>
          </div>
        </div>
      </div>
    </footer>
  );
};