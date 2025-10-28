import {
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from 'lucide-react'
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
              <div className='flex items-center text-neutral-400 text-xs'>
                <MapPin className='w-3 h-3 mr-2' />
                <span>15490 NW 7th Ave, Suite 210, Miami, FL 33169</span>
              </div>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() =>
                    window.open(
                      'https://facebook.com/excelaesthetics',
                      '_blank'
                    )
                  }
                  className='text-neutral-400 hover:text-amber-600 transition-colors'
                  aria-label='Facebook'
                >
                  <Facebook className='w-3.5 h-3.5' />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://instagram.com/excelaesthetics',
                      '_blank'
                    )
                  }
                  className='text-neutral-400 hover:text-amber-600 transition-colors'
                  aria-label='Instagram'
                >
                  <Instagram className='w-3.5 h-3.5' />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://youtube.com/@excelaesthetics',
                      '_blank'
                    )
                  }
                  className='text-neutral-400 hover:text-amber-600 transition-colors'
                  aria-label='YouTube'
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                  </svg>
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
                  className='text-xs tracking-widest text-neutral-300 hover:text-amber-600 transition-colors uppercase font-medium'
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => (window.location.href = '/payment-plans')}
                className='text-xs tracking-widest text-neutral-300 hover:text-amber-600 transition-colors uppercase font-medium'
              >
                Payment Plans
              </button>
            </div>

            {/* Center - Logo */}
            <a
              href='#home'
              className='flex items-center space-x-2 lg:relative lg:left-0 lg:transform-none absolute left-1/2 transform -translate-x-1/2'
            >
              <div className='text-2xl font-light tracking-[0.3em]'>
                <span className='text-amber-600'>EXCEL</span>
                <span className='text-neutral-100'> AESTHETICS</span>
              </div>
            </a>

            {/* Right - Actions (Desktop > 1023px) */}
            <div className='lg:hidden flex items-center space-x-6'>
              <a
                href='tel:+13053103160'
                className='flex items-center text-neutral-300 hover:text-amber-600 transition-colors'
              >
                <Phone className='w-4 h-4 mr-2' />
                <span className='text-xs tracking-wider'>(305) 310-3160</span>
              </a>
              <button className='relative text-neutral-300 hover:text-amber-600 transition-colors'>
                <ShoppingCart className='w-5 h-5' />
                <span className='absolute -top-2 -right-2 bg-amber-600 text-neutral-950 text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold'>
                  0
                </span>
              </button>
              <button
                onClick={handleBooking}
                className='border-2 border-neutral-700 hover:border-amber-600 hover:bg-amber-600 text-neutral-100 hover:text-neutral-950 uppercase tracking-widest text-xs font-semibold px-8 py-2.5 transition-all'
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
                className='block text-sm tracking-wide text-white hover:text-amber-600 transition-colors uppercase'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                window.location.href = '/payment-plans'
                setIsMobileMenuOpen(false)
              }}
              className='block text-sm tracking-wide text-white hover:text-amber-600 transition-colors uppercase text-left w-full'
            >
              Payment Plans
            </button>
            <a
              href='tel:+13053103160'
              className='flex items-center text-neutral-300 hover:text-amber-600 transition-colors pt-4 border-t border-neutral-800'
            >
              <Phone className='w-4 h-4 mr-2' />
              <span className='text-sm'>(305) 310-3160</span>
            </a>
            <button
              onClick={handleBooking}
              className='w-full bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-xs font-semibold px-6 py-3 transition-colors'
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
