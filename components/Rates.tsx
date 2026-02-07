import React from 'react';
import { RATES } from '../constants';
import { Check } from 'lucide-react';

export const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-800 mb-4">Investment</h2>
          <p className="text-stone-500 max-w-md mx-auto">Transparent pricing for clear expectations. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RATES.map((rate, index) => (
            <div
              key={index}
              className={`
                relative p-8 md:p-10 transition-all duration-300
                ${rate.isHighlight
                  ? 'bg-white shadow-xl scale-100 md:scale-105 z-10 border border-stone-100'
                  : 'bg-beige-100 border border-beige-300 text-stone-600'}
              `}
            >
              {rate.isHighlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-stone-800 text-beige-100 text-[10px] uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-serif text-2xl mb-2">{rate.title}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-light font-sans">{rate.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {rate.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className="w-4 h-4 mr-3 mt-1 text-stone-400 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {rate.isHighlight && (
                <div className="text-center mt-auto">
                  <p className="text-xs text-stone-400 italic">Deliverables within 5-7 days</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 border border-stone-300 inline-block py-4 px-8 bg-beige-100/50 backdrop-blur-sm">
            For bundle packages and custom requirements, please <a href="#contact" className="underline underline-offset-4 decoration-stone-400 hover:text-stone-900 transition-colors">contact directly</a>.
          </p>
        </div>

      </div>
    </section>
  );
};
