import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/panel/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://laboratuvardan.com'}/sitemap.xml`,
  };
}
