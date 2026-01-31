'use client';

import { Shield, Lock, Clock, CheckCircle2, Users, Award } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: 'GDPR Kompatibilis',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lock,
      text: 'SSL Biztonság',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      text: '2-3 Óra Válaszidő',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: CheckCircle2,
      text: '30 Nap Garancia',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Users,
      text: '150+ Elégedett Ügyfél',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Award,
      text: 'Professzionális Csapat',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 glass border border-white/10 px-3 sm:px-4 py-2 rounded-lg hover:border-white/20 transition-all duration-300 md:hover:scale-105"
        >
          <div className={`w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}
