import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Adatvédelmi Nyilatkozat | Nexuscode',
  description: 'Adatvédelmi szabályzat és cookie-k használata. GDPR kompatibilis adatkezelés.',
  robots: {
    index: true,
    follow: true,
  },
};

const h2 = 'font-display text-[20px] font-semibold text-[color:var(--heading)] mb-3';
const p = 'text-[14.5px] text-[color:var(--foreground)] leading-relaxed';
const list = 'list-disc list-outside pl-5 space-y-2 text-[14.5px] text-[color:var(--foreground)] leading-relaxed';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <Header current="" />

      <PageHero label="Jogi információk" title="Adatvédelmi nyilatkozat" lead="Utoljára frissítve: 2026. január 31." />

      <main className="max-w-[760px] mx-auto px-5 sm:px-8 pb-20 md:pb-28 pt-2 md:pt-6">
        <div className="space-y-10">
          <section>
            <h2 className={h2}>1. Általános információk</h2>
            <p className={p}>
              A Nexuscode (üzemeltető: Nagy Norbert József E.V., a továbbiakban: &quot;mi&quot;, &quot;miénk&quot;, &quot;minket&quot;) elkötelezett a
              személyes adatok védelme iránt. Ez az adatvédelmi nyilatkozat ismerteti, hogyan gyűjtjük, használjuk és
              védjük az Ön személyes adatait, amikor weboldalunkat használja.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Adatkezelő adatai</h2>
            <div className="card p-6 text-[14.5px] text-[color:var(--foreground)] leading-relaxed space-y-1">
              <p><strong className="text-[color:var(--heading)]">Név:</strong> Nagy Norbert József E.V.</p>
              <p><strong className="text-[color:var(--heading)]">Adószám:</strong> 57631336-1-36</p>
              <p><strong className="text-[color:var(--heading)]">E-mail:</strong> hello@nexuscode.hu</p>
              <p><strong className="text-[color:var(--heading)]">Telefon:</strong> +36 30 993 2454</p>
              <p><strong className="text-[color:var(--heading)]">Weboldal:</strong> nexuscode.hu</p>
            </div>
          </section>

          <section>
            <h2 className={h2}>3. Milyen adatokat gyűjtünk?</h2>
            <ul className={list}>
              <li><strong className="text-[color:var(--heading)]">Kapcsolati adatok:</strong> név, email cím, telefonszám (amikor űrlapot tölt ki)</li>
              <li><strong className="text-[color:var(--heading)]">Technikai adatok:</strong> IP cím, böngésző típusa, eszköz információk</li>
              <li><strong className="text-[color:var(--heading)]">Cookie-k:</strong> látogatási adatok, preferenciák (részletek lent)</li>
              <li><strong className="text-[color:var(--heading)]">Projektre vonatkozó információk:</strong> amit az ajánlatkérő űrlapon megad</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>4. Miért gyűjtjük az adatokat?</h2>
            <ul className={list}>
              <li>Ajánlatkérések kezelése és válaszadás</li>
              <li>Szolgáltatásaink nyújtása és fejlesztése</li>
              <li>Kommunikáció az ügyfelekkel</li>
              <li>Weboldal működésének biztosítása és optimalizálása</li>
              <li>Jogi kötelezettségek teljesítése</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>5. Cookie-k (sütik)</h2>
            <p className={`${p} mb-4`}>
              Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében. A cookie-k kis szöveges fájlok,
              amelyeket a böngészője tárol.
            </p>
            <div className="space-y-3">
              <div className="card p-5">
                <h3 className="text-[14.5px] font-semibold text-[color:var(--heading)] mb-1">Szükséges cookie-k</h3>
                <p className="text-[13.5px] text-[color:var(--muted)]">Ezek nélkül a weboldal nem működik megfelelően. Nem kapcsolhatók ki.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-[14.5px] font-semibold text-[color:var(--heading)] mb-1">Analitikai cookie-k (Google Analytics)</h3>
                <p className="text-[13.5px] text-[color:var(--muted)]">Segítenek megérteni, hogyan használják látogatóink az oldalt. Anonim statisztikák.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={h2}>6. Google Analytics</h2>
            <p className={p}>
              Weboldalunk a Google Analytics szolgáltatást használja a látogatói statisztikák gyűjtésére. A Google
              Analytics cookie-kat használ, amelyek névtelen információkat gyűjtenek. Az IP címek anonimizálva vannak.
              További információ:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--primary)] hover:underline underline-offset-4"
              >
                Google Adatvédelmi Szabályzat
              </a>
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Adatok megosztása</h2>
            <p className={p}>
              Személyes adatait <strong className="text-[color:var(--heading)]">nem adjuk el</strong> harmadik félnek.
              Adatait csak az alábbi esetekben osztjuk meg:
            </p>
            <ul className={`${list} mt-3`}>
              <li>Jogi kötelezettség esetén (bíróság, hatóság megkeresésére)</li>
              <li>Szolgáltatásaink működéséhez szükséges partnerek (pl. tárhely szolgáltató)</li>
              <li>Az Ön kifejezett hozzájárulásával</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>8. Az Ön jogai (GDPR)</h2>
            <ul className={list}>
              <li><strong className="text-[color:var(--heading)]">Hozzáférés:</strong> kérheti, hogy közöljük, milyen adatokat kezelünk Önről</li>
              <li><strong className="text-[color:var(--heading)]">Helyesbítés:</strong> kérheti adatai javítását</li>
              <li><strong className="text-[color:var(--heading)]">Törlés:</strong> kérheti adatai törlését (&quot;elfeledtetéshez való jog&quot;)</li>
              <li><strong className="text-[color:var(--heading)]">Korlátozás:</strong> kérheti adatkezelésünk korlátozását</li>
              <li><strong className="text-[color:var(--heading)]">Hordozhatóság:</strong> kérheti adatai géppel olvasható formátumban</li>
              <li><strong className="text-[color:var(--heading)]">Tiltakozás:</strong> tiltakozhat bizonyos adatkezelések ellen</li>
            </ul>
            <p className={`${p} mt-3`}>
              Jogai gyakorlásához írjon nekünk:{' '}
              <a href="mailto:hello@nexuscode.hu" className="text-[color:var(--primary)] hover:underline underline-offset-4">
                hello@nexuscode.hu
              </a>
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Adatbiztonság</h2>
            <p className={p}>
              Megfelelő technikai és szervezési intézkedéseket alkalmazunk személyes adatainak védelme érdekében.
              Weboldalunk HTTPS titkosítást használ, és adatait biztonságos szervereken tároljuk.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Adatmegőrzés</h2>
            <p className={p}>
              Személyes adatait csak addig őrizzük, amíg az az adatkezelés céljának eléréséhez szükséges, vagy amíg azt
              jogszabály előírja. Ajánlatkérések esetén maximum 2 évig őrizzük az adatokat.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Változások</h2>
            <p className={p}>
              Fenntartjuk a jogot, hogy jelen adatvédelmi nyilatkozatot bármikor módosítsuk. A módosításokat ezen az
              oldalon tesszük közzé, és az &quot;Utoljára frissítve&quot; dátumot frissítjük.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Kapcsolat</h2>
            <div className="card p-6 text-[14.5px] text-[color:var(--foreground)] leading-relaxed space-y-1">
              <p className="mb-2">Ha kérdése van adatvédelmi gyakorlatunkkal kapcsolatban:</p>
              <p>
                <strong className="text-[color:var(--heading)]">Email:</strong>{' '}
                <a href="mailto:hello@nexuscode.hu" className="text-[color:var(--primary)] hover:underline underline-offset-4">
                  hello@nexuscode.hu
                </a>
              </p>
              <p><strong className="text-[color:var(--heading)]">Telefon:</strong> +36 30 993 2454</p>
              <p><strong className="text-[color:var(--heading)]">Elérhetőség:</strong> minden nap 8–22 óra között</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
