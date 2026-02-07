import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase mb-4 block">Feedback</span>
        <h2 className="font-display text-3xl md:text-4xl text-brown-900">Client Love</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 z-10 bg-gradient-to-r from-cream-50 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 z-10 bg-gradient-to-l from-cream-50 to-transparent"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">

          {/* Set 1 */}
          <div className="flex flex-shrink-0 px-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-[300px] md:w-[400px] bg-white p-6 md:p-8 border border-brown-900/5 mx-4 flex-shrink-0 select-none rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-beige-100 rounded-full flex items-center justify-center border border-gold-500/20">
                      <span className="text-xs font-bold text-brown-800">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brown-900 uppercase tracking-wider">{t.author}</p>
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest">{t.platform}</p>
                    </div>
                  </div>
                  <MessageCircle size={16} className="text-brown-200" />
                </div>
                <p className="text-brown-800/80 font-sans text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Set 2 (Duplicate for loop) */}
          <div className="flex flex-shrink-0 px-4">
            {TESTIMONIALS.map((t) => (
              <div key={`${t.id}-duplicate`} className="w-[300px] md:w-[400px] bg-white p-6 md:p-8 border border-brown-900/5 mx-4 flex-shrink-0 select-none rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-beige-100 rounded-full flex items-center justify-center border border-gold-500/20">
                      <span className="text-xs font-bold text-brown-800">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brown-900 uppercase tracking-wider">{t.author}</p>
                      <p className="text-[10px] text-gold-500 uppercase tracking-widest">{t.platform}</p>
                    </div>
                  </div>
                  <MessageCircle size={16} className="text-brown-200" />
                </div>
                <p className="text-brown-800/80 font-sans text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
