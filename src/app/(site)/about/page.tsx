import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import Counter from "@/components/Home/Counter";
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
  title: "About Us | Compatible Solutions",
  description: "Learn about our journey, our mission to deliver excellence in MERN & Next.js development, and the values that drive our dedicated engineering teams.",
};

const AboutPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const values = [
    {
      title: "Mission",
      icon: "solar:rocket-2-bold-duotone",
      description: "To cultivate genuine partnerships through transparent communication and align our engineering teams closely with your product goals, ensuring every sprint moves your business forward.",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Vision",
      icon: "solar:eye-bold-duotone",
      description: "To leverage robust skills and forward-thinking perspectives to tackle complex challenges, empowering customers to build scalable, resilient, and future-proof digital products.",
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
      title: "Values",
      icon: "solar:heart-bold-duotone",
      description: "Dedicated to meeting client needs with unwavering determination. We strive for excellence, embrace cutting-edge tech, and prioritize highly skilled resources to serve effectively.",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Culture",
      icon: "solar:users-group-two-rounded-bold-duotone",
      description: "Fostering an open environment that encourages learning, collaboration, and long-term retention. You work with the same high-performing engineers over time, not a revolving door.",
      color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  return (
    <>
      <HeroSub
        title="About Compatible Solutions"
        description="We are a team of passionate engineers, designers, and problem solvers dedicated to building the next generation of digital products."
      />

      <Counter isColorMode={true} />

      {/* Company Story Section */}
      <section className='py-20 bg-white dark:bg-darklight overflow-hidden'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-8' data-aos="fade-right">
              <div>
                <span className='text-sm font-bold tracking-widest uppercase text-primary mb-2 block'>
                  Who We Are
                </span>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-midnight_text dark:text-white leading-tight'>
                  5+ Years of <span className="text-primary">Excellence</span> in Delivery
                </h2>
              </div>

              <div className='space-y-6 text-lg text-grey dark:text-white/70 leading-relaxed'>
                <p>
                  We provide a unique value proposition to businesses as a leading software solutions provider.
                  Our commitment to excellence is backed by a dedicated and skilled full-time team that operates
                  under your complete supervision, ensuring control over quality, workflow, and productivity.
                </p>
                <p>
                  When you partner with Compatible Solutions, you gain access to the latest technologies, exceptional facilities,
                  and a pool of highly experienced resources ready to tackle your most complex challenges.
                </p>
              </div>

              <ul className='space-y-4'>
                {[
                  "24/7 support across projects and time zones",
                  "Deep expertise in MERN & Next.js technologies",
                  "Seamless team integration and management",
                  "Robust risk management and disaster recovery"
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-3 text-midnight_text dark:text-white font-medium'>
                    <Icon icon="solar:check-circle-bold" className="text-primary w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='relative' data-aos="fade-left">
              <Image
                src="/images/blog/blog_7.jpg"
                alt="Our Engineering Culture"
                width={500}
                height={500}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className='py-20 bg-section dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-3xl mx-auto mb-16' data-aos="fade-up">
            <span className='text-sm font-bold tracking-widest uppercase text-primary mb-2 block'>
              Our Core Principles
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6'>
              Driven by Purpose, Guided by Values
            </h2>
            <p className='text-lg text-grey dark:text-white/70'>
              We believe that great software is built by great teams. Our culture is the foundation of everything we do.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {values.map((item, index) => (
              <div
                key={index}
                className='bg-white dark:bg-darklight p-8 rounded-2xl border border-border dark:border-dark_border hover:shadow-xl transition-all duration-300 group'
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={item.icon} width="32" height="32" />
                </div>
                <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
                  {item.title}
                </h3>
                <p className='text-grey dark:text-white/70 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section className='py-20 bg-white dark:bg-darklight'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-3xl mx-auto mb-16' data-aos="fade-up">
            <span className='text-sm font-bold tracking-widest uppercase text-primary mb-2 block'>
              Our Methodology
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6'>
              From Concept to Code
            </h2>
            <p className='text-lg text-grey dark:text-white/70'>
              We follow a proven agile process to ensure your project is delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            {/* Connecting Line (Desktop) */}
            <div className='hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border dark:bg-dark_border -z-0'></div>

            {[
              { title: "Discovery", icon: "solar:magnifer-bold-duotone", desc: "We dive deep into your requirements, understanding your business goals and user needs." },
              { title: "Design", icon: "solar:palette-bold-duotone", desc: "Our designers create intuitive, beautiful interfaces that provide exceptional user experiences." },
              { title: "Development", icon: "solar:code-bold-duotone", desc: "Our engineers build robust, scalable solutions using the latest MERN & Next.js tech." },
              { title: "Launch & Scale", icon: "solar:rocket-bold-duotone", desc: "We deploy your product and provide ongoing support to help you grow and evolve." }
            ].map((step, index) => (
              <div key={index} className='relative z-10 bg-white dark:bg-darklight pt-4' data-aos="fade-up" data-aos-delay={index * 100}>
                <div className='w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30 border-4 border-white dark:border-darklight'>
                  <Icon icon={step.icon} width="28" height="28" />
                </div>
                <h3 className='text-xl font-bold text-midnight_text dark:text-white text-center mb-3'>
                  {step.title}
                </h3>
                <p className='text-center text-grey dark:text-white/70 text-sm leading-relaxed'>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 bg-section dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div data-aos="fade-right">
              <span className='text-sm font-bold tracking-widest uppercase text-primary mb-2 block'>
                Why Choose Us
              </span>
              <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6 leading-tight'>
                We Don't Just Write Code, <br /> We Build <span className="text-primary">Business Solutions</span>
              </h2>
              <p className='text-lg text-grey dark:text-white/70 mb-8'>
                In a crowded market of dev shops, Compatible Solutions stands out by acting as a true strategic partner. We care about your metrics, your users, and your long-term success.
              </p>

              <div className='space-y-6'>
                {[
                  { title: "Transparent Communication", desc: "No jargon, no hiding. You get clear updates, direct access to developers, and honest advice." },
                  { title: "Top 1% Talent", desc: "We hire strictly for problem-solving ability and technical excellence in the JavaScript ecosystem." },
                  { title: "Agile & Adaptive", desc: "We adapt to your changing needs, pivoting quickly without bureaucratic delays." }
                ].map((item, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-primary'>
                      <Icon icon="solar:star-bold-duotone" width="24" height="24" />
                    </div>
                    <div>
                      <h4 className='text-lg font-bold text-midnight_text dark:text-white mb-1'>{item.title}</h4>
                      <p className='text-sm text-grey dark:text-white/70'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative' data-aos="fade-left">
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-4 mt-8'>
                  <div className='bg-white dark:bg-darklight p-6 rounded-2xl shadow-lg border border-border dark:border-dark_border'>
                    <h3 className='text-4xl font-bold text-primary mb-2'>98%</h3>
                    <p className='text-sm text-grey dark:text-white/70'>Client Retention Rate</p>
                  </div>
                  <div className='bg-primary p-6 rounded-2xl shadow-lg text-white'>
                    <h3 className='text-4xl font-bold mb-2'>50+</h3>
                    <p className='text-sm opacity-90'>Enterprise Projects Delivered</p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='bg-midnight_text dark:bg-black p-6 rounded-2xl shadow-lg text-white'>
                    <h3 className='text-4xl font-bold mb-2'>5+</h3>
                    <p className='text-sm opacity-90'>Years of Experience</p>
                  </div>
                  <div className='bg-white dark:bg-darklight p-6 rounded-2xl shadow-lg border border-border dark:border-dark_border'>
                    <h3 className='text-4xl font-bold text-emerald-500 mb-2'>24/7</h3>
                    <p className='text-sm text-grey dark:text-white/70'>Support & Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white dark:bg-darklight border-t border-border dark:border-dark_border'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6'>
            Ready to build something amazing?
          </h2>
          <p className='text-lg text-grey dark:text-white/70 mb-10'>
            Join forces with Compatible Solutions and let's turn your vision into reality with our expert engineering teams.
          </p>
          <a
            href="/contact"
            className='inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-primary/30'
          >
            Start Your Project
            <Icon icon="solar:arrow-right-bold" width="20" height="20" />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
