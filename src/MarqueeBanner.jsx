const MarqueeBanner = () => {
  return (
    <div className='bg-[#000000] py-4 overflow-hidden relative'>
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
  )
}
export default MarqueeBanner
