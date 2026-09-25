'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Phone } from 'lucide-react';

/* Mobilon alul mindig kéznél: hívás és ajánlatkérés. Elbújik, amíg egy
   ajánlatkérő űrlap látszik a képernyőn, vagy nyitva a süti-sáv. */

export default function StickyCta() {
  const pathname = usePathname();
  const off = pathname.startsWith('/ajanlat') || pathname.startsWith('/koszonjuk');
  // A webáruház-oldalon az űrlap már a webáruházzal indul
  const leadHref = pathname.startsWith('/webaruhaz') ? '/ajanlat?szolgaltatas=webaruhaz' : '/ajanlat';
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (off) return;
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      const formInView = Array.from(document.querySelectorAll('[data-lead-form]')).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < vh - 60 && r.bottom > 90;
      });
      const bannerOpen = document.documentElement.hasAttribute('data-cookie-banner');
      setShow(window.scrollY > 480 && !formInView && !bannerOpen);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('nc:ui', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('nc:ui', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [off]);

  if (off) return null;

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out ${
        show ? 'translate-y-0' : 'translate-y-[110%]'
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2.5 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white border-t border-[color:var(--hairline)] shadow-[0_-10px_28px_-14px_rgba(24,26,61,0.35)]">
        <a
          href="tel:+36302697632"
          data-track="alsó sáv"
          tabIndex={show ? 0 : -1}
          className="btn-secondary flex-1 !px-3 !py-3"
        >
          <Phone size={17} className="text-[color:var(--primary)]" />
          Hívás
        </a>
        <a href={leadHref} tabIndex={show ? 0 : -1} className="btn-primary flex-[1.7] !px-3 !py-3">
          Ingyenes ajánlat
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
