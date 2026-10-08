import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Introduction from '../components/Introduction';
import WeightReductionSection from '../components/WeightReductionSection';
import NaturopathyApproach from '../components/NaturopathyApproach';
import TreatmentsGrid from '../components/TreatmentsGrid';
import Timetable from '../components/Timetable';
import AilmentsGrid from '../components/AilmentsGrid';
import DoctorsSection from '../components/DoctorsSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteConfig } from '../data/siteData';
import { Shield, Sparkles, Building2, Waves } from 'lucide-react';

export default function Hospital() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50/30">
      <SEO 
        title="Hospital & Treatments"
        description="Detailed information about Prakrithi Nature Cure Hospital, weight reduction program, daily timetable, treatments, ailments treated, and medical roster."
      />

      <Header />

      <main className="grow">
        {/* Hospital Page Hero */}
        <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-forest text-white py-14 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold">
              <Building2 className="w-4 h-4 text-emerald-300" />
              <span>Hospital Overview & Care Programs</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About Prakrithi Nature Cure Hospital
            </h1>

            <p className="text-emerald-200/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-medium text-emerald-300">
              <span className="bg-emerald-800/80 px-3 py-1 rounded-md border border-emerald-700/60">
                Non-Profit Society Reg. {siteConfig.registrationNo}
              </span>
              <span className="bg-emerald-800/80 px-3 py-1 rounded-md border border-emerald-700/60">
                20 Bed Facility
              </span>
              <span className="bg-emerald-800/80 px-3 py-1 rounded-md border border-emerald-700/60">
                {siteConfig.doctorsCount} Experienced Doctors
              </span>
            </div>

          </div>
        </section>

        {/* Hospital Detailed Overview */}
        <Introduction />

        {/* Weight Reduction Slimming Program */}
        <WeightReductionSection />

        {/* Philosophy & Healing Touch */}
        <NaturopathyApproach />

        {/* Complete Treatments Grid */}
        <TreatmentsGrid />

        {/* Responsive Daily Timetable */}
        <Timetable />

        {/* Ailments Treated */}
        <AilmentsGrid />

        {/* Doctors Roster */}
        <DoctorsSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
