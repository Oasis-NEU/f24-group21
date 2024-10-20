// supabase.js
require('dotenv').config(); // Load .env variables

const { createClient } = require('@supabase/supabase-js');

// Use environment variables instead of hardcoding values
const supabaseURL = process.env.SUPABASE_URL; 
const supabaseAnonKey = process.env.SUPABASE_ANON;

const supabase = createClient(supabaseURL, supabaseAnonKey);

module.exports = supabase;
