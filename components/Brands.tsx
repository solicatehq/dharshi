import React from 'react';
import { BRANDS } from '../constants';

export const Brands: React.FC = () => {
    // Combine all brands for the marquee
    const allBrands = [...BRANDS, ...BRANDS]; // Duplicate for seamless scrolling

    return (
        <section id="brands" className="py-24 bg-brown-900 overflow-hidden border-y border-gold-500/10">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <span className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase opacity-80">Trusted By</span>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brown-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brown-900 to-transparent z-10" />

                <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
                    {allBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="flex items-center mx-8 md:mx-12 shrink-0 group cursor-default"
                        >
                            <span className="text-3xl md:text-5xl font-display text-brown-800/40 group-hover:text-gold-400 transition-colors duration-500 whitespace-nowrap">
                                {brand.name}
                            </span>
                            <span className="ml-16 md:ml-24 w-2 h-2 rounded-full bg-brown-800/20 group-hover:bg-gold-500/50 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
