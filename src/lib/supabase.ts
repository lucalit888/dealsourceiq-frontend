import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Company = Database['public']['Tables']['companies']['Row'];
export type TechStack = Database['public']['Tables']['tech_stacks']['Row'];
export type Customer = Database['public']['Tables']['customers']['Row'];
export type SavedSearch = Database['public']['Tables']['saved_searches']['Row'];
export type MarketPosition = Database['public']['Tables']['company_market_positions']['Row'];