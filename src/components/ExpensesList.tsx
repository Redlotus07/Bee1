import React from 'react';
import { DollarSign } from 'lucide-react';

export default function ExpensesList() {
  const expenses = [
    {
      name: 'Office Supplies',
      amount: '$234.56',
      date: 'Today',
      category: 'Operations',
    },
    {
      name: 'Software Licenses',
      amount: '$899.99',
      date: 'Yesterday',
      category: 'Technology',
    },
    {
      name: 'Team Lunch',
      amount: '$156.78',
      date: '2 days ago',
      category: 'Meals',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Expenses</h2>
      <div className="mt-4 space-y-4">
        {expenses.map((expense, i) => (
          <div
            key={i}
            className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all hover:scale-[1.02]"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{expense.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{expense.category}</p>
            </div>
            <div className="ml-4 text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{expense.amount}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{expense.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}