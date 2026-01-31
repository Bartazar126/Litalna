import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nagy Péter',
    company: 'PéterBolt Kft.',
    role: 'Ügyvezető',
    image: '👨‍💼',
    rating: 5,
    text: 'Fantasztikus munka! A webshopunk forgalma 300%-kal nőtt az új oldal indítása óta. A csapat profi, gyors és minden kérésünket teljesítették. Nem is gondoltam, hogy ilyen alacsony áron ilyen minőséget kapok!',
    highlight: 'Forgalom 3x',
  },
  {
    name: 'Kovács Anna',
    company: 'BeautyStudio',
    role: 'Tulajdonos',
    image: '👩‍💼',
    rating: 5,
    text: 'Végre egy oldal, ami tényleg működik! Minden nap kapok új időpontfoglalásokat az oldalon keresztül. A dizájn gyönyörű, és a mobilon is tökéletes. A legjobb befektetés volt az idei évben!',
    highlight: 'Napi foglalások',
  },
  {
    name: 'Szabó Gábor',
    company: 'TechConsult',
    role: 'Marketing vezető',
    image: '👨‍💻',
    rating: 5,
    text: 'A Google-ban az első oldalon vagyunk már 2 hét után! Az SEO optimalizálás valóban működik. A csapat még azt is megtanította, hogyan tudom frissíteni az oldalt. Tökéletes ár-érték arány!',
    highlight: 'Google TOP 3',
  },
  {
    name: 'Tóth Éva',
    company: 'FitnessZone',
    role: 'Üzlettulajdonos',
    image: '👩‍🏫',
    rating: 5,
    text: 'Hihetetlen gyorsak voltak! 1 hét alatt kész oldal, minden funkcióval. Az online beiratkozások száma megduplázódott. Mindenkinek ajánlom őket, aki komolyan gondolja az online jelenlétét!',
    highlight: '1 hét alatt kész',
  },
  {
    name: 'Kiss László',
    company: 'AutoCenter',
    role: 'Értékesítési vezető',
    image: '👨‍🔧',
    rating: 5,
    text: 'A weboldal tökéletesen bemutatja a járműveinket. A 360°-os képek és a galéria profin néz ki. Hetente 20+ érdeklődést kapunk az oldalon keresztül. A beruházás 2 hónap alatt megtérült!',
    highlight: 'ROI 2 hónap',
  },
  {
    name: 'Molnár Rita',
    company: 'CakeDreams',
    role: 'Cukrász',
    image: '👩‍🍳',
    rating: 5,
    text: 'Imádom az új oldalamat! A megrendelő rendszer egyszerű, a képek gyönyörűek. Havi 50+ tortarendelést kapok az oldal indítása óta. A karbantartás is ingyenes volt 6 hónapig. Wow!',
    highlight: '50+ új rendelés/hó',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Mit mondanak az ügyfeleink?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <span className="font-bold text-blue-600">150+</span> elégedett vállalkozás
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-zinc-900 p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={24} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-zinc-800">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-50 dark:bg-zinc-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-700">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Te is lehetsz a következő sikertörténet
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 hover:bg-orange-600"
            >
              Kérek ajánlatot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
