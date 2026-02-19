import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { headers } from 'next/headers';

// Initialize Resend lazily to avoid build errors when API key is not set
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Simple in-memory rate limiter (resets on cold start, which is fine for serverless)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Input length constraints
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const name = String(body.name || '');
    const email = String(body.email || '');
    const message = String(body.message || '');
    const subject = String(body.subject || '');
    // Honeypot field — if filled, silently discard (bots auto-fill hidden fields)
    const website = body.website;

    if (website) {
      // Pretend success to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate input lengths
    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH ||
        message.length > MAX_MESSAGE_LENGTH || subject.length > MAX_SUBJECT_LENGTH) {
      return NextResponse.json(
        { error: 'Input exceeds maximum allowed length' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Use provided subject or default
    const emailSubject = subject || `New Contact Form Submission from ${name}`;

    // Send the email
    try {
      const resend = getResend();
      const { error } = await resend.emails.send({
        from: 'inquiries@abrahamgonzalez.dev',
        to: 'developerabe0@gmail.com',
        subject: emailSubject,
        replyTo: email,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}
Message: ${message}
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    } catch (emailError: unknown) {
      console.error('Error sending email:', emailError);
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }

  } catch (error: unknown) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 