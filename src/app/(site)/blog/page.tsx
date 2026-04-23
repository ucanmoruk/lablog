import { prisma } from '@/lib/prisma';
import BlogListContent from './BlogListContent';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Laboratuvar Günlüğü | Sektörel Rehberler ve Analiz Bilgileri',
  description: 'Kozmetik, ilaç, gıda ve çevre sektörlerine yönelik regülasyon güncellemeleri, analiz rehberleri ve sektörel içerikler.',
};

export default async function BlogListPage() {
  const blogs = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' }
  });

  const blogsData = blogs.map(b => ({
    ...b,
    date: b.date.toISOString().split('T')[0]
  }));

  return <BlogListContent blogs={blogsData as any} />;
}
