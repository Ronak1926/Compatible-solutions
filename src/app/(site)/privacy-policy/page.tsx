import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Compatible Solutions',
    description: 'Privacy Policy for Compatible Solutions',
}

const PrivacyPolicy = () => {
    return (
        <section className='pt-32 pb-20 bg-white dark:bg-darkmode'>
            <div className='container mx-auto max-w-4xl px-4'>
                <h1 className='text-4xl font-bold text-midnight_text dark:text-white mb-8'>
                    Privacy Policy
                </h1>
                <p className='text-grey dark:text-white/60 mb-12'>
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className='prose prose-lg md:prose-xl max-w-none dark:prose-invert 
          prose-headings:text-midnight_text dark:prose-headings:text-white 
          prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-headings:mb-4 prose-headings:mt-8
          prose-p:text-grey dark:prose-p:text-gray-300 prose-p:leading-7 prose-p:mb-4
          prose-li:text-grey dark:prose-li:text-gray-300 prose-li:my-1
          prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
          [&>p]:mb-6'>

                    <p>
                        At Compatible Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul>
                        <li>Fill out a contact form.</li>
                        <li>Subscribe to our newsletter.</li>
                        <li>Request a quote or consultation.</li>
                    </ul>
                    <p>
                        This information may include your name, email address, phone number, and any other details you choose to provide.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Send you updates, newsletters, and marketing materials (if you have opted in).</li>
                        <li>Improve our website and services.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h2>3. Cookies and Tracking Technologies</h2>
                    <p>
                        We may use cookies and similar tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but please note that some features of our site may not function properly.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>

                    <h2>5. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <strong>Compatible Solutions</strong><br />
                        Email: info@compatiblesolutions.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
