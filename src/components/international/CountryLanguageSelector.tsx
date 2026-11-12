'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';
import {
  EditionKey,
  LOCALE_CONFIGS,
  SUPPORTED_LOCALES,
  detectLocaleFromPathname,
} from '@/lib/international/locale-config';
import { mapPathnameToEdition } from '@/lib/international/route-registry';

interface CountryLanguageSelectorProps {
  align?: 'left' | 'right';
  compact?: boolean;
}

export function CountryLanguageSelector({
  align = 'right',
  compact = false,
}: CountryLanguageSelectorProps) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeEdition = detectLocaleFromPathname(pathname);
  const activeLabel =
    activeEdition === 'global'
      ? 'GLOBAL · EN'
      : LOCALE_CONFIGS[activeEdition].shortLabel;

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const editions: Array<{
    key: EditionKey;
    label: string;
    sublabel: string;
    hrefLang: string;
  }> = [
    {
      key: 'global',
      label: 'Global (India HQ)',
      sublabel: 'English · x-default',
      hrefLang: 'x-default',
    },
    ...SUPPORTED_LOCALES.map((code) => ({
      key: code as EditionKey,
      label: LOCALE_CONFIGS[code].nativeLabel,
      sublabel: `${LOCALE_CONFIGS[code].currency} · ${LOCALE_CONFIGS[code].hreflang}`,
      hrefLang: LOCALE_CONFIGS[code].hreflang,
    })),
  ];

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select country or language edition"
        className={`inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#12131a] text-[#e1e2e6] hover:border-[#d4af37]/50 hover:text-white transition-colors font-mono whitespace-nowrap shrink-0 cursor-pointer ${
          compact ? 'px-2.5 py-1.5 text-[11px]' : 'px-3 py-2 text-xs'
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-[#d4af37]" aria-hidden="true" />
        <span>{activeLabel}</span>
        <ChevronDown
          className={`w-3 h-3 text-[#9ba1b3] transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label="Regional Editions"
          className={`absolute z-50 mt-2 w-72 rounded-lg border border-white/10 bg-[#0d0e14]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.75)] p-1.5 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          <div className="px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3] border-b border-white/5 mb-1">
            Region &amp; Language Edition
          </div>
          {editions.map((item) => {
            const targetHref = mapPathnameToEdition(pathname, item.key);
            const isSelected = activeEdition === item.key;

            return (
              <Link
                key={item.key}
                href={targetHref}
                hrefLang={item.hrefLang}
                role="option"
                aria-selected={isSelected}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded text-left transition-colors ${
                  isSelected
                    ? 'bg-[#d4af37]/15 text-[#f5f6fa] border border-[#d4af37]/30'
                    : 'text-[#c4c8d4] hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <div className="min-w-0">
                  <div className="font-['Space_Grotesk'] text-xs font-semibold truncate">
                    {item.label}
                  </div>
                  <div className="font-mono text-[10px] text-[#9ba1b3]">
                    {item.sublabel}
                  </div>
                </div>
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                ) : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

