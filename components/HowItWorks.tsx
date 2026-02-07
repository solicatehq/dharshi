import React from 'react';
import { Send, Clapperboard, Sparkles, Package, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <Send strokeWidth={1} size={32} />,
            title: "Discovery",
            description: "We align on your brand's vision, goals, and aesthetic requirements through a detailed consultation."
        },
        {
            icon: <Package strokeWidth={1} size={32} />,
            title: "Concept & Prep",
            description: "You ship the products while I curate a mood board and shot list tailored to your campaign objectives."
        },
        {
            icon: <Clapperboard strokeWidth={1} size={32} />,
            title: "Production",
            description: "Filming and editing with a focus on high-end lighting, textures, and storytelling that converts."
        },
        {
            icon: <Sparkles strokeWidth={1} size={32} />,
            title: "Delivery",
            description: "Receive polished, ready-to-post assets. Review and refine to ensure perfection."
        }
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
            {/* Decorative Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gold-400/20 -translate-y-1/2 hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-xs font-sans uppercase tracking-[0.3em] text-brown-500 mb-4 block">The Process</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-brown-900">Seamless Collaboration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Step Number Background */}
                            <div className="absolute -top-10 -left-6 text-9xl font-serif text-gold-400/10 z-0 select-none transition-colors group-hover:text-gold-400/20">
                                0{index + 1}
                            </div>

                            {/* Content Card */}
                            <div className="relative z-10 pt-12">
                                <div className="mb-6 text-brown-800 group-hover:text-gold-500 transition-colors duration-300">
                                    <div className="w-16 h-16 rounded-full border border-brown-200 flex items-center justify-center bg-cream-50 group-hover:border-gold-400 transition-all">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="font-serif text-2xl text-brown-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {step.title}
                                </h3>

                                <div className="w-8 h-px bg-gold-400 mb-4 group-hover:w-16 transition-all duration-500" />

                                <p className="text-brown-600/80 font-sans text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile Connector */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-8 top-28 bottom-[-48px] w-px bg-gold-400/30 md:hidden" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 text-brown-900 border-b border-brown-900 pb-1 text-sm uppercase tracking-widest hover:text-gold-500 hover:border-gold-500 transition-all">
                        Start Your Project <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
