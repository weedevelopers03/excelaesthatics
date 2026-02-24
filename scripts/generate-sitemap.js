/**
 * Script para generar sitemap.xml dinámicamente
 * Ejecutar con: node scripts/generate-sitemap.js
 * 
 * Requiere variables de entorno:
 * - REACT_APP_SUPABASE_URL
 * - REACT_APP_SUPABASE_ANON_KEY
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const DOMAIN = 'https://excelaestheticsmiami.com' // Sin www para consistencia
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml')

// Páginas estáticas del sitio
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/payment-plans', priority: '0.8', changefreq: 'monthly' },
]

async function generateSitemap() {
  console.log('🚀 Generando sitemap.xml...')
  
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Error: Variables de entorno de Supabase no encontradas')
    console.error('   Asegúrate de tener .env.local con REACT_APP_SUPABASE_URL y REACT_APP_SUPABASE_ANON_KEY')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Obtener todos los blogs publicados
  let blogPages = []
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug, updated_at, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('❌ Error al obtener blogs:', error)
    } else {
      blogPages = (blogs || []).map(blog => ({
        url: `/blog/${blog.slug}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: blog.updated_at || blog.created_at
      }))
      console.log(`✅ Encontrados ${blogPages.length} blogs publicados`)
    }
  } catch (err) {
    console.error('❌ Error al conectar con Supabase:', err.message)
  }

  // Generar XML del sitemap
  const currentDate = new Date().toISOString().split('T')[0]
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Agregar páginas estáticas
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  })

  // Agregar páginas de blog
  blogPages.forEach(page => {
    const lastmod = page.lastmod 
      ? new Date(page.lastmod).toISOString().split('T')[0]
      : currentDate
    xml += `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  })

  xml += `</urlset>`

  // Escribir archivo
  try {
    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8')
    console.log(`✅ Sitemap generado exitosamente en: ${SITEMAP_PATH}`)
    console.log(`   Total de URLs: ${staticPages.length + blogPages.length}`)
  } catch (err) {
    console.error('❌ Error al escribir sitemap.xml:', err)
    process.exit(1)
  }
}

generateSitemap()
