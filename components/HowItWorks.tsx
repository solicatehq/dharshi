import React from 'react';
import { Send, Clapperboard, Sparkles, Package } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <Send size={24} />,
            title: "Discovery",
            description: "We start with your vision. Through a brief detailed questionnaire, I understand your brand values, target audience, and campaign goals."
        },
        {
            icon: <Package size={24} />,
            title: "Product & Prep",
            description: "You ship the products. I create a detailed shot list and mood board to ensure every frame aligns with your aesthetic before filming begins."
        },
        {
            icon: <Clapperboard size={24} />,
            title: "Production",
            description: "Filming and editing happen with precision. I focus on natural lighting, high-quality textures, and engaging storytelling that hooks viewers."
        },
        {
            icon: <Sparkles size={24} />,
            title: "Delivery",
            description: "You receive the polished assets ready for review. I offer one round of refinements to ensure the final content is absolutely perfect."
        }
    ];

    return (
        <section id="process" className="py-24 bg-beige-200">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-stone-500 mb-4 block">The Process</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-800">Seamless Collaboration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-stone-300 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">

                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-beige-50 border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                                <span className="text-stone-600 group-hover:text-stone-900 transition-colors duration-300">
                                    {step.icon}
                                </span>
                            </div>

                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-1/4 transform translate-x-2 -translate-y-1 bg-stone-900 text-beige-100 text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center z-20">
                                {index + 1}
                            </div>

                            <h3 className="font-serif text-xl text-stone-800 mb-3">{step.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed font-sans max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="font-serif italic text-stone-600 text-lg">
                        "From concept to conversion, handled with care."
                    </p>
                </div>

            </div>
        </section>
    );
};
