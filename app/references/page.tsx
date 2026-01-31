import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Access to Italy',
    url: 'https://accesstoitaly.com',
    description: 'Teljes körű utazási platform Olaszországba. Modern booking rendszer, multilang support, integrált fizetés.',
    tags: ['Next.js', 'Booking', 'Multilang'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Entrigo Tickets',
    url: 'https://entrigotickets.com',
    description: 'Jegy értékesítési platform. Real-time foglalás, payment gateway integráció, admin dashboard.',
    tags: ['React', 'Payment Gateway', 'Real-time'],
    color: 'from-purple-500 to-purple-600',
  },
];

export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            ← Vissza
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-20">
        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Referenciák
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Néhány projekt, amin dolgoztunk
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Colored accent */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${project.color} rounded-l-2xl`}></div>

              <div className="ml-6">
                {/* Title & Link */}
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <span className="text-sm">Megtekintés</span>
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Szeretnél hasonló projektet?
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Kérj ajánlatot
          </Link>
        </div>
      </main>
    </div>
  );
}
