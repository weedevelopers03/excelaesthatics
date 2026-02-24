import { Edit, Eye, FileText, LogOut, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteBlog, getBlogs, signOut } from '../../lib/supabase'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const { data: blogsData } = await getBlogs(false)
    setBlogs(blogsData || [])
    setLoading(false)
  }

  const handleLogout = async () => {
    await signOut()
    navigate('/admin')
  }

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return

    const { error } = await deleteBlog(id)
    if (error) {
      alert('Error deleting: ' + error.message)
      return
    }

    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const publishedCount = blogs.filter(b => b.published).length
  const draftCount = blogs.filter(b => !b.published).length

  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/" className="text-lg md:text-xl font-light text-neutral-100 uppercase tracking-wider">
              Excel<span className="text-orange-200">Aesthetics</span>
            </Link>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="text-neutral-400 text-xs md:text-sm hidden md:inline">Admin Panel</span>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-200 transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Sign Out</span>
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 pt-32 md:pt-24 pb-8">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-3 mb-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 md:p-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-200/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-orange-200" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl md:text-3xl font-light text-neutral-100">{blogs.length}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide truncate">Total Blogs</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 md:p-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl md:text-3xl font-light text-neutral-100">{publishedCount}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide truncate">Published</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 md:p-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                <Edit className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl md:text-3xl font-light text-neutral-100">{draftCount}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide truncate">Drafts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg">
          <div className="p-4 md:p-6 border-b border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <h2 className="text-lg md:text-xl font-normal text-neutral-100 uppercase tracking-wide">
              Blog Management
            </h2>
            <Link
              to="/admin/blogs/new"
              className="flex items-center gap-2 bg-orange-200 text-neutral-950 hover:bg-orange-300 px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Blog
            </Link>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="w-8 h-8 border-2 border-orange-200 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-neutral-500">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
              <p className="text-neutral-500 mb-4">No blogs yet</p>
              <Link
                to="/admin/blogs/new"
                className="inline-flex items-center gap-2 text-orange-200 hover:text-orange-300 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create your first blog
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-neutral-800">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-4 md:p-6 hover:bg-neutral-800/50 transition-colors">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-800 rounded flex-shrink-0 overflow-hidden">
                      {blog.cover_image ? (
                        <img 
                          src={blog.cover_image} 
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-6 h-6 md:w-8 md:h-8 text-neutral-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs uppercase tracking-wide flex-shrink-0 ${
                          blog.published 
                            ? 'bg-green-500/10 text-green-400' 
                            : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {blog.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <h3 className="text-neutral-100 font-medium text-sm md:text-base line-clamp-1 mb-1">{blog.title}</h3>
                      <p className="text-neutral-600 text-xs">{formatDate(blog.created_at)}</p>
                      <div className="flex items-center gap-1 mt-3">
                        <Link
                          to={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 text-neutral-500 hover:text-orange-200 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="p-2 text-neutral-500 hover:text-orange-200 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
