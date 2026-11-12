import type { Metadata } from 'next';
import { DataAiPageView } from '@/components/services/views/DataAiPageView';
import {
  buildAbsoluteEditionUrl,
  buildHreflangAlternates,
} from '@/lib/international/route-registry';

export const metadata: Metadata = {
  title: 'Data & AI Core — AI Data Annotation, Preparation & Back-Office Ops — VAIKA GROUP',
  description:
    'Human-powered AI data services and back-office operations: image & video annotation, NLP text labeling, audio transcription, GIS mapping, AI model evaluation, OCR document digitization, Shopify catalog management, and CRM lead research.',
  keywords: [
    'Image & Video Annotation Services',
    'Text Annotation & NLP Data Labeling',
    'Audio Transcription Services',
    'GIS Mapping & Geospatial Data Services',
    'AI Model Evaluation & Human-in-the-Loop',
    'AI Training Data Preparation',
    'Online & Offline Data Entry',
    'PDF Conversion & OCR Document Digitization',
    'E-commerce & Shopify Catalog Management',
    'CRM Data Management & B2B Lead Research',
    'VAIKA GROUP',
  ],
  openGraph: {
    title: 'Data & AI Core — AI Data Services & Back-Office Operations — VAIKA GROUP',
    description:
      'Ten consolidated AI training data and back-office data processing workflows engineered with human-in-the-loop quality assurance.',
    url: 'https://vaikagroup.com/services/data-ai',
    siteName: 'VAIKA GROUP',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
        width: 1200,
        height: 630,
        alt: 'VAIKA Data & AI Core Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: buildAbsoluteEditionUrl('global', 'services/data-ai'),
    languages: buildHreflangAlternates('services/data-ai'),
  },
};

export default function DataAiPage() {
  return <DataAiPageView />;
}

