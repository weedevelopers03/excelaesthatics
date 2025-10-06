import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Shield,
  Sparkles,
  Star,
  Target,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SellayaLandingPage() {
  const [formStep, setFormStep] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testimonialSlide, setTestimonialSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    yearsInBusiness: '',
    instagram: '',
    website: '',
    email: '',
    phone: '',
    monthlyBookings: '',
    averagePrice: '',
    revenueGoal: '',
    timeline: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(testimonialInterval)
  }, [])

  const validateField = (n, v) => {
    if (n === 'name' && (!v.trim() || v.length < 2)) return 'Name required'
    if (n === 'businessName' && !v.trim()) return 'Business name required'
    if (n === 'city' && (!v.trim() || v.length < 2)) return 'City required'
    if (n === 'instagram' && (!v.trim() || !v.startsWith('@')))
      return 'Must start with @'
    if (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return 'Valid email required'
    if (n === 'phone' && v.replace(/\D/g, '').length !== 10)
      return '10 digits required'
    return ''
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const c = value.replace(/\D/g, '')
      if (c.length <= 10) {
        setFormData((p) => ({
          ...p,
          [name]: c.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
        }))
        setErrors((p) => ({ ...p, [name]: validateField(name, c) }))
      }
    } else {
      setFormData((p) => ({ ...p, [name]: value }))
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }))
    }
  }

  const validateStep = () => {
    const ne = {}
    if (formStep === 1) {
      ;['name', 'businessName', 'city'].forEach((f) => {
        const error = validateField(f, formData[f])
        if (error) ne[f] = error
      })
      if (!formData.yearsInBusiness) ne.yearsInBusiness = 'Required'
    } else if (formStep === 2) {
      ;['instagram', 'email'].forEach((f) => {
        const error = validateField(f, formData[f])
        if (error) ne[f] = error
      })
      const phoneError = validateField(
        'phone',
        formData.phone.replace(/\D/g, '')
      )
      if (phoneError) ne.phone = phoneError
    } else if (formStep === 3) {
      if (!formData.monthlyBookings) ne.monthlyBookings = 'Required'
      if (!formData.averagePrice) ne.averagePrice = 'Required'
    } else if (formStep === 4) {
      if (!formData.revenueGoal) ne.revenueGoal = 'Required'
      if (!formData.timeline) ne.timeline = 'Required'
    }
    setErrors(ne)
    return Object.values(ne).every((e) => !e)
  }

  const next = () => {
    if (validateStep() && formStep < 4) {
      setFormStep(formStep + 1)
      setErrors({})
    }
  }

  const sendEmails = async () => {
    try {
      const response = await fetch('https://sellaya.ca/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      return result.success
    } catch (error) {
      console.error('Email send failed:', error)
      return false
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    if (validateStep()) {
      setIsSubmitting(true)
      console.log('Form submitted:', formData)

      const emailSent = await sendEmails()

      if (emailSent) {
        window.location.href = '/thank-you'
      } else {
        alert(
          'There was an issue sending the confirmation email. Please contact us directly at info@sellaya.ca'
        )
        setIsSubmitting(false)
      }
    }
  }

  const scrollTo = () =>
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' })

  const ic =
    'w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none text-sm md:text-base'

  return (
    <div
      className='min-h-screen bg-black overflow-x-hidden'
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      <header className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between'>
          <a href='/' className='cursor-pointer'>
            <img
              src='/selaya-logo.png'
              alt='Sellaya'
              className='h-[0.8rem] w-auto'
              style={{ height: '0.8rem' }}
            />
          </a>
          <button
            onClick={scrollTo}
            className='px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all border border-cyan-400'
          >
            Book Free Call
          </button>
        </div>
      </header>

      <section className='relative min-h-screen xl:min-h-screen lg:min-h-screen md:min-h-screen flex items-center justify-center px-4 py-20 pt-32'>
        <div className='absolute inset-0 bg-black'></div>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-pulse'></div>
        <div className='relative z-10 max-w-6xl mx-auto text-center'>
          <div className='text-cyan-400 text-lg md:text-sm font-bold tracking-widest mb-4 animate-pulse uppercase'>
            FOR MAKEUP ARTISTS ONLY
          </div>
          <h1 className='text-6xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight px-4'>
            <span className='text-white'>
              Stop Losing Brides to Competitors -{' '}
            </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400'>
              Automate Your Bookings Today
            </span>
          </h1>
          <p className='text-lg md:text-lg lg:text-xl text-white mb-6 max-w-4xl mx-auto font-normal px-4 leading-relaxed'>
            You're a great artist, but Instagram DMs aren't a booking system.
            With Sellaya, brides book instantly, no-shows disappear, and only
            serious, budget-ready clients land on your calendar.
          </p>
          <p className='text-lg md:text-sm text-white/80 mb-6 max-w-3xl mx-auto px-4'>
            Join 35+ artists across North America
          </p>
          <button
            onClick={scrollTo}
            className='px-6 py-3 md:px-8 md:py-4 text-lg md:text-base font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all border-2 border-cyan-400 w-full sm:w-auto max-w-md mx-auto flex items-center justify-center gap-2'
          >
            Get Free Strategy Session <ChevronRight className='w-4 h-4' />
          </button>
          <p className='text-xs text-white/60 mt-3'>
            No credit card • 30 min • 7 spots left
          </p>
        </div>
      </section>

      <section
        className='py-10 md:py-16 px-4 bg-black'
        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
      >
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10 md:mb-16 px-4'>
            We Don't Just Promise Results -{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400'>
              We Deliver Them
            </span>
          </h2>
          <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-6'>
            {[
              { num: '35+', label: 'Active Clients' },
              { num: '3,200+', label: 'Bookings Automated' },
              { num: '$480K+', label: 'Revenue Generated' },
              { num: '4.8/5', label: 'Client Rating' },
            ].map((stat, i) => (
              <div key={i} className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all'></div>
                <div className='relative bg-gradient-to-br from-zinc-900 to-black border border-cyan-400/30 p-6 md:p-8 rounded-xl hover:border-cyan-400/60 transition-all transform hover:scale-105 hover:-translate-y-2 duration-300'>
                  <div className='text-center'>
                    <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 md:mb-3'>
                      {stat.num}
                    </div>
                    <div className='text-sm md:text-base text-white/90 font-semibold'>
                      {stat.label}
                    </div>
                  </div>
                  <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50'></div>
                  <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50'></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-zinc-900 border-y border-white/10'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-xl md:text-4xl font-bold text-center text-white mb-8 px-4'>
            Losing <span style={{ color: '#FF0000' }}>$3,000+ Monthly</span>
          </h2>
          <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {[
              {
                icon: AlertCircle,
                title: '2AM Lost Booking',
                desc: 'Bride messages at 2AM. By morning, competitor booked. Lost: $450',
              },
              {
                icon: Clock,
                title: 'Time Drain',
                desc: '15hrs weekly on same questions. Lost income: $1,200',
              },
              {
                icon: Target,
                title: 'Price Shoppers',
                desc: 'Budget clients waste time. Premium never reach you. Lost: $800',
              },
              {
                icon: Calendar,
                title: 'No-Shows',
                desc: '20% ghost without reminders. Lost: $650',
              },
            ].map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className='bg-black border border-red-900/30 p-4 md:p-6 rounded-xl hover:border-red-500/50 transition-all'
                >
                  <Icon
                    className='w-8 h-8 md:w-10 md:h-10'
                    style={{ color: '#FF0000' }}
                  />
                  <h3 className='text-base md:text-lg font-bold text-white mb-2 mt-4'>
                    {p.title}
                  </h3>
                  <p className='text-xs md:text-sm text-white/80'>{p.desc}</p>
                </div>
              )
            })}
          </div>
          <div className='mt-8 text-center bg-red-900/20 border border-red-500/30 rounded-xl p-4 max-w-3xl mx-auto'>
            <p className='text-lg md:text-2xl font-bold text-white'>
              Total: $3,100+/mo = $37,200/year
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-xl md:text-4xl font-bold text-center text-white mb-8 px-4'>
            From Chaos to Bookings in{' '}
            <span className='text-cyan-400'>48 Hours</span>
          </h2>
          <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {[
              {
                step: '1',
                title: 'Strategy Session',
                time: '30min',
                desc: 'Analyze your Instagram. Map custom automation.',
                icon: Target,
              },
              {
                step: '2',
                title: 'System Build',
                time: '24hrs',
                desc: 'Build branded funnel. Connect everything.',
                icon: Sparkles,
              },
              {
                step: '3',
                title: 'Training',
                time: '45min',
                desc: 'Walk through system. Test scenarios.',
                icon: CheckCircle,
              },
              {
                step: '4',
                title: 'Go Live',
                time: 'Ongoing',
                desc: 'Launch. Monitor. Unlimited support.',
                icon: Zap,
              },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  className='bg-zinc-900 border border-white/10 p-4 md:p-6 rounded-xl hover:border-cyan-400/50 transition-all'
                >
                  <div className='flex flex-col items-center text-center'>
                    <div className='flex flex-row justify-between w-full mb-2'>
                      <div className='w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-b rounded-full flex items-center justify-center text-white font-bold text-lg mb-4'>
                        {s.step}
                      </div>
                      <Icon className='w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-3' />
                    </div>
                    <h3 className='text-base md:text-lg font-bold text-white mb-2'>
                      {s.title}
                    </h3>
                    <span className='text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full mb-3'>
                      {s.time}
                    </span>
                    <p className='text-xs md:text-sm text-white/80'>{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-zinc-900'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-xl md:text-3xl font-bold text-center text-white mb-8 px-4'>
            Your Future <span className='text-cyan-400'>Booking System</span>
          </h2>
          <div className='relative max-w-4xl mx-auto'>
            <div className='relative aspect-video rounded-xl overflow-hidden border-2 border-cyan-400/30'>
              <img
                src={
                  [
                    'https://sellaya.ca/images/1.jpg',
                    'https://sellaya.ca/images/2.jpg',
                    'https://sellaya.ca/images/3.jpg',
                    'https://sellaya.ca/images/4.jpg',
                    'https://sellaya.ca/images/5.jpg',
                  ][currentSlide]
                }
                alt='System'
                className='w-full h-full object-cover'
              />
            </div>
            <button
              onClick={() => setCurrentSlide((p) => (p - 1 + 5) % 5)}
              className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
            >
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button
              onClick={() => setCurrentSlide((p) => (p + 1) % 5)}
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
            >
              <ChevronRight className='w-5 h-5' />
            </button>
            <div className='flex justify-center gap-2 mt-4'>
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === i ? 'bg-cyan-400 w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-xl md:text-3xl font-bold text-center text-white mb-8 px-4'>
            Real <span className='text-cyan-400'>Results</span>
          </h2>
          <div className='relative max-w-4xl mx-auto'>
            <div className='overflow-hidden'>
              <div
                className='transition-transform duration-500 ease-in-out'
                style={{
                  transform: `translateX(-${testimonialSlide * 100}%)`,
                  display: 'flex',
                }}
              >
                {[
                  {
                    name: 'Sarah M.',
                    loc: 'Toronto',
                    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
                    text: 'I was skeptical about automation, but Sellaya made it feel personal. Doubled my revenue in 8 weeks and clients love the instant responses!',
                    metric: '$6.8K → $15.4K/mo',
                    time: '8 weeks',
                  },
                  {
                    name: 'Priya K.',
                    loc: 'Vancouver',
                    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
                    text: 'The time savings changed my life. I spent 3 hours daily on DMs. Now the system handles it all while I focus on my artistry.',
                    metric: '15 hrs/week saved',
                    time: '3 weeks',
                  },
                  {
                    name: 'LooksByAnum',
                    loc: 'Toronto',
                    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
                    text: 'I have been using Sellaya for the past 6 months for my makeup artist business, and the difference has been incredible. After trying several marketing agencies in Toronto, Sellaya was the first to truly understand my brand and help me attract consistent bookings. Their strategies have helped me grow fast and reach the right clients. Could not be happier, highly recommended!',
                    metric: '6 months success',
                    time: 'consistent bookings',
                  },
                  {
                    name: 'Jessica L.',
                    loc: 'Calgary',
                    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200',
                    text: 'Managing 3 artists was chaos. Double bookings, missed inquiries, pricing confusion. Now everything runs smoothly and we are booked 6 weeks out.',
                    metric: '3x team efficiency',
                    time: '1 month',
                  },
                ].map((t, i) => (
                  <div key={i} className='min-w-full px-4'>
                    <div className='bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-xl'>
                      <div className='flex items-center gap-4 mb-4'>
                        <img
                          src={t.img}
                          alt={t.name}
                          className='w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-cyan-400'
                        />
                        <div>
                          <p className='text-white font-bold text-base md:text-lg'>
                            {t.name}
                          </p>
                          <p className='text-white/60 text-sm'>{t.loc}</p>
                        </div>
                      </div>
                      <div className='flex gap-1 mb-4'>
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className='w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current'
                          />
                        ))}
                      </div>
                      <p className='text-white/90 mb-4 text-sm md:text-base leading-relaxed italic'>
                        "{t.text}"
                      </p>
                      <div className='flex justify-between items-center pt-4 border-t border-white/10'>
                        <p className='text-cyan-400 font-bold text-sm md:text-base'>
                          {t.metric}
                        </p>
                        <p className='text-white/60 text-xs md:text-sm'>
                          in {t.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setTestimonialSlide((prev) => (prev - 1 + 4) % 4)}
              className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all -ml-4 md:-ml-6'
            >
              <ChevronLeft className='w-5 h-5 md:w-6 md:h-6' />
            </button>
            <button
              onClick={() => setTestimonialSlide((prev) => (prev + 1) % 4)}
              className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all -mr-4 md:-mr-6'
            >
              <ChevronRight className='w-5 h-5 md:w-6 md:h-6' />
            </button>
            <div className='flex justify-center gap-2 mt-6'>
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialSlide(i)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    testimonialSlide === i
                      ? 'bg-cyan-400 w-6 md:w-8'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-zinc-900'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-xl md:text-3xl font-bold text-center text-white mb-8 px-4'>
            Choose Your{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>
              Perfect Plan
            </span>
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'>
            <div className='relative bg-black border border-white/10 rounded-xl p-6 md:p-8 hover:scale-105 transition-all'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>
                Starter
              </h3>
              <p className='text-white/80 text-sm mb-6'>
                Perfect for solo makeup artists who want to finally stop chasing
                DMs and start booking clients automatically.
              </p>
              <h4 className='text-white font-bold text-sm mb-3'>Includes:</h4>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>
                      Automated Booking System
                    </strong>{' '}
                    - Let brides and clients lock in appointments 24/7 without
                    back-and-forth.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>
                      Instagram Integration
                    </strong>{' '}
                    - Turn profile visitors into paying clients with one-tap
                    booking links.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Smart Notifications</strong>{' '}
                    - Stay in control with instant alerts for every new booking.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Client Database</strong> -
                    All your leads and clients organized in one place, ready for
                    re-bookings.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>
                      30 Days of Dedicated Support
                    </strong>{' '}
                    - We guide you step by step until your system runs smoothly.
                  </span>
                </li>
              </ul>
              <button
                onClick={scrollTo}
                className='w-full py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all bg-white/10 text-white hover:bg-white/20'
              >
                Get Started
              </button>
            </div>

            <div className='relative bg-black border border-cyan-400 shadow-lg shadow-cyan-500/20 rounded-xl p-6 md:p-8 hover:scale-105 transition-all'>
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap'>
                MOST POPULAR
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>
                Professional
              </h3>
              <p className='text-white/80 text-sm mb-6'>
                Built for growing artists and bridal specialists who need
                advanced workflows, team support, and serious revenue growth.
              </p>
              <h4 className='text-white font-bold text-sm mb-3'>
                Everything in Starter, plus:
              </h4>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Bridal Workflows</strong> -
                    Automated sequences designed to convert brides faster and
                    upsell premium packages.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Integrated Payments</strong>{' '}
                    - Get deposits and payments upfront, no more chasing money.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Calendar Sync</strong> -
                    Instantly connect with Google/Outlook calendars to avoid
                    double bookings.
                  </span>
                </li>
                <li className='flex items-start gap-2 text-white/80 text-sm'>
                  <CheckCircle className='w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5' />
                  <span>
                    <strong className='text-white'>Priority Support</strong> -
                    Skip the queue and get rapid help whenever you need it.
                  </span>
                </li>
              </ul>
              <button
                onClick={scrollTo}
                className='w-full py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105'
              >
                Get Started
              </button>
            </div>
          </div>
          <div className='mt-8 text-center'>
            <p className='text-cyan-400 text-base md:text-lg font-bold'>
              Custom pricing based on your business needs
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-black'>
        <div className='max-w-4xl mx-auto text-center'>
          <Shield className='w-12 h-12 text-emerald-400 mx-auto mb-4' />
          <h2 className='text-xl md:text-3xl font-bold text-white mb-4'>
            60-Day Guarantee
          </h2>
          <div className='bg-zinc-900 border-2 border-emerald-500/30 rounded-xl p-4 md:p-6'>
            <p className='text-sm text-white mb-3'>
              5+ bookings in 60 days or 100% refund + free support month
            </p>
            <p className='text-xs text-white/70'>
              Only 1 of 35 clients did not hit this goal
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 md:py-16 px-4 bg-zinc-900'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-xl md:text-3xl font-bold text-center text-white mb-8'>
            FAQ
          </h2>
          <div className='space-y-3'>
            {[
              {
                q: 'Not tech-savvy. Can I use this?',
                a: 'Yes! If you post on Instagram, you can use this. We handle setup. You just approve and start.',
              },
              {
                q: 'Works for my niche?',
                a: 'Yes. Bridal, editorial, SFX, party - we customize everything to your services and pricing.',
              },
              {
                q: 'Clients prefer DM?',
                a: 'They can! System works in Instagram. Instant auto-response with your link. Feels personal.',
              },
              {
                q: 'Time to see results?',
                a: 'Most get first booking within 48 hours. Average ROI: 2 weeks.',
              },
              {
                q: 'After 60 days?',
                a: 'System keeps working forever. You own it. We provide ongoing support and updates.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className='bg-black border border-white/10 rounded-xl overflow-hidden'
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className='w-full p-4 text-left flex justify-between items-center'
                >
                  <span className='text-white font-bold text-sm pr-4'>
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className='px-4 pb-4 text-white/80 text-xs'>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='form' className='py-10 md:py-16 px-4 bg-black'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-6 px-4'>
            <h2 className='text-xl md:text-3xl font-bold text-white mb-2'>
              Get Your <span className='text-cyan-400'>FREE</span> Strategy
              Session
            </h2>
            <p className='text-xs text-cyan-400 animate-pulse'>
              7 spots left this month
            </p>
          </div>
          <div className='bg-zinc-900 rounded-xl p-4 md:p-6 border-2 border-cyan-400/30'>
            <form onSubmit={submit}>
              <div className='flex justify-between mb-4'>
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className='flex items-center'>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        formStep >= s
                          ? 'bg-cyan-500 text-white'
                          : 'bg-black text-gray-400'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`h-1 w-10 mx-1 ${
                          formStep > s ? 'bg-cyan-500' : 'bg-black'
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              {formStep === 1 && (
                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-white mb-3'>
                    Step 1: Tell Us About Your Business
                  </h3>
                  <div>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name *'
                      value={formData.name}
                      onChange={handleInputChange}
                      className={ic}
                    />
                    {errors.name && (
                      <p className='text-red-400 text-xs mt-1'>{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type='text'
                      name='businessName'
                      placeholder='Business *'
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={ic}
                    />
                    {errors.businessName && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type='text'
                      name='city'
                      placeholder='City *'
                      value={formData.city}
                      onChange={handleInputChange}
                      className={ic}
                    />
                    {errors.city && (
                      <p className='text-red-400 text-xs mt-1'>{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <select
                      name='yearsInBusiness'
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      className={ic}
                    >
                      <option value=''>Years *</option>
                      <option value='less1'>Less Than 1</option>
                      <option value='1to3'>1-3</option>
                      <option value='3to5'>3-5</option>
                      <option value='5plus'>5+</option>
                    </select>
                    {errors.yearsInBusiness && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.yearsInBusiness}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {formStep === 2 && (
                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-white mb-3'>
                    Step 2: How Can We Reach You?
                  </h3>
                  <div>
                    <input
                      type='text'
                      name='instagram'
                      placeholder='@handle *'
                      value={formData.instagram}
                      onChange={handleInputChange}
                      className={ic}
                    />
                    {errors.instagram && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.instagram}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type='url'
                      name='website'
                      placeholder='Website'
                      value={formData.website}
                      onChange={handleInputChange}
                      className={ic}
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email *'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={ic}
                    />
                    {errors.email && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <div className='flex items-center px-3 bg-black border border-white/20 rounded-lg text-white text-sm'>
                      +1
                    </div>
                    <div className='flex-1'>
                      <input
                        type='tel'
                        name='phone'
                        placeholder='(123) 456-7890 *'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={ic}
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className='text-red-400 text-xs mt-1'>{errors.phone}</p>
                  )}
                </div>
              )}
              {formStep === 3 && (
                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-white mb-3'>
                    Step 3: Your Current Situation
                  </h3>
                  <div>
                    <select
                      name='monthlyBookings'
                      value={formData.monthlyBookings}
                      onChange={handleInputChange}
                      className={ic}
                    >
                      <option value=''>Bookings *</option>
                      <option value='0to5'>0-5</option>
                      <option value='6to15'>6-15</option>
                      <option value='16to25'>16-25</option>
                      <option value='40plus'>40+</option>
                    </select>
                    {errors.monthlyBookings && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.monthlyBookings}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      name='averagePrice'
                      value={formData.averagePrice}
                      onChange={handleInputChange}
                      className={ic}
                    >
                      <option value=''>Price *</option>
                      <option value='under100'>Under $100</option>
                      <option value='100to200'>$100-200</option>
                      <option value='200to350'>$200-350</option>
                      <option value='500plus'>$500+</option>
                    </select>
                    {errors.averagePrice && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.averagePrice}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {formStep === 4 && (
                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-white mb-3'>
                    Step 4: Your Goals & Timeline
                  </h3>
                  <div>
                    <select
                      name='revenueGoal'
                      value={formData.revenueGoal}
                      onChange={handleInputChange}
                      className={ic}
                    >
                      <option value=''>Revenue *</option>
                      <option value='5to10k'>$5-10K</option>
                      <option value='10to20k'>$10-20K</option>
                      <option value='20to30k'>$20-30K</option>
                      <option value='30kplus'>$30K+</option>
                    </select>
                    {errors.revenueGoal && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.revenueGoal}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={ic}
                    >
                      <option value=''>Timeline *</option>
                      <option value='asap'>ASAP</option>
                      <option value='3months'>3mo</option>
                      <option value='6months'>6mo</option>
                      <option value='1year'>1yr</option>
                    </select>
                    {errors.timeline && (
                      <p className='text-red-400 text-xs mt-1'>
                        {errors.timeline}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className='flex justify-between mt-6 gap-2'>
                {formStep > 1 && (
                  <button
                    type='button'
                    onClick={() => setFormStep(formStep - 1)}
                    className='px-4 py-2 bg-black text-white font-bold rounded-lg text-sm'
                  >
                    Back
                  </button>
                )}
                {formStep < 4 ? (
                  <button
                    type='button'
                    onClick={next}
                    className='ml-auto px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg text-sm'
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='ml-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Sending...' : 'Book Session'}
                  </button>
                )}
              </div>
            </form>
            <p className='text-center text-white/70 text-xs mt-4'>
              Secure. Confirmation in 5min.
            </p>
          </div>
        </div>
      </section>

      <footer className='py-8 px-4 bg-zinc-900 border-t border-white/10'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='flex justify-center'>
            <a href='/' className='inline-block mb-4'>
              <img
                src='/selaya-logo.png'
                alt='Sellaya'
                className='h-[0.8rem] w-auto mx-auto'
                style={{ height: '0.8rem' }}
              />
            </a>
          </div>
          <div className='flex justify-center gap-4 mb-4'>
            <a
              href='https://www.instagram.com/sellayadigital/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/70 hover:text-white transition'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#FFFFFF'
                classNamen='bi bi-instagram'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
              </svg>
            </a>
          </div>
          <div className='flex justify-center gap-4 mb-0'>
            <p className='text-white/70 mb-2 text-sm'>
              Automated Booking Systems for Makeup Artists
            </p>
          </div>

          <div className='text-white/70 text-xs'>
            <span>North America</span>
            <span className='mx-3'>|</span>
            <a href='tel:+14376770182'>
              <span>(437) 677-0182</span>
            </a>
          </div>
        </div>
      </footer>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap');`}</style>
    </div>
  )
}
