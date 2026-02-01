'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Itt kezelheted a form küldést
    console.log('Form submitted:', formData);
    alert('Köszönjük az üzenetet! Hamarosan felvesszük veled a kapcsolatot.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Kérj ajánlatot
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Töltsd ki az űrlapot, <span className="font-bold">24 órán belül</span> jelentkezünk részletes ajánlattal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Vagy hívj minket
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </div>
                    <a href="mailto:hello@nexuscode.hu" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      hello@nexuscode.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      Telefon
                    </div>
                    <a href="tel:+36301234567" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +36 30 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      Cím
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      1051 Budapest,<br />Példa utca 12.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-700">
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Mit kapsz tőlünk?
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span><strong>1 hét alatt</strong> kész oldal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span><strong>SEO optimalizálás</strong> alapból</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span><strong>Ingyenes karbantartás</strong> 3-12 hónapig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 font-bold">✓</span>
                  <span><strong>Pénzvisszafizetési</strong> garancia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Név *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Teljes neved"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email cím *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="pelda@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Telefonszám
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Üzenet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Meséld el a projektedről..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300 hover:bg-orange-600 flex items-center justify-center gap-2"
              >
                Ajánlatot kérek
                <Send size={20} />
              </button>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
                24 órán belül jelentkezünk részletes ajánlattal
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
