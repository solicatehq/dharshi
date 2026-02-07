import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const Rates: React.FC = () => {
  const packages = [
    {
      title: 'Essential',
      price: '₹15,000',
      description: 'Perfect for testing new product launches.',
      features: ['1 High-Quality UGC Video', 'Hook Variations (x2)', 'Script & Concept', '30-Day Usage Rights'],
      highlight: false
    },
    {
      title: 'Growth',
      price: '₹40,000',
      description: 'Designed to scale your ad account.',
      features: ['3 High-Quality UGC Videos', 'Hook Variations (x6)', 'Script & Strategy', '90-Day Usage Rights', 'Raw Files Included'],
      highlight: true
    },
    {
      title: 'Scale',
      price: '₹75,000',
      description: 'Complete monthly content solution.',
      features: ['6 High-Quality UGC Videos', 'Hook Variations (x12)', 'Monthly Strategy Call', 'Perpetual Usage Rights', 'Priority Support'],
      highlight: false
    }
  ];

  return (
    <section id="rates" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Investment</span>
          <h2 className="font-serif text-5xl md:text-6xl text-brown-900 mb-6">Content Packages</h2>
          <p className="text-brown-500 font-sans max-w-lg mx-auto leading-relaxed">
            Transparent pricing designed for brands ready to scale. No hidden fees, just high-converting assets.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`
                relative p-10 transition-all duration-500 rounded-sm
                ${pkg.highlight
                  ? 'bg-brown-900 text-cream-50 shadow-2xl scale-105 z-10'
                  : 'bg-white text-brown-900 shadow-sm hover:shadow-lg border border-brown-100'}
              `}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold-500 text-white text-[10px] uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-serif text-3xl mb-2 ${pkg.highlight ? 'text-white' : 'text-brown-900'}`}>{pkg.title}</h3>
                <p className={`text-sm opacity-70 ${pkg.highlight ? 'text-cream-200' : 'text-brown-500'}`}>{pkg.description}</p>
              </div>

              <div className="flex items-baseline mb-8 border-b border-opacity-10 pb-8 border-current">
                <span className="text-5xl font-serif font-light">{pkg.price}</span>
              </div>

              <ul className="space-y-5 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm group">
                    <Check className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${pkg.highlight ? 'text-gold-400' : 'text-gold-600'}`} />
                    <span className="opacity-90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`
                w-full py-4 px-6 text-xs uppercase tracking-[0.2em] transition-colors border
                ${pkg.highlight
                  ? 'bg-gold-500 border-gold-500 text-white hover:bg-gold-600'
                  : 'bg-transparent border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white'}
              `}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-brown-500 hover:text-brown-900 transition-colors text-sm border-b border-brown-300 pb-1">
            Looking for a custom package? Let's talk <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};
