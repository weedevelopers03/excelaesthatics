import { useState } from 'react'

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(6)

  const allServices = [
    // Consults
    {
      name: 'Virtual Consult',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Meet online to discuss goals, concerns, and the best treatment plan for you.',
    },
    {
      name: 'In-Person Consult',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Face to face evaluation plus a personalized plan that fits your goals and timeline.',
    },

    // Weight loss and injections
    {
      name: 'Weightloss Packages',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Structured medical weight management with coaching and progress checks.',
    },
    {
      name: 'Semaglutide Injections',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Once weekly GLP-1 support that reduces appetite and helps control cravings.',
    },
    {
      name: 'Tirzepatide Injections',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Dual agonist medication for advanced appetite control and metabolic support.',
    },
    {
      name: 'Beta Peptide Weight Loss Program',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Peptide based program that supports fat loss, energy, and metabolism.',
    },

    // Neurotoxin and fillers
    {
      name: 'Botox',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Softens lines on the forehead, between brows, and around the eyes for a smoother look.',
    },
    {
      name: 'Letybo',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Modern neurotoxin option to relax expression lines with natural results.',
    },
    {
      name: 'Fillers/Injectables',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Add volume and contour to lips, cheeks, jawline, and more with premium fillers.',
    },
    {
      name: 'Hylanex/Filler Reversal',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Dissolves unwanted filler safely and precisely for a reset or correction.',
    },

    // Skin and rejuvenation
    {
      name: 'Chemical Peels',
      price: 'Price varies',
      duration: '30–45 mins',
      description:
        'Target dullness, acne, and uneven tone for brighter and smoother skin.',
    },
    {
      name: 'PRX - No-Peel Glow Facial',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Biostimulatory facial that boosts radiance without flaking or downtime.',
    },
    {
      name: 'Microneedling',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Stimulates collagen to improve texture, pores, and acne scars.',
    },
    {
      name: 'RF Microneedling',
      price: 'Price varies',
      duration: '60 mins',
      description:
        'Microneedling with radiofrequency for firmer skin and refined texture.',
    },
    {
      name: 'PRP with Microneedling',
      price: 'Price varies',
      duration: '60 mins',
      description:
        'Combines your platelet rich plasma with microneedling for enhanced healing.',
    },
    {
      name: 'Mesotherapy',
      price: 'Price varies',
      duration: '30–45 mins',
      description:
        'Micro injections of vitamins and actives to hydrate and refresh the skin.',
    },
    {
      name: 'Peptide Therapy',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Peptide formulations that support skin health, recovery, and performance.',
    },
    {
      name: 'Skin Booster / Hydration',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Micro droplet hyaluronic treatment that boosts glow and deep hydration.',
    },
    {
      name: 'MADD Therapy',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Targeted therapy designed to calm irritation and support barrier recovery.',
    },
    {
      name: 'LED Light Therapy',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Red and blue light options to calm redness, improve acne, and support healing.',
    },
    {
      name: 'Radiofrequency',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Tightens skin and improves laxity using controlled RF heat.',
    },
    {
      name: 'Three For Me',
      price: 'Price varies',
      duration: '60 mins',
      description:
        'A two step laser approach that addresses tone, texture, and fine lines.',
    },
    {
      name: 'Facials',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Customized clinical facials for deep cleansing, exfoliation, and glow.',
    },

    // Laser and devices
    {
      name: 'Laser Hair Removal',
      price: 'Price varies',
      duration: '15–60 mins',
      description:
        'Permanent hair reduction for face and body with advanced laser platforms.',
    },
    {
      name: 'Laser IPL/Fractional',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Treats sun damage, redness, and texture for clearer, more even skin.',
    },
    {
      name: 'Endolift/Endolaser',
      price: 'Price varies',
      duration: '60 mins',
      description:
        'Minimally invasive laser tightening for contour and skin firmness.',
    },
    {
      name: 'TempSure Vitalia',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Radiofrequency treatment for intimate wellness and tissue rejuvenation.',
    },
    {
      name: 'Roller Wave Treatment/Endosphere',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Mechanical microvibration therapy to smooth cellulite and improve circulation.',
    },

    // Body and contouring
    {
      name: 'Skin Tightening/Body Contouring',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Device based tightening and shaping for abdomen, arms, thighs, and more.',
    },
    {
      name: 'Cellulite Reduction',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Targets dimpling and texture for a smoother body silhouette.',
    },
    {
      name: 'Liquid Lipo Injections',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Injection lipolysis to reduce small pockets of stubborn fat.',
    },
    {
      name: 'Wood Therapy',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Manual contouring technique that promotes circulation and smoother shape.',
    },

    // Brows, lashes, lips
    {
      name: 'Brow Design + Wax + Tint',
      price: 'Price varies',
      duration: '45 mins',
      description: 'Shaping, waxing, and tinting for fuller and defined brows.',
    },
    {
      name: 'Brow Lamination Package',
      price: 'Price varies',
      duration: '60 mins',
      description: 'Sleek, lifted brows with long lasting hold and definition.',
    },
    {
      name: 'Brows',
      price: 'Price varies',
      duration: '30–60 mins',
      description:
        'Menu of brow services customized to your desired shape and shade.',
    },
    {
      name: 'Lash Lift',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Natural lash curl and lift that opens the eyes and lasts for weeks.',
    },
    {
      name: 'Lash Extensions',
      price: 'Price varies',
      duration: '90–120 mins',
      description:
        'Classic, hybrid, or volume sets for fuller and longer looking lashes.',
    },
    {
      name: 'Lip Blushing',
      price: 'Price varies',
      duration: '120–150 mins',
      description:
        'Semi permanent lip tint that defines shape and enhances natural color.',
    },

    // Intimate and specialty
    {
      name: 'Intimate Whitening',
      price: 'Price varies',
      duration: '30–45 mins',
      description:
        'Brightens intimate areas safely with professional grade formulas.',
    },
    {
      name: 'Post-Procedure Injection',
      price: 'Price varies',
      duration: '15 mins',
      description:
        'Comfort support after treatment as recommended by your provider.',
    },
    {
      name: 'Skin Tag Removal',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Quick removal of benign skin tags in a clean clinical setting.',
    },

    // Wellness, IV and shots
    {
      name: 'IV Therapy',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Hydration and vitamins delivered intravenously for fast replenishment.',
    },
    {
      name: 'B12 Shot',
      price: 'Price varies',
      duration: '15 mins',
      description: 'Vitamin B12 boost for energy and metabolism support.',
    },

    // Medical
    {
      name: 'Hydrocortisone Injection',
      price: 'Price varies',
      duration: '15 mins',
      description:
        'Steroid injection to calm inflammation from select skin conditions.',
    },

    // Hair
    {
      name: 'Hair Restoration',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Treatments that support regrowth and scalp health for thicker looking hair.',
    },

    // Threads
    {
      name: 'Smooth & PDO Threads',
      price: 'Price varies',
      duration: '45–60 mins',
      description:
        'Lifting or smoothing threads to refine contours and stimulate collagen.',
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
            <span className='text-orange-200'>Services</span>
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
              className='group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-orange-300 transition-all duration-300 p-6'
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
                  className='text-orange-200 hover:text-orange-300 uppercase tracking-wider font-semibold transition-colors'
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
              className='bg-orange-200 text-neutral-950 hover:bg-orange-300 uppercase tracking-wider text-sm px-12 py-4 transition-colors font-semibold'
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
