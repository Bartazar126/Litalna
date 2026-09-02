'use client';

import { useEffect } from 'react';

/* Google Ads konverzió jelzése a köszönőoldalon. A gtag lazyOnload-dal
   töltődik, ezért türelmesen újrapróbáljuk; sessionStorage-őrrel védve,
   hogy egy frissítés ne számoljon duplán. */

export const ADS_CONVERSION_ID = 'AW-18422187691/yVHaCOHhxewcEKuNsdBE';

export default function AdsConversion() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('adsConvFired')) return;
    } catch {}

    let tries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const fire = () => {
      const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof g === 'function') {
        g('event', 'conversion', {
          send_to: ADS_CONVERSION_ID,
          value: 1.0,
          currency: 'HUF',
        });
        try {
          sessionStorage.setItem('adsConvFired', '1');
        } catch {}
      } else if (tries++ < 40) {
        timer = setTimeout(fire, 500);
      }
    };
    fire();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return null;
}
