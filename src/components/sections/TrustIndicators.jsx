import React from 'react';
import StatCard from '../cards/StatCard';
import { Award, BookOpen, Users } from 'lucide-react';

export default function TrustIndicators() {
  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: BookOpen,
      number: "100+",
      label: "Articles Published"
    },
    {
      icon: Users,
      number: "50k+",
      label: "Monthly Readers"
    }
  ];

  return (
    <section className="max-w-container-max mx-auto px-gutter py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
