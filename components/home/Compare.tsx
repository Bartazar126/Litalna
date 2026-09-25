import Image from 'next/image';
import { ArrowRight, Check, X } from 'lucide-react';
import Reveal from './Reveal';

/* Összehasonlítás: amit a legtöbben a weboldal-készítésről
   megtapasztalnak, és amit nálunk kapnak helyette. Csak olyat
   állítunk, amit az ajánlatban is vállalunk. */

const rows = [
  { topic: 'Mikor lesz kész?', them: 'Hónapokig húzódik', us: '1–2 hét alatt élesben van' },
  { topic: 'Mennyibe kerül?', them: 'Menet közben jönnek a pluszok', us: 'Fix ár, írásban rögzítve' },
  { topic: 'Havidíj', them: 'Kötelező havidíj, évekig', us: 'Nincs kötelező havidíj' },
  { topic: 'Elérhetőség', them: 'Napokig nem válaszolnak', us: 'Minden nap 8 és 22 óra között' },
  { topic: 'Érthetőség', them: 'Szakzsargon, amit nem értesz', us: 'Érthetően, magyarul' },
  { topic: 'Eredmény', them: 'Szép, de nem hoz ügyfelet', us: 'Ajánlatkérésre hangolva, méréssel' },
];

export default function Compare() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="relative max-w-[1060px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <h2 className="section-title">Miben vagyunk mások?</h2>
            <div className="section-title-bar" />
            <p className="text-center text-[color:var(--muted)] mt-4 max-w-[36rem] mx-auto">
              Amit a legtöbben megtapasztalnak, amikor weboldalt csináltatnak, és amit nálunk kapsz helyette.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card overflow-hidden">
            {/* Fejléc (asztali nézet) */}
            <div className="hidden md:grid grid-cols-[0.9fr_1.1fr_1.2fr] text-[13.5px] font-semibold">
              <div className="px-6 py-4" />
              <div className="px-6 py-4 text-[color:var(--muted)]">Sok ügynökségnél</div>
              <div className="px-6 py-4 flex items-center gap-2.5 text-white" style={{ background: 'var(--brand-gradient)' }}>
                <span className="relative block w-6 h-6">
                  <Image src="/logo-n.png" alt="" fill sizes="24px" className="object-contain" />
                </span>
                A Nexuscode-nál
              </div>
            </div>

            {rows.map((r) => (
              <div
                key={r.topic}
                className="grid md:grid-cols-[0.9fr_1.1fr_1.2fr] border-t first:border-t-0 md:first:border-t border-[color:var(--hairline)]"
              >
                <div className="px-5 md:px-6 pt-4 md:py-4 text-[14px] font-semibold text-[color:var(--heading)]">
                  {r.topic}
                </div>
                <div className="px-5 md:px-6 pt-2 md:py-4 flex items-start md:items-center gap-2.5 text-[14.5px] text-[color:var(--muted)]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f3f4f7] shrink-0 mt-px md:mt-0">
                    <X size={12} className="text-[#a3a9b8]" strokeWidth={2.6} />
                  </span>
                  {r.them}
                </div>
                <div className="px-5 md:px-6 pt-2 pb-4 md:py-4 flex items-start md:items-center gap-2.5 text-[14.5px] font-semibold text-[color:var(--heading)] md:bg-[#f6f5ff]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[color:var(--primary)] shrink-0 mt-px md:mt-0">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  {r.us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-3 mt-10">
            <a href="/ajanlat" className="btn-primary !px-8 !py-3.5">
              Kérj ingyenes ajánlatot
              <ArrowRight size={17} />
            </a>
            <p className="text-[13px] text-[color:var(--muted)]">1 perc az egész, és semmire nem kötelez.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
