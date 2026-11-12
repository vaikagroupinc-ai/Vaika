'use client';

import React from 'react';
import { AGENT_SERVICES_DIVISION } from '@/data/servicesData';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';
import { AgentOpsHud } from '@/components/services/AgentOpsHud';

export function AgentServicesPageView() {
  return (
    <ServicePageTemplate
      data={AGENT_SERVICES_DIVISION}
      heroElement={<AgentOpsHud />}
    />
  );
}

