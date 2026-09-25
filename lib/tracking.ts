/* Egy helyen minden mérés.
 *
 * Miért kellett ez: a gtag.js könyvtár PageSpeed miatt csak az első
 * interakcióra vagy 6 mp után töltődött be. A köszönőoldalon a látogató
 * ritkán kattint és gyakran 6 mp-en belül távozik, így a konverzió
 * benne ragadt a dataLayer sorában, és soha nem ért el a Google-höz.
 * Ráadásul a router.push('/koszonjuk') eldobta a gclid-et az URL-ből,
 * így cookie nélkül (Consent Mode: denied) semmi nem kötötte a leadet
 * a hirdetéskattintáshoz.
 */

export const GA4_ID = 'G-DK6GNH27QV';
export const ADS_ID = 'AW-18422187691';
export const ADS_LEAD_LABEL = 'yVHaCOHhxewcEKuNsdBE';
export const ADS_LEAD_SEND_TO = `${ADS_ID}/${ADS_LEAD_LABEL}`;

/* A Meta Pixel (adatkészlet) azonosítója az Eseménykezelőből.
   Amíg üres, a Pixel nem töltődik be, és Meta-esemény sem megy ki. */
export const META_PIXEL_ID = '';

/* Egy ajánlatkérés becsült üzleti értéke forintban, amikor nem tudjuk,
   mekkora projektről van szó (pl. a főoldali rövid űrlap). */
export const LEAD_VALUE_HUF = 20000;

/* A licitáláshoz csak az ARÁNYOK számítanak, az abszolút összegek nem:
   ha a valós zárási arány 5% vagy 20%, attól minden érték ugyanazzal a
   szorzóval mozdul, és a Google viselkedése változatlan. Ezért a
   számok az árlista sávközepeiből jönnek, egységes 10%-os feltételezett
   zárással. Ha később kiderül a tényleges arány, elég ezt a szorzót
   állítani, a sávok egymáshoz képesti súlya jó marad. */
const CLOSE_RATE = 0.1;

const BUDGET_MIDPOINT_HUF: Record<string, number> = {
  '80 – 150 ezer Ft': 115000,
  '150 – 300 ezer Ft': 225000,
  '300 – 500 ezer Ft': 400000,
  '500 ezer Ft felett': 700000,
  'Még nem tudom, ezért kérek ajánlatot': 150000,
};

/** Az űrlap keretsávjai, pontosan a fenti kulcsokkal (ebből jön az érték). */
export const BUDGETS = Object.keys(BUDGET_MIDPOINT_HUF);

/** Az űrlapon választott keretsávból becsült lead-érték. */
export function leadValueFromBudget(budget?: string) {
  if (!budget) return LEAD_VALUE_HUF;
  const midpoint = BUDGET_MIDPOINT_HUF[budget.trim()];
  if (!midpoint) return LEAD_VALUE_HUF;
  return Math.round((midpoint * CLOSE_RATE) / 1000) * 1000;
}

const CLICK_STORE_KEY = 'ncx_click';
const CLICK_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 nap, mint az Ads attribúciós ablak

type Gtag = (...args: unknown[]) => void;

function gtag(): Gtag | undefined {
  if (typeof window === 'undefined') return undefined;
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  return typeof g === 'function' ? g : undefined;
}

/* ---------------------------------------------------------------- *
 * 1. A gtag.js azonnali betöltése                                   *
 * ---------------------------------------------------------------- */

/** A konverziós oldalakon nem várhatunk 6 mp-et: itt most kell a könyvtár. */
export function loadGtagNow() {
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
}

/* ---------------------------------------------------------------- *
 * 2. Kattintásazonosítók megőrzése                                  *
 * ---------------------------------------------------------------- */

export type ClickData = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing?: string;
  referrer?: string;
  ts?: number;
};

/** Belépéskor elmenti a hirdetési paramétereket, hogy az űrlap is lássa őket. */
export function captureClickIds(): ClickData {
  if (typeof window === 'undefined') return {};
  let stored: ClickData = {};
  try {
    const raw = localStorage.getItem(CLICK_STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ClickData;
      if (parsed.ts && Date.now() - parsed.ts < CLICK_TTL_MS) stored = parsed;
    }
  } catch {}

  const p = new URLSearchParams(window.location.search);
  const fresh: ClickData = {};
  (['gclid', 'gbraid', 'wbraid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const).forEach(
    (k) => {
      const v = p.get(k);
      if (v) fresh[k] = v;
    }
  );

  // Új hirdetéskattintás felülírja a régit; e nélkül nincs mit menteni.
  if (Object.keys(fresh).length === 0) return stored;

  const data: ClickData = {
    ...fresh,
    landing: window.location.pathname,
    referrer: document.referrer || undefined,
    ts: Date.now(),
  };
  try {
    localStorage.setItem(CLICK_STORE_KEY, JSON.stringify(data));
  } catch {}
  return data;
}

export function getClickData(): ClickData {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(CLICK_STORE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ClickData;
    if (parsed.ts && Date.now() - parsed.ts > CLICK_TTL_MS) return {};
    return parsed;
  } catch {
    return {};
  }
}

/* ---------------------------------------------------------------- *
 * 3. Lead-konverzió                                                 *
 * ---------------------------------------------------------------- */

const FIRED_KEY = 'ncx_lead_fired';
const LAST_LEAD_KEY = 'ncx_last_lead';

/* Modulszintű őr: akkor is működik, ha a böngésző tiltja a tárolót
   (privát ablak, szigorú süti-beállítás). Egy lapbetöltésen belül ez
   elég, a lapváltáson átnyúló deduplikációt a tároló adja. */
let firedInThisPage: string | null = null;

/** Volt-e már lead az elmúlt percekben? Enélkül a köszönőoldali
 *  biztonsági háló tiltott tároló esetén másodszor is tüzelne. */
export function recentLeadFired(withinMs = 10 * 60 * 1000) {
  if (firedInThisPage) return true;
  try {
    const raw = localStorage.getItem(LAST_LEAD_KEY);
    if (!raw) return false;
    const { ts } = JSON.parse(raw) as { ts?: number };
    return !!ts && Date.now() - ts < withinMs;
  } catch {
    return false;
  }
}

/** Egy leadhez egy azonosító: ezzel dedupláljuk az űrlap- és a
 *  köszönőoldali jelzést, hogy a Google ne számolja kétszer. */
export function newLeadId() {
  return 'lead_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

function normalizePhone(phone?: string) {
  if (!phone) return undefined;
  const digits = phone.replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return digits;
  if (digits.startsWith('06')) return '+36' + digits.slice(2);
  if (digits.startsWith('36')) return '+' + digits;
  if (digits.length === 9) return '+36' + digits; // 302697632
  return digits ? '+36' + digits.replace(/^0+/, '') : undefined;
}

export type LeadPayload = {
  leadId: string;
  email?: string;
  phone?: string;
  name?: string;
  /** Az űrlapon választott keretsáv; ebből számoljuk a konverzió értékét. */
  budget?: string;
  value?: number;
};

/**
 * Elküldi az Ads-konverziót és a GA4 generate_lead eseményt.
 * Az email/telefon átadásával működik az Enhanced Conversions: a Google
 * a böngészőben hasheli, és cookie nélkül (elutasított süti esetén is)
 * hozzá tudja rendelni a leadet a hirdetéskattintáshoz.
 */
export function trackLead({ leadId, email, phone, name, budget, value }: LeadPayload) {
  const leadValue = value ?? leadValueFromBudget(budget);
  if (typeof window === 'undefined') return;

  if (firedInThisPage === leadId) return; // már elment ezen a lapon
  try {
    if (sessionStorage.getItem(FIRED_KEY) === leadId) return; // már elment
  } catch {}

  // Meta Lead ugyanazzal az azonosítóval (a Meta ez alapján dedupál).
  // A gtag előtt megy, hogy egy letiltott Google-címke ne vigye magával.
  try {
    if (sessionStorage.getItem(META_LEAD_KEY) !== leadId) {
      meta('track', 'Lead', { value: leadValue, currency: 'HUF' }, { eventID: leadId });
      sessionStorage.setItem(META_LEAD_KEY, leadId);
    }
  } catch {
    meta('track', 'Lead', { value: leadValue, currency: 'HUF' }, { eventID: leadId });
  }

  loadGtagNow();
  const g = gtag();
  if (!g) return;

  // Enhanced Conversions: a gtag hasheli az adatot küldés előtt.
  const userData: Record<string, string> = {};
  if (email) userData.email = email.trim().toLowerCase();
  const ph = normalizePhone(phone);
  if (ph) userData.phone_number = ph;
  if (name) {
    const parts = name.trim().split(/\s+/);
    // Magyar sorrend: vezetéknév elöl
    if (parts.length > 1) {
      userData.address = JSON.stringify({ first_name: parts[1], last_name: parts[0] });
    }
  }
  if (userData.email || userData.phone_number) {
    g('set', 'user_data', {
      email: userData.email,
      phone_number: userData.phone_number,
    });
  }

  const click = getClickData();

  g('event', 'conversion', {
    send_to: ADS_LEAD_SEND_TO,
    value: leadValue,
    currency: 'HUF',
    transaction_id: leadId,
  });

  g('event', 'generate_lead', {
    send_to: GA4_ID,
    value: leadValue,
    currency: 'HUF',
    transaction_id: leadId,
    lead_source: click.utm_source || (click.gclid ? 'google_ads' : 'organic'),
    campaign: click.utm_campaign,
    keyword: click.utm_term,
  });

  firedInThisPage = leadId;
  try {
    sessionStorage.setItem(FIRED_KEY, leadId);
    localStorage.setItem(LAST_LEAD_KEY, JSON.stringify({ id: leadId, ts: Date.now() }));
  } catch {}
}

/** Telefonhívás-kattintás: külön konverzió az Ads-ben. */
export function trackPhoneClick(where: string) {
  meta('track', 'Contact', { content_name: 'Telefon' });
  loadGtagNow();
  const g = gtag();
  if (!g) return;
  g('event', 'phone_click', {
    send_to: GA4_ID,
    event_category: 'engagement',
    event_label: where,
  });
  // Ha létrehozod az Ads-ben a "Telefonhívás" konverziót, ide jön a címkéje:
  // g('event', 'conversion', { send_to: `${ADS_ID}/XXXXXXXX` });
}

export function trackEmailClick(where: string) {
  meta('track', 'Contact', { content_name: 'Email' });
  gtag()?.('event', 'email_click', {
    send_to: GA4_ID,
    event_category: 'engagement',
    event_label: where,
  });
}

/** Az első koppintás az ajánlatkérőn (munkamenetenként egyszer). Ebből
 *  látszik, hányan kezdik el, és hányan küldik el ténylegesen. */
export function trackFormStart(placement: string) {
  try {
    if (sessionStorage.getItem('ncx_form_started')) return;
    sessionStorage.setItem('ncx_form_started', '1');
  } catch {}
  loadGtagNow(); // mire elküldi, a könyvtár már itt legyen
  meta('trackCustom', 'LeadFormStart', { placement });
  gtag()?.('event', 'lead_form_start', { send_to: GA4_ID, form_placement: placement });
}

/* ---------------------------------------------------------------- *
 * 4. Meta Pixel                                                     *
 * ---------------------------------------------------------------- */

/* Csak sütihozzájárulással töltődik be (GDPR). Az elfogadás előtt
   történt eseményeket (pl. ajánlatkérés, mielőtt a látogató a süti-sávra
   kattintott) félretesszük, és a Pixel betöltésekor pótoljuk. */

type FbqStub = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: unknown;
  loaded: boolean;
  version: string;
};

const META_QUEUE_KEY = 'ncx_meta_queue';
const META_LEAD_KEY = 'ncx_meta_lead';
let metaLoaded = false;

export function cookieConsent(): 'accepted' | 'declined' | null {
  try {
    const v = localStorage.getItem('cookieConsent');
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

export function loadMetaPixel() {
  if (!META_PIXEL_ID || metaLoaded || cookieConsent() !== 'accepted') return;
  metaLoaded = true;

  // A hivatalos Meta-beágyazókód, TypeScriptben
  const w = window as unknown as { fbq?: FbqStub; _fbq?: FbqStub };
  if (!w.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args);
      else n.queue.push(args);
    } as FbqStub;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    w.fbq = n;
    if (!w._fbq) w._fbq = n;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
  }

  const fbq = w.fbq;
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
  try {
    const queued = JSON.parse(sessionStorage.getItem(META_QUEUE_KEY) || '[]') as unknown[][];
    queued.forEach((args) => fbq(...args));
    sessionStorage.removeItem(META_QUEUE_KEY);
  } catch {}
}

function meta(...args: unknown[]) {
  if (!META_PIXEL_ID || typeof window === 'undefined') return;
  const consent = cookieConsent();
  if (consent === 'declined') return;
  if (consent === 'accepted') {
    loadMetaPixel();
    (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args);
    return;
  }
  // Még nincs döntés a sütikről: félretesszük, elfogadáskor pótoljuk
  try {
    const q = JSON.parse(sessionStorage.getItem(META_QUEUE_KEY) || '[]') as unknown[][];
    q.push(args);
    sessionStorage.setItem(META_QUEUE_KEY, JSON.stringify(q));
  } catch {}
}

/** Elutasításkor a félretett Meta-események is törlődnek. */
export function dropMetaQueue() {
  try {
    sessionStorage.removeItem(META_QUEUE_KEY);
  } catch {}
}
