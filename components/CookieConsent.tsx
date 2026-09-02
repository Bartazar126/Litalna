'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const t = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white border border-[color:var(--hairline-strong)] rounded-xl p-4 sm:p-6 shadow-[0_20px_56px_-16px_rgba(13,27,54,0.35)]">
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-11 h-11 bg-[color:var(--primary-dim)] rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-[color:var(--primary)]" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-[15px] font-semibold text-[color:var(--heading)] mb-1.5">Cookie-k használata</h3>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              Weboldalunk sütiket használ a jobb felhasználói élményért. Az analitikai
              sütik segítenek megérteni, hogyan használják látogatóink az oldalt.
              <Link href="/privacy" className="text-[color:var(--primary)] hover:underline ml-1">
                További információ
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button onClick={acceptCookies} className="btn-primary !py-2.5 whitespace-nowrap">
              Elfogadom
            </button>
            <button onClick={declineCookies} className="btn-secondary !py-2.5 whitespace-nowrap">
              Elutasítom
            </button>
          </div>

          <button
            onClick={declineCookies}
            className="absolute -top-1 -right-1 sm:hidden text-[color:var(--faint)] hover:text-[color:var(--heading)] transition-colors"
            aria-label="Bezárás"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
