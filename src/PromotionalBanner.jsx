// src/PromotionalBanner.jsx
import promoBg from './/images/promo.jpg' // same background as Hero

const PromotionalBanner = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  return (
    <section className='relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center md:items-center justify-start md:justify-end overflow-hidden bg-neutral-200 text-left md:text-right sm:text-left px-6 sm:px-10'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-25'
        style={{ backgroundImage: `url(${promoBg})` }}
      ></div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90'></div>

      {/* Content */}
      <div className='relative z-10 max-w-2xl w-full md:mr-12 lg:mr-24'>
        <div className='inline-block mb-4 md:mb-6'>
          <span className='bg-[#d4b896] text-neutral-900 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider'>
            Limited-Time Offer
          </span>
        </div>

        <h2 className='text-xl sm:text-2xl md:text-3xl text-white mb-3 md:mb-4 font-light'>
          Premier Medical Aesthetics Center
        </h2>

        <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight'>
          EXCEL AESTHETICS MIAMI
        </h3>

        <p className='text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 font-light max-w-md'>
          Non-surgical treatments to enhance your natural beauty
        </p>

        <button
          onClick={handleBooking}
          className='bg-orange-200 hover:bg-orange-300 text-neutral-900 px-6 sm:px-8 md:px-10 py-3 md:py-4 uppercase tracking-wider font-semibold text-xs sm:text-sm transition-all'
        >
          Book Free Consultation
        </button>
      </div>
    </section>
  )
}

export default PromotionalBanner
