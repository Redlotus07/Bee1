
import React from 'react' ;

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
      <div className="mt-4 h-64 flex items-end space-x-2">
        {[40, 25, 60, 35, 45, 75, 50].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="bg-teal-500 dark:bg-teal-400 rounded-t transition-all duration-500 ease-out hover:bg-teal-600"
              style={{
                height: `${height}%`, // Removed the backslash
                animation: `grow 1s ease-out ${i * 0.1}s backwards`, // Removed the backslash
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes grow {
          from { height: 0; }
        }
      `}</style>
    </div>
  );
}
