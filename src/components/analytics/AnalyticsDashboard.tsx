import React from 'react';
import { BarChart, LineChart, PieChart, Activity, TrendingUp, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    name: 'Total Companies',
    value: '2,847',
    change: '+12.5%',
    icon: Building2,
    color: 'text-primary',
    bgColor: 'bg-primary/5',
  },
  {
    name: 'Average Revenue',
    value: '$28.3M',
    change: '+8.2%',
    icon: TrendingUp,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Average Team Size',
    value: '127',
    change: '+15.3%',
    icon: Users,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Deal Flow',
    value: '324',
    change: '+23.1%',
    icon: Activity,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className={`${metric.bgColor} p-3 rounded-lg`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{metric.name}</h3>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Deal Flow Trends</h3>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            <LineChart className="h-8 w-8" />
            <span className="ml-2">Chart placeholder</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Industry Distribution</h3>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5">
              <option>By count</option>
              <option>By revenue</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            <PieChart className="h-8 w-8" />
            <span className="ml-2">Chart placeholder</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Revenue Distribution</h3>
          <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5">
            <option>All industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Financial Services</option>
          </select>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-400">
          <BarChart className="h-8 w-8" />
          <span className="ml-2">Chart placeholder</span>
        </div>
      </div>
    </div>
  );
}