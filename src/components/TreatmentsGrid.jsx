import React from 'react';
import { 
  Activity, Scale, Droplets, Sparkles, Sun, Eye, Zap, Utensils, Cloud, HeartPulse
} from 'lucide-react';
import { treatmentsData } from '../data/siteData';

const iconMap = {
  Activity,
  Scale,
  Droplets,
  Sparkles,
  Sun,
  Eye,
  Zap,
  Utensils,
  Cloud
};

export default function TreatmentsGrid({ limit, featuredIds }) {
  let displayedTreatments = treatmentsData;

  if (featuredIds && Array.isArray(featuredIds)) {
    displayedTreatments = featuredIds
      .map((id) => treatmentsData.find((t) => t.id === id))
      .filter(Boolean);
  } else if (limit) {
    displayedTreatments = treatmentsData.slice(0, limit);
  }

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Nature Cure Therapies
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Our Treatment Methods
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Safe, drugless naturopathic remedies designed to detoxify the body and restore natural health.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTreatments.map((t, idx) => {
            const IconComp = iconMap[t.icon] || HeartPulse;
            const isFifthInSixGrid = displayedTreatments.length === 6 && idx === 4;
            const isNinthInNineGrid = displayedTreatments.length === 9 && idx === 8;

            let specialGridClass = '';
            if (isFifthInSixGrid) {
              specialGridClass = 'lg:col-start-2';
            } else if (isNinthInNineGrid) {
              specialGridClass = 'lg:col-start-2 lg:col-span-2 max-w-sm w-full mx-auto sm:col-span-2 sm:col-start-1 md:col-start-2';
            }

            return (
              <div 
                key={t.id}
                className={`bg-[#f2faf5] rounded-3xl p-6 sm:p-7 border border-[#d6f0e0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 group ${specialGridClass}`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Dark Green Rounded Icon */}
                  <div className="w-[52px] h-[52px] rounded-2xl bg-[#0a3828] text-emerald-400 flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title Container - fixed height alignment across cards */}
                  <div className="min-h-[56px] flex items-start mb-3">
                    <h3 className="font-bold text-lg text-emerald-950 group-hover:text-forest transition-colors leading-snug tracking-tight">
                      {t.title}
                    </h3>
                  </div>

                  {/* Short Description Container - fixed height alignment */}
                  <div className="min-h-[72px] flex items-start mb-4">
                    <p className="text-xs sm:text-[13px] text-emerald-800/80 leading-relaxed font-normal">
                      {t.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Horizontal Divider Line & Full Description aligned at bottom */}
                <div className="mt-auto pt-5 border-t border-emerald-200/60 min-h-[96px] flex items-start">
                  <p className="text-[12px] text-emerald-800 font-medium leading-relaxed">
                    {t.fullDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
