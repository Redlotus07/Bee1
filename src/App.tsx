import React from 'react';
import { BarChart3, DollarSign, TrendingUp, Users, Bell, Settings, Sun } from 'lucide-react';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import RevenueChart from './components/RevenueChart';
import ExpensesList from './components/ExpensesList';
import Header from './components/Header';

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <Header />
        
        <main className="p-6">
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <RevenueChart />
            <ExpensesList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;