import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    return (
      <div className="bg-white">
        <Header current="Blog" />
        <main className="min-h-[60vh] flex flex-col items-center justify-center gap-5 pt-16 px-5 text-center">
          <p className="text-[17px] text-[color:var(--muted)]">Ez a cikk nem található.</p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft size={16} />
            Vissza a blogra
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header current="Blog" />

      <article className="max-w-[760px] mx-auto px-5 sm:px-8 pt-[120px] pb-16 sm:pb-24">
        {/* Cikk-fejléc */}
        <header className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--muted)] hover:text-[color:var(--primary)] transition-colors mb-7"
          >
            <ArrowLeft size={14} />
            Vissza a blogra
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[color:var(--primary-dim)] text-[color:var(--primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-[28px] sm:text-[36px] font-semibold text-[color:var(--heading)] leading-[1.15] mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-[13px] text-[color:var(--faint)]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span aria-hidden>·</span>
            <span>Nexuscode</span>
          </div>
        </header>

        {/* Cikk-tartalom */}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* CTA a cikk végén */}
        <div className="mt-14 rounded-xl p-8 sm:p-10 text-center" style={{ background: 'var(--hero-grad)' }}>
          <h3 className="font-display text-[21px] sm:text-[24px] font-semibold text-white mb-2">Hasznos volt a cikk?</h3>
          <p className="text-[14.5px] text-white/70 max-w-[28rem] mx-auto mb-6">
            Ha szeretnéd, hogy a te oldalad is ügyfeleket hozzon, kérj tőlünk ingyenes ajánlatot.
          </p>
          <Link href="/ajanlat" className="btn-primary !bg-white !text-[#2f2b66] hover:!bg-white/90">
            Ajánlatot kérek
            <ArrowRight size={16} />
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
