# Google Ads Kampány Indítási Útmutató (Nexuscode) 🚀

Ez a dokumentum tartalmazza a **Google Ads** kampányod azonnali elindításához szükséges összes adatot.

## 1. Nulladik Lépés: ELLENŐRZÉS ⚠️

Mielőtt elindítod a hirdetést (és pénzt költesz), győződj meg róla, hogy az űrlapok működnek:

1.  Nyisd meg a [nexuscode.hu](https://nexuscode.hu) oldalt inkognitó ablakban.
2.  Görgess le a **Kapcsolat** részhez.
3.  Töltsd ki az űrlapot egy teszt email címmel.
4.  Nézd meg, hogy **megérkezik-e az email** a saját fiókodba.
    *   *Ha NEM jön meg:* A Vercel-en nincsenek beállítva az `EMAIL_USER` és `EMAIL_PASS` változók. Ezt pótold azonnal!

## 2. Kampány Beállítások ⚙️

*   **Kampány Típus:** Keresési hálózat (Search Network)
*   **Cél:** Értékesítés (Sales) vagy Leadek (Leads)
*   **Helyszín:** Magyarország (vagy csak célzott megyék, pl. Budapest, Pest megye, Jász-Nagykun-Szolnok)
*   **Nyelv:** Magyar
*   **Napi Költségkeret:** 2.000 - 3.000 Ft (kezdetnek)
*   **Ajánlattételi stratégia:** Kattintások maximalizálása (Maximize Clicks) – *később átállíthatod Konverziókra, ha már van elég adat.*

## 3. Kulcsszavak (Keywords) 🔑

Ezeket másold be a hirdetéscsoportba (Ad Group). A zárójelek fontosak!

**Pontos egyezés (Exact Match) - A legrelevánsabb:**
```text
[weboldal készítés]
[honlapkészítés]
[weboldal fejlesztés]
[egyedi weboldal készítés]
[céges weboldal készítés]
```

**Kifejezés egyezés (Phrase Match) - Kicsit tágabb:**
```text
"weboldal készítés árak"
"olcsó weboldal készítés"
"gyors honlapkészítés"
"weboldal készítés cégeknek"
```

## 4. Hirdetés Szövegek (Ad Copy) ✍️

A Google több variációt kér, ezeket keverni fogja.

**Címsorok (Headlines) - Max 30 karakter:**
*   Weboldal Készítés 80e Ft-tól
*   Kész Weboldal 1-2 Hét Alatt
*   Nexuscode - Webfejlesztés
*   Modern, Gyors Weboldalak
*   Kérj Ajánlatot 1 Perc Alatt
*   2-3 Óra Válaszidő

**Leírások (Descriptions) - Max 90 karakter:**
*   Profi weboldal fejlesztés rejtett költségek nélkül. Mobilbarát, Google-optimalizált.
*   Ne várj hónapokat! Mi 1-2 hét alatt elkészítjük álmaid weboldalát. Kérj ajánlatot most!
*   Next.js technológia a maximális sebességért. Megbízható csapat, garancia és support.
*   Indítsd el vállalkozásodat egy profi oldallal. Nettó 80.000 Ft-tól, teljes SEO-val.

## 5. Bővítmények (Extensions) ➕

Ezek növelik a hirdetés méretét (ingyen). Mindenképp add hozzá őket!

*   **Belső linkek (Sitelinks):**
    *   *Szöveg:* Áraink / *URL:* `https://nexuscode.hu/#pricing`
    *   *Szöveg:* Referenciák / *URL:* `https://nexuscode.hu/references`
    *   *Szöveg:* Rólunk / *URL:* `https://nexuscode.hu/#why-us`
    *   *Szöveg:* Ajánlatkérés / *URL:* `https://nexuscode.hu/ajanlat`
*   **Kiemelő bővítmények (Callouts):**
    *   "1-2 hét átfutás"
    *   "2-3 óra válaszidő"
    *   "Fix árak"
    *   "Mobilbarát design"

## 6. Mérés (Tracking) 📊

A konverzió akkor történik meg, amikor valaki kitölti az ajánlatkérő űrlapot.
*   Mi ezt már beállítottuk: Sikeres kitöltés után a felhasználó a `/koszonjuk` oldalra kerül.
*   **Google Ads-ben:** Tools & Settings -> Conversions -> New Conversion Action -> Website -> Scan -> Add URL manually -> Page Load -> `/koszonjuk` -> Save.

---

**Sok sikert! Ha elakadnál, írj.** 🚀
