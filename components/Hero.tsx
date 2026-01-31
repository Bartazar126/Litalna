'use client';

import { ArrowRight, Zap, Clock, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#080b14] via-[#0f1529] to-[#080b14]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25"></div>

      {/* Simplified gradient orbs - static for better performance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge - simple fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/15 border border-blue-500/30 mb-6 sm:mb-8 shadow-lg"
        >
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-gray-200">Gyors, megbízható, professzionális</span>
        </motion.div>

        {/* Main Heading - simple fade */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-10 leading-[0.95] tracking-tight"
        >
          <span className="block text-white">
            A weboldalad
          </span>
          <span className="block mt-2 sm:mt-4 text-gradient">
            1-2 hét alatt kész
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-3xl mx-auto font-normal leading-relaxed px-4"
        >
          Modern weboldalak <span className="text-white font-semibold">gyors átfutással és fix határidővel.</span> Nem kell hónapokat várnod - mi 1-2 hét alatt leadjuk a kész projektet.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          <span className="text-white font-semibold">2-3 órán belül válaszolunk</span> minden megkeresésre. Minden nap elérhetőek vagyunk. Next.js/React technológia, keresőoptimalizálás, mobilra optimalizált, villámgyors teljesítmény.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-16 sm:mb-24 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.a
            href="/ajanlat"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Ingyenes ajánlatkérés
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group glass border border-blue-500/30 hover:border-blue-400/60 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Szolgáltatások</span>
          </motion.a>
        </motion.div>


        {/* Trust indicators + Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-0"
        >
          {/* Main stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { number: '2-3 óra', label: 'Válaszidő', Icon: Zap, color: 'from-blue-500 to-cyan-600' },
              { number: '7 nap', label: 'Heti elérhetőség', Icon: Clock, color: 'from-green-500 to-emerald-600' },
              { number: '24-48 óra', label: 'Projekt start', Icon: Rocket, color: 'from-purple-500 to-purple-600' },
              { number: '1-2 hét', label: 'Átfutási idő', Icon: Zap, color: 'from-cyan-500 to-cyan-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative glass border border-blue-500/20 hover:border-blue-400/40 p-4 sm:p-6 rounded-xl transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="relative z-10">
                  <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Gyors Visszajelzés',
                desc: '2-3 órán belül válaszolunk emailre, telefonra, chatbe. Minden nap elérhetőek vagyunk 8-22 óra között.',
                Icon: Zap,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Fix Határidők',
                desc: 'Pontosan tudjuk, mikor lesz kész a projekted. 1-2 hét átfutás, egyértelmű mérföldkövek, napi frissítések.',
                Icon: Clock,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Modern Technológia',
                desc: 'Next.js/React stack. Villámgyors teljesítmény, SEO optimalizálva, mobilra tökéletes. Nem WordPress káosz.',
                Icon: Rocket,
                gradient: 'from-purple-500 to-pink-500'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass border border-blue-500/20 hover:border-blue-400/40 p-5 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        {/* Trust Badges - simple fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 mb-8"
        >
            <TrustBadges />
          </motion.div>

        {/* Trust Bar - simple fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="glass border border-blue-500/15 rounded-xl p-6 text-center"
        >
            <p className="text-gray-300 text-sm sm:text-base">
              <span className="text-white font-semibold">Tapasztalt fejlesztő csapatunk</span> építi a projektedet. Nincs ügynökségi árszabás, nincs hónapos várakozás. Kapsz egy ingyenes konzultációt, ahol megbeszéljük mit akarsz, aztán elkezdjük építeni.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
