import type { Viewport } from 'next';
import '../globals.css';
import { RootDocumentShell } from '@/components/international/RootDocumentShell';
import { buildRootGlobalMetadata } from '@/lib/international/seo-metadata';
import { buildOrganizationSchema } from '@/lib/international/structured-data';

export const metadata = buildRootGlobalMetadata();

export const viewport: Viewport = {
  themeColor: '#050507',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function GlobalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocumentShell
      htmlLang="en"
      structuredData={buildOrganizationSchema()}
    >
      {children}
    </RootDocumentShell>
  );
}

