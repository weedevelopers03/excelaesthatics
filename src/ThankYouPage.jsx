import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Video,
} from 'lucide-react'
import { useEffect } from 'react'

export default function ThankYouPage() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      console.log('Calendly script loaded successfully')
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])
  // eslint-disable-next-line no-unused-vars
  const openCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/info-0qwi/30min',
      })
    }
  }

  return (
    <div
      className='min-h-screen bg-black overflow-x-hidden'
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      <header className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-center'>
          <a href='/' className='cursor-pointer'>
            <img
              src='/selaya-logo.png'
              alt='Sellaya Logo'
              className='h-[0.8rem] w-auto object-contain'
              style={{ height: '0.8rem' }}
            />
          </a>
        </div>
      </header>

      <section className='relative min-h-screen flex items-center justify-center px-4 py-20 pt-32'>
        <div className='absolute inset-0 bg-black'></div>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-5 animate-pulse'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <div className='mb-8 flex justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse'></div>
              <div className='relative bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full p-6 md:p-8'>
                <CheckCircle className='w-16 h-16 md:w-20 md:h-20 text-white' />
              </div>
            </div>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4'>
            <span className='text-white'>Thank You for </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400'>
              Taking the First Step!
            </span>
          </h1>

          <p className='text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto px-4 leading-relaxed'>
            We've received your information and we're excited to help you
            transform your booking system. Our team is reviewing your details
            right now.
          </p>

          <div className='bg-gradient-to-br from-zinc-900 to-black border border-cyan-400/30 rounded-2xl p-6 md:p-10 max-w-2xl mx-auto mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              What Happens Next?
            </h2>
            <p className='text-white/80 text-sm md:text-base mb-6'>
              Book your FREE 30-minute strategy session now to discuss your
              specific needs and see how we can help you automate your bookings
              and grow your business.
            </p>

            <div className='grid md:grid-cols-3 gap-4 mb-8'>
              {[
                {
                  icon: Calendar,
                  title: '30 Minutes',
                  desc: 'Free consultation',
                },
                { icon: Video, title: 'Virtual Call', desc: 'Zoom or phone' },
                { icon: Clock, title: 'Quick Setup', desc: 'Pick your time' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className='bg-black border border-white/10 rounded-xl p-4 text-center'
                  >
                    <Icon className='w-8 h-8 text-cyan-400 mx-auto mb-2' />
                    <h3 className='text-white font-bold text-sm mb-1'>
                      {item.title}
                    </h3>
                    <p className='text-white/60 text-xs'>{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <a
              href='##'
              onClick={openCalendly}
              className='inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-cyan-500/50 text-sm md:text-base lg:text-lg w-full md:w-auto'
            >
              <Calendar className='w-5 h-5' />
              Schedule Your Free Strategy Session
              <ArrowRight className='w-5 h-5' />
            </a>
          </div>

          <div className='grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8'>
            <div className='bg-zinc-900 border border-white/10 rounded-xl p-6 text-left'>
              <h3 className='text-lg md:text-xl font-bold text-cyan-400 mb-3'>
                During Your Call:
              </h3>
              <ul className='space-y-2 text-white/80 text-sm md:text-base'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>Review your current booking process</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>Identify automation opportunities</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>Create a custom growth strategy</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>Answer all your questions</span>
                </li>
              </ul>
            </div>

            <div className='bg-zinc-900 border border-white/10 rounded-xl p-6 text-left'>
              <h3 className='text-lg md:text-xl font-bold text-emerald-400 mb-3'>
                What You'll Get:
              </h3>
              <ul className='space-y-2 text-white/80 text-sm md:text-base'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                  <span>Personalized automation roadmap</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                  <span>Revenue growth projections</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                  <span>Clear implementation timeline</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                  <span>No-obligation consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-cyan-900/20 border border-cyan-400/30 rounded-xl p-6 max-w-2xl mx-auto'>
            <p className='text-white/90 text-sm md:text-base mb-2'>
              <span className='font-bold text-cyan-400'>
                Limited Availability:
              </span>{' '}
              We only accept 5 new clients per month to ensure quality service.
            </p>
            <p className='text-white/70 text-xs md:text-sm'>
              Book your call now to secure your spot before slots fill up.
            </p>
          </div>

          <div className='mt-12 pt-8 border-t border-white/10'>
            <p className='text-white/60 text-sm mb-4'>
              Questions? We're here to help!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='tel:4376770182'
                className='text-cyan-400 hover:text-cyan-300 transition text-sm md:text-base font-semibold flex items-center gap-2'
              >
                <Phone className='w-4 h-4' />
                (437) 677-0182
              </a>
              <span className='hidden sm:block text-white/30'>|</span>
              <a
                href='mailto:info@sellaya.com'
                className='text-cyan-400 hover:text-cyan-300 transition text-sm md:text-base font-semibold flex items-center gap-2'
              >
                <Mail className='w-4 h-4' />
                info@sellaya.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className='py-8 px-4 bg-zinc-900 border-t border-white/10'>
        <div className='max-w-6xl mx-auto text-center'>
          <a href='/' className='inline-block mb-4'>
            <img
              src='/selaya-logo.png'
              alt='Sellaya'
              className='h-[0.8rem] w-auto mx-auto'
              style={{ height: '0.8rem' }}
            />
          </a>
          <p className='text-white/70 mb-4 text-sm'>
            Automated Booking Systems for Makeup Artists
          </p>
          <div className='text-white/70 text-xs'>
            <span>North America</span>
            <span className='mx-3'>|</span>
            <span>(437) 677-0182</span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap');
      `}</style>
    </div>
  )
}
