import { ArrowRight, Check } from 'lucide-react';
import FlowWaves from './FlowWaves';
import Reveal from './Reveal';

/* Váltakozó eszköz-sorok: telefon, tablet és laptop, valódi tartalommal,
   hömpölygő szalag-háttérrel. */

/* ---------- Telefon, valódi mobilnézettel ---------- */
function Phone() {
  return (
    <div className="relative mx-auto w-fit rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
      <div className="float-slow w-[220px] sm:w-[250px] rounded-[2.6rem] bg-[#15162e] p-[10px] shadow-[0_36px_80px_-24px_rgba(24,26,61,0.55)]">
        <div className="relative rounded-[2rem] overflow-hidden bg-white">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#15162e] z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/refs/kickoff-mobile.png"
            alt="kickoffcamps.hu mobilnézete"
            loading="lazy"
            className="phone-pan w-full h-[440px] sm:h-[500px] object-cover"
          />
        </div>
      </div>
      {/* talp-árnyék */}
      <div
        className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[200px] h-[26px] rounded-[50%]"
        style={{ background: 'radial-gradient(ellipse, rgba(24,26,61,0.25), transparent 70%)', filter: 'blur(6px)' }}
        aria-hidden
      />
    </div>
  );
}

/* ---------- Tablet, foglalási felülettel ---------- */
const week = [
  { d: 'H', n: '16' },
  { d: 'K', n: '17', active: true },
  { d: 'Sze', n: '18' },
  { d: 'Cs', n: '19' },
  { d: 'P', n: '20' },
];

function Tablet() {
  return (
    <div className="relative mx-auto w-fit rotate-[3deg] hover:rotate-0 transition-transform duration-500">
      <div className="float-slow w-[330px] sm:w-[430px] rounded-[1.8rem] bg-[#15162e] p-[12px] shadow-[0_36px_80px_-24px_rgba(24,26,61,0.55)]">
        <div className="rounded-[1.3rem] overflow-hidden bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-semibold text-[color:var(--heading)]">Foglalási naptár</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Élő
            </span>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mb-4">
            {week.map((w) => (
              <div
                key={w.d}
                className={`flex flex-col items-center gap-0.5 py-2 rounded-lg ${
                  w.active ? 'bg-[color:var(--primary)] text-white' : 'bg-[#f4f5fb] text-[color:var(--muted)]'
                }`}
              >
                <span className="text-[9px] opacity-75">{w.d}</span>
                <span className="text-[12px] font-semibold">{w.n}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              { name: 'Kovács Márk', time: '10:00', fresh: true },
              { name: 'Szabó Petra', time: '11:30', fresh: false },
            ].map((b) => (
              <div key={b.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-[color:var(--hairline)]">
                <div className="flex items-center gap-2.5">
                  {b.fresh ? (
                    <span className="relative flex w-2 h-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-[#d7dbe8] shrink-0" />
                  )}
                  <span className="text-[12px] font-medium text-[color:var(--heading)]">{b.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[color:var(--muted)]">{b.time}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-medium">
                    <Check size={9} />
                    Visszaigazolva
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[color:var(--faint)] mt-3">Email és számla automatikusan kiment.</p>
        </div>
      </div>
      <div
        className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[300px] h-[28px] rounded-[50%]"
        style={{ background: 'radial-gradient(ellipse, rgba(24,26,61,0.25), transparent 70%)', filter: 'blur(6px)' }}
        aria-hidden
      />
    </div>
  );
}

/* ---------- Laptop, kampány-panellel ---------- */
function Laptop() {
  return (
    <div className="relative mx-auto w-fit float-slow">
      <div className="w-[340px] sm:w-[460px] rounded-t-[1rem] bg-[#15162e] p-[10px] pb-0 shadow-[0_36px_80px_-24px_rgba(24,26,61,0.5)]">
        <div className="rounded-t-[0.7rem] overflow-hidden bg-white p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] font-semibold text-[color:var(--heading)]">Kampány áttekintés</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Élő
            </span>
          </div>
          <svg viewBox="0 0 320 84" className="w-full h-auto mb-3" role="presentation">
            <defs>
              <linearGradient id="lapArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" x2="320" y1="42" y2="42" stroke="#eef0f6" strokeWidth="1" />
            <path d="M4,72 C40,68 62,58 92,54 C124,50 144,54 172,42 C200,30 224,32 252,22 C276,14 298,12 316,8 L316,84 L4,84 Z" fill="url(#lapArea)" />
            <path
              d="M4,72 C40,68 62,58 92,54 C124,50 144,54 172,42 C200,30 224,32 252,22 C276,14 298,12 316,8"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              className="draw-on-view"
            />
            <circle cx="316" cy="8" r="3.5" fill="#fff" stroke="#4f46e5" strokeWidth="2.5" />
          </svg>
          <div className="grid grid-cols-3 divide-x divide-[color:var(--hairline)]">
            {[
              { label: 'Kattintás', value: '+64%' },
              { label: 'Ajánlatkérés', value: '+38%' },
              { label: 'Költség / vevő', value: '−21%' },
            ].map((s) => (
              <div key={s.label} className="px-3 first:pl-0 last:pr-0 text-center first:text-left last:text-right">
                <div className="text-[10px] text-[color:var(--faint)]">{s.label}</div>
                <div className="font-display text-[17px] sm:text-[20px] font-semibold text-[color:var(--primary)]">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* laptop-talp */}
      <div className="h-[14px] w-[calc(100%+56px)] -mx-[28px] rounded-b-[1rem] rounded-t-[2px] bg-gradient-to-b from-[#2a2c52] to-[#15162e]" />
      <div
        className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-[360px] h-[26px] rounded-[50%]"
        style={{ background: 'radial-gradient(ellipse, rgba(24,26,61,0.25), transparent 70%)', filter: 'blur(6px)' }}
        aria-hidden
      />
    </div>
  );
}

/* ---------- A sorok ---------- */
const rows = [
  {
    id: 'szolgaltatasok',
    title: 'Weboldal és webáruház',
    lead: 'Modern, gyors oldalak, amik telefonon is tökéletesek, és úgy vannak felépítve, hogy a látogatóból érdeklődő legyen.',
    bullets: ['Céges weboldalak', 'Webáruházak bankkártyás fizetéssel', 'Egyedi kampányoldalak hirdetésekhez', 'Google-találatok (SEO)'],
    primary: { label: 'Ajánlatot kérek', href: '/ajanlat' },
    secondary: { label: 'Munkáink', href: '#munkaink' },
    Device: Phone,
    deviceLeft: true,
    tint: 'bg-white',
  },
  {
    id: 'szoftver',
    title: 'Céges rendszerek',
    lead: 'Táblázatok és papírmunka helyett egy felület, ami foglal, számláz és emailezik helyetted.',
    bullets: ['Online időpontfoglalás', 'Ügyfélnyilvántartás', 'Automatikus emailek és számlák', 'Meglévő rendszereid összekötése'],
    primary: { label: 'Beszéljük át', href: '/ajanlat' },
    secondary: { label: 'Gyakori kérdések', href: '#gyik' },
    Device: Tablet,
    deviceLeft: false,
    tint: 'bg-[color:var(--section)]',
  },
  {
    id: 'marketing',
    title: 'Marketing és hirdetések',
    lead: 'A jó oldal önmagában kevés: hirdetünk, mérünk, és forintra megmutatjuk, mi térül meg.',
    bullets: ['Google hirdetések', 'Facebook / Instagram hirdetések', 'Konverziómérés (GA4)', 'Kampányoldalak'],
    primary: { label: 'Kampányt indítanék', href: '/ajanlat' },
    secondary: { label: 'Árak', href: '#arak' },
    Device: Laptop,
    deviceLeft: true,
    tint: 'bg-white',
  },
];

export default function ServiceBlocks() {
  return (
    <>
      {rows.map((row, i) => (
        <section key={row.id} id={row.id} className={`relative scroll-mt-20 py-16 md:py-24 overflow-hidden ${row.tint}`}>
          <FlowWaves flip={i % 2 === 1} />
          <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
              <Reveal className={row.deviceLeft ? '' : 'lg:order-2'}>
                <row.Device />
              </Reveal>
              <Reveal delay={0.1} className={row.deviceLeft ? '' : 'lg:order-1'}>
                <h2 className="side-title mb-4">
                  <span>
                    {row.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="grad-word">{row.title.split(' ').slice(-1)[0]}</span>
                  </span>
                </h2>
                <p className="text-[15.5px] text-[color:var(--muted)] leading-relaxed max-w-[30rem] mb-7">
                  {row.lead}
                </p>
                <ul className="space-y-3 mb-9">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] text-[color:var(--foreground)]">
                      <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[color:var(--primary-dim)] shrink-0">
                        <Check size={13} className="text-[color:var(--primary)]" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href={row.primary.href} className="btn-primary">
                    {row.primary.label}
                    <ArrowRight size={16} />
                  </a>
                  <a href={row.secondary.href} className="btn-secondary">
                    {row.secondary.label}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
