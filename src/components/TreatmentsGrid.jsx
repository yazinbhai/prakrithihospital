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
                className={`bg-emerald-50/40 rounded-2xl p-6 border border-emerald-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 group ${specialGridClass}`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <IconComp className="w-6 h-6 text-emerald-300" />
                  </div>

                  <div className="h-14 flex items-start">
                    <h3 className="font-bold text-base text-emerald-950 group-hover:text-forest transition leading-snug">
                      {t.title}
                    </h3>
                  </div>

                  <div className="h-16 flex items-start">
                    <p className="text-xs text-emerald-900/80 leading-relaxed font-normal">
                      {t.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 text-[11px] text-emerald-700 font-semibold border-t border-emerald-200/60">
                  {t.fullDesc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
