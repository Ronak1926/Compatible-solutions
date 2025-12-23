'use client'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'MERN & Next.js Experts',
      description:
        'Our team specializes in building modern, scalable web applications using MongoDB, Express.js, React, Node.js, and Next.js — the most powerful stack for web development.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Proven Track Record',
      description:
        'With 50+ successful projects delivered and 98% client satisfaction, we have the experience and expertise to bring your vision to life, on time and within budget.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Modern Development Practices',
      description:
        'We follow industry best practices including clean code architecture, comprehensive testing, CI/CD pipelines, and thorough documentation for maintainable, scalable solutions.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Support',
      description:
        'Our commitment doesn\'t end at launch. We provide 24/7 support, regular updates, and ongoing maintenance to ensure your application runs smoothly and stays up-to-date.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-darklight">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Why Choose Us
          </h2>
          <p
            className="text-lg text-grey dark:text-white/70"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            We're not just developers — we're your technology partners committed to your success
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-section dark:bg-darkmode rounded-xl border border-border dark:border-dark_border hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-midnight_text dark:text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-grey dark:text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
