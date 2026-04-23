import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, response, quoteData } = body;

    if (!id || (!response && !quoteData)) {
      return NextResponse.json({ error: 'ID and response/quoteData are required' }, { status: 400 });
    }

    // 1. Update the message in the database
    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: {
        response,
        quoteData: quoteData || undefined,
        status: 'sent',
        repliedAt: new Date(),
      },
    });

    // 2. Generate Quote HTML if quoteData exists
    let quoteHtml = '';
    if (quoteData && quoteData.items && quoteData.items.length > 0) {
        const subtotal = quoteData.items.reduce((acc: number, item: any) => acc + (item.unitPrice * item.quantity), 0);
        const vat = subtotal * (quoteData.vatRate / 100);
        const total = subtotal + vat;

        quoteHtml = `
            <div style="margin: 25px 0; border: 1px solid #e8e8ed; border-radius: 8px; overflow: hidden;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <thead>
                        <tr style="background: #f5f5f7; border-bottom: 1px solid #e8e8ed;">
                            <th style="padding: 12px; text-align: left; color: #6e6e73;">Hizmet Adı</th>
                            <th style="padding: 12px; text-align: center; color: #6e6e73;">Birim Fiyat</th>
                            <th style="padding: 12px; text-align: center; color: #6e6e73;">Adet</th>
                            <th style="padding: 12px; text-align: right; color: #6e6e73;">Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${quoteData.items.map((item: any) => `
                            <tr style="border-bottom: 1px solid #f2f2f7;">
                                <td style="padding: 12px; font-weight: 600; color: #1d1d1f;">${item.title}</td>
                                <td style="padding: 12px; text-align: center; color: #1d1d1f;">${item.unitPrice.toLocaleString('tr-TR')} ₺</td>
                                <td style="padding: 12px; text-align: center; color: #1d1d1f;">${item.quantity}</td>
                                <td style="padding: 12px; text-align: right; font-weight: 700; color: #1d1d1f;">${(item.unitPrice * item.quantity).toLocaleString('tr-TR')} ₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" style="padding: 12px; text-align: right; color: #6e6e73;">Ara Toplam:</td>
                            <td style="padding: 12px; text-align: right; font-weight: 600;">${subtotal.toLocaleString('tr-TR')} ₺</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 12px; text-align: right; color: #6e6e73;">KDV (%${quoteData.vatRate}):</td>
                            <td style="padding: 12px; text-align: right; font-weight: 600;">${vat.toLocaleString('tr-TR')} ₺</td>
                        </tr>
                        <tr style="background: #fdfdfd; font-size: 16px;">
                            <td colspan="3" style="padding: 12px; text-align: right; font-weight: 800; color: #1d1d1f;">GENEL TOPLAM:</td>
                            <td style="padding: 12px; text-align: right; font-weight: 800; color: #0066cc;">${total.toLocaleString('tr-TR')} ₺</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            ${quoteData.notes ? `
                <div style="margin-top: 20px; padding: 15px; background: #fffcf0; border: 1px solid #ffeeba; border-radius: 8px;">
                    <h4 style="margin: 0 0 10px 0; color: #856404; font-size: 14px;">Teklif Notları:</h4>
                    <p style="margin: 0; font-size: 13px; color: #856404; white-space: pre-wrap;">${quoteData.notes}</p>
                </div>
            ` : ''}
        `;
    }

    // 3. Send email to the customer
    try {
      await sendEmail({
        to: updatedMessage.email,
        subject: `Resmi Fiyat Teklifi: ${updatedMessage.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 30px; color: #333; max-width: 700px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #1d1d1f; margin: 0;">LabLog</h1>
                <p style="color: #666; font-size: 14px;">Akredite Laboratuvar Hizmetleri</p>
                <div style="margin-top: 10px; font-size: 12px; color: #aeaeb2;">Teklif No: ${updatedMessage.id.substring(0, 8).toUpperCase()} | Tarih: ${new Date().toLocaleDateString('tr-TR')}</div>
            </div>
            
            <h2 style="color: #1d1d1f; font-size: 18px;">Sayın ${updatedMessage.name},</h2>
            <p style="line-height: 1.6; font-size: 15px;">İletmiş olduğunuz analiz talebine istinaden hazırlanan resmi fiyat teklifi aşağıda bilgilerinize sunulmuştur:</p>
            
            ${quoteHtml}

            ${response ? `
                <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
                    <p style="margin: 0; white-space: pre-wrap; font-style: italic; color: #555;">${response}</p>
                </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: #f0f7ff; border-radius: 8px; text-align: center;">
                <p style="margin: 0; font-weight: 600; color: #0066cc;">Teklifi Onaylıyor musunuz?</p>
                <p style="margin: 10px 0 0 0; font-size: 14px; color: #555;">Bu teklifi onaylamak veya numune gönderim süreci hakkında bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                <div style="margin-top: 15px;">
                    <a href="https://wa.me/905401068640" style="display: inline-block; padding: 10px 20px; background: #25d366; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 700;">WhatsApp ile Onayla</a>
                </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">
                LabLog Laboratuvar Yönetim Birimi
            </p>
          </div>
        `
      });
    } catch (mailError) {
      console.error('Failed to send formal quote email:', mailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Formal quote error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
