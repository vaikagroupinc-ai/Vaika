import type { Metadata } from 'next';
import {
  DivisionSlug,
  LOCALE_CONFIGS,
  LocaleCode,
  SUPPORTED_LOCALES,
} from './locale-config';
import { REGIONAL_CONTENT } from './regional-content';
import {
  LogicalRouteKey,
  buildAbsoluteEditionUrl,
  buildHreflangAlternates,
} from './route-registry';
import {
  getGoogleVerificationToken,
  getSiteUrl,
  isProductionIndexingEnabled,
} from './site-config';

const DEFAULT_OG_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCO84LPO5WoDq4JSeMbIFp6_OHWxXZId97XpUJkHMAAF0wBmkNYPje5qciUpxJZ7REMBX0lfWpWPOPSnZsEy2N1WPonF2MtbyiGiht7tq6y2sYt8UXPGdjMtzQ6BlvzkItVvZuTrWcncxg7grivRYnkpZ4ecMSjyPugbPbg2WDOJGGFJijKm1JMPh2BYlx0D_ROZoqZIxPD8kudUCeq1WO2gp3WJW82hav1-rIiN8-p9sccuG0afN5G';

function getRobotsMetadata(): Metadata['robots'] {
  const indexable = isProductionIndexingEnabled();
  return {
    index: indexable,
    follow: indexable,
    googleBot: {
      index: indexable,
      follow: indexable,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

function getVerificationMetadata(): Metadata['verification'] | undefined {
  const google = getGoogleVerificationToken();
  return google ? { google } : undefined;
}

export function buildRootGlobalMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = buildAbsoluteEditionUrl('global', 'home', siteUrl);
  const languages = buildHreflangAlternates('home', siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title: 'VAIKA GROUP — Global Creative Technology & Spatial Synthesis',
    description:
      'India-headquartered creative technology, real estate media, AI data operations, and digital growth studio serving clients across the United States, United Kingdom, Canada, Germany, Australia, and New Zealand.',
    keywords: [
      'Architectural Cinematography',
      'Real Estate Media Production',
      'Virtual Staging',
      '3D Exterior Renders',
      'AI Data Annotation Services',
      'Digital Marketing Agency',
      'Real Estate Virtual Assistant',
      'Vaika Group',
      'Vaika Group India',
    ],
    authors: [{ name: 'Muramalla Vijay Kumar — VAIKA GROUP' }],
    creator: 'VAIKA GROUP',
    robots: getRobotsMetadata(),
    verification: getVerificationMetadata(),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: SUPPORTED_LOCALES.map((l) => LOCALE_CONFIGS[l].ogLocale),
      url: canonicalUrl,
      siteName: 'Vaika Group',
      title: 'VAIKA GROUP — Global Creative Technology',
      description:
        'We Build Visual Worlds. Intelligent Systems. Ultra-prime architectural media, real-time spatial computing, and autonomous neural pipelines.',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Vaika Group Spatial Monolith',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'VAIKA GROUP — Global Creative Technology',
      description:
        'High-concept architectural cinematography, AAA real-time 3D, and autonomous neural pipelines.',
      creator: '@VaikaGroup',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
  };
}

export function buildGlobalDivisionMetadata(
  divisionSlug: DivisionSlug,
  title: string,
  description: string
): Metadata {
  const siteUrl = getSiteUrl();
  const logicalRoute: LogicalRouteKey = `services/${divisionSlug}`;
  const canonicalUrl = buildAbsoluteEditionUrl('global', logicalRoute, siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    robots: getRobotsMetadata(),
    alternates: {
      canonical: canonicalUrl,
      languages: buildHreflangAlternates(logicalRoute, siteUrl),
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'Vaika Group',
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@VaikaGroup',
    },
  };
}

export function buildRegionalMetadata(
  locale: LocaleCode,
  divisionSlug?: DivisionSlug
): Metadata {
  const siteUrl = getSiteUrl();
  const config = LOCALE_CONFIGS[locale];
  const content = REGIONAL_CONTENT[locale];
  const logicalRoute: LogicalRouteKey = divisionSlug
    ? `services/${divisionSlug}`
    : 'home';

  const canonicalUrl = buildAbsoluteEditionUrl(locale, logicalRoute, siteUrl);
  const languages = buildHreflangAlternates(logicalRoute, siteUrl);

  const title = divisionSlug
    ? content.divisions[divisionSlug].metaTitle
    : content.metaTitle;
  const description = divisionSlug
    ? content.divisions[divisionSlug].metaDescription
    : content.metaDescription;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: content.keywords,
    authors: [{ name: 'Muramalla Vijay Kumar — VAIKA GROUP' }],
    creator: 'VAIKA GROUP',
    robots: getRobotsMetadata(),
    verification: getVerificationMetadata(),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: config.ogLocale,
      alternateLocale: SUPPORTED_LOCALES.filter((l) => l !== locale).map(
        (l) => LOCALE_CONFIGS[l].ogLocale
      ),
      url: canonicalUrl,
      siteName: 'Vaika Group',
      title,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@VaikaGroup',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
  };
}

