import React from 'react';
import { Search, Trash2, Bell, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

// Mock data - would be fetched from Supabase in production
const savedSearches = [
  {
    id: 1,
    name: 'SaaS Companies in California',
    filters: {
      industry: 'Software',
      location: 'California',
      revenue: '$10M - $50M',
      growth: '> 30%',
    },
    lastRun: '2024-02-20T10:00:00Z',
    alertEnabled: true,
  },
  {
    id: 2,
    name: 'Healthcare Tech Growth Companies',
    filters: {
      industry: 'Healthcare',
      subIndustry: 'Technology',
      growth: '> 50%',
      employees: '50-200',
    },
    lastRun: '2024-02-19T15:30:00Z',
    alertEnabled: false,
  },
  {
    id: 3,
    name: 'High EBITDA Manufacturing',
    filters: {
      industry: 'Manufacturing',
      ebitda: '> 25%',
      revenue: '$50M+',
    },
    lastRun: '2024-02-18T09:15:00Z',
    alertEnabled: true,
  },
];

export function SavedSearches() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Saved Searches</h1>
          <p className="text-gray-500 mt-1">Manage your saved searches and alerts</p>
        </div>
        <Button variant="default" className="gap-2">
          <Search className="h-4 w-4" />
          New Search
        </Button>
      </div>

      <div className="space-y-4">
        {savedSearches.map((search, index) => (
          <motion.div
            key={search.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{search.name}</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(search.filters).map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Last run: {new Date(search.lastRun).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={search.alertEnabled ? 'default' : 'outline'}
                  size="sm"
                  className="gap-2"
                >
                  <Bell className="h-4 w-4" />
                  {search.alertEnabled ? 'Alerts On' : 'Alerts Off'}
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}