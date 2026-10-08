import React, { useState } from 'react';
import { Leaf, Activity, Heart, ShieldCheck, User } from 'lucide-react';

export default function ImagePlaceholder({ 
  src, 
  alt = 'Prakrithi Nature Cure Hospital', 
  className = '', 
  aspectRatio = 'aspect-video',
  category = 'nature',
  caption
}) {
  const [imageError, setImageError] = useState(false);

  const renderFallbackIcon = () => {
    switch (category) {
      case 'doctor':
        return <User className="w-12 h-12 text-emerald-800/60" />;
      case 'treatment':
        return <Activity className="w-12 h-12 text-emerald-800/60" />;
      case 'heart':
        return <Heart className="w-12 h-12 text-emerald-800/60" />;
      case 'hospital':
        return <ShieldCheck className="w-12 h-12 text-emerald-800/60" />;
      default:
        return <Leaf className="w-12 h-12 text-emerald-800/60" />;
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100/70 via-emerald-50 to-teal-50 border border-emerald-100 flex flex-col items-center justify-center text-center ${aspectRatio} ${className}`}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="p-6 flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm border border-emerald-200/60 flex items-center justify-center">
            {renderFallbackIcon()}
          </div>
          <p className="text-xs font-semibold text-emerald-950/80 tracking-wider uppercase">{alt}</p>
          <span className="text-[11px] text-emerald-700/70 font-medium">Prakrithi Nature Cure Hospital</span>
        </div>
      )}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 bg-emerald-950/70 backdrop-blur-xs text-white p-2 text-xs text-center font-medium">
          {caption}
        </div>
      )}
    </div>
  );
}
