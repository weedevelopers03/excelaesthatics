// src/Team.jsx
import { Facebook, Instagram } from 'react-feather'

const staff = [
  {
    name: 'Joseph Durandis',
    title: 'Medical Director',
    image: '/images/team/joseph-durandis.jpg',
  },
  {
    name: 'Yalysher Acevedo',
    title: 'DNP, CRNA, FNP-BC, Aesthetics Specialist',
    image: '/images/team/yalysher-acevedo.jpg',
  },
  {
    name: 'Sindy Franco',
    title: 'Co-founder, CEO, Skin Specialist',
    image: '/images/team/sindy-franco.jpg',
  },
  {
    name: 'Alexandra',
    title: 'APRN, Aesthetic Specialist',
    image: '/images/team/alexandra.jpg',
  },
  {
    name: 'Yapsis Valdes',
    title: 'Aesthetic Specialist',
    image: '/images/team/yapsis-valdes.jpg',
  },
]

const Team = () => {
  return (
    <section className='py-24 bg-neutral-900'>
      <div className='container mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-normal mb-6 uppercase tracking-tight'>
            <span className='text-neutral-100'>Hand picked top </span>
            <span className='text-orange-200'>Specialists</span>
          </h2>
          <p className='text-base text-neutral-400 leading-relaxed'>
            Meet our expert team of aesthetic professionals
          </p>
        </div>

        {/* ✅ Keep 3 per row (original structure) */}
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 max-w-6xl mx-auto'>
          {staff.map((member, index) => (
            <div
              key={index}
              className='bg-neutral-950 border border-neutral-800 hover:border-orange-200 transition-all duration-300 overflow-hidden'
            >
              <div className='p-8'>
                <div className='w-48 h-48 mx-auto mb-6 rounded-full bg-neutral-800 overflow-hidden'>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className='w-full h-full object-cover'
                      loading='lazy'
                    />
                  ) : (
                    <div className='w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800'></div>
                  )}
                </div>

                <h3 className='text-2xl font-normal mb-2 uppercase tracking-wide text-neutral-100 text-center'>
                  {member.name}
                </h3>
                <p className='text-neutral-500 text-sm text-center mb-6'>
                  {member.title || 'Aesthetic Specialist'}
                </p>

                <div className='flex justify-center items-center space-x-4'>
                  <button
                    type='button'
                    onClick={() =>
                      window.open(
                        'https://instagram.com/excelaesthetics',
                        '_blank'
                      )
                    }
                    className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-orange-300 hover:text-neutral-950 flex items-center justify-center transition-all text-orange-200'
                    aria-label='Instagram'
                  >
                    <Instagram className='w-4 h-4' />
                  </button>
                  <button
                    type='button'
                    onClick={() =>
                      window.open(
                        'https://facebook.com/excelaesthetics',
                        '_blank'
                      )
                    }
                    className='w-10 h-10 rounded-full bg-amber-600/10 hover:bg-orange-300 hover:text-neutral-950 flex items-center justify-center transition-all text-orange-200'
                    aria-label='Facebook'
                  >
                    <Facebook className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
