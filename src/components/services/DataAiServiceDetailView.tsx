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
  Clock,
  FileCheck2,
  Globe2,
  HelpCircle,
  Layers,
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

interface DataAiServiceDetailViewProps {
  service: ServiceDetail;
  siblings: ServiceDetail[];
}

export function DataAiServiceDetailView({ service, siblings }: DataAiServiceDetailViewProps) {
  const accentColor = '#8b5cf6';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    projectScope: '',
  });

  const overviewParagraphs =
    service.overviewParagraphs && service.overviewParagraphs.length > 0
      ? service.overviewParagraphs
      : [service.explanation];

  const processSteps = service.processSteps ?? [];
  const applications = service.applications ?? [];
  const faqs = service.faqs ?? [];

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
      division: 'Data & AI Core',
      selectedService: service.name,
      volume: formState.volume,
      scope: formState.projectScope,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setFormError(result.error || 'Unable to send scoping request.');
      return;
    }

    if (result.delivery === 'mailto_fallback' && result.mailtoUrl) {
      setFallbackMailtoUrl(result.mailtoUrl);
      window.location.href = result.mailtoUrl;
    }

    setFormSubmitted(true);
  };

  const relatedSameCategory = siblings.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  );
  const relatedCrossCategory = siblings.filter(
    (s) => s.slug !== service.slug && s.category !== service.category
  );

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f6fa] selection:bg-[#8b5cf6]/30 selection:text-white">
      <DivisionNavbar division="data-ai" activeSection="services" />

      <main className="pt-28 pb-20">
        {/* ============================================================
            1. BREADCRUMB, SEO H1 & SERVICE OVERVIEW
           ============================================================ */}
        <section id="overview" className="relative overflow-hidden border-b border-white/10 pb-16 lg:pb-20">
          {/* Subtle violet radial atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                VAIKA GROUP
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <Link href="/services/data-ai" className="hover:text-[#8b5cf6] transition-colors">
                DATA &amp; AI CORE
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#8b5cf6]">{service.name}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[11px] uppercase tracking-widest border"
                    style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.12)',
                      borderColor: 'rgba(139, 92, 246, 0.35)',
                      color: '#c4b5fd',
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
                  {service.name}
                </h1>

                <p className="font-['Space_Grotesk'] text-base sm:text-lg text-[#c4b5fd] font-medium tracking-wide">
                  {service.tagline}
                </p>

                {/* Service Overview Copy */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  {overviewParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Primary Action Bar */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#contact"
                    style={{ backgroundColor: accentColor, color: '#050507' }}
                    className="px-6 py-3.5 rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                  >
                    <span>REQUEST PROJECT ESTIMATE</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#process"
                    className="px-5 py-3.5 rounded bg-[#12131a] border border-white/15 hover:border-[#8b5cf6]/60 font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f5f6fa] inline-flex items-center gap-2 transition-all"
                  >
                    <span>VIEW WORKFLOW ({processSteps.length} STEPS)</span>
                  </a>
                  <Link
                    href="/services/data-ai"
                    className="px-4 py-3.5 rounded font-mono text-xs uppercase tracking-wider text-[#9ba1b3] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>ALL DATA &amp; AI SERVICES</span>
                  </Link>
                </div>
              </div>

              {/* Right Quick-Facts Technical Card */}
              <aside className="lg:col-span-4 rounded-xl bg-[#0d0e14] border border-white/10 p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#8b5cf6]">
                    {"//"} SPECIFICATION MATRIX
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#8b5cf6]/15 text-[#c4b5fd] border border-[#8b5cf6]/30">
                    HUMAN-VERIFIED
                  </span>
                </div>

                <dl className="space-y-3.5 font-['Manrope'] text-sm">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Division</dt>
                    <dd className="text-white font-semibold">Data &amp; AI Core</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Workflow Stages</dt>
                    <dd className="text-white font-semibold">{processSteps.length} Structured Steps</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Core Capabilities</dt>
                    <dd className="text-white font-semibold">{service.includes.length} Specialized Scope Items</dd>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <dt className="text-[#9ba1b3] font-mono text-xs uppercase">Deliverable Formats</dt>
                    <dd className="text-white font-semibold">{service.deliverables.length} Production Outputs</dd>
                  </div>
                </dl>

                {service.primaryKeywords && service.primaryKeywords.length > 0 && (
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3]">
                      FOCUS AREAS
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

                <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#9ba1b3]">
                  <Clock className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>PILOT SAMPLE TURNAROUND: 24-48H</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. BUSINESS CHALLENGE & OPERATIONAL IMPACT
           ============================================================ */}
        <section id="problems" className="py-14 border-b border-white/10 bg-[#08090d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-[#0e1018] border border-[#8b5cf6]/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-lg bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6]">
                  {"//"} OPERATIONAL CHALLENGE SOLVED
                </div>
                <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white">
                  Why Organizations Outsource {service.name}
                </h2>
                <p className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed">
                  {service.problemSolved}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. END-TO-END WORKFLOW PROCESS
           ============================================================ */}
        {processSteps.length > 0 && (
          <section id="process" className="py-16 lg:py-20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] mb-2 flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    <span>{"//"} EXECUTION PIPELINE</span>
                  </div>
                  <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                    Our {processSteps.length}-Step Production Process
                  </h2>
                </div>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
                  Structured guidelines, trained human operators, and multi-stage verification ensure predictable throughput at any dataset scale.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="rounded-lg bg-[#0d0e14] border border-white/10 hover:border-[#8b5cf6]/45 p-6 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#8b5cf6]/15 text-[#c4b5fd] border border-[#8b5cf6]/30">
                          STEP {String(idx + 1).padStart(2, '0')}
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
            4. KEY CAPABILITIES & 5. DELIVERABLES / FORMATS
           ============================================================ */}
        <section id="capabilities" className="py-16 lg:py-20 border-b border-white/10 bg-[#08090d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Key Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>{"//"} TECHNICAL CAPABILITIES</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Key Capabilities Included
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-[#0d0e14] border border-white/10 p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" />
                    <span className="font-['Manrope'] text-sm text-[#e1e4ee] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Formats */}
            <div className="lg:col-span-5 space-y-6" id="deliverables">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] mb-2 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4" />
                  <span>{"//"} PRODUCTION DELIVERABLES</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Deliverables &amp; Formats
                </h2>
              </div>

              <div className="rounded-xl bg-[#0d0e14] border border-white/10 p-6 space-y-4">
                <ul className="space-y-3">
                  {service.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <ArrowRight className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-1" />
                      <span className="font-['Manrope'] text-sm text-[#f5f6fa]">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. APPLICATIONS / INDUSTRIES & 7. QUALITY ASSURANCE
           ============================================================ */}
        <section id="qa" className="py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Applications / Industries */}
            {applications.length > 0 && (
              <div className="lg:col-span-6 space-y-5">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] flex items-center gap-2">
                  <Globe2 className="w-4 h-4" />
                  <span>{"//"} APPLICATIONS &amp; INDUSTRIES</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                  Primary Use Cases &amp; Sectors
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
                      SPECIALIZED WORKFLOW COVERAGE
                    </div>
                    <p className="font-['Manrope'] text-xs text-[#9ba1b3] leading-relaxed">
                      {service.secondaryKeywords.join(' • ')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* QA Approach */}
            {service.qaApproach && (
              <div className={`${applications.length > 0 ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
                <div className="h-full rounded-xl bg-gradient-to-br from-[#12131d] to-[#0a0b10] border border-[#8b5cf6]/35 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#c4b5fd]">
                      <ShieldCheck className="w-4 h-4 text-[#8b5cf6]" />
                      <span>{"//"} MULTI-STAGE QUALITY ASSURANCE</span>
                    </div>
                    <h2 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                      Verification &amp; Consistency Controls
                    </h2>
                    <p className="font-['Manrope'] text-sm sm:text-base text-[#cbd0df] leading-relaxed">
                      {service.qaApproach}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 font-mono text-[11px] text-[#9ba1b3]">
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      GUIDELINE CALIBRATION
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      HUMAN AUDIT REVIEWS
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#050507] border border-white/10">
                      SCHEMA VALIDATION
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            8. INTERACTIVE FAQ ACCORDION
           ============================================================ */}
        {faqs.length > 0 && (
          <section id="faq" className="py-16 lg:py-20 border-b border-white/10 bg-[#08090d]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] inline-flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>{"//"} SERVICE FAQ</span>
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
                          className={`w-4 h-4 text-[#8b5cf6] shrink-0 transition-transform duration-200 ${
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
            9. CONTEXTUAL SIBLING SERVICES (INTERNAL SEO MESH)
           ============================================================ */}
        <section id="related" className="py-16 lg:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] mb-2">
                {"//"} RELATED DATA &amp; AI CORE OFFERINGS
              </div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                Explore Other Capabilities in This Division
              </h2>
            </div>

            {relatedSameCategory.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#9ba1b3]">
                  MORE IN {service.category.toUpperCase()}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedSameCategory.map((rel) => (
                    <Link
                      key={rel.id}
                      href={rel.detailRoute ?? `/services/data-ai/${rel.slug}`}
                      className="group rounded-lg bg-[#0d0e14] border border-white/10 hover:border-[#8b5cf6]/50 p-5 transition-all flex flex-col justify-between gap-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8b5cf6]">
                            {rel.badge ?? rel.category}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#9ba1b3] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
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
                  COMPLEMENTARY DATA &amp; BACK-OFFICE OPERATIONS
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {relatedCrossCategory.map((rel) => (
                    <Link
                      key={rel.id}
                      href={rel.detailRoute ?? `/services/data-ai/${rel.slug}`}
                      className="group rounded-lg bg-[#0a0b10] border border-white/10 hover:border-[#8b5cf6]/45 p-4 transition-all flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-mono text-[10px] uppercase text-[#9ba1b3] mb-1">
                          {rel.category}
                        </div>
                        <div className="font-['Space_Grotesk'] text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
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
            10. B2B SERVICE INQUIRY SECTION
           ============================================================ */}
        <section id="contact" className="pt-16 lg:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-[#0d0e14] border border-[#8b5cf6]/35 p-6 sm:p-10">
              <div className="mb-8 space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6]">
                  {"//"} PROJECT SCOPING &amp; PILOT REQUEST
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  Scope Your {service.name} Project
                </h2>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3]">
                  Share your dataset format, volume, or back-office requirements. Our Data &amp; AI Core engineering lead responds within one business day with a pilot plan.
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
                <div className="rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/40 p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#8b5cf6] mx-auto" />
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                    Inquiry Prepared for {service.name}
                  </h3>
                  <p className="font-['Manrope'] text-sm text-[#cbd0df] max-w-md mx-auto">
                    {fallbackMailtoUrl
                      ? `Opening your mail client addressed to ${INQUIRY_RECIPIENT} for ${formState.name || 'your team'}.`
                      : `Thank you, ${formState.name || 'Partner'}. Sent to ${INQUIRY_RECIPIENT}; follow-up will go to ${formState.email || 'your email'}.`}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {fallbackMailtoUrl && (
                      <a
                        href={fallbackMailtoUrl}
                        className="px-4 py-2 rounded bg-[#8b5cf6] text-[#050507] font-mono text-xs font-bold uppercase inline-flex items-center gap-1.5 hover:brightness-110"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>OPEN MAIL ({INQUIRY_RECIPIENT})</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({ name: '', company: '', email: '', volume: '', projectScope: '' });
                        setFallbackMailtoUrl(null);
                      }}
                      className="px-4 py-2 rounded bg-[#161722] border border-white/15 font-mono text-xs uppercase text-white hover:border-[#8b5cf6] transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER REQUEST
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
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#8b5cf6] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Enterprise / AI Lab"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#8b5cf6] focus:outline-none font-['Manrope'] text-sm text-white"
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
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#8b5cf6] focus:outline-none font-['Manrope'] text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                        Estimated Volume / Cadence
                      </label>
                      <input
                        type="text"
                        value={formState.volume}
                        onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                        placeholder="e.g., 50,000 images / 10,000 SKUs / Ongoing"
                        className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#8b5cf6] focus:outline-none font-['Manrope'] text-sm text-white"
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
                      className="w-full px-4 py-3 rounded bg-[#12131c] border border-[#8b5cf6]/30 font-mono text-xs text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#9ba1b3] mb-1.5">
                      Project Guidelines &amp; Deliverable Formats *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.projectScope}
                      onChange={(e) => setFormState({ ...formState, projectScope: e.target.value })}
                      placeholder="Describe target classes, labeling formats (COCO, YOLO, JSON, XLSX, DOCX), turnaround expectations, or quality criteria..."
                      className="w-full px-4 py-3 rounded bg-[#050507] border border-white/15 focus:border-[#8b5cf6] focus:outline-none font-['Manrope'] text-sm text-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ backgroundColor: accentColor, color: '#050507' }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'SENDING REQUEST...' : 'SEND SCOPING REQUEST'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <DivisionFooter division="data-ai" />
    </div>
  );
}

