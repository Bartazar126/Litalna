import { Shield, Clock, Award, ThumbsUp, Zap, DollarSign } from 'lucide-react';

const trustIndicators = [
  {
    icon: Shield,
    title: 'Pénzvisszafizetési garancia',
    description: 'Ha nem vagy elégedett, visszaadjuk a pénzed',
  },
  {
    icon: Clock,
    title: '1 hét alatt kész',
    description: 'Gyors átfutási idő, garantáltan',
  },
  {
    icon: Award,
    title: '150+ sikeres projekt',
    description: '98%-os ügyfél elégedettség',
  },
  {
    icon: ThumbsUp,
    title: 'Ingyenes karbantartás',
    description: '3-12 hónap ingyen támogatás',
  },
  {
    icon: Zap,
    title: 'Villámgyors oldal',
    description: '< 1 mp betöltési idő garantálva',
  },
  {
    icon: DollarSign,
    title: 'Nincs rejtett költség',
    description: 'Átlátható, fix árképzés',
  },
];

export default function TrustBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Miért minket válassz?
          </h2>
          <p className="text-xl text-white/90">
            Nem csak beszélünk, tényleg csináljuk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustIndicators.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
            ✓ SSL Tanúsítvány ingyen
          </div>
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
            ✓ GDPR megfelelő
          </div>
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
            ✓ Google Analytics setup
          </div>
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
            ✓ Mobil optimalizált
          </div>
        </div>
      </div>
    </section>
  );
}
