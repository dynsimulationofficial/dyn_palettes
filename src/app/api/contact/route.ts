// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST handler for the contact form.
 * Expects a URL‑encoded payload (standard HTML form submission).
 * Uses Nodemailer with SMTP credentials defined in environment variables.
 */
export async function POST(request: Request) {
  try {
    // Parse URL‑encoded form data
    const formData = await request.formData();
    const Name = formData.get('Name')?.toString() ?? '';
    const Company = formData.get('Company')?.toString() ?? '';
    const Email = formData.get('Email')?.toString() ?? '';
    const Phone = formData.get('Phone')?.toString() ?? '';
    const Requirement = formData.get('Requirement')?.toString() ?? '';
    const Quantity = formData.get('Quantity')?.toString() ?? '';
    const Details = formData.get('Details')?.toString() ?? '';

    // Basic validation – you can extend this as needed.
    if (!Email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Build the email content
    const htmlBody = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Company:</strong> ${Company}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Phone:</strong> ${Phone}</p>
      <p><strong>Requirement:</strong> ${Requirement}</p>
      <p><strong>Quantity:</strong> ${Quantity}</p>
      <p><strong>Details:</strong><br/>${Details.replace(/\n/g, '<br/>')}</p>
    `;

    // SMTP configuration – provide via .env file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || Email, // fallback to sender's address
      to: process.env.CONTACT_RECEIVER || "ddkhank13@gmail.com",
      subject: `Contact request from ${Name || Email}`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

export const runtime = 'nodejs'; // Ensure Node runtime for nodemailer
