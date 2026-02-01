'use client';

import { CheckCircle2, Zap, Shield, Code2, TrendingUp, Clock, Smartphone } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'Nem kell napokat várnod válaszra',
      description: 'Írsz egy emailt és napokig csend? Nálunk ez nem létezik. 2-3 órán belül válaszolunk minden megkeresésre. Email, telefon, chat - gyorsan reagálunk. Értékeljük az idődet, és tudjuk mennyire fontos hogy gyorsan haladj a projekteddel.',
      stat: '2-3 óra',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Minden nap dolgozunk - hétvégén is',
      description: 'Szombat este jut eszedbe valami? Vasárnap délután változtatnál? Nincs gond. Hétfőtől vasárnapig, reggel 8-tól este 10-ig elérhetőek vagyunk. Nem kell hétfőig várni egy egyszerű kérdésre. Rugalmasak vagyunk, mert tudjuk hogy nem állhat meg a világ munkaidő után.',
      stat: '7 nap/hét',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Azonnal kezdünk - nem húzzuk hónapokra',
      description: 'Sok webfejlesztő hetekig egyeztet mielőtt egyáltalán kezdene valamit. Mi nem. Megbeszéljük mit szeretnél, és 24-48 órán belül látod az első eredményeket. 1-2 hét alatt kész az oldal, nem 2-3 hónap. Gyorsak vagyunk mert profi rendszerünk van és értjük mit csinálunk.',
      stat: '1-2 hét',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Olyan tech amit a Netflix használ',
      description: 'Next.js, React, TypeScript - ezt használja a Netflix, Uber, Nike. Nem WordPress sablon 50 random plugin-nal ami holnapután már nem működik. Modern, biztonságos, gyors technológia. Az oldal évekig működni fog update nélkül is. És ha mégis kell változtatni, egyszerű lesz.',
      stat: 'Enterprise',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Keresőoptimalizált és mobilbarát',
      description: 'Az oldalad könnyen megtalálható lesz a Google-ben. SEO alapok beépítve: meta tagek, sitemap, gyors betöltés, strukturált adatok. Mobilon tökéletesen működik minden eszközön. Modern technológia, ami segít a jobb rankelésben.',
      stat: 'SEO Ready',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Nem hagylak magadra átadás után',
      description: 'Átadjuk az oldalt, és onnantól... csönd? Soknál igen, nálunk nem. Ingyenes karbantartás a projekt után. Ha bármi gond van, azonnal segítünk. Tartalom frissítés? Megtanítjuk vagy megcsináljuk. Bug? Azonnal javítjuk. Te koncentrálj a vállalkozásodra, a tech részét mi kezeljük.',
      stat: 'Lifetime',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const techStack = [
    { name: 'Next.js', desc: 'React framework', icon: '⚡', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', desc: 'Type-safe kód', icon: '🔷', gradient: 'from-indigo-500 to-blue-500' },
    { name: 'Tailwind CSS', desc: 'Modern styling', icon: '🎨', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Git', desc: 'Verziókezelés', icon: '📦', gradient: 'from-purple-500 to-indigo-500' },
    { name: 'Cloud Hosting', desc: 'Vercel/Netlify', icon: '☁️', gradient: 'from-blue-600 to-indigo-600' },
    { name: 'Analytics', desc: 'Statisztikák', icon: '📊', gradient: 'from-indigo-600 to-purple-600' }
  ];

  return (
    <section className="py-20 sm:py-32 px-4 bg-[#030712] relative overflow-hidden">
      {/* Background pattern - Hidden on mobile */}
      <div className="absolute inset-0 grid-pattern opacity-30 hidden md:block"></div>

      {/* Gradient orbs - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl hidden md:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 glass neon-border px-5 py-2.5 rounded-full text-sm font-bold mb-6"
          >
            <CheckCircle2 size={16} className="text-cyan-400" />
            <span className="text-gradient">Miért válassz minket?</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            Gyors válaszidő, <span className="text-gradient">profi munka</span>
          </h2>

          <p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            2-3 óra válaszidő minden megkeresésre. 24-48 óra projekt indítás. Modern Next.js/React/TypeScript stack.
            <span className="font-bold text-gradient"> Gyors átfutás, professzionális kivitelezés.</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden md:hover:scale-[1.02]"
            >
              {/* Gradient border glow on hover - Desktop only */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 md:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Icon + Stat */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-6`}
                >
                  <benefit.icon size={28} className="text-white" />
                </div>
                <div className={`text-2xl font-black bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.stat}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div
          className="glass border-2 border-blue-500/20 rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              <span className="text-gradient">Tech</span> Stack
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade eszközök. Olyan stack amit a Fortune 500 cégek használnak. Modern, biztonságos, skálázható megoldások.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden md:hover:scale-110 md:hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <div className={`text-base font-bold bg-gradient-to-br ${tech.gradient} bg-clip-text text-transparent mb-1`}>
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* References Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Élő <span className="text-gradient">projektek</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Referencia munkák. Látható eredmények. Ellenőrizhető teljesítmény.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Access to Italy */}
            <div
              className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 md:hover:scale-[1.02] md:hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-2xl"></div>

              <div className="ml-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">Access to Italy</h4>
                  <a href="https://accesstoitaly.com" target="_blank" rel="noopener noreferrer" className="text-gradient hover:underline text-sm">
                    Megtekintés →
                  </a>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Teljes körű utazási platform Olaszországba. Modern booking rendszer, multilang support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 glass border border-blue-500/30 text-blue-300 rounded text-xs font-medium">Next.js</span>
                  <span className="px-2 py-1 glass border border-blue-500/30 text-blue-300 rounded text-xs font-medium">Booking</span>
                </div>
              </div>
            </div>

            {/* Entrigo Tickets */}
            <div
              className="group relative glass border-2 border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 md:hover:scale-[1.02] md:hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-600 rounded-l-2xl"></div>

              <div className="ml-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">Entrigo Tickets</h4>
                  <a href="https://entrigotickets.com" target="_blank" rel="noopener noreferrer" className="text-gradient-pink hover:underline text-sm">
                    Megtekintés →
                  </a>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Jegy értékesítési platform. Real-time foglalás, payment gateway integráció.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 glass border border-purple-500/30 text-purple-300 rounded text-xs font-medium">React</span>
                  <span className="px-2 py-1 glass border border-purple-500/30 text-purple-300 rounded text-xs font-medium">Payment</span>
                </div>
              </div>
            </div>

            {/* Erika Nyaraló */}
            <div
              className="group relative glass border-2 border-green-500/20 hover:border-green-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 md:hover:scale-[1.02] md:hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-emerald-600 rounded-l-2xl"></div>

              <div className="ml-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">Erika Nyaraló</h4>
                  <a href="https://erikanyaralo.hu" target="_blank" rel="noopener noreferrer" className="text-gradient hover:underline text-sm text-green-400">
                    Megtekintés →
                  </a>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Modern szállásfoglaló weboldal. Galéria, térkép integráció, SEO optimalizált design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 glass border border-green-500/30 text-green-300 rounded text-xs font-medium">Webdesign</span>
                  <span className="px-2 py-1 glass border border-green-500/30 text-green-300 rounded text-xs font-medium">SEO</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
        >
          <a
            href="/ajanlat"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 md:hover:scale-105"
          >
            <span>Ingyenes Ajánlatkérés</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
