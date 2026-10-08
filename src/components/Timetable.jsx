import React, { useState } from 'react';
import { 
  Clock, Sunrise, Coffee, Heart, Sun, Utensils, Stethoscope, 
  Droplets, GlassWater, Activity, Footprints, Brain, Moon, Users, BookOpen 
} from 'lucide-react';
import { dailyTimetable } from '../data/siteData';

const iconComponents = {
  Sunrise,
  Coffee,
  Heart,
  Sun,
  Utensils,
  Stethoscope,
  Droplets,
  GlassWater,
  Activity,
  Footprints,
  Brain,
  Moon,
  Users,
  BookOpen
};

export default function Timetable() {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Therapy', 'Nutrition', 'Exercise', 'Mindfulness', 'Medical'];

  const filteredTimetable = filterCategory === 'All' 
    ? dailyTimetable 
    : dailyTimetable.filter(item => item.category === filterCategory);

  return (
    <section className="py-14 lg:py-20 bg-emerald-50/50 border-b border-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            In-Patient Schedule
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Our Daily Timetable
          </h2>
          <p className="text-emerald-900/80 text-sm sm:text-base">
            Preserving the authentic daily healing routine followed at Prakrithi Nature Cure Hospital.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-white text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop View: Responsive Multi-Column Table Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          
          {/* Column 1: Morning (5:00 AM - 10:00 AM) */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-soft space-y-4">
            <h3 className="font-extrabold text-base text-emerald-950 pb-3 border-b border-emerald-100 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Sunrise className="w-5 h-5 text-amber-500" />
                <span>Morning Session</span>
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">05:00 - 10:00 AM</span>
            </h3>

            <div className="space-y-3">
              {filteredTimetable.slice(0, 6).map((item) => {
                const IconComp = iconComponents[item.icon] || Clock;
                return (
                  <div key={item.time} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/70 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-950 block">{item.time}</span>
                      <span className="text-xs text-emerald-800 font-medium">{item.activity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Midday & Afternoon (11:00 AM - 04:30 PM) */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-soft space-y-4">
            <h3 className="font-extrabold text-base text-emerald-950 pb-3 border-b border-emerald-100 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-emerald-600" />
                <span>Midday & Afternoon</span>
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">11:00 AM - 04:30 PM</span>
            </h3>

            <div className="space-y-3">
              {filteredTimetable.slice(6, 11).map((item) => {
                const IconComp = iconComponents[item.icon] || Clock;
                return (
                  <div key={item.time} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/70 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-950 block">{item.time}</span>
                      <span className="text-xs text-emerald-800 font-medium">{item.activity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Evening & Night (05:40 PM - 10:00 PM) */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-soft space-y-4">
            <h3 className="font-extrabold text-base text-emerald-950 pb-3 border-b border-emerald-100 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Moon className="w-5 h-5 text-indigo-600" />
                <span>Evening & Night</span>
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">05:40 - 10:00 PM</span>
            </h3>

            <div className="space-y-3">
              {filteredTimetable.slice(11).map((item) => {
                const IconComp = iconComponents[item.icon] || Clock;
                return (
                  <div key={item.time} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/70 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-950 block">{item.time}</span>
                      <span className="text-xs text-emerald-800 font-medium">{item.activity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mobile View: Vertical Timeline Card Stack */}
        <div className="lg:hidden space-y-3">
          {filteredTimetable.map((item) => {
            const IconComp = iconComponents[item.icon] || Clock;
            return (
              <div 
                key={item.time}
                className="bg-white p-4 rounded-xl border border-emerald-100/90 shadow-xs flex items-center justify-between space-x-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-950 block">{item.time}</span>
                    <span className="text-xs text-emerald-800 font-medium">{item.activity}</span>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded shrink-0">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
