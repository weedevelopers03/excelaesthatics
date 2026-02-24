import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables missing. Check .env.local file.')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Auth helpers
export const signIn = async (email, password) => {
  if (!supabase) throw new Error('Supabase not configured')
  return await supabase.auth.signInWithPassword({ email, password })
}

export const signOut = async () => {
  if (!supabase) throw new Error('Supabase not configured')
  return await supabase.auth.signOut()
}

export const getSession = async () => {
  if (!supabase) return { data: { session: null } }
  return await supabase.auth.getSession()
}

export const onAuthStateChange = (callback) => {
  if (!supabase) return { data: { subscription: { unsubscribe: () => {} } } }
  return supabase.auth.onAuthStateChange(callback)
}

// Blog helpers
export const getBlogs = async (publishedOnly = true) => {
  if (!supabase) return { data: [], error: null }
  
  let query = supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (publishedOnly) {
    query = query.eq('published', true)
  }
  
  return await query
}

export const getBlogBySlug = async (slug) => {
  if (!supabase) return { data: null, error: null }
  
  return await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single()
}

export const getBlogById = async (id) => {
  if (!supabase) return { data: null, error: null }
  
  return await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single()
}

export const createBlog = async (blogData) => {
  if (!supabase) throw new Error('Supabase not configured')
  
  return await supabase
    .from('blogs')
    .insert([blogData])
    .select()
    .single()
}

export const updateBlog = async (id, blogData) => {
  if (!supabase) throw new Error('Supabase not configured')
  
  return await supabase
    .from('blogs')
    .update({ ...blogData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
}

export const deleteBlog = async (id) => {
  if (!supabase) throw new Error('Supabase not configured')
  
  return await supabase
    .from('blogs')
    .delete()
    .eq('id', id)
}

// Image upload helper
export const uploadImage = async (file, path) => {
  if (!supabase) throw new Error('Supabase not configured')
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`
  const filePath = `${path}/${fileName}`
  
  const { error } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file)
  
  if (error) throw error
  
  const { data } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath)
  
  return data.publicUrl
}

