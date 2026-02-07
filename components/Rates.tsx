import React from 'react';
import { RATES } from '../constants';
import { Check } from 'lucide-react';

export const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase mb-4 block">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-4">Packages</h2>
          <p className="text-brown-800/60 max-w-md mx-auto font-sans">Transparent pricing for clear expectations. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RATES.map((rate, index) => (
            <div
              key={index}
              className={`
                relative p-8 md:p-10 transition-all duration-300 rounded-sm
                ${rate.isHighlight
                  ? 'bg-white shadow-xl scale-100 md:scale-105 z-10 border border-gold-500/20'
                  : 'bg-beige-100/50 border border-brown-900/5 text-brown-800'}
              `}
            >
              {rate.isHighlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brown-900 text-cream-50 text-[10px] uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-2xl mb-2 text-brown-900">{rate.title}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-light font-sans text-brown-900">{rate.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {rate.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-brown-800/80">
                    <Check className="w-4 h-4 mr-3 mt-1 text-gold-500 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {rate.isHighlight && (
                <div className="text-center mt-auto">
                  <p className="text-xs text-brown-800/40 italic">Deliverables within 5-7 days</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brown-800 border border-brown-900/10 inline-block py-4 px-8 bg-white/50 backdrop-blur-sm rounded-sm text-sm">
            For bundle packages and custom requirements, please <a href="#contact" className="underline underline-offset-4 decoration-gold-500 hover:text-gold-500 transition-colors">contact directly</a>.
          </p>
        </div>

      </div>
    </section>
  );
};
