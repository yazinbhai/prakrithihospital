import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhatWeOffer() {
  const highlights = [
    {
      id: "yoga",
      title: "Yoga & Mind Calm",
      quote: "Keep fit, rejuvenate your body and calm your mind",
      desc: "Therapeutic yoga sessions tailored to restore flexibility, physical alignment, and mental equilibrium.",
      icon: Activity,
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      id: "heart",
      title: "Heart Health",
      quote: "Live with a healthy heart and avoid heart attack",
      desc: "Natural cardiovascular care focusing on stress reduction, dietary balance, and non-invasive vitality therapies.",
      icon: Heart,
      color: "bg-rose-100 text-rose-800"
    },
    {
      id: "obesity",
      title: "Obesity & Weight Reduction",
      quote: "Welcome to the special weight reduction program",
      desc: "Comprehensive slimming protocol combining body constitution assessment, custom diet, mud therapy, and sun bath.",
      icon: Scale,
      color: "bg-amber-100 text-amber-800"
    },
    {
      id: "lifestyle",
      title: "B. P., Cholesterol & Diabetes",
      quote: "Naturopathy helps you recover from lifestyle diseases naturally",
      desc: "Natural drugless care helping patients reduce reliance on tablets through therapeutic fasting and hydrotherapy.",
      icon: ShieldCheck,
      color: "bg-teal-100 text-teal-800"
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-emerald-50/50 border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Key Care Areas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            What We Offer at Prakrithi
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Preserving our foundational focus areas in natural healthcare, lifestyle disease recovery, and drugless healing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-emerald-100/90 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="h-14 flex items-start">
                    <h3 className="font-bold text-lg text-emerald-950 group-hover:text-forest transition leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-emerald-900/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-emerald-100/60">
                  <Link
                    to="/hospital"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-forest hover:text-emerald-800 transition"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
