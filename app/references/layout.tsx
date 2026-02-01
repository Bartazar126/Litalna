import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referenciák & Portfólió | Modern Weboldalak',
  description: 'Néhány projekt, amin dolgoztunk. Modern weboldalak, booking rendszerek, komplex platformok Next.js és React technológiával. Access to Italy, Entrigo Tickets.',
  openGraph: {
    title: 'Referenciák & Portfólió | Honlapkészítő',
    description: 'Néhány projekt: booking rendszerek, modern weboldalak Next.js technológiával.',
  },
  alternates: {
    canonical: 'https://nexuscode.hu/references',
  },
};

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
