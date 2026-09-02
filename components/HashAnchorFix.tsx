'use client';

import { useEffect } from 'react';

/* A szekciók késleltetve töltődnek, ezért a böngésző natív #horgony-ugrása
   betöltéskor rossz helyre kerül (a tartalom még nem épült fel). Ez a
   komponens addig igazítja a görgetést a hash célpontjára, amíg az
   elrendezés stabilizálódik, vagy a látogató közbe nem görget. */

const HEADER_OFFSET = 76;

export default function HashAnchorFix() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = decodeURIComponent(hash.slice(1));

    let cancelled = false;
    let tries = 0;
    let stableCount = 0;
    let lastTop = -1;

    const cancel = () => {
      cancelled = true;
    };
    const opts = { passive: true, once: true } as AddEventListenerOptions;
    window.addEventListener('wheel', cancel, opts);
    window.addEventListener('touchstart', cancel, opts);
    window.addEventListener('keydown', cancel, opts);

    const tick = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
        if (Math.abs(top - lastTop) < 2) {
          stableCount++;
        } else {
          stableCount = 0;
          window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
        }
        lastTop = top;
        if (stableCount >= 3) return; // az elrendezés megállapodott
      }
      if (++tries < 30) setTimeout(tick, 200);
    };
    tick();

    return () => {
      cancelled = true;
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('keydown', cancel);
    };
  }, []);

  return null;
}
