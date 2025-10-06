const Newsletter = () => {
  return (
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
  )
}
export default Newsletter
