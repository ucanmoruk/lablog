import { blogs } from '@/data/mockData';
import { notFound } from 'next/navigation';
import BlogPostContent from './BlogPostContent';

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find(b => b.id === resolvedParams.slug);
  if (!blog) return { title: 'Bulunamadı' };
  
  return {
    title: `${blog.title} | Laboratuvar Günlüğü`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find(b => b.id === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const related = blogs
    .filter(b => b.id !== blog.id)
    .sort((a, b) => (a.category === blog.category ? -1 : 1))
    .slice(0, 3);

  return <BlogPostContent blog={blog} related={related} />;
}
