import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASEURL
// const supabaseKey = process.env.SUPABASEKEY

// export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabase = createClient('https://atepfjyykoqhkyzpnziv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZXBmanl5a29xaGt5enBueml2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUyNDE3OSwiZXhwIjoyMDYyMTAwMTc5fQ.W4eX9Tl_ym-3hPbK6rviWamwLVC7T397O0JWHxuh5b0')