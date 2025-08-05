
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/30 shadow-lg shadow-cyan-400/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className={`text-2xl font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
            scrolled 
              ? 'text-cyan-400 hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
              : 'text-white hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
          }`}
        >
          Gibran.
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Projects', 'Certificates', 'Gallery', 'Contact'].map((item, index) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative px-4 py-2 rounded-lg transition-all duration-1300 whitespace-nowrap group cursor-pointer ${
                scrolled 
                  ? 'text-cyan-100 hover:text-cyan-300 hover:bg-cyan-400/10' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="relative z-10">{item}</span>
              <div className={`absolute inset-0 rounded-lg transition-all duration-1300 opacity-0 group-hover:opacity-100 ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30' 
                  : 'bg-gradient-to-r from-white/10 to-white/20 border border-white/30'
              }`}></div>
              <div className={`absolute inset-0 rounded-lg transition-all duration-1300 opacity-0 group-hover:opacity-20 ${
                scrolled 
                  ? 'shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                  : 'shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              }`}></div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-1300 md:hidden ${
            scrolled 
              ? 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10' 
              : 'text-white hover:text-cyan-300 hover:bg-white/10'
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <i className={`text-xl transition-transform duration-1300 ${
              isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </div>
        </button>

        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl transition-all duration-1300 md:hidden ${
            scrolled 
              ? 'bg-black/90 backdrop-blur-xl border border-cyan-400/30' 
              : 'bg-black/80 backdrop-blur-xl border border-white/30'
          }`}>
            <div className="p-4 space-y-2">
              {['About', 'Projects', 'Certificates', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 rounded-lg text-cyan-100 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-1300 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
