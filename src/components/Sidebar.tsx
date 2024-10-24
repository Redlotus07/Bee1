
import React from 'react';
import { BarChart3, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-8 h-8 text-teal-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Beekeeper AI</span>
        </div>
      </div>
      
      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {[
            { icon: BarChart3, name: 'Dashboard', active: true },
            { icon: TrendingUp, name: 'Analytics' },
            { icon: DollarSign, name: 'Transactions' },
            { icon: Users, name: 'Team' },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                item.active
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
