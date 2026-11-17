import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import {
  DIVISION_SLUGS,
  DivisionSlug,
  LOCALE_CONFIGS,
  LocaleCode,
} from '@/lib/international/locale-config';
import { REGIONAL_CONTENT } from '@/lib/international/regional-content';
import { buildEditionPath } from '@/lib/international/route-registry';
import { CountryLanguageSelector } from './CountryLanguageSelector';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

interface RegionalEditionViewProps {
  locale: LocaleCode;
  divisionSlug?: DivisionSlug;
}

const DIVISION_ACCENTS: Record<DivisionSlug, string> = {
  'real-estate': '#d4af37',
  'agent-services': '#e1e2e6',
  'data-ai': '#8b5cf6',
  'digital-marketing': '#00f0ff',
};

const DIVISION_TO_CONTACT_KEY = {
  'real-estate': 'estate',
  'agent-services': 'agent',
  'data-ai': 'data-ai',
  'digital-marketing': 'digital-marketing',
} as const;

export function RegionalEditionView({
  locale,
  divisionSlug,
}: RegionalEditionViewProps) {
  const config = LOCALE_CONFIGS[locale];
  const content = REGIONAL_CONTENT[locale];
  const activeDivision = divisionSlug
    ? content.divisions[divisionSlug]
    : undefined;
  const regionalHomeHref = buildEditionPath(locale, 'home');
  const globalDivisionHref = divisionSlug
    ? buildEditionPath('global', `services/${divisionSlug}`)
    : '/';

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f6fa]">
      {/* Regional Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050507]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-['Space_Grotesk'] text-base sm:text-lg font-bold tracking-tight text-[#f5f6fa] hover:text-[#d4af37] transition-colors"
            >
              <Image
                src="/vaika-logo-sm.webp"
                width={28}
                height={28}
                alt="VAIKA GROUP Logo"
                className="w-7 h-7 object-contain"
                priority
              />
              <span>VAIKA GROUP</span>
            </Link>
            <span className="hidden sm:inline-block text-white/20">/</span>
            <Link
              href={regionalHomeHref}
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#d4af37] hover:underline"
            >
              {config.countryName} ({config.languageName})
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <CountryLanguageSelector compact align="right" />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#d4af37] text-[#050507] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:bg-[#e5c454] transition-colors"
            >
              {content.ctaPrimary}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.18), transparent 45%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.14), transparent 45%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {divisionSlug ? (
              <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-[#9ba1b3]">
                <Link
                  href={regionalHomeHref}
                  className="inline-flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {content.sectionLabels.backToRegionalHome}
                </Link>
                <span>/</span>
                <span className="text-[#f5f6fa]">{activeDivision?.title}</span>
              </div>
            ) : null}

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 font-mono text-[11px] uppercase tracking-widest text-[#d4af37] mb-6">
              <Building2 className="w-3.5 h-3.5" />
              <span>{content.hqTransparencyBadge}</span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9ba1b3] mb-3">
              {activeDivision ? activeDivision.badge : content.eyebrow}
            </p>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
              {activeDivision ? activeDivision.headline : content.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#c4c8d4] max-w-3xl leading-relaxed mb-8">
              {activeDivision ? activeDivision.summary : content.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#d4af37] text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider hover:bg-[#e5c454] transition-colors"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href={globalDivisionHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/15 bg-[#12131a] text-[#e1e2e6] font-mono text-xs uppercase tracking-wider hover:border-[#d4af37]/50 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#d4af37]" />
                <span>{content.sectionLabels.globalEditionLink}</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
              <div className="rounded-lg border border-white/10 bg-[#0d0e14] p-4">
                <div className="text-[#9ba1b3] uppercase mb-1">HQ ORIGIN</div>
                <div className="text-white font-semibold">India Headquarters (IST)</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d0e14] p-4">
                <div className="text-[#9ba1b3] uppercase mb-1">DELIVERY WINDOW</div>
                <div className="text-white font-semibold">
                  {config.countryName} · {config.timezoneWindow}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d0e14] p-4">
                <div className="text-[#9ba1b3] uppercase mb-1">COMMERCIALS</div>
                <div className="text-white font-semibold">
                  {content.sectionLabels.currencyNote}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Division Focused Deliverables OR 4-Division Grid */}
        {activeDivision ? (
          <section className="py-16 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 rounded-xl border border-white/10 bg-[#0d0e14] p-6 sm:p-8">
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-6">
                  {activeDivision.title}
                </h2>
                <ul className="space-y-4">
                  {activeDivision.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="text-[#d6dae4] text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#0d0e14] p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{content.complianceHeading}</span>
                  </div>
                  <p className="text-sm text-[#c4c8d4] leading-relaxed mb-4">
                    {activeDivision.standardsNote}
                  </p>
                  <p className="text-sm text-[#9ba1b3] leading-relaxed">
                    {content.complianceCopy}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-3">
                    {content.sectionLabels.divisions}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {DIVISION_SLUGS.map((slug) => (
                      <Link
                        key={slug}
                        href={buildEditionPath(locale, `services/${slug}`)}
                        className={`px-3 py-1.5 rounded font-mono text-[11px] border transition-colors ${
                          slug === divisionSlug
                            ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37]'
                            : 'border-white/10 bg-[#12131a] text-[#9ba1b3] hover:text-white'
                        }`}
                      >
                        {content.divisions[slug].title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">
                  {content.sectionLabels.overview}
                </p>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold text-white">
                  {content.sectionLabels.divisions}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DIVISION_SLUGS.map((slug) => {
                  const divCopy = content.divisions[slug];
                  const accent = DIVISION_ACCENTS[slug];
                  const href = buildEditionPath(locale, `services/${slug}`);
                  return (
                    <article
                      key={slug}
                      className="rounded-xl border border-white/10 bg-[#0d0e14] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-white/25 transition-colors"
                    >
                      <div>
                        <span
                          className="inline-block font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded border mb-4"
                          style={{
                            color: accent,
                            borderColor: `${accent}44`,
                            backgroundColor: `${accent}12`,
                          }}
                        >
                          {divCopy.badge}
                        </span>
                        <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-3">
                          {divCopy.title}
                        </h3>
                        <p className="text-sm text-[#c4c8d4] leading-relaxed mb-5">
                          {divCopy.summary}
                        </p>
                        <ul className="space-y-2">
                          {divCopy.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-xs sm:text-sm text-[#9ba1b3]"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: accent }}
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                        <span className="font-mono text-[11px] text-[#9ba1b3]">
                          {divCopy.standardsNote}
                        </span>
                        <Link
                          href={href}
                          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#d4af37] hover:underline shrink-0"
                        >
                          <span>{content.sectionLabels.exploreDivision}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* India-to-Market Cadence */}
        <section className="py-16 border-b border-white/10 bg-[#08090e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">
                  <Clock className="inline w-3.5 h-3.5 mr-1.5" />
                  {content.sectionLabels.workflow}
                </p>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                  {content.workflowTitle}
                </h2>
              </div>
              <p className="text-sm text-[#9ba1b3] max-w-xl">
                {content.complianceCopy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-white/10 bg-[#0d0e14] p-6"
                >
                  <div className="font-mono text-xs text-[#d4af37] mb-2">
                    STEP {step.step}
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#9ba1b3] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Inquiry Form */}
        <div data-locale={locale} data-country={config.countryCode}>
          <ContactSection
            preselectedDivision={
              divisionSlug ? DIVISION_TO_CONTACT_KEY[divisionSlug] : undefined
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

