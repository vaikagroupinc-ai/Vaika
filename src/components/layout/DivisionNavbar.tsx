'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import { DivisionKey } from '@/types';
import { CountryLanguageSelector } from '@/components/international/CountryLanguageSelector';

interface DivisionNavbarProps {
  division: DivisionKey;
  activeSection?: string;
}

export function DivisionNavbar({ division }: DivisionNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Normalize division key for aliases
  const normalizedDivision: 'estate' | 'agent' | 'data-ai' | 'digital-marketing' =
    division === 'studio' ? 'agent' : division === 'ai' ? 'data-ai' : (division as 'estate' | 'agent' | 'data-ai' | 'digital-marketing');

  const configMap = {
    estate: {
      name: 'REAL ESTATE MEDIA',
      color: '#d4af37',
      tag: '01 // REAL ESTATE',
      ctaText: 'DISCUSS YOUR PROJECT',
      route: '/services/real-estate',
      links: [
        { label: 'OVERVIEW', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SERVICES', href: '#services' },
        { label: 'WORKFLOW', href: '#workflow' },
        { label: 'PORTFOLIO', href: '#portfolio' },
        { label: 'INQUIRE', href: '#contact' },
      ],
    },
    agent: {
      name: 'AGENT SERVICES',
      color: '#e1e2e6',
      tag: '02 // AGENT SERVICES',
      ctaText: 'START A PROJECT',
      route: '/services/agent-services',
      links: [
        { label: 'OVERVIEW', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SERVICES', href: '#services' },
        { label: 'WORKFLOW', href: '#workflow' },
        { label: 'SOLUTIONS', href: '#portfolio' },
        { label: 'ONBOARD', href: '#contact' },
      ],
    },
    'data-ai': {
      name: 'DATA & AI CORE',
      color: '#8b5cf6',
      tag: '03 // DATA & AI CORE',
      ctaText: 'CALIBRATE DATA OPS',
      route: '/services/data-ai',
      links: [
        { label: 'CORE', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SERVICES', href: '#services' },
        { label: 'PIPELINE', href: '#workflow' },
        { label: 'BENCHMARKS', href: '#portfolio' },
        { label: 'ENGAGE', href: '#contact' },
      ],
    },
    'digital-marketing': {
      name: 'DIGITAL MARKETING',
      color: '#00f0ff',
      tag: '04 // MARKETING & CREATIVE',
      ctaText: 'BUILD YOUR SYSTEM',
      route: '/services/digital-marketing',
      links: [
        { label: 'OVERVIEW', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'SERVICES', href: '#services' },
        { label: 'PROCESS', href: '#workflow' },
        { label: 'SHOWCASE', href: '#portfolio' },
        { label: 'DISCUSS', href: '#contact' },
      ],
    },
  };

  const config = configMap[normalizedDivision] || configMap.estate;

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const divisionLinks = [
    { key: 'estate', label: 'REAL ESTATE', color: '#d4af37', route: '/services/real-estate' },
    { key: 'agent', label: 'AGENT SERVICES', color: '#e1e2e6', route: '/services/agent-services' },
    { key: 'data-ai', label: 'DATA & AI', color: '#8b5cf6', route: '/services/data-ai' },
    { key: 'digital-marketing', label: 'DIGITAL MARKETING', color: '#00f0ff', route: '/services/digital-marketing' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050507]/92 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_1px_16px_rgba(0,0,0,0.6)]'
            : 'bg-[#050507]/60 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Brand & Division Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
              title="Return to Vaika Group Home"
            >
              <Image
                src="/vaika-logo.png"
                width={32}
                height={32}
                alt="VAIKA GROUP Logo"
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />

              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-base font-bold tracking-tight text-[#f5f6fa] uppercase leading-none">
                  VAIKA
                </span>
                <span className="font-mono text-[9px] text-[#9ba1b3] uppercase tracking-[0.25em] leading-tight">
                  GROUP
                </span>
              </div>
            </Link>

            {/* Division Switcher Pills (Desktop) */}
            <div className="hidden xl:flex items-center gap-1 pl-3 border-l border-white/10 shrink-0">
              {divisionLinks.map((div) => {
                const isActive = normalizedDivision === div.key;
                return (
                  <Link
                    key={div.key}
                    href={div.route}
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded font-mono text-[10px] whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-[#1a1c24] border-white/30 font-bold'
                        : 'bg-[#12131a] text-[#9ba1b3] hover:text-white border-white/5'
                    }`}
                    style={{
                      color: isActive ? div.color : undefined,
                      borderColor: isActive ? `${div.color}60` : undefined,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: div.color }}
                    />
                    {div.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* In-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
            {config.links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-2.5 py-1.5 rounded font-mono text-[11px] uppercase tracking-wider whitespace-nowrap text-[#9ba1b3] hover:text-[#f5f6fa] hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <CountryLanguageSelector compact align="right" />

            <button
              onClick={() => scrollTo('#contact')}
              style={{ borderColor: `${config.color}50` }}
              className="relative hidden sm:inline-flex items-center justify-center px-3 py-2 rounded bg-[#161720] text-[#f5f6fa] font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap hover:bg-[#20222d] transition-all border shadow-[0_0_20px_-4px_rgba(0,0,0,0.5)] group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: config.color }}
                />
                <span>{config.ctaText}</span>
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="division-mobile-nav-menu"
              className="lg:hidden w-9 h-9 rounded bg-[#161720] border border-white/10 flex items-center justify-center text-[#f5f6fa] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#d4af37]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="division-mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Division Navigation Menu"
          className="fixed inset-0 z-30 bg-[#050507]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 border-b border-white/10 lg:hidden overflow-y-auto max-h-[100dvh] animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-3 rounded bg-[#12131a] border border-white/10 text-xs font-mono text-[#d4af37]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← RETURN TO VAIKA GROUP HOME</span>
            </Link>

            <div className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest">
              {'// PAGE DIRECTORY'}
            </div>
            <nav className="flex flex-col space-y-1.5">
              {config.links.map((link, idx) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2.5 rounded bg-[#12131a] font-['Space_Grotesk'] text-sm uppercase text-[#f5f6fa] hover:bg-[#1e1f26] transition-colors flex items-center justify-between border border-white/5 active:scale-[0.99]"
                >
                  <span>
                    0{idx + 1} {'//'} {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1b3]" />
                </button>
              ))}
            </nav>

            <div className="pt-2 font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest">
              EXPLORE OTHER DIVISIONS
            </div>
            <div className="grid grid-cols-2 gap-2">
              {divisionLinks.map((div) => (
                <Link
                  key={div.key}
                  href={div.route}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded text-center font-mono text-xs border ${
                    normalizedDivision === div.key
                      ? 'bg-[#1e1f26] font-bold border-white/40'
                      : 'bg-[#12131a] text-[#9ba1b3] border-white/10'
                  }`}
                  style={{
                    color: normalizedDivision === div.key ? div.color : undefined,
                    borderColor: normalizedDivision === div.key ? div.color : undefined,
                  }}
                >
                  {div.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-white/10">
            <button
              onClick={() => scrollTo('#contact')}
              style={{ backgroundColor: config.color }}
              className="w-full py-3.5 rounded text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:brightness-110 transition-all cursor-pointer"
            >
              <span>{config.ctaText}</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
