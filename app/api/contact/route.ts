import { NextResponse } from 'next/server';
import { ALL_PROFILES, DEFAULT_PORTFOLIO } from '@/src/data/portfolioData';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
  targetName?: unknown;
  targetEmail?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const XORAIX_CONTACT_EMAIL = 'contact@xoraixtechnologies.com';

function asText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getAllowedRecipients() {
  const profileRecipients = ALL_PROFILES.map((profile) => ({
    name: profile.personal.name,
    email: profile.personal.email.toLowerCase(),
  }));

  return [
    ...profileRecipients,
    { name: 'Xoraix Technologies', email: XORAIX_CONTACT_EMAIL },
  ];
}

async function sendWithResend(params: {
  to: string;
  toName: string;
  fromName: string;
  fromEmail: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return {
      ok: false,
      status: 503,
      error:
        'Email delivery is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL to send contact form messages.',
    };
  }

  const subject = `Portfolio inquiry for ${params.toName} from ${params.fromName}`;
  const text = [
    `New portfolio contact inquiry for ${params.toName}`,
    '',
    `From: ${params.fromName} <${params.fromEmail}>`,
    params.company ? `Company: ${params.company}` : undefined,
    `Project / inquiry type: ${params.projectType}`,
    params.budget ? `Target engagement: ${params.budget}` : undefined,
    '',
    'Message:',
    params.message,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2>New portfolio contact inquiry</h2>
      <p><strong>Recipient:</strong> ${escapeHtml(params.toName)} &lt;${escapeHtml(params.to)}&gt;</p>
      <p><strong>From:</strong> ${escapeHtml(params.fromName)} &lt;${escapeHtml(params.fromEmail)}&gt;</p>
      ${params.company ? `<p><strong>Company:</strong> ${escapeHtml(params.company)}</p>` : ''}
      <p><strong>Project / inquiry type:</strong> ${escapeHtml(params.projectType)}</p>
      ${params.budget ? `<p><strong>Target engagement:</strong> ${escapeHtml(params.budget)}</p>` : ''}
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(params.message)}</p>
    </div>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [params.to],
      reply_to: params.fromEmail,
      subject,
      text,
      html,
    }),
  });

  const data = await res.json().catch(() => ({}));

  return {
    ok: res.ok,
    status: res.status,
    id: typeof data?.id === 'string' ? data.id : undefined,
    error:
      typeof data?.message === 'string'
        ? data.message
        : 'Email provider rejected the message.',
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = asText(payload.name);
    const email = asText(payload.email).toLowerCase();
    const message = asText(payload.message);
    const company = asText(payload.company);
    const projectType = asText(payload.projectType) || 'Technical Inquiry';
    const budget = asText(payload.budget);
    const requestedTargetEmail = asText(payload.targetEmail).toLowerCase();
    const requestedTargetName = asText(payload.targetName);

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, email, and message are required fields.',
        },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid email address.',
        },
        { status: 400 },
      );
    }

    const allowedRecipients = getAllowedRecipients();
    const recipient =
      allowedRecipients.find((item) => item.email === requestedTargetEmail) || {
        name: requestedTargetName || DEFAULT_PORTFOLIO.personal.name,
        email: DEFAULT_PORTFOLIO.personal.email.toLowerCase(),
      };

    const emailResult = await sendWithResend({
      to: recipient.email,
      toName: recipient.name,
      fromName: name,
      fromEmail: email,
      company: company || undefined,
      projectType,
      budget: budget || undefined,
      message,
    });

    if (!emailResult.ok) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error,
          recipient,
          deliveryConfigured: false,
        },
        { status: emailResult.status },
      );
    }

    const submissionId = emailResult.id || `sub_${Date.now()}`;
    const createdAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: `Thank you for reaching out! Your message was emailed to ${recipient.name}.`,
      submissionId,
      receivedAt: createdAt,
      recipient,
      deliveryConfigured: true,
      data: {
        name,
        email,
        company: company || undefined,
        projectType,
        budget: budget || undefined,
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error:
          'An unexpected error occurred while processing your message. Please try again or email directly.',
      },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 },
  );
}
