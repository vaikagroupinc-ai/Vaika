import type { Metadata } from 'next';
import { AgentServicesPageView } from '@/components/services/views/AgentServicesPageView';
import {
  buildAbsoluteEditionUrl,
  buildHreflangAlternates,
} from '@/lib/international/route-registry';
import { VAIKA_FAVICONS } from '@/lib/international/seo-metadata';

export const metadata: Metadata = {
  icons: VAIKA_FAVICONS,
  title: 'Agent Services & Real Estate Operations — VAIKA GROUP',
  description:
    'Institutional operational backbone for top real estate agents: Meta listing promotion ads, buyer & seller lead funnels, transaction coordination, and CRM support.',
  keywords: [
    'Real Estate Agent Marketing',
    'Listing Promotion Ads',
    'Real Estate Lead Funnels',
    'Transaction Coordination',
    'Real Estate Virtual Assistant',
    'CRM Management',
    'MLS Coordination',
    'Vaika Group',
  ],
  openGraph: {
    title: 'Agent Services & Real Estate Operations — VAIKA GROUP',
    description:
      'Complete operational, marketing, and administrative support system for real estate agents and brokerages.',
    url: 'https://vaikagroup.com/services/agent-services',
    siteName: 'VAIKA GROUP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'VAIKA Agent Services & Lead Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: buildAbsoluteEditionUrl('global', 'services/agent-services'),
    languages: buildHreflangAlternates('services/agent-services'),
  },
};

export default function AgentServicesPage() {
  return <AgentServicesPageView />;
}

