import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jokpntiqzdyabzpoldoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impva3BudGlxemR5YWJ6cG9sZG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzOTc5MDcsImV4cCI6MjA1ODk3MzkwN30.1C7v1Odc_bxV7uYhoKlpfcZEzxyTzKAP9UYua0u47Mc';

export const supabase = createClient(supabaseUrl, supabaseKey);