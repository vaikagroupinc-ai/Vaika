import type { Metadata } from 'next';
import { buildRegionalMetadata } from '@/lib/international/seo-metadata';
import { renderRegionalHomePage } from '@/lib/international/regional-route-helpers';

export const metadata: Metadata = buildRegionalMetadata('en-DE');

export default function RegionalHomePage() {
  return renderRegionalHomePage('en-DE');
}
