import { useEffect } from 'react'
import creditImg from './images/credit.webp'

const PaymentPlans = () => {
  // 1) Load Cherry widget exactly as their snippet
  useEffect(() => {
    if (document.getElementById('_hw')) {
      // script already added (React StrictMode / route re-entry)
      return
    }

    ;(function (w, d, s, o, f, js, fjs) {
      w[o] =
        w[o] ||
        function () {
          ;(w[o].q = w[o].q || []).push(arguments)
        }
      js = d.createElement(s)
      fjs = d.getElementsByTagName(s)[0]
      js.id = o
      js.src = 'https://files.withcherry.com/widgets/widget.js'
      js.async = 1
      fjs.parentNode.insertBefore(js, fjs)
    })(window, document, 'script', '_hw')

    window._hw(
      'init',
      {
        debug: false,
        variables: {
          slug: 'excelaestheticsmiami',
          name: 'Excel Aesthetics',
        },
        styles: {
          primaryColor: '#F3BA64',
          secondaryColor: '#FFFAF1',
          fontFamily: 'Alice',
        },
      },
      ['all', 'hero', 'howitworks', 'testimony', 'faq', 'calculator']
    )
  }, [])

  // 2) Suppress ONLY the generic cross-origin "Script error." in dev
  useEffect(() => {
    const handler = (event) => {
      // Cherry’s cross-origin errors show up like this
      if (event.message === 'Script error.' && !event.filename) {
        // prevent React dev overlay from triggering
        event.preventDefault()
        return false
      }
      // let all other errors behave normally
      return undefined
    }

    window.addEventListener('error', handler)

    return () => {
      window.removeEventListener('error', handler)
    }
  }, [])

  return (
    <section className='pt-32 pb-24 bg-neutral-950 text-neutral-100 min-h-screen'>
      <div className='container mx-auto px-6'>
        {/* CareCredit Banner */}
        <div className='w-full sm:w-4/5 mb-10 m-auto'>
          <div className='rounded-xl overflow-hidden flex-col items-center'>
            <div className='w-full bg-gradient-to-r from-[#0A7B6A] to-[#0E5C57] py-12 px-6 md:px-16 flex flex-row sm:flex-col items-center gap-8 md:gap-12'>
              {/* Local Image */}
              <img
                src={creditImg}
                alt='CareCredit'
                className='w-1/4 sm:w-64 rounded-lg shadow-xl'
              />

              {/* Text */}
              <h2 className='text-white text-4xl sm:text-2xl md:text-4xl font-light text-center sm:text-left leading-snug'>
                Now accepting CareCredit for your convenience!
              </h2>
            </div>
          </div>
        </div>

        <div className='bg-neutral-900 rounded-md md:rounded-lg shadow-lg p-4 md:p-8 sm:p-0'>
          {/* Cherry fills this div with its own UI */}
          <div id='all' className='bg-neutral-900 rounded-md overflow-hidden' />
        </div>
      </div>
    </section>
  )
}

export default PaymentPlans
