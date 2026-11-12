import type { Metadata } from 'next';
import { DigitalMarketingPageView } from '@/components/services/views/DigitalMarketingPageView';
import {
  buildAbsoluteEditionUrl,
  buildHreflangAlternates,
} from '@/lib/international/route-registry';

export const metadata: Metadata = {
  title: 'Digital Marketing & Creative — Strategy, Web & Video — VAIKA GROUP',
  description:
    'Integrated digital growth division featuring 15 consolidated services across social media strategy, Meta advertising, technical and local SEO, email automation, brand identity, Figma UI/UX, Next.js development, and video editing.',
  keywords: [
    'Social Media Management & Strategy',
    'Meta Advertising Agency',
    'Technical SEO & Local SEO',
    'Google Business Profile Optimization',
    'Email Marketing Automation',
    'B2B Copywriting & SEO Blogs',
    'Brand Strategy & Logo Design',
    'Figma UI/UX Design',
    'Next.js Website Development',
    'YouTube & Reels Video Editing',
    'VAIKA GROUP',
  ],
  openGraph: {
    title: 'Digital Marketing & Creative — Strategy, Web & Video — VAIKA GROUP',
    description:
      'Integrated digital growth, brand identity, web engineering, and video production organized into 15 specialized B2B services.',
    url: 'https://vaikagroup.com/services/digital-marketing',
    siteName: 'VAIKA GROUP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'VAIKA Digital Marketing & Creative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: buildAbsoluteEditionUrl('global', 'services/digital-marketing'),
    languages: buildHreflangAlternates('services/digital-marketing'),
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingPageView />;
}

