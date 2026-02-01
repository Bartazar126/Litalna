export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Honlapkészítő',
    url: 'https://nexuscode.hu',
    logo: 'https://nexuscode.hu/logo.png',
    description: 'Professzionális weboldal fejlesztés 1-2 hét alatt, 80.000 Ft-tól. Next.js, React alapú, SEO optimalizált, mobilbarát weboldalak.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Példa utca 12.',
      addressLocality: 'Budapest',
      postalCode: '1051',
      addressCountry: 'HU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+36-30-123-4567',
      contactType: 'customer service',
      email: 'hello@nexuscode.hu',
      availableLanguage: ['Hungarian'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    },
    sameAs: [
      'https://facebook.com/honlaptervezo',
      'https://instagram.com/honlaptervezo',
      'https://linkedin.com/company/honlaptervezo',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    priceRange: '80000-500000 HUF',
  };

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    name: 'Honlapkészítés és Webfejlesztés',
    description: 'Professzionális weboldal fejlesztés 1-2 hét alatt. Next.js, React, mobilbarát, SEO optimalizált.',
    provider: {
      '@type': 'Organization',
      name: 'Honlapkészítő',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Hungary',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Webfejlesztési Szolgáltatások',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alap Weboldal',
            description: 'Landing page, bemutatkozó oldal. 1-5 aloldal, SEO alapok.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '80000',
            priceCurrency: 'HUF',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prémium Weboldal',
            description: 'Vállalati weboldal, portfólió. 5-15 aloldal, teljes SEO, blog rendszer.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '149990',
            priceCurrency: 'HUF',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webshop',
            description: 'E-kereskedelem, online értékesítés. Online fizetés, készletkezelés, admin panel.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '424990',
            priceCurrency: 'HUF',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Optimalizálás',
            description: 'Keresőoptimalizálás, meta tagek, sitemap, strukturált adatok.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobilbarát Design',
            description: 'Responsive, mobile-first megközelítés minden projektben.',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
