import type { ReactNode } from 'react';

/* Kompakt aloldal-hero: a főoldali indigó gradiens és hullámos átmenet
   kicsiben, hogy minden aloldal ugyanabba a világba tartozzon. */

export default function PageHero({
  label,
  title,
  accent,
  lead,
  children,
}: {
  label?: string;
  title: string;
  accent?: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-[104px] pb-[110px] md:pb-[130px]" style={{ background: 'var(--hero-grad)' }}>
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
        {label && (
          <p className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.4em] uppercase text-white/50 mb-4">
            {label}
          </p>
        )}
        <h1 className="font-display font-semibold text-white leading-[1.06] text-[clamp(1.9rem,4.6vw,3rem)]">
          {title} {accent && <span className="text-[#c7bfff]">{accent}</span>}
        </h1>
        {lead && (
          <p className="text-[15px] sm:text-[16px] text-white/70 max-w-[36rem] mx-auto mt-4 leading-relaxed">
            {lead}
          </p>
        )}
        {children}
      </div>

      {/* hullámos átmenet a világos tartalomba */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[70px] md:h-[100px] pointer-events-none"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="rgba(255,255,255,0.22)"
          d="M0,72 C110,18 230,116 375,74 C515,34 635,126 795,84 C950,44 1075,128 1235,74 C1330,42 1395,84 1440,52 L1440,160 L0,160 Z"
        />
        <path
          fill="rgba(255,255,255,0.35)"
          d="M0,96 C130,48 265,138 425,96 C575,58 705,142 865,102 C1020,64 1150,138 1305,94 C1365,77 1415,98 1440,86 L1440,160 L0,160 Z"
        />
        <path
          fill="#ffffff"
          d="M0,124 C140,82 285,158 445,122 C600,88 730,160 890,126 C1045,94 1170,154 1320,118 C1375,105 1420,122 1440,112 L1440,160 L0,160 Z"
        />
      </svg>
    </section>
  );
}
