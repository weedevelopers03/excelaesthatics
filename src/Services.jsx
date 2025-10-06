import { useState } from 'react'

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(6)

  const allServices = [
    {
      name: 'Wood Therapy',
      price: 'US$100.00+',
      duration: '30 mins+',
      description:
        'Embark on a journey of natural healing and body sculpting with our exclusive Wood Therapy service...',
    },
    {
      name: 'Weightloss Packages',
      price: 'US$50.00+',
      duration: '30 mins+',
      description:
        'Indulge in our exclusive Weightloss Packages tailored to meet your unique needs.',
    },
    {
      name: 'Virtual Consult',
      price: 'US$75.00',
      duration: '30 mins',
      description:
        'Unlock the power of personalized advice with our virtual consult service!',
    },
    {
      name: 'Ultrasound Lymphatic Massages',
      price: 'US$100.00',
      duration: '30 mins',
      description: 'Professional lymphatic massage treatment.',
    },
    {
      name: 'Tirzepatide Injections',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Embark on a journey to better health with our Tirzepatide Injection service.',
    },
    {
      name: 'Three For Me',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'ThreeForMe is a laser treatment that addresses multiple key skin concernsâ€"wrinkles, sun damage...',
    },
    {
      name: 'TempSure Vitalia',
      price: 'US$400.00+',
      duration: '30 mins',
      description:
        'Non-invasive, non-hormonal and chemical-free solution for skin tightening.',
    },
    {
      name: 'Smooth & PDO Threads',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Looking to achieve a more youthful appearance? Book PDO Threads service...',
    },
    {
      name: 'Skinny Shot',
      price: 'US$35.00+',
      duration: '15 mins',
      description:
        'Boost your fat loss! This powerful shot accelerates fat metabolism.',
    },
    {
      name: 'Skin Tightening/Body Contouring',
      price: 'Price Varies',
      duration: '15 mins+',
      description: 'TempSureâ„¢ Envi body contouring treatment.',
    },
    {
      name: 'Skin Tag Removal',
      price: 'US$100.00',
      duration: '40 mins',
      description:
        'Say goodbye to skin tags with effective and painless removal service.',
    },
    {
      name: 'Semaglutide Injections',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Experience personalized care with our Semaglutide Injection service.',
    },
    {
      name: 'Salmon DNA/PDRN',
      price: 'US$200.00+',
      duration: '30 mins+',
      description:
        'Professional Salmon DNA/PDRN treatment for skin regeneration.',
    },
    {
      name: 'Roller Wave Treatment/Endosphere',
      price: 'US$100.00+',
      duration: '30 mins',
      description:
        'Smooth, sculpt and define with advanced Roller Wave Treatment!',
    },
    {
      name: 'Reta Triple G Weight Loss',
      price: 'US$75.00+',
      duration: '30 mins',
      description:
        'Peptide designed to enhance weight loss by regulating appetite.',
    },
    {
      name: 'PRX - No-Peel Glow Facial',
      price: 'US$300.00+',
      duration: '30 mins',
      description: 'No-peel treatment that stimulates collagen and elastin.',
    },
    {
      name: 'Powder Brows',
      price: 'Price varies',
      duration: '1 hr 45 mins+',
      description: 'Cosmetic semi-permanent powder brow tattooing.',
    },
    {
      name: 'Platelet-Rich Plasma',
      price: 'US$150.00+',
      duration: '30 mins',
      description: 'PRP therapy medical treatment for skin rejuvenation.',
    },
    {
      name: 'Peptide Therapy',
      price: 'US$130.00+',
      duration: '30 mins',
      description:
        'Designed to enhance recovery, support wellness and optimize body goals.',
    },
    {
      name: 'Nano Brows Initial Session',
      price: 'US$500.00',
      duration: '2 hrs',
      description:
        'Semi-permanent cosmetic procedure for natural-looking brows.',
    },
    {
      name: 'NAD+ Therapy',
      price: 'US$275.00+',
      duration: '30 mins',
      description: 'NAD and NAD+ in Energy Production and anti-aging.',
    },
    {
      name: 'Microneedling',
      price: 'US$50.00+',
      duration: '15 mins+',
      description:
        'Fine needle application into skin for rejuvenation purposes.',
    },
    {
      name: 'Microinfusion Facial',
      price: 'US$350.00+',
      duration: '30 mins',
      description:
        'Luxurious treatment with ultra-fine needles delivering customized blend.',
    },
    {
      name: 'Mesotherapy',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Experience rejuvenating benefits with personalized treatment.',
    },
    {
      name: 'Lymphatic Drainage Massage',
      price: 'US$110.00+',
      duration: '30 mins',
      description: 'Professional lymphatic drainage massage service.',
    },
    {
      name: 'Liquid Lipo Injections',
      price: 'Price varies',
      duration: '30 mins',
      description: 'Lipo-reducing solution with 11 active ingredients.',
    },
    {
      name: 'Lip Blushing',
      price: 'US$50.00+',
      duration: '30 mins+',
      description: 'Semi-permanent cosmetic tattooing procedure for lips.',
    },
    {
      name: 'Letybo',
      price: 'US$11.00',
      duration: '30 mins',
      description: 'Korean-made, FDA-approved botulinum toxin treatment.',
    },
    {
      name: 'LED Light Therapy',
      price: 'US$50.00',
      duration: '30 mins',
      description: "Non-invasive treatment that enters the skin's layers.",
    },
    {
      name: 'Lash Lift',
      price: 'US$110.00',
      duration: '1 hr',
      description: 'Ultimate transformation enhancing your natural lashes.',
    },
    {
      name: 'Lash Extensions',
      price: 'US$110.00+',
      duration: '2 hrs+',
      description: 'Expertly applied eyelash extensions.',
    },
    {
      name: 'Laser IPL/Fractional',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Icon aesthetic system versatile beauty tool.',
    },
    {
      name: 'Laser Hair Removal',
      price: 'Based on 8 sessions',
      duration: '10 mins+',
      description: 'Permanent solution to unwanted hair.',
    },
    {
      name: 'L-Carnite Shots',
      price: 'US$30.00+',
      duration: '30 mins',
      description: "Amino acid derivative for body's energy production.",
    },
    {
      name: 'IV Therapy',
      price: 'US$99.00+',
      duration: '30 mins+',
      description: "Myers' Cocktail IV hydration package - best-selling!",
    },
    {
      name: 'Intimate Whitening',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Professional-grade intimate whitening treatments.',
    },
    {
      name: 'In-Person Consult',
      price: 'US$75.00',
      duration: '30 mins',
      description: 'Initial consult to create customized package.',
    },
    {
      name: 'Hylanex/Filler Reversal',
      price: 'US$250.00',
      duration: '30 mins',
      description: 'Safe and effective filler reversal service.',
    },
    {
      name: 'Hydrocortisone Injection',
      price: 'US$150.00',
      duration: '15 mins',
      description: 'Professional hydrocortisone injections for keloids.',
    },
    {
      name: 'Hair Restoration',
      price: 'US$50.00+',
      duration: '20 mins+',
      description: 'PRP therapy for hair loss - minimally invasive treatment.',
    },
    {
      name: 'Fillers/Injectables',
      price: 'US$75.00+',
      duration: '30 mins+',
      description: 'Cosmetic injections to enhance your beauty.',
    },
    {
      name: 'Facials',
      price: 'US$15.00+',
      duration: '5 mins+',
      description: 'Rejuvenating facial experience for refreshed skin.',
    },
    {
      name: 'Endolift/Endolaser',
      price: 'Price varies',
      duration: '30 mins+',
      description: 'Non-invasive treatment for skin tightening.',
    },
    {
      name: 'Cellulite Reduction',
      price: 'US$90.00+',
      duration: '30 mins',
      description: 'TempSure Envi radiofrequency energy to tighten skin.',
    },
    {
      name: 'Brows',
      price: 'US$45.00+',
      duration: '30 mins+',
      description: 'Expert brow shaping service!',
    },
    {
      name: 'Brow Lamination Package',
      price: 'US$120.00',
      duration: '30 mins',
      description: 'Personalized shaping + tint + deep conditioning.',
    },
    {
      name: 'Brow Design + Wax + Tint',
      price: 'US$60.00',
      duration: '30 mins',
      description: 'Complete brow design service package.',
    },
    {
      name: 'Botox',
      price: 'Price varies',
      duration: '15 mins+',
      description: 'Rediscover your youthful glow with Botox treatment.',
    },
    {
      name: 'Biorepeel Rose',
      price: 'US$50.00+',
      duration: '30 mins',
      description: 'Designed to lighten pigmentation in intimate areas.',
    },
    {
      name: 'Biorepeel Gold',
      price: 'US$50.00+',
      duration: '30 mins',
      description: 'Luxurious skin rejuvenation experience - top-tier service.',
    },
    {
      name: 'BioRepeel Blue',
      price: 'US$50.00+',
      duration: '30 mins+',
      description: 'Safe and natural skincare service.',
    },
    {
      name: 'B12 SHOT',
      price: 'Price varies',
      duration: '10 mins+',
      description: 'Revitalize your body and mind with B12 Shot.',
    },
  ]

  const handleBooking = () => {
    window.open('https://excelaesthetics.square.site/', '_blank')
  }

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6)
  }

  return (
    <section id='services' className='py-24 bg-neutral-950'>
      <div className='container mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
            <span className='text-neutral-100'>Our Premium </span>
            <span className='text-amber-600'>Services</span>
          </h2>
          <p className='text-base text-neutral-400 leading-relaxed mb-8'>
            Discover our comprehensive range of non-surgical aesthetic
            treatments designed to enhance your natural beauty.
          </p>
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 max-w-7xl mx-auto'>
          {allServices.slice(0, visibleServices).map((service, index) => (
            <div
              key={index}
              className='group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-600/30 transition-all duration-300 p-6'
            >
              <h3 className='text-xl font-normal mb-3 uppercase tracking-wide text-neutral-100'>
                {service.name}
              </h3>
              <p className='text-neutral-400 mb-4 leading-relaxed text-sm line-clamp-2'>
                {service.description}
              </p>
              <div className='flex justify-between items-center text-sm'>
                <button
                  onClick={handleBooking}
                  className='text-amber-600 hover:text-amber-500 uppercase tracking-wider font-semibold transition-colors'
                >
                  Book Now
                </button>
                <div className='text-neutral-500'>
                  <span className='block'>{service.price}</span>
                  <span className='text-xs'>{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleServices < allServices.length && (
          <div className='text-center mt-12'>
            <button
              onClick={loadMoreServices}
              className='bg-amber-600 text-neutral-950 hover:bg-amber-500 uppercase tracking-wider text-sm px-12 py-4 transition-colors font-semibold'
            >
              View More Services
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
