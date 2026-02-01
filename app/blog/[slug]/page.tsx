import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Cikk nem található' };
  }

  return {
    title: `${post.title} | Nexuscode Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Nexuscode'],
    },
  };
}

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="text-white text-center py-20">Cikk nem található.</div>;
  }

  return (
    <div className="min-h-screen bg-[#080b14] text-white">
      {/* Progress bar logic could be added here */}
      
      <header className="border-b border-white/10 bg-[#080b14]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
            <ArrowLeft size={16} />
            Vissza a blogra
          </Link>
          <Link href="/" className="text-lg font-bold">
            <span className="text-gradient">Nexus</span>code
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {post.date}
            </div>
            <span>•</span>
            <span>Nexuscode Team</span>
          </div>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-bold 
            prose-p:text-gray-300 prose-p:leading-relaxed 
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white 
            prose-ul:text-gray-300 prose-li:marker:text-blue-500
            prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Share / CTA Footer */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Tetszett a cikk?</h3>
          <p className="text-gray-400 mb-8">
            Ha szeretnél hasonlóan profi weboldalt, kérj tőlünk ajánlatot!
          </p>
          <Link
            href="/ajanlat"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/25"
          >
            Ajánlatkérés
          </Link>
        </div>
      </article>
    </div>
  );
}
