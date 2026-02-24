import { ArrowLeft, Bold, Eye, Heading1, Heading2, Heading3, Heading4, Image, Italic, List, Save } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createBlog, getBlogById, updateBlog, uploadImage } from '../../lib/supabase'

const BlogEditor = () => {
  const { id } = useParams()
  const isEditing = !!id
  const navigate = useNavigate()

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const [activeTab, setActiveTab] = useState('content')
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    author: '',
    published: false,
    meta_title: '',
    meta_description: '',
    focus_keyword: '',
    canonical_url: ''
  })

  useEffect(() => {
    if (!isEditing || !id) return
    const load = async () => {
      const { data, error } = await getBlogById(id)
      if (error || !data) {
        alert('Blog not found')
        navigate('/admin/dashboard')
        return
      }
      setFormData({
        ...data,
        meta_title: data.meta_title || '',
        meta_description: data.meta_description || '',
        focus_keyword: data.focus_keyword || '',
        canonical_url: data.canonical_url || ''
      })
      setLoading(false)
    }
    load()
  }, [id, isEditing, navigate])

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData(prev => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title)
    }))
  }

  const insertAtCursor = (before, after = '') => {
    const textarea = document.getElementById('content-editor')
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    const newText = formData.content.substring(0, start) + before + selectedText + after + formData.content.substring(end)
    
    setFormData(prev => ({ ...prev, content: newText }))
    
    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = start + before.length
      textarea.selectionEnd = start + before.length + selectedText.length
    }, 0)
  }

  const insertHeading = (level) => {
    const tag = `h${level}`
    insertAtCursor(`<${tag}>`, `</${tag}>\n\n`)
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB')
      return
    }

    setUploading(true)
    try {
      const url = await uploadImage(file, 'covers')
      setFormData(prev => ({ ...prev, cover_image: url }))
    } catch (error) {
      console.error('Upload error:', error)
      alert('Error uploading image: ' + error.message)
    }
    setUploading(false)
  }

  const handleSubmit = async (e) => {
    e?.preventDefault?.()

    // Only title, slug, and content are required
    if (!formData.title.trim()) {
      alert('Title is required')
      return
    }
    if (!formData.slug.trim()) {
      alert('Slug is required')
      return
    }
    if (!formData.content.trim()) {
      alert('Content is required')
      return
    }
    setSaving(true)
    try {
      if (isEditing) {
        const { error } = await updateBlog(id, formData)
        if (error) throw error
        alert('Blog updated successfully')
      } else {
        const { error } = await createBlog(formData)
        if (error) throw error
        alert('Blog created successfully')
        navigate('/admin/dashboard')
      }
    } catch (error) {
      console.error('Save error:', error)
      alert('Error saving: ' + error.message)
    }

    setSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const renderContent = (html) => ({ __html: html })

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 md:pt-32">
      <header className="bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <Link 
                to="/admin/dashboard"
                className="flex items-center gap-1 md:gap-2 text-neutral-400 hover:text-orange-200 transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline">Back</span>
              </Link>
              <span className="text-neutral-600 hidden md:inline">|</span>
              <h1 className="text-neutral-100 text-sm md:text-base truncate">
                {isEditing ? 'Edit Blog' : 'New Blog'}
              </h1>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 border border-neutral-700 text-neutral-300 hover:border-orange-200 hover:text-orange-200 transition-colors text-xs md:text-sm rounded"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden md:inline">{previewMode ? 'Edit' : 'Preview'}</span>
              </button>
              <button
                onClick={handleSubmit}
                disabled={saving}
                className="flex items-center gap-1 md:gap-2 bg-orange-200 text-neutral-950 hover:bg-orange-300 disabled:bg-neutral-700 disabled:text-neutral-500 px-3 md:px-6 py-2 text-xs uppercase tracking-wider font-semibold transition-colors rounded"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></div>
                    <span className="hidden md:inline">Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span className="hidden md:inline">Save Blog</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {previewMode ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 overflow-hidden">
              {formData.cover_image && (
                <img 
                  src={formData.cover_image} 
                  alt={formData.title}
                  className="w-full h-72 object-cover"
                />
              )}
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                  {formData.author && (
                    <span>By {formData.author}</span>
                  )}
                  <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-100 leading-tight mb-6">
                  {formData.title || 'Untitled Post'}
                </h1>
                {formData.excerpt && (
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 pb-8 border-b border-neutral-800">
                    {formData.excerpt}
                  </p>
                )}
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={renderContent(formData.content)}
                />
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm text-center">
              This is a preview. Click "Edit" to continue editing or "Save Blog" to publish.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 md:gap-4">
            <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6">
                <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="Your blog post title"
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-xl placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                />
              </div>
              <div className="bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-1 p-3 border-b border-neutral-800 flex-wrap">
                  <span className="text-neutral-500 text-xs uppercase tracking-wide mr-2">Headings:</span>
                  <button
                    type="button"
                    onClick={() => insertHeading(1)}
                    className="flex items-center gap-1 p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Heading 1 (H1)"
                  >
                    <Heading1 className="w-4 h-4" />
                    <span className="text-xs">H1</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertHeading(2)}
                    className="flex items-center gap-1 p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Heading 2 (H2)"
                  >
                    <Heading2 className="w-4 h-4" />
                    <span className="text-xs">H2</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertHeading(3)}
                    className="flex items-center gap-1 p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Heading 3 (H3)"
                  >
                    <Heading3 className="w-4 h-4" />
                    <span className="text-xs">H3</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertHeading(4)}
                    className="flex items-center gap-1 p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Heading 4 (H4)"
                  >
                    <Heading4 className="w-4 h-4" />
                    <span className="text-xs">H4</span>
                  </button>
                  
                  <div className="w-px h-6 bg-neutral-700 mx-2"></div>
                  
                  <span className="text-neutral-500 text-xs uppercase tracking-wide mr-2">Format:</span>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('<strong>', '</strong>')}
                    className="p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('<em>', '</em>')}
                    className="p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('<ul>\n  <li>', '</li>\n</ul>\n')}
                    className="p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded"
                    title="Bullet List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('<a href="URL_HERE">', '</a>')}
                    className="p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded text-lg"
                    title="Link"
                  >
                    🔗
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('<p>', '</p>\n\n')}
                    className="p-2 text-neutral-400 hover:text-orange-200 hover:bg-neutral-800 transition-colors rounded text-xs font-mono"
                    title="Paragraph"
                  >
                    {'<p>'}
                  </button>
                </div>
                <div className="p-6">
                  <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                    Content * <span className="text-neutral-600 normal-case">(Write HTML directly)</span>
                  </label>
                  <textarea
                    id="content-editor"
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder={`<h1>Main Title</h1>

<p>Write your introduction paragraph here. This is where you capture the reader's attention.</p>

<h2>First Section</h2>

<p>Explain your main points in this section. Keep paragraphs focused and easy to read.</p>

<h3>Subsection</h3>

<p>Dive deeper into specific topics with subsections.</p>

<ul>
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>

<h2>Conclusion</h2>

<p>Wrap up with key takeaways and a <a href="#contact">call to action</a>.</p>`}
                    rows={25}
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors resize-none font-mono text-sm leading-relaxed"
                  />
                  <div className="flex justify-between mt-2">
                    <p className="text-neutral-600 text-xs">
                      {formData.content.length} characters • {formData.content.split(/\s+/).filter(Boolean).length} words
                    </p>
                    <p className="text-neutral-600 text-xs">
                      Use Preview button to see rendered HTML
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="w-full flex items-center justify-center gap-2 bg-orange-200 text-neutral-950 hover:bg-orange-300 disabled:bg-neutral-700 disabled:text-neutral-500 px-6 py-4 text-sm uppercase tracking-wider font-semibold transition-colors"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Blog
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 lg:col-span-1">
              <div className="flex border-b border-neutral-800">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 py-3 text-sm uppercase tracking-wide transition-colors ${
                    activeTab === 'content' 
                      ? 'text-orange-200 border-b-2 border-orange-200' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  Settings
                </button>
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`flex-1 py-3 text-sm uppercase tracking-wide transition-colors ${
                    activeTab === 'seo' 
                      ? 'text-orange-200 border-b-2 border-orange-200' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  SEO
                </button>
              </div>
              {activeTab === 'content' ? (
                <>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-4 uppercase tracking-wide text-neutral-400">
                      Status
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={formData.published}
                          onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                          className="sr-only"
                        />
                        <div className={`w-12 h-6 rounded-full transition-colors ${formData.published ? 'bg-green-500' : 'bg-neutral-700'}`}>
                          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${formData.published ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                        </div>
                      </div>
                      <span className={`text-sm ${formData.published ? 'text-green-400' : 'text-neutral-500'}`}>
                        {formData.published ? 'Published' : 'Draft'}
                      </span>
                    </label>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      URL Slug *
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-600 text-sm">/blog/</span>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="my-blog-post"
                        className="flex-1 bg-neutral-950 border border-neutral-800 px-3 py-2 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Excerpt <span className="text-neutral-600">(optional)</span>
                    </label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Brief description for blog listings..."
                      rows={3}
                      maxLength={200}
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-neutral-600 text-xs mt-1">{formData.excerpt.length}/200</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Author <span className="text-neutral-600">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Author name"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Cover Image <span className="text-neutral-600">(optional)</span>
                    </label>
                    
                    {formData.cover_image ? (
                      <div className="relative group">
                        <img 
                          src={formData.cover_image} 
                          alt="Cover"
                          className="w-full h-40 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, cover_image: '' }))}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm"
                        >
                          Remove image
                        </button>
                      </div>
                    ) : (
                      <label className="block border-2 border-dashed border-neutral-700 hover:border-orange-200/50 p-8 text-center cursor-pointer transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={uploading}
                        />
                        {uploading ? (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 border-2 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-neutral-500 text-sm">Uploading...</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Image className="w-8 h-8 text-neutral-600" />
                            <span className="text-neutral-500 text-sm">Click to upload</span>
                          </div>
                        )}
                      </label>
                    )}

                    <div className="mt-3">
                      <input
                        type="url"
                        value={formData.cover_image}
                        onChange={(e) => setFormData(prev => ({ ...prev, cover_image: e.target.value }))}
                        placeholder="Or paste an image URL"
                        className="w-full bg-neutral-950 border border-neutral-800 px-3 py-2 text-neutral-100 text-xs placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <p className="text-neutral-500 text-xs mb-4">
                      All SEO fields are optional but recommended for better search engine visibility.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Focus Keyword
                    </label>
                    <input
                      type="text"
                      value={formData.focus_keyword}
                      onChange={(e) => setFormData(prev => ({ ...prev, focus_keyword: e.target.value }))}
                      placeholder="e.g., botox treatment miami"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={formData.meta_title}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                      placeholder="SEO title (recommended: 30-60 chars)"
                      maxLength={60}
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                    />
                    <p className="text-neutral-600 text-xs mt-1">{formData.meta_title.length}/60</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.meta_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                      placeholder="Description for search results (recommended: 120-160 chars)"
                      rows={3}
                      maxLength={160}
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-neutral-600 text-xs mt-1">{formData.meta_description.length}/160</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                      Canonical URL
                    </label>
                    <input
                      type="url"
                      value={formData.canonical_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, canonical_url: e.target.value }))}
                      placeholder="https://example.com/original-post"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 text-sm placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                    />
                    <p className="text-neutral-600 text-xs mt-2">Use only if content exists elsewhere</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-6">
                    <label className="block text-xs font-medium mb-4 uppercase tracking-wide text-neutral-400">
                      Search Preview
                    </label>
                    <div className="bg-white p-4 rounded">
                      <p className="text-blue-600 text-lg hover:underline cursor-pointer truncate">
                        {formData.meta_title || formData.title || 'Page Title'}
                      </p>
                      <p className="text-green-700 text-sm truncate">
                        yourdomain.com/blog/{formData.slug || 'post-slug'}
                      </p>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {formData.meta_description || formData.excerpt || 'Add a meta description...'}
                      </p>
                    </div>
                  </div>
                </>
              )}
              <div className="block lg:hidden">
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="w-full flex items-center justify-center gap-2 bg-orange-200 text-neutral-950 hover:bg-orange-300 disabled:bg-neutral-700 disabled:text-neutral-500 px-6 py-4 text-sm uppercase tracking-wider font-semibold transition-colors"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Blog
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default BlogEditor
