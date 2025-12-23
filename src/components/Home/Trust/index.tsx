'use client'

const Trust = () => {
    const metrics = [
        { value: '50+', label: 'Projects Delivered', icon: '🚀' },
        { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
        { value: '5+', label: 'Years Experience', icon: '💼' },
        { value: '24/7', label: 'Support Available', icon: '🛟' },
    ]

    return (
        <section className='py-16 bg-section dark:bg-darkmode'>
            <div className='container mx-auto max-w-6xl px-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className='text-center space-y-2'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                            data-aos-duration='1000'
                        >
                            <div className='text-4xl mb-2'>{metric.icon}</div>
                            <div className='text-3xl md:text-4xl font-bold text-primary dark:text-primary'>
                                {metric.value}
                            </div>
                            <div className='text-sm md:text-base text-grey dark:text-white/70 font-medium'>
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trust
