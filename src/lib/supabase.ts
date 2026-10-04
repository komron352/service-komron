import { createClient } from '@supabase/supabase-js'
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string)?.trim()
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string)?.trim() || (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string)?.trim()
export const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' } }
)