'use client'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 pb-20 bg-gradient-to-br from-primary/5 via-white to-SkyBlueMist/20 dark:from-darklight dark:via-darkmode dark:to-darklight overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className='container mx-auto max-w-6xl px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>


          {/* Main Headline */}
          <h1
            className='text-midnight_text font-bold dark:text-white text-4xl md:text-6xl md:leading-[1.1]'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            Build Scalable Web Applications That{' '}
            <span className='text-primary'>Drive Business Growth</span>
          </h1>

          {/* Subheadline */}
          <p
            className='text-grey dark:text-white/70 text-lg md:text-xl font-medium max-w-3xl mx-auto'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'
          >
            Full-stack development services for startups, enterprises, and growing businesses using modern MERN stack and Next.js
          </p>

          {/* CTAs */}
          <div
            className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            <Link
              href='#contact'
              className='w-full sm:w-auto py-4 px-8 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-center shadow-lg hover:shadow-xl'
            >
              Start Your Project
            </Link>
            <Link
              href='#portfolio'
              className='w-full sm:w-auto py-4 px-8 bg-white dark:bg-darkmode text-primary dark:text-white border-2 border-primary dark:border-primary rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition duration-300 font-semibold text-center'
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
