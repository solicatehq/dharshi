import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-cream-50 overflow-hidden">

      {/* Background Typography */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-display text-brown-900 leading-none whitespace-nowrap">
          AUTHENTICITY & GRACE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Image Composition */}
          <div className="md:col-span-5 relative">
            <div className="relative z-10">
              <div className="w-[85%] aspect-[3/4] overflow-hidden rounded-t-[10rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
                  alt="UGC Creator"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-6 shadow-xl max-w-[200px] hidden md:block border-l-4 border-gold-400">
                <p className="font-serif italic text-brown-900 text-sm leading-relaxed">
                  "Content that whispers elegance but screams value."
                </p>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-brown-900/5 rounded-t-[10rem] -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50" />
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 md:pl-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-brown-900/20" />
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-brown-500 font-medium">About The Creator</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-brown-900 mb-10 leading-[1.1]">
              Curating moments of <br />
              <span className="italic text-gold-500 font-light">everyday luxury.</span>
            </h2>

            <div className="space-y-8 text-brown-800/80 font-sans leading-loose text-lg font-light">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-gold-400">H</span>
                i, I'm Priyadharshika. I sit at the intersection of authenticity and aspiration. In a digital landscape filled with noise, I create quiet, confident content that captures attention without shouting.
              </p>
              <p>
                My philosophy is simple: content should feel like a discovery, not an ad. I specialize in translating brand aesthetics into "luxe" UGC—videos that are polished yet relatable, premium yet attainable.
              </p>

              <div className="flex gap-12 pt-8 border-t border-brown-900/10">
                <div>
                  <h4 className="font-display text-4xl text-brown-900 mb-1">3+</h4>
                  <p className="text-xs uppercase tracking-widest text-brown-500">Years Exp</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl text-brown-900 mb-1">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-brown-500">Dedication</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};