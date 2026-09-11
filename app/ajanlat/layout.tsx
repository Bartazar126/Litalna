import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingyenes Ajánlatkérés | Weboldal Készítés 80.000 Ft-tól',
  description: 'Kérj ingyenes, kötelezettség nélküli árajánlatot: fix ár írásban, 24 órán belül. Weboldal, webáruház, landing page, egyedi fejlesztés.',
  openGraph: {
    title: 'Ingyenes Ajánlatkérés | Weboldal Készítés',
    description: 'Kérj ingyenes árajánlatot. Gyors válaszidő, átlátható árazás, gyors átfutás.',
  },
  alternates: {
    canonical: '/ajanlat',
  },
};

export default function AjanlatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
