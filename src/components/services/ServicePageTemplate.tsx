'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  ChevronRight,
  Send,
  Workflow,
  HelpCircle,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { DivisionNavbar } from '@/components/layout/DivisionNavbar';
import { DivisionFooter } from '@/components/layout/DivisionFooter';
import { CrossDivisionNav } from '@/components/layout/CrossDivisionNav';
import { ServiceDivisionData, ServiceDetail, DemonstrationItem } from '@/types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ProjectGalleryModal } from './ProjectGalleryModal';
import { submitContactInquiry, INQUIRY_RECIPIENT } from '@/lib/contactSubmit';

interface ServicePageTemplateProps {
  data: ServiceDivisionData;
  heroElement?: React.ReactNode;
}

export function ServicePageTemplate({ data, heroElement }: ServicePageTemplateProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedDemonstration, setSelectedDemonstration] = useState<DemonstrationItem | null>(null);
  const [galleryReturnFocusEl, setGalleryReturnFocusEl] = useState<HTMLElement | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inquiryService, setInquiryService] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedService: '',
    projectScope: '',
  });

  // Flattened services list
  const allServices = useMemo(() => {
    return data.categories.flatMap((cat) => cat.services);
  }, [data.categories]);

  // Filtered services based on active category and search query
  const filteredServices = useMemo(() => {
    return allServices.filter((srv) => {
      const matchesCategory =
        activeCategoryId === 'all' ||
        data.categories.find((c) => c.id === activeCategoryId)?.services.some((s) => s.id === srv.id);

      const matchesSearch =
        !searchQuery.trim() ||
        srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allServices, activeCategoryId, searchQuery, data.categories]);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquireFromService = (service: ServiceDetail) => {
    setSelectedService(null);
    setInquiryService(service.name);
    setFormState((prev) => ({
      ...prev,
      selectedService: service.name,
      projectScope: `Inquiring about ${service.name} (${service.category}).`,
    }));
    scrollTo('#contact');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setFallbackMailtoUrl(null);

    const chosenService = formState.selectedService || inquiryService || '';
    const result = await submitContactInquiry({
      mode: 'client',
      name: formState.name,
      email: formState.email,
      company: formState.company,
      phone: formState.phone,
      division: data.title,
      selectedService: chosenService || undefined,
      scope: formState.projectScope,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setFormError(result.error || 'Unable to submit brief.');
      return;
    }

    if (result.delivery === 'mailto_fallback' && result.mailtoUrl) {
      setFallbackMailtoUrl(result.mailtoUrl);
      window.location.href = result.mailtoUrl;
    }

    setFormSubmitted(true);
    setFormState({
      name: '',
      company: '',
      email: '',
      phone: '',
      selectedService: '',
      projectScope: '',
    });
    setInquiryService('');
  };

  return (
    <div className="w-full bg-[#050507] text-[#f5f6fa] overflow-x-hidden min-h-screen selection:bg-white selection:text-black">
      {/* 1. Global Division Navbar */}
      <DivisionNavbar division={data.key} />

      {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}
      <section
        id="hero"
        className="relative w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden"
      >
        {/* Ambient atmospheric light emission */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-3xl pointer-events-none rounded-full"
          style={{
            background: `radial-gradient(circle, ${data.accentColor}25 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#292931_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
          {/* Top Telemetry Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0f1017]/90 px-4 py-2.5 rounded-lg border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: data.accentColor }}
              />
              <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-white font-bold">
                {data.divisionLabel}
              </span>
              <span className="hidden md:inline font-mono text-[11px] text-[#9ba1b3]">
                {'//'} {data.heroBadge}
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
              <span className="hidden sm:inline">TELEMETRY:</span>
              <span style={{ color: data.accentColor }} className="font-semibold">
                {data.telemetryTag}
              </span>
            </div>
          </div>

          {/* Hero Headlines & Positioning */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl flex flex-col gap-4">
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold"
                style={{ color: data.accentColor }}
              >
                {'//'} {data.tagline}
              </span>
              <h1
                data-shrink-lens
                className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#f5f6fa] leading-[1.08]"
              >
                {data.title}
              </h1>
              <p className="font-['Manrope'] text-base sm:text-xl text-[#9ba1b3] max-w-3xl leading-relaxed">
                {data.positioning}
              </p>
            </div>

            {/* CTAs */}
            <div data-shrink-lens className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  backgroundColor: data.accentColor,
                  color: '#050507',
                }}
                className="px-6 py-3.5 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:brightness-110 shadow-xl cursor-pointer"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('#services')}
                className="px-6 py-3.5 rounded bg-[#12131a] hover:bg-[#1a1c24] text-[#f5f6fa] border border-white/10 hover:border-white/20 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>EXPLORE SERVICES ({allServices.length})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Visual / Motion / Viewport Element */}
          {heroElement ? (
            <div className="w-full mt-4">{heroElement}</div>
          ) : (
            <div className="w-full rounded-xl bg-[#0a0a0f] border border-white/10 p-4 sm:p-6 relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded bg-[#12131a] border border-white/5">
                  <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f5f6fa] block">
                    {allServices.length}
                  </span>
                  <span className="font-mono text-[11px] text-[#9ba1b3] uppercase tracking-wider mt-1 block">
                    Dedicated Services
                  </span>
                </div>
                <div className="p-4 rounded bg-[#12131a] border border-white/5">
                  <span
                    className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold block"
                    style={{ color: data.accentColor }}
                  >
                    {data.categories.length}
                  </span>
                  <span className="font-mono text-[11px] text-[#9ba1b3] uppercase tracking-wider mt-1 block">
                    Service Categories
                  </span>
                </div>
                <div className="p-4 rounded bg-[#12131a] border border-white/5">
                  <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f5f6fa] block">
                    100%
                  </span>
                  <span className="font-mono text-[11px] text-[#9ba1b3] uppercase tracking-wider mt-1 block">
                    Verified Execution
                  </span>
                </div>
                <div className="p-4 rounded bg-[#12131a] border border-white/5">
                  <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f5f6fa] block">
                    24/48H
                  </span>
                  <span className="font-mono text-[11px] text-[#9ba1b3] uppercase tracking-wider mt-1 block">
                    Standard Commenced SLA
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — INTRODUCTION
      ============================================================ */}
      <section
        id="about"
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#08080d] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                style={{ color: data.accentColor }}
              >
                {'//'} STRATEGIC CAPABILITIES
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5f6fa]">
                {data.intro.headline}
              </h2>
            </div>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-md">
              {data.intro.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* What we do */}
            <div className="p-6 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: data.accentColor }}
                />
                <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white tracking-wider">
                  {'01 // WHAT WE DO'}
                </h3>
              </div>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                {data.intro.whatWeDo}
              </p>
            </div>

            {/* Who we serve */}
            <div className="p-6 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: data.accentColor }}
                />
                <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white tracking-wider">
                  {'02 // WHO WE SERVE'}
                </h3>
              </div>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                {data.intro.whoWeServe}
              </p>
            </div>

            {/* Problems addressed */}
            <div className="p-6 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: data.accentColor }}
                />
                <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white tracking-wider">
                  {'03 // PROBLEMS ADDRESSED'}
                </h3>
              </div>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                {data.intro.problemsAddressed}
              </p>
            </div>

            {/* Why valuable */}
            <div className="p-6 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: data.accentColor }}
                />
                <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white tracking-wider">
                  {'04 // WHY IT MATTERS'}
                </h3>
              </div>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                {data.intro.whyValuable}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 & 4 — SERVICE CATEGORIES & INDIVIDUAL SERVICES
      ============================================================ */}
      <section
        id="services"
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header & Search */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                style={{ color: data.accentColor }}
              >
                {'// COMPREHENSIVE SERVICE DIRECTORY'}
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f6fa]">
                INDIVIDUAL SERVICE CAPABILITIES
              </h2>
              <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] mt-2 max-w-2xl">
                Every service represents an institutional operational workflow. Click any service card for full scope, inclusions, and deliverables.
              </p>
            </div>

            {/* Instant Search Bar */}
            <div className="w-full lg:w-80 relative">
              <Search className="w-4 h-4 text-[#9ba1b3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, deliverables..."
                className="w-full bg-[#12131a] pl-10 pr-4 py-2.5 rounded-lg text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/10 focus:outline-none focus:border-white/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#9ba1b3] hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategoryId === 'all'
                  ? 'bg-[#20222d] text-white border border-white/30 font-bold shadow-md'
                  : 'bg-[#12131a] text-[#9ba1b3] hover:text-white border border-transparent'
              }`}
            >
              ALL SERVICES ({allServices.length})
            </button>
            {data.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategoryId === cat.id
                    ? 'bg-[#20222d] text-white border font-bold shadow-md'
                    : 'bg-[#12131a] text-[#9ba1b3] hover:text-white border border-transparent'
                }`}
                style={{
                  borderColor: activeCategoryId === cat.id ? data.accentColor : undefined,
                  color: activeCategoryId === cat.id ? data.accentColor : undefined,
                }}
              >
                {cat.title} ({cat.services.length})
              </button>
            ))}
          </div>

          {/* Results Count Banner */}
          <div className="flex justify-between items-center text-xs font-mono text-[#9ba1b3] px-1">
            <span>
              SHOWING <strong className="text-white">{filteredServices.length}</strong> OF{' '}
              {allServices.length} AVAILABLE SERVICES
            </span>
            {searchQuery && (
              <span>
                FILTERED BY KEYWORD: &quot;<span className="text-white">{searchQuery}</span>&quot;
              </span>
            )}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedService(service)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                aria-label={`View details for ${service.name}`}
                className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg cursor-pointer"
                style={{
                  borderTop: `2px solid ${data.accentColor}`,
                }}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span
                      className="font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ color: data.accentColor }}
                    >
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#f5f6fa]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-2 line-clamp-2 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Key Inclusions Preview (2 items) */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-1.5">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#525866] uppercase tracking-wider">
                      PRIMARY INCLUSIONS:
                    </span>
                    {service.includes.slice(0, 2).map((inc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 font-['Manrope'] text-xs text-[#e1e2e6]"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: data.accentColor }}
                        />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#9ba1b3] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {service.detailRoute && (
                      <Link
                        href={service.detailRoute}
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-[11px] uppercase tracking-wider text-[#cbd0df] hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white transition-colors"
                      >
                        FULL GUIDE
                      </Link>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquireFromService(service);
                    }}
                    style={{
                      borderColor: `${data.accentColor}50`,
                      color: data.accentColor,
                    }}
                    className="px-3 py-1.5 rounded bg-[#161720] hover:bg-[#20222d] font-mono text-[11px] uppercase transition-all border cursor-pointer"
                  >
                    INQUIRE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-[#0f1017] rounded-lg border border-white/5">
              <HelpCircle className="w-8 h-8 text-[#9ba1b3] mx-auto mb-3" />
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                NO SERVICES FOUND
              </h3>
              <p className="font-['Manrope'] text-sm text-[#9ba1b3] mt-1">
                No services matched your search term &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryId('all');
                }}
                className="mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — WHY CHOOSE VAIKA GROUP
      ============================================================ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#08080d] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div>
            <span
              className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
              style={{ color: data.accentColor }}
            >
              {'// INSTITUTIONAL ADVANTAGES'}
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5f6fa]">
              WHY CHOOSE VAIKA GROUP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyChooseUs.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: data.accentColor }}
                  />
                  <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white tracking-wider">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — WORKFLOW
      ============================================================ */}
      <section
        id="workflow"
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                style={{ color: data.accentColor }}
              >
                {'// SYSTEMATIC EXECUTION'}
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5f6fa]">
                OUR FIVE-STAGE WORKFLOW
              </h2>
            </div>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
              A transparent, predictable process ensuring total alignment, fast delivery, and uncompromising quality control at every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.workflow.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-lg bg-[#0f1017] border border-white/5 flex flex-col justify-between gap-4 group hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: data.accentColor }}
                    >
                      {step.step}
                    </span>
                    <Workflow className="w-4 h-4 text-[#525866] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white mt-3">
                    {step.title}
                  </h3>
                  <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#525866]">
                  DELIVERABLE: <span className="text-[#e1e2e6]">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — PORTFOLIO / WORK SHOWCASE
      ============================================================ */}
      <section
        id="portfolio"
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#08080d] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span
                className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                style={{ color: data.accentColor }}
              >
                {"//"} CAPABILITY BENCHMARKS
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5f6fa]">
                DEMONSTRATION SHOWCASE
              </h2>
            </div>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
              Representative examples illustrating our production standards, precision modeling, and technical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.demonstrations.map((demo) => {
              const hasInteractiveGallery = Boolean(demo.gallery && demo.gallery.length > 0);
              const cardContent = (
                <>
                  <div className="w-full">
                    <div className="w-full h-48 relative overflow-hidden bg-[#050507]">
                      <Image
                        src={demo.image}
                        alt={demo.imageAlt || demo.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className={`object-cover opacity-80 transition-transform duration-500 ${
                          hasInteractiveGallery
                            ? 'group-hover:scale-[1.03]'
                            : 'group-hover:scale-105 duration-700'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1017] via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 font-mono text-[10px] bg-[#050507]/90 px-2 py-0.5 rounded text-white border border-white/10 backdrop-blur">
                        {demo.badge}
                      </span>
                      {hasInteractiveGallery && (
                        <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider bg-[#050507]/85 px-2 py-0.5 rounded border border-white/10 text-[#9ba1b3] group-hover:border-[#d4af37]/40 group-hover:text-[#f5f6fa] transition-colors backdrop-blur">
                          {String(demo.gallery?.length || 1).padStart(2, '0')} FRAMES
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <span
                        className="font-mono text-[10px] uppercase font-bold tracking-wider"
                        style={{ color: data.accentColor }}
                      >
                        {demo.category}
                      </span>
                      <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#f5f6fa] mt-1">
                        {demo.title}
                      </h3>
                      <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-2 leading-relaxed">
                        {demo.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full p-6 pt-0 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {demo.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#12131a] text-[#9ba1b3] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {hasInteractiveGallery && (
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3] group-hover:text-[#f5f6fa] transition-colors">
                        <span style={{ color: data.accentColor }}>VIEW PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </>
              );

              if (hasInteractiveGallery) {
                return (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={(e) => {
                      setGalleryReturnFocusEl(e.currentTarget);
                      setSelectedDemonstration(demo);
                    }}
                    aria-label={`Open project gallery for ${demo.title}`}
                    className="text-left rounded-lg bg-[#0f1017] border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-[#d4af37]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    {cardContent}
                  </button>
                );
              }

              return (
                <div
                  key={demo.id}
                  className="rounded-lg bg-[#0f1017] border border-white/5 overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all shadow-xl"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 — RELATED SERVICES
      ============================================================ */}
      <CrossDivisionNav currentDivision={data.key} />

      {/* ============================================================
          SECTION 9 — FINAL CTA & INQUIRY FLOW
      ============================================================ */}
      <section
        id="contact"
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: data.accentColor }}
              />
              <span style={{ color: data.accentColor }}>DIRECT ENGAGEMENT PROTOCOL</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f6fa]">
              LET&apos;S BUILD SOMETHING THAT MOVES YOUR BUSINESS FORWARD.
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-xl mx-auto">
              Submit your project brief for direct assessment by our division directors. Guaranteed response within 4 hours.
            </p>
          </div>

          {/* Error Feedback */}
          {formError && (
            <div
              role="alert"
              className="p-4 rounded-lg bg-[#1a1014] border border-red-500/60 text-red-100 flex items-center justify-between gap-3"
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

          {/* Submission Feedback Toast */}
          {formSubmitted && (
            <div
              role="status"
              className="p-4 rounded-lg bg-[#161720] border text-[#f5f6fa] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xl animate-in fade-in"
              style={{ borderColor: data.accentColor }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0"
                  style={{ color: data.accentColor }}
                />
                <div>
                  <span
                    className="font-['Space_Grotesk'] text-xs font-bold uppercase block"
                    style={{ color: data.accentColor }}
                  >
                    INQUIRY PREPARED FOR {INQUIRY_RECIPIENT.toUpperCase()} — 4HR SLA RESPONSE
                  </span>
                  <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-0.5">
                    {fallbackMailtoUrl
                      ? `Opening your mail client addressed to ${INQUIRY_RECIPIENT}. If it did not open automatically, click Open Mail.`
                      : `Your brief has been routed to ${INQUIRY_RECIPIENT}.`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {fallbackMailtoUrl && (
                  <a
                    href={fallbackMailtoUrl}
                    style={{ backgroundColor: data.accentColor, color: '#050507' }}
                    className="px-3 py-1.5 rounded font-mono text-xs font-bold uppercase flex items-center gap-1.5 hover:brightness-110"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>OPEN MAIL</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-3 py-1.5 bg-[#20222d] text-xs font-mono text-[#9ba1b3] hover:text-white rounded uppercase cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </div>
          )}

          {/* Dedicated In-Page Form */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-[#0f1017] rounded-xl p-6 sm:p-10 flex flex-col gap-6 border border-white/10 shadow-2xl"
          >
            {/* Preselected Service Notification if any */}
            {inquiryService && (
              <div className="p-3 bg-[#161720] rounded border border-white/10 flex items-center justify-between text-xs font-mono">
                <span>
                  PRESELECTED SERVICE:{' '}
                  <strong style={{ color: data.accentColor }}>{inquiryService}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setInquiryService('');
                    setFormState((prev) => ({ ...prev, selectedService: '' }));
                  }}
                  className="text-[#9ba1b3] hover:text-white uppercase text-[10px]"
                >
                  CHANGE
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  YOUR NAME / ORGANIZATION *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  ORGANIZATION / BROKERAGE
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. Vance Luxury Capital"
                  className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  PHONE / WHATSAPP
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            {/* Target Service Dropdown */}
            <div>
              <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                TARGET SERVICE REQUIRED
              </label>
              <select
                value={formState.selectedService || inquiryService || ''}
                onChange={(e) => setFormState({ ...formState, selectedService: e.target.value })}
                className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] border border-white/5 focus:outline-none focus:border-white/30"
              >
                <option value="">General Division Engagement</option>
                {allServices.map((srv) => (
                  <option key={srv.id} value={srv.name}>
                    {srv.name} ({srv.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Project Scope */}
            <div>
              <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                PROJECT SCOPE & TIMELINE *
              </label>
              <textarea
                required
                rows={4}
                value={formState.projectScope}
                onChange={(e) => setFormState({ ...formState, projectScope: e.target.value })}
                placeholder="Outline your project requirements, target deliverables, property addresses, or data specifications..."
                className="w-full bg-[#12131a] px-3.5 py-2.5 rounded text-xs font-mono text-[#f5f6fa] placeholder:text-[#525866] border border-white/5 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-[11px] text-[#9ba1b3] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>CONFIDENTIAL • ENCRYPTED SUBMISSION • ZERO-RETENTION POLICY</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: data.accentColor,
                  color: '#050507',
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT BRIEF'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Global Division Footer */}
      <DivisionFooter division={data.key} />

      {/* Individual Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        accentColor={data.accentColor}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromService}
      />

      {/* Fullscreen Project Case-Study Gallery Modal */}
      <ProjectGalleryModal
        project={selectedDemonstration}
        accentColor={data.accentColor}
        returnFocusTo={galleryReturnFocusEl}
        onClose={() => setSelectedDemonstration(null)}
      />
    </div>
  );
}
