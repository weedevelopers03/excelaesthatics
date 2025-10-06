import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <section id='contact' className='py-24 bg-neutral-950'>
      <div className='container mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
            <span className='text-neutral-100'>Get In </span>
            <span className='text-amber-600'>Touch</span>
          </h2>
          <p className='text-base text-neutral-400 leading-relaxed'>
            Ready to begin your aesthetic journey? Schedule your free
            consultation today.
          </p>
        </div>

        <div className='max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-1 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-normal uppercase tracking-wide text-neutral-100'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center'>
                  <MapPin className='w-5 h-5 text-amber-600' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1 text-neutral-100'>
                    Location
                  </h4>
                  <p className='text-neutral-400 text-sm'>
                    15490 NW 7th Ave, Suite 210
                    <br />
                    Miami, FL 33169
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center'>
                  <Phone className='w-5 h-5 text-amber-600' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1 text-neutral-100'>Phone</h4>
                  <a
                    href='tel:+13053103160'
                    className='text-neutral-400 hover:text-amber-600 transition-colors text-sm'
                  >
                    (305) 310-3160
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center'>
                  <Mail className='w-5 h-5 text-amber-600' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1 text-neutral-100'>Email</h4>
                  <a
                    href='mailto:excelaesthetics1@gmail.com'
                    className='text-neutral-400 hover:text-amber-600 transition-colors text-sm'
                  >
                    excelaesthetics1@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center'>
                  <Clock className='w-5 h-5 text-amber-600' />
                </div>
                <div>
                  <h4 className='font-semibold mb-1 text-neutral-100'>Hours</h4>
                  <p className='text-neutral-400 text-sm'>
                    Mon - Fri: 11:00 AM - 7:00 PM
                    <br />
                    Sat - Sun: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className='flex space-x-4 pt-4'>
              <button
                onClick={() =>
                  window.open('https://instagram.com/excelaesthetics', '_blank')
                }
                className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5' />
              </button>
              <button
                onClick={() =>
                  window.open('https://facebook.com/excelaesthetics', '_blank')
                }
                className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                aria-label='Facebook'
              >
                <Facebook className='w-5 h-5' />
              </button>
            </div>
          </div>

          <div className='bg-neutral-900 border border-neutral-800 p-10'>
            <h3 className='text-2xl font-normal mb-8 uppercase tracking-wide text-neutral-100'>
              Send Us a Message
            </h3>
            <div className='space-y-6'>
              <div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
                <div>
                  <label className='block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder='John'
                    className='w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-600 focus:outline-none transition-colors'
                  />
                </div>
                <div>
                  <label className='block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder='Doe'
                    className='w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-600 focus:outline-none transition-colors'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder='john@example.com'
                  className='w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-600 focus:outline-none transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400'>
                  Phone
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder='(305) 123-4567'
                  className='w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-600 focus:outline-none transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder='Tell us about your aesthetic goals...'
                  rows={5}
                  className='w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-100 focus:border-amber-600 focus:outline-none transition-colors resize-none'
                />
              </div>

              <button
                onClick={handleSubmit}
                className='w-full bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-xs font-semibold py-4 transition-colors'
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
