export interface RegionalClockConfig {
  id: string;
  label: string;
  timeZone: string;
  locale: string;
  fallback: string;
  isHq?: boolean;
}

export const HQ_REGION: RegionalClockConfig = {
  id: 'india',
  label: 'INDIA (HQ)',
  timeZone: 'Asia/Kolkata',
  locale: 'en-IN',
  fallback: '--:-- IST',
  isHq: true,
};

export const CLIENT_MARKET_REGIONS: RegionalClockConfig[] = [
  {
    id: 'usa',
    label: 'UNITED STATES',
    timeZone: 'America/New_York',
    locale: 'en-US',
    fallback: '--:-- ET',
  },
  {
    id: 'uk',
    label: 'UNITED KINGDOM',
    timeZone: 'Europe/London',
    locale: 'en-GB',
    fallback: '--:-- GMT',
  },
  {
    id: 'nz',
    label: 'NEW ZEALAND',
    timeZone: 'Pacific/Auckland',
    locale: 'en-NZ',
    fallback: '--:-- NZT',
  },
  {
    id: 'canada',
    label: 'CANADA',
    timeZone: 'America/Toronto',
    locale: 'en-CA',
    fallback: '--:-- ET',
  },
  {
    id: 'germany',
    label: 'GERMANY',
    timeZone: 'Europe/Berlin',
    locale: 'en-DE',
    fallback: '--:-- CET',
  },
  {
    id: 'australia',
    label: 'AUSTRALIA',
    timeZone: 'Australia/Sydney',
    locale: 'en-AU',
    fallback: '--:-- AET',
  },
];

export const ALL_REGIONAL_CLOCKS: RegionalClockConfig[] = [
  HQ_REGION,
  ...CLIENT_MARKET_REGIONS,
];

export function formatRegionalTime(region: RegionalClockConfig, now: Date = new Date()): string {
  try {
    return now.toLocaleTimeString(region.locale, {
      timeZone: region.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZoneName: 'short',
    });
  } catch {
    return region.fallback;
  }
}

export function getInitialRegionalClockMap(): Record<string, string> {
  return Object.fromEntries(ALL_REGIONAL_CLOCKS.map((r) => [r.id, r.fallback]));
}

export function getLiveRegionalClockMap(now: Date = new Date()): Record<string, string> {
  return Object.fromEntries(ALL_REGIONAL_CLOCKS.map((r) => [r.id, formatRegionalTime(r, now)]));
}

