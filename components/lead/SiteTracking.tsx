'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureClickIds, loadMetaPixel, trackEmailClick, trackPhoneClick } from '@/lib/tracking';

/* Oldalszintű mérés, minden oldalon: a hirdetési paraméterek elmentése
   (hogy az űrlap és az értesítő email is lássa), a telefon- és
   email-linkekre kattintások, és a Meta Pixel késleltetett betöltése
   (csak sütihozzájárulással). */

export default function SiteTracking() {
  const pathname = usePathname();

  useEffect(() => {
    captureClickIds();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (!a) return;
      const where =
        a.dataset.track || (a.closest('header') ? 'fejléc' : a.closest('footer') ? 'lábléc' : window.location.pathname);
      if (a.href.startsWith('tel:')) trackPhoneClick(where);
      else trackEmailClick(where);
    };
    document.addEventListener('click', onClick, true);

    // A Pixel a gtag.js-hez hasonlóan az első interakcióra vagy 6 mp után
    // töltődik, hogy ne lassítsa az első megjelenést
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    const load = () => {
      stop();
      loadMetaPixel();
    };
    const timer = setTimeout(load, 6000);
    function stop() {
      clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, load));
    }
    events.forEach((ev) => window.addEventListener(ev, load, { passive: true, once: true }));

    return () => {
      document.removeEventListener('click', onClick, true);
      stop();
    };
  }, []);

  return null;
}
