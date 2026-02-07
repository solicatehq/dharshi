import React from 'react';

export const MoodBoard: React.FC = () => {
    // Grid Setup: 3 columns, 2 rows (6 cells total)
    // 1. luxeai1: 1x1 (Top Left)
    // 2. luxeai2: 1x1 (Top Middle)
    // 3. luxeai3: 1x2 (Right Column, spans both rows)
    // 4. luxeai4: 2x1 (Bottom Left, spans first two columns)
    const images = [
        { src: '/iascent.jpeg', alt: 'Example of commercial product photography', span: 'col-span-1 row-span-1' },
        { src: '/luxe-perfume-oudh.png', alt: 'Luxury product composition', span: 'col-span-1 row-span-1' },
        { src: '/luxeai3.jpeg', alt: 'Architecture detail', span: 'col-span-1 row-span-2' },
        { src: '/luxeai4.jpeg', alt: 'Lifestyle composition', span: 'col-span-2 row-span-1' },
    ];

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <span className="text-xs font-sans uppercase tracking-[0.2em] text-stone-400 mb-4 block">Mood & Aesthetic</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                            Visual <span className="italic text-stone-600">Poetry</span>
                        </h2>
                    </div>
                    <p className="text-stone-500 font-sans text-sm tracking-wide mt-6 md:mt-0 max-w-xs">
                        A curated collection of textures, tones, and visual moments that define the Luxe aesthetic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[120vh] md:h-[800px]">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden group ${img.span} h-full w-full`}
                        >
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
