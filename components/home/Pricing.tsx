import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';

const plans = [
  {
    name: 'Alap',
    price: '80 000 Ft-tól',
    ideal: 'Landing page, bemutatkozó oldal',
    features: ['1–5 aloldal', 'Egyedi, reszponzív design', 'SEO-alapok', 'Analitika bekötve', '1 hét átfutás'],
    highlighted: false,
  },
  {
    name: 'Prémium',
    price: '149 990 Ft-tól',
    ideal: 'Vállalati weboldal, portfólió',
    features: ['5–15 aloldal', 'Komplex, egyedi design', 'Teljes SEO-csomag', 'Blog + admin felület', '1–2 hét átfutás'],
    highlighted: true,
  },
  {
    name: 'Webshop',
    price: '424 990 Ft-tól',
    ideal: 'Online értékesítés',
    features: ['Online fizetés (Stripe/Barion)', 'Készlet- és rendeléskezelés', 'Kuponok, értékelések', 'Email-automatizálás', '2–3 hét átfutás'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="arak" className="scroll-mt-20 py-20 md:py-28 bg-[color:var(--section)] border-y border-[color:var(--hairline)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <h2 className="section-title">Fix árak, meglepetés nélkül</h2>
            <div className="section-title-bar" />
            <p className="text-center text-[color:var(--muted)] mt-4">
              Egyszeri díj, nincs havidíj. Minden csomag testreszabható.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`card p-7 sm:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.highlighted
                    ? '!border-[color:var(--accent)]/60 relative shadow-[0_20px_48px_-16px_rgba(37,99,235,0.3)]'
                    : 'hover:shadow-[0_16px_40px_-16px_rgba(13,27,54,0.2)]'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[color:var(--accent)] text-white text-[11px] font-semibold whitespace-nowrap">
                    Legnépszerűbb
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-[color:var(--foreground)] mb-1">{plan.name}</h3>
                <p className="text-xs text-[color:var(--faint)] mb-6">{plan.ideal}</p>
                <div className="font-display text-[1.9rem] font-semibold text-[color:var(--foreground)] tracking-tight mb-1">{plan.price}</div>
                <p className="text-xs text-[color:var(--faint)] mb-7">nettó, egyszeri díj</p>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[color:var(--muted)]">
                      <Check size={15} className="text-[color:var(--accent)] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/ajanlat" className={plan.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                  Ajánlatot kérek
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
