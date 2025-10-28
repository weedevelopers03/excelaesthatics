const PaymentPlans = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  return (
    <div id='payment-plans' className='min-h-screen bg-neutral-950'>
      {/* Header Section */}
      <section className='relative py-32 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]'></div>

        <div className='container mx-auto px-6 relative z-10 text-center'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8'>
            <span className='block text-neutral-100 uppercase tracking-tight'>
              Flexible
            </span>
            <span className='block text-amber-600 uppercase tracking-tight mt-2'>
              Payment Plans
            </span>
          </h1>

          <p className='text-base md:text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed'>
            We partner with CareCredit and Cherry to offer convenient financing
            options for your aesthetic treatments.
          </p>
        </div>
      </section>

      {/* CareCredit Section */}
      <section className='py-16 bg-teal-700'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto'>
            <div className='bg-white p-8 rounded-lg'>
              <img
                src='https://www.carecredit.com/assets/common/header-logo-mobile-c5fee5f6ce623bee76b8d14d5c8b0dbaeb4bdec92f46c1e1f0a5b2f71efd2d11.svg'
                alt='CareCredit Logo'
                className='h-16 w-auto'
              />
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-3xl md:text-4xl font-normal text-white mb-4'>
                Now accepting CareCredit for your convenience!
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Cherry Payment Options */}
      <section className='py-24 bg-neutral-950'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
              <span className='text-neutral-100'>Cherry </span>
              <span className='text-amber-600'>Payment Plans</span>
            </h2>
            <p className='text-base text-neutral-400 leading-relaxed mb-8'>
              Treat now, pay later with Cherry's flexible financing options.
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-1 gap-8 max-w-5xl mx-auto mb-16'>
            {/* Cherry Benefits */}
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-6 h-6 text-amber-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-neutral-100 mb-2'>
                    No hard credit checks, ever
                  </h3>
                  <p className='text-neutral-400 text-sm'>
                    Apply without impacting your credit score.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-6 h-6 text-amber-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-neutral-100 mb-2'>
                    0% APR options available
                  </h3>
                  <p className='text-neutral-400 text-sm'>
                    Choose from flexible payment plans with competitive rates.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-6 h-6 text-amber-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-neutral-100 mb-2'>
                    Up to $60,000 approvals
                  </h3>
                  <p className='text-neutral-400 text-sm'>
                    Get the treatment you need with generous approval amounts.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-6 h-6 text-amber-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-normal text-neutral-100 mb-2'>
                    No hidden fees
                  </h3>
                  <p className='text-neutral-400 text-sm'>
                    Transparent pricing with no surprise charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Cherry Image */}
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
                alt='Cherry Payment Plans'
                className='w-full h-full min-h-[400px] object-cover border border-neutral-800'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Payment Plans */}
      <section className='py-24 bg-neutral-900'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
              <span className='text-neutral-100'>Why Choose </span>
              <span className='text-amber-600'>Our Payment Plans</span>
            </h2>
            <p className='text-base text-neutral-400 leading-relaxed'>
              We believe everyone deserves access to quality aesthetic
              treatments. Our flexible payment options make it easier than ever
              to achieve your beauty goals.
            </p>
          </div>

          <div className='grid grid-cols-3 lg:grid-cols-1 gap-8 max-w-6xl mx-auto'>
            <div className='p-8 bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300'>
              <h3 className='text-xl font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                Quick Approval
              </h3>
              <p className='text-neutral-400 text-sm leading-relaxed'>
                Get approved in 60 seconds with our streamlined application
                process.
              </p>
            </div>

            <div className='p-8 bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300'>
              <h3 className='text-xl font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                Flexible Terms
              </h3>
              <p className='text-neutral-400 text-sm leading-relaxed'>
                Choose payment plans that fit your budget and lifestyle.
              </p>
            </div>

            <div className='p-8 bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300'>
              <h3 className='text-xl font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                Safe & Secure
              </h3>
              <p className='text-neutral-400 text-sm leading-relaxed'>
                Your information is protected with bank-level security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-neutral-950'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-normal mb-6 uppercase tracking-tight text-neutral-100'>
            Ready to Get Started?
          </h2>
          <p className='text-neutral-400 mb-8 max-w-2xl mx-auto'>
            Book your free consultation today and learn more about our payment
            options.
          </p>
          <button
            onClick={handleBooking}
            className='bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-sm px-12 py-4 transition-colors font-semibold'
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default PaymentPlans
