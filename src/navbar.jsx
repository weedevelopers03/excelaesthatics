import { Facebook, Instagram, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/98 backdrop-blur-lg'
          : 'bg-neutral-950/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar - Desktop Only (> 1023px) - Hidden when scrolled */}
      {!isScrolled && (
        <div className='lg:hidden bg-neutral-900/50 border-b border-neutral-800/30'>
          <div className='container mx-auto px-6'>
            <div className='flex items-center justify-between h-10'>
              <div className='flex items-center text-neutral-400 text-xs gap-4'>
                <div className='flex items-center text-neutral-400 text-xs'>
                  <MapPin className='w-3 h-3 mr-2' />
                  <span>
                    15490 Northwest 7th Avenue Suite 210 Miami, FL 33169
                  </span>
                </div>
                <div className='flex items-center text-neutral-400 text-xs'>
                  <MapPin className='w-3 h-3 mr-2' />
                  <span>15190 SW 136th St Ste 19 Miami, FL 33196</span>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/excelaesthetics1/',
                      '_blank'
                    )
                  }
                  className='text-neutral-400 hover:text-orange-200 transition-colors'
                  aria-label='Facebook'
                >
                  <Facebook className='w-3.5 h-3.5' />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/excelaesthetics1/',
                      '_blank'
                    )
                  }
                  className='text-neutral-400 hover:text-orange-200 transition-colors'
                  aria-label='Instagram'
                >
                  <Instagram className='w-3.5 h-3.5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className='border-b border-neutral-800/50'>
        <div className='container mx-auto px-6'>
          <div className='flex items-center justify-between h-20'>
            {/* Left - Navigation Links (Desktop > 1023px) */}
            <div className='lg:hidden flex items-center space-x-8'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-xs tracking-widest text-neutral-300 hover:text-orange-200 transition-colors uppercase font-medium'
                >
                  {link.name}
                </a>
              ))}
              <a
                href='/payment-plans'
                className='text-xs tracking-widest text-neutral-300 hover:text-orange-200 transition-colors uppercase font-medium'
              >
                Payment Plans
              </a>
            </div>

            {/* Center - Logo */}
            <a
              href='#home'
              className='flex items-center space-x-2 lg:relative lg:left-0 lg:transform-none absolute left-1/2 transform -translate-x-1/2'
            >
              <div className='text-2xl font-light tracking-[0.3em]'>
                <span className='text-orange-200'>EXCEL</span>
                <span className='text-neutral-100'> AESTHETICS</span>
              </div>
            </a>

            {/* Right - Actions (Desktop > 1023px) */}
            <div className='lg:hidden flex items-center space-x-6'>
              <a
                href='tel:+13053103160'
                className='flex items-center text-neutral-300 hover:text-orange-200 transition-colors'
              >
                <Phone className='w-4 h-4 mr-2' />
                <span className='text-xs tracking-wider'>(305) 310-3160</span>
              </a>

              <button
                onClick={handleBooking}
                className='border-2 border-neutral-700 hover:border-orange-200 hover:bg-orange-200 text-neutral-100 hover:text-neutral-950 uppercase tracking-widest text-xs font-semibold px-8 py-2.5 transition-all'
              >
                Book a Visit
              </button>
            </div>

            {/* Mobile Menu Button (≤ 1023px) */}
            <button
              className='hidden lg:block text-neutral-100'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (≤ 1023px) */}
      {isMobileMenuOpen && (
        <div className='hidden lg:block bg-neutral-950 border-t border-neutral-800/50'>
          <div className='container mx-auto px-6 py-6 space-y-4'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block text-sm tracking-wide text-white hover:text-orange-200 transition-colors uppercase'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href='/payment-plans'
              className='block text-sm tracking-wide text-white hover:text-orange-200 transition-colors uppercase'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Payment Plans
            </a>
            <a
              href='tel:+13053103160'
              className='flex items-center text-neutral-300 hover:text-orange-200 transition-colors pt-4 border-t border-neutral-800'
            >
              <Phone className='w-4 h-4 mr-2' />
              <span className='text-sm'>(305) 310-3160</span>
            </a>
            <button
              onClick={handleBooking}
              className='w-full bg-orange-200 text-neutral-950 hover:bg-orange-200 uppercase tracking-wider text-xs font-semibold px-6 py-3 transition-colors'
            >
              Book a Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
