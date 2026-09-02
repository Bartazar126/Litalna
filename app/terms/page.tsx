import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek (ÁSZF) | Nexuscode',
  description: 'Általános Szerződési Feltételek weboldal fejlesztési szolgáltatásainkhoz.',
  robots: {
    index: true,
    follow: true,
  },
};

const h2 = 'font-display text-[20px] font-semibold text-[color:var(--heading)] mb-3';
const p = 'text-[14.5px] text-[color:var(--foreground)] leading-relaxed';
const list = 'list-disc list-outside pl-5 space-y-2 text-[14.5px] text-[color:var(--foreground)] leading-relaxed';
const strong = 'text-[color:var(--heading)]';

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Header current="" />

      <PageHero label="Jogi információk" title="Általános Szerződési Feltételek" lead="Hatályos: 2026. január 31-től" />

      <main className="max-w-[760px] mx-auto px-5 sm:px-8 pb-20 md:pb-28 pt-2 md:pt-6">
        <div className="space-y-10">
          <section>
            <h2 className={h2}>1. A Szolgáltató adatai</h2>
            <div className="card p-6 text-[14.5px] text-[color:var(--foreground)] leading-relaxed space-y-1">
              <p><strong className={strong}>Név:</strong> Nagy Norbert József E.V. (Nexuscode)</p>
              <p><strong className={strong}>Adószám:</strong> 57631336-1-36</p>
              <p><strong className={strong}>E-mail:</strong> hello@nexuscode.hu</p>
              <p><strong className={strong}>Telefon:</strong> +36 30 993 2454</p>
              <p><strong className={strong}>Weboldal:</strong> nexuscode.hu</p>
              <p><strong className={strong}>Elérhetőség:</strong> minden nap 8–22 óra között</p>
            </div>
          </section>

          <section>
            <h2 className={h2}>2. Általános rendelkezések</h2>
            <p className={p}>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Nexuscode (Nagy Norbert József E.V.) által
              nyújtott weboldal fejlesztési szolgáltatások igénybevételére vonatkozó feltételeket határozzák meg.
            </p>
            <p className={`${p} mt-3`}>A szolgáltatás igénybevételével az Ügyfél elfogadja jelen ÁSZF-ben foglalt feltételeket.</p>
          </section>

          <section>
            <h2 className={h2}>3. Szolgáltatások</h2>
            <p className={`${p} mb-4`}>A Szolgáltató az alábbi szolgáltatásokat nyújtja:</p>
            <div className="space-y-3">
              <div className="card p-5">
                <h3 className="text-[14.5px] font-semibold text-[color:var(--heading)] mb-1">Alap csomag (80 000 Ft-tól)</h3>
                <p className="text-[13.5px] text-[color:var(--muted)]">1–5 aloldal, responsive design, SEO alapok, kapcsolati űrlap.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-[14.5px] font-semibold text-[color:var(--heading)] mb-1">Prémium csomag (149 990 Ft-tól)</h3>
                <p className="text-[13.5px] text-[color:var(--muted)]">5–15 aloldal, komplex dizájn, teljes SEO, blog rendszer, admin dashboard.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-[14.5px] font-semibold text-[color:var(--heading)] mb-1">Webshop csomag (424 990 Ft-tól)</h3>
                <p className="text-[13.5px] text-[color:var(--muted)]">Online fizetés, készletkezelés, rendeléskezelés, admin panel.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={h2}>4. Ajánlatkérés és szerződéskötés</h2>
            <ul className={list}>
              <li>Az ajánlatkérő űrlap kitöltésével az Ügyfél ajánlatot kér.</li>
              <li>A Szolgáltató hamar válaszol részletes árajánlattal.</li>
              <li>A szerződés az árajánlat írásbeli (email) elfogadásával jön létre.</li>
              <li>A projekt 24–48 órán belül indul a szerződéskötés után.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>5. Árak és fizetési feltételek</h2>
            <ul className={list}>
              <li>Az árak nettó árak, hozzáadódik a mindenkori ÁFA.</li>
              <li>A megadott árak kiindulási árak, a végleges ár a projekt komplexitásától függ.</li>
              <li><strong className={strong}>Előleg:</strong> a projekt indításához 50% előleg szükséges.</li>
              <li><strong className={strong}>Fennmaradó összeg:</strong> a projekt átadásakor fizetendő.</li>
              <li>Fizetési mód: banki átutalás.</li>
              <li>Nincs havi fenntartási díj, egyszeri fizetés.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>6. Teljesítési határidők</h2>
            <ul className={list}>
              <li><strong className={strong}>Alap csomag:</strong> 1 hét</li>
              <li><strong className={strong}>Prémium csomag:</strong> 1–2 hét</li>
              <li><strong className={strong}>Webshop csomag:</strong> 2–3 hét</li>
              <li>A határidők a projekt indításától számítva értendők.</li>
              <li>Egyedi projekteknél a határidőt külön egyeztetjük.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>7. Ügyfél kötelezettségei</h2>
            <ul className={list}>
              <li>Időben biztosítja a szükséges tartalmakat (szövegek, képek).</li>
              <li>Válaszol a Szolgáltató megkereséseire 48 órán belül.</li>
              <li>Átadott anyagok használati jogával rendelkezik.</li>
              <li>Az előleg és végösszeg határidőre történő megfizetése.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>8. Garanciális feltételek</h2>
            <ul className={list}>
              <li><strong className={strong}>Garancia időszak:</strong> 30 nap az átadástól számítva.</li>
              <li>Garancia idő alatt ingyenes hibajavítás (bug-ok).</li>
              <li>Új funkciók fejlesztése külön megbeszélés és árazás szerint.</li>
              <li>Ingyenes karbantartás a projekt után (kisebb módosítások).</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>9. Szerzői jogok</h2>
            <p className={`${p} mb-3`}>
              <strong className={strong}>Átadáskor:</strong> a weboldal szerzői jogai átszállnak az Ügyfélre a teljes
              összeg kifizetése után.
            </p>
            <p className={p}>
              <strong className={strong}>Portfólió:</strong> a Szolgáltató jogosult a kész projektet portfóliójában
              megjeleníteni, az Ügyfél előzetes hozzájárulása alapján.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Felelősség korlátozása</h2>
            <ul className={list}>
              <li>A Szolgáltató nem felel az Ügyfél által szolgáltatott tartalmakért.</li>
              <li>Nem felelünk harmadik fél szolgáltatásainak hibájáért (tárhely, domain, stb.).</li>
              <li>Vis maior esetén nem vonható felelősségre egyik fél sem.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>11. Elállási jog</h2>
            <p className={`${p} mb-3`}>
              <strong className={strong}>Ügyfél:</strong> 14 napon belül elállhat a szerződéstől, ha a munka még nem
              kezdődött meg. Megkezdett munka esetén az elvégzett munka arányos részét ki kell fizetni.
            </p>
            <p className={p}>
              <strong className={strong}>Szolgáltató:</strong> a Szolgáltató jogosult elállni, ha az Ügyfél nem
              teljesíti kötelezettségeit (nem fizet, nem ad tartalmat 30 napon belül). Ebben az esetben az előleg nem
              jár vissza.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Vitarendezés</h2>
            <p className={p}>
              Felek kötelezettséget vállalnak, hogy esetleges vitáikat elsősorban békés úton, tárgyalás útján próbálják
              rendezni. Amennyiben ez nem vezet eredményre, a magyar jog az irányadó, a hatáskörrel és illetékességgel
              rendelkező magyar bíróságok járnak el.
            </p>
          </section>

          <section>
            <h2 className={h2}>13. Egyéb rendelkezések</h2>
            <ul className={list}>
              <li>Minden kommunikáció emailben vagy telefonon történik.</li>
              <li>Elérhetőség: minden nap 8–22 óra között, gyors válaszidővel.</li>
              <li>Az ÁSZF módosítását az Ügyfelek felé 15 nappal előre közöljük.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>14. Kapcsolat</h2>
            <div className="card p-6 text-[14.5px] text-[color:var(--foreground)] leading-relaxed space-y-1">
              <p className="mb-2">Kérdés esetén keress minket bizalommal:</p>
              <p>
                <strong className={strong}>Email:</strong>{' '}
                <a href="mailto:hello@nexuscode.hu" className="text-[color:var(--primary)] hover:underline underline-offset-4">
                  hello@nexuscode.hu
                </a>
              </p>
              <p><strong className={strong}>Telefon:</strong> +36 30 993 2454</p>
              <p><strong className={strong}>Elérhetőség:</strong> minden nap 8–22 óra között</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
