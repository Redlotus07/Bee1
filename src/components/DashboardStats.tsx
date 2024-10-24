
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function DashboardStats() {
  const stats = [
    {
      name: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trending: 'up',
    },
    {
      name: 'Expenses',
      value: '$21,312.00',
      change: '-4.3%',
      trending: 'down',
    },
    {
      name: 'Net Profit',
      value: '$23,919.89',
      change: '+28.4%',
      trending: 'up',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
            {stat.trending === 'up' ? (
              <TrendingUp className="w-5 h-5 text-green-500" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-500" />
            )}
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          <p
            className={`mt-2 text-sm ${
              stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
