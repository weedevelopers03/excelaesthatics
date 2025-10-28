import Contact from './contact.jsx'
import Footer from './footer.jsx'
import Hero from './hero.jsx'
import MarqueeBanner from './MarqueeBanner.jsx'
import Navbar from './navbar.jsx'
import Newsletter from './Newsletter.jsx'
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
      <Navbar />
      <Hero />
      <TreatmentsCarousel />
      <Services />
      <MarqueeBanner />
      <PromotionalBanner />
      <Team />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
