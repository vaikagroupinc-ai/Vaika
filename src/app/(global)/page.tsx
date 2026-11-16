'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DivisionDrawer } from '@/components/layout/DivisionDrawer';
import { FloatingControls } from '@/components/layout/FloatingControls';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ValidationSection } from '@/components/sections/ValidationSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { ProjectGalleryModal } from '@/components/services/ProjectGalleryModal';
import { TeamModal } from '@/components/ui/TeamModal';
import { VaikaIntroWrapper } from '@/components/intro/VaikaIntroWrapper';
import { REAL_ESTATE_PORTFOLIO_PROJECTS } from '@/data/realEstatePortfolioGallery';
import { DemonstrationItem, DivisionKey, ProjectItem, TeamMember } from '@/types';
import dynamic from 'next/dynamic';

const Interactive3DViewer = dynamic(
  () => import('@/components/three/Interactive3DViewer').then((mod) => mod.Interactive3DViewer),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[420px] lg:h-[500px] rounded-lg border border-white/10 bg-[#0a0a0f] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#00f0ff]/20 border-t-[#00f0ff] animate-spin mb-4" />
        <span className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
          INITIALIZING SPATIAL VIEWPORT
        </span>
        <span className="font-mono text-[11px] text-[#9ba1b3] mt-2">
          Loading WebGL shaders and real-time mesh pipeline...
        </span>
      </div>
    ),
  }
);

export default function Home() {
  const [selectedDivision, setSelectedDivision] = useState<DivisionKey | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedDemonstration, setSelectedDemonstration] = useState<DemonstrationItem | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Active section intersection observer
  useEffect(() => {
    const sections = ['hero', 'services', 'portfolio', 'founder-studio', 'team', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCommission = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <VaikaIntroWrapper />

      <div id="website-root">
        {/* Global Navigation */}
        <Navbar
          onOpenDivisionDrawer={(div) => setSelectedDivision(div)}
          activeSection={activeSection}
        />

        <main className="w-full bg-[#050507] text-[#f5f6fa] overflow-x-clip min-h-screen">
          {/* SECTION 01: HERO */}
          <HeroSection
            onExplore={() => handleScrollTo('#services')}
            onStartProject={() => handleScrollTo('#contact')}
          />

          {/* SECTION 02: SERVICES & 3 WORLDS */}
          <ServicesSection
            onOpenDivisionDrawer={(div) => setSelectedDivision(div)}
          />

          {/* INTERACTIVE 3D STUDIO FEATURE SHOWCASE (Deep Dive) */}
          <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-['Space_Grotesk'] text-xs text-[#00f0ff] uppercase tracking-widest font-bold">
                    {'//'} REAL-TIME SPATIAL DEMO
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight mt-1">
                    INTERACTIVE REAL-TIME VIEWPORT
                  </h3>
                </div>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
                  Interact with the 3D model in real-time. Switch between Wireframe, Ambient Clay, and RTX Path-Tracer passes. Drag to orbit and inspect spatial volume.
                </p>
              </div>

              <Interactive3DViewer />
            </div>
          </section>

          {/* SECTION 03: VALIDATION & AUDIO MEMO AUDIT */}
          <ValidationSection />

          {/* SECTION 04: LEADERSHIP & TEAM */}
          <TeamSection
            onSelectTeamMember={(member) => setSelectedTeamMember(member)}
          />

          {/* SECTION 05: SELECTED WORK / PORTFOLIO */}
          <PortfolioSection
            onSelectProject={(project) => {
              if (project.category === 'estate') {
                const demo = REAL_ESTATE_PORTFOLIO_PROJECTS.find(
                  (d) =>
                    d.image === project.image ||
                    d.id === project.id ||
                    d.id === `demo-${project.id.replace(/^estate-/, '')}` ||
                    (project.id === 'estate-hdr-flambient' && d.id === 'demo-flambient') ||
                    (project.id === 'estate-day-to-dusk' && d.id === 'demo-day-dusk') ||
                    (project.id === 'estate-virtual-staging' && d.id === 'demo-virtual-staging') ||
                    (project.id === 'estate-aerial-drone' && d.id === 'demo-aerial-drone') ||
                    (project.id === 'estate-matterport-3d' && d.id === 'demo-matterport-3d')
                );
                if (demo) {
                  setSelectedDemonstration(demo);
                  return;
                }
              }
              setSelectedProject(project);
            }}
            onSelectDemonstration={(demo) => setSelectedDemonstration(demo)}
          />

          {/* SECTION 06: CONTACT / ENGAGEMENT MATRIX */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Fast Controls */}
        <FloatingControls />

        {/* Division Explorer Drawer */}
        <DivisionDrawer
          division={selectedDivision}
          onClose={() => setSelectedDivision(null)}
          onCommission={handleCommission}
        />

        {/* Project Case Study Dossier Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Real Estate Capability Benchmark Slideshow / Gallery Modal */}
        <ProjectGalleryModal
          project={selectedDemonstration}
          accentColor="#d4af37"
          onClose={() => setSelectedDemonstration(null)}
        />

        {/* Team Member Biography Modal */}
        <TeamModal
          member={selectedTeamMember}
          onClose={() => setSelectedTeamMember(null)}
        />
      </div>
    </>
  );
}
