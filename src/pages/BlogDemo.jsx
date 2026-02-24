import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const demoBlog = {
  title: "The Complete Guide to Botox: What You Need to Know Before Your First Treatment",
  slug: "complete-guide-to-botox",
  excerpt: "Discover everything about Botox treatments, from how they work to what results you can expect. Our comprehensive guide covers preparation, procedure, and aftercare.",
  author: "Dr. Sarah Mitchell",
  cover_image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
  created_at: new Date().toISOString(),
  content: `
    <h1>The Complete Guide to Botox Treatments</h1>
    
    <p>Botox has become one of the most popular cosmetic treatments in the world, with millions of procedures performed each year. Whether you're considering your first treatment or looking to learn more about what to expect, this comprehensive guide will walk you through everything you need to know.</p>
    
    <h2>What is Botox and How Does It Work?</h2>
    
    <p>Botox is a purified form of botulinum toxin that temporarily relaxes facial muscles. When injected into specific areas, it blocks nerve signals that cause muscles to contract, resulting in smoother, more youthful-looking skin.</p>
    
    <p>The treatment is most commonly used to address:</p>
    
    <ul>
      <li>Forehead lines and wrinkles</li>
      <li>Crow's feet around the eyes</li>
      <li>Frown lines between the eyebrows</li>
      <li>Bunny lines on the nose</li>
      <li>Neck bands and lines</li>
    </ul>
    
    <h2>Preparing for Your First Botox Treatment</h2>
    
    <p>Before your appointment, there are several steps you can take to ensure the best possible results:</p>
    
    <h3>One Week Before</h3>
    
    <p>Avoid blood-thinning medications and supplements like aspirin, ibuprofen, vitamin E, and fish oil. These can increase the risk of bruising at injection sites.</p>
    
    <h3>The Day Before</h3>
    
    <p>Avoid alcohol consumption, as it can also increase bruising. Get a good night's sleep and stay hydrated.</p>
    
    <h3>Day of Treatment</h3>
    
    <p>Arrive with a clean face, free of makeup. Wear comfortable clothing and be prepared to discuss your goals with your provider.</p>
    
    <h2>What to Expect During the Procedure</h2>
    
    <p>A typical Botox session takes only <strong>15-30 minutes</strong>, making it easy to fit into a lunch break. Here's what happens:</p>
    
    <p>Your provider will clean the treatment areas and may apply a topical numbing cream for comfort. Using a fine needle, they'll inject small amounts of Botox into targeted muscles. Most patients describe the sensation as a small pinch.</p>
    
    <h2>Results and Recovery</h2>
    
    <p>One of the great advantages of Botox is the minimal downtime. You can return to most normal activities immediately after treatment.</p>
    
    <h3>Timeline of Results</h3>
    
    <ul>
      <li><strong>Days 1-3:</strong> You may notice slight redness or swelling at injection sites</li>
      <li><strong>Days 3-7:</strong> Initial results begin to appear</li>
      <li><strong>Days 10-14:</strong> Full results are visible</li>
      <li><strong>Months 3-4:</strong> Results typically last this long before a touch-up is needed</li>
    </ul>
    
    <h2>Aftercare Tips for Best Results</h2>
    
    <p>To maximize your results and minimize any side effects, follow these guidelines:</p>
    
    <ul>
      <li>Avoid rubbing or massaging treated areas for 24 hours</li>
      <li>Stay upright for 4 hours after treatment</li>
      <li>Avoid strenuous exercise for 24 hours</li>
      <li>Skip the sauna, hot tub, and excessive sun exposure for a few days</li>
    </ul>
    
    <h2>Is Botox Right for You?</h2>
    
    <p>Botox is suitable for most adults who want to reduce the appearance of dynamic wrinkles. However, it may not be recommended if you:</p>
    
    <ul>
      <li>Are pregnant or breastfeeding</li>
      <li>Have a neuromuscular disease</li>
      <li>Have an infection at the proposed injection site</li>
      <li>Are allergic to any botulinum toxin product</li>
    </ul>
    
    <h2>Schedule Your Consultation</h2>
    
    <p>The best way to determine if Botox is right for you is through a personalized consultation. Our experienced team at Excel Aesthetics will assess your concerns, discuss your goals, and create a customized treatment plan.</p>
    
    <p><strong>Ready to take the next step?</strong> <a href="/#contact">Contact us today</a> to schedule your free consultation and discover how we can help you achieve your aesthetic goals.</p>
  `
}

const BlogDemo = () => {
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

  return (
    <div className="min-h-screen bg-neutral-950 pt-32 pb-16">
      <div className="container mx-auto px-6 mb-8">
        <div className="bg-orange-200/10 border border-orange-200/30 text-orange-200 px-4 py-3 text-sm text-center">
          <strong>Demo Mode:</strong> This is a preview page to test blog styles. This content is not saved.
        </div>
      </div>
      <div className="container mx-auto px-6 mb-8">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
      </div>
      <article className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(demoBlog.created_at)}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {demoBlog.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {calculateReadTime(demoBlog.content)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-100 leading-tight mb-6">
            {demoBlog.title}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            {demoBlog.excerpt}
          </p>
        </header>
        <div className="max-w-5xl mx-auto mb-12">
          <img 
            src={demoBlog.cover_image} 
            alt={demoBlog.title}
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-light prose-headings:text-neutral-100
              prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-orange-100
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-orange-200 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-neutral-100
              prose-ul:text-neutral-300 prose-ol:text-neutral-300
              prose-li:mb-2
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6"
            dangerouslySetInnerHTML={{ __html: demoBlog.content }}
          />
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex items-center justify-between">
              <div className="text-neutral-500 text-sm">
                Did you like this article? Share it!
              </div>
              <button
                onClick={() => alert('Share functionality works!')}
                className="flex items-center gap-2 text-orange-200 hover:text-orange-300 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </article>
      <section className="container mx-auto px-6 mt-20">
        <h2 className="text-2xl font-light text-neutral-100 mb-8 text-center uppercase tracking-wide">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "5 Benefits of Regular Facial Treatments", slug: "benefits-facial-treatments" },
            { title: "Understanding Dermal Fillers: A Beginner's Guide", slug: "understanding-dermal-fillers" },
            { title: "How to Maintain Your Results Between Treatments", slug: "maintain-results-between-treatments" }
          ].map((relatedBlog, i) => (
            <div 
              key={i}
              className="group bg-neutral-900 border border-neutral-800 p-6 hover:border-orange-200/30 transition-all cursor-pointer"
            >
              <h3 className="text-neutral-100 group-hover:text-orange-200 transition-colors mb-2 line-clamp-2">
                {relatedBlog.title}
              </h3>
              <p className="text-neutral-500 text-sm">
                Read more about this topic...
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-gradient-to-br from-orange-200/10 to-neutral-900 border border-neutral-800 p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-neutral-100 mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-neutral-400 mb-8">
            Schedule a free consultation and discover how we can help you.
          </p>
          <Link 
            to="/#contact"
            className="inline-block bg-orange-200 text-neutral-950 hover:bg-orange-300 px-8 py-4 uppercase tracking-wider text-xs font-semibold transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogDemo

