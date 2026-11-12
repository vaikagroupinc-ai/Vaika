'use client';

import React, { useState } from 'react';

export function AgentOpsHud() {
  const [activeTab, setActiveTab] = useState<'crm' | 'funnel' | 'showing'>('crm');

  return (
    <div className="w-full bg-[#0a0a0f] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#12131a] border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white">
            {'LIVE AGENT OPERATIONS MATRIX // REAL-TIME DISPATCH'}
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#050507] p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('crm')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'crm'
                ? 'bg-[#20222d] text-[#e1e2e6] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ CRM PIPELINE ]
          </button>
          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'funnel'
                ? 'bg-[#20222d] text-[#d4af37] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ LEAD ENGINE ]
          </button>
          <button
            onClick={() => setActiveTab('showing')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'showing'
                ? 'bg-[#20222d] text-[#e1e2e6] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ SHOWINGS & TC ]
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 bg-[#0d0e15] min-h-[300px]">
        {activeTab === 'crm' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
            {/* Col 1 */}
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#d4af37] uppercase">
                  INBOUND LEADS (14)
                </span>
                <span className="font-mono text-[10px] text-[#9ba1b3]">&lt;2m SLA</span>
              </div>
              <div className="p-3 rounded bg-[#161720] border border-[#d4af37]/20 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>Waterfront Buyer Lead</span>
                  <span className="font-mono text-[10px] text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded">
                    $3.8M
                  </span>
                </div>
                <p className="text-[11px] text-[#9ba1b3]">
                  Opted in via Meta carousel. Pre-approval verified. Initial SMS sent.
                </p>
                <span className="font-mono text-[9px] text-[#525866] pt-1">
                  STATUS: AUTO-NURTURE ACTIVE
                </span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                  QUALIFIED & NURTURED (28)
                </span>
                <span className="font-mono text-[10px] text-[#d4af37]">AUTO-DRIP</span>
              </div>
              <div className="p-3 rounded bg-[#161720] border border-white/5 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>Past Client Referral</span>
                  <span className="font-mono text-[10px] text-[#e1e2e6] bg-white/5 px-1.5 py-0.5 rounded">
                    $2.4M
                  </span>
                </div>
                <p className="text-[11px] text-[#9ba1b3]">
                  Opened monthly market newsletter 3x. Responded to valuation email.
                </p>
                <span className="font-mono text-[9px] text-[#d4af37] pt-1">
                  STAGE: SHOWING SCHEDULED
                </span>
              </div>
            </div>

            {/* Col 3 */}
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                  ACTIVE SHOWINGS (9)
                </span>
                <span className="font-mono text-[10px] text-[#9ba1b3]">COORDINATED</span>
              </div>
              <div className="p-3 rounded bg-[#161720] border border-white/5 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>880 Ocean Promenade</span>
                  <span className="font-mono text-[10px] text-[#e1e2e6] bg-white/5 px-1.5 py-0.5 rounded">
                    TODAY 15:30
                  </span>
                </div>
                <p className="text-[11px] text-[#9ba1b3]">
                  ShowingTime lockbox cleared. Buyer agent credentials verified.
                </p>
                <span className="font-mono text-[9px] text-[#525866] pt-1">
                  FEEDBACK FORM: QUEUED
                </span>
              </div>
            </div>

            {/* Col 4 */}
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#d4af37] uppercase">
                  UNDER ESCROW / TC (6)
                </span>
                <span className="font-mono text-[10px] text-[#d4af37]">$19.2M VOL</span>
              </div>
              <div className="p-3 rounded bg-[#161720] border border-[#d4af37]/30 flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>Villa Bellisima</span>
                  <span className="font-mono text-[10px] text-[#d4af37] font-bold">
                    $6,900,000
                  </span>
                </div>
                <p className="text-[11px] text-[#9ba1b3]">
                  TC update: Title search completed. Inspection contingency waived.
                </p>
                <span className="font-mono text-[9px] text-[#d4af37] pt-1">
                  CLOSING IN 5 DAYS
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'funnel' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#d4af37] uppercase">
                  ACTIVE META AD CAMPAIGNS
                </span>
                <span className="font-mono text-[10px] text-white">8 ACTIVE SETS</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">IG Luxury Property Carousel</span>
                  <span className="font-mono text-[#d4af37]">$2.14 CPL</span>
                </div>
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">Facebook Local Homeowner Targeting</span>
                  <span className="font-mono text-[#d4af37]">$3.42 CPL</span>
                </div>
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">High-Intent Instant Form Leads</span>
                  <span className="font-mono text-[#d4af37]">21.4% Opt-In</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                  DYNAMIC LANDING FUNNELS
                </span>
                <span className="font-mono text-[10px] text-[#9ba1b3]">SUB-SECOND LOAD</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">Instant Home Value Valuation</span>
                  <span className="font-mono text-[#e1e2e6]">34.8% Opt-in</span>
                </div>
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">Off-Market Listing Vault</span>
                  <span className="font-mono text-[#e1e2e6]">41.2% Opt-in</span>
                </div>
                <div className="p-2.5 rounded bg-[#161720] flex justify-between items-center">
                  <span className="text-[#f5f6fa]">Private Neighborhood Tour RSVP</span>
                  <span className="font-mono text-[#e1e2e6]">28.6% Opt-in</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#d4af37] uppercase">
                  AUTOMATED NURTURE TRIGGERS
                </span>
                <span className="font-mono text-[10px] text-[#d4af37]">&lt;120s SPEED</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-[#161720] flex flex-col gap-1">
                  <span className="font-semibold text-white">Instant 2-Way SMS Outreach</span>
                  <p className="text-[11px] text-[#9ba1b3]">
                    Personalized SMS sent within 90 seconds of lead submission with direct agent calendar link.
                  </p>
                </div>
                <div className="p-2.5 rounded bg-[#161720] flex flex-col gap-1">
                  <span className="font-semibold text-white">CRM Automated Enrichment</span>
                  <p className="text-[11px] text-[#9ba1b3]">
                    Address, social profiles, and property tax records automatically appended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'showing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                SHOWING COORDINATION
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Zero double-booking calendar routing. Access codes dispatched, seller notifications sent, and feedback collected after every showing.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#d4af37]">
                STATUS: 18 SHOWINGS MANAGED THIS WEEK
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                MLS LISTING INPUT & COMPLIANCE
              </span>
              <p className="text-xs text-[#9ba1b3]">
                High-res photo ordering, tax document attachment, room measurement verification, and syndication to Zillow/Realtor.com.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#e1e2e6]">
                STATUS: ZERO COMPLIANCE INFRACTIONS
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                DEDICATED TRANSACTION COORDINATION
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Full escrow timeline supervision, DocuSign signature tracking, contingency milestone verification, and broker compliance audits.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#d4af37]">
                STATUS: 99.4% ON-TIME CLOSING RATE
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#12131a] py-3 px-4 sm:px-6 text-center border-t border-white/10 text-xs font-mono">
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">RESPONSE TIME</span>
          <span className="text-white font-bold">&lt; 3 MINUTES</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">TIME SAVED</span>
          <span className="text-white font-bold">18.4 HRS / WEEK</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">ON-TIME CLOSINGS</span>
          <span className="text-[#d4af37] font-bold">99.4% SLA</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">INTEGRATIONS</span>
          <span className="text-[#e1e2e6] font-bold">FUB, kvCORE, LOOT</span>
        </div>
      </div>
    </div>
  );
}
