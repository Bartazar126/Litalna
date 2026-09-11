import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, Clock, CreditCard, Package, Phone, Search, ShieldCheck, Smartphone, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import MobileCtaBar from '@/components/MobileCtaBar';

export const metadata: Metadata = {
  title: 'Webáruház készítés 424 990 Ft-tól | Nexuscode',
  description:
    'Webáruház készítés fix áron, 2-3 hét alatt. Online fizetés, készletkezelés, számlázás, magyar futárszolgálatok. Írásos ajánlat 24 órán belül.',
  alternates: { canonical: '/webaruhaz-keszites' },
  openGraph: {
    title: 'Webáruház készítés fix áron | Nexuscode',
    description:
      'Online fizetés, készletkezelés, számlázás és futárszolgálat-integráció. Fix ár, fix határidő, írásban.',
    url: '/webaruhaz-keszites',
    type: 'website',
  },
};

const includes = [
  { Icon: CreditCard, title: 'Online fizetés', text: 'Bankkártyás fizetés (Barion vagy Stripe), utánvét és átutalás. A pénz közvetlenül hozzád érkezik, nem rajtunk keresztül.' },
  { Icon: Package, title: 'Készlet- és rendeléskezelés', text: 'Admin felület, ahol látod a rendeléseket, állítod a készletet és az árakat. Nem kell hozzá fejlesztő.' },
  { Icon: Truck, title: 'Szállítás', text: 'Magyar futárszolgálatok és csomagpontok bekötése, automatikus szállítási díj a kosárban.' },
  { Icon: Smartphone, title: 'Mobilra tervezve', text: 'A vásárlások több mint fele telefonról jön. A kosár és a fizetés egy kézzel is végigvihető.' },
  { Icon: Search, title: 'Keresőoptimalizálás', text: 'Termékoldalak strukturált adattal, hogy a Google ár- és készletinformációval együtt mutassa őket.' },
  { Icon: ShieldCheck, title: 'Jogi alapok', text: 'ÁSZF, adatkezelési tájékoztató és cookie-kezelés, a hazai webshopokra vonatkozó szabályok szerint.' },
];

const steps = [
  { n: '1', title: 'Átbeszéljük, mit árulsz', text: 'Hány terméked van, hogyan szállítasz, van-e már számlázó- vagy készletrendszered. Ebből derül ki, mi kell valójában.' },
  { n: '2', title: 'Fix áras ajánlat, írásban', text: '24 órán belül megkapod a pontos árat és a határidőt. Nincs óradíj, nincs utólagos meglepetés.' },
  { n: '3', title: 'Dizájnterv jóváhagyásra', text: 'Előbb megmutatjuk, hogyan fog kinézni. Fejleszteni csak az általad jóváhagyott terv alapján kezdünk.' },
  { n: '4', title: 'Fejlesztés és átadás', text: 'Feltöltjük az első termékeket, megmutatjuk a kezelést, és élesítjük. Utána sem tűnünk el.' },
];

const faqs = [
  {
    q: 'Mennyibe kerül egy webáruház?',
    a: 'A webáruház 424 990 Ft-tól indul. A pontos árat az határozza meg, hány terméked van, milyen fizetési és szállítási módokat kérsz, és kell-e külső rendszerhez (számlázó, készletnyilvántartás) kapcsolódni. Az ajánlatban fix árat kapsz, írásban.',
  },
  {
    q: 'Mennyi idő alatt készül el?',
    a: 'Egy webáruház jellemzően 2-3 hét alatt készül el. A határidőt az ajánlat rögzíti. Az első dizájnterveket 24-48 órán belül látod.',
  },
  {
    q: 'Van havidíj?',
    a: 'Nálunk nincs kötelező havidíj. Egyszeri díjat fizetsz az elkészült webáruházért. Ami évente felmerül, az a domain és a tárhely, valamint a választott fizetési szolgáltató tranzakciós díja, amit közvetlenül nekik fizetsz. Ezeket előre megmondjuk.',
  },
  {
    q: 'Én tudom majd feltölteni a termékeket?',
    a: 'Igen. Kapsz egy admin felületet, ahol termékeket vehetsz fel, árat és készletet módosíthatsz, és látod a beérkező rendeléseket. Átadáskor megmutatjuk a használatát, és utána is hívhatsz, ha elakadsz.',
  },
  {
    q: 'Mi van, ha már van webáruházam?',
    a: 'Megnézzük a meglévőt, és megmondjuk, érdemesebb-e felújítani vagy újraépíteni. A termékadatok átköltöztetése a legtöbb rendszerből megoldható, ezt is az ajánlat tartalmazza.',
  },
];

export default function WebaruhazKeszitesPage() {
  const SITE = 'https://www.nexuscode.hu';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Webáruház készítés',
    serviceType: 'Webáruház készítés, e-kereskedelmi fejlesztés',
    description:
      'Webáruház készítés fix áron: online fizetés, készletkezelés, futárszolgálat-integráció és keresőoptimalizált termékoldalak.',
    provider: { '@id': `${SITE}/#organization` },
    areaServed: { '@type': 'Country', name: 'Magyarország' },
    url: `${SITE}/webaruhaz-keszites`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'HUF',
      price: '424990',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'HUF',
        minPrice: '424990',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Webáruház készítés', item: `${SITE}/webaruhaz-keszites` },
    ],
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header current="" />

      <PageHero
        label="Webáruház készítés"
        title="Webáruház, ami tényleg elad."
        accent="Fix áron, pár hét alatt."
        lead="Online fizetés, készletkezelés, magyar futárszolgálatok és keresőoptimalizált termékoldalak. 424 990 Ft-tól, írásos ajánlattal, 24 órán belül."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-6">
          {[
            { Icon: ShieldCheck, text: 'Fix ár, írásban' },
            { Icon: Clock, text: '2–3 hét átfutás' },
            { Icon: CreditCard, text: 'Nincs havidíj' },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80">
              <t.Icon size={15} className="text-[#b3a6ff]" />
              {t.text}
            </span>
          ))}
        </div>
      </PageHero>

      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 pb-20 md:pb-28">
        {/* Mit tartalmaz */}
        <section className="pt-4 md:pt-8">
          <h2 className="font-display text-[26px] sm:text-[32px] font-semibold text-[color:var(--heading)] mb-3">
            Mit tartalmaz egy webáruház nálunk?
          </h2>
          <p className="text-[15.5px] text-[color:var(--muted)] leading-relaxed max-w-[46rem] mb-10">
            Nem sablont húzunk rád. Azt építjük meg, amire a te termékeidhez és a te
            működésedhez szükség van — és amit utána magad is tudsz kezelni.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {includes.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[color:var(--primary-dim)] mb-4">
                  <item.Icon size={20} className="text-[color:var(--primary)]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[color:var(--heading)] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[color:var(--muted)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Folyamat */}
        <section className="pt-16 md:pt-24">
          <h2 className="font-display text-[26px] sm:text-[32px] font-semibold text-[color:var(--heading)] mb-3">
            Hogyan zajlik?
          </h2>
          <p className="text-[15.5px] text-[color:var(--muted)] leading-relaxed max-w-[46rem] mb-10">
            Négy lépés, és mindegyiknél tudod, hol tartunk. Jóváhagyás nélkül nem
            megyünk tovább.
          </p>

          <ol className="grid sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="card p-6 flex gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[color:var(--primary-dim)] text-[color:var(--primary)] text-[14px] font-bold shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-1">{s.title}</h3>
                  <p className="text-[13.5px] text-[color:var(--muted)] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Ár */}
        <section className="pt-16 md:pt-24">
          <div className="card p-8 sm:p-10">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[color:var(--heading)] mb-3">
                  Mennyibe kerül?
                </h2>
                <p className="text-[15px] text-[color:var(--muted)] leading-relaxed mb-5 max-w-[34rem]">
                  A webáruház <strong className="text-[color:var(--heading)]">424 990 Ft-tól</strong> indul.
                  A végleges árat a termékek száma, a fizetési és szállítási módok, valamint
                  a külső rendszerekhez való kapcsolódás határozza meg. Amit az ajánlatban
                  látsz, az a végső ár.
                </p>
                <ul className="space-y-2">
                  {['Nincs óradíj, nincs utólagos számlázás', 'Nincs kötelező havidíj', 'A határidő az ajánlat része'].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-[color:var(--muted)]">
                      <Check size={16} className="text-[color:var(--primary)] mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 md:min-w-[220px]">
                <Link href="/ajanlat" className="btn-primary !py-3.5 justify-center">
                  Ingyenes ajánlatot kérek
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:+36302697632" className="btn-secondary !py-3.5 justify-center">
                  <Phone size={16} />
                  06 30 269 7632
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GYIK */}
        <section className="pt-16 md:pt-24">
          <h2 className="font-display text-[26px] sm:text-[32px] font-semibold text-[color:var(--heading)] mb-10">
            Gyakori kérdések
          </h2>
          <div className="space-y-4 max-w-[52rem]">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="text-[15.5px] font-semibold text-[color:var(--heading)] mb-2">{f.q}</h3>
                <p className="text-[14px] text-[color:var(--muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kapcsolódó */}
        <section className="pt-16 md:pt-24">
          <div className="rounded-xl p-8 sm:p-10 text-center" style={{ background: 'var(--hero-grad)' }}>
            <h2 className="font-display text-[22px] sm:text-[26px] font-semibold text-white mb-3">
              Nem biztos, hogy webáruház kell?
            </h2>
            <p className="text-[14.5px] text-white/70 max-w-[34rem] mx-auto mb-7 leading-relaxed">
              Írd meg, mit árulsz és kiknek. Ha kiderül, hogy egy egyszerűbb oldal is
              elég, azt fogjuk mondani — nem adunk el neked feleslegeset.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ajanlat" className="btn-primary !bg-white !text-[#2f2b66] hover:!bg-white/90">
                Ajánlatot kérek
                <ArrowRight size={16} />
              </Link>
              <Link href="/" className="btn-outline-white">
                Mit csinálunk még?
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCtaBar />
    </div>
  );
}
