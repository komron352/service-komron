import { createClient } from '@supabase/supabase-js'
const url = (import.meta.env.VITE_SUPABASE_URL as string)?.trim()
const key = (import.meta.env.VITE_SUPABASE_ANON_KEY as string)?.trim() || (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string)?.trim()
export const isConfigured = Boolean(url && key)
export const supabase = createClient(url || 'https://placeholder.supabase.co', key || 'placeholder', { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce', storageKey: 'imran-auth' } })
export const ADMIN_USERNAME = 'IMRAN'
export const ADMIN_EMAIL = 'admin@imran-service.local'
