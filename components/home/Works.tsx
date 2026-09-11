import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import FlowWaves from './FlowWaves';
import Reveal from './Reveal';

/* Munkáink: böngésző-keretes kártyák valódi, élő oldalakkal.
   Hoverre a képernyőkép lassan végiggördül a kereten belül.
   A VYRA saját koncepció, nem ügyfélmunka: ezért külön jelölést kap,
   és a termékrenderrel jelenik meg, nem képernyőképpel. */

type Work = {
  url: string;
  domain: string;
  label: string;
  img?: string;
  concept?: boolean;
};

const works: Work[] = [
  {
    url: 'https://kickoffcamps.hu/',
    img: '/refs/kickoffcamps.webp',
    domain: 'kickoffcamps.hu',
    label: 'Focitáborok, online jelentkezéssel',
  },
  {
    url: 'https://www.qualityroadkft.hu/',
    img: '/refs/qualityroad.webp',
    domain: 'qualityroadkft.hu',
    label: 'Útépítő cég, ajánlatkérésre hangolva',
  },
  {
    url: 'https://vyra.nexuscode.hu/',
    domain: 'vyra.nexuscode.hu',
    label: '3D termékbemutató, Blender + Three.js',
    concept: true,
  },
];

export default function Works() {
  return (
    <section id="munkaink" className="relative scroll-mt-20 py-16 md:py-24 bg-[color:var(--section)] overflow-hidden">
      <FlowWaves flip />
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="side-title">
              <span>
                Munkáink, <span className="grad-word">élőben.</span>
              </span>
            </h2>
            <p className="text-[14.5px] text-[color:var(--muted)] max-w-[24rem] leading-relaxed md:text-right">
              Mindegyik oldal ma is üzemel. Vidd az egeret a képekre, és
              kattints: élőben nyílnak meg.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <Reveal key={w.domain} delay={(i % 2) * 0.08}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-[color:var(--hairline)] bg-white shadow-[0_10px_28px_-16px_rgba(24,43,56,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_52px_-20px_rgba(79,70,229,0.35)]"
              >
                {/* Böngésző-fejléc */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-[#f0f3f6] border-b border-[color:var(--hairline)]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d3dbe2]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d3dbe2]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d3dbe2]" />
                  </div>
                  <div className="flex-1 max-w-[220px] mx-auto px-3 py-1 rounded-md bg-white text-center border border-[color:var(--hairline)]">
                    <span className="block text-[10.5px] text-[color:var(--muted)] truncate">{w.domain}</span>
                  </div>
                  <ExternalLink
                    size={13}
                    className="text-[color:var(--faint)] group-hover:text-[color:var(--primary)] transition-colors"
                  />
                </div>

                {/* Kép: ügyfélmunkánál képernyőkép, koncepciónál termékrender */}
                {w.concept ? (
                  <div className="relative h-[240px] sm:h-[300px] overflow-hidden bg-[#f0489b] flex items-center justify-center">
                    <Image
                      src="/refs/vyra-can.png"
                      alt="VYRA Yuzu Pink doboz, 3D renderelt termékkép"
                      width={900}
                      height={1100}
                      sizes="(max-width: 640px) 90vw, 420px"
                      loading="lazy"
                      className="h-[88%] w-auto object-contain drop-shadow-[0_18px_40px_rgba(120,10,60,0.45)] transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[10.5px] font-semibold tracking-wide text-[#b8256b]">
                      Saját koncepció
                    </span>
                  </div>
                ) : (
                  <div className="h-[240px] sm:h-[300px] overflow-hidden bg-[#eef0f8]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.img}
                      alt={`${w.domain} képernyőkép`}
                      loading="lazy"
                      className="w-full h-full object-cover [object-position:50%_0%] group-hover:[object-position:50%_100%]"
                      style={{ transition: 'object-position 4s ease-in-out' }}
                    />
                  </div>
                )}

                {/* Lábléc */}
                <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-[color:var(--hairline)]">
                  <div>
                    <div className="text-[14.5px] font-semibold text-[color:var(--heading)]">{w.domain}</div>
                    <div className="text-[12px] text-[color:var(--muted)] mt-0.5">{w.label}</div>
                  </div>
                  <span className="text-[12.5px] font-semibold text-[color:var(--primary)] whitespace-nowrap group-hover:underline underline-offset-4">
                    Megnézem élőben
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
