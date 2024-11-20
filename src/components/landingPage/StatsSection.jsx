import React from 'react';
import { Users, Heart, CheckCircle, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { value: '10K+', label: 'Active Users', icon: Users },
    { value: '95%', label: 'Satisfaction', icon: Heart },
    { value: '24/7', label: 'Support', icon: CheckCircle },
    { value: '100+', label: 'Features', icon: Zap }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-violet-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center transform transition-all duration-700 hover:scale-105 bg-white/50 backdrop-blur-sm p-6 rounded-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;