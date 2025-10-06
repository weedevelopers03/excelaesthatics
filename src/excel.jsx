import {
  Award,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ExcelAestheticsClone() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visibleServices, setVisibleServices] = useState(6)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6)
  }

  const treatments = [
    { name: 'Botox Clinic', image: 'botox' },
    { name: 'Rhinoplasty', image: 'rhinoplasty' },
    { name: 'Dermatology & Skin Care', image: 'dermatology' },
    { name: 'Chemical Peels', image: 'chemical-peels' },
    { name: 'Laser Treatments', image: 'laser' },
    { name: 'Facial Fillers', image: 'fillers' },
    { name: 'Body Contouring', image: 'body-contouring' },
    { name: 'Hair Restoration', image: 'hair-restoration' },
  ]

  const nextSlide = () => {
    setCarouselIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => prev - 1)
  }

  useEffect(() => {
    const totalSlides = Math.ceil(treatments.length / 4)
    if (carouselIndex >= totalSlides) {
      setTimeout(() => {
        setCarouselIndex(0)
      }, 500)
    } else if (carouselIndex < 0) {
      setTimeout(() => {
        setCarouselIndex(totalSlides - 1)
      }, 500)
    }
  }, [carouselIndex, treatments.length])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const allServices = [
    {
      name: 'Wood Therapy',
      price: 'US$100.00+',
      duration: '30 mins+',
      description:
        'Embark on a journey of natural healing and body sculpting with our exclusive Wood Therapy service...',
    },
    {
      name: 'Weightloss Packages',
      price: 'US$50.00+',
      duration: '30 mins+',
      description:
        'Indulge in our exclusive Weightloss Packages tailored to meet your unique needs.',
    },
    {
      name: 'Virtual Consult',
      price: 'US$75.00',
      duration: '30 mins',
      description:
        'Unlock the power of personalized advice with our virtual consult service!',
    },
    {
      name: 'Ultrasound Lymphatic Massages',
      price: 'US$100.00',
      duration: '30 mins',
      description: 'Professional lymphatic massage treatment.',
    },
    {
      name: 'Tirzepatide Injections',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Embark on a journey to better health with our Tirzepatide Injection service.',
    },
    {
      name: 'Three For Me',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'ThreeForMe is a laser treatment that addresses multiple key skin concerns—wrinkles, sun damage...',
    },
    {
      name: 'TempSure Vitalia',
      price: 'US$400.00+',
      duration: '30 mins',
      description:
        'Non-invasive, non-hormonal and chemical-free solution for skin tightening.',
    },
    {
      name: 'Smooth & PDO Threads',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Looking to achieve a more youthful appearance? Book PDO Threads service...',
    },
    {
      name: 'Skinny Shot',
      price: 'US$35.00+',
      duration: '15 mins',
      description:
        'Boost your fat loss! This powerful shot accelerates fat metabolism.',
    },
    {
      name: 'Skin Tightening/Body Contouring',
      price: 'Price Varies',
      duration: '15 mins+',
      description: 'TempSure™ Envi body contouring treatment.',
    },
    {
      name: 'Skin Tag Removal',
      price: 'US$100.00',
      duration: '40 mins',
      description:
        'Say goodbye to skin tags with effective and painless removal service.',
    },
    {
      name: 'Semaglutide Injections',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Experience personalized care with our Semaglutide Injection service.',
    },
    {
      name: 'Salmon DNA/PDRN',
      price: 'US$200.00+',
      duration: '30 mins+',
      description:
        'Professional Salmon DNA/PDRN treatment for skin regeneration.',
    },
    {
      name: 'Roller Wave Treatment/Endosphere',
      price: 'US$100.00+',
      duration: '30 mins',
      description:
        'Smooth, sculpt and define with advanced Roller Wave Treatment!',
    },
    {
      name: 'Reta Triple G Weight Loss',
      price: 'US$75.00+',
      duration: '30 mins',
      description:
        'Peptide designed to enhance weight loss by regulating appetite.',
    },
    {
      name: 'PRX - No-Peel Glow Facial',
      price: 'US$300.00+',
      duration: '30 mins',
      description: 'No-peel treatment that stimulates collagen and elastin.',
    },
    {
      name: 'Powder Brows',
      price: 'Price varies',
      duration: '1 hr 45 mins+',
      description: 'Cosmetic semi-permanent powder brow tattooing.',
    },
    {
      name: 'Platelet-Rich Plasma',
      price: 'US$150.00+',
      duration: '30 mins',
      description: 'PRP therapy medical treatment for skin rejuvenation.',
    },
    {
      name: 'Peptide Therapy',
      price: 'US$130.00+',
      duration: '30 mins',
      description:
        'Designed to enhance recovery, support wellness and optimize body goals.',
    },
    {
      name: 'Nano Brows Initial Session',
      price: 'US$500.00',
      duration: '2 hrs',
      description:
        'Semi-permanent cosmetic procedure for natural-looking brows.',
    },
    {
      name: 'NAD+ Therapy',
      price: 'US$275.00+',
      duration: '30 mins',
      description: 'NAD and NAD+ in Energy Production and anti-aging.',
    },
    {
      name: 'Microneedling',
      price: 'US$50.00+',
      duration: '15 mins+',
      description:
        'Fine needle application into skin for rejuvenation purposes.',
    },
    {
      name: 'Microinfusion Facial',
      price: 'US$350.00+',
      duration: '30 mins',
      description:
        'Luxurious treatment with ultra-fine needles delivering customized blend.',
    },
    {
      name: 'Mesotherapy',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Experience rejuvenating benefits with personalized treatment.',
    },
    {
      name: 'Lymphatic Drainage Massage',
      price: 'US$110.00+',
      duration: '30 mins',
      description: 'Professional lymphatic drainage massage service.',
    },
    {
      name: 'Liquid Lipo Injections',
      price: 'Price varies',
      duration: '30 mins',
      description: 'Lipo-reducing solution with 11 active ingredients.',
    },
    {
      name: 'Lip Blushing',
      price: 'US$50.00+',
      duration: '30 mins+',
      description: 'Semi-permanent cosmetic tattooing procedure for lips.',
    },
    {
      name: 'Letybo',
      price: 'US$11.00',
      duration: '30 mins',
      description: 'Korean-made, FDA-approved botulinum toxin treatment.',
    },
    {
      name: 'LED Light Therapy',
      price: 'US$50.00',
      duration: '30 mins',
      description: "Non-invasive treatment that enters the skin's layers.",
    },
    {
      name: 'Lash Lift',
      price: 'US$110.00',
      duration: '1 hr',
      description: 'Ultimate transformation enhancing your natural lashes.',
    },
    {
      name: 'Lash Extensions',
      price: 'US$110.00+',
      duration: '2 hrs+',
      description: 'Expertly applied eyelash extensions.',
    },
    {
      name: 'Laser IPL/Fractional',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Icon aesthetic system versatile beauty tool.',
    },
    {
      name: 'Laser Hair Removal',
      price: 'Based on 8 sessions',
      duration: '10 mins+',
      description: 'Permanent solution to unwanted hair.',
    },
    {
      name: 'L-Carnite Shots',
      price: 'US$30.00+',
      duration: '30 mins',
      description: "Amino acid derivative for body's energy production.",
    },
    {
      name: 'IV Therapy',
      price: 'US$99.00+',
      duration: '30 mins+',
      description: "Myers' Cocktail IV hydration package - best-selling!",
    },
    {
      name: 'Intimate Whitening',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Professional-grade intimate whitening treatments.',
    },
    {
      name: 'In-Person Consult',
      price: 'US$75.00',
      duration: '30 mins',
      description: 'Initial consult to create customized package.',
    },
    {
      name: 'Hylanex/Filler Reversal',
      price: 'US$250.00',
      duration: '30 mins',
      description: 'Safe and effective filler reversal service.',
    },
    {
      name: 'Hydrocortisone Injection',
      price: 'US$150.00',
      duration: '15 mins',
      description: 'Professional hydrocortisone injections for keloids.',
    },
    {
      name: 'Hair Restoration',
      price: 'US$50.00+',
      duration: '20 mins+',
      description: 'PRP therapy for hair loss - minimally invasive treatment.',
    },
    {
      name: 'Fillers/Injectables',
      price: 'US$75.00+',
      duration: '30 mins+',
      description: 'Cosmetic injections to enhance your beauty.',
    },
    {
      name: 'Facials',
      price: 'US$15.00+',
      duration: '5 mins+',
      description: 'Rejuvenating facial experience for refreshed skin.',
    },
    {
      name: 'Endolift/Endolaser',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Non-invasive treatment for skin tightening.',
    },
    {
      name: 'Cellulite Reduction',
      price: 'US$90.00+',
      duration: '30 mins',
      description: 'TempSure Envi radiofrequency energy to tighten skin.',
    },
    {
      name: 'Brows',
      price: 'US$45.00+',
      duration: '30 mins+',
      description: 'Expert brow shaping service!',
    },
    {
      name: 'Brow Lamination Package',
      price: 'US$120.00',
      duration: '30 mins',
      description: 'Personalized shaping + tint + deep conditioning.',
    },
    {
      name: 'Brow Design + Wax + Tint',
      price: 'US$60.00',
      duration: '30 mins',
      description: 'Complete brow design service package.',
    },
    {
      name: 'Botox',
      price: 'Price varies',
      duration: '15 mins+',
      description: 'Rediscover your youthful glow with Botox treatment.',
    },
    {
      name: 'Biorepeel Rose',
      price: 'US$50.00+',
      duration: '30 mins',
      description: 'Designed to lighten pigmentation in intimate areas.',
    },
    {
      name: 'Biorepeel Gold',
      price: 'US$50.00+',
      duration: '30 mins',
      description: 'Luxurious skin rejuvenation experience - top-tier service.',
    },
    {
      name: 'BioRepeel Blue',
      price: 'US$50.00+',
      duration: '30 mins+',
      description: 'Safe and natural skincare service.',
    },
    {
      name: 'B12 SHOT',
      price: 'Price varies',
      duration: '10 mins+',
      description: 'Revitalize your body and mind with B12 Shot.',
    },
  ]

  const staff = [
    { name: 'Yalysher Acevedo' },
    { name: 'Sindy' },
    { name: 'Gabriela Hernandez' },
    { name: 'Alexandra Sosa' },
    { name: 'Yapsis Valdes' },
  ]

  const testimonials = [
    {
      text: 'I go for regular appointments at Excel Aesthetics and my face looks much healthier now! I would definitely recommend.',
      author: 'Debbie S.',
      rating: 5,
    },
    {
      text: 'This is a wonderful medical aesthetic center with very professional and friendly staff and up to date technology. They took me at a very short notice when I needed emergency treatment, they were so nice and accommodating.',
      author: 'Harvey J.',
      rating: 5,
    },
    {
      text: 'The best aesthetic clinic I have ever experienced! Professional and friendly staff made me feel like family... would highly recommend to anyone!!!',
      author: 'Ella R.',
      rating: 5,
    },
    {
      text: "Excel Aesthetics in Miami offers exceptional service. The practitioners are knowledgeable and the results are amazing. I'm so happy with my treatments!",
      author: 'Maria G.',
      rating: 5,
    },
    {
      text: 'Outstanding experience from start to finish. The team is professional, welcoming, and truly cares about their patients. Highly recommend for anyone seeking quality aesthetic treatments.',
      author: 'James M.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const features = [
    {
      icon: Award,
      title: 'Expert Practitioners',
      description:
        'Board-certified professionals with years of experience in medical aesthetics.',
    },
    {
      icon: Sparkles,
      title: 'Latest Technology',
      description:
        'State-of-the-art equipment including Icon® aesthetic system and TempSure™ Envi.',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description:
        'Customized treatment plans tailored to your unique beauty goals.',
    },
    {
      icon: Shield,
      title: 'Safe & Trusted',
      description:
        'FDA-approved treatments in a comfortable, welcoming environment.',
    },
  ]

  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

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

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/98 backdrop-blur-lg border-b border-neutral-800/50'
            : 'bg-neutral-950/80 backdrop-blur-sm'
        }`}
      >
        <div className='container mx-auto px-6'>
          <div className='flex items-center justify-between h-20'>
            <a href='#home' className='flex items-center space-x-2'>
              <div className='text-2xl font-bold tracking-wider'>
                <span className='text-amber-600'>EXCEL</span>
                <span className='text-neutral-100'> AESTHETICS</span>
              </div>
            </a>

            <div className='hidden md:flex items-center space-x-10'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-sm tracking-wide text-white hover:text-amber-600 transition-colors uppercase'
                >
                  {link.name}
                </a>
              ))}
              <a
                href='/payment-plans'
                className='text-sm tracking-wide text-white hover:text-amber-600 transition-colors uppercase'
              >
                Payment Plans
              </a>
            </div>

            <div className='hidden md:flex items-center space-x-6'>
              <a
                href='tel:+13053103160'
                className='flex items-center text-neutral-400 hover:text-amber-600 transition-colors'
              >
                <Phone className='w-4 h-4 mr-2' />
                <span className='text-sm'>(305) 310-3160</span>
              </a>
              <button
                onClick={handleBooking}
                className='bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-xs font-semibold px-6 py-3 transition-colors'
              >
                Book a Visit
              </button>
            </div>

            <button
              className='md:hidden text-neutral-100'
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

        {isMobileMenuOpen && (
          <div className='md:hidden bg-neutral-950 border-t border-neutral-800/50'>
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
              <a
                href='/payment-plans'
                className='block text-sm tracking-wide text-white hover:text-amber-600 transition-colors uppercase'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payment Plans
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

      {/* Marquee Banner */}
      <div className='bg-[#d4b896] py-4 overflow-hidden relative'>
        <div className='flex animate-marquee whitespace-nowrap'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='flex items-center'>
              <span className='text-neutral-900 font-medium text-lg mx-8'>
                Special Offer: Botox
              </span>
              <svg
                className='w-6 h-6 text-neutral-900 mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-neutral-900 font-medium text-lg mx-8'>
                New Clients Welcome
              </span>
              <svg
                className='w-6 h-6 text-neutral-900 mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-neutral-900 font-medium text-lg mx-8'>
                Body Contouring Packages Available
              </span>
              <svg
                className='w-6 h-6 text-neutral-900 mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-neutral-900 font-medium text-lg mx-8'>
                Book Today
              </span>
              <svg
                className='w-6 h-6 text-neutral-900 mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center overflow-hidden'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]'></div>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-2xl pt-20'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8'>
              <span className='block text-neutral-100 uppercase tracking-tight'>
                Multi-Award
              </span>
              <span className='block text-neutral-100 uppercase tracking-tight'>
                Winning
              </span>
              <span className='block text-amber-600 uppercase tracking-tight mt-2'>
                Cosmetic Clinic
              </span>
            </h1>

            <p className='text-base md:text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed'>
              5-Star Medispa bringing the latest treatments, carried out by the
              most experienced aesthetic practitioners in the industry.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={handleBooking}
                className='bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-sm px-8 py-4 transition-colors'
              >
                Free Consultation
              </button>
              <a
                href='#services'
                className='border border-neutral-700 text-neutral-100 hover:bg-neutral-900 uppercase tracking-wider text-sm px-8 py-4 transition-colors text-center'
              >
                Find Your Procedure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Carousel */}
      <section className='py-16 bg-neutral-900 relative overflow-hidden'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-normal uppercase tracking-tight text-neutral-100 mb-4'>
              Our <span className='text-amber-600'>Transformations</span>
            </h2>
            <p className='text-neutral-400'>
              Real results from our expert treatments
            </p>
          </div>

          <div className='relative'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(treatments.length / 4) }).map(
                  (_, slideIndex) => (
                    <div key={slideIndex} className='min-w-full flex'>
                      {treatments
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((treatment, index) => (
                          <div
                            key={index}
                            className='relative group cursor-pointer'
                            style={{ width: '25%' }}
                            onClick={handleBooking}
                          >
                            <div className='relative h-64 bg-neutral-800 overflow-hidden mx-2'>
                              {/* Before/After Split Image Effect */}
                              <div className='absolute inset-0 grid grid-cols-2'>
                                <div className='relative overflow-hidden'>
                                  <div className='absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 opacity-60'></div>
                                  <div className='absolute top-2 left-2 text-xs uppercase tracking-wider bg-neutral-950/80 px-2 py-1 text-neutral-300'>
                                    Before
                                  </div>
                                </div>
                                <div className='relative overflow-hidden border-l-2 border-amber-600/50'>
                                  <div className='absolute inset-0 bg-gradient-to-br from-amber-900/20 to-neutral-800 opacity-60'></div>
                                  <div className='absolute top-2 right-2 text-xs uppercase tracking-wider bg-neutral-950/80 px-2 py-1 text-neutral-300'>
                                    After
                                  </div>
                                </div>
                              </div>

                              {/* Hover Overlay */}
                              <div className='absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/10 transition-all duration-300'></div>
                            </div>

                            <div className='bg-neutral-950 p-4 text-center border-t-2 border-amber-600/50'>
                              <h3 className='text-lg font-normal text-neutral-100 group-hover:text-amber-600 transition-colors'>
                                {treatment.name}
                              </h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-amber-600 hover:bg-amber-500 text-neutral-950 flex items-center justify-center transition-all z-10 group'
              aria-label='Previous slide'
            >
              <svg
                className='w-6 h-6 group-hover:-translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-amber-600 hover:bg-amber-500 text-neutral-950 flex items-center justify-center transition-all z-10 group'
              aria-label='Next slide'
            >
              <svg
                className='w-6 h-6 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className='flex justify-center gap-2 mt-8'>
            {Array.from({ length: Math.ceil(treatments.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === carouselIndex
                      ? 'w-8 bg-amber-600'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-24 bg-neutral-950'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
              <span className='text-neutral-100'>Our Premium </span>
              <span className='text-amber-600'>Services</span>
            </h2>
            <p className='text-base text-neutral-400 leading-relaxed mb-8'>
              Discover our comprehensive range of non-surgical aesthetic
              treatments designed to enhance your natural beauty.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {allServices.slice(0, visibleServices).map((service, index) => (
              <div
                key={index}
                className='group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300 p-6'
              >
                <h3 className='text-xl font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                  {service.name}
                </h3>
                <p className='text-neutral-400 mb-4 leading-relaxed text-sm line-clamp-2'>
                  {service.description}
                </p>
                <div className='flex justify-between items-center text-sm'>
                  <button
                    onClick={handleBooking}
                    className='text-amber-600 hover:text-amber-500 uppercase tracking-wider font-semibold transition-colors'
                  >
                    Book Now
                  </button>
                  <div className='text-neutral-500'>
                    <span className='block'>{service.price}</span>
                    <span className='text-xs'>{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleServices < allServices.length && (
            <div className='text-center mt-12'>
              <button
                onClick={loadMoreServices}
                className='bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-sm px-12 py-4 transition-colors font-semibold'
              >
                View More Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Marquee Banner */}
      <div className='bg-[#d4b896] py-4 overflow-hidden relative'>
        <div className='flex animate-marquee whitespace-nowrap'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='flex items-center'>
              <span className='text-white font-medium text-lg mx-8'>
                Special Offer: Botox
              </span>
              <svg
                className='w-6 h-6 text-white mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-white font-medium text-lg mx-8'>
                New Clients Welcome
              </span>
              <svg
                className='w-6 h-6 text-white mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-white font-medium text-lg mx-8'>
                Body Contouring Packages Available
              </span>
              <svg
                className='w-6 h-6 text-white mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
              <span className='text-white font-medium text-lg mx-8'>
                Book Today
              </span>
              <svg
                className='w-6 h-6 text-white mx-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z' />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner Section */}
      <section className='relative min-h-[600px] flex items-center justify-end overflow-hidden bg-neutral-200'>
        <div className='absolute inset-0 bg-gradient-to-r from-neutral-400/40 to-transparent'></div>

        {/* Content - Right Side */}
        <div className='relative z-10 max-w-2xl mr-12 md:mr-24 text-right px-6'>
          <div className='inline-block mb-6'>
            <span className='bg-[#d4b896] text-neutral-900 px-6 py-2 text-sm font-semibold uppercase tracking-wider'>
              Limited-Time Offer
            </span>
          </div>

          <h2 className='text-2xl md:text-3xl text-white mb-4 font-light'>
            Premier Medical Aesthetics Center
          </h2>

          <h3 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            EXCEL AESTHETICS MIAMI
          </h3>

          <p className='text-xl text-white mb-8 font-light'>
            Non-surgical treatments to enhance your natural beauty
          </p>

          <button
            onClick={handleBooking}
            className='bg-[#c8b5d8] hover:bg-[#b8a5c8] text-neutral-900 px-10 py-4 uppercase tracking-wider font-semibold text-sm transition-all'
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24 bg-neutral-900'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
              <span className='text-neutral-100'>Hand picked top </span>
              <span className='text-amber-600'>Specialists</span>
            </h2>
            <p className='text-base text-neutral-400 leading-relaxed'>
              Meet our expert team of aesthetic professionals
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {staff.map((member, index) => (
              <div
                key={index}
                className='bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300 overflow-hidden'
              >
                <div className='p-8'>
                  <div className='w-48 h-48 mx-auto mb-6 rounded-full bg-neutral-800 overflow-hidden'>
                    <div className='w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800'></div>
                  </div>
                  <h3 className='text-2xl font-normal mb-2 uppercase tracking-wide text-neutral-100 text-center'>
                    {member.name}
                  </h3>
                  <p className='text-neutral-500 text-sm text-center mb-6'>
                    Aesthetic Specialist
                  </p>
                  <div className='flex justify-center items-center space-x-4'>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                    >
                      <Instagram className='w-4 h-4' />
                    </a>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                    >
                      <Facebook className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-24 bg-neutral-950 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='diagonal-lines'
                x='0'
                y='0'
                width='40'
                height='40'
                patternUnits='userSpaceOnUse'
              >
                <line
                  x1='0'
                  y1='0'
                  x2='40'
                  y2='40'
                  stroke='currentColor'
                  strokeWidth='1'
                  className='text-neutral-700'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#diagonal-lines)' />
          </svg>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-normal uppercase tracking-tight text-white mb-6'>
              What Our Patients Say
            </h2>
            <p className='text-neutral-400 text-lg'>
              More than 250 five-star reviews on Google
            </p>
          </div>

          <div className='relative max-w-6xl mx-auto'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className='min-w-full px-4'>
                    <div className='bg-neutral-900 border border-neutral-800 p-8 md:p-12 max-w-3xl mx-auto'>
                      <div className='flex justify-center mb-6'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className='w-6 h-6 text-amber-600 fill-current'
                            viewBox='0 0 24 24'
                          >
                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                          </svg>
                        ))}
                      </div>

                      <p className='text-neutral-300 text-lg md:text-xl leading-relaxed text-center mb-8 italic'>
                        "{testimonial.text}"
                      </p>

                      <div className='flex items-center justify-center'>
                        <div className='w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center mr-4'>
                          <span className='text-amber-600 font-semibold text-lg'>
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <p className='text-white font-semibold'>
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-amber-600 hover:bg-amber-500 text-neutral-950 flex items-center justify-center transition-all z-10'
              aria-label='Previous testimonial'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-amber-600 hover:bg-amber-500 text-neutral-950 flex items-center justify-center transition-all z-10'
              aria-label='Next testimonial'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === testimonialIndex
                    ? 'w-8 bg-amber-600'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className='text-center mt-12'>
            <a
              href='https://www.google.com/maps/place/Excel+Aesthetics/@25.893,-80.208,17z'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-neutral-950 px-8 py-3 uppercase tracking-wider font-semibold text-sm transition-all'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-24 bg-neutral-900 relative overflow-hidden'
      >
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center max-w-3xl mx-auto mb-20'>
            <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
              <span className='text-neutral-100'>Excellence in </span>
              <span className='text-amber-600'>Medical Aesthetics</span>
            </h2>
            <p className='text-base text-neutral-400 leading-relaxed'>
              Excel Aesthetics in Miami is a full-service medical aesthetic
              center offering non-surgical treatments to enhance natural beauty.
              By making patients feel comfortable and welcome, we invoke a sense
              of calmness and trust for better overall care.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className='group text-center p-8 bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300'
                >
                  <div className='inline-flex items-center justify-center w-14 h-14 mb-6'>
                    <Icon className='w-8 h-8 text-amber-600' />
                  </div>
                  <h3 className='text-lg font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                    {feature.title}
                  </h3>
                  <p className='text-neutral-500 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className='mt-20 text-center max-w-2xl mx-auto p-10 bg-neutral-950 border border-neutral-800'>
            <h3 className='text-2xl font-normal mb-6 uppercase tracking-wide text-neutral-100'>
              Visit Our Miami Location
            </h3>
            <p className='text-neutral-400 mb-2 text-sm'>
              15490 Northwest 7th Avenue, Suite 210
            </p>
            <p className='text-neutral-400 mb-6 text-sm'>Miami, FL 33169</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-sm'>
              <a
                href='tel:+13053103160'
                className='text-amber-600 hover:text-amber-500 transition-colors'
              >
                (305) 310-3160
              </a>
              <span className='hidden sm:block text-neutral-700'>•</span>
              <a
                href='mailto:excelaesthetics1@gmail.com'
                className='text-amber-600 hover:text-amber-500 transition-colors'
              >
                excelaesthetics1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='relative py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-amber-900/40 via-neutral-800/60 to-neutral-900/80'></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgNi42MjctNS4zNzMgMTItMTIgMTJzLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyIDEyIDUuMzczIDEyIDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className='container mx-auto px-6 relative z-10 text-center'>
          <div className='flex justify-center mb-8'>
            <svg
              className='w-16 h-16 text-white'
              viewBox='0 0 100 100'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M50 10 L90 90 L10 90 Z' strokeLinejoin='round' />
              <line x1='30' y1='70' x2='70' y2='70' />
            </svg>
          </div>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-wide'>
            Sign Up For Our Newsletter
          </h2>
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 uppercase tracking-wide'>
            And Special Events
          </h3>

          <p className='text-white text-lg mb-12 max-w-2xl mx-auto'>
            Subscribe to our newsletter and receive a 10% off for any further
            treatment.
          </p>

          <div className='max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center'>
            <input
              type='email'
              placeholder='Your Email*'
              className='flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors'
            />
            <button
              onClick={(e) => {
                const input = e.target.previousElementSibling
                if (input && input.value) {
                  alert(
                    `Thank you for subscribing! We'll send updates to ${input.value}`
                  )
                  input.value = ''
                } else {
                  alert('Please enter your email address')
                }
              }}
              className='px-12 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 uppercase tracking-wider font-semibold text-sm transition-all'
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

          <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12'>
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
                    <h4 className='font-semibold mb-1 text-neutral-100'>
                      Phone
                    </h4>
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
                    <h4 className='font-semibold mb-1 text-neutral-100'>
                      Email
                    </h4>
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
                    <h4 className='font-semibold mb-1 text-neutral-100'>
                      Hours
                    </h4>
                    <p className='text-neutral-400 text-sm'>
                      Mon - Fri: 11:00 AM - 7:00 PM
                      <br />
                      Sat - Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex space-x-4 pt-4'>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-amber-600 hover:text-neutral-950 flex items-center justify-center transition-all text-amber-600'
                >
                  <Facebook className='w-5 h-5' />
                </a>
              </div>
            </div>

            <div className='bg-neutral-900 border border-neutral-800 p-10'>
              <h3 className='text-2xl font-normal mb-8 uppercase tracking-wide text-neutral-100'>
                Send Us a Message
              </h3>
              <div className='space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4'>
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

      {/* Footer */}
      <footer className='bg-neutral-900 border-t border-neutral-800'>
        <div className='container mx-auto px-6 py-16'>
          <div className='grid md:grid-cols-4 gap-10 mb-12'>
            <div className='md:col-span-2'>
              <div className='text-2xl font-bold tracking-wider mb-4'>
                <span className='text-amber-600'>EXCEL</span>
                <span className='text-neutral-100'> AESTHETICS</span>
              </div>
              <p className='text-neutral-500 mb-6 max-w-md text-sm leading-relaxed'>
                Premier medical aesthetics center in Miami, offering world-class
                non-surgical treatments to enhance your natural beauty.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-10 h-10 border border-neutral-800 hover:border-amber-600 hover:text-amber-600 flex items-center justify-center transition-all text-neutral-400'
                >
                  <Instagram className='w-4 h-4' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 border border-neutral-800 hover:border-amber-600 hover:text-amber-600 flex items-center justify-center transition-all text-neutral-400'
                >
                  <Facebook className='w-4 h-4' />
                </a>
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
                      className='text-neutral-500 hover:text-amber-600 transition-colors text-sm'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href='/payment-plans'
                    className='text-neutral-500 hover:text-amber-600 transition-colors text-sm'
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
                  <MapPin className='w-4 h-4 mt-1 flex-shrink-0 text-amber-600' />
                  <span className='text-sm leading-relaxed'>
                    15490 NW 7th Ave, Suite 210
                    <br />
                    Miami, FL 33169
                  </span>
                </li>
                <li className='flex items-center space-x-2 text-neutral-500'>
                  <Phone className='w-4 h-4 flex-shrink-0 text-amber-600' />
                  <a
                    href='tel:+13053103160'
                    className='text-sm hover:text-amber-600 transition-colors'
                  >
                    (305) 310-3160
                  </a>
                </li>
                <li className='flex items-center space-x-2 text-neutral-500'>
                  <Mail className='w-4 h-4 flex-shrink-0 text-amber-600' />
                  <a
                    href='mailto:excelaesthetics1@gmail.com'
                    className='text-sm hover:text-amber-600 transition-colors'
                  >
                    excelaesthetics1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600'>
            <p>
              © {new Date().getFullYear()} Excel Aesthetics Miami. All rights
              reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href='#' className='hover:text-amber-600 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-amber-600 transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
