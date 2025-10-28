// src/TreatmentsCarousel.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const TreatmentsCarousel = ({ items }) => {
  // ====== Data ======
  // Provide your real images here if you are not passing "items" as a prop
  const treatments = items ?? [
    {
      name: 'Botox Clinic',
      image: '/images/1.jpg',
    },
    {
      name: 'Rhinoplasty',
      image: '/images/2.jpg',
    },
    {
      name: 'Dermatology & Skin Care',
      image: '/images/3.jpg',
    },
    {
      name: 'Chemical Peels',
      image: '/images/4.jpg',
    },
    {
      name: 'Laser Treatments',
      image: '/images/5.jpg',
    },
  ]

  // ====== Config ======
  const autoplay = true
  const autoplaySpeed = 3500
  const breakpoints = useMemo(
    () => [
      { max: 639, items: 1 },
      { max: 1023, items: 2 },
      { max: 1279, items: 3 },
      { max: Infinity, items: 4 },
    ],
    []
  )

  // ====== State ======
  const [itemsPerSlide, setItemsPerSlide] = useState(4)
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const touchStartX = useRef(null)
  const reducedMotion = useRef(false)

  const totalSlides = Math.ceil(treatments.length / itemsPerSlide)

  // ====== Helpers ======
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  const clampIndex = useCallback(
    (i) => {
      if (i < 0) return totalSlides - 1
      if (i >= totalSlides) return 0
      return i
    },
    [totalSlides]
  )

  const next = useCallback(() => {
    setIndex((i) => clampIndex(i + 1))
  }, [clampIndex])

  const prev = useCallback(() => {
    setIndex((i) => clampIndex(i - 1))
  }, [clampIndex])

  const goTo = useCallback((i) => setIndex(clampIndex(i)), [clampIndex])

  // ====== Responsive items per slide ======
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const matched =
        breakpoints.find((bp) => w <= bp.max) || breakpoints.at(-1)
      setItemsPerSlide(matched.items)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [breakpoints])

  // Guard index if slide count changes
  useEffect(() => {
    setIndex((i) => clampIndex(i))
  }, [itemsPerSlide, totalSlides, clampIndex])

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const set = () => (reducedMotion.current = mq.matches)
    set()
    mq.addEventListener?.('change', set)
    return () => mq.removeEventListener?.('change', set)
  }, [])

  // Auto-play with pause on hover and hidden tab
  useEffect(() => {
    if (!autoplay || isHovering || reducedMotion.current) return
    let timer = setInterval(() => next(), autoplaySpeed)
    const onVisibility = () => {
      clearInterval(timer)
      if (!document.hidden) {
        timer = setInterval(() => next(), autoplaySpeed)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      clearInterval(timer)
    }
  }, [autoplay, isHovering, autoplaySpeed, itemsPerSlide, next])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    const start = touchStartX.current
    if (start == null) return
    const end = e.changedTouches[0].clientX
    const delta = end - start
    const threshold = 40
    if (delta > threshold) prev()
    else if (delta < -threshold) next()
    touchStartX.current = null
  }

  return (
    <section
      className='py-16 bg-neutral-900 relative overflow-hidden'
      aria-labelledby='treatments-heading'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2
            id='treatments-heading'
            className='text-3xl md:text-4xl font-normal uppercase tracking-tight text-neutral-100 mb-4'
          >
            Our <span className='text-orange-200'>Transformations</span>
          </h2>
          <p className='text-neutral-400'>
            Real results from our expert treatments
          </p>
        </div>

        <div className='relative'>
          <div
            className='overflow-hidden'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            ref={containerRef}
            role='region'
            aria-roledescription='carousel'
            aria-label='Treatment transformations'
            aria-live='polite'
            tabIndex={0}
          >
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className='min-w-full flex'>
                  {treatments
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((treatment, i) => (
                      <button
                        type='button'
                        key={`${slideIndex}-${i}`}
                        className='relative group cursor-pointer px-2'
                        style={{ width: `${100 / itemsPerSlide}%` }}
                        onClick={handleBooking}
                      >
                        {/* Image card without center partition line */}
                        <div className='relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-sm bg-neutral-800'>
                          <img
                            src={treatment.image}
                            alt={`before and after`}
                            loading='lazy'
                            className='w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300'
                          />
                          {/* Optional subtle overlay for readability on hover */}
                          <div className='absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-300' />
                        </div>
                      </button>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-orange-200 hover:bg-orange-200 text-neutral-950 flex items-center justify-center transition-all z-10 group'
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
            onClick={next}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-orange-200 hover:bg-orange-200
             text-neutral-950 flex items-center justify-center transition-all z-10 group'
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

        {/* Dots */}
        <div className='flex justify-center gap-2 mt-8' aria-label='Slide dots'>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-8 bg-orange-200'
                  : 'w-2 bg-neutral-700 hover:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentsCarousel
