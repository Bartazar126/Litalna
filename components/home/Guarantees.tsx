import { Zap, Clock, Rocket, ShieldCheck } from 'lucide-react';
import FlowWaves from './FlowWaves';
import Reveal from './Reveal';

/* Vállalásaink: négy számonkérhető pont, szerényen és tisztán. */

const guarantees = [
  {
    n: '01',
    title: 'Fix ár, írásban',
    text: 'Az ajánlatban rögzített ár a végső ár. Nincs menet közbeni „ja, ez még pluszba kerül”.',
  },
  {
    n: '02',
    title: 'Fix határidő',
    text: 'Előre megmondjuk, mikorra készül el, és tartjuk. A legtöbb oldal 1–2 hét alatt élesben van.',
  },
  {
    n: '03',
    title: 'Jóváhagyás nélkül nincs fejlesztés',
    text: 'A dizájnt addig igazítjuk, amíg rábólintasz. Csak utána írunk kódot, így nem érhet meglepetés.',
  },
  {
    n: '04',
    title: 'Átadás után sem tűnünk el',
    text: 'Hibajavítás, kérdések, segítség: a projekt után is, minden nap 8–22 óra között.',
  },
];

const trust = [
  { Icon: Zap, text: 'Válasz órákon belül' },
  { Icon: Clock, text: 'Minden nap 8–22-ig' },
  { Icon: Rocket, text: 'Indulás 24–48 órán belül' },
  { Icon: ShieldCheck, text: 'Átadás után is ott vagyunk' },
];

export default function Guarantees() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <FlowWaves />
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="side-title">
              <span>
                Ezt írásban is <span className="grad-word">vállaljuk.</span>
              </span>
            </h2>
            <p className="text-[14.5px] text-[color:var(--muted)] max-w-[26rem] leading-relaxed md:text-right">
              Nem marketingszöveg: mind a négy pont az aláírt ajánlatunk része,
              számonkérheted őket.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {guarantees.map((g, i) => (
            <Reveal key={g.n} delay={(i % 2) * 0.08}>
              <div className="card p-6 sm:p-7 h-full flex gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(79,70,229,0.3)]">
                <span className="font-display text-[26px] font-bold text-[color:var(--primary)]/35 leading-none shrink-0">
                  {g.n}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[color:var(--heading)] mb-1.5">{g.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[color:var(--muted)]">{g.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bizalmi sor */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 pt-10 mt-12 border-t border-[color:var(--hairline)]">
            {trust.map((t) => (
              <span key={t.text} className="inline-flex items-center gap-2.5 text-[14px] font-medium text-[color:var(--muted)]">
                <t.Icon size={16} className="text-[color:var(--primary)]" />
                {t.text}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
