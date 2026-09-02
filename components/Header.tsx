'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { name: 'Főoldal', href: '/' },
  { name: 'Munkáink', href: '/#munkaink' },
  { name: 'Szolgáltatások', href: '/#szolgaltatasok' },
  { name: 'Árak', href: '/#arak' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kapcsolat', href: '/#kapcsolat' },
];

export default function Header({ current = 'Főoldal' }: { current?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--petrol)]/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(10,8,45,0.35)]">
      <nav className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logó */}
          <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Nexuscode, kezdőlap">
            <span className="relative block h-10 w-10">
              <Image
                src="/logo-n.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
                priority
                fetchPriority="high"
              />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[16px] font-bold tracking-[0.14em] text-white uppercase">
                Nexuscode
              </span>
              <span className="block text-[8.5px] tracking-[0.28em] text-white/60 uppercase mt-1">
                Digital Technology Studio
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 rounded text-[13.5px] font-medium transition-colors duration-200 ${
                  item.name === current
                    ? 'bg-[color:var(--primary)] text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+36309932454"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Hívás: +36 30 993 2454"
            >
              <Phone size={19} />
            </a>

            {/* Mobil menü gomb */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 text-white/85 hover:text-white transition-colors"
              aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobil menü */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 ease-out"
          style={{ maxHeight: open ? '480px' : '0px', opacity: open ? 1 : 0 }}
        >
          <div className="py-4 border-t border-white/15 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 rounded text-[15px] font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="/ajanlat" onClick={() => setOpen(false)} className="btn-primary mt-3 mb-2 w-full">
              Ajánlatkérés
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
