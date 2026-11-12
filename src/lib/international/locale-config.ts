export type LocaleCode =
  | 'en-US'
  | 'en-GB'
  | 'en-CA'
  | 'en-AU'
  | 'de-DE'
  | 'en-DE'
  | 'en-NZ';

export type EditionKey = 'global' | LocaleCode;

export type DivisionSlug =
  | 'real-estate'
  | 'agent-services'
  | 'data-ai'
  | 'digital-marketing';

export const DIVISION_SLUGS: readonly DivisionSlug[] = [
  'real-estate',
  'agent-services',
  'data-ai',
  'digital-marketing',
] as const;

export interface LocaleConfig {
  code: LocaleCode;
  hreflang: LocaleCode;
  htmlLang: LocaleCode;
  ogLocale: string;
  pathPrefix: string;
  countryCode: 'US' | 'GB' | 'CA' | 'AU' | 'DE' | 'NZ';
  countryName: string;
  languageName: string;
  nativeLabel: string;
  shortLabel: string;
  currency: 'USD' | 'GBP' | 'CAD' | 'AUD' | 'EUR' | 'NZD';
  timezoneWindow: string;
  flagLabel: string;
  isGerman: boolean;
}

export const LOCALE_CONFIGS: Record<LocaleCode, LocaleConfig> = {
  'en-US': {
    code: 'en-US',
    hreflang: 'en-US',
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    pathPrefix: '/us',
    countryCode: 'US',
    countryName: 'United States',
    languageName: 'English',
    nativeLabel: 'United States — English',
    shortLabel: 'US · EN',
    currency: 'USD',
    timezoneWindow: 'EST / CST / PST',
    flagLabel: 'US',
    isGerman: false,
  },
  'en-GB': {
    code: 'en-GB',
    hreflang: 'en-GB',
    htmlLang: 'en-GB',
    ogLocale: 'en_GB',
    pathPrefix: '/uk',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    languageName: 'English',
    nativeLabel: 'United Kingdom — English',
    shortLabel: 'UK · EN',
    currency: 'GBP',
    timezoneWindow: 'GMT / BST',
    flagLabel: 'UK',
    isGerman: false,
  },
  'en-CA': {
    code: 'en-CA',
    hreflang: 'en-CA',
    htmlLang: 'en-CA',
    ogLocale: 'en_CA',
    pathPrefix: '/ca',
    countryCode: 'CA',
    countryName: 'Canada',
    languageName: 'English',
    nativeLabel: 'Canada — English',
    shortLabel: 'CA · EN',
    currency: 'CAD',
    timezoneWindow: 'EST / MST / PST',
    flagLabel: 'CA',
    isGerman: false,
  },
  'en-AU': {
    code: 'en-AU',
    hreflang: 'en-AU',
    htmlLang: 'en-AU',
    ogLocale: 'en_AU',
    pathPrefix: '/au',
    countryCode: 'AU',
    countryName: 'Australia',
    languageName: 'English',
    nativeLabel: 'Australia — English',
    shortLabel: 'AU · EN',
    currency: 'AUD',
    timezoneWindow: 'AEST / AWST',
    flagLabel: 'AU',
    isGerman: false,
  },
  'de-DE': {
    code: 'de-DE',
    hreflang: 'de-DE',
    htmlLang: 'de-DE',
    ogLocale: 'de_DE',
    pathPrefix: '/de',
    countryCode: 'DE',
    countryName: 'Deutschland',
    languageName: 'Deutsch',
    nativeLabel: 'Deutschland — Deutsch',
    shortLabel: 'DE · DE',
    currency: 'EUR',
    timezoneWindow: 'MEZ / MESZ',
    flagLabel: 'DE',
    isGerman: true,
  },
  'en-DE': {
    code: 'en-DE',
    hreflang: 'en-DE',
    htmlLang: 'en-DE',
    ogLocale: 'en_DE',
    pathPrefix: '/de/en',
    countryCode: 'DE',
    countryName: 'Germany',
    languageName: 'English',
    nativeLabel: 'Germany — English',
    shortLabel: 'DE · EN',
    currency: 'EUR',
    timezoneWindow: 'CET / CEST',
    flagLabel: 'DE',
    isGerman: false,
  },
  'en-NZ': {
    code: 'en-NZ',
    hreflang: 'en-NZ',
    htmlLang: 'en-NZ',
    ogLocale: 'en_NZ',
    pathPrefix: '/nz',
    countryCode: 'NZ',
    countryName: 'New Zealand',
    languageName: 'English',
    nativeLabel: 'New Zealand — English',
    shortLabel: 'NZ · EN',
    currency: 'NZD',
    timezoneWindow: 'NZST / NZDT',
    flagLabel: 'NZ',
    isGerman: false,
  },
};

export const SUPPORTED_LOCALES: readonly LocaleCode[] = [
  'en-US',
  'en-GB',
  'en-CA',
  'en-AU',
  'de-DE',
  'en-DE',
  'en-NZ',
] as const;

export function isValidLocale(value: string): value is LocaleCode {
  return SUPPORTED_LOCALES.includes(value as LocaleCode);
}

export function isValidDivisionSlug(value: string): value is DivisionSlug {
  return DIVISION_SLUGS.includes(value as DivisionSlug);
}

/**
 * Resolves the active locale from a URL pathname.
 * Checks `/de/en` before `/de` so English-in-Germany routes never collapse into `/de`.
 */
export function detectLocaleFromPathname(pathname: string): EditionKey {
  const clean = pathname.split('?')[0].split('#')[0] || '/';
  if (clean === '/de/en' || clean.startsWith('/de/en/')) {
    return 'en-DE';
  }
  for (const code of SUPPORTED_LOCALES) {
    if (code === 'en-DE') continue;
    const prefix = LOCALE_CONFIGS[code].pathPrefix;
    if (clean === prefix || clean.startsWith(`${prefix}/`)) {
      return code;
    }
  }
  return 'global';
}

