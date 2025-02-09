import React, { useState } from 'react';
import { Search, Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterOption {
  label: string;
  value: string;
}

const industryOptions: FilterOption[] = [
  { label: 'Technology', value: 'technology' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Financial Services', value: 'financial' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Energy', value: 'energy' },
  { label: 'Transportation', value: 'transportation' },
];

const revenueRanges: FilterOption[] = [
  { label: '$1M - $5M', value: '1-5' },
  { label: '$5M - $20M', value: '5-20' },
  { label: '$20M - $50M', value: '20-50' },
  { label: '$50M - $100M', value: '50-100' },
  { label: '$100M+', value: '100-plus' },
];

const employeeRanges: FilterOption[] = [
  { label: '1-10', value: '1-10' },
  { label: '11-50', value: '11-50' },
  { label: '51-200', value: '51-200' },
  { label: '201-500', value: '201-500' },
  { label: '500+', value: '500-plus' },
];

const growthRanges: FilterOption[] = [
  { label: '0-20%', value: '0-20' },
  { label: '21-50%', value: '21-50' },
  { label: '51-100%', value: '51-100' },
  { label: '100%+', value: '100-plus' },
];

export function SearchFilters() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary" />
          <Input
            type="text"
            placeholder="SaaS companies based in San Francisco with at least $25M+ revenue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 h-12 text-base transition-shadow duration-200 border-gray-200 focus:border-primary hover:border-gray-300"
          />
          <Button
            variant="default"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"
          >
            Search
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters</span>
        </Button>
      </div>

      <AnimatePresence>
        {showAdvancedFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Industry</label>
                <div className="relative">
                  <select className="w-full h-10 appearance-none rounded-md border border-gray-200 bg-white pl-4 pr-8 text-sm transition-colors focus:border-primary focus:outline-none hover:border-gray-300">
                    <option value="">All Industries</option>
                    {industryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Revenue</label>
                <div className="relative">
                  <select className="w-full h-10 appearance-none rounded-md border border-gray-200 bg-white pl-4 pr-8 text-sm transition-colors focus:border-primary focus:outline-none hover:border-gray-300">
                    <option value="">Any Revenue</option>
                    {revenueRanges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Team Size</label>
                <div className="relative">
                  <select className="w-full h-10 appearance-none rounded-md border border-gray-200 bg-white pl-4 pr-8 text-sm transition-colors focus:border-primary focus:outline-none hover:border-gray-300">
                    <option value="">Any Size</option>
                    {employeeRanges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Growth Rate</label>
                <div className="relative">
                  <select className="w-full h-10 appearance-none rounded-md border border-gray-200 bg-white pl-4 pr-8 text-sm transition-colors focus:border-primary focus:outline-none hover:border-gray-300">
                    <option value="">Any Growth Rate</option>
                    {growthRanges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}