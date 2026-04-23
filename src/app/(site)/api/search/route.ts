import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { services as mockServices } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (!q) {
     return NextResponse.json({ aiIntent: null, results: [] });
  }

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const lowerQ = q.toLowerCase();
  
  // AI Keyword mapping simulation
  const aiMap: Record<string, string[]> = {
    'kozmetik': ['krem', 'losyon', 'alerji', 'cilt', 'şampuan', 'makyaj', 'ruj', 'yüz'],
    'ilaç ve hammadde': ['hap', 'tablet', 'etken madde', 'şurup', 'safsızlık', 'raf ömrü'],
    'tekstil ve deri': ['kumaş', 'tişört', 'elbise', 'ayakkabı', 'çanta', 'boya', 'kanserojen', 'deri'],
    'takviye edici gıda': ['vitamin', 'kapsül', 'mineral', 'protein tozu', 'kurşun', 'ağır metal', 'gıda', 'sporcu'],
    'belgelendirme': ['avrupa', 'ihracat', 'ithalat', 'gümrük', 'izin', 'uygunluk', 'sertifika', 'rohs', 'reach']
  };

  let matchedCategory: string | null = null;

  for (const [category, keywords] of Object.entries(aiMap)) {
    if (keywords.some(kw => lowerQ.includes(kw))) {
      matchedCategory = category;
      break;
    }
  }

  let results = [];

  try {
    if (matchedCategory) {
      // If AI found an intent, return services in that category
      results = await prisma.analysis.findMany({
        where: {
          category: {
            contains: matchedCategory,
            mode: 'insensitive'
          }
        },
        take: 20
      });
    } else {
      // Fallback to database string matching
      results = await prisma.analysis.findMany({
        where: {
          OR: [
            { title: { contains: lowerQ, mode: 'insensitive' } },
            { description: { contains: lowerQ, mode: 'insensitive' } },
            { category: { contains: lowerQ, mode: 'insensitive' } },
            { standards: { contains: lowerQ, mode: 'insensitive' } }
          ]
        },
        take: 20
      });
    }
  } catch (error) {
    console.warn("Search DB fetch failed, using mock data:", error);
    // FALLBACK TO MOCK DATA
    results = mockServices.filter(s => 
      s.title.toLowerCase().includes(lowerQ) || 
      s.description.toLowerCase().includes(lowerQ) ||
      (s.standards && s.standards.toLowerCase().includes(lowerQ)) ||
      (matchedCategory && s.category.toLowerCase().includes(matchedCategory.toLowerCase()))
    ).slice(0, 20);
  }

  return NextResponse.json({
    aiIntent: matchedCategory ? `Yapay Zeka sistemimiz aramanızı "${matchedCategory}" sektörü ile eşleştirdi.` : null,
    results: results
  });
}
