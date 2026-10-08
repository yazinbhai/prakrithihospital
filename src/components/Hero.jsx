import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Waves, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/40 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-emerald-100/60">
      
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Non-Profit Charitable Society Reg. No. {siteConfig.registrationNo}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight leading-tight sm:leading-tight">
              Natural Healing. <br className="hidden sm:inline" />
              <span className="text-forest underline decoration-emerald-300 decoration-wavy decoration-2">
                Thoughtful Care.
              </span>
            </h1>

            {/* Subtext derived strictly from legacy site */}
            <p className="text-base sm:text-lg text-emerald-900/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Prakrithi Nature Cure Hospital is a drugless healthcare center situated on Sophiya College Road in Perumbavoor. We combine traditional Naturopathy, clinical Yoga, and personalized lifestyle recovery in a simple, compassionate 20-bed facility.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-forest hover:bg-emerald-900 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/hospital"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 border border-emerald-200/90 font-semibold text-base shadow-xs hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <span>Explore Our Hospital</span>
              </Link>
            </div>

            {/* Verified Facts Bullet List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-emerald-900/90 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>20 In-patient bed capacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{siteConfig.doctorsCount} Experienced naturopaths & doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Sophiya College Road, Perumbavoor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Special weight reduction program</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card Stack */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-emerald-900">
                <img
                  src="/assets/photo.jpg"
                  alt="Prakrithi Hospital Building at Sophiya College Road, Perumbavoor"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    // Fallback to placeholder styling if image missing
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Container */}
                <div className="hidden w-full h-80 sm:h-96 bg-gradient-to-br from-emerald-800 to-emerald-950 p-8 flex-col items-center justify-center text-center text-white space-y-4">
                  <Waves className="w-16 h-16 text-emerald-300" />
                  <h2 className="text-xl font-bold">Prakrithi Nature Cure Hospital</h2>
                  <p className="text-xs text-emerald-200">Sophiya College Road, Perumbavoor</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
