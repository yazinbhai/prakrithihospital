import React from 'react';
import { Scale, Activity, Flame, Utensils, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WeightReductionSection() {
  const steps = [
    {
      title: "Body Constitution Analysis",
      desc: "Our specialists assess your unique body constitution, metabolic rate, and underlying causes of excess weight."
    },
    {
      title: "Custom Dietary Plan",
      desc: "A powerful, tailor-made natural diet plan teaching basic rules of wholesome nutrition and digestive rest."
    },
    {
      title: "Special Exercises & Yoga",
      desc: "Targeted posture routines and metabolic exercise sessions to burn fat safely without strain."
    },
    {
      title: "Hydro, Steam & Mud Treatments",
      desc: "Mud bath, steam bath, sun bath, and wet pack applications to stimulate metabolic breakdown and detoxify tissues."
    }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-800/60 px-3 py-1 rounded-md border border-emerald-700/50">
                <Scale className="w-4 h-4 text-emerald-300" />
                <span>Specialized Slimming Protocol</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Special Weight Reduction Program
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                We offer a comprehensive slimming program combining therapeutic yoga, targeted exercise, mud bath, steam bath, sun bath, wet pack, and customized diet therapy.
              </p>

              <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed">
                Our specialists evaluate your body constitution and metabolism before prescribing a tailored diet plan. This program guides you toward a healthy lifestyle transformation and instills fundamental dietary discipline naturally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {steps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-emerald-900/60 border border-emerald-700/50 space-y-1">
                    <h3 className="font-bold text-sm text-emerald-200 flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-extrabold">
                        {idx + 1}
                      </span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-[11px] text-emerald-300/80 pl-7">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-md transition-all hover:shadow-lg"
                >
                  <span>Inquire About Weight Reduction</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                <h3 className="font-bold text-lg text-white border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Program Features</span>
                  <Flame className="w-5 h-5 text-emerald-400" />
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-emerald-100">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>No artificial slimming drugs, pills, or starvation</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Focuses on underlying metabolic constitution</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Combines mud bath, steam bath, wet pack & sun bath therapy</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Includes specialized slimming yoga & exercises</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Monitored by experienced naturopathic doctors</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
