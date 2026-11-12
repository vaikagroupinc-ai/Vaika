export const INQUIRY_RECIPIENT = 'vijay@vaikagroup.com';

export interface ContactSubmitPayload {
  mode: 'client' | 'talent';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  division?: string;
  selectedService?: string;
  timeframe?: string;
  volume?: string;
  capabilities?: string[];
  scope?: string;
  discipline?: string;
  portfolioUrl?: string;
  seniority?: string;
  statement?: string;
  attachmentName?: string;
  localeEdition?: string;
  sourcePath?: string;
}

export interface ContactSubmitResult {
  ok: boolean;
  delivery?: 'server' | 'mailto_fallback';
  recipient?: string;
  mailtoUrl?: string;
  error?: string;
}

export async function submitContactInquiry(
  payload: ContactSubmitPayload
): Promise<ContactSubmitResult> {
  try {
    const enrichedPayload: ContactSubmitPayload = {
      ...payload,
      sourcePath:
        payload.sourcePath ??
        (typeof window !== 'undefined' ? window.location.pathname : undefined),
    };
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrichedPayload),
    });

    const result = (await response.json()) as ContactSubmitResult;
    if (!response.ok || !result.ok) {
      return {
        ok: false,
        error: result.error || 'Unable to transmit inquiry. Please try again.',
      };
    }

    return result;
  } catch {
    return {
      ok: false,
      error: `Network error while sending inquiry. Please email ${INQUIRY_RECIPIENT} directly.`,
    };
  }
}

