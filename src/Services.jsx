import { useState } from 'react'

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(6)

 
  const allServices = [
    // Consults
    {
      name: 'Virtual Consultation',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Unlock the power of personalized advice with our virtual consult service! Say goodbye to long waiting times and hello to convenient, time-saving solutions tailored just for you.',
    },
 
    // Weight loss and injections
    {
      name: 'Ultrasound Lymphatic Massages',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Experience the benefits of ultrasound lymphatic massages, a non-invasive service designed to stimulate lymphatic flow and promote overall wellness. This appointment-based therapy utilizes advanced ultrasound technology to help reduce swelling, improve circulation, and support your body’s natural detoxification process. Book your session today for a personalized approach to revitalizing your health and well-being.',
    },
    {
      name: 'Tirzepatide Injections',
      price: 'Price varies',
      duration: '15–30 mins',
      description:
        'Dual agonist medication for advanced appetite control and metabolic support.',
    },
    {
      name: 'Smooth & PDO Threads',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Looking to achieve a more youthful appearance? Book an appointment for our PDO Threads service, where our skilled professionals will use Mint PDO threads to help tighten and lift your skin, giving you a refreshed and rejuvenated look. Don not wait any longer, schedule your appointment today!',
    },
 
    // Neurotoxin and fillers
    {
      name: 'Skinny Shot',
      price: 'Price varies',
      duration: '15 mins',
      description:
        'Boost your fat loss with our Skinny Shot! This powerful shot accelerates fat metabolism, converts carbs and sugars into energy, and speed up muscle recovery, making it perfect for enhancing your workouts and seeing quicker results. Get leaner and more energized with every session.',
    },
    {
      name: 'Semaglutide Injections',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Experience personalized care with our Semaglutide Injection service, designed to help you manage blood sugar levels and achieve weight management goals.',
    },
    {
      name: 'Salmon DNA/PDRN',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Experience our professional Salmon DNA/PDRN treatment, designed to promote skin regeneration and improve overall skin texture. Utilizing PDRN derived from salmon DNA, this service supports cellular repair and enhances hydration for a revitalized appearance. Book your one-on-one appointment today for a tailored session that prioritizes your skincare needs.',
    },
 
    // Skin and rejuvenation
    {
      name: 'Reta Triple G Weight Loss Program',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Reta GLP 3 is a peptide designed to enhance weight loss by regulating appetite, increasing fat metabolism, and improving energy balance.  GLP-3 helps boost fat oxidation, enhancing the bodys ability to utilize stored fat for energy. This monthly service includes a weekly injection and titration of dosing by our providers guidance.',
    },
    {
      name: 'PRX - No-Peel Glow Facial',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'PRX is a no-peel treatment that stimulate collagen and elastin, improving fine lines, wrinkles, scars, and uneven skin tone, without downtime or peeling. Get firmer, brighter, radiant skin instantly.',
    },
    {
      name: 'Platelet-Rich Plasma',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'PRP therapy is a medical treatment where a person’s blood is drawn, processed through a centrifuge, and then injected or topically placed with micro-needling. When your blood is drawn and centrifuged, it separates the platelet-poor plasma, platelet-rich plasma, and red blood cells. The treatment is combined with Microneedling. Plasma contains cytokines and growth factors that speed up the healing process of soft tissues. Indications include hair loss, uneven skin tone, stretch marks, enlarged pores, and collagen production. The process will then be repeated every 4-6 weeks. The number of sessions varies by patient. Consultation required to discuss treatment packages.',
    },
    {
      name: 'Peptide Therapy',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Peptide Therapy is designed to enhance recovery, support wellness and optimize body goals. These treatments use targeted peptides (short chains of amino acids) that work at a cellular level to improve energy, support tissue and joint repair, boost metabolism, reduce inflammation, stimulate natural growth hormone, and promote anti-aging benefits. Each peptide has specific functions, such as improving sleep quality, aiding fat loss, enhancing muscle development, accelerating healing, and rejuvenating skin.',
    },
    {
      name: 'Microneedling',
      price: 'Price varies',
      duration: '15 mins+',
      description:
        'Microneedling is the application of very fine short needles into the skin for the purposes of rejuvenation. Benefits of using microneedling are increased collagen, stimulate hair growth, reduce cellulite appearance, reduce enlarged pores, improve acne scars, improve texture and skin tone. Prior to your treatment it is recommended to have a facial. Total time includes numbing time.',
    },
    {
      name: 'Microinfusion Facial (AquaGold Custom Cocktail)',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'A luxurious, skin-revitalizing treatment that uses ultra-fine needles to deliver a customized blend of neurotoxin, hyaluronic acid, skin brightening, and vitamins directly into the skin for a radiant, smooth, and refreshed look.',
    },
    {
      name: 'Mesotherapy',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Experience the rejuvenating benefits of mesotherapy with our personalized treatment sessions. Target specific areas with this non-invasive procedure designed to enhance your skin’s natural beauty.',
    },
    {
      name: 'Liquid Lipo Injections',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Is a lipo-reducing and tightening solution formulated with 11 active ingredients that work in the more efficient oxidation of accumulated fat in those who need to lose more than 15 pounds. With its double shaping and toning action, it eliminates adipose tissue and tones the area where you work.',
    },
    {
      name: 'Letybo',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Letybo is a Korean-made, FDA-approved botulinum toxin treatment used to reduce the appearance of dynamic facial wrinkles, such as frown lines, forehead lines, and crow feet. Quick, minimally invasive, and effective, Letybo helps you achieve a smoother, more youthful look with natural results.',
    },
    {
      name: 'L-Carnite Shots',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'L-carnitine is an amino acid derivative that plays a crucial role in the body’s energy production processes. As an injectable supplement, L-carnitine has been employed to support various health conditions, including heart and circulatory issues, as well as to enhance athletic performance. Recently, it has gained prominence for its potential benefits in promoting weight loss and improving overall well-being.',
    },
    {
      name: 'IV Therapy',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'IV hydration package is our best-selling package. Customers rave about the Myers’ Cocktail helping them to alleviate symptoms of numerous illnesses and ailments. The Myers’ Cocktail is a natural boost for your immune system and can give you a burst of energy to stop you from feeling sluggish. This package is what we recommend for everything from hangovers to fatigue to the flu. It can even be used for recovery from an athletic event or chronic illnesses. The blast of vitamins and hydration can help with skin health and aid your weight loss regimen.',
    },
    {
      name: 'In- person Consult',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Initial consult to discuss your needs and create a customized package. Consult pricing will be discounted from the service.',
    },
 
    // Laser and devices
    {
      name: 'Hylanex/ Filler Reversal',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Hylanex filler reversal is a professional service designed to dissolve hyaluronic acid-based dermal fillers safely and effectively. Ideal for individuals seeking to restore their natural look or adjust previous filler treatments, this procedure provides precise and reliable results. Administered by trained professionals, the service ensures comfort and long-lasting outcomes. ',
    },
    {
      name: 'Hydrocortisone Injection',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Our professional and experienced medical team offers hydrocortisone injections for keloids as part of our appointment-based service.',
    },
    {
      name: 'Hormone Replacement Therapy Pellets',
      price: 'Price varies',
      duration: '20 mins+',
      description:
        'Bioidentical Hormone Replacement Therapy (BHRT) using bioidentical pellets offers a natural and effective way to regulate hormone levels. This service provides a personalized approach with long-lasting results, ensuring consistent hormone delivery over time. Book an appointment to discuss your individual needs and experience a tailored solution for optimal wellness.',
    },
    {
      name: 'Hair Restoration',
      price: 'Price varies',
      duration: '20 mins+',
      description:
        'Platelet-rich plasma (PRP) therapy for hair loss is a minimally invasive treatment that uses a person’s own blood to promote hair growth. PRP injections are rich in proteins called growth factors, which may stimulate dormant hair follicles when injected into the scalp, encouraging hair regeneration. Additional methods to enhance hair growth is mesotherapy with vitamins and/or exosomes. ',
    },
    {
      name: 'Fillers/Injectables',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Fillers are a cosmetic injection the team at Excel Aesthetics use to enhance your beauty by improving facial contours and diminishing the appearance of lines and wrinkles. The fillers contain a gel-like substance that adds volume under your skin to help you achieve specific aesthetic goals. The team at Excel Aesthetics may recommend fillers to: Soften lines and creases Plump up thin lips Improve cheeks contours Fill in recessed scars Fix facial deformities Your specialist may also use fillers to add volume under your lids to remove the shadows that make you look tired and worn out. Consultation Required. Pricing based on 1ML. Block time includes numbing time.',
    },
 
    // Body and contouring
    {
      name: 'Facial Balancing',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Facial Balancing is a personalized service designed to enhance facial symmetry and achieve natural, harmonious results. During your appointment, a skilled professional will assess your unique features and recommend tailored solutions to bring balance and proportionality to your appearance. Using advanced techniques, this service focuses on subtle adjustments that complement your natural beauty while maintaining a refreshed and balanced look. Perfect for individuals seeking expert guidance and precise enhancements.',
    },
    {
      name: 'Endolaser Consult',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Endolaser is a non-invasive treatment designed to promote skin tightening and reduce the appearance of wrinkles. This advanced laser-based procedure targets deep layers of the skin to stimulate collagen production, enhancing firmness and elasticity. Ideal for those seeking noticeable results without downtime, Endolaser offers a convenient solution for rejuvenating your appearance. Book your personalized appointment today to experience this innovative service.',
    },
    {
      name: 'Botox',
      price: 'Price varies',
      duration: '15 mins+',
      description:
        'Rediscover your youthful glow with our Botox treatment. Say goodbye to wrinkles and hello to smoother, more radiant skin. Our long-lasting results will have you feeling confident and refreshed. ',
    },
    {
      name: 'Biorepeel Rose',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Biorepeel Rose is specifically designed to lighten pigmentation in intimate areas such as underarms, bikini, inner thighs and buttocks.',
    },
 
    // Brows, lashes, lips
    {
      name: 'Biorepeel Gold',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Indulge in a luxurious skin rejuvenation experience with Biorepeel Gold – a top-tier service designed to revitalize your skin and unlock its natural radiance. Say goodbye to signs of aging as you pamper yourself with the finest natural ingredients.',
    },
    {
      name: 'BioRepeel Blue',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'Experience the transformative power of BioRepeel Blue, a safe and natural skincare service that offers more than just a gentle exfoliation. This innovative treatment is designed to minimize shedding and promote the reconstruction of collagen, leaving your skin with a brightening effect. Whether you are looking to rejuvenate your complexion or enhance your natural beauty, BioRepeel Blue is the perfect choice. ',
    },
    {
      name: 'B12 SHOT',
      price: 'Price varies',
      duration: '10 mins+',
      description:
        'Revitalize your body and mind with our B12 Shot service. Feel a surge of energy as it boosts your natural vitality, while supporting brain health and improving your mood. ',
    },
 
    // Laser & removal treatments
    {
      name: 'Three For Me',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'ThreeForMe is a laser treatment that addresses multiple key skin concerns—wrinkles, sun damage, and uneven tone—in a single, efficient session for smoother, more radiant skin.',
    },
    {
      name: 'Tattoo Removal',
      price: '$100–$300',
      duration: '45 mins',
      description:
        'Our professional laser tattoo removal service offers a safe and effective process tailored to your needs, using advanced laser technology to gradually and safely fade unwanted ink.',
    },
    {
      name: 'Spider Vein Removal',
      price: 'US$65.00+',
      duration: '15 mins',
      description:
        'Sclerotherapy is a non-invasive medical procedure designed to effectively treat varicose and spider veins, enhancing both the look and health of your legs.',
    },
    {
      name: 'Nail Fungal Removal',
      price: 'US$200.00',
      duration: '45 mins',
      description:
        'Our laser nail fungal removal service offers an effective and non-invasive solution for treating fungal infections, utilizing advanced laser technology to target fungus at the source.',
    },
    {
      name: 'Skin Tag Removal',
      price: 'US$100.00',
      duration: '40 mins',
      description:
        'Say goodbye to skin tags with our effective and painless removal service. Book an appointment to discuss your treatment options today.',
    },
    {
      name: 'Laser Hair Removal',
      price: 'Pricing based on 6 sessions',
      duration: '10 mins+',
      description:
        'Laser hair removal is a permanent solution to unwanted hair. The team at Excel Aesthetics uses advanced laser technology for smooth, long-lasting results.',
    },
    {
      name: 'Laser IPL/Fractional',
      price: 'Price varies',
      duration: '30 mins+',
      description:
        'The Icon aesthetic system is a versatile beauty tool equipped with nonablative fractional technology, ideal for improving skin tone, texture, and pigmentation.',
    },
 
    // Body treatments
    {
      name: 'Massage Therapy',
      price: 'US$55.00+',
      duration: '30 mins',
      description:
        'Relax, restore and reset. Our professional massage services are designed to relieve tension, ease stress, and leave you feeling renewed.',
    },
    {
      name: 'Lymphatic Drainage Massage',
      price: 'US$110.00+',
      duration: '30 mins',
      description:
        'Lymphatic Drainage Massage uses gentle, rhythmic techniques to encourage lymph flow, reduce fluid retention, and support your body’s natural detoxification process.',
    },
    {
      name: 'Wood Therapy',
      price: 'US$100.00+',
      duration: '45 mins',
      description:
        'Embark on a journey of natural healing and body sculpting with our exclusive Wood Therapy, using traditional wooden tools to help contour and tone the body.',
    },
    {
      name: 'Body Contouring',
      price: 'US$99.00+',
      duration: '30 mins',
      description:
        'Achieve a more sculpted, toned appearance with our non-invasive body contouring treatments, tailored to help you reach your aesthetic goals.',
    },
    {
      name: 'Roller Wave Treatment/Endosphere',
      price: 'US$100.00+',
      duration: '30 mins',
      description:
        'Smooth, sculpt and define with our advanced Roller Wave Treatment! This non-invasive compression micro-vibration therapy improves circulation and skin texture.',
    },
    {
      name: 'Skin Tightening/Body Contouring',
      price: 'Price varies per section',
      duration: '15 mins+',
      description:
        'TempSure™ Envi uses radiofrequency energy to gently heat tissue beneath the skin, stimulating collagen production for firmer, tighter-looking skin.',
    },
    {
      name: 'Vaginal Rejuvenation',
      price: 'US$400.00+',
      duration: '30 mins',
      description:
        'The TempSure Vitalia treatment is a non-invasive, non-hormonal and chemical-free solution for feminine wellness, using radiofrequency energy for comfort and confidence.',
    },
    {
      name: 'Intimate Whitening Treatments',
      price: 'Price varies',
      duration: '30 mins',
      description:
        'Experience the confidence-boosting results of our professional-grade intimate whitening treatments, designed for gentle and effective brightening.',
    },
    {
      name: 'Carbon Peel',
      price: 'US$200.00',
      duration: '30 mins',
      description:
        'Experience the revitalizing effects of a Carbon Peel, designed to deeply cleanse and rejuvenate your skin while helping minimize the appearance of pores.',
    },
 
    // Injectables & skin boosters
    {
      name: 'Jeuveau',
      price: 'US$12.00',
      duration: '30 mins',
      description:
        'Jeuveau appointments provide a professional solution for reducing the appearance of wrinkles, delivering natural-looking results with minimal downtime.',
    },
    {
      name: 'Daxxify',
      price: 'US$12.00',
      duration: '30 mins',
      description:
        'Daxxify is a peptide-formulated injectable treatment designed to help reduce the appearance of wrinkles and fine lines, with results that last longer than traditional neurotoxins.',
    },
    {
      name: 'Dysport',
      price: 'US$7.00',
      duration: '30 mins',
      description:
        'Dysport is a fast-acting injectable treatment that smooths moderate to severe frown lines for a naturally refreshed appearance.',
    },
    {
      name: 'Skin Boosters',
      price: 'US$199.00+',
      duration: '30 mins',
      description:
        'Skin Boosters deliver deep hydration beneath the surface, improving elasticity, texture, and overall radiance for a healthy, dewy glow.',
    },
    {
      name: 'Dark Circle & Under Eye Rejuvenation (Toskani)',
      price: 'US$250.00+',
      duration: '30 mins',
      description:
        'Our Undereye Contour service is designed to brighten, smooth, and reduce puffiness around the delicate eye area, leaving you looking refreshed and well-rested.',
    },
 
    // Lash, brow & beauty
    {
      name: 'Lash Extensions',
      price: 'US$110.00+',
      duration: '2 hrs',
      description:
        'We specialize in enhancing your natural beauty with our expertly applied eyelash extensions. Say goodbye to daily mascara and hello to effortless, full lashes.',
    },
    {
      name: 'Lip Blushing',
      price: 'US$50.00+',
      duration: '30 mins',
      description:
        'Lip Blushing is a type of semi-permanent cosmetic tattooing procedure achieved by depositing pigment into the lips for a soft, natural tint and defined shape.',
    },
    {
      name: 'Korean Lash Lift & Tint',
      price: 'US$130.00',
      duration: '2 hrs',
      description:
        'The next generation of lash lifting. Our Korean Lash Lift & Tint delivers a beautifully lifted, natural curl with rich, long-lasting color.',
    },
    {
      name: 'Brows',
      price: 'US$45.00+',
      duration: '30 mins',
      description:
        'Get ready to elevate your look with our expert brow shaping service! Achieve a natural, flawless brow that frames and enhances your features.',
    },
    {
      name: 'Powder Brows',
      price: 'Price varies',
      duration: '1 hr 45 mins+',
      description:
        'Powder Brows is a cosmetic semi-permanent makeup technique that creates a soft, powdered brow effect for fuller, more defined arches.',
    },
    {
      name: 'Facials',
      price: 'US$88.00+',
      duration: '1 hr 10 mins+',
      description:
        'Indulge in a rejuvenating facial experience that will leave you feeling refreshed and glowing, customized to your skin’s unique needs.',
    },
 
    // Promotions & packages
    {
      name: 'PDO Thread Promotion',
      price: 'US$1,500.00',
      duration: '40 mins',
      description:
        'Full face PDO Threads.',
    },
    {
      name: 'Event Exclusive Specials',
      price: 'US$450.00+',
      duration: '30 mins',
      description:
        'Exclusive event-only pricing available for 72 hours after the event. Take advantage of limited-time savings on select treatments.',
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
