# 🚀 Honlapkészítő - Professzionális Weboldal

Modern, gyors és SEO-optimalizált weboldal honlapkészítő cégeknek, Next.js 15-tel építve.

## ✨ Főbb Jellemzők

- ⚡ **Villámgyors**: Next.js 15 App Router + Turbopack
- 🎨 **Modern Design**: Tailwind CSS 4 + Gradiens animációk
- 📱 **Reszponzív**: Mobile-first megközelítés
- 🔍 **SEO Optimalizált**: Meta tagek, Structured Data, Sitemap
- 🎯 **Teljesítmény**: Optimalizált képek, lazy loading
- ♿ **Akadálymentesség**: Semantic HTML, ARIA címkék
- 🌙 **Dark Mode**: Automatikus téma váltás
- 📊 **Analytics Ready**: Google Analytics integráció kész

## 🛠️ Technológiai Stack

- **Framework**: Next.js 15.1.6
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript 5
- **Fonts**: Geist Sans & Geist Mono

## 📦 Telepítés

```bash
# Függőségek telepítése
npm install

# Development szerver indítása
npm run dev

# Production build
npm run build

# Production szerver indítása
npm start
```

## 🌐 Fejlesztői Szerver

Nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngésződben.

## 📁 Projekt Struktúra

```
honlaptervezo/
├── app/
│   ├── layout.tsx          # Root layout SEO metadata-val
│   ├── page.tsx            # Főoldal
│   ├── globals.css         # Globális stílusok
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 oldal
│   ├── sitemap.ts          # XML sitemap
│   ├── robots.ts           # robots.txt
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Header.tsx          # Navigációs header
│   ├── Hero.tsx            # Hero szekció
│   ├── Services.tsx        # Szolgáltatások
│   ├── Portfolio.tsx       # Portfólió
│   ├── Contact.tsx         # Kapcsolati form
│   ├── Footer.tsx          # Footer
│   └── StructuredData.tsx  # JSON-LD structured data
├── public/                 # Statikus fájlok
└── next.config.ts          # Next.js konfiguráció
```

## 🎨 Főbb Szekciók

1. **Hero** - WOW-faktoros főoldal animált háttérrel, árak kiemelésével és social proof-fal
2. **Trust Banner** - 6 bizalmi jel (garancia, sebesség, stb.) 
3. **Szolgáltatások** - 6 szolgáltatás kártya hover effektekkel
4. **Folyamat** - 6 lépéses timeline, hogyan dolgozunk
5. **Árazás (Pricing)** - 3 csomag vonzó árakkal (79.900 Ft-tól)
6. **Portfólió** - 6 projekt showcase
7. **Vélemények (Testimonials)** - 6 ügyfél értékelés 5 csillaggal
8. **CTA Banner** - Konverziós banner sürgősséggel és limitált ajánlattal
9. **Kapcsolat** - Kapcsolati form + elérhetőségek
10. **Footer** - Linkek, social media, elérhetőségek

## 🔧 Testreszabás

### Színek módosítása

A `app/globals.css` fájlban található a színséma:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Meta adatok frissítése

Az `app/layout.tsx` fájlban frissítsd a metadata objektumot:

```typescript
export const metadata: Metadata = {
  title: 'Céged Neve',
  description: 'Céged leírása...',
  // ...
}
```

### Elérhetőségek

Frissítsd az elérhetőségeket a következő komponensekben:
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/StructuredData.tsx`

## 📈 SEO Optimalizálás

### Beépített SEO funkciók:

- ✅ Meta tagek (Open Graph, Twitter)
- ✅ Structured Data (Organization, Service)
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ Semantic HTML
- ✅ Image optimization
- ✅ PWA ready

### Google Search Console

1. Regisztrálj a [Google Search Console](https://search.google.com/search-console)
2. Add meg a verification kódot az `app/layout.tsx`-ben
3. Küldd be a sitemap-et: `https://domain.hu/sitemap.xml`

## 🚀 Deployment

### Vercel (Ajánlott)

```bash
# Vercel CLI telepítése
npm i -g vercel

# Deploy
vercel
```

### Egyéb platformok

A projekt bármilyen Node.js hosting platformon futtatható (Netlify, Railway, Render, stb.)

## 📊 Teljesítmény

Várható Lighthouse score-ok:
- ✅ Performance: 95-100
- ✅ Accessibility: 95-100
- ✅ Best Practices: 95-100
- ✅ SEO: 100

## 🤝 Támogatás

Ha kérdésed van, írj nekünk: info@honlaptervezo.hu

## 📄 Licenc

MIT License - Szabadon használható és módosítható.

---

**Készítette**: Honlapkészítő csapata ❤️
