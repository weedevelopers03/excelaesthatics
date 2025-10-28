// src/hero.jsx
import heroBg from 'file:///Users/ismaanwar/Desktop/excelaesthatics/src/images/home-top-sec.png'

const Hero = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden'
    >
      {/* Background image with light opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-60'
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Dark gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black opacity-90'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]'></div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-2xl pt-20'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8'>
            <span className='block text-neutral-100 uppercase tracking-tight'>
              Multi-Award
            </span>
            <span className='block text-neutral-100 uppercase tracking-tight'>
              Winning
            </span>
            <span className='block text-orange-200 uppercase tracking-tight mt-2'>
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
              className='bg-orange-200 text-neutral-950 hover:bg-orange-300 uppercase tracking-wider text-sm px-8 py-4 transition-colors'
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
