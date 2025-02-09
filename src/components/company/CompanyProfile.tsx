import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, Globe, Calendar, Users, TrendingUp, DollarSign, Award, Link, Briefcase, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function CompanyProfile() {
  const { id } = useParams();

  // Mock data - would be fetched from Supabase in production
  const company = {
    name: 'TechFlow Solutions',
    logo: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    industry: 'Enterprise Software',
    revenue: '$25M - $50M',
    growth: 45,
    employees: '100-250',
    ebitda: 28,
    description: 'Leading provider of enterprise workflow automation solutions with strong market presence in North America.',
    location: 'San Francisco, CA',
    founded: 2018,
    website: 'https://techflow.example.com',
    linkedin: 'https://linkedin.com/company/techflow',
    techStack: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    keyMetrics: {
      arr: '$28.5M',
      ltv: '$450K',
      cac: '$35K',
      churn: '5%',
    },
    management: [
      {
        name: 'Sarah Chen',
        title: 'CEO & Co-founder',
        linkedin: 'https://linkedin.com/in/sarah-chen',
      },
      {
        name: 'Michael Rodriguez',
        title: 'CTO & Co-founder',
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
      },
    ],
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-gray-500">
                  <Building2 className="h-4 w-4 mr-1" />
                  <span className="text-sm">{company.industry}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-sm">{company.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">Founded {company.founded}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Link className="h-4 w-4" />
                  Website
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <Button variant="default">Add to Watchlist</Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="bg-primary/5 p-3 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-green-600">Growing</span>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">Team Size</h3>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{company.employees}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="bg-green-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <span className="text-sm font-medium text-green-600">+{company.growth}%</span>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">Growth Rate</h3>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{company.growth}%</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="bg-blue-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">Revenue Range</h3>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{company.revenue}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">EBITDA Margin</h3>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{company.ebitda}%</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Overview</h2>
            <p className="text-gray-600">{company.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Annual Recurring Revenue</h3>
                <p className="text-xl font-semibold text-gray-900 mt-1">{company.keyMetrics.arr}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Customer LTV</h3>
                <p className="text-xl font-semibold text-gray-900 mt-1">{company.keyMetrics.ltv}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Customer Acquisition Cost</h3>
                <p className="text-xl font-semibold text-gray-900 mt-1">{company.keyMetrics.cac}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Annual Churn Rate</h3>
                <p className="text-xl font-semibold text-gray-900 mt-1">{company.keyMetrics.churn}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {company.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Management Team</h2>
            <div className="space-y-4">
              {company.management.map((person) => (
                <div key={person.name} className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{person.name}</h3>
                    <p className="text-sm text-gray-500">{person.title}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Briefcase className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}