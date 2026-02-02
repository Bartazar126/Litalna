'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_SRC = 'https://res.cloudinary.com/dldgqjxkn/image/upload/c_limit,h_64,w_200,f_auto,q_auto,dpr_2/v1770048979/NexusLogo_copy_skdi9i.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Kezdőlap', href: '/' },
    { name: 'Szolgáltatások', href: '/#services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kapcsolat', href: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080b14]/95 backdrop-blur-md shadow-lg shadow-blue-500/5 border-b border-blue-500/20'
          : 'bg-[#080b14]/80 backdrop-blur-md border-b border-blue-500/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo: N + exuscode — egy méret, minden eszközön ugyanúgy */}
          <a
            href="/"
            className="flex shrink-0 items-end gap-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b14]"
          >
            <span className="relative block h-8 w-11 shrink-0">
              <Image
                src={LOGO_SRC}
                alt="Nexuscode"
                fill
                sizes="44px"
                className="object-contain object-left"
                priority
                fetchPriority="high"
              />
            </span>
            <span className="w-px h-4 shrink-0 self-center bg-gradient-to-b from-transparent via-blue-500/40 to-transparent -ml-3 mr-1 shrink-0" aria-hidden />
            <span className="flex flex-col items-start -ml-2 min-w-0">
              <span className="mb-0.5 w-full max-w-[4rem] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" aria-hidden />
              <span className="pb-0.5 text-sm font-semibold leading-none tracking-tight opacity-90">
                <span className="text-gray-300">exus</span>
                <span className="text-gradient logo-code-glow">code</span>
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="/ajanlat"
            className="hidden md:block bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            Ajánlatkérés
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-3 border-t border-white/10 overflow-hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/ajanlat"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white px-6 py-2.5 rounded-lg text-center font-semibold shadow-lg"
              >
                Ajánlatkérés
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
