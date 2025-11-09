import { useEffect } from 'react'

const PaymentPlans = () => {
  useEffect(() => {
    // Check if the script has already been added to prevent adding it multiple times
    if (document.getElementById('cherry-widget-script')) {
      return // Exit if the script is already added
    }

    // Dynamically load the Cherry Widget script
    const script = document.createElement('script')
    script.src = 'https://files.withcherry.com/widgets/widget.js'
    script.id = 'cherry-widget-script' // Add id to prevent duplicate script loading
    script.async = true

    // Once the script is loaded, initialize the widget
    script.onload = () => {
      if (window._hw) {
        try {
          window._hw(
            'init',
            {
              debug: false,
              variables: {
                slug: 'excelaestheticsmiami',
                name: 'Excel Aesthetics',
              },
              styles: {
                primaryColor: '#F3BA64', // Customize colors as needed
                secondaryColor: '#FFFAF1',
                fontFamily: 'Alice',
              },
            },
            ['all', 'hero', 'howitworks', 'testimony', 'faq', 'calculator']
          )
        } catch (error) {
          console.error('Error initializing Cherry Widget:', error)
        }
      }
    }

    // Handle any script loading errors
    script.onerror = (error) => {
      console.error('Error loading the Cherry Widget script:', error)
    }

    // Append the script to the body
    document.body.appendChild(script)

    // Clean up the script when the component is unmounted
    return () => {
      const script = document.getElementById('cherry-widget-script')
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className='payment-plans-page bg-neutral-950 text-neutral-100 py-16'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-white'>Payment Plans</h1>
          <p className='text-lg text-neutral-400 mt-4'>
            Flexible payment options to make your treatments more affordable.
          </p>
        </div>

        {/* Cherry Widget Section */}
        <div className='bg-neutral-900 rounded-lg shadow-lg p-6'>
          <div className='text-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/1/1e/CareCredit_logo.jpg'
              alt='CareCredit'
              className='mx-auto mb-6'
            />
            <h2 className='text-2xl font-semibold text-neutral-950'>
              Now accepting CareCredit for your convenience!
            </h2>
            <p className='mt-2 text-lg text-neutral-600'>
              Get the treatment you need, with the payment plan that works for
              you.
            </p>
          </div>

          {/* Cherry Widget Embed Container */}
          <div
            id='widget-all'
            className='p-6 bg-neutral-100 rounded-lg shadow-md mt-8'
          ></div>
        </div>

        {/* Additional Information Section */}
        <div className='mt-12 text-center'>
          <h3 className='text-2xl font-semibold text-white'>
            How Cherry Works
          </h3>
          <div className='text-lg text-neutral-400 mt-4'>
            <p>
              Cherry makes it easy to break your payments into smaller,
              manageable installments.
            </p>
            <p>Simply follow these steps:</p>
            <ul className='list-disc list-inside mt-4 text-neutral-300'>
              <li>
                See if you qualify - It only takes 60 seconds to complete the
                application.
              </li>
              <li>Get Care - Use your approval to pay for your treatments.</li>
              <li>
                Pay Over Time - Choose a plan that fits your needs with 0% APR
                options.
              </li>
            </ul>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className='mt-16 bg-neutral-900 text-neutral-100 p-8 rounded-lg'>
          <h3 className='text-2xl font-semibold text-center'>
            What Our Customers Say
          </h3>
          <div className='flex flex-wrap justify-center gap-8 mt-8'>
            <div className='w-80 text-center p-4 bg-neutral-800 rounded-lg'>
              <p className='text-lg italic text-neutral-300'>
                "The application was quick and easy! I can now split my payments
                into manageable monthly amounts."
              </p>
              <p className='mt-4 text-orange-200'>Bryana</p>
            </div>
            <div className='w-80 text-center p-4 bg-neutral-800 rounded-lg'>
              <p className='text-lg italic text-neutral-300'>
                "Cherry was really easy to use, and I was approved instantly!
                The whole process was seamless."
              </p>
              <p className='mt-4 text-orange-200'>Alex</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-white'>Questions?</h3>
          <p className='text-lg text-neutral-400 mt-4'>
            <a
              href='https://files.withcherry.com/faqs'
              className='text-orange-200 hover:text-orange-300'
            >
              View all FAQs
            </a>{' '}
            or visit the{' '}
            <a
              href='https://files.withcherry.com/help-center'
              className='text-orange-200 hover:text-orange-300'
            >
              help center
            </a>{' '}
            for more details.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlans
