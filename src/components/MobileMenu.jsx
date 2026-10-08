import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Calendar, Heart, Shield, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-950/60 backdrop-blur-xs z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto md:hidden border-l border-emerald-100"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div>
              <div className="p-5 flex items-center justify-between border-b border-emerald-100 bg-emerald-50/50">
                <img 
                  src="/logo_final.png" 
                  alt="Prakrithi Nature Cure Hospital" 
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-5 space-y-2">
                {siteConfig.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-base transition-all ${
                        isActive
                          ? 'bg-emerald-900 text-white shadow-md'
                          : 'text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-emerald-300" />}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Notice snippet */}
              <div className="mx-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100/80 text-xs text-emerald-800 space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-emerald-900">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>Non-Profit Charitable Society</span>
                </div>
                <p>Reg. No. {siteConfig.registrationNo} | 20 Beds & {siteConfig.doctorsCount} Experienced Doctors</p>
              </div>
            </div>

            {/* Quick Actions & Contact Footer */}
            <div className="p-5 border-t border-emerald-100 bg-emerald-50/40 space-y-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-forest text-white font-semibold shadow-sm hover:bg-emerald-900 transition text-sm"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="pt-2 border-t border-emerald-200/50 space-y-2 text-xs text-emerald-900">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-emerald-100/60 transition"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span className="font-semibold">{siteConfig.contact.primaryPhone}</span>
                </a>
                <div className="flex items-start space-x-2 p-2 text-emerald-800">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Sophiya College Road, Perumbavoor, Kerala 683542</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
