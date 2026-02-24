import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Share2, Twitter, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBlogBySlug, getBlogs } from '../lib/supabase'

const normalizeUrl = (url) => {
  if (!url) return ''
  try {
    const urlObj = new URL(url)
    urlObj.hostname = urlObj.hostname.replace(/^www\./, '')
    return urlObj.href
  } catch {
    return url
  }
}

const updateMetaTags = (blog) => {
  if (!blog) return
  document.title = blog.meta_title || blog.title || 'Blog | Excel Aesthetics'

  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = blog.meta_description || blog.excerpt || ''

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  const canonicalUrl = blog.canonical_url 
    ? normalizeUrl(blog.canonical_url)
    : normalizeUrl(window.location.href)
  canonical.href = canonicalUrl

  const ogTags = {
    'og:title': blog.meta_title || blog.title,
    'og:description': blog.meta_description || blog.excerpt,
    'og:image': blog.cover_image,
    'og:url': normalizeUrl(window.location.href),
    'og:type': 'article'
  }
  
  Object.entries(ogTags).forEach(([property, content]) => {
    if (!content) return
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.content = content
  })
}

const BlogPost = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      const { data, error } = await getBlogBySlug(slug)
      
      if (error || !data) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setBlog(data)
      updateMetaTags(data)

      const { data: allBlogs } = await getBlogs(true)
      const related = (allBlogs || [])
        .filter(b => b.id !== data.id)
        .slice(0, 3)
      setRelatedBlogs(related)
      
      setLoading(false)
    }

    fetchBlog()
    window.scrollTo(0, 0)
  }, [slug])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200
    const text = content.replace(/<[^>]*>/g, '')
    const words = text.split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`, '_blank')
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-neutral-500">Loading article...</p>
        </div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-light text-neutral-700 mb-4">404</h1>
          <h2 className="text-2xl text-neutral-300 mb-4">Article Not Found</h2>
          <p className="text-neutral-500 mb-8">The blog post you're looking for doesn't exist or was removed.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-orange-200 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="relative">
        {blog.cover_image ? (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"></div>
          </div>
        ) : (
          <div className="h-[30vh] md:h-[25vh] bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
        )}
        <div className="absolute top-20 md:top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-orange-200 transition-colors bg-black/30 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full text-xs md:text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden md:inline">Back to Blog</span>
              <span className="md:hidden">Back</span>
            </Link>
          </div>
        </div>
        <div className={`relative ${blog.cover_image ? '-mt-40 md:-mt-48' : 'pt-28 md:pt-32'} z-10`}>
          <div className="container mx-auto px-4">
            <header className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-neutral-400 mb-4 md:mb-6">
                <span className="flex items-center gap-1.5 md:gap-2">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-200" />
                  {formatDate(blog.created_at)}
                </span>
                {blog.author && (
                  <span className="flex items-center gap-1.5 md:gap-2">
                    <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-200" />
                    {blog.author}
                  </span>
                )}
                <span className="flex items-center gap-1.5 md:gap-2">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-200" />
                  {calculateReadTime(blog.content)}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-light text-white leading-tight mb-4 md:mb-6 px-2">
                {blog.title}
              </h1>
              {blog.excerpt && (
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto px-2">
                  {blog.excerpt}
                </p>
              )}
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-orange-200/50"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-200"></div>
                <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-orange-200/50"></div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <article className="container mx-auto px-4 pb-12 md:pb-16 mt-8 md:mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 md:p-10 lg:p-14">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          <div className="mt-8 md:mt-10 p-5 md:p-8 bg-neutral-900 border border-neutral-800 rounded-lg">
            <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
              <div>
                <p className="text-neutral-300 font-medium mb-1 text-sm md:text-base">Enjoyed this article?</p>
                <p className="text-neutral-500 text-xs md:text-sm">Share it with your friends and family</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={shareOnTwitter}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-orange-200 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-all duration-300"
                  title="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-orange-200 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-all duration-300"
                  title="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-orange-200 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-all duration-300"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={copyLink}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-orange-200 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-all duration-300"
                  title="Copy Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      {relatedBlogs.length > 0 && (
        <section className="bg-neutral-900/30 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-light text-white mb-3 md:mb-4">
                Related <span className="text-orange-200">Articles</span>
              </h2>
              <p className="text-neutral-500 text-sm md:text-base">Continue exploring our blog</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-6 max-w-5xl mx-auto">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-orange-200/30 transition-all duration-300"
                >
                  {relatedBlog.cover_image && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedBlog.cover_image} 
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-4 md:p-5">
                    <h3 className="text-neutral-100 group-hover:text-orange-200 transition-colors mb-2 line-clamp-2 font-medium text-sm md:text-base">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-neutral-500 text-xs md:text-sm line-clamp-2 hidden md:block">
                      {relatedBlog.excerpt || 'Read more...'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-orange-200/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-orange-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl font-light text-white mb-3 md:mb-4">
                Ready to Start Your <span className="text-orange-200">Transformation</span>?
              </h3>
              <p className="text-neutral-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
                Schedule a free consultation with our expert team and discover how we can help you achieve your aesthetic goals.
              </p>
              <a 
                href="https://excelaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-200 text-neutral-950 hover:bg-orange-300 px-6 md:px-8 py-3 md:py-4 rounded uppercase tracking-wider text-xs font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
