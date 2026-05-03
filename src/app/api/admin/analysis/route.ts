import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const analyses = await prisma.analysis.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(analyses);
  } catch (error) {
    return NextResponse.json({ error: 'Analizler yüklenemedi' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { title, description, category, sector, popular, standards, turnaroundTime, sampleRequirement, price } = data;
    
    const slug = title.toLowerCase()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');

    const analysis = await prisma.analysis.create({
      data: {
        title,
        slug,
        description,
        category,
        sector,
        popular: Boolean(popular),
        standards,
        turnaroundTime,
        sampleRequirement,
        price
      }
    });
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Analysis create error:', error);
    return NextResponse.json({ error: 'Analiz eklenemedi' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    const { id, title, description, category, sector, popular, standards, turnaroundTime, sampleRequirement, price } = data;

    const analysis = await prisma.analysis.update({
      where: { id },
      data: {
        title,
        description,
        category,
        sector,
        popular: Boolean(popular),
        standards,
        turnaroundTime,
        sampleRequirement,
        price
      }
    });
    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json({ error: 'Analiz güncellenemedi' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID gerekli' }, { status: 400 });

    await prisma.analysis.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Analiz silinemedi' }, { status: 500 });
  }
}
