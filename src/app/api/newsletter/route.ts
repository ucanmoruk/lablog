import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Geçerli bir e-posta adresi girin.' }, { status: 400 });
    }

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {}, // Zaten varsa güncelleme yapma
      create: { email }
    });

    return NextResponse.json({ success: true, id: subscriber.id });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Abonelik sırasında bir hata oluştu.' }, { status: 500 });
  }
}
