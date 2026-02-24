import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './contact.jsx'
import Footer from './footer.jsx'
import Hero from './hero.jsx'
import InstagramReels from './InstagramReels.jsx'
import MarqueeBanner from './MarqueeBanner.jsx'
import Navbar from './navbar.jsx'
import Newsletter from './Newsletter.jsx'
import PaymentPlans from './PaymentPlans'
import PromotionalBanner from './PromotionalBanner.jsx'
import Services from './Services.jsx'
import Team from './Team.jsx'
import Testimonials from './Testimonials.jsx'
import TreatmentsCarousel from './TreatmentsCarousel.jsx'

import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import BlogDemo from './pages/BlogDemo'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import BlogEditor from './pages/admin/BlogEditor'

const App = () => {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-100'>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
      `}</style>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <TreatmentsCarousel />
                  <Services />
                  <MarqueeBanner />
                  <PromotionalBanner />
                  <Team />
                  <Testimonials />
                  <Newsletter />
                  <InstagramReels />
                  <Contact />
                </>
              }
            />
            <Route path='/payment-plans' element={<PaymentPlans />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/demo' element={<BlogDemo />} />
            <Route path='/blog/:slug' element={<BlogPost />} />
            <Route path='/admin' element={<Login />} />
            <Route 
              path='/admin/dashboard' 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path='/admin/blogs/new' 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />
            <Route 
              path='/admin/blogs/edit/:id' 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
