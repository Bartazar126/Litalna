import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesModern from '@/components/ServicesModern';
import WhyUs from '@/components/WhyUs';
import PricingSimple from '@/components/PricingSimple';
import Process from '@/components/Process';
import TestimonialsModern from '@/components/TestimonialsModern';
import ContactModern from '@/components/ContactModern';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CookieConsent from '@/components/CookieConsent';

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
      <ParticleBackground />
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
