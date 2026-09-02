import { ArrowRight } from 'lucide-react';
import HeroPlexus from './HeroPlexus';
import HeroCube from './HeroCube';


export default function Hero() {
  return (
    <section className="relative pt-16 pb-12 md:pb-20 overflow-hidden" style={{ background: 'var(--hero-grad)' }}>
      <HeroPlexus />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center py-16 md:py-24 min-h-[560px]">
          {/* Bal: üzenet */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="rise text-[11px] sm:text-[12px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-5">
              Nexuscode <span className="text-[#b3a6ff]">·</span> Digital Technology Studio
            </p>
            {/* Az LCP-elem: nem animáljuk, hogy azonnal fessen */}
            <h1 className="font-display text-[2.4rem] leading-[1.08] sm:text-[3.2rem] lg:text-[3.6rem] font-semibold text-white mb-5">
              Az ügyfeleid már online vannak.
              <br />
              <span className="text-[#c7bfff]">Legyél ott te is.</span>
            </h1>
            <p className="rise rise-1 text-[19px] sm:text-[22px] text-white/90 font-light leading-snug max-w-[26ch] mx-auto lg:mx-0 mb-4">
              Weboldal, szoftver és marketing, egy kézben.
            </p>

            <p className="rise rise-1 text-[15px] sm:text-base text-white/70 max-w-[30rem] mx-auto lg:mx-0 mb-9 leading-relaxed">
              Ma már minden vállalkozásnak szüksége van jó weboldalra. Mi
              megtervezzük, elkészítjük, és látogatókat is szerzünk rá.
            </p>

            <div className="rise rise-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href="/ajanlat" className="btn-primary !px-8 !py-3.5">
                Kérj ajánlatot
                <ArrowRight size={17} />
              </a>
              <a href="#munkaink" className="btn-outline-white !px-8 !py-3.5">
                Munkáink
              </a>
            </div>

            <div className="rise rise-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-sm text-white/75">
              {['Díjmentes konzultáció', 'Fix ár, fix határidő', '1–2 hét átfutás'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                    <path
                      d="M2.5 7.5 L5.5 10.5 L11.5 3.5"
                      fill="none"
                      stroke="#b3a6ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* Stúdió-szignó */}
            <p className="rise rise-4 flex items-center justify-center lg:justify-start gap-3 mt-9">
              <span className="hidden sm:block w-7 h-[2px] rounded-full" style={{ background: 'var(--brand-gradient)' }} aria-hidden />
              <span className="font-display text-[13.5px] sm:text-[14.5px] text-white/55 tracking-wide">
                Nem csak weboldalakat építünk. A jövőt építjük.
              </span>
            </p>
          </div>

          {/* Jobb: 3D kocka */}
          <div className="rise rise-2 relative flex justify-center lg:justify-end lg:pr-6">
            <HeroCube />
          </div>
        </div>
      </div>

      {/* Hullámos átmenet a következő szekcióba */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[90px] md:h-[150px] pointer-events-none"
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
