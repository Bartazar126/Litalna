import HeroPlexus from './HeroPlexus';
import HeroCube from './HeroCube';
import LeadForm from '@/components/lead/LeadForm';
import { RatingChip } from '@/components/GoogleProof';

/* Konverziós hero: bal oldalt az ajánlat (mit, mennyiért, mennyi idő
   alatt), jobb oldalt rögtön az ajánlatkérő. A márka-kocka a kártya
   mögül bukkan elő. */

const perks = ['Díjmentes konzultáció', 'Fix ár, írásban', 'Nincs kötelező havidíj'];

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pb-36 overflow-hidden" style={{ background: 'var(--hero-grad)' }}>
      <HeroPlexus />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_440px] gap-7 sm:gap-9 lg:gap-14 items-center pt-7 md:pt-14 lg:pt-20">
          {/* Bal: az ajánlat */}
          <div className="relative z-10 text-center lg:text-left">
            <RatingChip href="#velemenyek" className="rise mb-5 sm:mb-6" />

            {/* Az LCP-elem: nem animáljuk, hogy azonnal fessen.
                A címsor a fő célkulcsszót is tartalmazza ("weboldal"):
                a title után ez a legerősebb jelzés a Google felé. */}
            <h1 className="font-display text-[2.15rem] leading-[1.08] sm:text-[3.1rem] lg:text-[3.45rem] font-semibold text-white text-balance mb-4 sm:mb-5">
              Weboldal, ami <br className="hidden sm:block" />
              ügyfeleket hoz.
              <span className="block text-[#c7bfff]">
                Fix áron, <span className="whitespace-nowrap">1–2 hét alatt.</span>
              </span>
            </h1>

            <p className="rise rise-1 text-[16px] sm:text-[18px] text-white/80 leading-relaxed max-w-[31rem] mx-auto lg:mx-0 mb-4 sm:mb-5">
              Megtervezzük, elkészítjük és elindítjuk. Te csak jóváhagysz, minden mást mi intézünk.
            </p>

            <p className="rise rise-2 text-[15.5px] sm:text-[17px] text-white sm:mb-7">
              Céges weboldal már <strong className="font-semibold text-[#ffd66b]">80 000 Ft-tól</strong>, egyszeri
              díjjal.
            </p>

            <ul className="rise rise-3 hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-sm text-white/80">
              {perks.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
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
                </li>
              ))}
            </ul>

            {/* Stúdió-szignó */}
            <p className="rise rise-4 hidden lg:flex items-center gap-3 mt-10">
              <span className="w-7 h-[2px] rounded-full" style={{ background: 'var(--brand-gradient)' }} aria-hidden />
              <span className="font-display text-[14px] text-white/55 tracking-wide">
                Nem csak weboldalakat építünk. A jövőt építjük.
              </span>
            </p>
          </div>

          {/* Jobb: ajánlatkérő, mögötte a márka-kocka */}
          <div className="relative rise rise-2 lg:mt-10">
            <div className="hidden lg:block absolute -top-[118px] -left-[150px] scale-[0.6] origin-top-left pointer-events-none" aria-hidden>
              <HeroCube />
            </div>
            <LeadForm
              placement="főoldal teteje"
              className="relative z-10 !shadow-[0_34px_80px_-24px_rgba(10,8,45,0.65)] !border-white/60"
            />
          </div>
        </div>
      </div>

      {/* Hullámos átmenet a következő szekcióba */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[70px] md:h-[120px] pointer-events-none"
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
