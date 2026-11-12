import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  getSiteUrl,
  isProductionIndexingEnabled,
} from '@/lib/international/site-config';

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';
  const canonicalOrigin = new URL(getSiteUrl());

  // 1. Canonicalize www.* -> apex domain in production
  if (
    isProductionIndexingEnabled() &&
    host.toLowerCase() === `www.${canonicalOrigin.hostname.toLowerCase()}`
  ) {
    const redirectUrl = new URL(`${pathname}${search}`, canonicalOrigin.origin);
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  // 2. Prevent search indexing of API routes and non-production preview deployments
  if (pathname.startsWith('/api/') || !isProductionIndexingEnabled()) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2)$).*)',
  ],
};

