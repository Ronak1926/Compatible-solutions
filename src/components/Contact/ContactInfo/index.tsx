import React from 'react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-8 md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='md:pt-32 pt-11 md:pb-28 pb-8'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.865427980607!2d72.6718491750902!3d23.04638431548535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8771895ed8fd%3A0xc2c0f6eb38fe1853!2sHill%20Town%20Square!5e0!3m2!1sen!2sin!4v1733726120000!5m2!1sen!2sin'
              width='1114'
              height='477'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-lg w-full'></iframe>
          </div>
        </div>
        <div className='border-b border-solid border-border dark:border-dark_border'></div>
      </section>
    </>
  )
}

export default ContactInfo
