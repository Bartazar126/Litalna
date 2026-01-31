import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://honlaptervezo.hu'),
  title: {
    default: 'Honlapkészítés 1-2 Hét Alatt | Gyors Weboldal Fejlesztés 80.000 Ft-tól',
    template: '%s | Honlapkészítő - Professzionális Webfejlesztés'
  },
  description: 'Professzionális weboldal fejlesztés 1-2 hét alatt, 80.000 Ft-tól. Next.js, React alapú, SEO optimalizált, mobilbarát. 2-3 óra válaszidő. Webshop, landing page, vállalati oldal.',
  keywords: [
    'honlapkészítés',
    'weboldal készítés',
    'gyors honlapkészítés',
    'webfejlesztés',
    'Next.js fejlesztés',
    'React weboldal',
    'SEO optimalizálás',
    'mobilbarát weboldal',
    'reszponzív design',
    'webshop készítés',
    'landing page',
    'vállalati weboldal',
    'olcsó honlapkészítés',
    'gyors weboldal',
    'modern weboldal'
  ],
  authors: [{ name: 'Honlapkészítő Csapat' }],
  creator: 'Honlapkészítő',
  publisher: 'Honlapkészítő',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://honlaptervezo.hu',
    siteName: 'Honlapkészítő - Gyors Webfejlesztés',
    title: 'Honlapkészítés 1-2 Hét Alatt | 80.000 Ft-tól',
    description: 'Professzionális weboldal fejlesztés 1-2 hét alatt. Next.js, React, SEO optimalizált, mobilbarát. 2-3 óra válaszidő. Webshop, landing page, vállalati oldal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Honlapkészítő - Gyors, Modern Weboldalak 80.000 Ft-tól',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honlapkészítés 1-2 Hét Alatt | 80.000 Ft-tól',
    description: 'Professzionális weboldal fejlesztés 1-2 hét alatt. Next.js, React, SEO optimalizált, mobilbarát.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://honlaptervezo.hu',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#080b14" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Honlapkészítő" />
        
        {/* Google Tag Manager - Replace GTM-XXXXXX with your actual GTM ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');`,
          }}
        />
        
        {/* Google Ads Conversion Tracking - Add your Google Ads ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
              
              // Cookie consent default
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        
        <link rel="canonical" href="https://honlaptervezo.hu" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
