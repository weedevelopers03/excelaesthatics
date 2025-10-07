const Hero = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black'>
        {/* Background Image with Opacity */}
        <div
          className='absolute inset-0 bg-cover bg-center opacity-50'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        {/* Black Overlay for High Contrast */}
        <div className='absolute inset-0 bg-black/60'></div>
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
  )
}

export default Hero
