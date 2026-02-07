import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

        {/* Text Side */}
        <div className="md:col-span-6 order-2 md:order-1">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold-500 mb-6 block">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-8 leading-tight">
            Curating moments of <br /> <span className="italic text-brown-800/70">everyday luxury.</span>
          </h2>
          <div className="space-y-6 text-brown-800 font-sans leading-relaxed text-base md:text-lg font-light">
            <p>
              Hi, I'm Priyadharshika. I sit at the intersection of authenticity and aspiration. In a digital landscape filled with noise, I create quiet, confident content that captures attention without shouting.
            </p>
            <p>
              My philosophy is simple: content should feel like a discovery, not an ad. I specialize in translating brand aesthetics into "luxe" UGC—videos that are polished yet relatable, premium yet attainable.
            </p>
            <p>
              Whether it's the texture of a skincare serum or the ambiance of a lifestyle moment, I focus on the details that make your brand feel valuable.
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="md:col-span-6 order-1 md:order-2 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Decorative frames */}
            <div className="absolute inset-0 border border-gold-400/30 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-stone-100 overflow-hidden">
              <img
                // Professional woman in neutral blazer/chic attire
                src="/luxeai2.jpeg"
                alt="Priyadharshika"
                className="object-cover w-full h-full opacity-95 grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};