'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import LeadForm from './LeadForm';

/* Az oldal összes "/ajanlat" linkje ezt a felugró ablakot nyitja: nincs
   oldalváltás, nincs várakozás, a látogató ott marad, ahol volt.
   Mobilon alulról felcsúszó panel; a telefon Vissza gombja is bezárja.
   JavaScript nélkül a linkek simán az /ajanlat oldalra visznek. */

type Preset = { service?: string; pkg?: string; path: string };

export default function LeadModal() {
  const pathname = usePathname();
  const [preset, setPreset] = useState<Preset | null>(null);
  // Csak azon az oldalon él, ahol megnyitották
  const open = preset !== null && preset.path === pathname;
  const pushed = useRef(false);
  const opener = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || a.target === '_blank') return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== '/ajanlat') return;
      e.preventDefault();
      // Az ajánlatkérő oldalon ott az űrlap: ablak helyett odagörgetünk
      if (window.location.pathname === '/ajanlat') {
        document.querySelector('[data-lead-form]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      opener.current = a;
      setPreset({
        service: url.searchParams.get('szolgaltatas') ?? undefined,
        pkg: url.searchParams.get('csomag') ?? undefined,
        path: window.location.pathname,
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Sikeres küldés után: az űrlap a köszönőoldalra cseréli az ablak
  // előzmény-bejegyzését, ezért itt nem lépünk vissza
  const done = useCallback(() => {
    pushed.current = false;
    opener.current = null;
    setPreset(null);
  }, []);

  const close = useCallback(() => {
    if (pushed.current) {
      pushed.current = false;
      window.history.back(); // a popstate zárja be
    } else {
      setPreset(null);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    // Saját előzmény-bejegyzés: a telefon Vissza gombja az ablakot zárja
    if (!pushed.current) {
      window.history.pushState({ ncLead: 1 }, '');
      pushed.current = true;
    }
    const onPop = () => {
      pushed.current = false;
      setPreset(null);
    };
    window.addEventListener('popstate', onPop);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      // Fókuszcsapda: a Tab az ablakon belül körbejár
      const items = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    window.dispatchEvent(new Event('nc:ui'));

    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      opener.current?.focus({ preventScroll: true });
      window.dispatchEvent(new Event('nc:ui'));
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-end sm:items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Ingyenes ajánlatkérés"
    >
      <div className="lead-backdrop absolute inset-0 bg-[#0d0f2b]/60" onClick={close} aria-hidden />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="lead-sheet relative w-full sm:max-w-[480px] max-h-[92dvh] overflow-y-auto overscroll-contain outline-none bg-white rounded-t-[18px] sm:rounded-[12px] shadow-[0_30px_80px_-20px_rgba(10,8,45,0.6)]"
      >
        <span className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[color:var(--hairline-strong)] z-10" aria-hidden />
        <LeadForm
          placement="felugró ablak"
          initialService={preset.service}
          initialPackage={preset.pkg}
          navigate="replace"
          scrollOnStep={false}
          onClose={close}
          onSuccess={done}
          className="!rounded-none !border-0 !shadow-none pt-7 sm:pt-7 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:pb-7"
        />
      </div>
    </div>
  );
}
