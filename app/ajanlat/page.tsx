import dynamic from 'next/dynamic';
import { Clock, PenLine, ShieldCheck, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/lead/LeadForm';
import { RatingChip } from '@/components/GoogleProof';

// Az űrlap alatti bizonyítékok késleltetve töltődnek
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { loading: () => null });
const Works = dynamic(() => import('@/components/home/Works'), { loading: () => null });

const steps = [
  { n: '1', title: 'Elolvassuk, amit írtál', text: 'Nem sablonválasz megy: átnézzük, mire van szükséged.' },
  { n: '2', title: '24 órán belül jelentkezünk', text: 'Emailben vagy telefonon, ahogy neked kényelmesebb.' },
  { n: '3', title: 'Fix áras ajánlatot kapsz', text: 'Írásban, határidővel. Ha nem tetszik, nincs harag.' },
];

export default function AjanlatPage() {
  return (
    <div className="bg-white">
      <Header current="Ajánlat" />

      <PageHero
        label="Ingyenes ajánlatkérés"
        title="Mondd el, mit szeretnél."
        accent="A többi a mi dolgunk."
        lead="3 gyors lépés, 1 perc az egész. 24 órán belül jelentkezünk, és fix áras ajánlatot kapsz. Ingyenes, és semmire nem kötelez."
      >
        <div className="flex flex-col items-center gap-5 mt-6">
          <RatingChip />
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {[
              { Icon: Zap, text: 'Válasz 24 órán belül' },
              { Icon: ShieldCheck, text: 'Fix ár, írásban' },
              { Icon: Clock, text: 'Minden nap 8–22-ig' },
            ].map((t) => (
              <span key={t.text} className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80">
                <t.Icon size={15} className="text-[#b3a6ff]" />
                {t.text}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <main className="relative max-w-[1100px] mx-auto px-5 sm:px-8 pb-16 md:pb-20 -mt-10 md:-mt-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* Az űrlap */}
          <LeadForm
            placement="ajánlatkérő oldal"
            readUrl
            className="relative z-10 sm:!p-9 !shadow-[0_30px_70px_-30px_rgba(24,26,61,0.45)]"
          />

          {/* Oldalsáv: mi történik ezután */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="card p-6">
              <h2 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-5">Mi történik, miután elküldted?</h2>
              <ol className="space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--primary-dim)] text-[color:var(--primary)] text-[13.5px] font-bold shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-[color:var(--heading)]">{s.title}</div>
                      <p className="text-[13px] text-[color:var(--muted)] leading-relaxed mt-0.5">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-6">
              <h2 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-4">Inkább beszélnél velünk?</h2>
              <p className="text-[13.5px] text-[color:var(--muted)] leading-relaxed mb-4">
                Hívj bátran, vagy írj emailt, minden nap 8 és 22 óra között elérsz minket.
              </p>
              <a
                href="tel:+36302697632"
                data-track="ajánlatkérő oldal"
                className="block text-[15px] font-semibold text-[color:var(--primary)] hover:underline underline-offset-4"
              >
                06 30 269 7632
              </a>
              <a
                href="mailto:hello@nexuscode.hu"
                data-track="ajánlatkérő oldal"
                className="block text-[15px] font-semibold text-[color:var(--primary)] hover:underline underline-offset-4 mt-1"
              >
                hello@nexuscode.hu
              </a>
            </div>

            <div className="rounded-lg border border-[color:var(--hairline)] bg-[color:var(--section)] p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <PenLine size={16} className="text-[color:var(--primary)]" />
                <span className="text-[14px] font-semibold text-[color:var(--heading)]">Írásos garanciák</span>
              </div>
              <p className="text-[13px] text-[color:var(--muted)] leading-relaxed">
                Fix ár, fix határidő, jóváhagyás nélkül nincs fejlesztés, és átadás után sem tűnünk el. Mind a négy pont
                az aláírt ajánlat része.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Bizonyítékok a döntéshez */}
      <Testimonials />
      <Works />

      <Footer />
    </div>
  );
}
