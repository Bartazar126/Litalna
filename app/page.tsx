import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CookieConsent from '@/components/CookieConsent';

// Dynamic imports for below-the-fold components - boosts PageSpeed!
const ServicesModern = dynamic(() => import('@/components/ServicesModern'));
const WhyUs = dynamic(() => import('@/components/WhyUs'));
const PricingSimple = dynamic(() => import('@/components/PricingSimple'));
const Process = dynamic(() => import('@/components/Process'));
const TestimonialsModern = dynamic(() => import('@/components/TestimonialsModern'));
const ContactModern = dynamic(() => import('@/components/ContactModern'));

export const metadata: Metadata = {
  title: 'Honlapkészítés 1-2 Hét Alatt | Weboldal Fejlesztés 80.000 Ft-tól',
  description: 'Professzionális weboldal fejlesztés 1-2 hét alatt, 80.000 Ft-tól. Next.js, React, SEO optimalizált, mobilbarát. 2-3 óra válaszidő. Webshop, landing page, vállalati oldal készítés.',
  openGraph: {
    title: 'Honlapkészítés 1-2 Hét Alatt | 80.000 Ft-tól',
    description: 'Gyors, professzionális weboldal fejlesztés. Next.js, React, mobilbarát, SEO optimalizált.',
  },
  alternates: {
    canonical: 'https://honlaptervezo.hu',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <ServicesModern />
        <WhyUs />
        <PricingSimple />
        <Process />
        <TestimonialsModern />
        <ContactModern />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
