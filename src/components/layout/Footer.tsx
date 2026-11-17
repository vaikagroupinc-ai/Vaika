'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import {
  HQ_REGION,
  CLIENT_MARKET_REGIONS,
  getInitialRegionalClockMap,
  getLiveRegionalClockMap,
} from '@/lib/globalRegions';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vijay-kumar-090581380',
    label: 'LinkedIn // Vijay Kumar',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vaikaglobal?psln=Z3FhcHZ1c28zYTh1',
    label: 'Instagram // @vaikaglobal',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1CP3T77qoM/',
    label: 'Facebook // VAIKA GROUP',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [times, setTimes] = useState<Record<string, string>>(getInitialRegionalClockMap);

  useEffect(() => {
    const updateClocks = () => {
      setTimes(getLiveRegionalClockMap());
    };
    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 6000);
      setEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050507] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/vaika-logo-sm.webp"
                width={28}
                height={28}
                alt="VAIKA GROUP Logo"
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-[#d4af37] transition-colors">
                VAIKA GROUP
              </span>
            </Link>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              Sovereign creative technology, luxury real estate cinematography, real-time spatial synthesis, and neural computational architectures.
            </p>
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-['Space_Grotesk'] text-[10px] text-[#9ba1b3] uppercase tracking-widest">
                SYSTEM STATUS
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-xs text-[#f5f6fa]">ALL DIVISIONS OPERATIONAL</span>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-['Space_Grotesk'] text-[10px] text-[#9ba1b3] uppercase tracking-widest">
                OFFICIAL CHANNELS
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.name}
                    className="w-8 h-8 rounded-lg bg-[#12131a] hover:bg-[#1c1d27] border border-white/10 hover:border-[#d4af37]/60 text-[#9ba1b3] hover:text-[#d4af37] flex items-center justify-center transition-all shadow-md group cursor-pointer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Global Telemetry */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#f5f6fa] uppercase tracking-wider">
              GLOBAL TELEMETRY
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-[#9ba1b3]">
              <div className="flex justify-between items-center py-1.5 border-b border-[#d4af37]/30">
                <span className="text-[#f5f6fa] font-semibold">{HQ_REGION.label}</span>
                <span className="text-[#d4af37] font-semibold">{times[HQ_REGION.id]}</span>
              </div>
              <span className="font-mono text-[10px] text-[#9ba1b3]/80 uppercase tracking-widest pt-1.5">
                CLIENT MARKETS
              </span>
              {CLIENT_MARKET_REGIONS.map((region, idx) => (
                <div
                  key={region.id}
                  className={`flex justify-between items-center py-1 ${
                    idx < CLIENT_MARKET_REGIONS.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <span className="text-[#f5f6fa]">{region.label}</span>
                  <span>{times[region.id]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Expedition Protocols */}
          <div className="flex flex-col gap-4">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#f5f6fa] uppercase tracking-wider">
              PRIMARY DIVISIONS
            </span>
            <ul className="flex flex-col space-y-2 font-['Manrope'] text-sm text-[#9ba1b3]">
              <li>
                <Link href="/services/real-estate" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>01 // Real Estate Media & Visualization</span>
                </Link>
              </li>
              <li>
                <Link href="/services/agent-services" className="hover:text-[#e1e2e6] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1e2e6]" />
                  <span>02 // Agent Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/data-ai" className="hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span>03 // Data & AI Core</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  <span>04 // Digital Marketing & Creative</span>
                </Link>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="hover:text-[#d4af37] font-semibold transition-colors cursor-pointer text-left">
                  05 // Commission Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Dispatch Frequency */}
          <div className="flex flex-col gap-4">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#f5f6fa] uppercase tracking-wider">
              DISPATCH FREQUENCY
            </span>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3]">
              Receive confidential briefings on spatial computing releases and autonomous production suites.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="NODE@CREDENTIAL"
                required
                className="w-full bg-[#12131a] px-3 py-2 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#20222d] hover:bg-[#2b2e3c] text-[#f5f6fa] font-mono text-xs uppercase rounded transition-colors"
              >
                JOIN
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d4af37] animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>NODE REGISTERED • BRIEFINGS ACTIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span>© {new Date().getFullYear()} VAIKA GROUP HOLDINGS. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Official Social Media Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.name}
                className="w-7 h-7 rounded bg-[#12131a] hover:bg-[#1e202a] border border-white/10 hover:border-[#d4af37]/50 text-[#9ba1b3] hover:text-[#d4af37] flex items-center justify-center transition-all shadow-sm group cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider">
            <Link href="/services/real-estate" className="hover:text-[#d4af37] transition-colors">
              REAL ESTATE
            </Link>
            <Link href="/services/agent-services" className="hover:text-[#e1e2e6] transition-colors">
              AGENT SERVICES
            </Link>
            <Link href="/services/data-ai" className="hover:text-[#8b5cf6] transition-colors">
              DATA & AI CORE
            </Link>
            <Link href="/services/digital-marketing" className="hover:text-[#00f0ff] transition-colors">
              DIGITAL MARKETING
            </Link>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Zero-retention cryptographic privacy protocol.'); }} className="hover:text-white transition-colors">
              PRIVACY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
