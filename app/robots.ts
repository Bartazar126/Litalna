import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/koszonjuk'], // Köszönőoldalt se indexelje
    },
    sitemap: 'https://www.nexuscode.hu/sitemap.xml',
    host: 'https://www.nexuscode.hu',
  };
}
