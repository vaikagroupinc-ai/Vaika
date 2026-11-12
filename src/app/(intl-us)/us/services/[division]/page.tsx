import type { Metadata } from 'next';
import {
  generateRegionalDivisionMetadata,
  getRegionalDivisionStaticParams,
  renderRegionalDivisionPage,
} from '@/lib/international/regional-route-helpers';

export const dynamicParams = false;

export function generateStaticParams() {
  return getRegionalDivisionStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ division: string }>;
}): Promise<Metadata> {
  return generateRegionalDivisionMetadata('en-US', params);
}

export default async function RegionalDivisionPage({
  params,
}: {
  params: Promise<{ division: string }>;
}) {
  return renderRegionalDivisionPage('en-US', params);
}