import { prisma } from '@/lib/prisma';
import BlogListContent from './BlogListContent';
import { blogs as mockBlogs } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Laboratuvar Günlüğü | Sektörel Rehberler ve Analiz Bilgileri',
  description: 'Kozmetik, ilaç, gıda ve çevre sektörlerine yönelik regülasyon güncellemeleri, analiz rehberleri ve sektörel içerikler.',
};

export default async function BlogListPage() {
  let blogs = [];
  try {
    blogs = await prisma.blogPost.findMany({
      orderBy: { date: 'desc' }
    });
    
    if (blogs.length === 0) {
      return <BlogListContent blogs={mockBlogs as any} />;
    }
  } catch (error) {
    console.warn("Blog DB fetch failed, using mock data:", error);
    return <BlogListContent blogs={mockBlogs as any} />;
  }

  const blogsData = blogs.map(b => ({
    ...b,
    date: b.date.toISOString().split('T')[0]
  }));

  return <BlogListContent blogs={blogsData as any} />;
}
