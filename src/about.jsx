const About = () => {
  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  const features = [
    {
      title: 'Expert Practitioners',
      description:
        'Board-certified professionals with years of experience in medical aesthetics.',
    },
    {
      title: 'Latest Technology',
      description:
        'State-of-the-art equipment including Icon® aesthetic system and TempSure™ Envi.',
    },
    {
      title: 'Personalized Care',
      description:
        'Customized treatment plans tailored to your unique beauty goals.',
    },
    {
      title: 'Safe & Trusted',
      description:
        'FDA-approved treatments in a comfortable, welcoming environment.',
    },
  ]

  return (
    <section
      id='about'
      className='py-24 bg-neutral-900 relative overflow-hidden'
    >
      <div className='container mx-auto px-6'>
        {/* Main About Content */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
            <span className='text-neutral-100'>Excellence in </span>
            <span className='text-amber-600'>Medical Aesthetics</span>
          </h2>
          <p className='text-base text-neutral-400 leading-relaxed mb-8'>
            Excel Aesthetics in Miami is a full-service medical aesthetic center
            offering non-surgical treatments to enhance natural beauty. By
            making patients feel comfortable and welcome, we invoke a sense of
            calmness and trust for better overall care.
          </p>
        </div>

        {/* Image + Features Combined */}
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-12 max-w-6xl mx-auto mb-16'>
          {/* Team Image */}
          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
              alt='Excel Aesthetics Team'
              className='w-full h-full min-h-[400px] object-cover border border-neutral-800'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent'></div>
          </div>

          {/* Features List */}
          <div className='space-y-6 flex flex-col justify-center'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='p-6 bg-neutral-950 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300'
              >
                <h4 className='text-xl font-normal mb-2 uppercase tracking-wide text-neutral-100'>
                  {feature.title}
                </h4>
                <p className='text-neutral-500 text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='text-center'>
          <button
            onClick={handleBooking}
            className='bg-amber-600 hover:bg-amber-500 text-neutral-950 px-12 py-4 uppercase tracking-wider text-sm font-semibold transition-colors'
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
