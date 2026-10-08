import React from 'react';
import { ShieldCheck, MapPin, Building, HeartHandshake, Award } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Introduction() {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Overview */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-md">
              <Building className="w-4 h-4 text-emerald-700" />
              <span>About Prakrithi Hospital</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight leading-snug">
              Welcome to <span className="text-forest">Prakrithi Nature Cure Hospital</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-900/80 leading-relaxed">
              Prakrithi Hospital is a non-profitable charitable society (<span className="font-semibold text-emerald-950">Reg. No. {siteConfig.registrationNo}</span>) dedicated to the promotion of drugless naturopathy treatment and clinical yoga. 
            </p>

            <p className="text-sm sm:text-base text-emerald-800/90 leading-relaxed">
              Beautifully located in Sophiya College Inn on Sophiya College Road in Perumbavoor, our hospital features an in-patient accommodation capacity of 20 beds and a compassionate team of {siteConfig.doctorsCount} experienced doctors and naturopathic specialists.
            </p>

            {/* Quick Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start space-x-3">
                <HeartHandshake className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-emerald-950">Charitable Society</h3>
                  <p className="text-xs text-emerald-800">Operating strictly as a non-profit registered under ER/779/08.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-emerald-950">Perumbavoor Campus</h3>
                  <p className="text-xs text-emerald-800">Peaceful setting on Sophiya College Road near Kochi Airport & Ernakulam.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Facility Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white pb-3 border-b border-emerald-800/80 flex items-center justify-between">
                <span>Hospital Overview</span>
                <Award className="w-5 h-5 text-emerald-400" />
              </h3>

              <ul className="space-y-4 text-sm text-emerald-100">
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">Institution Type</span>
                  <span className="font-semibold text-right">Non-Profit Society</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">Registration No</span>
                  <span className="font-semibold text-right">{siteConfig.registrationNo}</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">In-Patient Capacity</span>
                  <span className="font-semibold text-right">20 Beds</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">Medical Roster</span>
                  <span className="font-semibold text-right">{siteConfig.doctorsCount} Experienced Doctors</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">Primary Focus</span>
                  <span className="font-semibold text-right">Naturopathy & Yoga</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-emerald-300 font-medium">Location</span>
                  <span className="font-semibold text-right">Perumbavoor, Kerala</span>
                </li>
              </ul>

              <div className="pt-2 text-xs text-emerald-300/80 italic border-t border-emerald-800/80">
                Providing accessible, drugless healthcare without side effects.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
