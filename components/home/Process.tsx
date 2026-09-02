import Reveal from './Reveal';

const steps = [
  { n: '01', title: 'Megismerés', text: 'Átbeszéljük, mit szeretnél. Díjmentesen.' },
  { n: '02', title: 'Tervezés', text: 'Felépítés, funkciók, fix árajánlat.' },
  { n: '03', title: 'Design', text: 'Addig igazítjuk, amíg jóvá nem hagyod.' },
  { n: '04', title: 'Fejlesztés', text: 'Menet közben is látod, hol tartunk.' },
  { n: '05', title: 'Tesztelés', text: 'Minden eszközön kipróbáljuk.' },
  { n: '06', title: 'Indítás', text: 'Élesítés, méréssel bekötve.' },
  { n: '07', title: 'Utánkövetés', text: 'Átadás után sem tűnünk el.' },
];

export default function Process() {
  return (
    <section id="folyamat" className="scroll-mt-20 py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 md:mb-16">
            <h2 className="section-title">Hogyan dolgozunk?</h2>
            <div className="section-title-bar" />
            <p className="text-center text-[color:var(--muted)] mt-4">
              Minden lépésnél tudod, hol tart a projekt, és mennyi van hátra.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Összekötő vonal (desktop) */}
          <div className="hidden lg:block absolute top-[22px] left-[7%] right-[7%] h-px bg-[color:var(--hairline-strong)]" aria-hidden />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border-2 border-[color:var(--primary)]/40 bg-white text-[13px] font-semibold text-[color:var(--primary)] mb-3.5">
                    {step.n}
                  </span>
                  <span className="text-sm font-semibold text-[color:var(--heading)] mb-1.5">{step.title}</span>
                  <span className="text-[12px] leading-snug text-[color:var(--muted)] max-w-[140px]">{step.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
