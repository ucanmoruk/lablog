import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lablog.com.tr'; // Bu URL canlı yayında güncellenmeli

  // Blog postları çek
  const blogs = await prisma.blogPost.findMany({ select: { slug: true, updatedAt: true } });
  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Analizleri çek
  const analyses = await prisma.analysis.findMany({ select: { id: true, updatedAt: true } });
  const analysisEntries: MetadataRoute.Sitemap = analyses.map((item) => ({
    url: `${baseUrl}/analizler/${item.id}`,
    lastModified: item.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Sabit sayfalar
  const routes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/contact',
    '/about',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  return [...routes, ...blogEntries, ...analysisEntries];
}
