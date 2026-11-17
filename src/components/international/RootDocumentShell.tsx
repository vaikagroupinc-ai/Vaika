/* eslint-disable @next/next/no-head-element */
import React from 'react';
import {
  jetbrainsMono,
  manrope,
  outfit,
  spaceGrotesk,
} from '@/lib/fonts';
import { getGaMeasurementId } from '@/lib/international/site-config';

interface RootDocumentShellProps {
  htmlLang: string;
  structuredData?: Record<string, unknown>;
  children: React.ReactNode;
}

export function RootDocumentShell({
  htmlLang,
  structuredData,
  children,
}: RootDocumentShellProps) {
  const gaId = getGaMeasurementId();

  return (
    <html
      lang={htmlLang}
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} ${outfit.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {structuredData ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        ) : null}
        {gaId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});`,
              }}
            />
          </>
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof console!=='undefined'&&console.warn){const w=console.warn;console.warn=function(...a){if(a[0]&&typeof a[0]==='string'&&a[0].indexOf('Clock: This module has been deprecated')!==-1)return;w.apply(console,a);};}})();try{if((window.sessionStorage&&sessionStorage.getItem('vaika_intro_seen')==='true')||(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)||/Lighthouse|Google-PageSpeed|PTST|HeadlessChrome/i.test(navigator.userAgent)){document.documentElement.classList.add('intro-skip');}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-[#050507] text-[#f5f6fa] antialiased selection:bg-[#d4af37] selection:text-[#050507] min-h-screen">
        {children}
      </body>
    </html>
  );
}

