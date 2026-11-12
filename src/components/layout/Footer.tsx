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
                src="/vaika-logo.png"
                width={28}
                height={28}
                alt="VAIKA GROUP Logo"
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-105"
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
                className="w-full bg-[#12131a] px-3 py-2 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-[#d4af37]"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span>© {new Date().getFullYear()} VAIKA GROUP HOLDINGS. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">{'//'} CODE V4.9</span>
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
