import { Code2, Rocket, Search, Smartphone, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Modern Webfejlesztés',
    description: 'Next.js, React és TypeScript alapú weboldalak a legújabb technológiákkal.',
  },
  {
    icon: Rocket,
    title: 'Teljesítmény Optimalizálás',
    description: 'Villámgyors betöltési idők és kiváló Core Web Vitals értékek.',
  },
  {
    icon: Search,
    title: 'SEO Optimalizálás',
    description: 'Első helyek a Google keresőben strukturált adatokkal és meta tagekkel.',
  },
  {
    icon: Smartphone,
    title: 'Reszponzív Design',
    description: 'Tökéletes megjelenés minden eszközön, mobiltól asztali gépig.',
  },
  {
    icon: Zap,
    title: 'Progressive Web Apps',
    description: 'Applikáció-szerű élmény böngészőben, offline támogatással.',
  },
  {
    icon: Shield,
    title: 'Biztonság & Karbantartás',
    description: 'Folyamatos frissítések, biztonsági mentések és technikai támogatás.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Szolgáltatásaink
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teljes körű weboldal készítés az ötlettől az éles indulásig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
