import { NextRequest, NextResponse } from 'next/server';

const RECIPIENT_EMAIL = 'vijay@vaikagroup.com';

interface ContactPayload {
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

function buildEmailText(payload: ContactPayload): { subject: string; text: string } {
  if (payload.mode === 'talent') {
    const subject = `[VAIKA COLLECTIVE] Talent Application — ${payload.name}`;
    const text = [
      `New Talent Application via vaikagroup.com`,
      `Recipient: ${RECIPIENT_EMAIL}`,
      ``,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Discipline: ${payload.discipline || 'Not specified'}`,
      `Seniority: ${payload.seniority || 'Not specified'}`,
      `Portfolio / GitHub: ${payload.portfolioUrl || 'Not provided'}`,
      `CV / Reel Attachment: ${payload.attachmentName || 'None'}`,
      ``,
      `Statement of Practice:`,
      payload.statement || '',
    ].join('\n');
    return { subject, text };
  }

  const serviceLabel = payload.selectedService || payload.division || 'Client Inquiry';
  const subject = `[VAIKA BRIEF] ${serviceLabel} — ${payload.name}`;
  const text = [
    `New Client Engagement Brief via vaikagroup.com`,
    `Recipient: ${RECIPIENT_EMAIL}`,
    ``,
    `Name / Organization: ${payload.name}`,
    payload.company ? `Company / Organization: ${payload.company}` : null,
    `Email: ${payload.email}`,
    payload.phone ? `Phone / WhatsApp: ${payload.phone}` : null,
    payload.division ? `Division: ${payload.division}` : null,
    payload.selectedService ? `Selected Service: ${payload.selectedService}` : null,
    payload.timeframe ? `Timeframe: ${payload.timeframe}` : null,
    payload.volume ? `Estimated Volume / Cadence: ${payload.volume}` : null,
    payload.capabilities?.length
      ? `Target Capabilities: ${payload.capabilities.join(', ')}`
      : null,
    payload.attachmentName ? `Attachment: ${payload.attachmentName}` : null,
    payload.localeEdition ? `Market Edition: ${payload.localeEdition}` : null,
    payload.sourcePath ? `Source Path: ${payload.sourcePath}` : null,
    ``,
    `Project Scope & Requirements:`,
    payload.scope || '',
  ]
    .filter((line) => line !== null)
    .join('\n');
  return { subject, text };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const mode = body.mode === 'talent' ? 'talent' : 'client';
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid name and email address.' },
        { status: 400 }
      );
    }

    if (mode === 'client' && !(body.scope || '').trim()) {
      return NextResponse.json(
        { ok: false, error: 'Please describe your project scope and requirements.' },
        { status: 400 }
      );
    }

    if (mode === 'talent' && !(body.statement || '').trim()) {
      return NextResponse.json(
        { ok: false, error: 'Please include your statement of practice.' },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      mode,
      name,
      email,
      company: body.company?.trim(),
      phone: body.phone?.trim(),
      division: body.division?.trim(),
      selectedService: body.selectedService?.trim(),
      timeframe: body.timeframe?.trim(),
      volume: body.volume?.trim(),
      capabilities: Array.isArray(body.capabilities) ? body.capabilities : [],
      scope: body.scope?.trim(),
      discipline: body.discipline?.trim(),
      portfolioUrl: body.portfolioUrl?.trim(),
      seniority: body.seniority?.trim(),
      statement: body.statement?.trim(),
      attachmentName: body.attachmentName?.trim(),
    };

    const { subject, text } = buildEmailText(payload);

    // Optional server-side delivery via Resend if RESEND_API_KEY is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const fromAddress =
        process.env.CONTACT_FROM_EMAIL || 'Vaika Group Website <onboarding@resend.dev>';
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const errBody = await res.text();
        return NextResponse.json(
          { ok: false, error: `Email dispatch failed: ${errBody}` },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        delivery: 'server',
        recipient: RECIPIENT_EMAIL,
      });
    }

    // Fallback when no server SMTP/Resend key is configured: return mailto URI
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    return NextResponse.json({
      ok: true,
      delivery: 'mailto_fallback',
      recipient: RECIPIENT_EMAIL,
      mailtoUrl,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}

