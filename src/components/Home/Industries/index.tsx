'use client'

const Industries = () => {
    const industries = [
    {
      name: 'FinTech & Banking',
      description:
        'Secure payment systems, digital wallets, compliance-driven platforms, and modern financial infrastructure.',
    },
    {
      name: 'Healthcare & Telemedicine',
      description:
        'HIPAA-ready patient portals, telehealth platforms, and healthcare management systems.',
    },
    {
      name: 'E-commerce & Retail',
      description:
        'Scalable online stores, inventory systems, and customer engagement platforms.',
    },
    {
      name: 'Education & E-learning',
      description:
        'Learning management systems, virtual classrooms, and modern education platforms.',
    },
    {
      name: 'SaaS & Technology',
      description:
        'Cloud-native SaaS products, internal tools, APIs, and enterprise applications.',
    },
    {
      name: 'Real Estate & PropTech',
      description:
        'Property platforms, virtual tours, CRM systems, and real estate analytics tools.',
    },
  ]

    return (
        <section className='py-20 bg-white dark:bg-darklight'>
            <div className='container mx-auto max-w-6xl px-4'>
                {/* Section Header */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2
                        className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        Industries We Serve
                    </h2>
                    <p
                        className='text-lg text-grey dark:text-white/70'
                        data-aos='fade-up'
                        data-aos-delay='100'
                        data-aos-duration='1000'
                    >
                        Deep domain expertise across multiple industries to deliver solutions that understand your business
                    </p>
                </div>

                {/* Industries Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className='group p-6 bg-section dark:bg-darkmode rounded-xl border border-border dark:border-dark_border hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                            data-aos='fade-up'
                            data-aos-delay={index * 50}
                            data-aos-duration='1000'
                        >
                            <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-2'>
                                {industry.name}
                            </h3>
                            <p className='text-grey dark:text-white/70 text-sm'>
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industries
