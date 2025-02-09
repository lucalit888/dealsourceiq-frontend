import React from 'react';
import { TrendingUp, Users, DollarSign, Award, Building2, Briefcase, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface CompanyCardProps {
  company: {
    name: string;
    logo: string;
    industry: string;
    revenue: string;
    growth: number;
    employees: string;
    ebitda: number;
    description: string;
    location?: string;
    founded?: number;
    techStack?: string[];
  };
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16">
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <Building2 className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">{company.industry}</span>
            </div>
            {company.location && (
              <div className="flex items-center space-x-2 mt-1">
                <Globe className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{company.location}</span>
              </div>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          className="text-primary hover:text-primary hover:bg-primary/5"
        >
          View Details
        </Button>
      </div>

      <p className="text-sm text-gray-600 mb-6 line-clamp-2">{company.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Revenue</p>
            <p className="text-sm font-semibold text-gray-900">{company.revenue}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Growth</p>
            <p className="text-sm font-semibold text-gray-900">+{company.growth}%</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Team Size</p>
            <p className="text-sm font-semibold text-gray-900">{company.employees}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
            <Award className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">EBITDA</p>
            <p className="text-sm font-semibold text-gray-900">{company.ebitda}%</p>
          </div>
        </div>
      </div>

      {company.techStack && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {company.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}