import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      aria-label="Contact Prakrithi Nature Cure Hospital on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />
      <span className="hidden sm:inline-block font-bold text-xs sm:text-sm tracking-wide">
        WhatsApp Us
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
      </span>
    </a>
  );
}
