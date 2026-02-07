import React from 'react';
import { Send, Clapperboard, Sparkles, Package } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <Send size={24} />,
            title: "Discovery",
            description: "We start with your vision. Through a brief questionnaire, I understand your brand values and campaign goals."
        },
        {
            icon: <Package size={24} />,
            title: "Product & Prep",
            description: "You ship the products. I create a detailed mood board to ensure every frame aligns with your aesthetic."
        },
        {
            icon: <Clapperboard size={24} />,
            title: "Production",
            description: "Filming and editing happen with precision. I focus on natural lighting, high-quality textures, and engaging storytelling."
        },
        {
            icon: <Sparkles size={24} />,
            title: "Delivery",
            description: "You receive polished assets ready for review. I offer one round of refinements to ensure the content is perfect."
        }
    ];

    return (
        <section id="process" className="py-24 bg-cream-100">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold-500 mb-4 block">The Process</span>
                    <h2 className="font-display text-4xl md:text-5xl text-brown-900">Seamless Collaboration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gold-400/30 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">

                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-white border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10 group-hover:border-gold-500/50">
                                <span className="text-brown-400 group-hover:text-gold-500 transition-colors duration-300">
                                    {step.icon}
                                </span>
                            </div>

                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-1/4 transform translate-x-2 -translate-y-1 bg-brown-900 text-cream-50 text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center z-20 border border-cream-50">
                                {index + 1}
                            </div>

                            <h3 className="font-display text-xl text-brown-900 mb-3">{step.title}</h3>
                            <p className="text-brown-800/70 text-sm leading-relaxed font-sans max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="font-serif italic text-brown-800/60 text-lg">
                        "From concept to conversion, handled with care."
                    </p>
                </div>

            </div>
        </section>
    );
};
