// src/PaymentPlans.jsx
import { useEffect } from 'react'

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
    <section className='py-24 bg-neutral-950 text-neutral-100 min-h-screen'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl font-normal tracking-tight uppercase'>
            Flexible Payment Plans
          </h1>
          <p className='mt-3 text-neutral-400 text-sm md:text-base'>
            Make your treatments more affordable with Cherry & CareCredit.
          </p>
        </div>

        <div className='bg-neutral-900 rounded-md md:rounded-lg shadow-lg p-4 md:p-8'>
          {/* Cherry fills this div with its own UI */}
          <div id='all' className='bg-neutral-900 rounded-md overflow-hidden' />
        </div>
      </div>
    </section>
  )
}

export default PaymentPlans
