import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, response } = body;

    if (!id || !response) {
      return NextResponse.json({ error: 'ID and response are required' }, { status: 400 });
    }

    // 1. Update the message in the database
    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: {
        response,
        status: 'replied',
        repliedAt: new Date(),
      },
    });

    // 2. Send email to the customer
    try {
      await sendEmail({
        to: updatedMessage.email,
        subject: `Teklif Talebiniz Hakkında: ${updatedMessage.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 30px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #1d1d1f; margin: 0;">LabLog</h1>
                <p style="color: #666; font-size: 14px;">Laboratuvar Analiz Hizmetleri</p>
            </div>
            
            <h2 style="color: #1d1d1f; font-size: 20px;">Sayın ${updatedMessage.name},</h2>
            <p style="line-height: 1.6;">Teklif talebiniz uzman ekibimiz tarafından incelenmiş olup yanıtımız aşağıdadır:</p>
            
            <div style="background: #f5f5f7; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #0066cc;">
                <p style="margin: 0; white-space: pre-wrap; font-style: italic;">${response}</p>
            </div>
            
            <p style="line-height: 1.6;">
                Ek sorularınız için bu e-postaya yanıt verebilir veya 
                <strong>+90 540 106 86 40</strong> numaralı WhatsApp hattımız üzerinden bize ulaşabilirsiniz.
            </p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">
                Bu e-posta LabLog laboratuvar yönetim sistemi tarafından otomatik olarak oluşturulmuştur.
            </p>
          </div>
        `
      });
    } catch (mailError) {
      console.error('Failed to send response email:', mailError);
      // We still return success because DB was updated
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote response error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
