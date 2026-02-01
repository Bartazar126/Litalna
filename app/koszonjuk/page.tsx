import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Köszönjük! | Nexuscode',
  robots: {
    index: false, // Ne indexelje a Google a köszönőoldalt
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080b14] via-[#0f1529] to-[#080b14] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="glass border border-green-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-green-500/5"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
              <CheckCircle className="text-white" size={40} />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Sikeres küldés!
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Köszönjük a megkeresést. Kollégánk <span className="text-green-400 font-bold">24 órán belül</span> felveszi Veled a kapcsolatot a megadott elérhetőségeken.
            </p>
            
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
              >
                <ArrowLeft size={20} />
                Vissza a főoldalra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
