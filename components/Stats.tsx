export default function Stats() {
  const stats = [
    { 
      number: '3', 
      suffix: ' év', 
      label: 'Tapasztalat', 
      icon: '🎯',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      number: '< 1', 
      suffix: 's', 
      label: 'Betöltési idő', 
      icon: '⚡',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '100', 
      suffix: '%', 
      label: 'Elégedett ügyfelek', 
      icon: '✨',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      number: '7-14', 
      suffix: ' nap', 
      label: 'Átfutási idő', 
      icon: '🚀',
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white dark:bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Icon with gradient bg */}
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              
              {/* Number */}
              <div className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}<span className="text-2xl sm:text-3xl">{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <div className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
