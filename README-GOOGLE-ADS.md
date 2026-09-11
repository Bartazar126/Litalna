# Google Ads: mit mérj, mit állíts át

Ez a dokumentum a 2026. szeptemberi átvizsgálás alapján készült, a 10 napos,
napi 5.000 Ft-os keresési kampány adataiból (CPC 353 Ft, ~142 kattintás,
1 gyenge ajánlatkérés).

---

## 1. A diagnózis röviden

**A konverziómérés nem működött.** Nem részben: gyakorlatilag egyáltalán nem.
Három hiba egymásra rakódva:

1. A `gtag.js` könyvtár PageSpeed-optimalizálás miatt csak az első
   kattintásra/görgetésre, vagy 6 másodperc után töltődött be. A köszönőoldalon
   a látogató nem görget és nem kattint, sokszor 6 mp-en belül távozik, így
   a konverzió benne ragadt a várólistában, és soha nem ért el a Google-höz.
2. A `router.push('/koszonjuk')` átirányítás eldobta a `gclid`-et az URL-ből,
   vagyis a hirdetéskattintás azonosítója elveszett.
3. A cookie-sáv szintén csak 6 mp után jelent meg, tehát a Consent Mode
   végig `denied` állapotban volt. Süti nélkül, gclid nélkül a Google-nak
   semmi nem maradt, amivel a leadet a kattintáshoz köthette volna.

Emiatt a "Kattintások maximalizálása" stratégia pontosan azt csinálta, amire
kérted: a **legolcsóbb** kattintásokat vette meg. A 353 Ft-os CPC ebben a
piacon nem jó hír, hanem tünet: a komoly, vásárlási szándékú kulcsszavakon
("weboldal készítés cégeknek", "webáruház készítés") 600–1.000 Ft körül van
a valós kattintási ár. A 353 Ft azt jelzi, hogy a forgalom java olcsó,
alacsony szándékú keresésekből jött: érdeklődők, tanulók, konkurens
fejlesztők, ingyenes megoldást keresők.

**Ezt a kódban javítottam.** Az Ads-fiókban viszont neked kell beállítani
néhány dolgot, különben a javított mérés sem ér semmit.

---

## 2. Azonnali teendők az Ads-fiókban (ebben a sorrendben)

### 2.1. Ellenőrizd, hogy a Display-hálózat ki van-e kapcsolva ⚠️

Ez az első dolog, amit meg kell nézned. Új keresési kampánynál a Google
alapból bepipálja a **"Display-hálózat bevonása"** és a **"Keresési partnerek"**
opciókat. Ha bármelyik be van kapcsolva, onnan jön a rengeteg olcsó,
használhatatlan kattintás, és ez önmagában megmagyarázza a 353 Ft-os CPC-t.

> Kampány → Beállítások → Hálózatok → **vedd ki a pipát mindkettőből.**

### 2.2. Földrajzi célzás: "Jelenlét", ne "jelenlét vagy érdeklődés"

Szintén alapbeállítás, szintén sok szemetet hoz: ilyenkor a Google annak is
megmutatja a hirdetést, aki külföldön van, de "érdeklődik Magyarország iránt".

> Kampány → Beállítások → Helyszínek → Beállítások → **"Jelenlét: azok, akik
> a célzott helyen tartózkodnak"**

### 2.3. Kulcsszóegyezés: csak kifejezés és pontos

Ha széles egyezésű (broad) kulcsszavak vannak a fiókban, állítsd le őket.
Konverziómérés nélkül a széles egyezés + Kattintások maximalizálása a
legrosszabb kombináció, ami létezik.

### 2.4. Nézd át a keresési kifejezéseket

> Kulcsszavak → **Keresési kifejezések**

Itt látod, mire kerestek valójában az emberek. Minden olyan kifejezést, ami
nem fizető ügyfél, tegyél negatívba. Ez a legfontosabb heti rutin.

### 2.5. Kapcsold be az Enhanced Conversions-t

A kód már küldi hozzá az e-mail címet és a telefonszámot (a Google a
böngészőben hasheli, nyers adat nem megy sehova). A fiókban engedélyezni kell:

> Eszközök → Konverziók → válaszd ki az ajánlatkérés-konverziót →
> **Továbbfejlesztett konverziók** → bekapcsol → módszer: **Google-címke** →
> fogadd el az ügyféladat-feltételeket.

Ez azért fontos, mert így akkor is összeáll a kattintás és a lead, ha a
látogató elutasítja a sütiket.

### 2.6. Állítsd át a konverzió értékét és számlálását

> A konverziós művelet beállításai:
> - **Számlálás: Egy** (egy ajánlatkérő egy lead, nem kettő)
> - **Érték:** a kód most 20.000 Ft-ot küld leadenként. Ezt írd át arra,
>   amennyit egy ajánlatkérés nálad tényleg ér:
>   *átlagos projektméret × hány százalékból lesz ügyfél*.
>   (Pl. 200.000 Ft átlag × 10% zárás = 20.000 Ft.)
>   A számot a `lib/tracking.ts` fájl `LEAD_VALUE_HUF` sorában tudod állítani.
> - **Elsődleges művelet**, hogy az ajánlattétel erre optimalizáljon.

### 2.7. Hirdetésütemezés

Szolgáltatást adsz el, ahol számít a visszahívás. Ha nem tudsz éjjel
válaszolni, ne is fizess az éjszakai kattintásokért.

> Kampány → Hirdetésütemezés → pl. **H–P 7:00–21:00, Szo–V 9:00–20:00**

---

## 3. Negatív kulcsszavak (másold be egyben)

> Kampány → Kulcsszavak → Negatív kulcsszavak → Kampányszintű lista

Ezek nagy részét kifejezés-egyezéssel érdemes felvenni (idézőjelben).

```text
"ingyen"
"ingyenes"
"free"
"olcsó"
"legolcsóbb"
"filléres"
"házilag"
"saját magam"
"magamnak"
"hogyan kell"
"hogyan csináljak"
"mit jelent"
"mi az a"
"tanfolyam"
"képzés"
"oktatás"
"tanulás"
"tanulni"
"iskola"
"kurzus"
"videó"
"youtube"
"oktatóanyag"
"tutorial"
"állás"
"munka"
"fizetés"
"karrier"
"gyakornok"
"junior"
"freelancer"
"szakdolgozat"
"minta"
"sablon"
"template"
"wordpress sablon"
"letöltés"
"wix"
"webnode"
"shoprenter"
"unas"
"squarespace"
"google sites"
"blogger"
"tárhely"
"domain vásárlás"
"domain regisztráció"
"email cím készítés"
"vélemények"
"tapasztalat"
"fórum"
"reddit"
"pdf"
"könyv"
```

**Ezen kívül heti rendszerességgel** nézd át a Keresési kifejezések jelentést,
és vedd fel a fentiekhez, ami nem odaillő.

---

## 4. Kampánystruktúra

Egy hirdetéscsoportba egy témát tegyél. Így a hirdetésszöveg tud pontosan
arra válaszolni, amit kerestek, és nő a minőségi mutató (= olcsóbb kattintás
és jobb pozíció ugyanazért a pénzért).

### Hirdetéscsoport 1: weboldal készítés (pontos egyezés)

```text
[weboldal készítés]
[honlapkészítés]
[weboldal készítés ár]
[honlapkészítés ár]
[weboldal készítés cégeknek]
[céges weboldal készítés]
[egyedi weboldal készítés]
[weboldal készítés vállalkozásoknak]
```
Céloldal: `/ajanlat`

### Hirdetéscsoport 2: webáruház

```text
[webáruház készítés]
[webshop készítés]
[webáruház készítés ár]
[online bolt készítés]
"webáruház készítés"
"webshop készítés árak"
```
Céloldal: `/ajanlat`

### Hirdetéscsoport 3: meglévő oldal felújítása

```text
[weboldal felújítás]
[honlap felújítás]
[weboldal modernizálás]
"weboldal újratervezés"
"régi weboldal cseréje"
```
Céloldal: `/ajanlat`

> A `/ajanlat` legyen a céloldal, ne a főoldal. Ott rögtön az űrlap van,
> nem kell hozzá görgetni.

---

## 5. Hirdetésszövegek

Fontos változás a korábbiakhoz képest: **ne a legalacsonyabb árral nyiss.**
A "80e Ft-tól" pont azokat vonzza be, akik a legolcsóbbat keresik, és pont
azt a benyomást kelti, hogy olcsó munkát végzel. Az árat a céloldal mondja
meg, a hirdetés a biztonságról és a gyorsaságról szóljon.

**Címsorok (max 30 karakter):**

```text
Weboldal Készítés Fix Áron
Kész Weboldal 1-2 Hét Alatt
Fix Ár, Fix Határidő, Írásban
Céges Weboldal Készítés
Válasz 24 Órán Belül
Nem Tűnünk El Átadás Után
Magyar Fejlesztőcsapat
Ingyenes, Kötelezettségmentes
Modern, Gyors Weboldalak
Kérj Ajánlatot 1 Perc Alatt
```

**Leírások (max 90 karakter):**

```text
Fix áras ajánlat írásban, 24 órán belül. Nincs rejtett költség, nincs havidíj.
Jóváhagyott terv nélkül nem kezdünk fejleszteni. A határidőt az ajánlat rögzíti.
Gyors, mobilbarát, Google-barát oldalak. Átadás után is elérsz minket, 8-22-ig.
Mondd el, mire van szükséged, és személyre szabott ajánlatot kapsz. Semmire nem kötelez.
```

**Bővítmények** (ingyen növelik a hirdetés méretét, mindet vedd fel):

- Belső linkek: Áraink (`/#arak`) · Munkáink (`/#munkaink`) · Gyakori kérdések (`/#gyik`) · Ajánlatkérés (`/ajanlat`)
- Kiemelők: „1–2 hét átfutás" · „Fix ár, írásban" · „24 órás válaszidő" · „Nincs havidíj" · „Magyar csapat"
- **Hívásbővítmény:** 06 30 269 7632 (ez fontos, mobilon sokan inkább hívnak)
- Strukturált kivonat – Szolgáltatások: Weboldal, Webáruház, Egyedi rendszer, SEO, Karbantartás

---

## 6. Ajánlattételi stratégia: mikor mit

| Szakasz | Mikor | Stratégia |
|---|---|---|
| Most | 0 mért konverzió | **Kattintások maximalizálása**, de max. CPC korláttal (kb. 700 Ft), szűk, pontos egyezésű kulcsszavakkal |
| 2–4 hét múlva | 15+ mért konverzió / 30 nap | **Konverziók maximalizálása** |
| 4–8 hét múlva | 30+ konverzió / 30 nap | **Cél-CPA**, a tényleges CPA alá kb. 10–20%-kal |

Ne állítsd át korábban: kevés adaton az automata stratégiák rosszabbul
teljesítenek, mint a kézi.

Számíts arra, hogy a jó kattintás drágább lesz. Napi 5.000 Ft-ból 700 Ft-os
CPC mellett 7 kattintás jön, nem 14 — viszont olyan emberektől, akik
tényleg weboldalt akarnak venni.

---

## 7. Offline konverzió: a legerősebb fegyver, ha van rá időd

Az ajánlatkérő e-mailekben mostantól ott a **GCLID** és a **Lead azonosító**.
Ha egy leadből tényleg ügyfél lesz, töltsd vissza a Google-be:

> Eszközök → Konverziók → **Feltöltések** → offline konverzió CSV-vel
> (GCLID + konverzió neve + időpont + valós érték)

Ettől a Google már nem az űrlapkitöltésre optimalizál, hanem a **megkötött
üzletre**. Ez az, amivel el lehet érni, hogy tényleg komoly emberek jöjjenek.

---

## 8. Mit ellenőrizz élesítés után

1. Nyisd meg inkognitóban: `https://www.nexuscode.hu/ajanlat?gclid=TESZT123`
2. Töltsd ki az űrlapot egy saját címeddel.
3. Az e-mailnek meg kell érkeznie, benne a „HONNAN JÖTT" blokkal
   (Csatorna: Google Ads, GCLID: TESZT123).
4. Google Ads → Eszközök → Konverziók: a konverziónak **„Aktív"**
   státuszúnak kell lennie néhány órán belül (nem „Nincs friss konverzió").
5. Ha van Google Tag Assistant: a `conversion` eseménynek azonnal el kell
   mennie, nem 6 másodperc múlva.

---

## 9. Amit nem az Ads-ben kell megoldani

- **Google Cégprofil** (Google Business Profile): ingyenes, és helyi
  keresésre hoz forgalmat. Még nincs beállítva.
- **Valódi értékelések**: a céloldalon lévő vélemények sokat érnek, de a
  Google strukturált adatban csak akkor engedi megjeleníteni, ha hitelesek.
  Kérj értékelést a meglévő ügyfelektől a Cégprofilra.
- **Blog**: a cikkek eddig technikai hiba miatt nem kerülhettek be a
  Google találatai közé (mindegyik a főoldalra kanonizált). Ezt javítottam,
  de az indexelés heteket vesz igénybe.
