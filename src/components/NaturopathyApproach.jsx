import React from 'react';
import { Sun, Wind, Droplets, Mountain, Sparkles, Utensils, HeartPulse, CheckCircle } from 'lucide-react';

export default function NaturopathyApproach() {
  const elements = [
    { name: "Sunlight", desc: "Helio-therapy & solar energy absorption", icon: Sun },
    { name: "Air", desc: "Pranayama & deep respiratory oxygenation", icon: Wind },
    { name: "Water", desc: "Hydrotherapy, spinal baths & cleansing packs", icon: Droplets },
    { name: "Earth", desc: "Mud baths & mineral pack applications", icon: Mountain },
    { name: "Cosmic Energies", desc: "Mindfulness, relaxation & spiritual balance", icon: Sparkles },
    { name: "Pure Organic Diet", desc: "Wholesome natural foods, raw juices & organic nutrition", icon: Utensils },
  ];

  return (
    <section className="py-14 lg:py-20 bg-forest text-white relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#74c69d_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-md border border-emerald-700/60">
              <HeartPulse className="w-4 h-4 text-emerald-300" />
              <span>Feel the Healing Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              The Nature Cure Philosophy: <br />
              <span className="text-emerald-300">Body is Self-Healing</span>
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Nature cure is based on the fundamental concept that the body possesses an inherent power to repair itself and recover spontaneously from illness when provided with a healthy, supportive environment.
            </p>

            <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed">
              Naturopathy is a lifestyle rather than a drug system of healing. It relies exclusively on natural remedies—sunlight, air, water, earth, cosmic energies, and pure organic diet—to provide holistic wellness across physical, mental, social, and spiritual dimensions without side effects.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Entirely drugless and safe treatment without side effects</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Comprehensive care for both body and mind in a homely atmosphere</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Restores innate immunity and metabolic vitality</span>
              </div>
            </div>
          </div>

          {/* Right Cards: 6 Elements of Nature Cure */}
          <div className="lg:col-span-6">
            <div className="bg-emerald-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-emerald-700/60 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>The 6 Natural Remedies</span>
                <span className="text-xs text-emerald-300 font-semibold uppercase">Prakrithi Core</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {elements.map((elem) => {
                  const IconComp = elem.icon;
                  return (
                    <div 
                      key={elem.name}
                      className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 flex items-start space-x-3 hover:border-emerald-500/60 transition"
                    >
                      <div className="p-2 rounded-xl bg-emerald-800/80 text-emerald-300 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{elem.name}</h4>
                        <p className="text-[11px] text-emerald-200/70 mt-0.5">{elem.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-800/40 border border-emerald-700/40 text-center text-xs text-emerald-200 font-medium">
                Combined with clinical Yoga, custom diet planning, and expert medical rounds.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
