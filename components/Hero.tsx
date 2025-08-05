
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen bg-gradient-to-br from-blue-900 to-purple-900" />;
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 z-5"></div>
      
      {/* Spline 3D Model - Main Content */}
      <div 
        className={`relative z-10 h-full w-full transition-all duration-2000 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <iframe 
          src='https://my.spline.design/interactiveaiwebsite-H3UPmJ1WanbexFixHSPjXpJ0/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 w-full h-full"
          title="Interactive AI Website"
          style={{ border: 'none', pointerEvents: 'auto' }}
        />
      </div>

      {/* Light Spots for depth */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse z-20"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-300 rounded-full opacity-80 animate-pulse z-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse z-20" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse z-20" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-200 rounded-full opacity-50 animate-pulse z-20" style={{ animationDelay: '2.5s' }}></div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 z-15 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 z-15 pointer-events-none"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-30">
        <div className="animate-bounce">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-down-line text-2xl text-white/80 drop-shadow-lg"></i>
          </div>
          <p className="text-sm text-white/80 mt-2 drop-shadow-lg">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
