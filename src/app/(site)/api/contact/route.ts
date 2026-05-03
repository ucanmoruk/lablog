import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message
      }
    });

    // Send email notification
    try {
      await sendEmail({
        to: 'info@rootlab.tr',
        subject: `Yeni İletişim Formu Mesajı: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #1d1d1f;">Yeni İletişim Mesajı</h2>
            <p><strong>Gönderen:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `
      });
    } catch (mailError) {
      console.error('Failed to send contact notification email:', mailError);
      // We don't fail the whole request if email fails, as DB record is created
    }

    return NextResponse.json({ success: true, id: newMessage.id });
  } catch (error) {
    console.error('Contact submit error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
