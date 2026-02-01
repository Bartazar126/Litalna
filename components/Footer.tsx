'use client';

import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'Kezdőlap', href: '/' },
    { name: 'Szolgáltatások', href: '/#services' },
    { name: 'Referenciák', href: '/references' },
    { name: 'Ajánlatkérés', href: '/ajanlat' },
    { name: 'Kapcsolat', href: '/#contact' },
  ];

  const services = [
    { name: 'Webfejlesztés', href: '#services' },
    { name: 'SEO Optimalizálás', href: '#services' },
    { name: 'Reszponzív Design', href: '#services' },
    { name: 'Karbantartás', href: '#services' },
  ];

  return (
    <footer className="bg-[#030712] text-white relative overflow-hidden border-t border-blue-500/20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Nexuscode
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <span className="font-bold text-white">Gyors, megbízható honlapfejlesztés.</span> Professzionális fejlesztő csapatunk építi a projektedet. Minden nap elérhetőek vagyunk 8-22 óráig. 2-3 óra válaszidő garantálva.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass border border-blue-500/30 hover:border-blue-400/50 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Gyors linkek</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Szolgáltatások</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Elérhetőség - <span className="text-gradient">Minden nap</span></h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-cyan-400" />
                <a href="mailto:hello@nexuscode.hu" className="hover:text-blue-400 transition-colors">
                  hello@nexuscode.hu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 flex-shrink-0">📞</span>
                <a href="tel:+36309932454" className="hover:text-blue-400 transition-colors">
                  +36 30 993 2454
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 flex-shrink-0">⏰</span>
                <span className="font-semibold text-white">Minden nap 8-22 óráig<br /><span className="text-sm text-gradient">2-3 óra válaszidő garantálva</span></span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Nexuscode. Minden jog fenntartva. | 
            <span className="text-xs ml-2">Professzionális weboldal fejlesztés 1-2 hét alatt</span>
          </p>
          <div className="flex gap-6 text-sm flex-wrap justify-center">
            <motion.a href="/privacy" whileHover={{ y: -2 }} className="text-gray-400 hover:text-blue-400 transition-colors">
              Adatvédelmi Nyilatkozat
            </motion.a>
            <motion.a href="/terms" whileHover={{ y: -2 }} className="text-gray-400 hover:text-blue-400 transition-colors">
              ÁSZF
            </motion.a>
            <motion.a href="/privacy#cookies" whileHover={{ y: -2 }} className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie-k
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
