import { Mail, Phone } from 'lucide-react';
import Reveal from './Reveal';
import LeadForm from '@/components/lead/LeadForm';

export default function FinalCta() {
  return (
    <section id="kapcsolat" className="scroll-mt-20 py-20 md:py-28 bg-[color:var(--navy)] relative overflow-hidden">
      {/* Finom kék fény a sötét sávban */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 0%, rgba(99,102,241,0.35), transparent 60%)' }}
        aria-hidden
      />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-start">
          {/* Bal: üzenet */}
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-white/80 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5b8bff]" aria-hidden />
              Kapcsolat
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-semibold text-white leading-[1.05] mb-5">
              Van egy ötleted?
              <br />
              Építsük meg.
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-[27rem] mb-9">
              Három gyors lépés, és 24 órán belül jelentkezünk. Ha most írsz, akár pár héten belül élesben lehet az
              új oldalad.
            </p>

            {/* Mi történik, miután írsz? */}
            <div className="space-y-4 mb-10">
              {[
                { n: '1', text: '24 órán belül válaszolunk' },
                { n: '2', text: 'Díjmentes konzultáció: átbeszéljük, mire van szükséged' },
                { n: '3', text: 'Fix árajánlatot kapsz. A döntés a tiéd.' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-3.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/25 text-[13px] font-semibold text-white shrink-0">
                    {s.n}
                  </span>
                  <span className="text-[15px] text-white/85">{s.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href="tel:+36302697632"
                className="flex items-center gap-3.5 text-white/85 hover:text-white transition-colors group w-fit"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 group-hover:border-white/30 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-[15px] font-semibold">06 30 269 7632</span>
              </a>
              <a
                href="mailto:hello@nexuscode.hu"
                className="flex items-center gap-3.5 text-white/70 hover:text-white transition-colors group w-fit"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 group-hover:border-white/30 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-[15px]">hello@nexuscode.hu</span>
              </a>
              <p className="text-sm text-white/40 pl-[54px]">Minden nap, 8–22 óráig.</p>
            </div>
          </Reveal>

          {/* Jobb: az ajánlatkérő */}
          <Reveal delay={0.1}>
            <LeadForm placement="főoldal alja" heading="Kérd az ajánlatod most" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
