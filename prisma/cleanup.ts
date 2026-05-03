import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const analyses = await prisma.analysis.findMany({
    orderBy: { createdAt: 'desc' },
    select: { id: true }
  });

  if (analyses.length <= 5) {
    console.log('Zaten 5 veya daha az analiz var.');
    return;
  }

  const toDelete = analyses.slice(5).map(a => a.id);

  const deleted = await prisma.analysis.deleteMany({
    where: {
      id: { in: toDelete }
    }
  });

  console.log(`${deleted.count} analiz silindi. 5 tane kaldı.`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
