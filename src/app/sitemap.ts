import type { MetadataRoute } from 'next';
import { getAllPublishedRoutes } from '@/lib/international/route-registry';
import { getSiteUrl } from '@/lib/international/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = getAllPublishedRoutes(siteUrl);

  return routes.map((entry) => ({
    url: entry.url,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    ...(entry.alternates ? { alternates: entry.alternates } : {}),
  }));
}
