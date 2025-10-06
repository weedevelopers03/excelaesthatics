import { useState } from 'react'

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
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
  return (
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
  )
}
export default Testimonials
