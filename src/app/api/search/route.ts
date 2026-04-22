import { NextResponse } from 'next/server';
import { services } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const lowerQ = q.toLowerCase();
  
  // AI Keyword mapping simulation
  const aiMap: Record<string, string[]> = {
    'kozmetik': ['krem', 'losyon', 'alerji', 'cilt', 'şampuan', 'makyaj', 'ruj', 'yüz'],
    'ilaç ve hammadde': ['hap', 'tablet', 'etken madde', 'şurup', 'safsızlık', 'raf ömrü'],
    'tekstil ve deri': ['kumaş', 'tişört', 'elbise', 'ayakkabı', 'çanta', 'boya', 'kanserojen', 'deri'],
    'takviye edici gıda': ['vitamin', 'kapsül', 'mineral', 'protein tozu', 'kurşun', 'ağır metal', 'gıda', 'sporcu'],
    'belgelendirme': ['avrupa', 'ihracat', 'ithalat', 'gümrük', 'izin', 'uygunluk', 'sertifika', 'rohs', 'reach']
  };

  let matchedCategory = null;

  for (const [category, keywords] of Object.entries(aiMap)) {
    if (keywords.some(kw => lowerQ.includes(kw))) {
      matchedCategory = category;
      break;
    }
  }

  let results = [];

  if (matchedCategory) {
    // If AI found an intent, return all services in that category
    results = services.filter(s => s.category.toLowerCase() === matchedCategory.toLowerCase());
  } else {
    // Fallback to basic string matching
    results = services.filter(s => 
      s.title.toLowerCase().includes(lowerQ) || 
      s.description.toLowerCase().includes(lowerQ) ||
      s.category.toLowerCase().includes(lowerQ)
    );
  }

  // Ensure exact matches are always at the top if there is an ai fallback
  const exactMatches = services.filter(s => 
    s.title.toLowerCase().includes(lowerQ) && !results.find(r => r.id === s.id)
  );

  const finalResults = [...exactMatches, ...results];

  return NextResponse.json({
    aiIntent: matchedCategory ? `Yapay Zeka sistemimiz aramanızı "${matchedCategory}" sektörü ile eşleştirdi.` : null,
    results: finalResults
  });
}
