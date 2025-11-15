// src/TreatmentsCarousel.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import img3 from './/images/376E3BC0-702E-4A6D-A039-E57800C63FD4.jpg'
import img4 from './/images/7F692B95-3592-4D42-9CDB-EE830F53EE34.jpg'
import img5 from './/images/91D06AB8-D599-4D8C-BB87-74B67F691540.jpg'
import img1 from './/images/Beige Brown Neutral Before + After Facebook Post.png'
import img2 from './/images/Beige Minimalist Bold Beauty Skincare Before After Collage Instagram Post.png'
import img6 from './/images/IMG_4744.PNG'
import img7 from './/images/Minimalist Transformation Before + After Facebook Post.png'

const TreatmentsCarousel = ({ items }) => {
  // ====== Data ======
  const treatments = items ?? [
    { name: 'Botox Clinic', image: img1 },
    { name: 'Rhinoplasty', image: img2 },
    { name: 'Dermatology & Skin Care', image: img3 },
    { name: 'Chemical Peels', image: img4 },
    { name: 'Laser Treatments', image: img5 },
    { name: 'Body Contouring', image: img6 },
    { name: 'Microneedling', image: img7 },
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

  const totalCards = treatments.length
  const maxIndex = Math.max(totalCards - itemsPerSlide, 0) // last starting position
  const totalWindows = maxIndex + 1 // dots count

  // ====== Helpers ======
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  const clampIndex = useCallback(
    (i) => {
      if (i < 0) return maxIndex
      if (i > maxIndex) return 0
      return i
    },
    [maxIndex]
  )

  const next = useCallback(() => {
    setIndex((i) => clampIndex(i + 1)) // move by 1 card
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

  // Guard index when itemsPerSlide changes
  useEffect(() => {
    setIndex((i) => clampIndex(i))
  }, [itemsPerSlide, clampIndex])

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
  }, [autoplay, isHovering, autoplaySpeed, next])

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
            {/* Track: one long row, shift by 1 card each time */}
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${index * (100 / itemsPerSlide)}%)`,
              }}
            >
              {treatments.map((treatment, i) => (
                <button
                  type='button'
                  key={i}
                  className='relative group cursor-pointer px-2'
                  style={{
                    minWidth: `${100 / itemsPerSlide}%`,
                    maxWidth: `${100 / itemsPerSlide}%`,
                  }}
                  onClick={handleBooking}
                >
                  <div className='relative h-96 md:h-72 lg:h-80 overflow-hidden rounded-sm bg-neutral-800'>
                    <img
                      src={treatment.image}
                      alt='before and after'
                      loading='lazy'
                      className='w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-300' />
                  </div>
                </button>
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
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-orange-200 hover:bg-orange-200 text-neutral-950 flex items-center justify-center transition-all z-10 group'
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

        {/* Dots – one per starting position */}
        <div className='flex justify-center gap-2 mt-8' aria-label='Slide dots'>
          {Array.from({ length: totalWindows }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-8 bg-orange-200'
                  : 'w-2 bg-neutral-700 hover:bg-neutral-600'
              }`}
              aria-label={`Go to position ${i + 1}`}
              aria-current={i === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentsCarousel
