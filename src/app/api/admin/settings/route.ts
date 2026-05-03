import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let settings = await prisma.siteSettings.findUnique({
      where: { id: 'default' }
    });

    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: { id: 'default' }
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Ayarlar yüklenemedi' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { logo, favicon, title, description, keywords } = data;

    const settings = await prisma.siteSettings.upsert({
      where: { id: 'default' },
      update: { logo, favicon, title, description, keywords },
      create: { id: 'default', logo, favicon, title, description, keywords }
    });

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Ayarlar kaydedilemedi' }, { status: 500 });
  }
}
