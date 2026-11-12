'use client';

import React from 'react';
import { DIGITAL_MARKETING_DIVISION } from '@/data/servicesData';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';
import { DigitalMarketingHud } from '@/components/services/DigitalMarketingHud';

export function DigitalMarketingPageView() {
  return (
    <ServicePageTemplate
      data={DIGITAL_MARKETING_DIVISION}
      heroElement={<DigitalMarketingHud />}
    />
  );
}

