import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Webshop',
    description: 'Modern online áruház teljes körű fizetési integrációval',
    image: '/portfolio-1.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Céges Bemutatkozó',
    category: 'Corporate',
    description: 'Elegáns bemutatkozó oldal animációkkal és interaktív tartalommal',
    image: '/portfolio-2.jpg',
    tags: ['React', 'Framer Motion', 'TypeScript'],
  },
  {
    title: 'Étterem Weboldal',
    category: 'Vendéglátás',
    description: 'Online foglalási rendszerrel és étlap megjelenítéssel',
    image: '/portfolio-3.jpg',
    tags: ['Next.js', 'CMS', 'SEO'],
  },
  {
    title: 'Fitness App',
    category: 'Wellness',
    description: 'Edzésterv követő alkalmazás személyre szabott tartalommal',
    image: '/portfolio-4.jpg',
    tags: ['PWA', 'React', 'API'],
  },
  {
    title: 'Ingatlan Portál',
    category: 'Real Estate',
    description: 'Keresővel és szűrőkkel ellátott ingatlan kereső rendszer',
    image: '/portfolio-5.jpg',
    tags: ['Next.js', 'Maps API', 'Database'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'B2B',
    description: 'Komplex admin felület analitikákkal és riportokkal',
    image: '/portfolio-6.jpg',
    tags: ['React', 'Charts', 'Real-time'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Portfólió
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Büszkék vagyunk eddigi munkáinkra és az elégedett ügyfeleinkre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
