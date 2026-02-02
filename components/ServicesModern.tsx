'use client';

import { Zap, Search, Smartphone, Shield, Code2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Gyors Visszajelzés',
    description: 'Azonnal reagálunk. Email, telefon, chat - minden csatornán. Minden nap 8-22 óra között. Nem kell napokat várnod, gyorsan reagálunk.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Gyors Projekt Indítás',
    description: '24-48 órán belül kezdjük a projektet. Átlátható folyamat, fix határidők. 1-2 hét átfutási idő. Folyamatos státusz frissítések.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Minden Nap Elérhetőek',
    description: 'Hétfőtől vasárnapig, 8-22 óra között. Rugalmas ütemezés. Hétvégén is dolgozunk ha szükséges. Folyamatos kommunikáció.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Code2,
    title: 'Enterprise Grade Tech',
    description: 'Next.js, React, TypeScript - olyan stack amit a Fortune 500 cégek használnak. Nem WordPress plugin káosz. Biztonságos, skálázható, karbantartható.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Search,
    title: 'SEO Optimalizálás',
    description: 'Meta tagek, sitemap, strukturált adatok, Open Graph. Mobilra optimalizált dizájn. Google Analytics integráció. Jobb rankelés a keresőkben.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Smartphone,
    title: 'Ingyenes Karbantartás',
    description: 'Support a projekt után. Azonnal javítjuk a bugokat. Dokumentált kód, amit később más fejlesztő is átvesz. Hosszú távú partner.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function ServicesModern() {
  return (
    <section id="services" className="scroll-mt-24 py-12 sm:py-20 md:py-28 px-4 bg-[#030712] relative overflow-hidden">
      {/* Background - subtle on mobile */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] md:opacity-35"></div>
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 md:w-96 md:h-96 bg-blue-500/10 md:bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-purple-500/10 md:bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl hidden md:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Mit <span className="text-gradient">kapsz tőlünk?</span>
          </h2>
          <div className="section-accent-line mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
            Gyors kommunikáció, minden nap elérhetőek vagyunk, 24-48 órán belül indulunk. Modern Next.js stack, gyors átfutás, fix határidők. <span className="text-white font-semibold">Tapasztalt fejlesztő csapat</span> dolgozik a projekten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative glass border border-blue-500/15 p-6 sm:p-8 rounded-xl transition-all duration-300 md:hover:scale-[1.02] md:hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                <service.icon className="text-white" size={20} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 text-center px-4">
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            <span className="text-white font-semibold">Minden ami szükséges egy professzionális weboldalhoz.</span> Gyors válaszidő, modern technológia, tiszta kommunikáció. Az első konzultáció ingyenes.
          </p>
          <a
            href="/ajanlat"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 text-sm sm:text-base md:hover:scale-105"
          >
            <span>Ingyenes Ajánlatkérés</span>
          </a>
        </div>
      </div>
    </section>
  );
}
