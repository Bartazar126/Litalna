'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Star, Rocket } from 'lucide-react';

export default function PricingSimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: 'Alap',
      price: '80.000',
      icon: Zap,
      color: 'blue',
      description: 'Tökéletes kezdéshez',
      features: [
        '1-5 aloldal',
        'Responsive design',
        'SEO alapok',
        'Kapcsolati űrlap',
        'Google Analytics',
        'Mobile optimalizált',
        '1 hét átfutás',
      ],
      ideal: 'Landing page, bemutatkozó oldal',
      cta: 'Ajánlatot kérek',
      popular: false,
    },
    {
      name: 'Prémium',
      price: '149.990',
      icon: Star,
      color: 'violet',
      description: 'Legtöbbet választott',
      features: [
        '5-15 aloldal',
        'Komplex dizájn',
        'Teljes SEO csomag',
        'Blog rendszer',
        'Email marketing integráció',
        'Admin dashboard',
        'Többnyelvűség',
        'Analytics + heatmap',
        '1-2 hét átfutás',
      ],
      ideal: 'Vállalati weboldal, portfólió',
      cta: 'Ajánlatot kérek',
      popular: true,
    },
    {
      name: 'Webshop',
      price: '424.990',
      icon: Rocket,
      color: 'emerald',
      description: 'Komplex megoldások',
      features: [
        'Korlátlan aloldal',
        'Webshop funkciók',
        'Online fizetés (Stripe/Barion)',
        'Készletkezelés',
        'Rendeléskezelés',
        'Ügyfélkapcsolat rendszer',
        'Email automatizálás',
        'Kuponkódok',
        'Értékelési rendszer',
        'Admin panel',
        '2-3 hét átfutás',
      ],
      ideal: 'E-kereskedelem, online értékesítés',
      cta: 'Ajánlatot kérek',
      popular: false,
    },
  ];

  const getColorClasses = (color: string, type: 'border' | 'gradient' | 'text' | 'shadow') => {
    const colors: any = {
      blue: {
        border: 'border-blue-500/30 hover:border-blue-400/60',
        gradient: 'from-blue-500 to-cyan-500',
        text: 'text-blue-400',
        shadow: 'shadow-blue-500/20 hover:shadow-blue-500/40',
      },
      violet: {
        border: 'border-violet-500/40 hover:border-violet-400/70',
        gradient: 'from-violet-500 to-purple-500',
        text: 'text-violet-400',
        shadow: 'shadow-violet-500/30 hover:shadow-violet-500/50',
      },
      emerald: {
        border: 'border-emerald-500/30 hover:border-emerald-400/60',
        gradient: 'from-emerald-500 to-green-500',
        text: 'text-emerald-400',
        shadow: 'shadow-emerald-500/20 hover:shadow-emerald-500/40',
      },
    };
    return colors[color][type];
  };

  return (
    <section id="pricing" className="scroll-mt-24 py-12 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#111118] to-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] md:opacity-30"></div>
      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-violet-500/12 md:bg-violet-500/18 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 md:w-96 md:h-96 bg-blue-500/12 md:bg-blue-500/18 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl hidden md:block"></div>
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            <span className="text-gradient">Árazás</span>
          </h2>
          <div className="section-accent-line mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
            Fix árazás, nincs meglepetés. <span className="text-gradient">Nincs havi díj</span>, egyszeri fizetés. Minden csomag testreszabható - kérj ajánlatot, hamar válaszolunk.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: plan.popular ? 1.03 : 1.02, transition: { duration: 0.15 } }}
              className={`relative glass border-2 ${getColorClasses(plan.color, 'border')} ${
                plan.popular ? 'lg:scale-105 lg:shadow-2xl' : ''
              } p-6 sm:p-8 rounded-2xl transition-[transform,box-shadow,border-color] duration-150 ease-out ${getColorClasses(plan.color, 'shadow')} flex flex-col`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${getColorClasses(plan.color, 'gradient')} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    ⭐ Népszerű
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(plan.color, 'gradient')} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <plan.icon className="w-7 h-7 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`text-sm ${getColorClasses(plan.color, 'text')} mb-4 font-medium`}>{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${getColorClasses(plan.color, 'gradient')} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-semibold">Ft-tól</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Nettó ár, egyszeri fizetés</p>
              </div>

              {/* Ideal for */}
              <div className="mb-6 p-3 glass rounded-lg border border-white/5">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">Ideális:</span> {plan.ideal}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 ${getColorClasses(plan.color, 'text')} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <motion.a
                  href="/ajanlat"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full bg-gradient-to-r ${getColorClasses(plan.color, 'gradient')} text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl ${getColorClasses(plan.color, 'shadow')}`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra info box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass border border-blue-500/20 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5"></div>
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
              💡 Egyedi igény?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Egyik csomag sem passzol tökéletesen?</span> Nincs gond. Minden projekt egyedi - kérj testreszabott ajánlatot. 
              <span className="text-gradient"> Pár órán belül részletes árajánlatot küldünk.</span> Booking rendszer, foglalási funkciók, egyedi integrációk - minden megoldható.
            </p>
            <motion.a
              href="/ajanlat"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-6 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40"
            >
              Egyedi ajánlatot kérek
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
