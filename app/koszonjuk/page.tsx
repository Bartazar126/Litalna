import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdsConversion from '@/components/AdsConversion';

/* A konverziót az űrlap méri a sikeres küldés pillanatában
   (lib/tracking.ts); az AdsConversion itt csak biztonsági háló. */

export const metadata: Metadata = {
  title: 'Köszönjük! | Nexuscode',
  robots: {
    index: false, // Ne indexelje a Google a köszönőoldalt
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <AdsConversion />
      <Header current="" />

      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-5 pt-[64px] bg-[color:var(--section)]">
        <div className="max-w-[560px] w-full py-16">
          <div className="card p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-emerald-50 mx-auto mb-6">
              <CheckCircle size={38} className="text-emerald-500" />
            </div>

            <h1 className="font-display text-[26px] sm:text-[32px] font-semibold text-[color:var(--heading)] mb-3">
              Megkaptuk, köszönjük!
            </h1>
            <p className="text-[15px] text-[color:var(--muted)] leading-relaxed mb-8">
              Kollégánk <strong className="text-[color:var(--heading)]">24 órán belül</strong> felveszi veled a
              kapcsolatot a megadott elérhetőségeken, és hozza a személyre szabott ajánlatot. A visszaigazolást
              emailben is elküldtük.
            </p>

            <div className="rounded-lg bg-[color:var(--primary-dim)] px-5 py-4 mb-8 text-[14px] text-[color:var(--heading)]">
              Sürgős? Hívj most, és már ma átbeszéljük:
              <a
                href="tel:+36302697632"
                data-track="köszönőoldal"
                className="flex items-center justify-center gap-2 mt-2 text-[17px] font-semibold text-[color:var(--primary)] hover:underline underline-offset-4"
              >
                <Phone size={17} />
                06 30 269 7632
              </a>
              <span className="inline-flex items-center gap-1.5 mt-1 text-[12.5px] text-[color:var(--muted)]">
                <Clock size={13} />
                Minden nap 8–22-ig
              </span>
            </div>

            <Link href="/" className="btn-secondary">
              <ArrowLeft size={16} />
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
