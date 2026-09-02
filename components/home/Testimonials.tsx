'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

/* Google-értékelések: valódi vélemények a Nexuscode Google-profiljáról.
   5,0 / 7 értékelés. Forrás: https://share.google/FJuGUg2AxhDGYi0wg */

const GOOGLE_URL = 'https://share.google/FJuGUg2AxhDGYi0wg';

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

/* A Google színes "G" logója */
function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Star({
  className,
  size = 26,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbc05" className={className} style={style} aria-hidden>
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
    </svg>
  );
}

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
    <section className="py-16 md:py-24 bg-[color:var(--section)] border-y border-[color:var(--hairline)] overflow-hidden">
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
            5,0
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
              7 értékelés alapján, mind az öt csillagos
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
        <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-3">
          <GoogleG size={16} />
          Összes vélemény a Google-on
          <ExternalLink size={14} className="opacity-60" />
        </a>
      </div>
    </section>
  );
}
