import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Blog | Nexuscode - Webfejlesztés és SEO tippek',
  description:
    'Közérthető cikkek weboldalról, Google-találatokról és online marketingről. Hogy a weboldalad ne csak szép legyen, hanem ügyfeleket is hozzon.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      <Header current="Blog" />

      <PageHero
        label="Tudástár"
        title="Blog, közérthetően."
        lead="Tippek és útmutatók weboldalról, Google-találatokról és online marketingről. Nem szakembereknek írjuk, hanem vállalkozóknak."
      />

      <main className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-20 md:pb-28 pt-2 md:pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="card h-full p-7 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_52px_-20px_rgba(79,70,229,0.35)]">
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

                <h2 className="text-[19px] font-semibold text-[color:var(--heading)] leading-snug mb-3 group-hover:text-[color:var(--primary)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-[14px] text-[color:var(--muted)] leading-relaxed line-clamp-3 mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-[color:var(--hairline)]">
                  <span className="inline-flex items-center gap-2 text-[12.5px] text-[color:var(--faint)]">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--primary)] group-hover:translate-x-1 transition-transform">
                    Elolvasom
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA a lista alján */}
        <div className="mt-14 rounded-xl p-8 sm:p-10 text-center" style={{ background: 'var(--hero-grad)' }}>
          <h2 className="font-display text-[22px] sm:text-[26px] font-semibold text-white mb-2">
            Inkább csináltatnád, mint olvasnál róla?
          </h2>
          <p className="text-[14.5px] text-white/70 max-w-[30rem] mx-auto mb-6">
            Kérj ingyenes ajánlatot, és 24 órán belül megmondjuk, mennyiből és mikorra lesz kész.
          </p>
          <Link href="/ajanlat" className="btn-primary !bg-white !text-[#2f2b66] hover:!bg-white/90">
            Ajánlatot kérek
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
