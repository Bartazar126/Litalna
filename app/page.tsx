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
  title: 'Nexuscode — Digital Technology Studio',
  description:
    'A Nexuscode digitális technológiai stúdió. Weboldal, webáruház, egyedi rendszer és marketing, egy kézben, érthetően, fix áron. Nem csak weboldalakat építünk. A jövőt építjük.',
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
        <ServiceBlocks />
        <Works />
        <Guarantees />
        <Testimonials />
        <Process />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
