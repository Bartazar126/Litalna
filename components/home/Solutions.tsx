'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Monitor,
  ShoppingCart,
  CalendarDays,
  Users,
  Workflow,
  Sparkles,
  Megaphone,
  LineChart,
  ArrowRight,
} from 'lucide-react';
import FlowWaves from './FlowWaves';
import Reveal from './Reveal';

/* Megoldás-kerék: nyolc szeletes torta a Nexuscode körül. A szeletek
   hoverre (és maguktól, körbejárva) kiemelkednek, középen a logó ül. */

const all = [
  { Icon: Monitor, label: 'Weboldal' },
  { Icon: ShoppingCart, label: 'Webáruház' },
  { Icon: Megaphone, label: 'Marketing' },
  { Icon: CalendarDays, label: 'Foglalás' },
  { Icon: Users, label: 'Ügyfélkezelés' },
  { Icon: Workflow, label: 'Automatizálás' },
  { Icon: Sparkles, label: 'AI-megoldások' },
  { Icon: LineChart, label: 'Analitika' },
];

/* Négy márkaárnyalat-pár (színátmenetek), ismételve: a szomszédos
   szeletek mindig elütnek, de egy családban maradnak */
const shades: [string, string][] = [
  ['#2563eb', '#5b8bff'],
  ['#4f46e5', '#7d75ff'],
  ['#7c3aed', '#a56bff'],
  ['#8b5cf6', '#b18cff'],
];

const C = 150; // középpont a 300-as viewBoxban
const R1 = 58; // belső sugár (gyűrű)
const R2 = 136; // külső sugár
const STEP = 45; // 360 / 8
const GAP = 2.2; // fok, a szeletek közti rés

function pt(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return `${(C + r * Math.cos(a)).toFixed(2)} ${(C + r * Math.sin(a)).toFixed(2)}`;
}

/* Gyűrű-szelet, réssel a szomszédok felé */
function sliceAt(i: number) {
  const d0 = i * STEP + GAP;
  const d1 = (i + 1) * STEP - GAP;
  return [
    `M ${pt(R2, d0)}`,
    `A ${R2} ${R2} 0 0 1 ${pt(R2, d1)}`,
    `L ${pt(R1, d1)}`,
    `A ${R1} ${R1} 0 0 0 ${pt(R1, d0)}`,
    'Z',
  ].join(' ');
}

function midAngle(i: number) {
  return (((i + 0.5) * STEP - 90) * Math.PI) / 180;
}

function centroidOf(i: number) {
  // a szelet közepe, az ikon-felirat helye (a konténer százalékában)
  const mid = midAngle(i);
  const r = 0.325; // a konténer-szélesség arányában
  return {
    left: `${(50 + Math.cos(mid) * r * 100).toFixed(2)}%`,
    top: `${(50 + Math.sin(mid) * r * 100).toFixed(2)}%`,
  };
}

export default function Solutions() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    if (hovered !== null) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setAuto((v) => (v + 1) % all.length), 1600);
    return () => clearInterval(t);
  }, [hovered]);

  const active = hovered ?? auto;

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <FlowWaves />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Szöveg */}
          <Reveal>
            <h2 className="side-title mb-5">
              <span>
                Digitális megoldások, <span className="grad-word">egy kézből.</span>
              </span>
            </h2>
            <p className="text-[15.5px] text-[color:var(--muted)] leading-relaxed max-w-[30rem] mb-4">
              A Nexuscode nem csak weboldalt készít: a vállalkozásod köré teljes
              digitális rendszert építünk. Növeljük a hatékonyságot, ügyfeleket
              hozunk, problémákat oldunk meg.
            </p>
            <p className="text-[14.5px] text-[color:var(--muted)] leading-relaxed max-w-[30rem] mb-8">
              Minden terület egy rendszer része: attól, hogy hogyan találnak
              meg, odáig, hogy hogyan dolgozol.
            </p>
            <a href="/ajanlat" className="btn-primary">
              Ismerd meg a megoldásainkat
              <ArrowRight size={16} />
            </a>
          </Reveal>

          {/* A kerék */}
          <Reveal delay={0.1}>
            <div className="float-slow relative mx-auto w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] lg:w-[470px] lg:h-[470px]">
              {/* halvány glória a kerék mögé */}
              <div
                className="absolute inset-[-9%] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.16), transparent 65%)' }}
                aria-hidden
              />

              {/* Nexuscode-motívum: szaggatott pálya, keringő fénypöttyel */}
              <div className="absolute inset-[-5.5%] rounded-full border border-dashed border-[color:var(--primary)]/25" aria-hidden />
              <div className="orbit-ring absolute inset-[-5.5%]" style={{ ['--orbit-t' as never]: '26s' }} aria-hidden>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7c3aed] shadow-[0_0_12px_2px_rgba(139,92,246,0.55)]" />
              </div>

              <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full overflow-visible drop-shadow-[0_24px_48px_rgba(49,46,129,0.28)]">
                <defs>
                  {shades.map(([from, to], i) => (
                    <linearGradient key={i} id={`slice-g${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={to} />
                      <stop offset="100%" stopColor={from} />
                    </linearGradient>
                  ))}
                </defs>
                {all.map((item, i) => {
                  const on = active === i;
                  const dx = Math.cos(midAngle(i)) * 8;
                  const dy = Math.sin(midAngle(i)) * 8;
                  return (
                    <path
                      key={item.label}
                      d={sliceAt(i)}
                      fill={`url(#slice-g${i % shades.length})`}
                      strokeLinejoin="round"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        cursor: 'pointer',
                        transform: on ? `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)` : 'translate(0, 0)',
                        filter: on ? 'brightness(1.14)' : 'none',
                        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease',
                      }}
                    />
                  );
                })}
              </svg>

              {/* Ikonok és feliratok a szeletekben */}
              {all.map((item, i) => {
                const pos = centroidOf(i);
                const on = active === i;
                const dx = Math.cos(midAngle(i)) * 10;
                const dy = Math.sin(midAngle(i)) * 10;
                return (
                  <div
                    key={item.label}
                    className="absolute flex flex-col items-center gap-0.5 sm:gap-1 pointer-events-none select-none"
                    style={{
                      ...pos,
                      transform: on
                        ? `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px)) scale(1.08)`
                        : 'translate(-50%, -50%) scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <item.Icon size={22} strokeWidth={1.9} className="text-white w-[17px] h-[17px] sm:w-[22px] sm:h-[22px]" />
                    <span className="text-[8.5px] sm:text-[10.5px] font-semibold text-white whitespace-nowrap [text-shadow:0_1px_6px_rgba(30,27,75,0.45)]">
                      {item.label}
                    </span>
                  </div>
                );
              })}

              {/* Középpont: a logó és a vándorló címke */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <span
                  className="flex items-center justify-center w-[64px] h-[64px] sm:w-[82px] sm:h-[82px] rounded-full shadow-[0_10px_28px_-8px_rgba(79,70,229,0.5)]"
                  style={{ background: 'var(--brand-gradient)' }}
                >
                  <span className="relative block w-[38px] h-[38px] sm:w-[50px] sm:h-[50px]">
                    <Image src="/logo-n.png" alt="Nexuscode" fill sizes="50px" className="object-contain" />
                  </span>
                </span>
              </div>

              <span
                key={active}
                className="rise absolute left-1/2 -bottom-9 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-white border border-[color:var(--hairline)] shadow-sm text-[12px] font-semibold text-[color:var(--primary)] whitespace-nowrap"
              >
                {all[active].label}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
