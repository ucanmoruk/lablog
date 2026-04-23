const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  console.log('--- Veritabanı Kontrolü Başlıyor ---');
  
  try {
    const blogCount = await prisma.blogPost.count();
    console.log(`Toplam Blog Yazısı: ${blogCount}`);

    const blogs = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    blogs.forEach((b, i) => {
      console.log(`${i+1}. [ID: ${b.id.substring(0,8)}] - ${b.title} (Featured: ${b.featured})`);
    });

    if (blogs.length > 0) {
      console.log('\n--- Öne Çıkarma Testi ---');
      const firstId = blogs[0].id;
      const updated = await prisma.blogPost.update({
        where: { id: firstId },
        data: { featured: true }
      });
      console.log(`Güncellendi: ${updated.title} -> Featured: ${updated.featured}`);

      // Geri alalım (test bitti)
      await prisma.blogPost.update({
        where: { id: firstId },
        data: { featured: false }
      });
      console.log('Test verisi eski haline getirildi.');
    }

  } catch (err) {
    console.error('Hata:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
