import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rootlab.tr';

  // Static routes
  const staticRoutes = [
    '',
    '/analizler',
    '/blog',
    '/hakkimizda',
    '/iletisim',
    '/sikca-sorulan-sorular',
    '/teklif-listesi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes from Database
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const dbBlogs = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true }
    });
    blogRoutes = dbBlogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Sitemap blog fetch error:", e);
  }

  // Dynamic analysis routes from Database
  let analysisRoutes: MetadataRoute.Sitemap = [];
  try {
    const dbAnalyses = await prisma.analysis.findMany({
      select: { slug: true, updatedAt: true }
    });
    analysisRoutes = dbAnalyses
      .filter(a => a.slug)
      .map((analysis) => ({
        url: `${baseUrl}/analizler/${analysis.slug}`,
        lastModified: analysis.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
  } catch (e) {
    console.error("Sitemap analysis fetch error:", e);
  }

  return [...staticRoutes, ...blogRoutes, ...analysisRoutes];
}
