'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'; // Added icons
import { motion, AnimatePresence } from 'framer-motion'; // Ensure AnimatePresence is imported
import { useInView } from 'framer-motion';

export default function ContactModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Added state

  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          show: true,
          type: 'success',
          message: 'Köszönjük! Üzenetét megkaptuk, hamarosan jelentkezünk.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setNotification({
          show: true,
          type: 'error',
          message: 'Hiba történt a küldéskor. Kérjük próbálja újra.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Hiba történt a hálózati kapcsolatban.',
      });
    } finally {
        setIsSubmitting(false);
        // Auto hide notification after 5 seconds
        setTimeout(() => setNotification({ ...notification, show: false }), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 px-4 bg-[#030712] relative overflow-hidden">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border ${
              notification.type === 'success' 
                ? 'bg-gray-900 border-green-500 text-green-400' 
                : 'bg-gray-900 border-red-500 text-red-400'
            }`}
          >
            {notification.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            <span className="font-medium text-white">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] md:opacity-35"></div>
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 md:w-96 md:h-96 bg-purple-500/10 md:bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-blue-500/10 md:bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl hidden md:block"></div>

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Kérj <span className="text-gradient">ajánlatot</span>
          </h2>
          <div className="section-accent-line mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
            Töltsd ki az űrlapot vagy hívj minket. <span className="font-bold text-white">2-3 órán belül válaszolunk.</span> Minden nap elérhetőek vagyunk 8-22 óra között.
          </p>
        </motion.div>

        {/* Form - animált */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass border-2 border-blue-500/20 hover:border-blue-400/50 p-6 sm:p-10 rounded-2xl space-y-5 sm:space-y-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Név
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 glass border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder:text-gray-500"
                placeholder="Teljes neved"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 glass border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder:text-gray-500"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Telefonszám (opcionális)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 glass border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder:text-gray-500"
              placeholder="+36 30 993 2454"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Üzenet
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 glass border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-white placeholder:text-gray-500"
              placeholder="Meséld el, milyen weboldalt szeretnél..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden"
          >
            {/* Loading overlay */}
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 flex items-center justify-center"
                >
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <span>Küldés</span>
            <Send size={20} />
          </button>

          <p className="text-center text-sm text-gray-400">
            <span className="font-bold text-white">Garantált válaszidő:</span> 2-3 órán belül jelentkezünk minden megkeresésre.
          </p>
        </motion.form>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">
            Telefonon vagy emailben is elérhetsz minket. <span className="font-bold text-white">Minden nap 8-22 óra között.</span>
          </p>
          <a href="mailto:hello@nexuscode.hu" className="text-gradient font-semibold hover:underline text-lg">
            hello@nexuscode.hu
          </a>
          <p className="text-gray-400 text-sm mt-4">
            <span className="text-white font-semibold">Az első konzultáció ingyenes</span> és kötelezettség nélküli.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
