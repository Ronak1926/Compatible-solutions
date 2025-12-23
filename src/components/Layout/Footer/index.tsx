'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { servicesData } from '@/app/api/services'

const Footer: FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your newsletter submission logic here
    console.log('Newsletter subscribed')
  }

  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border pt-20 pb-10'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
          {/* Column 1: About Compatible Solutions */}
          <div className='flex flex-col'>
            <h3 className='text-white text-lg font-bold mb-6'>About Compatible Solutions</h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href='/about' className='text-white/60 hover:text-primary transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/privacy-policy' className='text-white/60 hover:text-primary transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-white/60 hover:text-primary transition-colors'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className='flex flex-col'>
            <h3 className='text-white text-lg font-bold mb-6'>Our Services</h3>
            <ul className='flex flex-col gap-4'>
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className='text-white/60 hover:text-primary transition-colors'>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technology */}
          <div className='flex flex-col'>
            <h3 className='text-white text-lg font-bold mb-6'>Technology</h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  React
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Node
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Express
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Nextjs
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  TypeScript
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  JavaScript
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Tailwind CSS
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Roles */}
          <div className='flex flex-col'>
            <h3 className='text-white text-lg font-bold mb-6'>Roles</h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Front-End Developer
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Backend Developer
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  UX Designer
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  DevOps
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Cloud Architect
                </span>
              </li>
              <li>
                <span className='text-white/60 hover:text-primary transition-colors'>
                  Quality Analyst
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-dark_border pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <p className='text-white/60 text-sm'>
              Copyright © 2023 by Compatible Solutions
            </p>
            <span className='text-white/60'>|</span>
            <Link href='/privacy-policy' className='text-white/60 hover:text-primary text-sm transition-colors'>
              Privacy Policy
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            {/* LinkedIn Icon */}
            <Link href='#' className='group'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white/60 group-hover:fill-primary transition-colors">
                <path d="M20.44 20.45H16.89V14.88C16.89 13.55 16.86 11.84 15.03 11.84C13.18 11.84 12.89 13.28 12.89 14.78V20.45H9.34V9H12.75V10.56H12.8C13.27 9.66 14.43 8.71 16.16 8.71C19.75 8.71 20.44 11.08 20.44 14.13V20.45ZM5.34 7.43C4.2 7.43 3.28 6.51 3.28 5.37C3.28 4.23 4.2 3.31 5.34 3.31C6.47 3.31 7.39 4.23 7.39 5.37C7.39 6.51 6.47 7.43 5.34 7.43ZM7.11 20.45H3.56V9H7.11V20.45ZM22.22 0H1.77C0.79 0 0 0.77 0 1.72V22.28C0 23.23 0.79 24 1.77 24H22.22C23.2 24 24 23.23 24 22.28V1.72C24 0.77 23.2 0 22.22 0Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
