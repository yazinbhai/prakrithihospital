import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import DoctorsSection from '../components/DoctorsSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteConfig } from '../data/siteData';
import { Phone, MapPin, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-emerald-50/30">
      <SEO 
        title="Contact Us & Enquiry"
        description="Contact Prakrithi Nature Cure Hospital in Perumbavoor, Kerala. Phone: +91-9995006118. Sophiya College Road, Perumbavoor, Keralam 683542."
      />

      <Header />

      <main className="grow">
        
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-forest text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-md">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact & Enquiries
            </h1>
            <p className="text-emerald-200/90 text-sm sm:text-base max-w-xl mx-auto">
              Prakrithi Nature Cure Hospital &bull; Sophiya College Road, Perumbavoor, Keralam 683542
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-14 lg:py-20 bg-white border-b border-emerald-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left Column: Direct Contact Info (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div>
                  <h2 className="text-2xl font-extrabold text-emerald-950 tracking-tight">
                    Hospital Reach & Contact
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                    Reach out to our medical administrative desk directly or visit our peaceful Perumbavoor facility.
                  </p>
                </div>

                {/* Primary Contact Card */}
                <div className="bg-emerald-50/70 rounded-2xl p-6 border border-emerald-100 space-y-4">
                  
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-forest text-white shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-emerald-950">Hospital Address</h3>
                      <p className="text-xs text-emerald-800/90 leading-relaxed mt-0.5">
                        {siteConfig.contact.address.fullAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-2 border-t border-emerald-200/60">
                    <div className="p-2.5 rounded-xl bg-forest text-white shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-emerald-950">Direct Phone Contact</h3>
                      <a href={`tel:${siteConfig.contact.primaryPhone}`} className="text-xs font-bold text-forest hover:underline block mt-0.5">
                        {siteConfig.contact.primaryPhone} (CMO Office)
                      </a>
                      <div className="text-[11px] text-emerald-800 mt-1 space-y-0.5">
                        {siteConfig.contact.secondaryPhones.map(ph => (
                          <div key={ph}>Phone: {ph}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-2 border-t border-emerald-200/60">
                    <div className="p-2.5 rounded-xl bg-forest text-white shrink-0 mt-0.5">
                      <MessageCircle className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-emerald-950">WhatsApp Quick Chat</h3>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-0.5"
                      >
                        <span>Chat directly with hospital desk &rsaquo;</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Additional Info Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Non-Profit Charitable Society</span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    Registration No: <strong className="text-white">{siteConfig.registrationNo}</strong>. Located at Sophiya College Road, Perumbavoor, Keralam 683542.
                  </p>
                </div>

              </div>

              {/* Right Column: Contact Form Component (7 Cols) */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* Doctors Section on Contact Page */}
        <DoctorsSection />

        {/* Google Maps Section */}
        <MapSection />

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
