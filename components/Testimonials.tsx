import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brown-900 text-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
          <Quote size={400} />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 relative z-10">
          <div className="max-w-xl">
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
              Client <span className="italic text-gold-500">Perspectives</span>
            </h2>
          </div>
          <p className="hidden md:block text-cream-100/60 font-sans text-sm tracking-wide max-w-xs text-right">
            Real results from partnerships built on trust and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relatie z-10">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <div
              key={t.id}
              className="bg-brown-800/30 backdrop-blur-sm border border-gold-500/10 p-10 md:p-12 rounded-sm relative group hover:bg-brown-800/50 transition-colors duration-500"
            >
              <div className="absolute top-10 left-10 text-gold-500/20">
                <Quote size={48} className="transform scale-x-[-1]" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-8 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <p className="font-serif text-xl md:text-2xl leading-relaxed text-cream-100 mb-10 opacity-90">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-gold-500/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 font-serif text-xl">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white">{t.author}</h4>
                    <p className="text-xs text-gold-500/80 mt-1 uppercase tracking-wider">{t.platform}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
