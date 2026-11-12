import type { Viewport } from 'next';
import '../../globals.css';
import { RootDocumentShell } from '@/components/international/RootDocumentShell';

export const viewport: Viewport = {
  themeColor: '#050507',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RegionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocumentShell htmlLang="en-NZ">
      {children}
    </RootDocumentShell>
  );
}
