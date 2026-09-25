'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GOOGLE_URL, GoogleG, RATING, REVIEW_COUNT, Star } from '@/components/GoogleProof';

/* Google-értékelések: valódi vélemények a Nexuscode Google-profiljáról. */

const reviews = [
  {
    name: 'Vanda Katona',
    initials: 'V',
    tone: 'bg-[#ea4335]',
    date: '6 hónapja',
    text: 'Végre egy fejlesztő cég, ahol nem kell heteket várni egy válaszra! Nagyon jó a vibe, a kommunikáció pörög, a fejlesztés pedig villámgyors volt. Nem akartak rám sózni felesleges drága funkciókat, pont azt kaptam, amire szükségem volt, nagyon baráti áron. 5 csillag, srácok, csak így tovább! 💪',
  },
  {
    name: 'monthyx',
    initials: 'M',
    tone: 'bg-[#673ab7]',
    date: '6 hónapja',
    text: 'Ritkán találkozni ennyire felkészült és naprakész fejlesztő csapattal. A Nexuscode-nál pontosan tudták, mire van szükségem, és már az első egyeztetéseknél érezhető volt a profizmus. Az elkészült weboldal gyors és letisztult.',
  },
  {
    name: 'Istvan Balogh',
    initials: 'I',
    tone: 'bg-[#34a853]',
    date: '6 hónapja',
    text: 'Azért kerestem meg őket, mert szükségem volt egy weboldalra, és ezt professzionálisan és gördülékenyen végezték el. A végeredménnyel teljes mértékben elégedett vagyok, csak ajánlani tudom őket.',
  },
  {
    name: 'Richárd Péter',
    initials: 'R',
    tone: 'bg-[#4285f4]',
    date: '6 hónapja',
    text: 'A teljes folyamat gördülékenyen ment, minden lépésnél segítőkészek és rugalmasak voltak. Gyorsan és profin dolgoztak.',
  },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="w-[320px] sm:w-[380px] shrink-0 card p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className={`flex items-center justify-center w-10 h-10 rounded-full text-white text-[15px] font-semibold ${r.tone}`}>
          {r.initials}
        </span>
        <div className="flex-1">
          <div className="text-[14px] font-semibold text-[color:var(--heading)]">{r.name}</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="flex gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} />
              ))}
            </span>
            <span className="text-[11px] text-[color:var(--faint)]">{r.date}</span>
          </div>
        </div>
        <GoogleG size={18} />
      </div>
      <blockquote className="text-[13.5px] leading-relaxed text-[color:var(--foreground)]">
        „{r.text}”
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const row = [...reviews, ...reviews];

  return (
    <section id="velemenyek" className="scroll-mt-20 py-16 md:py-24 bg-[color:var(--section)] border-y border-[color:var(--hairline)] overflow-hidden">
      {/* Összesítő */}
      <div ref={ref} className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center mb-12 md:mb-14">
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[color:var(--hairline)] shadow-[0_2px_10px_-4px_rgba(37,33,90,0.2)] mb-7"
          style={{ opacity: shown ? 1 : 0, transition: 'opacity 0.5s ease' }}
        >
          <GoogleG size={20} />
          <span className="text-[14px] font-semibold text-[color:var(--heading)]">Google-értékelések</span>
        </div>

        <div className="flex items-center justify-center gap-5 mb-3">
          <span
            className="font-display text-[64px] sm:text-[80px] leading-none font-bold text-[color:var(--heading)]"
            style={{ opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(12px)', transition: 'all 0.6s ease' }}
          >
            {RATING}
          </span>
          <div className="text-left">
            <div className="flex gap-1 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={shown ? 'star-pop' : 'opacity-0'}
                  size={28}
                  style={shown ? { animationDelay: `${0.15 + i * 0.13}s` } : undefined}
                />
              ))}
            </div>
            <div className="text-[14px] text-[color:var(--muted)]">
              {REVIEW_COUNT} értékelés alapján, mind az öt csillagos
            </div>
          </div>
        </div>

        <p className="text-[color:var(--muted)] max-w-[34rem] mx-auto">
          Nem mi mondjuk magunkról. Ők mondják rólunk, név szerint, a Google-on.
        </p>
      </div>

      {/* Vélemény-futószalag */}
      <div
        className="relative mb-10"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 7%, black 93%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 7%, black 93%, transparent)',
        }}
      >
        <div className="marquee-track gap-5 pr-5 items-stretch">
          {row.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* CTA-k */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-5">
        <a href="/ajanlat" className="btn-primary !py-3">
          Én is ilyen oldalt szeretnék
          <ArrowRight size={16} />
        </a>
        <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-3">
          <GoogleG size={16} />
          Összes vélemény a Google-on
          <ExternalLink size={14} className="opacity-60" />
        </a>
      </div>
    </section>
  );
}
