import type { Metadata } from 'next';
import { RealEstatePageView } from '@/components/services/views/RealEstatePageView';
import {
  buildAbsoluteEditionUrl,
  buildHreflangAlternates,
} from '@/lib/international/route-registry';
import { VAIKA_FAVICONS } from '@/lib/international/seo-metadata';

export const metadata: Metadata = {
  icons: VAIKA_FAVICONS,
  title: 'Real Estate Media & Visualization — VAIKA GROUP',
  description:
    'Premium architectural cinematography, HDR flambient photo editing, virtual staging, 3D exterior/interior renders, and property marketing systems.',
  keywords: [
    'Real Estate Photography',
    'HDR Photo Editing',
    'Virtual Staging',
    '2D & 3D Floor Plans',
    '3D Exterior & Interior Renders',
    'Listing Video Editing',
    'Twilight Conversion',
    'Vaika Group',
  ],
  openGraph: {
    title: 'Real Estate Media & Visualization — VAIKA GROUP',
    description:
      'Premium real estate media production, property visualization, listing content, and digital property marketing solutions.',
    url: 'https://vaikagroup.com/services/real-estate',
    siteName: 'VAIKA GROUP',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO84LPO5WoDq4JSeMbIFp6_OHWxXZId97XpUJkHMAAF0wBmkNYPje5qciUpxJZ7REMBX0lfWpWPOPSnZsEy2N1WPonF2MtbyiGiht7tq6y2sYt8UXPGdjMtzQ6BlvzkItVvZuTrWcncxg7grivRYnkpZ4ecMSjyPugbPbg2WDOJGGFJijKm1JMPh2BYlx0D_ROZoqZIxPD8kudUCeq1WO2gp3WJW82hav1-rIiN8-p9sccuG0afN5G',
        width: 1200,
        height: 630,
        alt: 'VAIKA Real Estate Media & Visualization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: buildAbsoluteEditionUrl('global', 'services/real-estate'),
    languages: buildHreflangAlternates('services/real-estate'),
  },
};

export default function RealEstateServicePage() {
  return <RealEstatePageView />;
}

