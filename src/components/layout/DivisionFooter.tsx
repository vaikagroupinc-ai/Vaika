'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { DivisionKey } from '@/types';
import {
  HQ_REGION,
  CLIENT_MARKET_REGIONS,
  getInitialRegionalClockMap,
  getLiveRegionalClockMap,
} from '@/lib/globalRegions';

interface DivisionFooterProps {
  division: DivisionKey;
}

export function DivisionFooter({ division }: DivisionFooterProps) {
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

  const normalizedDivision: 'estate' | 'agent' | 'data-ai' | 'digital-marketing' =
    division === 'studio' ? 'agent' : division === 'ai' ? 'data-ai' : (division as 'estate' | 'agent' | 'data-ai' | 'digital-marketing');

  const metaMap = {
    estate: {
      title: 'REAL ESTATE MEDIA & VISUALIZATION',
      color: '#d4af37',
      desc: 'Premium real estate media production, architectural photography, 3D floor plans, renders, and property marketing solutions.',
      route: '/services/real-estate',
    },
    agent: {
      title: 'AGENT SERVICES',
      color: '#e1e2e6',
      desc: 'Operational backbone for real estate professionals: listing promotion ads, lead funnels, transaction coordination, and CRM support.',
      route: '/services/agent-services',
    },
    'data-ai': {
      title: 'DATA & AI CORE',
      color: '#8b5cf6',
      desc: 'Human-powered data operations, multimodal annotation, geospatial mapping, and high-volume back-office data processing.',
      route: '/services/data-ai',
    },
    'digital-marketing': {
      title: 'DIGITAL MARKETING & CREATIVE',
      color: '#00f0ff',
      desc: 'Integrated digital growth, paid acquisition across Meta & Google, brand systems, Next.js web development, and video editing.',
      route: '/services/digital-marketing',
    },
  };

  const meta = metaMap[normalizedDivision] || metaMap.estate;

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
          {/* Column 1: Brand & Back Link */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: meta.color }}
              />
              <span className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#f5f6fa] tracking-tight">
                {meta.title}
              </span>
            </div>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {meta.desc}
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#9ba1b3] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>RETURN TO VAIKA GROUP HUB</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Regional Clocks */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#f5f6fa] uppercase tracking-wider">
              GLOBAL TELEMETRY
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-[#9ba1b3]">
              <div
                className="flex justify-between items-center py-1.5 border-b"
                style={{ borderColor: `${meta.color}45` }}
              >
                <span className="text-[#f5f6fa] font-semibold">{HQ_REGION.label}</span>
                <span style={{ color: meta.color }} className="font-semibold">
                  {times[HQ_REGION.id]}
                </span>
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

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#f5f6fa] uppercase tracking-wider">
              QUICK PROTOCOLS
            </span>
            <ul className="flex flex-col space-y-2 font-['Manrope'] text-sm text-[#9ba1b3]">
              <li>
                <button onClick={() => scrollTo('#hero')} className="hover:text-white transition-colors cursor-pointer">
                  Overview & Hero
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors cursor-pointer">
                  About the Division
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Service Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#workflow')} className="hover:text-white transition-colors cursor-pointer">
                  Standard Workflow
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  Showcase Demonstrations
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} style={{ color: meta.color }} className="font-semibold transition-colors cursor-pointer">
                  Inquire / Start Project
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
              Receive confidential briefings and production insights directly from our directors.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="w-full bg-[#12131a] px-3 py-2 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#20222d] hover:bg-[#2b2e3c] text-[#f5f6fa] font-mono text-xs uppercase rounded transition-colors cursor-pointer"
              >
                JOIN
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d4af37]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CONFIRMED • ACCESS GRANTED</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span>© {new Date().getFullYear()} VAIKA GROUP. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">{'// ENTERPRISE OPS'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              HUB
            </Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
