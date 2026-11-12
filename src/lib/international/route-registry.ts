import { DATA_AI_DIVISION, DIGITAL_MARKETING_DIVISION } from '@/data/servicesData';
import {
  DIVISION_SLUGS,
  DivisionSlug,
  EditionKey,
  LOCALE_CONFIGS,
  SUPPORTED_LOCALES,
  detectLocaleFromPathname,
} from './locale-config';
import { getSiteUrl } from './site-config';

/**
 * Stable editorial/deployment timestamps rather than fabricated build-time dates.
 */
export const PUBLISHED_TIMESTAMPS = {
  globalCore: '2026-11-11T00:00:00.000Z',
  internationalHubs: '2026-11-12T00:00:00.000Z',
  serviceCatalog: '2026-11-11T00:00:00.000Z',
} as const;

export type LogicalRouteKey =
  | 'home'
  | `services/${DivisionSlug}`;

/**
 * Builds an internal path (always without trailing slash except root `/`).
 */
export function buildEditionPath(edition: EditionKey, logicalRoute: LogicalRouteKey = 'home'): string {
  const suffix = logicalRoute === 'home' ? '' : `/${logicalRoute}`;
  if (edition === 'global') {
    return suffix || '/';
  }
  return `${LOCALE_CONFIGS[edition].pathPrefix}${suffix}`;
}

/**
 * Builds an absolute canonical URL for an edition + logical route.
 */
export function buildAbsoluteEditionUrl(
  edition: EditionKey,
  logicalRoute: LogicalRouteKey = 'home',
  baseUrl: string = getSiteUrl()
): string {
  const path = buildEditionPath(edition, logicalRoute);
  return path === '/' ? baseUrl : `${baseUrl}${path}`;
}

/**
 * Builds the reciprocal hreflang map (`x-default` + all 7 target markets)
 * for any logical route that exists across all editions.
 */
export function buildHreflangAlternates(
  logicalRoute: LogicalRouteKey = 'home',
  baseUrl: string = getSiteUrl()
): Record<string, string> {
  const languages: Record<string, string> = {
    'x-default': buildAbsoluteEditionUrl('global', logicalRoute, baseUrl),
  };
  for (const locale of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIGS[locale].hreflang] = buildAbsoluteEditionUrl(
      locale,
      logicalRoute,
      baseUrl
    );
  }
  return languages;
}

/**
 * Maps any current pathname to the closest valid equivalent route in a target edition.
 * Preserves division context (`services/real-estate`, etc.) when switching markets.
 */
export function mapPathnameToEdition(pathname: string, targetEdition: EditionKey): string {
  const clean = pathname.split('?')[0].split('#')[0] || '/';
  const currentEdition = detectLocaleFromPathname(clean);

  let stripped = clean;
  if (currentEdition !== 'global') {
    const prefix = LOCALE_CONFIGS[currentEdition].pathPrefix;
    stripped = clean.slice(prefix.length) || '/';
  }

  for (const slug of DIVISION_SLUGS) {
    if (stripped === `/services/${slug}` || stripped.startsWith(`/services/${slug}/`)) {
      return buildEditionPath(targetEdition, `services/${slug}`);
    }
  }

  return buildEditionPath(targetEdition, 'home');
}

export interface PublishedRouteEntry {
  url: string;
  path: string;
  edition: EditionKey;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
}

/**
 * Centralized registry of all indexable, canonical URLs for sitemap generation
 * and automated SEO validation.
 */
export function getAllPublishedRoutes(baseUrl: string = getSiteUrl()): PublishedRouteEntry[] {
  const entries: PublishedRouteEntry[] = [];
  const homeAlternates = buildHreflangAlternates('home', baseUrl);

  // 1. Global x-default home
  entries.push({
    url: baseUrl,
    path: '/',
    edition: 'global',
    lastModified: PUBLISHED_TIMESTAMPS.globalCore,
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: { languages: homeAlternates },
  });

  // 2. Global 4 divisions
  for (const division of DIVISION_SLUGS) {
    const logicalRoute: LogicalRouteKey = `services/${division}`;
    const path = buildEditionPath('global', logicalRoute);
    entries.push({
      url: `${baseUrl}${path}`,
      path,
      edition: 'global',
      lastModified: PUBLISHED_TIMESTAMPS.globalCore,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: buildHreflangAlternates(logicalRoute, baseUrl) },
    });
  }

  // 3. Global legacy/alias showcase routes kept canonical at root
  entries.push({
    url: `${baseUrl}/estate`,
    path: '/estate',
    edition: 'global',
    lastModified: PUBLISHED_TIMESTAMPS.globalCore,
    changeFrequency: 'monthly',
    priority: 0.75,
  });

  // 4. Global deep service detail pages (Data & AI + Digital Marketing)
  for (const service of DATA_AI_DIVISION.categories.flatMap((c) => c.services)) {
    const path = `/services/data-ai/${service.slug}`;
    entries.push({
      url: `${baseUrl}${path}`,
      path,
      edition: 'global',
      lastModified: PUBLISHED_TIMESTAMPS.serviceCatalog,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const service of DIGITAL_MARKETING_DIVISION.categories.flatMap((c) => c.services)) {
    const path = `/services/digital-marketing/${service.slug}`;
    entries.push({
      url: `${baseUrl}${path}`,
      path,
      edition: 'global',
      lastModified: PUBLISHED_TIMESTAMPS.serviceCatalog,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // 5. All 7 international editions: regional home + 4 regional divisions each
  for (const locale of SUPPORTED_LOCALES) {
    const regionalHomePath = buildEditionPath(locale, 'home');
    entries.push({
      url: `${baseUrl}${regionalHomePath}`,
      path: regionalHomePath,
      edition: locale,
      lastModified: PUBLISHED_TIMESTAMPS.internationalHubs,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: { languages: homeAlternates },
    });

    for (const division of DIVISION_SLUGS) {
      const logicalRoute: LogicalRouteKey = `services/${division}`;
      const path = buildEditionPath(locale, logicalRoute);
      entries.push({
        url: `${baseUrl}${path}`,
        path,
        edition: locale,
        lastModified: PUBLISHED_TIMESTAMPS.internationalHubs,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: { languages: buildHreflangAlternates(logicalRoute, baseUrl) },
      });
    }
  }

  return entries;
}
