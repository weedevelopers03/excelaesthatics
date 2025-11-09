import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <footer className='bg-neutral-900 border-t border-neutral-800'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mb-12'>
          <div className='lg:col-span-2 md:col-span-1'>
            <div className='text-2xl font-bold tracking-wider mb-4'>
              <span className='text-orange-200'>EXCEL</span>
              <span className='text-neutral-100'> AESTHETICS</span>
            </div>
            <p className='text-neutral-500 mb-6 max-w-md text-sm leading-relaxed'>
              Premier medical aesthetics center in Miami, offering world-class
              non-surgical treatments to enhance your natural beauty.
            </p>
            <div className='flex space-x-4'>
              <button
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/excelaesthetics1/',
                    '_blank'
                  )
                }
                className='w-10 h-10 border border-neutral-800 hover:border-orange-300 hover:text-orange-300 flex items-center justify-center transition-all text-neutral-400'
                aria-label='Instagram'
              >
                <Instagram className='w-4 h-4' />
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/excelaesthetics1/',
                    '_blank'
                  )
                }
                className='w-10 h-10 border border-neutral-800 hover:border-orange-200 hover:text-orange-300 flex items-center justify-center transition-all text-neutral-400'
                aria-label='Facebook'
              >
                <Facebook className='w-4 h-4' />
              </button>
            </div>
          </div>

          <div>
            <h4 className='font-normal mb-6 uppercase tracking-wide text-sm text-neutral-100'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-neutral-500 hover:text-orange-200 transition-colors text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href='/payment-plans'
                  className='text-neutral-500 hover:text-orange-300 transition-colors text-sm'
                >
                  Payment Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-normal mb-6 uppercase tracking-wide text-sm text-neutral-100'>
              Contact
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-start space-x-2 text-neutral-500'>
                <MapPin className='w-4 h-4 mt-1 flex-shrink-0 text-orange-200' />
                <span className='text-sm leading-relaxed'>
                  15490 NW 7th Ave, Suite 210
                  <br />
                  Miami, FL 33169
                  <br />
                  15190 SW 136th St Ste 19 <br />
                  Miami, FL 33196
                </span>
              </li>
              <li className='flex items-center space-x-2 text-neutral-500'>
                <Phone className='w-4 h-4 flex-shrink-0 text-orange-200' />
                <a
                  href='tel:+13053103160'
                  className='text-sm hover:text-orange-300 transition-colors'
                >
                  (305) 310-3160
                </a>
              </li>
              <li className='flex items-center space-x-2 text-neutral-500'>
                <Mail className='w-4 h-4 flex-shrink-0 text-orange-200' />
                <a
                  href='mailto:excelaesthetics1@gmail.com'
                  className='text-sm hover:text-orange-300 transition-colors'
                >
                  excelaesthetics1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-neutral-800 pt-8 flex flex-col lg:flex-row md:flex-col justify-between items-center text-xs text-neutral-600'>
          <p>
            © {new Date().getFullYear()} Excel Aesthetics Miami. All rights
            reserved.
          </p>
          <div className='flex space-x-6 mt-4 lg:mt-0 md:mt-4'>
            <button
              onClick={() => alert('Privacy Policy page')}
              className='hover:text-orange-300 transition-colors'
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Terms of Service page')}
              className='hover:text-orange-300 transition-colors'
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
