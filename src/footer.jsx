import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ]
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

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
              onClick={() => setShowPrivacy(true)}
              className='hover:text-orange-300 transition-colors'
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className='hover:text-orange-300 transition-colors'
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
          <div className='bg-neutral-900 border border-neutral-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl'>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-lg md:text-xl font-semibold text-neutral-50'>
                Privacy Policy
              </h3>
              <button
                onClick={() => setShowPrivacy(false)}
                className='text-neutral-400 hover:text-orange-300 transition-colors text-sm'
              >
                Close ✕
              </button>
            </div>

            <p className='text-sm text-neutral-400 mb-3'>
              Excel Aesthetics Miami respects your privacy and is committed to
              protecting your personal information.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              We collect information you provide directly to us, such as your
              name, contact details and treatment preferences when you submit a
              form, request a consultation or contact us by phone or email.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              Your information is used only to provide services, confirm
              appointments, respond to inquiries and send updates you choose to
              receive. We do not sell your data to third parties.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              Limited third-party providers (such as booking or payment
              platforms) may process data on our behalf, and are required to
              protect it in accordance with applicable laws.
            </p>
            <p className='text-sm text-neutral-400'>
              If you would like to update, correct or request deletion of your
              information, please contact us at{' '}
              <span className='text-orange-200'>
                excelaesthetics1@gmail.com
              </span>
              .
            </p>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
          <div className='bg-neutral-900 border border-neutral-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl'>
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-lg md:text-xl font-semibold text-neutral-50'>
                Terms &amp; Conditions
              </h3>
              <button
                onClick={() => setShowTerms(false)}
                className='text-neutral-400 hover:text-orange-300 transition-colors text-sm'
              >
                Close ✕
              </button>
            </div>

            <p className='text-sm text-neutral-400 mb-3'>
              By booking an appointment with Excel Aesthetics Miami, you agree
              to our policies regarding scheduling, cancellations and treatment
              eligibility.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              All treatments are performed only after a professional
              consultation. Results vary between individuals and no specific
              outcome can be guaranteed.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              Please inform our team of any medical conditions, allergies or
              medications prior to your treatment. Failure to disclose relevant
              information may affect your suitability for certain procedures.
            </p>
            <p className='text-sm text-neutral-400 mb-3'>
              Late cancellations or missed appointments may be subject to a fee,
              in accordance with our scheduling policy.
            </p>
            <p className='text-sm text-neutral-400'>
              We reserve the right to update these Terms at any time. Continued
              use of our services after changes are posted constitutes
              acceptance of the revised Terms.
            </p>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
