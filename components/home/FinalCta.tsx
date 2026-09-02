'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Mail, Phone } from 'lucide-react';
import Reveal from './Reveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function FinalCta() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-[26rem] mb-9">
              Pár mondat elég. Nem kötelez semmire.
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
                href="mailto:hello@nexuscode.hu"
                className="flex items-center gap-3.5 text-white/70 hover:text-white transition-colors group w-fit"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 group-hover:border-white/30 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-[15px]">hello@nexuscode.hu</span>
              </a>
              <a
                href="tel:+36309932454"
                className="flex items-center gap-3.5 text-white/70 hover:text-white transition-colors group w-fit"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 group-hover:border-white/30 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-[15px]">+36 30 993 2454</span>
              </a>
              <p className="text-sm text-white/40 pl-[54px]">Minden nap, 8–22 óráig.</p>
            </div>
          </Reveal>

          {/* Jobb: űrlap fehér kártyán */}
          <Reveal delay={0.1}>
            {status === 'success' ? (
              <div className="card p-8 sm:p-10 text-center">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-[color:var(--foreground)] mb-2">
                  Megkaptuk az üzeneted.
                </h3>
                <p className="text-[color:var(--muted)] text-[15px] leading-relaxed">
                  24 órán belül jelentkezünk, általában sokkal hamarabb.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                      Név
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="field"
                      placeholder="Hogy szólíthatunk?"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                      Email
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                      placeholder="valaki@ceged.hu"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cta-phone" className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                    Telefonszám <span className="text-[color:var(--faint)] font-normal">(nem kötelező)</span>
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="field"
                    placeholder="+36 …"
                  />
                </div>
                <div>
                  <label htmlFor="cta-message" className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                    Mire van szükséged?
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="field resize-none"
                    placeholder="Pl. új weboldal kellene a vállalkozásomnak."
                  />
                </div>

                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle size={16} />
                    Nem sikerült elküldeni. Próbáld újra, vagy írj a hello@nexuscode.hu címre.
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                  {status === 'sending' ? 'Küldés…' : 'Projekt indítása'}
                  {status !== 'sending' && <ArrowRight size={17} />}
                </button>

                <p className="text-xs text-[color:var(--faint)] text-center">
                  Az üzenet elküldésével elfogadod az{' '}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-[color:var(--muted)]">
                    adatkezelési tájékoztatót
                  </a>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
