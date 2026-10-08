import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import WhatWeOffer from '../components/WhatWeOffer';
import NaturopathyApproach from '../components/NaturopathyApproach';
import TreatmentsGrid from '../components/TreatmentsGrid';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteConfig } from '../data/siteData';

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-emerald-50/30">
      <SEO 
        title="Home"
        description="Prakrithi Nature Cure Hospital, Sophiya College Road, Perumbavoor, Kerala. Drugless naturopathy treatments, clinical yoga, and holistic healthcare."
      />

      <Header />

      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Introduction */}
        <Introduction />

        {/* What We Offer Highlights */}
        <WhatWeOffer />

        {/* Naturopathy Philosophy */}
        <NaturopathyApproach />

        {/* Featured Treatments */}
        <TreatmentsGrid 
          featuredIds={['yoga-meditation', 'weight-reduction', 'steam-bath', 'sun-bath', 'hydrotherapy', 'mud-wet-pack']} 
        />

        {/* Call to Action Section */}
        <section className="py-14 bg-gradient-to-r from-emerald-900 to-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Drugless Naturopathic Healthcare &bull; Perumbavoor, Kerala</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Have Questions About Our Treatments or Admission?
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our medical team is here to assist you with inquiries regarding in-patient 20-bed accommodation, custom diet plans, or clinical yoga programs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all hover:shadow-lg"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
