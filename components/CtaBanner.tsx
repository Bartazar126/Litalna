import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-black dark:via-slate-900 dark:to-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-blue-600 p-1 rounded-2xl shadow-2xl overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-slate-800 dark:from-zinc-900 dark:to-black p-12 md:p-16 rounded-2xl text-center">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock size={16} />
              <span>Csak 5 helyet vállalunk el havonta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Kész vagy elkezdeni?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Ha komolyan gondolod, <span className="font-bold text-white">töltsd ki a formot</span> és 24 órán belül jelentkezünk részletes ajánlattal.
            </p>

            {/* Special offer box */}
            <div className="inline-block bg-orange-500 p-1 rounded-xl mb-8">
              <div className="bg-gray-900 px-8 py-4 rounded-xl">
                <p className="text-orange-300 font-bold text-lg mb-1">
                  LIMITÁLT AJÁNLAT
                </p>
                <p className="text-white text-2xl md:text-3xl font-black">
                  50% KEDVEZMÉNY
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Az első 10 ügyfélnek ezen a héten
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#contact"
                className="group bg-orange-500 text-white px-10 py-5 rounded-lg text-xl font-bold hover:shadow-xl transition-all duration-300 hover:bg-orange-600 flex items-center gap-3"
              >
                <span>Ajánlatot kérek</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>
              <a
                href="#pricing"
                className="bg-white text-gray-900 px-10 py-5 rounded-lg text-xl font-bold hover:shadow-xl transition-all duration-300"
              >
                Árak megtekintése
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Nincs kötelezettség</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Ingyenes konzultáció</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Válasz 24 órán belül</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency timer effect */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-bold text-red-600 dark:text-red-400 animate-pulse">⚠️ FONTOS:</span> 
            {' '}Az akciós árak <span className="font-bold">csak ezen a héten</span> érhetők el!
          </p>
        </div>
      </div>
    </section>
  );
}
