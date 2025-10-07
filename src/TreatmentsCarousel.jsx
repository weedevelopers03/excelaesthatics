import { useEffect, useState } from 'react'

const TreatmentsCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(4)

  const treatments = [
    {
      name: 'Botox Clinic',
      image:
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Rhinoplasty',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Dermatology & Skin Care',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Chemical Peels',
      image:
        'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    },
    {
      name: 'Laser Treatments',
      image:
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Facial Fillers',
      image:
        'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Body Contouring',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
    },
    {
      name: 'Hair Restoration',
      image:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
    },
  ]

  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  const nextSlide = () => {
    setCarouselIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => prev - 1)
  }

  // Handle responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 639) {
        setItemsPerSlide(1) // sm
      } else if (width <= 767) {
        setItemsPerSlide(1) // md
      } else if (width <= 1023) {
        setItemsPerSlide(2) // lg
      } else if (width <= 1279) {
        setItemsPerSlide(3) // xl
      } else {
        setItemsPerSlide(4) // default
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle carousel wrapping
  useEffect(() => {
    const totalSlides = Math.ceil(treatments.length / itemsPerSlide)
    if (carouselIndex >= totalSlides) {
      setTimeout(() => {
        setCarouselIndex(0)
      }, 500)
    } else if (carouselIndex < 0) {
      setTimeout(() => {
        setCarouselIndex(totalSlides - 1)
      }, 500)
    }
  }, [carouselIndex, treatments.length, itemsPerSlide])

  const totalSlides = Math.ceil(treatments.length / itemsPerSlide)

  return (
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
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className='min-w-full flex'>
                  {treatments
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((treatment, index) => (
                      <div
                        key={index}
                        className='relative group cursor-pointer px-2'
                        style={{ width: `${100 / itemsPerSlide}%` }}
                        onClick={handleBooking}
                      >
                        <div className='relative h-64 bg-neutral-800 overflow-hidden'>
                          <div className='absolute inset-0 grid grid-cols-2'>
                            <div className='relative overflow-hidden'>
                              <img
                                src={treatment.image}
                                alt={`${treatment.name} before`}
                                className='absolute inset-0 w-full h-full object-cover opacity-60'
                              />
                              <div className='absolute inset-0 bg-gradient-to-br from-neutral-700/40 to-neutral-900/60'></div>
                              <div className='absolute top-2 left-2 text-xs uppercase tracking-wider bg-neutral-950/80 px-2 py-1 text-neutral-300'>
                                Before
                              </div>
                            </div>
                            <div className='relative overflow-hidden border-l-2 border-amber-600/50'>
                              <img
                                src={treatment.image}
                                alt={`${treatment.name} after`}
                                className='absolute inset-0 w-full h-full object-cover'
                              />
                              <div className='absolute inset-0 bg-gradient-to-br from-amber-900/10 to-amber-600/20'></div>
                              <div className='absolute top-2 right-2 text-xs uppercase tracking-wider bg-neutral-950/80 px-2 py-1 text-neutral-300'>
                                After
                              </div>
                            </div>
                          </div>

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
              ))}
            </div>
          </div>

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

        <div className='flex justify-center gap-2 mt-8'>
          {Array.from({ length: totalSlides }).map((_, index) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentsCarousel
