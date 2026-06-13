import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yznmtukgddwylslafjnm.supabase.co'
const supabaseAnonKey = 'sb_publishable_63S7sEetdzeLKFuuEct0hw_8fidXZL-'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)