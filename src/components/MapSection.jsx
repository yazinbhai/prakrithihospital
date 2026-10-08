import React from 'react';
import { MapPin, Navigation, Train, Plane, Compass, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function MapSection() {
  const mapEmbedUrl = siteConfig.contact.googleMapsEmbedUrl;
  const mapsDirectionsUrl = siteConfig.contact.googleMapsUrl;

  return (
    <section className="py-14 lg:py-20 bg-emerald-50/40 border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Find Our Location
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Hospital Location & Directions
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Situated on Sophiya College Road, Perumbavoor, Keralam 683542.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Directions & Access Highlights */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-soft flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center space-x-2 pb-3 border-b border-emerald-100">
                <Navigation className="w-5 h-5 text-emerald-700" />
                <span>How to Reach Us</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-emerald-900">
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">Hospital Address</h4>
                    <p className="text-emerald-800 text-xs mt-0.5">{siteConfig.contact.address.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Train className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">By Rail</h4>
                    <p className="text-emerald-800 text-xs mt-0.5">Conveniently connected via Aluva / Angamaly Railway Stations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Plane className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">By Air</h4>
                    <p className="text-emerald-800 text-xs mt-0.5">Cochin International Airport (COK), Nedumbassery (~15 km).</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Compass className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">Local Landmark</h4>
                    <p className="text-emerald-800 text-xs mt-0.5">Located on Sophiya College Road near Sophiya College Inn, Perumbavoor.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-forest hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800">
                <span className="font-bold text-emerald-950 block mb-1">In-Patient & Visitor Transport:</span>
                Direct bus and taxi connectivity available from Perumbavoor KSRTC bus station and town center.
              </div>
            </div>

          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-soft min-h-[380px] relative flex flex-col">
            <iframe
              title="Prakrithi Natural Life Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl grow"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
