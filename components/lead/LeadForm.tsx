'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
  Megaphone,
  Monitor,
  RefreshCw,
  ShoppingCart,
  Workflow,
  X,
} from 'lucide-react';
import { BUDGETS, getClickData, newLeadId, trackFormStart, trackLead } from '@/lib/tracking';

/* Háromlépéses ajánlatkérő: két koppintós kérdés, utána az elérhetőség.
   Üres, kötelező üzenetmező helyett gombokkal indul, így sokkal többen
   végigmennek rajta. A keretsáv megmarad: ebből számoljuk a lead értékét
   (lib/tracking.ts), és ez szűri ki a pár tízezer forintos igényeket.
   Ugyanez az űrlap fut a hero-ban, a felugró ablakban, az /ajanlat
   oldalon és a főoldal alján. */

export const SERVICES = [
  { id: 'weboldal', label: 'Céges weboldal', sub: 'bemutatkozó vagy több aloldalas', Icon: Monitor },
  { id: 'webaruhaz', label: 'Webáruház', sub: 'online értékesítés', Icon: ShoppingCart },
  { id: 'megujitas', label: 'Oldal megújítása', sub: 'a régi oldalam cseréje', Icon: RefreshCw },
  { id: 'rendszer', label: 'Egyedi rendszer', sub: 'foglalás, ügyfélkezelés', Icon: Workflow },
  { id: 'marketing', label: 'Hirdetéskezelés', sub: 'Google, Facebook, Instagram', Icon: Megaphone },
  { id: 'nemtudom', label: 'Még nem tudom', sub: 'segítsetek eldönteni', Icon: HelpCircle },
];

/* Az árkártyák ?csomag= paraméterei. A csomagból a keretsáv is
   következik, így onnan egyből az elérhetőséghez lehet ugrani. */
export const PACKAGES: Record<string, { label: string; budget: string }> = {
  alap: { label: 'Alap', budget: '80 – 150 ezer Ft' },
  premium: { label: 'Prémium', budget: '150 – 300 ezer Ft' },
  webshop: { label: 'Webshop', budget: '300 – 500 ezer Ft' },
};

type Props = {
  /** Hol van az űrlap: a levélben és a mérésben is ez látszik */
  placement: string;
  /** Előre kiválasztott szolgáltatás (SERVICES id), pl. a szolgáltatás-gombokról */
  initialService?: string;
  /** Csomag kulcsa (PACKAGES), ha árkártyáról jött */
  initialPackage?: string;
  heading?: string;
  /** Sikeres küldés után: a felugró ablak cseréli a saját előzmény-bejegyzését */
  navigate?: 'push' | 'replace';
  /** Lépésváltáskor a kártyát a képernyőre görgeti (felugró ablakban nem kell) */
  scrollOnStep?: boolean;
  /** Az URL ?szolgaltatas= és ?csomag= paraméterét is átveszi (hirdetési linkekhez) */
  readUrl?: boolean;
  onClose?: () => void;
  /** Sikeres küldés után, közvetlenül a köszönőoldalra lépés előtt */
  onSuccess?: () => void;
  className?: string;
};

/* Kiinduló állapot az előre kiválasztott szolgáltatásból és csomagból */
function presetState(serviceId?: string, packageKey?: string) {
  const service = SERVICES.find((s) => s.id === serviceId)?.label ?? '';
  const pkg = packageKey ? PACKAGES[packageKey] : undefined;
  const step = service && pkg ? 2 : service ? 1 : 0;
  return { service, pkg, budget: pkg?.budget ?? '', step };
}

export default function LeadForm({
  placement,
  initialService,
  initialPackage,
  heading = 'Kérj ingyenes ajánlatot',
  navigate = 'push',
  scrollOnStep = true,
  readUrl = false,
  onClose,
  onSuccess,
  className = '',
}: Props) {
  const router = useRouter();
  const preset = presetState(initialService, initialPackage);
  const [step, setStep] = useState(preset.step);
  const [service, setService] = useState(preset.service);
  const [pkg, setPkg] = useState(preset.pkg);
  const [budget, setBudget] = useState(preset.budget);
  const [fields, setFields] = useState({ name: '', email: '', phone: '', note: '' });
  const [botField, setBotField] = useState(''); // méz: valódi ember nem tölti ki
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const rootRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLParagraphElement>(null);
  const userMoved = useRef(false); // csak a látogató lépésére ugrik a fókusz
  const qid = useId();

  useEffect(() => {
    if (!readUrl) return;
    const q = new URLSearchParams(window.location.search);
    const next = presetState(q.get('szolgaltatas') ?? undefined, q.get('csomag') ?? undefined);
    if (!next.service) return;
    setService(next.service);
    setPkg(next.pkg);
    setBudget(next.budget);
    setStep(next.step);
  }, [readUrl]);

  const go = (to: number) => {
    userMoved.current = true;
    setStep(to);
  };

  // Lépésváltáskor a kérdésre kerül a fókusz, és a kártya a képernyőn marad
  useEffect(() => {
    if (!userMoved.current) return;
    userMoved.current = false;
    questionRef.current?.focus({ preventScroll: true });
    const el = rootRef.current;
    if (!scrollOnStep || !el) return;
    const r = el.getBoundingClientRect();
    if (r.top < 72 || r.bottom > window.innerHeight) {
      window.scrollTo({ top: window.scrollY + r.top - 84, behavior: 'smooth' });
    }
  }, [step, scrollOnStep]);

  const chooseService = (label: string) => {
    trackFormStart(placement);
    setService(label);
    setPkg(undefined); // új választásnál a csomagból kikövetkeztetett keret sem él tovább
    go(1);
  };

  const chooseBudget = (b: string) => {
    trackFormStart(placement);
    setBudget(b);
    go(2);
  };

  const onField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const projectType = [service || 'Még nem tudom', pkg && `${pkg.label} csomag`].filter(Boolean).join(', ');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // spamrobot akadt fenn a mézen
    if (status === 'sending') return;
    setStatus('sending');

    const leadId = newLeadId();
    const lead = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      budget,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lead,
          message: fields.note.trim(),
          projectType,
          placement,
          leadId,
          // Hirdetési adatok az értesítő emailbe: honnan jött a lead
          click: getClickData(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      /* A konverzió MOST megy (itt még megvan az email és a telefon az
         Enhanced Conversions-höz); a köszönőoldal csak biztonsági háló. */
      trackLead({ leadId, ...lead });
      try {
        sessionStorage.setItem('ncx_pending_lead', JSON.stringify({ id: leadId, ...lead }));
      } catch {}

      // Rövid szünet, hogy a mérőkódok biztosan elinduljanak
      setTimeout(() => {
        onSuccess?.();
        if (navigate === 'replace') router.replace('/koszonjuk');
        else router.push('/koszonjuk');
      }, 300);
    } catch {
      setStatus('error');
    }
  };

  const back = (to: number) => (
    <button
      type="button"
      onClick={() => go(to)}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--muted)] hover:text-[color:var(--primary)] transition-colors mb-3"
    >
      <ArrowLeft size={14} />
      Vissza
    </button>
  );

  return (
    <div ref={rootRef} data-lead-form className={`card p-5 sm:p-7 ${className}`}>
      {/* Fejléc és haladásjelző */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="font-display text-[19px] sm:text-[21px] font-semibold text-[color:var(--heading)] leading-tight">
            {heading}
          </p>
          <p className="text-[13px] text-[color:var(--muted)] mt-1">3 gyors lépés, 1 perc az egész.</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[12px] font-semibold text-[color:var(--primary)] bg-[color:var(--primary-dim)] rounded-full px-2.5 py-1">
            {step + 1}/3
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 -mr-1.5 rounded-full text-[color:var(--faint)] hover:text-[color:var(--heading)] hover:bg-[color:var(--section)] transition-colors"
              aria-label="Bezárás"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-1.5 mb-5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? 'bg-[color:var(--primary)]' : 'bg-[color:var(--hairline)]'
            }`}
          />
        ))}
      </div>

      <div key={step} className="step-in">
        {step === 0 && (
          <>
            <p ref={questionRef} tabIndex={-1} id={qid} className="lead-q">
              Mire van szükséged?
            </p>
            <div role="group" aria-labelledby={qid} className="grid grid-cols-2 gap-2.5">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => chooseService(s.label)}
                  className={`lead-tile ${service === s.label ? 'is-on' : ''}`}
                >
                  <span className="lead-tile-icon">
                    <s.Icon size={17} strokeWidth={2} />
                  </span>
                  <span className="text-[14.5px] font-semibold text-[color:var(--heading)] leading-tight">{s.label}</span>
                  <span className="text-[12px] text-[color:var(--muted)] leading-snug">{s.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            {back(0)}
            <p ref={questionRef} tabIndex={-1} id={qid} className="lead-q">
              Milyen keretben gondolkodsz?
            </p>
            <div role="group" aria-labelledby={qid} className="grid gap-2">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => chooseBudget(b)}
                  className={`lead-tile !flex-row !items-center justify-between !py-3 ${budget === b ? 'is-on' : ''}`}
                >
                  <span className="text-[14.5px] font-semibold text-[color:var(--heading)]">{b}</span>
                  <ArrowRight size={15} className="text-[color:var(--faint)] shrink-0" />
                </button>
              ))}
            </div>
            <p className="text-[12.5px] text-[color:var(--muted)] leading-relaxed mt-3">
              Nem alkudozunk vele, csak így tudunk reális ajánlatot adni. Tájékoztatásul: bemutatkozó oldal 80 000
              Ft-tól, céges weboldal 149 990 Ft-tól, webáruház 424 990 Ft-tól.
            </p>
          </>
        )}

        {step === 2 && (
          <form onSubmit={submit}>
            {back(pkg ? 0 : 1)}
            <p ref={questionRef} tabIndex={-1} className="lead-q">
              Hová küldhetjük az ajánlatot?
            </p>
            <p className="text-[12.5px] text-[color:var(--faint)] -mt-1.5 mb-3">
              {[projectType, budget].filter(Boolean).join(' · ')}
            </p>

            {/* Méz a robotoknak: képernyőolvasóval és billentyűzettel nem érhető el */}
            <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden>
              <label htmlFor={`${qid}-url`}>Ne töltsd ki</label>
              <input
                id={`${qid}-url`}
                type="text"
                name="websiteUrl"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
              />
            </div>

            <div className="space-y-2.5">
              <div>
                <label htmlFor={`${qid}-name`} className="sr-only">
                  Név
                </label>
                <input
                  id={`${qid}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={fields.name}
                  onChange={onField}
                  className="field"
                  placeholder="Neved *"
                />
              </div>
              <div>
                <label htmlFor={`${qid}-email`} className="sr-only">
                  E-mail
                </label>
                <input
                  id={`${qid}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={fields.email}
                  onChange={onField}
                  className="field"
                  placeholder="E-mail címed *"
                />
              </div>
              <div>
                <label htmlFor={`${qid}-phone`} className="sr-only">
                  Telefonszám
                </label>
                <input
                  id={`${qid}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={fields.phone}
                  onChange={onField}
                  className="field"
                  placeholder="Telefonszámod (ha visszahívhatunk)"
                />
              </div>
              <div>
                <label htmlFor={`${qid}-note`} className="sr-only">
                  Megjegyzés
                </label>
                <textarea
                  id={`${qid}-note`}
                  name="note"
                  rows={2}
                  value={fields.note}
                  onChange={onField}
                  className="field resize-none"
                  placeholder="Pár szó a vállalkozásodról (nem kötelező)"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="mt-3 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-[13.5px] text-red-700" role="alert">
                <p className="flex items-center gap-2 font-semibold">
                  <AlertCircle size={16} />
                  Nem sikerült elküldeni.
                </p>
                <p className="mt-1">
                  Próbáld újra, vagy hívj minket:{' '}
                  <a href="tel:+36302697632" className="font-semibold underline underline-offset-2">
                    06 30 269 7632
                  </a>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full !py-3.5 !text-[15.5px] mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Küldés…' : 'Kérem az ingyenes ajánlatot'}
              {status !== 'sending' && <ArrowRight size={17} />}
            </button>
            <p className="text-[11.5px] text-[color:var(--faint)] text-center leading-relaxed mt-3">
              A küldéssel elfogadod az{' '}
              <a href="/privacy" target="_blank" className="underline underline-offset-2 hover:text-[color:var(--muted)]">
                adatkezelési tájékoztatót
              </a>
              . Az adataidat senkinek nem adjuk ki.
            </p>
          </form>
        )}
      </div>

      {/* Bizalmi sor */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-5 pt-4 border-t border-[color:var(--hairline)] text-[12px] text-[color:var(--muted)]">
        {['Ingyenes', 'Semmire nem kötelez', 'Válasz 24 órán belül'].map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5">
            <Check size={13} className="text-emerald-500" strokeWidth={2.6} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
