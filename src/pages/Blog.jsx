import { ArrowRight, Calendar, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogs } from '../lib/supabase'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await getBlogs(true) // Only published
      setBlogs(data || [])
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-neutral-950 pt-32 md:pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-4xl font-light mb-4 md:mb-6 uppercase tracking-tight">
            <span className="text-neutral-100">Our </span>
            <span className="text-orange-200">Blog</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed px-4">
            Discover tips, trends, and everything about the world of aesthetics and wellness.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-neutral-500">Loading articles...</p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl text-neutral-300 mb-2">Coming Soon</h3>
            <p className="text-neutral-500">We're preparing amazing content for you.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-4 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <article 
                key={blog.id}
                className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-orange-200/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
                  <div className="aspect-video bg-neutral-800 overflow-hidden">
                    {blog.cover_image ? (
                      <img 
                        src={blog.cover_image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                        <span className="text-4xl font-light text-neutral-700">
                          {blog.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(blog.created_at)}
                    </span>
                    {blog.author && (
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {blog.author}
                      </span>
                    )}
                  </div>
                  <Link to={`/blog/${blog.slug}`}>
                    <h2 className="text-lg font-medium text-neutral-100 mb-2 group-hover:text-orange-200 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>
                  {blog.excerpt && (
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  <Link 
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-orange-200 text-xs uppercase tracking-wider font-medium hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-20">
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-light text-neutral-100 mb-3 md:mb-4">
            Have questions about our treatments?
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you achieve your aesthetic goals.
          </p>
          <a 
            href="https://excelaesthetics.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-200 text-neutral-950 hover:bg-orange-300 px-6 md:px-8 py-3 md:py-4 rounded uppercase tracking-wider text-xs font-semibold transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog

