/*
  # Companies and Related Tables Schema

  1. New Tables
    - `companies`
      - Core company information and metrics
    - `tech_stacks`
      - Technology stack information
    - `customers`
      - Customer information for concentration analysis
    - `saved_searches`
      - User saved search preferences
    - `company_market_positions`
      - Market position and competitive analysis

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Companies Table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  industry text NOT NULL,
  sub_industry text,
  description text,
  revenue_range text,
  annual_revenue numeric,
  growth_rate numeric,
  employee_count integer,
  ebitda_margin numeric,
  location text,
  headquarters text,
  founded_year integer,
  website text,
  linkedin_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tech Stacks Table
CREATE TABLE IF NOT EXISTS tech_stacks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id),
  technology text NOT NULL,
  category text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Customers Table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id),
  customer_name text NOT NULL,
  revenue_contribution numeric,
  relationship_length interval,
  created_at timestamptz DEFAULT now()
);

-- Saved Searches Table
CREATE TABLE IF NOT EXISTS saved_searches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  filters jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Company Market Positions Table
CREATE TABLE IF NOT EXISTS company_market_positions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id),
  market_share numeric,
  competitive_position text,
  key_strengths text[],
  key_challenges text[],
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_stacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_market_positions ENABLE ROW LEVEL SECURITY;

-- Policies for companies
CREATE POLICY "Companies are viewable by authenticated users"
  ON companies FOR SELECT
  TO authenticated
  USING (true);

-- Policies for tech_stacks
CREATE POLICY "Tech stacks are viewable by authenticated users"
  ON tech_stacks FOR SELECT
  TO authenticated
  USING (true);

-- Policies for customers
CREATE POLICY "Customers are viewable by authenticated users"
  ON customers FOR SELECT
  TO authenticated
  USING (true);

-- Policies for saved_searches
CREATE POLICY "Users can manage their own saved searches"
  ON saved_searches FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policies for market positions
CREATE POLICY "Market positions are viewable by authenticated users"
  ON company_market_positions FOR SELECT
  TO authenticated
  USING (true);

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_saved_searches_updated_at
  BEFORE UPDATE ON saved_searches
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();