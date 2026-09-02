import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--petrol)] border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Márka */}
          <div className="flex flex-col items-start gap-4">
            <a href="/" className="relative block w-[150px] h-[100px]" aria-label="Nexuscode, kezdőlap">
              <Image src="/logo-full.png" alt="Nexuscode" fill sizes="150px" className="object-contain object-left" />
            </a>
            <p className="font-display text-[12.5px] tracking-[0.14em] uppercase text-white/30">
              Nem csak weboldalakat építünk. A jövőt építjük.
            </p>
          </div>

          {/* Linkek */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2.5 text-[13.5px]">
            {[
              { name: 'Munkáink', href: '/#munkaink' },
              { name: 'Amit építünk', href: '/#szolgaltatasok' },
              { name: 'Folyamat', href: '/#folyamat' },
              { name: 'Blog', href: '/blog' },
              { name: 'Ajánlatkérés', href: '/ajanlat' },
              { name: 'Kapcsolat', href: '/#kapcsolat' },
            ].map((l) => (
              <a key={l.name} href={l.href} className="text-white/50 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          {/* Elérhetőség */}
          <div className="text-[13.5px] space-y-2.5">
            <a href="mailto:hello@nexuscode.hu" className="block text-white/50 hover:text-white transition-colors">
              hello@nexuscode.hu
            </a>
            <a href="tel:+36309932454" className="block text-white/50 hover:text-white transition-colors">
              +36 30 993 2454
            </a>
            <span className="block text-white/30">5300 Karcag, Kisújszállási út 44/D</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-7 border-t border-white/[0.07]">
          <p className="text-[12px] text-white/30">© {year} Nexuscode. Minden jog fenntartva.</p>
          <div className="flex items-center gap-6 text-[12px]">
            <a href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">
              Adatkezelés
            </a>
            <a href="/terms" className="text-white/30 hover:text-white/60 transition-colors">
              ÁSZF
            </a>
            <a href="/privacy#cookies" className="text-white/30 hover:text-white/60 transition-colors">
              Cookie-k
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
