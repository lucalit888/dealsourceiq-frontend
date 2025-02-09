import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { SearchFilters } from './components/SearchFilters';
import { CompanyCard } from './components/CompanyCard';
import { CompanyProfile } from './components/company/CompanyProfile';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';
import { SavedSearches } from './components/saved/SavedSearches';
import { Building, BarChart3, BookmarkPlus, Settings, Bell } from 'lucide-react';
import { Button } from './components/ui/button';

// Mock data for demonstration
const mockCompanies = [
  {
    name: 'HealthTech Innovations',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    industry: 'Healthcare Technology',
    revenue: '$10M - $25M',
    growth: 65,
    employees: '50-100',
    ebitda: 22,
    description: 'Innovative healthcare technology company specializing in patient engagement and remote monitoring solutions.',
    location: 'Boston, MA',
    founded: 2019,
    techStack: ['Python', 'TensorFlow', 'GCP', 'MongoDB'],
  },
  {
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
    techStack: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'DataSphere Analytics',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    industry: 'Data Analytics',
    revenue: '$5M - $10M',
    growth: 85,
    employees: '25-50',
    ebitda: 18,
    description: 'Next-generation data analytics platform leveraging AI/ML for business intelligence and predictive analytics.',
    location: 'Austin, TX',
    founded: 2020,
    techStack: ['Python', 'React', 'Azure', 'Snowflake'],
  },
];

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex-shrink-0">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  DealScopeIQ
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/analytics">
                <Button
                  variant={location.pathname === '/analytics' ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Button>
              </Link>
              <Link to="/saved">
                <Button
                  variant={location.pathname === '/saved' ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <BookmarkPlus className="h-4 w-4" />
                  <span>Saved</span>
                </Button>
              </Link>
              <Button variant="ghost" className="gap-2">
                <Bell className="h-4 w-4" />
                <span>Alerts</span>
              </Button>
              <Button variant="ghost" className="gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Deal Finder</h1>
        <p className="text-gray-500">Find and analyze potential acquisition targets</p>
      </div>

      <SearchFilters />

      <div className="mt-8 space-y-6">
        {mockCompanies.map((company, index) => (
          <Link key={index} to={`/company/${index + 1}`}>
            <CompanyCard company={company} />
          </Link>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/company/:id" element={<MainLayout><CompanyProfile /></MainLayout>} />
        <Route path="/analytics" element={<MainLayout><AnalyticsDashboard /></MainLayout>} />
        <Route path="/saved" element={<MainLayout><SavedSearches /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;