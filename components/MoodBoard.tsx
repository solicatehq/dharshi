import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MoodBoard: React.FC = () => {
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2574&auto=format&fit=crop', // Friends/Creators together
            title: 'Creator Community',
            category: 'Collaboration',
            span: 'md:col-span-4 md:row-span-2'
        },
        {
            src: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=2000&auto=format&fit=crop', // Skincare texture macro
            title: 'Texture & Detail',
            category: 'Product Focus',
            span: 'md:col-span-4 md:row-span-1'
        },
        {
            src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2674&auto=format&fit=crop', // Fashion/Shopping shot
            title: 'Lifestyle Aesthetics',
            category: 'Fashion',
            span: 'md:col-span-4 md:row-span-3'
        },
        {
            src: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2000&auto=format&fit=crop', // Hand holding phone
            title: 'POV Consumption',
            category: 'Digital Life',
            span: 'md:col-span-8 md:row-span-2'
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-stone-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-px w-12 bg-brown-900/20" />
                            <span className="text-xs font-sans uppercase tracking-[0.3em] text-brown-500 font-medium">Aesthetic Direction</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl text-brown-900 leading-[0.9]">
                            Visual <span className="italic font-light text-brown-600">Poetry</span>
                        </h2>
                    </div>
                    <p className="text-brown-500 font-sans text-sm tracking-wide mt-6 md:mt-0 max-w-xs text-right hidden md:block">
                        Curated textures and tones defining the new standard of digital elegance.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative group overflow-hidden ${img.span} rounded-sm`}
                        >
                            <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/20 transition-colors duration-500 z-10" />

                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />

                            {/* Hover Overlay Content */}
                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="self-end bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                                    <ArrowUpRight className="text-white w-5 h-5" />
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    <p className="text-xs font-sans text-white/80 uppercase tracking-widest mb-2">{img.category}</p>
                                    <h3 className="text-3xl font-serif text-white italic">{img.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-12 text-center md:hidden">
                    <a href="#portfolio" className="inline-block border-b border-brown-900 text-brown-900 text-xs uppercase tracking-widest pb-1">
                        View All Works
                    </a>
                </div>
            </div>
        </section>
    );
};
