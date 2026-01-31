'use client';

import { ArrowRight, Zap, Clock, Rocket } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#080b14] via-[#0f1529] to-[#080b14]">
      {/* Grid pattern - HIDDEN on mobile */}
      <div className="absolute inset-0 grid-pattern opacity-25 hidden md:block"></div>

      {/* Gradient orbs - HIDDEN on mobile for 90+ performance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-30 hidden md:block"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl opacity-30 hidden md:block"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge - Static on mobile, animate on desktop */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 mb-6 sm:mb-8 shadow-lg md:animate-fade-in">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-gray-200">Gyors, megbízható, professzionális</span>
        </div>

        {/* Main Heading - Static on mobile, animate on desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-10 leading-[0.95] tracking-tight md:animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="block text-white">
            A weboldalad
          </span>
          <span className="block mt-2 sm:mt-4 text-gradient">
            1-2 hét alatt kész
          </span>
        </h1>

        {/* Subheading - Static on mobile, animate on desktop */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-3xl mx-auto font-normal leading-relaxed px-4 md:animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Modern weboldalak <span className="text-white font-semibold">gyors átfutással és fix határidővel.</span> Nem kell hónapokat várnod - mi 1-2 hét alatt leadjuk a kész projektet.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 md:animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-white font-semibold">2-3 órán belül válaszolunk</span> minden megkeresésre. Minden nap elérhetőek vagyunk. Next.js/React technológia, keresőoptimalizálás, mobilra optimalizált, villámgyors teljesítmény.
        </p>

        {/* CTA Buttons - Static on mobile, animate on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="/ajanlat"
            className="group relative bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Ingyenes ajánlatkérés
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#services"
            className="group glass border border-blue-500/30 hover:border-blue-400/60 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 active:scale-95"
          >
            <span>Szolgáltatások</span>
          </a>
        </div>


        {/* Trust indicators + Features */}
        <div className="max-w-6xl mx-auto px-4 sm:px-0 md:animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Main stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { number: '2-3 óra', label: 'Válaszidő', Icon: Zap, color: 'from-blue-500 to-cyan-600' },
              { number: '7 nap', label: 'Heti elérhetőség', Icon: Clock, color: 'from-green-500 to-emerald-600' },
              { number: '24-48 óra', label: 'Projekt start', Icon: Rocket, color: 'from-purple-500 to-purple-600' },
              { number: '1-2 hét', label: 'Átfutási idő', Icon: Zap, color: 'from-cyan-500 to-cyan-600' },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative glass border border-blue-500/20 hover:border-blue-400/40 p-4 sm:p-6 rounded-xl transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="relative z-10">
                  <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-xl`}></div>
              </div>
            ))}
          </div>

          {/* Value Props - one-liners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: '⚡', text: 'Gyors Visszajelzés', subtext: '2-3 órán belül válaszolunk emailre, telefonra, chatbe. Minden nap elérhetőek vagyunk 8-22 óráig.' },
              { icon: '🔧', text: 'Fix Határidők', subtext: 'Pontosan tudjuk, mikor lesz kész a projekted. 1-2 hét alatt átfutás, egyértelmű mérföldkövek. Nem csúszunk.' },
              { icon: '💎', text: 'Modern Technológia', subtext: 'Next.js/React stack. Villámgyors betöltés, SEO ready, mobilra optimalizált. Nem WordPress káosz.' },
            ].map((item, index) => (
              <div key={index} className="glass border border-blue-500/15 p-5 sm:p-6 rounded-xl hover:border-blue-400/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{item.text}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 mb-8 md:animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <TrustBadges />
        </div>

        {/* Trust Bar */}
        <div className="glass border border-blue-500/15 rounded-xl p-6 text-center md:animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-white font-semibold">Tapasztalt fejlesztő csapatunk</span> építi a projektedet. Nincs ügynökségi árszabás, nincs hónapos várakozás. Kapsz egy ingyenes konzultációt, ahol megbeszéljük mit akarsz, aztán elkezdjük építeni.
          </p>
        </div>
      </div>
    </section>
  );
}
