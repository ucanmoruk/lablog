import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

    return NextResponse.json({ success: true, id: newMessage.id });
  } catch (error) {
    console.error('Contact submit error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
