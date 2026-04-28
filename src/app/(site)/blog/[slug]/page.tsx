import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import BlogPostContent from './BlogPostContent';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug }
  });
  
  if (!blog) return { title: 'Bulunamadı' };
  
  return {
    title: blog.metaTitle || `${blog.title} | Laboratuvar Günlüğü`,
    description: blog.seoDescription || blog.excerpt,
    keywords: blog.keywords || blog.focusKeyword || blog.category,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!blog) {
    notFound();
  }

  let related = await prisma.blogPost.findMany({
    where: {
      category: blog.category,
      NOT: { id: blog.id }
    },
    take: 3
  });

  // Eğer aynı kategoride 3 yazı yoksa, diğer kategorilerden tamamla
  if (related.length < 3) {
    const more = await prisma.blogPost.findMany({
      where: {
        NOT: {
          OR: [
            { id: blog.id },
            ...related.map(r => ({ id: r.id }))
          ]
        }
      },
      take: 3 - related.length,
      orderBy: { date: 'desc' }
    });
    related = [...related, ...more];
  }

  const recent = await prisma.blogPost.findMany({
    take: 5,
    orderBy: { date: 'desc' },
    select: { id: true, title: true, slug: true, date: true }
  });

  const blogData = {
    ...blog,
    date: blog.date.toISOString().split('T')[0]
  };

  const relatedData = related.map(b => ({
    ...b,
    date: b.date.toISOString().split('T')[0]
  }));

  const recentData = recent.map(b => ({
    ...b,
    date: b.date.toISOString().split('T')[0]
  }));

  return <BlogPostContent blog={blogData as any} related={relatedData as any} recent={recentData as any} />;
}
