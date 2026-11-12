import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  DIVISION_SLUGS,
  LocaleCode,
  isValidDivisionSlug,
} from './locale-config';
import { buildRegionalMetadata } from './seo-metadata';
import { buildRegionalJsonLdGraph } from './structured-data';
import { RegionalEditionView } from '@/components/international/RegionalEditionView';

export function getRegionalDivisionStaticParams() {
  return DIVISION_SLUGS.map((division) => ({ division }));
}

export function renderRegionalHomePage(locale: LocaleCode) {
  const jsonLd = buildRegionalJsonLdGraph(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegionalEditionView locale={locale} />
    </>
  );
}

export async function generateRegionalDivisionMetadata(
  locale: LocaleCode,
  params: Promise<{ division: string }>
): Promise<Metadata> {
  const { division } = await params;
  if (!isValidDivisionSlug(division)) {
    return {};
  }
  return buildRegionalMetadata(locale, division);
}

export async function renderRegionalDivisionPage(
  locale: LocaleCode,
  params: Promise<{ division: string }>
) {
  const { division } = await params;
  if (!isValidDivisionSlug(division)) {
    notFound();
  }
  const jsonLd = buildRegionalJsonLdGraph(locale, division);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegionalEditionView locale={locale} divisionSlug={division} />
    </>
  );
}

