import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const sectors = await prisma.sector.findMany({
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(sectors);
  } catch (error) {
    return NextResponse.json({ error: 'Sektörler yüklenemedi' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const sector = await prisma.sector.create({
      data: { name }
    });
    return NextResponse.json(sector);
  } catch (error) {
    return NextResponse.json({ error: 'Sektör eklenemedi' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name } = await req.json();
    const sector = await prisma.sector.update({
      where: { id },
      data: { name }
    });
    return NextResponse.json(sector);
  } catch (error) {
    return NextResponse.json({ error: 'Sektör güncellenemedi' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID gerekli' }, { status: 400 });

    await prisma.sector.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Sektör silinemedi' }, { status: 500 });
  }
}
