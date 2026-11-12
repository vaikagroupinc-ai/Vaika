import type { MetadataRoute } from 'next';
import {
  getSiteUrl,
  isProductionIndexingEnabled,
} from '@/lib/international/site-config';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  if (!isProductionIndexingEnabled()) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
