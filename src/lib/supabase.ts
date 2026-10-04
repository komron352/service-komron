import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string)?.trim()
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string)?.trim() || (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string)?.trim()

export const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isConfigured) {
  console.warn('[Supabase] VITE_SUPABASE_URL ё VITE_SUPABASE_ANON_KEY танзим нашудааст. Дар Vercel Environment Variables санҷед.')
} else {
  console.log('[Supabase] Configured:', supabaseUrl?.slice(0, 30) + '...', 'Key type:', supabaseAnonKey?.startsWith('sb_publishable_') ? 'publishable' : 'anon')
}

// Ҳамеша client месозем, то null набошад - ҳатто бо placeholder, то Load failed надиҳад
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    },
    global: {
      headers: { 'X-Client-Info': 'imran-service-crm' }
    }
  }
)
