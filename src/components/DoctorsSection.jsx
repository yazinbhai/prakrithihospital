import React from 'react';
import { UserCheck, Phone, Award, Shield } from 'lucide-react';
import { doctorsData } from '../data/siteData';

export default function DoctorsSection() {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Medical Roster
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Our Doctors & Specialists
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Preserving the qualified medical team from Prakrithi Nature Cure Hospital records.
          </p>
        </div>

        {/* Full-Time Doctors Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-emerald-950 font-bold text-lg border-b border-emerald-100 pb-2">
            <UserCheck className="w-5 h-5 text-emerald-700" />
            <span>Full-Time Medical Officers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorsData.fullTime.map((doc) => (
              <div
                key={doc.id}
                className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/80 shadow-soft hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {doc.image ? (
                    <div className="w-24 h-28 rounded-2xl overflow-hidden bg-emerald-100 border-2 border-emerald-200/80 shadow-xs shrink-0">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center font-bold text-xl shadow-xs">
                      {doc.name.replace('Dr. ', '').charAt(0)}
                    </div>
                  )}

                  <div>
                    <h3 className="font-extrabold text-lg text-emerald-950">{doc.name}</h3>
                    <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded mt-1">
                      {doc.qualification}
                    </span>
                  </div>

                  <p className="text-xs text-emerald-800 font-medium">
                    {doc.role} &bull; {doc.specialty}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-medium">Direct Contact</span>
                  <a
                    href={`tel:${doc.phone}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-forest hover:text-emerald-800 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{doc.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visiting Doctors Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 text-emerald-950 font-bold text-lg border-b border-emerald-100 pb-2">
            <Award className="w-5 h-5 text-emerald-700" />
            <span>Visiting Specialists & Consultants</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctorsData.visiting.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl p-4 border border-emerald-100 shadow-xs hover:shadow-sm transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">{doc.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {doc.qualification}
                    </span>
                    <span className="text-[11px] text-emerald-800/80">{doc.role}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-medium">Phone</span>
                  <a
                    href={`tel:${doc.phone}`}
                    className="font-bold text-forest hover:underline flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{doc.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
