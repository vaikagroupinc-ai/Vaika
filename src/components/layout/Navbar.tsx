'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { DivisionKey } from '@/types';
import { CountryLanguageSelector } from '@/components/international/CountryLanguageSelector';

interface NavbarProps {
  onOpenDivisionDrawer?: (division: DivisionKey) => void;
  activeSection?: string;
}

export function Navbar({ activeSection }: NavbarProps) {
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

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'WORK', href: '#portfolio', id: 'portfolio' },
    { label: 'STUDIO', href: '#founder-studio', id: 'founder-studio' },
    { label: 'TEAM', href: '#team', id: 'team' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="site-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#050507]/75 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-[#050507]/40 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo & Division Direct Links */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero');
              }}
              className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
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
                <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-[#f5f6fa] uppercase leading-none">
                  VAIKA
                </span>
                <span className="font-mono text-[9px] text-[#9ba1b3] uppercase tracking-[0.25em] leading-tight">
                  GROUP
                </span>
              </div>
            </a>

            {/* Division Direct Access Links (Desktop) */}
            <div className="hidden xl:flex items-center gap-1 pl-3 border-l border-white/10 shrink-0">
              <Link
                href="/services/real-estate"
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#12131a] font-mono text-[10px] whitespace-nowrap text-[#9ba1b3] hover:text-[#d4af37] hover:bg-[#1a1c24] transition-all border border-white/5 hover:border-[#d4af37]/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse shrink-0" />
                REAL ESTATE
              </Link>
              <Link
                href="/services/agent-services"
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#12131a] font-mono text-[10px] whitespace-nowrap text-[#9ba1b3] hover:text-[#e1e2e6] hover:bg-[#1a1c24] transition-all border border-white/5 hover:border-[#e1e2e6]/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e1e2e6] shrink-0" />
                AGENT SERVICES
              </Link>
              <Link
                href="/services/data-ai"
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#12131a] font-mono text-[10px] whitespace-nowrap text-[#9ba1b3] hover:text-[#8b5cf6] hover:bg-[#1a1c24] transition-all border border-white/5 hover:border-[#8b5cf6]/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                DATA &amp; AI
              </Link>
              <Link
                href="/services/digital-marketing"
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#12131a] font-mono text-[10px] whitespace-nowrap text-[#9ba1b3] hover:text-[#00f0ff] hover:bg-[#1a1c24] transition-all border border-white/5 hover:border-[#00f0ff]/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shrink-0" />
                DIGITAL MARKETING
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`px-2 py-1.5 rounded font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#20222d] text-[#f5f6fa] shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'text-[#9ba1b3] hover:text-[#f5f6fa] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <CountryLanguageSelector compact align="right" />

            <button
              onClick={() => scrollTo('#contact')}
              className="relative hidden sm:inline-flex items-center justify-center px-3 py-2 rounded bg-[#161720] text-[#f5f6fa] font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap hover:bg-[#20222d] transition-all border border-white/10 hover:border-[#d4af37]/50 shadow-[0_0_20px_-4px_rgba(212,175,55,0.2)] group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span>START A PROJECT</span>
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="lg:hidden w-9 h-9 rounded bg-[#161720] border border-white/10 flex items-center justify-center text-[#f5f6fa] hover:text-[#d4af37] transition-colors focus-visible:outline-2 focus-visible:outline-[#d4af37]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-30 bg-[#050507]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 border-b border-white/10 lg:hidden overflow-y-auto max-h-[100dvh] animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-['Space_Grotesk'] text-[11px] text-[#d4af37] uppercase tracking-widest font-semibold">
                {'//'} PRIMARY PROTOCOLS
              </span>
              <span className="font-mono text-[10px] text-[#9ba1b3]">PRESS ESC TO CLOSE</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 rounded bg-[#12131a] font-['Space_Grotesk'] text-base uppercase text-[#f5f6fa] hover:bg-[#1e1f26] transition-colors flex items-center justify-between border border-white/5 active:scale-[0.99]"
                >
                  <span>
                    0{idx} {'//'} {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1b3]" />
                </button>
              ))}
            </nav>

            <div className="pt-2 font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest">
              DIRECT ACCESS TO DIVISIONS
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/services/real-estate"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#12131a] text-center font-mono text-xs text-[#d4af37] border border-[#d4af37]/30 hover:bg-[#1e1f26] transition-colors"
              >
                REAL ESTATE
              </Link>
              <Link
                href="/services/agent-services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#12131a] text-center font-mono text-xs text-[#e1e2e6] border border-[#e1e2e6]/30 hover:bg-[#1e1f26] transition-colors"
              >
                AGENT SERVICES
              </Link>
              <Link
                href="/services/data-ai"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#12131a] text-center font-mono text-xs text-[#8b5cf6] border border-[#8b5cf6]/30 hover:bg-[#1e1f26] transition-colors"
              >
                DATA & AI CORE
              </Link>
              <Link
                href="/services/digital-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#12131a] text-center font-mono text-xs text-[#00f0ff] border border-[#00f0ff]/30 hover:bg-[#1e1f26] transition-colors"
              >
                DIGITAL MARKETING
              </Link>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full py-3.5 rounded bg-[#d4af37] text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:brightness-110 transition-all cursor-pointer"
            >
              <span>COMMISSION BRIEF</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#9ba1b3] pt-1">
              <span>PORTAL v4.9 ACTIVE</span>
              <span>4HR RESPONSE SLA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
