import {
  DivisionSlug,
  LOCALE_CONFIGS,
  LocaleCode,
} from './locale-config';
import { REGIONAL_CONTENT } from './regional-content';
import {
  LogicalRouteKey,
  buildAbsoluteEditionUrl,
} from './route-registry';
import { getSiteUrl } from './site-config';

/**
 * Canonical Organization / ProfessionalService schema anchored strictly in India HQ.
 * Does NOT fabricate physical local offices in target client countries.
 */
export function buildOrganizationSchema(baseUrl: string = getSiteUrl()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'VAIKA GROUP',
    url: `${baseUrl}/`,
    email: 'vijay@vaikagroup.com',
    description:
      'India-headquartered real estate media & 3D visualization, agent services, AI data operations, and technical SEO growth studio serving global clients.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'Country', name: 'India' },
    ],
    availableLanguage: ['English', 'German'],
  };
}

export function buildRegionalJsonLdGraph(
  locale: LocaleCode,
  divisionSlug?: DivisionSlug,
  baseUrl: string = getSiteUrl()
) {
  const config = LOCALE_CONFIGS[locale];
  const content = REGIONAL_CONTENT[locale];
  const logicalRoute: LogicalRouteKey = divisionSlug
    ? `services/${divisionSlug}`
    : 'home';

  const pageUrl = buildAbsoluteEditionUrl(locale, logicalRoute, baseUrl);
  const regionalHomeUrl = buildAbsoluteEditionUrl(locale, 'home', baseUrl);
  const pageName = divisionSlug
    ? content.divisions[divisionSlug].metaTitle
    : content.metaTitle;
  const pageDescription = divisionSlug
    ? content.divisions[divisionSlug].metaDescription
    : content.metaDescription;

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'VAIKA GROUP',
      item: `${baseUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: config.countryName,
      item: regionalHomeUrl,
    },
  ];

  if (divisionSlug) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: content.divisions[divisionSlug].title,
      item: pageUrl,
    });
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'VAIKA GROUP',
      inLanguage: ['en', 'en-US', 'en-GB', 'en-CA', 'en-AU', 'de-DE', 'en-DE', 'en-NZ'],
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageName,
      description: pageDescription,
      inLanguage: config.htmlLang,
      isPartOf: { '@id': `${baseUrl}/#website` },
      about: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
    buildOrganizationSchema(baseUrl),
  ];

  if (divisionSlug) {
    const division = content.divisions[divisionSlug];
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: division.title,
      description: division.summary,
      serviceType: division.title,
      inLanguage: config.htmlLang,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: config.countryCode === 'DE' ? 'Germany' : config.countryName,
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

