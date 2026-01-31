'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Beszélgetünk',
    description: 'Szólj nekünk mit szeretnél. Milyen az üzleted, mit akarsz elérni az oldallal, kinek szól. Megbeszéljük a funkciókat, design-t, mindent. 30-60 perc, ingyen.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    number: '02',
    title: 'Tervet készítünk',
    description: 'Csinálunk egy design tervet, hogy lásd milyen lesz. Árajánlatot kapsz, részletesen. Jóváhagyod, és akkor indulunk. Nincs meglepetés.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    number: '03',
    title: 'Megcsináljuk',
    description: 'Fejlesztünk modern technológiával, beállítjuk az SEO-t, mindent. Rendszeres update-eket kapsz, hogy hol tartunk. Általában 1-2 hét.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    number: '04',
    title: 'Teszteljük',
    description: 'Minden eszközön kipróbáljuk: mobil, tablet, laptop, minden böngésző. Ha valami nem oké, javítjuk. Csak tökéletes oldalt adunk át.',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    number: '05',
    title: 'Élesítjük',
    description: 'Feltöltjük az internetre, beállítjuk a domain-t, Analytics-ot, mindent. Működik, biztonságos, kész.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    number: '06',
    title: 'Segítünk utána is',
    description: '3-12 hónap ingyen support. Ha valami probléma van, megoldjuk. Kisebb változtatások ingyen, nagyobb fejlesztések kedvezménnyel.',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-[#030712] via-[#0a0a1f] to-[#030712] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            <span className="text-gradient">Munkamenet</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
            6 lépésben a kész weboldalig. Átlátható folyamat, fix határidők, folyamatos státusz frissítések. Professzionális projekt menedzsment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 sm:gap-8 group"
              >
                {/* Number circle - színes */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 relative z-10`}
                  >
                    {step.number}
                  </motion.div>
                  {/* Check icon on hover */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Check className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex-1 pb-8 sm:pb-12"
                >
                  <div className="glass border-2 border-blue-500/20 hover:border-blue-400/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-20 text-center px-4"
        >
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Átlátható folyamat, fix határidők, nincs rejtett költség. Kezdjük el a projektedet.
          </p>
          <motion.a
            href="/ajanlat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 text-sm sm:text-base"
          >
            <span>Ingyenes Ajánlatkérés</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
