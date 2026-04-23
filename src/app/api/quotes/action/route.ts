import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, action, reason } = body;

    if (!id || !action) {
      return NextResponse.json({ error: 'ID and Action are required' }, { status: 400 });
    }

    const newStatus = action === 'approve' ? 'accepted' : 'rejected';

    // Fetch existing quoteData to preserve it
    const existing = await prisma.contactMessage.findUnique({
      where: { id },
      select: { quoteData: true }
    });

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: {
        status: newStatus,
        quoteData: existing?.quoteData ? {
          ...(existing.quoteData as object),
          rejectReason: action === 'reject' ? reason : undefined
        } : (action === 'reject' ? { rejectReason: reason } : undefined)
      }
    });

    return NextResponse.json({ success: true, status: updated.status });
  } catch (error) {
    console.error('Quote action error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
