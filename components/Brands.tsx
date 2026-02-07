import React from 'react';
import { BRANDS } from '../constants';

export const Brands: React.FC = () => {
    const domestic = BRANDS.filter(b => b.type === 'Domestic');
    const international = BRANDS.filter(b => b.type === 'International');

    return (
        <section id="brands" className="py-24 bg-beige-200 border-y border-stone-100">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl text-stone-800">Brands I've Worked With</h2>
                </div>

                <div className="mb-12">
                    <h3 className="text-center text-xs font-sans uppercase tracking-[0.2em] text-stone-400 mb-8">National Brands</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70">
                        {domestic.map((brand) => (
                            <div key={brand.name} className="text-center group">
                                <span className="font-serif text-xl md:text-2xl text-stone-400 group-hover:text-stone-800 transition-colors cursor-default">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-24 h-px bg-stone-200 mx-auto my-12"></div>

                <div>
                    <h3 className="text-center text-xs font-sans uppercase tracking-[0.2em] text-stone-400 mb-8">International Collaborations</h3>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-70">
                        {international.map((brand) => (
                            <div key={brand.name} className="text-center group">
                                <span className="font-serif text-xl md:text-2xl text-stone-400 group-hover:text-stone-800 transition-colors cursor-default">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
