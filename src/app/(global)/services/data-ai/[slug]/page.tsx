import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DATA_AI_DIVISION } from '@/data/servicesData';
import { DataAiServiceDetailView } from '@/components/services/DataAiServiceDetailView';
import { VAIKA_FAVICONS } from '@/lib/international/seo-metadata';

const ALL_DATA_AI_SERVICES = DATA_AI_DIVISION.categories.flatMap((c) => c.services);

function findDataAiService(slug: string) {
  return ALL_DATA_AI_SERVICES.find((s) => s.slug === slug || s.id === slug);
}

export function generateStaticParams() {
  return ALL_DATA_AI_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findDataAiService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | VAIKA GROUP',
    };
  }

  const title = service.seoTitle ?? `${service.name} | VAIKA`;
  const description = service.metaDescription ?? service.explanation;
  const canonicalUrl = `https://vaikagroup.com/services/data-ai/${service.slug}`;
  const keywords = [
    ...(service.primaryKeywords ?? []),
    ...(service.secondaryKeywords ?? []),
    'VAIKA GROUP',
    'Data & AI Core',
  ];

  return {
    title,
    description,
    keywords,
    icons: VAIKA_FAVICONS,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'VAIKA GROUP',
      type: 'website',
      locale: 'en_US',
    },
  };
}

export default async function DataAiServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findDataAiService(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://vaikagroup.com/services/data-ai/${service.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.category,
    description: service.metaDescription ?? service.explanation,
    url: pageUrl,
    provider: {
      '@type': 'Organization',
      name: 'VAIKA GROUP',
      url: 'https://vaikagroup.com',
    },
    areaServed: 'Worldwide',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'VAIKA GROUP',
        item: 'https://vaikagroup.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Data & AI Core',
        item: 'https://vaikagroup.com/services/data-ai',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd =
    service.faqs && service.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <DataAiServiceDetailView service={service} siblings={ALL_DATA_AI_SERVICES} />
    </>
  );
}

