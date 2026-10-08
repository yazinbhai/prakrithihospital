import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Track scroll position for header visual feedback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center space-x-2 text-emerald-200/90">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">{siteConfig.societyType}</strong> (Reg. No. {siteConfig.registrationNo}) &bull; Sophiya College Road, Perumbavoor
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-emerald-300/80 font-medium">20 Beds Facility &bull; {siteConfig.doctorsCount} Experienced Doctors</span>
            <a 
              href={`tel:${siteConfig.contact.primaryPhone}`} 
              className="flex items-center space-x-1 font-semibold text-emerald-300 hover:text-white transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation Bar */}
      <div 
        className={`w-full bg-white/95 backdrop-blur-md border-b border-emerald-100/80 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand Slot */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded-lg p-1"
            aria-label="Prakrithi Nature Cure Hospital Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-emerald-950 tracking-tight leading-none group-hover:text-emerald-800 transition">
                Prakrithi
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 tracking-wide uppercase mt-0.5">
                Nature cure Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-semibold text-sm transition-colors relative ${
                    isActive
                      ? 'text-emerald-950 bg-emerald-100/70 font-bold'
                      : 'text-emerald-900/80 hover:text-emerald-950 hover:bg-emerald-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center space-x-1.5">
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Action & Emergency Phone */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-emerald-900 text-white font-semibold text-sm shadow-sm transition-all hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="p-2 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition"
              aria-label="Call Hospital"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200/80 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition"
              aria-label="Open Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Render Mobile Navigation Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}
