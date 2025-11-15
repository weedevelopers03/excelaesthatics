// 1) Put **real reel URLs** here (open a reel on IG → copy link)
// 2) Optionally add local thumbnail images if you want (or leave null and just use a gradient)
const REELS = [
  {
    url: 'https://www.instagram.com/reel/DRA8XTnjqL6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', // replace
  },
  {
    url: 'https://www.instagram.com/reel/DRADssFDgA2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    url: 'https://www.instagram.com/reel/DQ_upXYEa-f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
]

const InstagramReels = () => {
  return (
    <section id='reels' className='py-16 bg-neutral-950'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-normal uppercase tracking-tight text-neutral-100'>
            Latest <span className='text-orange-200'>Reels</span>
          </h2>
          <p className='text-neutral-400 mt-2'>
            From <span className='text-neutral-100'>@excelaesthetics1</span>
          </p>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {REELS.map((reel) => (
            <a
              key={reel.url}
              href={reel.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-sm overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-orange-200/60 transition-colors'
            >
              <div className='relative aspect-[9/16] overflow-hidden'>
                {reel.thumbnail ? (
                  <div
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${reel.thumbnail})` }}
                  />
                ) : (
                  <div className='w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center'>
                    <div className='w-16 h-16 rounded-full border border-orange-200/60 flex items-center justify-center'>
                      <span className='triangle-right border-l-8 border-l-orange-200 border-y-8 border-y-transparent ml-1' />
                    </div>
                  </div>
                )}

                {/* subtle overlay on hover */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors' />
              </div>
            </a>
          ))}
        </div>

        <div className='text-center mt-10'>
          <a
            href='https://www.instagram.com/excelaesthetics1/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block border border-neutral-700 text-neutral-100 hover:bg-neutral-900 uppercase tracking-wider text-sm px-8 py-3 transition-colors'
          >
            View Full Feed on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramReels
