import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key (you'll need to get this from resend.com)
// You should store this in an environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, message, subject } = await request.json();
    
    console.log('Request data:', { name, email, message, subject });
    console.log('API Key available:', !!process.env.RESEND_API_KEY);
    
    // Validate the inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // You can customize this after verification
        to: 'inquiries@abrahamgonzalez.dev',
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
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      
      console.log('Email sent successfully:', data);
      return NextResponse.json({ success: true, data });
    } catch (emailError: unknown) {
      console.error('Error sending email:', emailError);
      const errorMessage = emailError instanceof Error ? emailError.message : 'Unknown error occurred';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
    
  } catch (error: unknown) {
    console.error('API route error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 