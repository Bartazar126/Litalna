import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';

// A hajtás alatti szekciók késleltetve töltődnek (PageSpeed)
const Solutions = dynamic(() => import('@/components/home/Solutions'), { loading: () => null });
const Works = dynamic(() => import('@/components/home/Works'), { loading: () => null });
const ServiceBlocks = dynamic(() => import('@/components/home/ServiceBlocks'), { loading: () => null });
const Guarantees = dynamic(() => import('@/components/home/Guarantees'), { loading: () => null });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { loading: () => null });
const Process = dynamic(() => import('@/components/home/Process'), { loading: () => null });
const Pricing = dynamic(() => import('@/components/home/Pricing'), { loading: () => null });
const Faq = dynamic(() => import('@/components/home/Faq'), { loading: () => null });
const FinalCta = dynamic(() => import('@/components/home/FinalCta'), { loading: () => null });

export const metadata: Metadata = {
  title: 'Weboldal készítés fix áron, pár hét alatt | Nexuscode',
  description:
    'Honlapkészítés, webáruház, egyedi rendszer és marketing, egy kézben, érthetően, fix áron. Céges weboldal készítés 80 000 Ft-tól, 1-2 hét alatt. Nem csak weboldalakat építünk. A jövőt építjük.',
  openGraph: {
    title: 'Nexuscode — Digital Technology Studio',
    description:
      'Weboldal, webáruház, egyedi rendszer és marketing, egy kézben. A jövőt építjük.',
  },
  alternates: {
    canonical: 'https://nexuscode.hu',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Solutions />
        {/* Régi horgony-álnevek: a hirdetési sitelinkek ezekre mutatnak */}
        <span id="services" className="block scroll-mt-20" aria-hidden />
        <ServiceBlocks />
        <span id="portfolio" className="block scroll-mt-20" aria-hidden />
        <Works />
        <Guarantees />
        <Testimonials />
        <Process />
        <span id="pricing" className="block scroll-mt-20" aria-hidden />
        <Pricing />
        <Faq />
        <span id="contact" className="block scroll-mt-20" aria-hidden />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
