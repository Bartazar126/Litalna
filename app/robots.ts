import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/koszonjuk'], // Köszönőoldalt se indexelje
    },
    sitemap: 'https://nexuscode.hu/sitemap.xml',
  };
}
