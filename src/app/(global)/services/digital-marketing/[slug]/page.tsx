import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DIGITAL_MARKETING_DIVISION } from '@/data/servicesData';
import { DigitalMarketingServiceDetailView } from '@/components/services/DigitalMarketingServiceDetailView';

const ALL_DIGITAL_MARKETING_SERVICES = DIGITAL_MARKETING_DIVISION.categories.flatMap(
  (c) => c.services
);

function findDigitalMarketingService(slug: string) {
  return ALL_DIGITAL_MARKETING_SERVICES.find((s) => s.slug === slug || s.id === slug);
}

export function generateStaticParams() {
  return ALL_DIGITAL_MARKETING_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findDigitalMarketingService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | VAIKA GROUP',
    };
  }

  const title = service.seoTitle ?? `${service.name} | VAIKA`;
  const description = service.metaDescription ?? service.explanation;
  const canonicalUrl = `https://vaikagroup.com/services/digital-marketing/${service.slug}`;
  const keywords = [
    ...(service.primaryKeywords ?? []),
    ...(service.secondaryKeywords ?? []),
    ...(service.originalServices ?? []),
    'VAIKA GROUP',
    'Digital Marketing & Creative',
  ];

  return {
    title,
    description,
    keywords,
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

export default async function DigitalMarketingServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findDigitalMarketingService(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://vaikagroup.com/services/digital-marketing/${service.slug}`;

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
        name: 'Digital Marketing & Creative',
        item: 'https://vaikagroup.com/services/digital-marketing',
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
      <DigitalMarketingServiceDetailView
        service={service}
        siblings={ALL_DIGITAL_MARKETING_SERVICES}
      />
    </>
  );
}

