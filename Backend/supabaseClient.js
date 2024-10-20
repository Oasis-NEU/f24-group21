import 'dotenv/config'; // Load .env variables
import { createClient } from '@supabase/supabase-js';

// Use environment variables instead of hardcoding values
const supabaseURL = process.env.SUPABASE_URL; 
const supabaseAnonKey = process.env.SUPABASE_ANON;

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase;
