import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adatvédelmi Nyilatkozat | Nexuscode',
  description: 'Adatvédelmi szabályzat és cookie-k használata. GDPR kompatibilis adatkezelés.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080b14] via-[#0f1529] to-[#080b14] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#080b14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="text-lg font-bold hover:text-blue-400 transition-colors">
            ← Vissza a főoldalra
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Adatvédelmi Nyilatkozat
        </h1>
        <p className="text-gray-400 mb-12">Utoljára frissítve: 2026. január 31.</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Általános információk</h2>
            <p>
              A Nexuscode (üzemeltető: Nagy Norbert E.V., a továbbiakban: "mi", "miénk", "minket") elkötelezett a személyes adatok védelme iránt. 
              Ez az adatvédelmi nyilatkozat ismerteti, hogyan gyűjtjük, használjuk és védjük az Ön személyes adatait, 
              amikor weboldalunkat használja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Adatkezelő adatai</h2>
            <div className="glass border border-blue-500/20 rounded-xl p-6">
              <p><strong>Név:</strong> Nagy Norbert E.V.</p>
              <p><strong>Adószám:</strong> 57631336-1-36</p>
              <p><strong>Székhely:</strong> 5300 Karcag, Kisújszállási út 44/D</p>
              <p><strong>E-mail:</strong> hello@nexuscode.hu</p>
              <p><strong>Telefon:</strong> +36 30 993 2454</p>
              <p><strong>Weboldal:</strong> nexuscode.hu</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Milyen adatokat gyűjtünk?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Kapcsolati adatok:</strong> név, email cím, telefonszám (amikor űrlapot tölt ki)</li>
              <li><strong>Technikai adatok:</strong> IP cím, böngésző típusa, eszköz információk</li>
              <li><strong>Cookie-k:</strong> Látogatási adatok, preferenciák (részletek lent)</li>
              <li><strong>Projektre vonatkozó információk:</strong> amit az ajánlatkérő űrlapon megad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Miért gyűjtjük az adatokat?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ajánlatkérések kezelése és válaszadás</li>
              <li>Szolgáltatásaink nyújtása és fejlesztése</li>
              <li>Kommunikáció az ügyfelekkel</li>
              <li>Weboldal működésének biztosítása és optimalizálása</li>
              <li>Jogi kötelezettségek teljesítése</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookie-k (Sütik)</h2>
            <p className="mb-4">
              Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében. A cookie-k kis szöveges fájlok, 
              amelyeket a böngészője tárol.
            </p>
            <div className="space-y-4">
              <div className="glass border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Szükséges cookie-k</h3>
                <p className="text-sm">Ezek nélkül a weboldal nem működik megfelelően. Nem kapcsolhatók ki.</p>
              </div>
              <div className="glass border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Analitikai cookie-k (Google Analytics)</h3>
                <p className="text-sm">Segítenek megérteni, hogyan használják látogatóink az oldalt. Anonim statisztikák.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Google Analytics</h2>
            <p>
              Weboldalunk a Google Analytics szolgáltatást használja a látogatói statisztikák gyűjtésére. 
              A Google Analytics cookie-kat használ, amelyek névtelen információkat gyűjtenek. 
              Az IP címek anonimizálva vannak. További információ: 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                Google Adatvédelmi Szabályzat
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Adatok megosztása</h2>
            <p>
              Személyes adatait <strong>nem adjuk el</strong> harmadik félnek. Adatait csak az alábbi esetekben osztjuk meg:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Jogi kötelezettség esetén (bíróság, hatóság megkeresésére)</li>
              <li>Szolgáltatásaink működéséhez szükséges partnerek (pl. tárhely szolgáltató)</li>
              <li>Az Ön kifejezett hozzájárulásával</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Az Ön jogai (GDPR)</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Hozzáférés:</strong> Kérheti, hogy közöljük, milyen adatokat kezelünk Önről</li>
              <li><strong>Helyesbítés:</strong> Kérheti adatai javítását</li>
              <li><strong>Törlés:</strong> Kérheti adatai törlését ("elfeledtetéshez való jog")</li>
              <li><strong>Korlátozás:</strong> Kérheti adatkezelésünk korlátozását</li>
              <li><strong>Hordozhatóság:</strong> Kérheti adatai géppel olvasható formátumban</li>
              <li><strong>Tiltakozás:</strong> Tiltakozhat bizonyos adatkezelések ellen</li>
            </ul>
            <p className="mt-4 text-blue-400">
              Jogai gyakorlásához írjon nekünk: <a href="mailto:hello@nexuscode.hu" className="hover:underline">hello@nexuscode.hu</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Adatbiztonság</h2>
            <p>
              Megfelelő technikai és szervezési intézkedéseket alkalmazunk személyes adatainak védelme érdekében. 
              Weboldalunk HTTPS titkosítást használ, és adatait biztonságos szervereken tároljuk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Adatmegőrzés</h2>
            <p>
              Személyes adatait csak addig őrizzük, amíg az az adatkezelés céljának eléréséhez szükséges, 
              vagy amíg azt jogszabály előírja. Ajánlatkérések esetén maximum 2 évig őrizzük az adatokat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Változások</h2>
            <p>
              Fenntartjuk a jogot, hogy jelen adatvédelmi nyilatkozatot bármikor módosítsuk. 
              A módosításokat ezen az oldalon tesszük közzé, és a "Utoljára frissítve" dátumot frissítjük.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Kapcsolat</h2>
            <div className="glass border border-blue-500/20 rounded-xl p-6">
              <p className="mb-2">Ha kérdése van adatvédelmi gyakorlatunkkal kapcsolatban:</p>
              <p><strong>Email:</strong> <a href="mailto:hello@nexuscode.hu" className="text-blue-400 hover:underline">hello@nexuscode.hu</a></p>
              <p><strong>Telefon:</strong> +36 30 993 2454</p>
              <p><strong>Elérhetőség:</strong> Minden nap 8-22 óra között</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>
    </div>
  );
}
