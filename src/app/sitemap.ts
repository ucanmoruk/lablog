import { MetadataRoute } from 'next';
import { services, blogs } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lablog.com.tr';

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

  // Dynamic blog routes
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic service routes
  const serviceRoutes = services
    .filter(s => s.slug) // Only include services with slugs
    .map((service) => ({
      url: `${baseUrl}/analizler/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes];
}
