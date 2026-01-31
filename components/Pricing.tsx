import { Check, Zap, Star, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Kezdő',
    badge: 'Legjobb ár',
    price: '79.900',
    originalPrice: '159.900',
    description: 'Tökéletes kisvállalkozásoknak és önálló vállalkozóknak',
    features: [
      'Modern, reszponzív design',
      'Legfeljebb 5 aloldal',
      'SEO alapbeállítások',
      'Kapcsolati form',
      'Google Maps integráció',
      'Mobilra optimalizált',
      '3 hónap ingyenes karbantartás',
      'SSL tanúsítvány',
    ],
    highlighted: false,
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Professzionális',
    badge: 'Legnépszerűbb',
    price: '149.900',
    originalPrice: '299.900',
    description: 'A legjobb választás a növekvő vállalkozásoknak',
    features: [
      'Minden a Kezdő csomagból, PLUSZ:',
      'Legfeljebb 10 aloldal',
      'Haladó SEO optimalizálás',
      'Blog / Hírek szekció',
      'Galéria vagy Portfólió',
      'Hírlevél feliratkozás',
      '6 hónap ingyenes karbantartás',
      'Analitika beállítás (Google Analytics)',
      'Social media integráció',
      'Gyorsítási optimalizáció',
    ],
    highlighted: true,
    icon: Star,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Prémium',
    badge: 'Legjobb érték',
    price: '249.900',
    originalPrice: '499.900',
    description: 'Teljes körű megoldás komoly online jelenléthez',
    features: [
      'Minden a Professzionális csomagból, PLUSZ:',
      'Korlátlan aloldal',
      'E-commerce (webshop) funkciók*',
      'Egyedi grafikai elemek',
      'Multilang (többnyelvűség)',
      'Haladó animációk',
      '1 év ingyenes karbantartás',
      'Prioritásos támogatás',
      'Havi SEO jelentések',
      'Egyedi funkciók fejlesztése',
      'Teljesítmény garancia',
    ],
    highlighted: false,
    icon: Crown,
    color: 'from-slate-700 to-slate-800',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-black dark:via-zinc-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            Limitált ajánlat - 50% kedvezmény
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Egyszerű árazás
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nincs havi díj, egyszeri fizetés
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Fizetsz egyszer, <span className="font-bold text-gray-900 dark:text-white">tiéd örökre</span>. Nincs trükk, nincs rejtett költség.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white dark:from-zinc-800 border-4 border-blue-600 shadow-2xl scale-105 z-10'
                  : 'bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${plan.color} text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6`}>
                <plan.icon size={14} />
                {plan.badge}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[48px]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-xl font-bold text-gray-600 dark:text-gray-400">Ft</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-400 line-through">
                    {plan.originalPrice} Ft
                  </span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -50%
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Egyszeri fizetés, örökös tulajdon
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-lg font-bold transition-all duration-300 mb-6 ${
                  plan.highlighted
                    ? 'bg-orange-500 text-white shadow-lg hover:shadow-xl hover:bg-orange-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.highlighted ? 'Ezt választom' : 'Kérek ajánlatot'}
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-shrink-0 mt-0.5 text-green-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Popular badge overlay */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Legtöbben ezt választják
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extra info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-bold text-purple-600 dark:text-purple-400">*</span> Az E-commerce funkcióknál külön fizetési gateway díjak merülhetnek fel
          </p>
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Pénzvisszafizetési garancia</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Rugalmas fizetési feltételek</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Ingyenes konzultáció</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
