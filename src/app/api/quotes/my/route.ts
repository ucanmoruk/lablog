import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Fetch messages/quotes belonging to this email
    const quotes = await prisma.contactMessage.findMany({
      where: { email },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Fetch personal quotes error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
