import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: 'Nexuscode | Modern Weboldal Fejlesztés 80.000 Ft-tól',
  description: 'Professzionális weboldal fejlesztés 1-2 hét alatt, 80.000 Ft-tól. Next.js, React, SEO optimalizált, mobilbarát. 2-3 óra válaszidő. Webshop, landing page, vállalati oldal készítés.',
  keywords: 'honlapkészítés, weboldal készítés, weboldal fejlesztés, egyedi weboldal, next.js fejlesztés, react fejlesztés, seo optimalizálás, gyors weboldal, olcsó honlap, prémium webdesign, nexuscode',
  authors: [{ name: 'Nexuscode Team' }],
  creator: 'Nexuscode',
  publisher: 'Nexuscode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nexuscode | Modern Weboldal Fejlesztés',
    description: 'Gyors, professzionális weboldal fejlesztés. Next.js, React, mobilbarát, SEO optimalizált.',
    type: 'website',
    locale: 'hu_HU',
    url: 'https://nexuscode.hu',
    siteName: 'Nexuscode',
    images: [
      {
        url: 'https://nexuscode.hu/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Nexuscode - Weboldal Fejlesztés',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexuscode | Modern Weboldal Fejlesztés',
    description: 'Gyors, professzionális weboldal fejlesztés.',
    images: ['https://nexuscode.hu/opengraph-image'],
  },
  alternates: {
    canonical: 'https://nexuscode.hu',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
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
        <meta name="apple-mobile-web-app-title" content="Nexuscode" />
        
        {/* Preconnect for faster 3rd party loads (Added for PageSpeed) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />
        
        <link rel="canonical" href="https://honlaptervezo.hu" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics (noscript) - Optional, but good practice if you had GTM before */}
        {/* Removed GTM noscript as we switched to direct GA4 implementation */}

        {/* Delayed Google Analytics (GA4) */}
        <Script
          id="ga4-delayed"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-DK6GNH27QV"
        />
        <Script
          id="ga4-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Initial config without pageview to prevent double counting if manual trigger is used
              gtag('config', 'G-DK6GNH27QV', {
                'send_page_view': false 
              });

              // Delayed pageview for PageSpeed
              setTimeout(function() {
                gtag('event', 'page_view', {
                  'send_to': 'G-DK6GNH27QV'
                });
              }, 3500); // 3.5s delay
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
