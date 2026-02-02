'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Zap, TrendingUp, Award } from 'lucide-react';

export default function AjanlatPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    features: [] as string[],
    source: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData({
      ...formData,
      features: formData.features.includes(feature)
        ? formData.features.filter((f) => f !== feature)
        : [...formData.features, feature],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to Thank You page for Google Ads tracking
        router.push('/koszonjuk');
      } else {
        alert('Hiba történt az ajánlatkérés küldésekor. Kérjük próbálja újra később, vagy írjon emailt: hello@nexuscode.hu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hiba történt a küldéskor. Kérjük próbálja újra.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-[#0f172a] border-2 border-green-500/50 rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={48} />
            </div>
            <h1 className="text-4xl font-black text-white mb-4">
              Köszönjük az ajánlatkérést!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kollégánk <span className="font-bold text-blue-400">24 órán belül</span> felveszi veled a kapcsolatot.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ArrowLeft size={20} />
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const projectTypes = [
    'Landing page / Bemutatkozó oldal',
    'Webshop / Online áruház',
    'Vállalati weboldal',
    'Blog / Hírportál',
    'Portfólió oldal',
    'Egyéb',
  ];

  const availableFeatures = [
    'SEO optimalizálás',
    'Google Analytics',
    'Online fizetés',
    'Foglalási rendszer',
    'Email marketing',
    'Többnyelvűség',
    'Blog modul',
    'Kapcsolati űrlap',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white hover:text-blue-400 transition-colors">
            <ArrowLeft size={20} />
            Vissza
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Kérj ingyenes ajánlatot
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Töltsd ki az űrlapot, és 24 órán belül személyre szabott ajánlatot küldünk.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Zap className="text-blue-600" size={20} />
              <span className="text-sm font-medium">Gyors árajánlat</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <TrendingUp className="text-purple-600" size={20} />
              <span className="text-sm font-medium">3 év tapasztalat</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Award className="text-cyan-600" size={20} />
              <span className="text-sm font-medium">Next.js szakértő</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#0f172a] border-2 border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          {/* Personal Info */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Kapcsolatfelvétel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Név *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="Kovács János"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Cég neve
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="Példa Kft."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="info@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="+36 30 123 4567"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Projekt részletei</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Van már weboldalad?
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="pl. example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Milyen típusú oldalt szeretnél? *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                >
                  <option value="">Válassz...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Költségkeret
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  >
                    <option value="">Válassz...</option>
                    <option value="150k-300k">150.000 - 300.000 Ft</option>
                    <option value="300k-500k">300.000 - 500.000 Ft</option>
                    <option value="500k-1m">500.000 - 1.000.000 Ft</option>
                    <option value="1m+">1.000.000 Ft felett</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Határidő
                  </label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
                  >
                    <option value="">Válassz...</option>
                    <option value="1-2week">1-2 hét</option>
                    <option value="1month">1 hónap</option>
                    <option value="2-3month">2-3 hónap</option>
                    <option value="flexible">Rugalmas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Milyen funkciókat szeretnél?</h2>
            <p className="text-sm text-gray-400 mb-6">Válassz többet is!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableFeatures.map((feature) => (
                <label
                  key={feature}
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    formData.features.includes(feature)
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-white font-medium">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Mesélj a projektről *
            </label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500 resize-none"
              placeholder="Milyen a vállalkozásod? Mit szeretnél elérni az oldallal? Van valami konkrét elképzelésed a design-ról?"
            />
          </div>

          {/* Source */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Honnan hallottál rólunk?
            </label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1e293b] border-2 border-white/10 rounded-xl focus:border-blue-500 outline-none transition-colors text-white placeholder:text-gray-500"
            >
              <option value="">Válassz...</option>
              <option value="google">Google keresés</option>
              <option value="social">Social media</option>
              <option value="referral">Ajánlás</option>
              <option value="other">Egyéb</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Küldés folyamatban...' : 'Ingyenes ajánlat kérése'}
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            24 órán belül válaszolunk. Adataid biztonságban vannak. 🔒
          </p>
        </form>
      </main>
    </div>
  );
}
