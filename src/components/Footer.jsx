import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, MapPin, MessageCircle, Shield, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-emerald-900/80">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center text-center">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo_final.png" 
                alt="Prakrithi Nature Cure Hospital" 
                className="h-12 sm:h-14 w-auto object-contain bg-white/95 p-2 rounded-xl shadow-sm group-hover:scale-105 transition-transform"
              />
            </Link>
            
            <p className="text-emerald-200/90 text-xs sm:text-sm italic font-medium leading-relaxed max-w-sm">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>

            <div className="inline-flex items-center justify-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-900/80 border border-emerald-800 text-xs text-emerald-300">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Non-Profit Charitable Society Reg. No. {siteConfig.registrationNo}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-emerald-200">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors flex items-center space-x-2 text-xs sm:text-sm group"
                  >
                    <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Hospital Address</h3>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.contact.address.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.primaryPhone}`} 
                  className="hover:text-white font-semibold transition-colors text-emerald-100"
                >
                  {siteConfig.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Actions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Connect</h3>
            <div className="space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-emerald-800"
              >
                <span>Make Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.hospitalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-[11px] text-emerald-400/60 max-w-md">
            Drugless naturopathic care and clinical yoga in Perumbavoor, Kerala.
          </p>
        </div>

      </div>
    </footer>
  );
}
