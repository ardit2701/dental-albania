import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'info@maxillodent.al';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'noreply@maxillodent.al';

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, country, treatment, message } = body;

    await resend.emails.send({
      from: `Maxillodent Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Rezervim i ri: ${treatment ?? 'Konsultim'} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0284c7; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Rezervim i Ri — Maxillodent</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Emri:</td><td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Telefon:</td><td style="padding: 8px 0;">${phone ?? '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Shteti:</td><td style="padding: 8px 0;">${country ?? '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Trajtimi:</td><td style="padding: 8px 0; font-weight: 600; color: #0284c7;">${treatment ?? '—'}</td></tr>
              ${message ? `<tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Mesazhi:</td><td style="padding: 8px 0;">${message}</td></tr>` : ''}
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
