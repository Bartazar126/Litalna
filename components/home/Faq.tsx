'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

/* Gyakori kérdések: a látogató kimondatlan kifogásaira válaszolunk. */

const faqs = [
  {
    q: 'Mennyibe kerül egy weboldal?',
    a: 'Bemutatkozó oldal 80 000 Ft-tól, vállalati weboldal 149 990 Ft-tól, webáruház 424 990 Ft-tól indul. A pontos árat az igényeid alapján adjuk meg: írd meg, mire van szükséged, és 24 órán belül fix árajánlatot küldünk. Amit az ajánlatban látsz, az a végső ár.',
  },
  {
    q: 'Mennyi idő alatt készül el?',
    a: 'Egy weboldal jellemzően 1–2 hét, egy webáruház 2–3 hét alatt készül el. A határidőt az ajánlatban rögzítjük, és tartjuk. Az első vázlatokat már 24–48 órán belül látod.',
  },
  {
    q: 'Mi van, ha nem tetszik, amit csináltok?',
    a: 'Először dizájntervet készítünk, és addig igazítjuk, amíg azt nem mondod: ez az. Fejleszteni csak az általad jóváhagyott terv alapján kezdünk, így nem érhet meglepetés a végén.',
  },
  {
    q: 'Nem értek a technikához. Baj?',
    a: 'Egyáltalán nem. Mindent érthetően, magyarul mondunk el, szakzsargon nélkül. Az átadáskor megmutatjuk, hogyan tudod te magad frissíteni a tartalmat, és ha elakadsz, hívhatsz minket.',
  },
  {
    q: 'Van havidíj vagy rejtett költség?',
    a: 'Nálunk nincs kötelező havidíj: egyszeri díjat fizetsz az elkészült munkáért. Ami éves szinten felmerül, az a domain és a tárhely (nagyságrendileg pár ezer forint havonta), ennek intézésében is segítünk, és előre megmondjuk a pontos összegét.',
  },
  {
    q: 'Mi történik az átadás után?',
    a: 'Nem tűnünk el. Ha hibát találsz, javítjuk. Ha kérdésed van, válaszolunk, minden nap 8 és 22 óra között. Ha később bővítenéd az oldalt, ismerjük a kódot, gyorsan tudunk haladni.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] sm:text-base font-semibold text-[color:var(--heading)]">{q}</span>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--primary-dim)] shrink-0 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <Plus size={16} className="text-[color:var(--primary)]" />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '400px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-[color:var(--muted)]">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="gyik" className="scroll-mt-20 py-16 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="section-title">Kérdések, amiket mindenki feltesz</h2>
          <div className="section-title-bar" />
          <p className="text-center text-[color:var(--muted)] mt-4">
            Ha a tiéd nincs köztük, írd meg nyugodtan, órákon belül válaszolunk.
          </p>
        </Reveal>

        <div className="max-w-[760px] mx-auto mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
