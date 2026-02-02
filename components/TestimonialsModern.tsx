'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Kovács Anna',
    company: 'BeautyStudio',
    text: 'Gyorsan válaszoltak minden kérdésemre, még hétvégén is. 1 hét alatt kész lett az oldal. Profi csapat, ajánlom mindenkinek! Végre találtam fejlesztőt akinek nem kell napokat várni.',
    rating: 5,
  },
  {
    name: 'Szabó Gábor',
    company: 'TechConsult',
    text: 'Gyors indítás, 24 órán belül kezdtük a projektet. Mindig elérhetőek voltak, este is válaszoltak. Nem kellett heteket várni. Modern technológia, tökéletes munka.',
    rating: 5,
  },
];

export default function TestimonialsModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-[#030712] via-[#0a0a1f] to-[#030712] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] md:opacity-35"></div>
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 md:w-96 md:h-96 bg-blue-500/10 md:bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-purple-500/10 md:bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl hidden md:block"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Ügyfél <span className="text-gradient">visszajelzések</span>
          </h2>
          <div className="section-accent-line mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
            Elégedett ügyfelek véleménye a projektjeinkről. Gyors válaszidő, professzionális munka, tiszta kommunikáció.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group glass border-2 border-blue-500/20 hover:border-blue-400/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-base sm:text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 mb-4 sm:mb-6 leading-relaxed transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-blue-500/20">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - színes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">
            <span className="text-white font-bold">Kezdjük el a projektedet.</span> Az első konzultáció ingyenes és kötelezettség nélküli.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50"
          >
            Ingyenes Ajánlatkérés
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
