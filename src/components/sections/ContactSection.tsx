'use client';

import React, { useState } from 'react';
import {
  Send,
  Upload,
  CheckCircle2,
  Sparkles,
  FileText,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { DivisionKey } from '@/types';

const INQUIRY_RECIPIENT = 'vijay@vaikagroup.com';

interface ContactSectionProps {
  preselectedDivision?: DivisionKey | null;
  preselectedService?: string;
}

const TARGET_CAPABILITIES = [
  'Real Estate Media & Visualization',
  'Agent Services & Lead Ops',
  'Data & AI Core Operations',
  'Digital Marketing & Growth',
  'Photo Editing & 3D Renders',
  'Transaction & CRM Coordination',
  'Multimodal AI Annotation',
  'Video Editing & Creative Content',
];

const TALENT_DISCIPLINES = [
  'Unreal 5 Technical',
  'FPV Drone Pilot',
  'LLM / PyTorch Lead',
  'Shaders / WebGPU',
];

export function ContactSection({
  preselectedService,
}: ContactSectionProps) {
  const [matrixMode, setMatrixMode] = useState<'client' | 'talent'>('client');

  const getInitialCapabilities = () => {
    if (preselectedService) return [preselectedService];
    return [];
  };

  // Client form state
  const [capabilities, setCapabilities] = useState<string[]>(getInitialCapabilities);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [timeframe, setTimeframe] = useState('immediate');
  const [clientScope, setClientScope] = useState('');
  const [clientFile, setClientFile] = useState<File | null>(null);

  // Talent form state
  const [discipline, setDiscipline] = useState('');
  const [talentName, setTalentName] = useState('');
  const [talentEmail, setTalentEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [seniority, setSeniority] = useState('senior');
  const [talentStatement, setTalentStatement] = useState('');
  const [talentFile, setTalentFile] = useState<File | null>(null);

  // Submission feedback state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSubtext, setToastSubtext] = useState('');
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleCapability = (cap: string) => {
    setCapabilities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const submitPayload = async (
    payload: Record<string, unknown>,
    onSuccessReset: () => void,
    successHeadline: string
  ) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setFallbackMailtoUrl(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        delivery?: 'server' | 'mailto_fallback';
        recipient?: string;
        mailtoUrl?: string;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setErrorMessage(result.error || 'Unable to transmit inquiry. Please try again.');
        return;
      }

      setToastMessage(successHeadline);
      if (result.delivery === 'mailto_fallback' && result.mailtoUrl) {
        setFallbackMailtoUrl(result.mailtoUrl);
        setToastSubtext(
          `Opening your mail client addressed to ${INQUIRY_RECIPIENT}. If it did not open, use the direct send link.`
        );
        window.location.href = result.mailtoUrl;
      } else {
        setToastSubtext(`Direct dispatch transmitted to ${INQUIRY_RECIPIENT}.`);
      }

      setSubmitted(true);
      onSuccessReset();
    } catch {
      setErrorMessage(
        `Network error while sending inquiry. You can email ${INQUIRY_RECIPIENT} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPayload(
      {
        mode: 'client',
        name: clientName,
        email: clientEmail,
        phone: clientPhone,
        timeframe,
        capabilities,
        scope: clientScope,
        attachmentName: clientFile?.name,
      },
      () => {
        setCapabilities([]);
        setClientName('');
        setClientEmail('');
        setClientPhone('');
        setTimeframe('immediate');
        setClientScope('');
        setClientFile(null);
      },
      `CONFIDENTIAL CLIENT BRIEF PREPARED FOR ${INQUIRY_RECIPIENT.toUpperCase()}`
    );
  };

  const handleTalentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPayload(
      {
        mode: 'talent',
        name: talentName,
        email: talentEmail,
        discipline,
        portfolioUrl,
        seniority,
        statement: talentStatement,
        attachmentName: talentFile?.name,
      },
      () => {
        setDiscipline('');
        setTalentName('');
        setTalentEmail('');
        setPortfolioUrl('');
        setSeniority('senior');
        setTalentStatement('');
        setTalentFile(null);
      },
      `COLLECTIVE DOSSIER PREPARED FOR ${INQUIRY_RECIPIENT.toUpperCase()}`
    );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#d4af37] uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            DIRECT INITIATION PROTOCOL
          </div>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.65rem,6vw,3rem)] font-bold uppercase tracking-tight text-[#f5f6fa] leading-tight">
            LET&apos;S BUILD SOMETHING WORTH REMEMBERING.
          </h2>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3]">
            Select your protocol to calibrate direct access with Muramalla Vijay Kumar and the senior engineering syndicate.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex justify-center">
          <div className="bg-[#161720] p-1.5 rounded-lg flex items-center border border-white/5">
            <button
              type="button"
              onClick={() => {
                setMatrixMode('client');
                setErrorMessage(null);
              }}
              className={`px-6 py-2.5 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${matrixMode === 'client'
                ? 'bg-[#f5f6fa] text-[#050507] shadow-md'
                : 'text-[#9ba1b3] hover:text-white'
                }`}
            >
              CLIENT ENGAGEMENT
            </button>
            <button
              type="button"
              onClick={() => {
                setMatrixMode('talent');
                setErrorMessage(null);
              }}
              className={`px-6 py-2.5 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${matrixMode === 'talent'
                ? 'bg-[#00f0ff] text-[#050507] shadow-md'
                : 'text-[#9ba1b3] hover:text-white'
                }`}
            >
              JOIN THE COLLECTIVE // TALENT
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div
            role="alert"
            className="p-4 rounded-lg bg-[#1a1014] text-[#f5f6fa] border border-red-500/60 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p className="font-['Manrope'] text-xs sm:text-sm text-red-100">
                {errorMessage}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setErrorMessage(null)}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded font-mono text-xs uppercase cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        )}

        {/* Confirmation Toast */}
        {submitted && (
          <div
            role="status"
            className="p-4 rounded-lg bg-[#161720] text-[#f5f6fa] border border-[#d4af37] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xl animate-in fade-in duration-300"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#d4af37] block">
                  {toastMessage}
                </span>
                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-0.5">
                  {toastSubtext}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {fallbackMailtoUrl && (
                <a
                  href={fallbackMailtoUrl}
                  className="px-3 py-1.5 bg-[#d4af37] hover:brightness-110 rounded font-mono text-xs text-[#050507] font-bold uppercase transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>OPEN MAIL</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-3 py-1.5 bg-[#20222d] hover:bg-[#2b2e3c] rounded font-mono text-xs text-[#9ba1b3] hover:text-white uppercase transition-colors cursor-pointer"
              >
                DISMISS
              </button>
            </div>
          </div>
        )}

        {/* CLIENT ENGAGEMENT FORM */}
        {matrixMode === 'client' && (
          <form
            onSubmit={handleClientSubmit}
            className="bg-[#0f1017] rounded-lg p-6 sm:p-10 flex flex-col gap-8 border border-white/10 shadow-2xl"
          >
            {/* 01 Target Capabilities */}
            <div>
              <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-widest font-bold mb-3">
                01 // SELECT TARGET CAPABILITIES
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {TARGET_CAPABILITIES.map((cap) => (
                  <label
                    key={cap}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all border ${capabilities.includes(cap)
                      ? 'bg-[#161720] border-[#d4af37] text-white shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                      : 'bg-[#12131a] border-white/5 text-[#9ba1b3] hover:bg-[#161720]'
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={capabilities.includes(cap)}
                      onChange={() => toggleCapability(cap)}
                      className="accent-[#d4af37] w-4 h-4 rounded-none cursor-pointer"
                    />
                    <span className="font-mono text-xs uppercase">{cap}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Form Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="client-name"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  YOUR NAME / ORGANIZATION *
                </label>
                <input
                  id="client-name"
                  name="name"
                  required
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Marcus Vance // Property Group"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="client-email"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  ENCRYPTED DISPATCH EMAIL *
                </label>
                <input
                  id="client-email"
                  name="email"
                  required
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="client@sovereign-estates.com"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="client-phone"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  DIRECT PHONE // SIGNAL
                </label>
                <input
                  id="client-phone"
                  name="phone"
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+44 (0) 20 7946 0912"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="client-timeframe"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  PROJECT TIMEFRAME
                </label>
                <select
                  id="client-timeframe"
                  name="timeframe"
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] border border-white/5 focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="immediate">Immediate Dispatch (&lt; 30 Days)</option>
                  <option value="q2-q3">Q2 / Q3 2025 Pipeline</option>
                  <option value="off-plan">Off-Plan Superstructure Launch</option>
                  <option value="advisory">Ongoing Strategic Syndicate</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="client-scope"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  PROJECT SCOPE & SPATIAL REQUIREMENTS *
                </label>
                <textarea
                  id="client-scope"
                  name="scope"
                  required
                  rows={4}
                  value={clientScope}
                  onChange={(e) => setClientScope(e.target.value)}
                  placeholder="Describe the physical location, scale, digital specifications, CAD availability or AI workflows required..."
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#d4af37] resize-none"
                />
              </div>

              {/* CAD / Brief File Dropzone */}
              <div className="md:col-span-2">
                <label className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  OPTIONAL ARCHITECTURAL CAD / BRIEF ATTACHMENT
                </label>
                <label className="border border-dashed border-white/10 rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer hover:border-[#d4af37] transition-colors bg-[#12131a]/50">
                  <Upload className="w-6 h-6 text-[#9ba1b3] mb-1.5" />
                  <p className="font-mono text-xs text-[#9ba1b3] text-center">
                    Click or drop PDF brief, IFC/FBX 3D models, or confidential memo (Max 250MB)
                  </p>
                  <span className="font-mono text-[11px] text-[#d4af37] mt-1 font-bold">
                    {clientFile ? `ATTACHED: ${clientFile.name.toUpperCase()}` : 'NO FILE SELECTED'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setClientFile(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1b3]">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span>DIRECT TO {INQUIRY_RECIPIENT.toUpperCase()} • 4HR SLA RESPONSE</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#f5f6fa] text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT BRIEF'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* TALENT PIPELINE FORM */}
        {matrixMode === 'talent' && (
          <form
            onSubmit={handleTalentSubmit}
            className="bg-[#0f1017] rounded-lg p-6 sm:p-10 flex flex-col gap-8 border border-white/10 shadow-2xl animate-in fade-in duration-200"
          >
            <div>
              <label className="block font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-widest font-bold mb-3">
                01 // PRIMARY FIELD OF PROFICIENCY
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {TALENT_DISCIPLINES.map((disc) => (
                  <label
                    key={disc}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors border ${discipline === disc
                      ? 'bg-[#161720] border-[#00f0ff] text-white'
                      : 'bg-[#12131a] border-white/5 hover:border-[#00f0ff]/40 text-[#f5f6fa]'
                      }`}
                  >
                    <input
                      type="radio"
                      name="discipline"
                      value={disc}
                      checked={discipline === disc}
                      onChange={() => setDiscipline(disc)}
                      className="accent-[#00f0ff]"
                    />
                    <span className="font-mono text-xs uppercase">{disc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="talent-name"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  FULL NAME *
                </label>
                <input
                  id="talent-name"
                  name="talentName"
                  required
                  type="text"
                  value={talentName}
                  onChange={(e) => setTalentName(e.target.value)}
                  placeholder="Elena Vance"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="talent-email"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  TRANSMISSION EMAIL *
                </label>
                <input
                  id="talent-email"
                  name="talentEmail"
                  required
                  type="email"
                  value={talentEmail}
                  onChange={(e) => setTalentEmail(e.target.value)}
                  placeholder="elena.vance@studio.ai"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="talent-portfolio"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  PORTFOLIO / GITHUB / ARTSTATION URL *
                </label>
                <input
                  id="talent-portfolio"
                  name="portfolioUrl"
                  required
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://artstation.com/artist"
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="talent-seniority"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  SENIORITY / EXPERIENCE LEVEL
                </label>
                <select
                  id="talent-seniority"
                  name="seniority"
                  value={seniority}
                  onChange={(e) => setSeniority(e.target.value)}
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] border border-white/5 focus:outline-none focus:border-[#00f0ff]"
                >
                  <option value="senior">Senior Technical Specialist (5-8 yrs)</option>
                  <option value="lead">Syndicate Lead / Director (8+ yrs)</option>
                  <option value="researcher">Independent AI/Spatial Researcher</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="talent-statement"
                  className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold"
                >
                  STATEMENT OF PRACTICE // WHY VAIKA *
                </label>
                <textarea
                  id="talent-statement"
                  name="statement"
                  required
                  rows={3}
                  value={talentStatement}
                  onChange={(e) => setTalentStatement(e.target.value)}
                  placeholder="Describe your core achievements in real-time graphics, generative intelligence or architectural cinema..."
                  className="w-full bg-[#12131a] px-4 py-3 rounded text-sm font-['Manrope'] text-[#f5f6fa] placeholder:text-[#8a91a0] border border-white/5 focus:outline-none focus:border-[#00f0ff] resize-none"
                />
              </div>

              {/* Talent Dossier Dropzone */}
              <div className="md:col-span-2">
                <label className="block font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-wider mb-1.5 font-semibold">
                  CV / REEL BREAKDOWN DOSSIER
                </label>
                <label className="border border-dashed border-white/10 rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer hover:border-[#00f0ff] transition-colors bg-[#12131a]/50">
                  <FileText className="w-6 h-6 text-[#9ba1b3] mb-1.5" />
                  <p className="font-mono text-xs text-[#9ba1b3] text-center">
                    Click or drop PDF resume, showreel breakdown, or GitHub repo
                  </p>
                  <span className="font-mono text-[11px] text-[#00f0ff] mt-1 font-bold">
                    {talentFile ? `ATTACHED: ${talentFile.name.toUpperCase()}` : 'NO DOSSIER ATTACHED'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setTalentFile(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1b3]">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span>DIRECT TO {INQUIRY_RECIPIENT.toUpperCase()} • REMOTE / HYBRID SYNDICATE</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#00f0ff] text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
