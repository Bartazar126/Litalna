'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Initialize Google Analytics or other tracking here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="max-w-6xl mx-auto glass border-2 border-blue-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl bg-[#0a0a0f]/95">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  🍪 Cookie-k használata
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Weboldalunk cookie-kat (sütiket) használ a legjobb felhasználói élmény biztosítása és a weboldal funkcióinak optimalizálása érdekében. 
                  Az analitikai cookie-k segítenek megérteni, hogyan használják látogatóink az oldalt. 
                  <Link href="/privacy" className="text-blue-400 hover:underline ml-1">
                    További információ
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Elfogadom
                </button>
                <button
                  onClick={declineCookies}
                  className="px-6 py-2.5 glass border border-white/20 text-white rounded-lg font-semibold hover:border-white/40 transition-all duration-300 whitespace-nowrap"
                >
                  Elutasítom
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={declineCookies}
                className="absolute top-3 right-3 sm:relative sm:top-0 sm:right-0 text-gray-400 hover:text-white transition-colors"
                aria-label="Bezárás"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
