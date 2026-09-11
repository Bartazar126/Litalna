import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

/* A statikus oldalak utolso erdemi tartalmi valtozasa. Kezzel allitva:
   ha a build idejet kuldenenk, a Google minden deploynal azt latna, hogy
   az osszes oldal megvaltozott, es idovel figyelmen kivul hagyna. */
const STATIC_LAST_MODIFIED = new Date('2026-09-11');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexuscode.hu';
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ajanlat`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/webaruhaz-keszites`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...blogUrls];
}
