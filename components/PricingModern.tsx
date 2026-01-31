import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Kezdő',
    price: '79.900',
    originalPrice: '159.900',
    description: 'Kisvállalkozásoknak',
    features: [
      '5 aloldal',
      'SEO alapok',
      'Kapcsolati form',
      'Google Maps',
      'Mobilra optimalizált',
      '3 hó karbantartás',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '149.900',
    originalPrice: '299.900',
    description: 'Legtöbben ezt választják',
    features: [
      'Minden a Kezdőből',
      '10 aloldal',
      'Haladó SEO',
      'Blog rendszer',
      'Portfólió/Galéria',
      'Analytics setup',
      '6 hó karbantartás',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '249.900',
    originalPrice: '499.900',
    description: 'Teljes megoldás',
    features: [
      'Minden a Pro-ból',
      'Korlátlan oldal',
      'E-commerce ready',
      'Multilang',
      'Egyedi funkciók',
      'Prioritás support',
      '1 év karbantartás',
    ],
    highlighted: false,
  },
];

export default function PricingModern() {
  return (
    <section id="pricing" className="py-32 px-4 bg-gray-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-gray-700 dark:text-gray-300">
            Limitált ajánlat • 50% kedvezmény
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Egyszerű árazás
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Egyszeri fizetés. Nincs havi díj. <span className="font-semibold text-gray-900 dark:text-white">Örökre a tiéd.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-zinc-900 border p-10 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'border-gray-900 dark:border-white scale-105 shadow-2xl'
                  : 'border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
              }`}
            >
              {/* Badge for popular */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-1 rounded-full text-xs font-semibold">
                  Népszerű
                </div>
              )}

              {/* Plan info */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg font-semibold text-gray-500 dark:text-gray-500">Ft</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 dark:text-gray-600 line-through">
                    {plan.originalPrice} Ft
                  </span>
                  <span className="text-xs font-bold text-red-600 dark:text-red-400">-50%</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                  plan.highlighted
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-105'
                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700'
                }`}
              >
                Kérem ezt
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-gray-900 dark:text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
          Minden csomag tartalmaz SSL tanúsítványt, domain beállítást és pénzvisszafizetési garanciát
        </div>
      </div>
    </section>
  );
}
