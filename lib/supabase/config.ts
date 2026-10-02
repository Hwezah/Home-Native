export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Supabase is a placeholder for now: everything degrades gracefully when unset. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
