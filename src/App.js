import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './contact.jsx'
import Footer from './footer.jsx'
import Hero from './hero.jsx'
import MarqueeBanner from './MarqueeBanner.jsx'
import Navbar from './navbar.jsx'
import Newsletter from './Newsletter.jsx'
import PaymentPlans from './PaymentPlans' // Import the new Payment Plans component
import PromotionalBanner from './PromotionalBanner.jsx'
import Services from './Services.jsx'
import Team from './Team.jsx'
import Testimonials from './Testimonials.jsx'
import TreatmentsCarousel from './TreatmentsCarousel.jsx'

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
          {/* Your Navbar */}
          <Navbar />

          {/* Define Routes */}
          <Routes>
            {/* Main Route for Home */}
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
                  <Contact />
                </>
              }
            />

            {/* Add the PaymentPlans route */}
            <Route path='/payment-plans' element={<PaymentPlans />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
