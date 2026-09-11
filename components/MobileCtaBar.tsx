'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { trackPhoneClick } from '@/lib/tracking';

/* Ragadós sáv mobilon: hívás és ajánlatkérés mindig egy koppintásra.
 *
 * A hirdetésből érkező forgalom nagyobb része mobil, ott viszont a
 * fejlécben eddig csak a hamburgermenü látszott, a telefonszám nem.
 * A sáv a hero elhagyása után jelenik meg, hogy ne takarja a nyitóképet,
 * és ne ő legyen az LCP-elem.
 */
export default function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-[color:var(--hairline-strong)] shadow-[0_-8px_28px_-18px_rgba(13,27,54,0.5)]">
        <a
          href="tel:+36302697632"
          onClick={() => trackPhoneClick('mobil-sav')}
          tabIndex={show ? 0 : -1}
          className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-lg border border-[color:var(--hairline-strong)] text-[14.5px] font-semibold text-[color:var(--heading)]"
        >
          <Phone size={16} className="text-[color:var(--primary)]" />
          Hívás
        </a>
        <Link
          href="/ajanlat"
          tabIndex={show ? 0 : -1}
          className="flex items-center justify-center gap-2 flex-[1.4] py-3.5 rounded-lg bg-[color:var(--primary)] text-[14.5px] font-semibold text-white"
        >
          Ajánlatot kérek
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
