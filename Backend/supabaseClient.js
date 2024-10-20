const {createClient} = require ('@supabase/supabase-js');

const supabaseURL = 'https://yhnhecvvetphydwjisvi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobmhlY3Z2ZXRwaHlkd2ppc3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzE1NjIsImV4cCI6MjA0MzgwNzU2Mn0.XS0okew_BZeB224XDsNsCqvrC6OusdNejV3TS_5lGeQ'
const supabase = createClient (supabaseURL, supabaseAnonKey);

module.exports = supabase;


