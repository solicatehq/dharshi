import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-beige-200 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="font-serif text-3xl text-stone-800">Client Love</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">

          {/* Set 1 */}
          <div className="flex flex-shrink-0 px-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-[300px] md:w-[400px] bg-beige-50 p-6 md:p-8 border border-white/60 mx-4 flex-shrink-0 select-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-stone-500">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-800">{t.author}</p>
                      <p className="text-[10px] text-stone-400 uppercase tracking-wide">{t.platform}</p>
                    </div>
                  </div>
                  <MessageCircle size={16} className="text-stone-300" />
                </div>
                <p className="text-stone-600 font-sans text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Set 2 (Duplicate for loop) */}
          <div className="flex flex-shrink-0 px-4">
            {TESTIMONIALS.map((t) => (
              <div key={`${t.id}-duplicate`} className="w-[300px] md:w-[400px] bg-beige-50 p-6 md:p-8 border border-white/60 mx-4 flex-shrink-0 select-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-stone-500">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-800">{t.author}</p>
                      <p className="text-[10px] text-stone-400 uppercase tracking-wide">{t.platform}</p>
                    </div>
                  </div>
                  <MessageCircle size={16} className="text-stone-300" />
                </div>
                <p className="text-stone-600 font-sans text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
