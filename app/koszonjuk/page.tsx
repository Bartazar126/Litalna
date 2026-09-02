import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdsConversion from '@/components/AdsConversion';

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
              kapcsolatot a megadott elérhetőségeken, és hozza a személyre szabott ajánlatot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 mb-9 text-[13.5px] text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-[color:var(--primary)]" />
                Minden nap 8–22-ig
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={15} className="text-[color:var(--primary)]" />
                +36 30 993 2454
              </span>
            </div>

            <Link href="/" className="btn-primary">
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
