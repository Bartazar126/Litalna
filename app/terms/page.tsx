import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek (ÁSZF) | Nexuscode',
  description: 'Általános Szerződési Feltételek weboldal fejlesztési szolgáltatásainkhoz.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#111118] to-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="text-lg font-bold hover:text-blue-400 transition-colors">
            ← Vissza a főoldalra
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Általános Szerződési Feltételek
        </h1>
        <p className="text-gray-400 mb-12">Hatályos: 2026. január 31-től</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. A Szolgáltató adatai</h2>
            <div className="glass border border-blue-500/20 rounded-xl p-6">
              <p><strong>Név:</strong> Nagy Norbert E.V. (Nexuscode)</p>
              <p><strong>Adószám:</strong> 57631336-1-36</p>
              <p><strong>Székhely:</strong> 5300 Karcag, Kisújszállási út 44/D</p>
              <p><strong>E-mail:</strong> hello@nexuscode.hu</p>
              <p><strong>Telefon:</strong> +36 30 993 2454</p>
              <p><strong>Weboldal:</strong> nexuscode.hu</p>
              <p><strong>Elérhetőség:</strong> Minden nap 8-22 óra között</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Általános rendelkezések</h2>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Nexuscode (Nagy Norbert E.V.) által nyújtott 
              weboldal fejlesztési szolgáltatások igénybevételére vonatkozó feltételeket határozzák meg.
            </p>
            <p className="mt-4">
              A szolgáltatás igénybevételével az Ügyfél elfogadja jelen ÁSZF-ben foglalt feltételeket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Szolgáltatások</h2>
            <p className="mb-4">A Szolgáltató az alábbi szolgáltatásokat nyújtja:</p>
            <div className="space-y-4">
              <div className="glass border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Alap Csomag (80.000 Ft-tól)</h3>
                <p className="text-sm">1-5 aloldal, responsive design, SEO alapok, kapcsolati űrlap.</p>
              </div>
              <div className="glass border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Prémium Csomag (149.990 Ft-tól)</h3>
                <p className="text-sm">5-15 aloldal, komplex dizájn, teljes SEO, blog rendszer, admin dashboard.</p>
              </div>
              <div className="glass border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Webshop Csomag (424.990 Ft-tól)</h3>
                <p className="text-sm">Online fizetés, készletkezelés, rendeléskezelés, admin panel.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Ajánlatkérés és szerződéskötés</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Az ajánlatkérő űrlap kitöltésével az Ügyfél ajánlatot kér.</li>
              <li>A Szolgáltató hamar válaszol részletes árajánlattal.</li>
              <li>A szerződés az árajánlat írásbeli (email) elfogadásával jön létre.</li>
              <li>A projekt 24-48 órán belül indul a szerződéskötés után.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Árak és fizetési feltételek</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Az árak nettó árak, hozzáadódik a mindenkori ÁFA.</li>
              <li>A megadott árak kiindulási árak, a végleges ár a projekt komplexitásától függ.</li>
              <li><strong>Előleg:</strong> A projekt indításához 50% előleg szükséges.</li>
              <li><strong>Fennmaradó összeg:</strong> A projekt átadásakor fizetendő.</li>
              <li>Fizetési mód: banki átutalás.</li>
              <li>Nincs havi fenntartási díj, egyszeri fizetés.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Teljesítési határidők</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Alap csomag:</strong> 1 hét</li>
              <li><strong>Prémium csomag:</strong> 1-2 hét</li>
              <li><strong>Webshop csomag:</strong> 2-3 hét</li>
              <li>A határidők a projekt indításától számítva értendők.</li>
              <li>Egyedi projekteknél a határidőt külön egyeztetjük.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Ügyfél kötelezettségei</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Időben biztosítja a szükséges tartalmakat (szövegek, képek).</li>
              <li>Válaszol a Szolgáltató megkereséseire 48 órán belül.</li>
              <li>Átadott anyagok használati jogával rendelkezik.</li>
              <li>Az előleg és végösszeg határidőre történő megfizetése.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Garanciális feltételek</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Garancia időszak:</strong> 30 nap az átadástól számítva.</li>
              <li>Garancia idő alatt ingyenes hibajavítás (bug-ok).</li>
              <li>Új funkciók fejlesztése külön megbeszélés és árazás szerint.</li>
              <li>Ingyenes karbantartás a projekt után (kisebb módosítások).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Szerzői jogok</h2>
            <p className="mb-4">
              <strong>Átadáskor:</strong> A weboldal szerzői jogai átszállnak az Ügyfélre a teljes összeg kifizetése után.
            </p>
            <p>
              <strong>Portfólió:</strong> A Szolgáltató jogosult a kész projektet portfóliójában megjeleníteni, 
              az Ügyfél előzetes hozzájárulása alapján.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Felelősség korlátozása</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A Szolgáltató nem felel az Ügyfél által szolgáltatott tartalmakért.</li>
              <li>Nem felelünk harmadik fél szolgáltatásainak hibájáért (tárhely, domain, stb.).</li>
              <li>Vis maior esetén nem vonható felelősségre egyik fél sem.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Elállási jog</h2>
            <p className="mb-4">
              <strong>Ügyfél:</strong> 14 napon belül elállhat a szerződéstől, ha a munka még nem kezdődött meg. 
              Megkezdett munka esetén az elvégzett munka arányos részét ki kell fizetni.
            </p>
            <p>
              <strong>Szolgáltató:</strong> A Szolgáltató jogosult elállni, ha az Ügyfél nem teljesíti kötelezettségeit 
              (nem fizet, nem ad tartalmat 30 napon belül). Ebben az esetben az előleg nem jár vissza.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Vitarendezés</h2>
            <p>
              Felek kötelezettséget vállalnak, hogy esetleges vitáikat elsősorban békés úton, tárgyalás útján 
              próbálják rendezni. Amennyiben ez nem vezet eredményre, a magyar jog az irányadó, 
              a hatáskörrel és illetékességgel rendelkező magyar bíróságok járnak el.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Egyéb rendelkezések</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Minden kommunikáció emailben vagy telefonon történik.</li>
              <li>Elérhetőség: minden nap 8-22 óra között, gyors válaszidővel.</li>
              <li>Az ÁSZF módosítását az Ügyfelek felé 15 nappal előre közöljük.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Kapcsolat</h2>
            <div className="glass border border-blue-500/20 rounded-xl p-6">
              <p className="mb-2">Kérdés esetén keressen minket bizalommal:</p>
              <p><strong>Email:</strong> <a href="mailto:hello@nexuscode.hu" className="text-blue-400 hover:underline">hello@nexuscode.hu</a></p>
              <p><strong>Telefon:</strong> +36 30 993 2454</p>
              <p><strong>Elérhetőség:</strong> Minden nap 8-22 óra között</p>
              <p><strong>Válaszidő:</strong> Gyors</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/ajanlat"
            className="inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 mr-4"
          >
            Ajánlatot kérek
          </Link>
          <Link
            href="/"
            className="inline-block glass border border-blue-500/30 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-400/60 transition-all duration-300"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>
    </div>
  );
}
