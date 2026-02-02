import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingyenes Ajánlatkérés | Weboldal Készítés 80.000 Ft-tól',
  description: 'Kérj ingyenes, kötelezettség nélküli árajánlatot weboldalad elkészítésére. Gyors válaszidő, átlátható árazás, 1-2 hét átfutás. Landing page, webshop, vállalati oldal.',
  openGraph: {
    title: 'Ingyenes Ajánlatkérés | Weboldal Készítés',
    description: 'Kérj ingyenes árajánlatot. Gyors válaszidő, átlátható árazás, gyors átfutás.',
  },
  alternates: {
    canonical: 'https://nexuscode.hu/ajanlat',
  },
};

export default function AjanlatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white [color-scheme:dark]" data-theme="dark">
      {children}
    </div>
  );
}
