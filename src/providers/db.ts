import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bzpvyaqhcroqbstduylk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY as string | undefined;

if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not set in environment variables');
}
export const supabase = createClient(supabaseUrl, supabaseKey)
