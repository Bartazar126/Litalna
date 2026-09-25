import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HashAnchorFix from '@/components/HashAnchorFix';
import Hero from '@/components/home/Hero';

// A hajtás alatti szekciók késleltetve töltődnek (PageSpeed)
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { loading: () => null });
const Works = dynamic(() => import('@/components/home/Works'), { loading: () => null });
const Compare = dynamic(() => import('@/components/home/Compare'), { loading: () => null });
const Pricing = dynamic(() => import('@/components/home/Pricing'), { loading: () => null });
const Guarantees = dynamic(() => import('@/components/home/Guarantees'), { loading: () => null });
const Process = dynamic(() => import('@/components/home/Process'), { loading: () => null });
const Solutions = dynamic(() => import('@/components/home/Solutions'), { loading: () => null });
const ServiceBlocks = dynamic(() => import('@/components/home/ServiceBlocks'), { loading: () => null });
const Faq = dynamic(() => import('@/components/home/Faq'), { loading: () => null });
const FinalCta = dynamic(() => import('@/components/home/FinalCta'), { loading: () => null });

export const metadata: Metadata = {
  title: 'Weboldal készítés fix áron, pár hét alatt | Nexuscode',
  description:
    'Weboldal készítés, webáruház és egyedi fejlesztés fix áron, 1-2 hét alatt. Írásos ajánlat 24 órán belül, rejtett költségek nélkül.',
  openGraph: {
    title: 'Nexuscode — Digital Technology Studio',
    description:
      'Weboldal, webáruház, egyedi rendszer és marketing, egy kézben. A jövőt építjük.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <HashAnchorFix />
      <Header />
      {/* Konverziós sorrend: ajánlat, bizonyíték (vélemények, munkák),
          különbség, ár, garancia, folyamat, szolgáltatások, kérdések, űrlap */}
      <main className="overflow-x-hidden">
        <Hero />
        <Testimonials />
        {/* Régi horgony-álnevek: a hirdetési sitelinkek ezekre mutatnak */}
        <span id="portfolio" className="block scroll-mt-20" aria-hidden />
        <Works />
        <Compare />
        <span id="pricing" className="block scroll-mt-20" aria-hidden />
        <Pricing />
        <Guarantees />
        <Process />
        <Solutions />
        <span id="services" className="block scroll-mt-20" aria-hidden />
        <ServiceBlocks />
        <Faq />
        <span id="contact" className="block scroll-mt-20" aria-hidden />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
