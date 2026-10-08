import React, { useState } from 'react';
import { Stethoscope, Check, Search, ShieldCheck } from 'lucide-react';
import { ailmentsList } from '../data/siteData';

export default function AilmentsGrid() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAilments = ailmentsList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-14 lg:py-20 bg-emerald-50/40 border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Conditions We Manage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Ailments Treated
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Preserving the exact ailments treated at Prakrithi Nature Cure Hospital as per official records.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search ailments (e.g. Diabetes, Asthma, Joint Pain)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-emerald-200 bg-white text-emerald-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-xs"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredAilments.map((item) => (
            <div
              key={item.name}
              className="bg-white p-4 rounded-2xl border border-emerald-100/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex items-center space-x-3.5 group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-white transition-colors">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm sm:text-base text-emerald-950 truncate group-hover:text-forest transition-colors">
                  {item.name}
                </h3>
                <span className="inline-block text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 border border-emerald-100/80 px-2 py-0.5 rounded-md mt-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredAilments.length === 0 && (
          <div className="text-center py-8 text-sm text-emerald-800">
            No ailments found matching &ldquo;{searchTerm}&rdquo;. Please clear search or contact doctor directly.
          </div>
        )}

      </div>
    </section>
  );
}
