'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Clock, PenLine, Phone, ShieldCheck, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { captureClickIds, getClickData, loadGtagNow, newLeadId, trackLead, trackPhoneClick } from '@/lib/tracking';

const steps = [
  { n: '1', title: 'Elolvassuk, amit írtál', text: 'Nem sablonválasz megy: átnézzük, mire van szükséged.' },
  { n: '2', title: '24 órán belül jelentkezünk', text: 'Emailben vagy telefonon, ahogy neked kényelmesebb.' },
  { n: '3', title: 'Fix áras ajánlatot kapsz', text: 'Írásban, határidővel. Ha nem tetszik, nincs harag.' },
];

/* A projekt típusa és a keret nem formaság: ezek szűrik ki azokat, akik
   pár tízezer forintos oldalt keresnek. Jobb, ha itt derül ki, mint egy
   fél óra telefonálás után. */
const projectTypes = [
  'Bemutatkozó / landing oldal',
  'Céges weboldal (több aloldal)',
  'Webáruház',
  'Meglévő oldal felújítása',
  'Egyedi rendszer, webalkalmazás',
  'Marketing, hirdetéskezelés',
];

const budgets = [
  '80 – 150 ezer Ft',
  '150 – 300 ezer Ft',
  '300 – 500 ezer Ft',
  '500 ezer Ft felett',
  'Még nem tudom, ezért kérek ajánlatot',
];

const deadlines = ['Minél hamarabb', '1 hónapon belül', '1–3 hónap', 'Még csak tájékozódom'];

export default function AjanlatPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    website: '',
    projectType: '',
    budget: '',
    deadline: '',
    message: '',
  });
  const [botField, setBotField] = useState(''); // méz: valódi ember nem tölti ki
  const [privacyOk, setPrivacyOk] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  /* A hirdetésből érkező gclid-et itt mentjük el, mert a köszönőoldalra
     való átirányítás elhagyja az URL-paramétereket. A gtag.js-t is most
     töltjük be: a konverziónál nem várhatunk a 6 másodperces időzítőre. */
  useEffect(() => {
    captureClickIds();
    loadGtagNow();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // spamrobot akadt fenn a mézen
    if (formData.message.trim().length < 15) {
      setError('Írj pár mondatot arról, mire van szükséged, hogy értelmes ajánlatot tudjunk adni.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    const leadId = newLeadId();
    const click = getClickData();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          leadId,
          website: formData.website === 'van' ? 'Van meglévő weboldala' : 'Nincs meglévő weboldala',
          // A hirdetési adatok az értesítő emailbe is bekerülnek: így látod,
          // melyik kulcsszó hozta a leadet, és tudsz offline konverziót
          // visszatölteni a Google Ads-be.
          click,
        }),
      });

      if (response.ok) {
        /* A konverziót MOST küldjük, nem a köszönőoldalon: itt még megvan
           az email és a telefonszám az Enhanced Conversions-höz, és a
           látogató biztosan a lapon van. */
        trackLead({
          leadId,
          email: formData.email,
          phone: formData.phone,
          name: formData.name,
          budget: formData.budget,
        });
        try {
          sessionStorage.setItem(
            'ncx_pending_lead',
            JSON.stringify({
              id: leadId,
              email: formData.email,
              phone: formData.phone,
              name: formData.name,
              budget: formData.budget,
            })
          );
        } catch {}
        router.push('/koszonjuk');
      } else {
        setError('Hiba történt a küldéskor. Próbáld újra, vagy írj emailt: hello@nexuscode.hu');
        setIsSubmitting(false);
      }
    } catch {
      setError('Hiba történt a küldéskor. Próbáld újra, vagy írj emailt: hello@nexuscode.hu');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <Header current="Ajánlat" />

      <PageHero
        label="Ajánlatkérés"
        title="Mondd el, mit szeretnél."
        accent="A többi a mi dolgunk."
        lead="Töltsd ki az űrlapot 1 perc alatt, és 24 órán belül személyre szabott, fix áras ajánlatot kapsz. Az ajánlatkérés ingyenes, és semmire nem kötelez."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-6">
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
      </PageHero>

      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 pb-20 md:pb-28 pt-2 md:pt-6">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* Űrlap */}
          <form onSubmit={handleSubmit} className="card p-6 sm:p-9">
            {/* Méz a robotoknak: képernyőolvasóval és billentyűzettel nem érhető el */}
            <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden>
              <label htmlFor="aj-website-url">Ne töltsd ki</label>
              <input
                id="aj-website-url"
                type="text"
                name="websiteUrl"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
              />
            </div>

            <div className="space-y-4 mb-7">
              <div>
                <label htmlFor="aj-name" className="sr-only">
                  Név
                </label>
                <input id="aj-name" type="text" name="name" required value={formData.name} onChange={handleChange} className="field" placeholder="Név *" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="aj-email" className="sr-only">
                    E-mail
                  </label>
                  <input id="aj-email" type="email" name="email" required value={formData.email} onChange={handleChange} className="field" placeholder="E-mail *" />
                </div>
                <div>
                  <label htmlFor="aj-phone" className="sr-only">
                    Telefonszám
                  </label>
                  <input id="aj-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="field" placeholder="Telefonszám" />
                </div>
              </div>
              <div>
                <label htmlFor="aj-company" className="sr-only">
                  Cég vagy vállalkozás neve
                </label>
                <input id="aj-company" type="text" name="company" value={formData.company} onChange={handleChange} className="field" placeholder="Cég / vállalkozás neve" />
              </div>
            </div>

            <div className="space-y-5 mb-7">
              <div>
                <label htmlFor="aj-projectType" className="block text-[14.5px] font-medium text-[color:var(--heading)] mb-2">
                  Mire van szükséged? *
                </label>
                <select id="aj-projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className="field">
                  <option value="">Válassz…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="aj-budget" className="block text-[14.5px] font-medium text-[color:var(--heading)] mb-2">
                  Milyen keretben gondolkodsz? *
                </label>
                <select id="aj-budget" name="budget" required value={formData.budget} onChange={handleChange} className="field">
                  <option value="">Válassz…</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <p className="text-[12.5px] text-[color:var(--muted)] mt-2 leading-relaxed">
                  Nem alkudozunk vele, csak így tudunk reális ajánlatot adni. Bemutatkozó oldal
                  80 000 Ft-tól, céges weboldal 149 990 Ft-tól, webáruház 424 990 Ft-tól indul.
                </p>
              </div>

              <div>
                <label htmlFor="aj-deadline" className="block text-[14.5px] font-medium text-[color:var(--heading)] mb-2">
                  Mikorra kellene?
                </label>
                <select id="aj-deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="field">
                  <option value="">Válassz…</option>
                  {deadlines.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mb-6">
              <legend className="text-[14.5px] font-medium text-[color:var(--heading)] mb-3">Van már meglévő weboldalad?</legend>
              <div className="flex items-center gap-7">
                {[
                  { value: 'van', label: 'Igen' },
                  { value: 'nincs', label: 'Nincs' },
                ].map((o) => (
                  <label key={o.value} className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="website"
                      value={o.value}
                      checked={formData.website === o.value}
                      onChange={handleChange}
                      className="sr-only peer"
                      required
                    />
                    <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full border border-[color:var(--hairline-strong)] bg-white transition-colors peer-checked:border-[color:var(--primary)] peer-checked:[&>span]:opacity-100">
                      <span className="w-[10px] h-[10px] rounded-full bg-[color:var(--primary)] opacity-0 transition-opacity" />
                    </span>
                    <span className="text-[15px] text-[color:var(--foreground)]">{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mb-5">
              <label htmlFor="aj-message" className="block text-[14.5px] font-medium text-[color:var(--heading)] mb-2">
                Mesélj a vállalkozásodról *
              </label>
              <textarea
                id="aj-message"
                name="message"
                required
                minLength={15}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="field resize-none"
                placeholder="Mivel foglalkozol, kiknek adsz el, és mit szeretnél elérni az oldallal? Pár mondat is elég."
              />
            </div>

            <label className="flex items-start gap-3 mb-7 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={privacyOk}
                onChange={(e) => setPrivacyOk(e.target.checked)}
                required
                className="mt-0.5 w-[18px] h-[18px] accent-[#4f46e5] shrink-0"
              />
              <span className="text-[13.5px] text-[color:var(--muted)]">
                Elolvastam és elfogadom az{' '}
                <a href="/privacy" target="_blank" className="text-[color:var(--primary)] underline underline-offset-4">
                  adatkezelési tájékoztatót
                </a>
                . *
              </span>
            </label>

            {error && (
              <p className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-[13.5px] text-red-700">{error}</p>
            )}

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full !py-4 !text-[15.5px] disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? 'Küldés folyamatban...' : 'Ingyenes ajánlatot kérek'}
              {!isSubmitting && <ArrowRight size={17} />}
            </button>
            <p className="text-center text-[12.5px] text-[color:var(--muted)] mt-4">
              Az adataidat bizalmasan kezeljük, harmadik félnek nem adjuk ki.
            </p>
          </form>

          {/* Oldalsáv: mi történik ezután */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="card p-6">
              <h3 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-5">Mi történik, miután elküldted?</h3>
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
              <h3 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-4">Inkább beszélnél velünk?</h3>
              <p className="text-[13.5px] text-[color:var(--muted)] leading-relaxed mb-4">
                Hívj bátran, vagy írj emailt, minden nap 8 és 22 óra között elérsz minket.
              </p>
              <a
                href="tel:+36302697632"
                onClick={() => trackPhoneClick('ajanlat-sidebar')}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--primary)] hover:underline underline-offset-4"
              >
                <Phone size={15} />
                06 30 269 7632
              </a>
              <a href="mailto:hello@nexuscode.hu" className="block text-[15px] font-semibold text-[color:var(--primary)] hover:underline underline-offset-4 mt-1">
                hello@nexuscode.hu
              </a>
            </div>

            <div className="rounded-lg border border-[color:var(--hairline)] bg-[color:var(--section)] p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <PenLine size={16} className="text-[color:var(--primary)]" />
                <span className="text-[14px] font-semibold text-[color:var(--heading)]">Írásos garanciák</span>
              </div>
              <p className="text-[13px] text-[color:var(--muted)] leading-relaxed">
                Fix ár, fix határidő, jóváhagyás nélkül nincs fejlesztés, és átadás után sem tűnünk el. Mind a négy pont az aláírt ajánlat része.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
