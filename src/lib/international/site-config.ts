export const DEFAULT_PRODUCTION_URL = 'https://vaikagroup.com';

/**
 * Resolves and validates the canonical production site URL.
 * Trailing slashes are stripped so path joining stays consistent.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_PRODUCTION_URL;

  try {
    const parsed = new URL(raw);
    if (process.env.NODE_ENV === 'production' && parsed.protocol !== 'https:') {
      return DEFAULT_PRODUCTION_URL;
    }
    return parsed.origin;
  } catch {
    return DEFAULT_PRODUCTION_URL;
  }
}

/**
 * Returns true only when search engine indexing should be permitted.
 * Prevents Vercel preview/staging deployments from ever being indexed.
 */
export function isProductionIndexingEnabled(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) {
    return vercelEnv === 'production';
  }
  if (process.env.ALLOW_INDEXING === 'false') {
    return false;
  }
  return process.env.NODE_ENV === 'production';
}

export function getGoogleVerificationToken(): string | undefined {
  const token = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return token ? token : undefined;
}

export function getGaMeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return id ? id : undefined;
}

