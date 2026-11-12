'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cpu,
  FileCheck2,
  Globe2,
  HelpCircle,
  Layers,
  PlusCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { DivisionNavbar } from '@/components/layout/DivisionNavbar';
import { DivisionFooter } from '@/components/layout/DivisionFooter';
import { ServiceDetail } from '@/types';
import { submitContactInquiry, INQUIRY_RECIPIENT } from '@/lib/contactSubmit';

interface DigitalMarketingServiceDetailViewProps {
  service: ServiceDetail;
  siblings: ServiceDetail[];
}

export function DigitalMarketingServiceDetailView({
  service,
  siblings,
}: DigitalMarketingServiceDetailViewProps) {
  const accentColor = '#00f0ff';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    timeline: '',
    projectScope: '',
  });

  const overviewParagraphs =
    service.overviewParagraphs && service.overviewParagraphs.length > 0
      ? service.overviewParagraphs
      : [service.explanation];

  const processSteps = service.processSteps ?? [];
  const applications = service.applications ?? [];
  const platformsTools = service.platformsTools ?? [];
  const optionalAddOns = service.optionalAddOns ?? [];
  const originalServices = service.originalServices ?? [];
  const faqs = service.faqs ?? [];
  const recommendedInternalLinks = service.recommendedInternalLinks ?? [];

  const relatedSameCategory = siblings.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  );
  const relatedCrossCategory = siblings
    .filter((s) => s.slug !== service.slug && s.category !== service.category)
    .slice(0, 6);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setFallbackMailtoUrl(null);

    const result = await submitContactInquiry({
      mode: 'client',
      name: formState.name,
      email: formState.email,
      company: formState.company,
      division: 'Digital Marketing & Creative',
      selectedService: service.name,
      timeframe: formState.timeline,
      scope: formState.projectScope,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setFormError(result.error || 'Unable to send scoping inquiry.');
      return;
    }

    if (result.delivery === 'mailto_fallback' && result.mailtoUrl) {
      setFallbackMailtoUrl(result.mailtoUrl);
      window.location.href = result.mailtoUrl;
    }

    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f6fa] selection:bg-[#00f0ff]/30 selection:text-white">
      <DivisionNavbar division="digital-marketing" activeSection="services" />

      <main className="pt-28 pb-20">
        {/* ============================================================
            1. BREADCRUMB, SERVICE IDENTITY, SEO H1 & OVERVIEW
           ============================================================ */}
        <section id="overview" className="relative overflow-hidden border-b border-white/10 pb-16 lg:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
            style={{ background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)' }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                VAIKA GROUP
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <Link href="/services/digital-marketing" className="hover:text-[#00f0ff] transition-colors">
                DIGITAL MARKETING &amp; CREATIVE
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#00f0ff]">{service.name}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[11px] uppercase tracking-widest border"
                    style={{
                      backgroundColor: 'rgba(0, 240, 255, 0.1)',
                      borderColor: 'rgba(0, 240, 255, 0.35)',
                      color: '#67e8f9',
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{service.category}</span>
                  </span>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded bg-[#12131a] border border-white/10 font-mono text-[11px] text-[#9ba1b3] uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Primary SEO H1 */}
                <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  {service.h1Heading ?? service.name}
                </h1>

                <p className="font-['Space_Grotesk'] text-base sm:text-lg text-[#67e8f9] font-medium tracking-wide">
                  {service.tagline}
                </p>

                {/* Original Capabilities Consolidated */}
                {originalServices.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3] mr-1">
                      CONSOLIDATED CAPABILITIES:
                    </span>
                    {originalServices.map((orig) => (
                      <span
                        key={orig}
                        className="px-2.5 py-1 rounded bg-[#0d1017] border border-[#00f0ff]/25 font-mono text-[11px] text-[#e1e4ee]"
                      >
                        {orig}
                      </span>
                    ))}
                  </div>
                )}

                {/* Service Overview Paragraphs */}
                <div className="space-y-4 pt-3 border-t border-white/10">
                  {overviewParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#contact"
                    style={{ backgroundColor: accentColor, color: '#050507' }}
                    className="px-6 py-3.5 rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,240,255,0.28)]"
                  >
                    <span>DISCUSS PROJECT SCOPE</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#process"
                    className="px-5 py-3.5 rounded bg-[#12131a] border border-white/15 hover:border-[#00f0ff]/60 font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f5f6fa] inline-flex items-center gap-2 transition-all"
                  >
                    <span>OPERATIONAL PROCESS ({processSteps.length} STEPS)</span>
                  </a>
                  <Link
                    href="/services/digital-marketing"
                    className="px-4 py-3.5 rounded font-mono text-xs uppercase tracking-wider text-[#9ba1b3] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>ALL 15 SERVICES</span>
                  </Link>
                </div>
              </div>

              {/* Specification Matrix Sidebar */}
              <aside className="lg:col-span-4 rounded-xl bg-[#0d0e14] border border-white/10 p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#00f0ff]">
                    {"//"} SERVICE SPECIFICATION
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#67e8f9] border border-[#00f0ff]/30">
                    DIVISION 04
                  </span>
                </div>

                <dl className="space-y-3 font-['Manrope'] text-sm">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Division</dt>
                    <dd className="text-white font-semibold">Digital Marketing &amp; Creative</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Workflow Stages</dt>
                    <dd className="text-white font-semibold">{processSteps.length} Operational Steps</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Core Capabilities</dt>
                    <dd className="text-white font-semibold">{service.includes.length} Included Items</dd>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Deliverables</dt>
                    <dd className="text-white font-semibold">{service.deliverables.length} Standard Outputs</dd>
                  </div>
                </dl>

                {service.primaryKeywords && service.primaryKeywords.length > 0 && (
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3]">
                      CORE SEARCH TOPICS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.primaryKeywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-2 py-1 rounded bg-[#161722] border border-white/10 font-mono text-[11px] text-[#cbd0df]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. BUSINESS CHALLENGE ADDRESSED
           ============================================================ */}
        <section id="problems" className="py-14 border-b border-white/10 bg-[#08090d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-[#0e1018] border border-[#00f0ff]/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/35 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff]">
                  {"//"} BUSINESS CHALLENGE ADDRESSED
                </div>
                <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white">
                  Operational Problem Solved by {service.name}
                </h2>
                <p className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed">
                  {service.problemSolved}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. DETAILED OPERATIONAL PROCESS
           ============================================================ */}
        {processSteps.length > 0 && (
          <section id="process" className="py-16 lg:py-20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-2 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    <span>{"//"} END-TO-END EXECUTION METHODOLOGY</span>
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                    Our {processSteps.length}-Step Operational Process
                  </h2>
                </div>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
                  Documented stage gates, clear client review checkpoints, and verified delivery standards across every cycle.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="rounded-lg bg-[#0d0e14] border border-white/10 hover:border-[#00f0ff]/45 p-6 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#00f0ff]/10 text-[#67e8f9] border border-[#00f0ff]/30">
                          STAGE {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            4. KEY CAPABILITIES, DELIVERABLES & SCOPE BOUNDARIES
           ============================================================ */}
        <section id="capabilities" className="py-16 lg:py-20 border-b border-white/10 bg-[#08090d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Key Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>{"//"} INCLUDED CAPABILITIES</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Key Capabilities &amp; Sub-Services
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-[#0d0e14] border border-white/10 p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span className="font-['Manrope'] text-sm text-[#e1e4ee] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {optionalAddOns.length > 0 && (
                <div className="rounded-xl bg-[#0b0d14] border border-white/10 p-5 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#9ba1b3] flex items-center gap-2">
                    <PlusCircle className="w-4 h-4 text-[#00f0ff]" />
                    <span>OPTIONAL ADD-ONS &amp; SCOPE BOUNDARIES</span>
                  </div>
                  <ul className="space-y-2">
                    {optionalAddOns.map((addon) => (
                      <li
                        key={addon}
                        className="font-['Manrope'] text-xs sm:text-sm text-[#cbd0df] flex items-start gap-2.5"
                      >
                        <span className="text-[#00f0ff] mt-0.5">+</span>
                        <span>{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Deliverables & Platforms */}
            <div className="lg:col-span-5 space-y-6" id="deliverables">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-2 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4" />
                  <span>{"//"} CLIENT OUTPUTS</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Expected Deliverables
                </h2>
              </div>

              <div className="rounded-xl bg-[#0d0e14] border border-white/10 p-6 space-y-4">
                <ul className="space-y-3">
                  {service.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <ArrowRight className="w-4 h-4 text-[#00f0ff] shrink-0 mt-1" />
                      <span className="font-['Manrope'] text-sm text-[#f5f6fa]">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {platformsTools.length > 0 && (
                <div className="rounded-xl bg-[#0d0e14] border border-white/10 p-6 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>PLATFORMS, TOOLS &amp; ENVIRONMENTS</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {platformsTools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded bg-[#141722] border border-white/10 font-mono text-[11px] text-[#e1e4ee]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. TARGET APPLICATIONS & QUALITY ASSURANCE
           ============================================================ */}
        <section id="qa" className="py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10">
            {applications.length > 0 && (
              <div className="lg:col-span-6 space-y-5">
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] flex items-center gap-2">
                  <Globe2 className="w-4 h-4" />
                  <span>{"//"} BUSINESS APPLICATIONS &amp; FIT</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                  Ideal Organizations &amp; Use Cases
                </h2>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {applications.map((app) => (
                    <span
                      key={app}
                      className="px-3.5 py-2 rounded-lg bg-[#0d0e14] border border-white/10 font-['Manrope'] text-sm text-[#e1e4ee]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                {service.secondaryKeywords && service.secondaryKeywords.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-2">
                      ADDITIONAL CAPABILITY SCOPE
                    </div>
                    <p className="font-['Manrope'] text-xs text-[#9ba1b3] leading-relaxed">
                      {service.secondaryKeywords.join(' • ')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {service.qaApproach && (
              <div className={`${applications.length > 0 ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
                <div className="h-full rounded-xl bg-gradient-to-br from-[#0e141a] to-[#0a0b10] border border-[#00f0ff]/35 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#67e8f9]">
                      <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
                      <span>{"//"} QUALITY CONTROL &amp; GOVERNANCE</span>
                    </div>
                    <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                      Pre-Delivery Verification Standards
                    </h2>
                    <p className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed">
                      {service.qaApproach}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 font-mono text-[11px] text-[#9ba1b3]">
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      BRAND ALIGNMENT REVIEW
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      MULTI-VIEWPORT QA
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      CLIENT ASSET OWNERSHIP
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            6. INTERACTIVE FAQ ACCORDION
           ============================================================ */}
        {faqs.length > 0 && (
          <section id="faq" className="py-16 lg:py-20 border-b border-white/10 bg-[#08090d]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] inline-flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>{"//"} BUYER QUESTIONS</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-lg bg-[#0d0e14] border border-white/10 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                      >
                        <span className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#00f0ff] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 border-t border-white/5 font-['Manrope'] text-sm text-[#cbd0df] leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            7. RECOMMENDED INTERNAL LINKS & RELATED CAPABILITIES
           ============================================================ */}
        <section id="related" className="py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-2">
                {"//"} INTEGRATED GROWTH ECOSYSTEM
              </div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                Complementary Digital Marketing &amp; Creative Services
              </h2>
            </div>

            {recommendedInternalLinks.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#9ba1b3]">
                  RECOMMENDED NEXT STEPS &amp; PAIRED CAPABILITIES
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {recommendedInternalLinks.map((lnk) => (
                    <Link
                      key={lnk.href}
                      href={lnk.href}
                      className="group rounded-lg bg-[#0d1018] border border-[#00f0ff]/25 hover:border-[#00f0ff] p-5 transition-all flex items-center justify-between gap-3"
                    >
                      <span className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white group-hover:text-[#67e8f9] transition-colors">
                        {lnk.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedSameCategory.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#9ba1b3]">
                  MORE IN {service.category.toUpperCase()}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedSameCategory.map((rel) => (
                    <Link
                      key={rel.id}
                      href={rel.detailRoute ?? `/services/digital-marketing/${rel.slug}`}
                      className="group rounded-lg bg-[#0d0e14] border border-white/10 hover:border-[#00f0ff]/50 p-5 transition-all flex flex-col justify-between gap-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#00f0ff]">
                            {rel.badge ?? rel.category}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#9ba1b3] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-[#67e8f9] transition-colors">
                          {rel.name}
                        </h3>
                        <p className="font-['Manrope'] text-xs text-[#9ba1b3] line-clamp-2">
                          {rel.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedCrossCategory.length > 0 && (
              <div className="space-y-4 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-[#9ba1b3]">
                  ACROSS OTHER DIGITAL MARKETING DISCIPLINES
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedCrossCategory.map((rel) => (
                    <Link
                      key={rel.id}
                      href={rel.detailRoute ?? `/services/digital-marketing/${rel.slug}`}
                      className="group rounded-lg bg-[#0a0b10] border border-white/10 hover:border-[#00f0ff]/45 p-4 transition-all flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-mono text-[10px] uppercase text-[#9ba1b3] mb-1">
                          {rel.category}
                        </div>
                        <div className="font-['Space_Grotesk'] text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors">
                          {rel.name}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#9ba1b3] group-hover:text-white shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            8. B2B PROJECT SCOPING INQUIRY FORM
           ============================================================ */}
        <section id="contact" className="pt-16 lg:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-[#0d0e14] border border-[#00f0ff]/35 p-6 sm:p-10">
              <div className="mb-8 space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff]">
                  {"//"} PROJECT SCOPING &amp; CONSULTATION
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Scope Your {service.name} Engagement
                </h2>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3]">
                  Share your channels, deliverables needed, or target timeline. Our Digital Marketing &amp; Creative team reviews every inquiry and responds with clear scope options.
                </p>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="mb-4 p-4 rounded-lg bg-[#1a1014] border border-red-500/60 text-red-100 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <p className="font-['Manrope'] text-xs sm:text-sm">{formError}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormError(null)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs font-mono rounded uppercase cursor-pointer"
                  >
                    DISMISS
                  </button>
                </div>
              )}

              {formSubmitted ? (
                <div className="rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/40 p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#00f0ff] mx-auto" />
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                    Scoping Request Prepared for {service.name}
                  </h3>
                  <p className="font-['Manrope'] text-sm text-[#cbd0df] max-w-md mx-auto">
                    {fallbackMailtoUrl
                      ? `Opening your mail client addressed to ${INQUIRY_RECIPIENT} for ${formState.name || 'your team'}.`
                      : `Thank you, ${formState.name || 'Partner'}. Sent to ${INQUIRY_RECIPIENT}; follow-up will go to ${formState.email || 'your inbox'}.`}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {fallbackMailtoUrl && (
                      <a
                        href={fallbackMailtoUrl}
                        className="px-4 py-2 rounded bg-[#00f0ff] text-[#050507] font-mono text-xs font-bold uppercase inline-flex items-center gap-1.5 hover:brightness-110"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>OPEN MAIL ({INQUIRY_RECIPIENT})</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({ name: '', company: '', email: '', timeline: '', projectScope: '' });
                        setFallbackMailtoUrl(null);
                      }}
                      className="px-4 py-2 rounded bg-[#161722] border border-white/15 font-mono text-xs uppercase text-white hover:border-[#00f0ff] transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#00f0ff] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#00f0ff] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#00f0ff] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Target Timeline / Cadence
                      </label>
                      <input
                        type="text"
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        placeholder="e.g., Monthly retainer / 4-week project / Launch Q2"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#00f0ff] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                      Selected Service
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={service.name}
                      className="w-full px-4 py-3 rounded bg-[#10141c] border border-[#00f0ff]/30 font-mono text-xs text-[#67e8f9]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                      Goals, Channels &amp; Current Assets *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.projectScope}
                      onChange={(e) => setFormState({ ...formState, projectScope: e.target.value })}
                      placeholder="Tell us about your website, target channels, content volume, or any existing Figma/brand files..."
                      className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#00f0ff] focus:outline-none font-['Manrope'] text-sm text-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ backgroundColor: accentColor, color: '#050507' }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SEND SCOPING INQUIRY'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <DivisionFooter division="digital-marketing" />
    </div>
  );
}

