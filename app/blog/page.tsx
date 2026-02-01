import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Nexuscode - Webfejlesztés és SEO Tippek',
  description: 'Szakmai cikkek weboldal készítésről, SEO-ról, online marketingről és modern technológiákról. Nexuscode blog.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080b14] via-[#0f1529] to-[#080b14] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#080b14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-gradient">Nexus</span>code
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Vissza a főoldalra
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-20">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
            <BookOpen size={16} />
            <span>Tudástár</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Szakmai <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tippek, trükkök és útmutatók a modern webfejlesztés világából. Hogy a weboldalad ne csak szép legyen, hanem profitot is termeljen.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full glass border-2 border-white/5 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                {/* Tags */}
                <div className="flex gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <span className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                    Olvass tovább <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
