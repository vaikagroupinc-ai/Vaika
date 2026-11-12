'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { REAL_ESTATE_DIVISION } from '@/data/servicesData';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const RealEstateHero = dynamic(
  () => import('@/components/services/heroes/RealEstateHero').then((mod) => mod.RealEstateHero),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-[1080px] mx-auto h-[380px] sm:h-[480px] rounded-[20px] bg-[#0a0a0f] animate-pulse border border-[#d4af37]/20" />
    ),
  }
);

export function RealEstatePageView() {
  return (
    <ServicePageTemplate
      data={REAL_ESTATE_DIVISION}
      heroElement={<RealEstateHero />}
    />
  );
}

