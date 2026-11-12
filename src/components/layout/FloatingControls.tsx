'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronDown } from 'lucide-react';

export function FloatingControls() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-30 flex flex-col items-center gap-2 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        title="Back to top"
        className="w-10 h-10 rounded-full bg-[#161720]/90 hover:bg-[#20222d] text-[#f5f6fa] border border-white/10 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <button
        onClick={scrollToServices}
        title="Explore Divisions"
        className="w-10 h-10 rounded-full bg-[#161720]/90 hover:bg-[#20222d] text-[#f5f6fa] border border-white/10 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 hover:border-[#00f0ff] hover:text-[#00f0ff]"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
