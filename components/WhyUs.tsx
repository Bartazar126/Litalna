'use client';

import { CheckCircle2, Zap, Shield, Code2, TrendingUp, ArrowRight, Clock, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass neon-border px-5 py-2.5 rounded-full text-sm font-bold mb-6"
          >
            <CheckCircle2 size={16} className="text-cyan-400" />
            <span className="text-gradient">Miért válassz minket?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            Gyors válaszidő, <span className="text-gradient">profi munka</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            2-3 óra válaszidő minden megkeresésre. 24-48 óra projekt indítás. Modern Next.js/React/TypeScript stack.
            <span className="font-bold text-gradient"> Gyors átfutás, professzionális kivitelezés.</span>
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient border glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Icon + Stat */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30`}
                >
                  <benefit.icon size={28} className="text-white" />
                </motion.div>
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
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* References Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Élő <span className="text-gradient">projektek</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Referencia munkák. Látható eredmények. Ellenőrizhető teljesítmény.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Access to Italy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
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
                  Teljes körű utazási platform Olaszországba. Modern booking rendszer, multilang support, integrált fizetés.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 glass border border-blue-500/30 text-blue-300 rounded text-xs font-medium">Next.js</span>
                  <span className="px-2 py-1 glass border border-blue-500/30 text-blue-300 rounded text-xs font-medium">Booking</span>
                </div>
              </div>
            </motion.div>

            {/* Entrigo Tickets */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative glass border-2 border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-600 rounded-l-2xl"></div>

              {/* Preview on hover - Mac style */}
              <div className="absolute -top-2 left-full ml-6 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none hidden lg:block">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 blur-2xl"></div>

                  {/* Browser window */}
                  <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-800">
                    {/* Browser chrome */}
                    <div className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-zinc-800 dark:to-zinc-900 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-zinc-700">
                      {/* Traffic lights */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                      </div>

                      {/* URL bar */}
                      <div className="flex-1 bg-white dark:bg-zinc-800 rounded-md px-3 py-1 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700">
                        <span className="text-green-600 dark:text-green-400">🔒</span> entrigotickets.com
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dldgqjxkn/image/upload/v1769600863/619387b9-e0ad-4a5c-98e2-4e95e6b1415d.png"
                        alt="Entrigo Tickets Preview"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">Entrigo Tickets</h4>
                  <a href="https://entrigotickets.com" target="_blank" rel="noopener noreferrer" className="text-gradient-pink hover:underline text-sm">
                    Megtekintés →
                  </a>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Jegy értékesítési platform. Real-time foglalás, payment gateway integráció, admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 glass border border-purple-500/30 text-purple-300 rounded text-xs font-medium">React</span>
                  <span className="px-2 py-1 glass border border-purple-500/30 text-purple-300 rounded text-xs font-medium">Real-time</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/ajanlat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span>Ingyenes Ajánlatkérés</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
