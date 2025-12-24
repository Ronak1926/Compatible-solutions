'use client'

import Image from 'next/image'

const techIcons: Record<string, JSX.Element> = {
    'Adobe': (
        <Image
            src="/images/svgs/Adobe.svg"
            alt="Adobe logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'Angular': (
        <Image
            src="/images/svgs/Angular.svg"
            alt="Angular logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'Azure': (
        <Image
            src="/images/svgs/Azure.svg"
            alt="Azure logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    'Docker': (
        <Image
            src="/images/svgs/Docker.svg"
            alt="Docker logo"
             width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    'Figma': (
        <Image
            src="/images/svgs/Figma.svg"
            alt="Figma logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'HTML': (
        <Image
            src="/images/svgs/HTML.svg"
            alt="HTML logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'Laravel': (
        <Image
            src="/images/svgs/Laravel.svg"
            alt="Laravel logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    'MongoDB': (
        <Image
            src="/images/svgs/MongoDB.svg"
            alt="MongoDB logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    '.NET': (
        <Image
            src="/images/svgs/Net.svg"
            alt=".NET logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'React': (
        <Image
            src="/images/svgs/React.svg"
            alt="React logo"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
        />
    ),
    'Swift': (
        <Image
            src="/images/svgs/Swift.svg"
            alt="Swift logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    'Vue.js': (
        <Image
            src="/images/svgs/VueJs.svg"
            alt="Vue.js logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
        />
    ),
    'Express.js': (
        <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true">
            <path
                d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L17.708 11.7l5.536 7.322a1.529 1.529 0 01-1.244.566z"
                className="fill-gray-700"
            />
            <path
                d="M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666L.002 11.576zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
                className="fill-gray-700"
            />
        </svg>
    ),
    'Node.js': (
        <svg viewBox="0 0 256 282" className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true">
            <g>
                <path
                    d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.024 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"
                    className="fill-gray-700"
                />
                <path
                    d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"
                    className="fill-emerald-600"
                />
            </g>
        </svg>
    ),
    'Next.js': (
        <Image
            src="/images/documentation/Categories=Nextjs.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"
        />
    ),
    'TypeScript': (
        <Image
            src="/images/documentation/Categories=Typescript.svg"
            alt="TypeScript logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"
        />
    ),
    'Tailwind CSS': (
        <Image
            src="/images/documentation/Categories=Tailwind.svg"
            alt="Tailwind CSS logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"
        />
    ),
}

const TechStack = () => {
    const technologies = [
        { name: 'Adobe', category: 'Design', color: 'bg-red-500' },
        { name: 'Angular', category: 'Frontend', color: 'bg-red-600' },
        { name: 'Azure', category: 'Cloud', color: 'bg-blue-500' },
        { name: 'Docker', category: 'DevOps', color: 'bg-sky-500' },
        { name: 'Figma', category: 'Design', color: 'bg-purple-500' },
        { name: 'HTML', category: 'Markup', color: 'bg-orange-500' },
        { name: 'Laravel', category: 'Backend', color: 'bg-red-500' },
        { name: 'MongoDB', category: 'Database', color: 'bg-green-500' },
        { name: '.NET', category: 'Backend', color: 'bg-indigo-600' },
        { name: 'React', category: 'Frontend', color: 'bg-blue-500' },
        { name: 'Swift', category: 'Mobile', color: 'bg-orange-400' },
        { name: 'Vue.js', category: 'Frontend', color: 'bg-emerald-500' },
        { name: 'Express.js', category: 'Backend', color: 'bg-gray-600' },
        { name: 'Node.js', category: 'Runtime', color: 'bg-green-600' },
    ]

    return (
        <section className='py-20 bg-[#F5F8FF]'>
            <div className='container mx-auto max-w-6xl px-4'>
                {/* Section Header */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2
                        className='text-3xl md:text-4xl font-bold text-[#0F172A] mb-4'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                    >
                        Built with Modern, Scalable Technology
                    </h2>
                    <p
                        className='text-lg text-[#64748B]'
                        data-aos='fade-up'
                        data-aos-delay='100'
                        data-aos-duration='1000'
                    >
                        We leverage cutting-edge technologies to build fast, secure, and maintainable applications that scale with your business
                    </p>
                </div>

                {/* Scrolling Tech Logos */}
                <div
                    className='mt-12 tech-marquee'
                    data-aos='fade-up'
                    data-aos-delay='200'
                    data-aos-duration='1000'
                >
                    <div className='tech-marquee-track py-6'>
                        {technologies.concat(technologies).map((tech, index) => (
                            <div
                                key={index}
                                className='flex items-center min-w-[200px] md:min-w-[260px] mx-10'
                            >
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center justify-center w-20 h-20 md:w-24 md:h-24'>
                                        {techIcons[tech.name] || (
                                            <span className='font-bold text-3xl text-[#0F172A]'>
                                                {tech.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    {![
                                        'Azure',
                                        'Docker',
                                        'Laravel',
                                        'Swift',
                                        'HTML',
                                        'MongoDB',
                                        '.NET',
                                        'Vue.js'
                                    ].includes(tech.name) && (
                                        <span className='text-base md:text-lg font-semibold text-[#0F172A] whitespace-nowrap'>
                                            {tech.name}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
