# Google Ads Optimalizálás - Konfiguráció

## ✅ Elkészült elemek

### 1. **Jogi oldalak (Google Ads követelmény)**
- ✅ `/privacy` - Adatvédelmi Nyilatkozat (GDPR kompatibilis)
- ✅ `/terms` - Általános Szerződési Feltételek (ÁSZF)
- ✅ Cookie Consent banner (CookieConsent.tsx komponens)

### 2. **Trust Signals**
- ✅ Trust Badges (TrustBadges.tsx): GDPR, SSL, Garancia, stb.
- ✅ Elérhetőségi információk minden oldalon
- ✅ Átlátható árazás 3 csomaggal
- ✅ Tiszta CTA gombok

### 3. **SEO & Performance**
- ✅ Structured Data (Schema.org) - Organization, Service, Offers
- ✅ Sitemap.xml (privacy, terms is benne)
- ✅ robots.txt
- ✅ Meta tagek optimalizálva minden oldalon
- ✅ Mobile-first design
- ✅ Fast loading (Next.js SSR, Image optimization)
- ✅ Compression enabled

### 4. **Tracking előkészítés**
- ✅ Google Tag Manager placeholder
- ✅ Google Ads Conversion Tracking placeholder
- ✅ Cookie consent management
- ✅ Analytics storage control

## 🔧 Teendők éles indulás előtt

### 1. **Google Tag Manager beállítása**

Fájl: `app/layout.tsx`

Cseréld le a `GTM-XXXXXX` kódot a saját GTM ID-dre:

```typescript
// 30. sor körül
})(window,document,'script','dataLayer','GTM-XXXXXX');  // <-- IDE
```

```typescript
// 77. sor körül
src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"  // <-- IDE
```

### 2. **Google Ads Conversion Tracking**

Fájl: `app/layout.tsx`

Cseréld le az `AW-XXXXXXXXXX` kódot a Google Ads Conversion ID-dre:

```typescript
// 40-45. sor körül
src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"  // <-- IDE

gtag('config', 'AW-XXXXXXXXXX');  // <-- IDE
```

### 3. **Google Analytics property**

Ha külön GA4 property-t is használsz:

```typescript
gtag('config', 'G-XXXXXXXXXX');  // GA4 Measurement ID
```

### 4. **Conversion események**

Ajánlatkérő űrlap (`app/ajanlat/page.tsx`):

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Google Ads Conversion
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXXX/YYYYYYY',  // Conversion label
      'value': 150000,  // Átlag érték
      'currency': 'HUF'
    });
  }
  
  // Tovább...
};
```

### 5. **Elérhetőségek frissítése**

Cseréld le az alábbi fájlokban a placeholder adatokat:

**Fájlok:**
- `app/privacy/page.tsx` (6-7 hely)
- `app/terms/page.tsx` (5-6 hely)
- `components/Footer.tsx`
- `components/ContactModern.tsx`
- `components/StructuredData.tsx`

**Mit cserélj:**
- Email: `info@honlaptervezo.hu` → VALÓDI EMAIL
- Telefon: `+36 30 123 4567` → VALÓDI TELEFON
- Cím: `1051 Budapest, Példa utca 12.` → VALÓDI CÍM

### 6. **Domain frissítése**

Cseréld le minden helyen:
- `https://honlaptervezo.hu` → VALÓDI DOMAIN

**Fájlok:**
- `app/layout.tsx`
- `app/page.tsx`
- `public/sitemap.xml`
- `components/StructuredData.tsx`

## 📊 Google Ads Quality Score Tippek

### ✅ Landing Page Experience (Kész)
- Fast loading: ✅ Next.js SSR
- Mobile-friendly: ✅ Responsive design
- Relevant content: ✅ Kulcsszavak a meta-kban
- Clear CTA: ✅ "Ingyenes ajánlatkérés" gombok
- Trust signals: ✅ Trust badges, elérhetőségek

### ✅ Ad Relevance
- Használd a landing page kulcsszavait az ads-ekben:
  - "1-2 hét alatt"
  - "80.000 Ft-tól"
  - "2-3 óra válaszidő"
  - "Next.js weboldal"
  - "Mobilbarát"

### ✅ Expected CTR
- Erős CTA-k az ads-ekben
- Számok használata (80.000 Ft, 1-2 hét)
- Differenciálók kiemelése

## 🎯 Ajánlott kampány beállítások

### Keyword targeting
```
[honlapkészítés]
[weboldal készítés]
[webfejlesztés]
"gyors honlapkészítés"
"olcsó weboldal készítés"
+webshop +készítés
```

### Ad Copy példa
```
Headline 1: Honlapkészítés 1-2 Hét Alatt
Headline 2: Modern Weboldal 80.000 Ft-tól
Headline 3: 2-3 Óra Válaszidő Garantálva

Description 1: Professzionális weboldal fejlesztés Next.js-szel. Mobilbarát, SEO optimalizált. Ingyenes ajánlat 2-3 órán belül.

Description 2: Webshop, landing page, vállalati oldal. Fix árak, gyors átfutás, garancia. Tapasztalt fejlesztő csapat.
```

## 📱 Conversion tracking események

Kövesd nyomon:
1. **Form submission** - Ajánlatkérés elküldve
2. **Phone click** - Telefonszám klikk
3. **Email click** - Email cím klikk
4. **Pricing view** - Árazás megtekintve
5. **Services view** - Szolgáltatások megtekintve

## 🔒 Adatvédelem & Cookie

- Cookie banner jelenik meg 1 mp után
- Elfogadás esetén: Analytics és Ads storage engedélyezve
- Elutasítás: csak essential cookies
- Privacy Policy és ÁSZF linkek minden oldalon

## ✨ További optimalizálási lehetőségek

1. **A/B tesztelés**: Különböző headlines, CTA gombok
2. **Heatmap**: Hotjar/Microsoft Clarity integrálása
3. **Live chat**: Intercom/Tawk.to később
4. **Social proof**: Több testimonial, case study
5. **Video**: Bemutató videó a hero sectionben

## 📞 Support

Ha kérdés van, nézd meg:
- Google Ads Help: https://support.google.com/google-ads
- GTM Documentation: https://support.google.com/tagmanager

---

**Összefoglalva:** Az oldal készen áll Google Ads kampányra. Csak a tracking ID-kat kell beállítani és az elérhetőségeket frissíteni! 🚀
