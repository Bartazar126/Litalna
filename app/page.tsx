import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

// Below-the-fold: lazy load for PageSpeed 90+
const ServicesModern = dynamic(() => import('@/components/ServicesModern'), { loading: () => null });
const WhyUs = dynamic(() => import('@/components/WhyUs'), { loading: () => null });
const PricingSimple = dynamic(() => import('@/components/PricingSimple'), { loading: () => null });
const Process = dynamic(() => import('@/components/Process'), { loading: () => null });
const TestimonialsModern = dynamic(() => import('@/components/TestimonialsModern'), { loading: () => null });
const ContactModern = dynamic(() => import('@/components/ContactModern'), { loading: () => null });
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { loading: () => null });

export const metadata: Metadata = {
  title: 'Honlapkészítés 1-2 Hét Alatt | Weboldal Fejlesztés 80.000 Ft-tól',
  description: 'Professzionális weboldal fejlesztés 1-2 hét alatt, 80.000 Ft-tól. Next.js, React, SEO optimalizált, mobilbarát. Gyors válaszidő. Webshop, landing page, vállalati oldal készítés.',
  openGraph: {
    title: 'Honlapkészítés 1-2 Hét Alatt | 80.000 Ft-tól',
    description: 'Gyors, professzionális weboldal fejlesztés. Next.js, React, mobilbarát, SEO optimalizált.',
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
        <div className="section-divider mx-4" aria-hidden />
        <ServicesModern />
        <div className="section-divider mx-4" aria-hidden />
        <WhyUs />
        <div className="section-divider mx-4" aria-hidden />
        <PricingSimple />
        <div className="section-divider mx-4" aria-hidden />
        <Process />
        <div className="section-divider mx-4" aria-hidden />
        <TestimonialsModern />
        <div className="section-divider mx-4" aria-hidden />
        <ContactModern />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
