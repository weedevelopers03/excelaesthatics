const PromotionalBanner = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }
  return (
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
  )
}
export default PromotionalBanner
